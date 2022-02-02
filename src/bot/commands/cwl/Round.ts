import { Clan, ClanWar, ClanWarLeagueGroup, ClanWarMember } from 'clashofclans.js';
import { MessageEmbed, Message, MessageSelectMenu, MessageActionRow } from 'discord.js';
import { EMOJIS, TOWN_HALLS } from '../../util/Emojis';
import { ORANGE_NUMBERS } from '../../util/NumEmojis';
import { Command } from 'discord-akairo';
import { Util } from '../../util/Util';
import moment from 'moment';

export default class CWLRoundCommand extends Command {
	public constructor() {
		super('cwl-round', {
			aliases: ['round', 'cwl-round'],
			category: 'war',
			clientPermissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
			description: {
				content: 'Shows info about the current round.',
				usage: '<#clanTag>',
				examples: ['#8QU8J9LP']
			},
			optionFlags: ['--tag']
		});
	}

	public *args(msg: Message): unknown {
		const data = yield {
			flag: '--tag',
			match: msg.interaction ? 'option' : 'phrase',
			type: (msg: Message, tag: string) => this.client.resolver.resolveClan(msg, tag)
		};

		return { data };
	}

	public async exec(message: Message, { data }: { data: Clan }) {
		await message.util!.send(`**Fetching data... ${EMOJIS.LOADING}**`);

		const body = await this.client.http.clanWarLeague(data.tag);
		if (body.statusCode === 504 || body.state === 'notInWar') {
			return message.util!.send('**[504 Request Timeout] Your clan is still searching for opponent!**');
		}

		if (!body.ok) {
			const cw = await this.client.storage.getWarTags(data.tag);
			if (cw) return this.rounds(message, cw, data.tag);

			const embed = this.client.util.embed()
				.setColor(this.client.embed(message))
				.setAuthor({
					name: `${data.name} (${data.tag})`,
					iconURL: `${data.badgeUrls.medium}`,
					url: `https://link.clashofclans.com/en?action=OpenClanProfile&tag=${data.tag}`
				})
				.setThumbnail(data.badgeUrls.medium)
				.setDescription('Clan is not in CWL');
			return message.util!.send({ embeds: [embed] });
		}

		this.client.storage.pushWarTags(data.tag, body);
		return this.rounds(message, body, data.tag);
	}

	private async rounds(message: Message, body: ClanWarLeagueGroup, clanTag: string) {
		const rounds = body.rounds.filter(d => !d.warTags.includes('#0'));

		const chunks: { state: string; embed: MessageEmbed; round: number }[] = [];
		let index = 0;
		for (const { warTags } of rounds) {
			for (const warTag of warTags) {
				const data: ClanWar = await this.client.http.clanWarLeagueWar(warTag);
				if (!data.ok) continue;

				if ((data.clan.tag === clanTag) || (data.opponent.tag === clanTag)) {
					const clan = data.clan.tag === clanTag ? data.clan : data.opponent;
					const opponent = data.clan.tag === clan.tag ? data.opponent : data.clan;
					const embed = new MessageEmbed()
						.setColor(this.client.embed(message));
					embed.setAuthor({ name: `${clan.name} (${clan.tag})`, iconURL: clan.badgeUrls.medium })
						.addField('War Against', `\u200e${opponent.name} (${opponent.tag})`)
						.addField('Team Size', `${data.teamSize}`);
					if (data.state === 'warEnded') {
						const endTimestamp = new Date(moment(data.endTime).toDate()).getTime();
						embed.addField('War State', [
							'War Ended',
							`Ended: ${Util.getRelativeTime(endTimestamp)}`
						].join('\n'));
						embed.addField('Stats', [
							`\`\u200e${clan.stars.toString().padStart(8, ' ')} \u200f\`\u200e \u2002 ${EMOJIS.STAR} \u2002 \`\u200e ${opponent.stars.toString().padEnd(8, ' ')}\u200f\``,
							`\`\u200e${clan.attacks.toString().padStart(8, ' ')} \u200f\`\u200e \u2002 ${EMOJIS.SWORD} \u2002 \`\u200e ${opponent.attacks.toString().padEnd(8, ' ')}\u200f\``,
							`\`\u200e${`${clan.destructionPercentage.toFixed(2)}%`.padStart(8, ' ')} \u200f\`\u200e \u2002 ${EMOJIS.FIRE} \u2002 \`\u200e ${`${opponent.destructionPercentage.toFixed(2)}%`.padEnd(8, ' ')}\u200f\``
						].join('\n'));
					}
					if (data.state === 'inWar') {
						const endTimestamp = new Date(moment(data.endTime).toDate()).getTime();
						embed.addField('War State', [
							'Battle Day',
							`End Time: ${Util.getRelativeTime(endTimestamp)}`
						].join('\n'));
						embed.addField('Stats', [
							`\`\u200e${clan.stars.toString().padStart(8, ' ')} \u200f\`\u200e \u2002 ${EMOJIS.STAR} \u2002 \`\u200e ${opponent.stars.toString().padEnd(8, ' ')}\u200f\``,
							`\`\u200e${clan.attacks.toString().padStart(8, ' ')} \u200f\`\u200e \u2002 ${EMOJIS.SWORD} \u2002 \`\u200e ${opponent.attacks.toString().padEnd(8, ' ')}\u200f\``,
							`\`\u200e${`${clan.destructionPercentage.toFixed(2)}%`.padStart(8, ' ')} \u200f\`\u200e \u2002 ${EMOJIS.FIRE} \u2002 \`\u200e ${`${opponent.destructionPercentage.toFixed(2)}%`.padEnd(8, ' ')}\u200f\``
						].join('\n'));
					}
					if (data.state === 'preparation') {
						const startTimestamp = new Date(moment(data.startTime).toDate()).getTime();
						embed.addField('War State', [
							'Preparation Day',
							`War Start Time: ${Util.getRelativeTime(startTimestamp)}`
						].join('\n'));
					}
					embed.addField('Rosters', [
						`\u200e**${clan.name}**`,
						`${this.count(clan.members)}`
					].join('\n'));
					embed.addField('\u200e', [
						`\u200e**${opponent.name}**`,
						`${this.count(opponent.members)}`
					].join('\n'));
					embed.setFooter({ text: `Round #${++index}` });

					chunks.push({ state: data.state, embed, round: index });
					break;
				}
			}
		}

		if (!chunks.length || chunks.length !== rounds.length) return message.util!.send('**[504 Request Timeout] Your clan is still searching for opponent!**');
		const round = chunks.find(c => c.state === 'inWar') ?? chunks.slice(-1)[0];
		if (chunks.length === 1) {
			return message.util!.send({ embeds: [round.embed] });
		}

		const options = chunks.map(ch => ({ label: `Round #${ch.round}`, value: ch.round.toString() }));
		const customID = this.client.uuid(message.author.id);
		const menu = new MessageSelectMenu()
			.addOptions(options)
			.setCustomId(customID)
			.setPlaceholder('Select a round!');

		const msg = await message.util!.send({ embeds: [round.embed], components: [new MessageActionRow({ components: [menu] })] });
		const collector = msg.createMessageComponentCollector({
			filter: action => action.customId === customID && action.user.id === message.author.id,
			time: 5 * 60 * 1000
		});

		collector.on('collect', async action => {
			if (action.customId === customID && action.isSelectMenu()) {
				const round = chunks.find(ch => ch.round === Number(action.values[0]));
				return action.update({ embeds: [round!.embed] });
			}
		});

		collector.on('end', async (_, reason) => {
			this.client.components.delete(customID);
			if (!/delete/i.test(reason)) await msg.edit({ components: [] });
		});
	}

	private count(members: ClanWarMember[]) {
		const reduced = members.reduce((count, member) => {
			const townHall = member.townhallLevel;
			count[townHall] = (count[townHall] || 0) + 1;
			return count;
		}, {} as { [key: string]: number });

		const townHalls = Object.entries(reduced)
			.map(entry => ({ level: Number(entry[0]), total: entry[1] }))
			.sort((a, b) => b.level - a.level);

		return Util.chunk(townHalls, 5)
			.map(chunks => chunks.map(th => `${TOWN_HALLS[th.level]} ${ORANGE_NUMBERS[th.total]}`)
				.join(' '))
			.join('\n');
	}
}
