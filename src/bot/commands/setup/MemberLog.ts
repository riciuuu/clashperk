import { MessageEmbed, Message, TextChannel, User, PermissionString, Channel, Role } from 'discord.js';
import { Op, missingPermissions, SETTINGS } from '../../util/Constants';
import Resolver from '../../struct/Resolver';
import { Command } from 'discord-akairo';
import { Clan } from 'clashofclans.js';

export default class MemberLogCommand extends Command {
	public constructor() {
		super('setup-clan-feed', {
			category: 'setup-hidden',
			channel: 'guild',
			userPermissions: ['MANAGE_GUILD'],
			clientPermissions: ['ADD_REACTIONS', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
			description: {
				content: 'Set Clan Feed or Flag Notification Channel.',
				usage: '<clanTag> [channel/role]',
				examples: ['#8QU8J9LP', '#8QU8J9LP #clan-feed @Mod']
			},
			args: [
				{
					id: 'data',
					type: (msg, tag) => this.client.resolver.getClan(msg, tag)
				},
				{
					'id': 'channel',
					'type': 'textChannel',
					'unordered': [1, 2],
					'default': (msg: Message) => msg.channel
				},
				{
					id: 'role',
					type: 'role',
					unordered: [1, 2]
				}
			]
		});
	}

	public async exec(message: Message, { data, channel, role }: { data: Clan; channel: TextChannel; role: Role | null }) {
		const clans = await this.client.storage.findAll(message.guild!.id);
		const max = this.client.settings.get<number>(message.guild!.id, SETTINGS.LIMIT, 2);
		if (clans.length >= max && !clans.filter(clan => clan.active).map(clan => clan.tag).includes(data.tag)) {
			const embed = Resolver.limitEmbed();
			return message.util!.send({ embed });
		}

		const code = ['CP', message.guild!.id.substr(-2)].join('');
		const clan = clans.find(clan => clan.tag === data.tag) ?? { verified: false };
		if (!clan.verified && !data.description.toUpperCase().includes(code)) {
			const embed = Resolver.verifyEmbed(data, code);
			return message.util!.send({ embed });
		}

		const permission = missingPermissions(channel, this.client.user as User, this.clientPermissions as PermissionString[]);
		if (permission.missing) {
			return message.util!.send(`I\'m missing ${permission.missingPerms} to run that command.`);
		}

		const id = await this.client.storage.register(message, {
			op: Op.CLAN_MEMBER_LOG,
			guild: message.guild!.id,
			channel: channel.id,
			tag: data.tag,
			name: data.name,
			role: role ? role.id : null
		});

		await this.client.rpcHandler.add(id, {
			op: Op.CLAN_MEMBER_LOG,
			guild: message.guild!.id,
			tag: data.tag
		});

		const embed = new MessageEmbed()
			.setTitle(`${data.name}`)
			.setURL(`https://link.clashofclans.com/?action=OpenClanProfile&tag=${encodeURIComponent(data.tag)}`)
			.setThumbnail(data.badgeUrls.small)
			.setDescription([
				'**Wait Time**',
				'120 sec',
				'',
				'**Role**',
				`${role?.toString() ?? 'None'}`,
				'',
				'**Channel**',
				`${(channel as Channel).toString()}`,
				'',
				'**Player Log**',
				`[Enabled](${message.url})`
			])
			.setColor(this.client.embed(message));
		return message.util!.send({ embed });
	}
}
