import { Clan } from 'clashofclans.js';
import { Command, PrefixSupplier } from 'discord-akairo';
import { Message, TextChannel, PermissionString, User } from 'discord.js';
import { EMOJIS } from '../../util/Emojis';
import ms from 'ms';

export default class DebugCommand extends Command {
	public constructor() {
		super('debug', {
			aliases: ['debug'],
			category: 'config',
			description: {
				content: 'Shows some basic debug informations.'
			}
		});
	}

	public *args(msg: Message): unknown {
		const channel = yield {
			'type': 'textChannel',
			'default': (message: Message) => message.channel,
			'match': msg.hasOwnProperty('token') ? 'option' : 'phrase'
		};

		return { channel };
	}

	public async exec(message: Message, { channel }: { channel: TextChannel }) {
		const prefix = (this.handler.prefix as PrefixSupplier)(message) as string;
		const permissions = [
			'VIEW_CHANNEL', 'SEND_MESSAGES', 'EMBED_LINKS', 'ADD_REACTIONS',
			'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY'
		] as PermissionString[];

		const clans = await this.client.storage.findAll(message.guild!.id);
		const fetched: Clan[] = (await Promise.all(clans.map(en => this.client.http.clan(en.tag)))).filter(res => res.ok);

		// @ts-expect-error
		const interaction = await this.client.api.applications(this.client.user!.id)
			.guilds(message.guild!.id).commands.get()
			.catch(() => null);

		const grpc: any = await new Promise(resolve => this.client.rpc.stats({}, (err: any, res: any) => {
			if (res) resolve(JSON.parse(res?.data));
			else resolve({ heapUsed: 0, clans: 0, players: 0, wars: 0 });
		}));

		const UEE_FOR_SLASH = channel.permissionsFor(message.guild!.id)!.has('USE_EXTERNAL_EMOJIS');
		const UEE_FOR_TEXT = channel.permissionsFor(this.client.user!)!.has('USE_EXTERNAL_EMOJIS');
		const emojis = (message.hasOwnProperty('token') && UEE_FOR_SLASH) || (!message.hasOwnProperty('token') && UEE_FOR_TEXT)
			? { cross: EMOJIS.WRONG, tick: EMOJIS.OK, none: EMOJIS.EMPTY }
			: { cross: '\\❌', tick: '\\✅', none: '\\⬛' };

		return message.util!.send([
			`**${this.client.user!.username} Debug Menu**`,
			'',
			'**Command Prefix',
			`**${prefix}`,
			'**Slash Command**',
			`${interaction ? 'Enabled' : 'Disabled'}`,
			'',
			'**Server ID**',
			`${message.guild!.id}`,
			'**Shard ID**',
			`[${message.guild!.shard.id} / ${this.client.shard!.count}]`,
			'**Channel ID**',
			`${message.channel.id}`,
			'',
			'**Channel Permissions**',
			permissions.map(perm => {
				const hasPerm = channel.permissionsFor(message.guild!.me!)!.has(perm);
				return `${hasPerm ? emojis.tick : emojis.cross} ${this.fixName(perm)}`;
			}).join('\n'),
			'',
			'**Slash Command Permission**',
			`${UEE_FOR_SLASH ? emojis.tick : emojis.cross} Use External Emojis ${UEE_FOR_SLASH ? '' : '(for @everyone)'}`,
			'',
			'**Loop Time**',
			`${emojis.none} \` ${'CLANS'} \` \` ${'PLAYERS'} \` \` ${'WARS'} \``,
			`${emojis.tick} \` ${this.fixTime(grpc.clans).padStart(5, ' ')} \` \` ${this.fixTime(grpc.players).padStart(7, ' ')} \` \` ${this.fixTime(grpc.wars).padStart(4, ' ')} \``,
			'',
			'**Cluster Info**',
			`${emojis.none} \`\u200e ${'CLAN NAME'.padEnd(15, ' ')} \u200f\` \`\u200e ${'UPDATED'} \u200f\` \`\u200e ${'WAR LOG'} \u200f\``,
			clans.map(clan => {
				const lastRan = clan.lastRan ? ms(Date.now() - clan.lastRan.getTime()) : 'Unknown';
				const warLog = fetched.find(res => res.tag === clan.tag)?.isWarLogPublic;
				const sign = (clan.active && !clan.paused && clan.flag > 0 && warLog) ? emojis.tick : emojis.cross;
				return `${sign} \`\u200e ${clan.name.padEnd(15, ' ')} \u200f\` \`\u200e ${lastRan.padStart(3, ' ')} ago \u200f\` \`\u200e ${(warLog ? 'Public' : 'Private').padStart(7, ' ')} \u200f\``;
			}).join('\n')
		]);
	}

	private fixTime(num: number) {
		return num === 0 ? '...' : ms(num);
	}

	private fixName(perm: string) {
		if (perm === 'VIEW_CHANNEL') return 'Read Messages';
		return perm.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase());
	}

	private missingPermissions(channel: TextChannel, user: User, permissions: PermissionString[]) {
		const missingPerms = channel.permissionsFor(user)!.missing(permissions)
			.map(str => {
				if (str === 'VIEW_CHANNEL') return 'Read Messages';
				return str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase());
			});
		return missingPerms.join('\n');
	}
}
