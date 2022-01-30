import { Collections } from '../util/Constants';
import { Collection, ObjectId } from 'mongodb';
import { TextChannel } from 'discord.js';
import Client from './Client';
import ms from 'ms';
import moment from 'moment';
import { ORANGE_NUMBERS, BLUE_NUMBERS } from '../util/NumEmojis';

export interface ReminderTemp {
	_id: ObjectId;
	guild: string;
	tag: string;
	reminderId: ObjectId;
	timestamp: Date;
	createdAt: Date;
}

export interface Reminder {
	_id: ObjectId;
	guild: string;
	channel: string;
	message: string;
	duration: number;
	roles: string[];
	townHalls: number[];
	clans: string[];
	remaining: number[];
	createdAt: Date;
}

export default class RemindScheduler {
	protected collection!: Collection<ReminderTemp>;

	private readonly refreshRate: number;
	private readonly queued = new Map();

	public constructor(private readonly client: Client) {
		this.refreshRate = 5 * 60 * 1000;
		this.collection = this.client.db.collection(Collections.REMINDERS_TEMP);
	}

	public async init() {
		this.collection.watch([], { fullDocument: 'updateLookup' }).on('change', change => {
			if (['update', 'insert'].includes(change.operationType)) {
				const reminder = change.fullDocument!;
				if (reminder.timestamp.getTime() < (Date.now() + this.refreshRate)) {
					this.queue(reminder);
				}
			}
		});

		await this._refresh();
		setInterval(this._refresh.bind(this), this.refreshRate);
	}

	public async create(reminder: Reminder) {
		for (const tag of reminder.clans) {
			const data = await this.client.http.currentClanWar(tag);
			if (!data.ok) continue;
			if (['notInWar', 'warEnded'].includes(data.state)) continue;
			const endTime = moment(data.endTime).toDate();

			await this.collection.insertOne({
				guild: reminder.guild,
				tag: data.clan.tag,
				reminderId: reminder._id,
				timestamp: new Date(endTime.getTime() - reminder.duration),
				createdAt: new Date()
			});
		}
	}

	private queue(reminder: ReminderTemp) {
		this.queued.set(
			reminder.reminderId.toHexString(),
			setTimeout(() => {
				this.trigger(reminder);
			}, reminder.timestamp.getTime() - Date.now())
		);
	}

	private async delete(reminder: ReminderTemp) {
		const timeoutId = this.queued.get(reminder.reminderId.toHexString());
		if (timeoutId) clearTimeout(timeoutId);
		this.queued.delete(reminder.reminderId.toHexString());
		return this.collection.deleteOne({ _id: reminder._id });
	}

	private async trigger(reminder: ReminderTemp) {
		try {
			const rem = await this.client.db.collection<Reminder>(Collections.REMINDERS).findOne({ _id: reminder.reminderId });
			if (!rem) return null;
			if (!this.client.channels.cache.has(rem.channel)) return null;

			const data = await this.client.http.currentClanWar(reminder.tag);
			if (['notInWar', 'warEnded'].includes(data.state)) return null;

			const attacksPerMember = data.attacksPerMember || 1;
			const members = data.clan.members.filter(mem => rem.remaining.includes(attacksPerMember - (mem.attacks?.length ?? 0)));
			if (!members.length) return null;

			const users = await this.client.http.getDiscordLinks(members);
			if (!users.length) return null;

			const guild = this.client.guilds.cache.get(rem.guild);
			if (!guild) return null;

			const guildMembers = await guild.members.fetch({ user: users.map(({ user }) => user) }).catch(() => null);

			const mentions: { position: number; content: string }[] = [];
			for (const user of users) {
				const member = members.find(mem => mem.tag === user.tag)!;
				const mention = guildMembers?.get(user.user)?.toString() ?? `<@${user.user}>`;
				mentions.push({
					position: member.mapPosition,
					content: `${BLUE_NUMBERS[member.mapPosition]} ${ORANGE_NUMBERS[member.townhallLevel]} ${mention} (${member.name}) ${member.attacks?.length ?? 0}/${attacksPerMember}`
				});
			}
			mentions.sort((a, b) => a.position - b.position);

			const dur = moment(data.endTime).toDate().getTime() - Date.now();
			if (!mentions.length) return null;
			const content = [
				`📨 ${rem.message}`,
				'\u200b',
				...mentions.map(m => m.content),
				'\u200b',
				`**${data.clan.name} (${ms(dur, { 'long': true })} left)**`
			].join('\n');

			const channel = this.client.channels.cache.get(rem.channel) as TextChannel | null;
			if (channel?.permissionsFor(this.client.user!)?.has(['SEND_MESSAGES'])) {
				await channel.send({ content, allowedMentions: { parse: ['users'] } });
			}
		} catch (error) {
			this.client.logger.error('Reminder Failed', { label: 'REMINDER' });
		}

		await this.delete(reminder);
		return true;
	}

	private async _refresh() {
		const reminders = await this.collection.find({
			timestamp: { $lt: new Date(Date.now() + this.refreshRate) }
		}).toArray();

		const now = new Date().getTime();
		for (const reminder of reminders) {
			if (!this.client.guilds.cache.has(reminder.guild)) continue;
			if (this.queued.has(reminder.reminderId.toHexString())) continue;

			if (reminder.timestamp.getTime() < now) {
				this.trigger(reminder);
			} else {
				this.queue(reminder);
			}
		}
	}
}
