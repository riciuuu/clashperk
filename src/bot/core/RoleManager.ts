import { Collections } from '@clashperk/node';
import { Clan, Player } from 'clashofclans.js';
import { Guild, GuildMember } from 'discord.js';
import Client from '../struct/Client';
import Queue from '../struct/Queue';

const ActionType: { [key: string]: string } = {
	LEFT: '"%PLAYER% left"',
	JOINED: '"%PLAYER% joined"',
	DEMOTED: '"%PLAYER% has been demoted"',
	PROMOTED: '"%PLAYER% has been promoted"',
	SYNCED: '"%PLAYER% [Auto Role Initiated]"'
};

export interface RPCFeed {
	clan: {
		tag: string;
		name: string;
	};
	members: {
		op: string;
		tag: string;
		name: string;
		role: string;
	}[];
	memberList: {
		tag: string; role: string;
		clan: { tag: string };
	}[];
}

const roles: { [key: string]: number } = {
	member: 1, admin: 2, coLeader: 3
};

export class RoleManager {
	private readonly _queue: Queue;
	private readonly queues = new Set<string>();

	public constructor(private readonly client: Client) {
		this._queue = new Queue();
	}

	public async queue(clan: Clan) {
		if (this.queues.has(clan.tag)) return null;

		const data = {
			clan: { name: clan.name, tag: clan.tag },
			memberList: clan.memberList.map(mem => ({ tag: mem.tag, role: mem.role, clan: { tag: clan.tag } })),
			members: clan.memberList.map(mem => ({ op: 'SYNCED', name: mem.name, tag: mem.tag, role: mem.role }))
		};

		this.queues.add(clan.tag);
		await this._queue.wait();

		try {
			return await this.exec(clan.tag, data);
		} finally {
			this._queue.shift();
			this.queues.delete(clan.tag);
		}
	}

	public async newLink(player: Player) {
		const clan = await this.client.http.clan(player.clan!.tag);
		if (!clan.ok) return null;

		const mem = clan.memberList.find(mem => mem.tag === player.tag);
		return this.exec(clan.tag, {
			clan: { name: player.clan!.name, tag: player.clan!.tag },
			memberList: mem ? [{ tag: player.tag, role: mem.role, clan: { tag: clan.tag } }] : [],
			members: [{ op: 'SYNCED', name: player.name, tag: player.tag, role: player.role ?? 'none' }]
		});
	}

	public async exec(tag: string, data: RPCFeed) {
		const queried = await this.client.db.collection(Collections.CLAN_STORES)
			.aggregate([
				{
					$match: {
						tag, active: true, paused: false
					}
				}, {
					$group: {
						_id: null,
						guilds: {
							$addToSet: '$guild'
						}
					}
				}, {
					$unset: '_id'
				}
			]).next();
		if (!queried?.guilds.length) return null;

		const guild_ids = queried.guilds.filter((id: string) => this.client.guilds.cache.has(id));
		if (!guild_ids.length) return null;

		const cursor = this.client.db.collection(Collections.CLAN_STORES)
			.aggregate([
				{
					$match: {
						autoRole: { $gt: 0 },
						guild: { $in: guild_ids }
					}
				}, {
					$group: {
						_id: {
							guild: '$guild',
							autoRole: '$autoRole'
						},
						clans: {
							$addToSet: '$$ROOT'
						}
					}
				}, {
					$set: {
						guild_id: '$_id.guild',
						type: '$_id.autoRole'
					}
				}, {
					$unset: '_id'
				}, {
					$match: { 'clans.tag': tag }
				}
			]);

		const groups: { clans: any[]; guild_id: string; type: 1 | 2 }[] = await cursor.toArray();
		if (!groups.length) return cursor.close();

		for (const group of groups.filter(ex => ex.type === 2 && ex.clans.length)) {
			await this.addSameTypeRole(group.guild_id, group.clans, data);
		}

		for (const group of groups.filter(ex => ex.type === 1 && ex.clans.length)) {
			const clan = group.clans.find(clan => clan.tag === data.clan.tag);
			if (clan) await this.addUniqueTypeRole(group.guild_id, clan, data);
		}

		return cursor.close();
	}

	private async addUniqueTypeRole(guild: string, clan: any, data: RPCFeed) {
		console.log(`======================= UNIQUE_TYPE_AUTO_ROLE  ${data.clan.name} (${data.clan.tag}) =======================`);

		const collection = await this.client.db.collection(Collections.LINKED_PLAYERS)
			.find({ 'entries.tag': { $in: data.members.map(mem => mem.tag) } })
			.toArray();

		const flattened = this.flatPlayers(collection, clan.secureRole);
		const user_ids = flattened.reduce((prev, curr) => {
			if (!prev.includes(curr.user)) prev.push(curr.user);
			return prev;
		}, [] as string[]);

		// fetch guild members at once
		await this.client.guilds.cache.get(guild)?.members.fetch({ user: user_ids, force: true });

		for (const member of data.members) {
			const mem = flattened.find(a => a.tag === member.tag);
			if (!mem) continue;
			const acc = flattened.filter(a => a.user === mem.user);

			const tags = acc.map(en => en.tag);
			const multi = data.memberList.filter(mem => tags.includes(mem.tag));
			const role = this.getHighestRole(multi, [clan.tag]) || member.role;

			const reason = ActionType[member.op].replace(/%PLAYER%/, member.name);
			await this.manageRole(mem.user, guild, role, clan.roles, reason);
			await this.delay(250);
		}

		return data.members.length;
	}

	private async addSameTypeRole(guild: string, clans: any[], data: RPCFeed) {
		const clan = clans[0];
		console.log(`======================= SAME_TYPE_AUTO_ROLE ${data.clan.name} (${data.clan.tag}) =======================`);

		const collection = await this.client.db.collection(Collections.LINKED_PLAYERS)
			.find({ 'entries.tag': { $in: data.members.map(mem => mem.tag) } })
			.toArray();

		const flattened = this.flatPlayers(collection, clan.secureRole);
		const user_ids = flattened.reduce((prev, curr) => {
			if (!prev.includes(curr.user)) prev.push(curr.user);
			return prev;
		}, [] as string[]);

		// fetch guild members at once
		await this.client.guilds.cache.get(guild)?.members.fetch({ user: user_ids, force: true });

		const players = (await this.client.http.detailedClanMembers(flattened))
			.filter(res => res.ok);

		for (const member of data.members) {
			const mem = flattened.find(a => a.tag === member.tag);
			if (!mem) continue;
			const acc = flattened.filter(a => a.user === mem.user);

			const tags = acc.map(en => en.tag);
			const role = this.getHighestRole(players.filter(en => tags.includes(en.tag)), clans.map(clan => clan.tag));

			const reason = ActionType[member.op].replace(/%PLAYER%/, member.name);
			await this.manageRole(mem.user, guild, role, clan.roles, reason);
			await this.delay(250);
		}

		return data.members.length;
	}

	private async manageRole(user_id: string, guild_id: string, clanRole: string, roles: { [key: string]: string }, reason: string) {
		return this.addRoles(guild_id, user_id, roles[clanRole], Object.values(roles), reason);
	}

	public async addRoles(guild_id: string, user_id: string, role_id: string, roles: string[], reason: string) {
		const guild = this.client.guilds.cache.get(guild_id);

		if (!role_id && !roles.length) return null;
		if (!guild?.me?.permissions.has('MANAGE_ROLES')) return null;

		const member = guild.members.cache.get(user_id);
		if (!member) return null;
		if (member.user.bot) return null;

		console.log(`MEMBER_FOUND: ${member.user.tag}`);
		const excluded = roles.filter(id => id !== role_id && this.checkRole(guild, guild.me!, id))
			.filter(id => member.roles.cache.has(id));

		if (excluded.length) {
			await member.roles.remove(excluded, reason);
		}

		console.log(`ROLE_TO_BE_ADDED: ${role_id} | EX: ${excluded.length}`);
		if (!role_id) return null;
		if (!guild.roles.cache.has(role_id)) return null;

		const role = guild.roles.cache.get(role_id)!;
		if (role.position > guild.me.roles.highest.position) return null;

		console.log('========== ADDED_ROLE ==========');
		if (member.roles.cache.has(role_id)) return null;
		return member.roles.add(role, reason).catch(() => null);
	}

	private flatPlayers(collection: { user: string; entries: { tag: string; verified: boolean }[] }[], secureRole: boolean) {
		return collection.reduce(
			(prev, curr) => {
				prev.push(
					...curr.entries.map(
						en => ({ user: curr.user, tag: en.tag, verified: en.verified })
					)
				);
				return prev;
			}, [] as { user: string; tag: string; verified: boolean }[]
		).filter(en => secureRole ? en.verified : true);
	}

	private checkRole(guild: Guild, member: GuildMember, role_id: string) {
		const role = guild.roles.cache.get(role_id);
		return role && member.roles.highest.position > role.position;
	}

	private getHighestRole(players: { tag: string; role?: string; clan?: { tag: string } }[], clans: string[]) {
		const unique = players.filter(a => a.clan && clans.includes(a.clan.tag) && a.role! in roles)
			.map(a => a.role!);

		return unique.sort((a, b) => roles[b] - roles[a])[0];
	}

	private async delay(ms: number) {
		return new Promise(res => setTimeout(res, ms));
	}
}