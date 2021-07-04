import { MessageEmbed, Message, MessageButton, MessageActionRow, MessageSelectMenu } from 'discord.js';
import { Clan, ClanWar, ClanWarLeagueGroup, ClanWarMember, Player, WarClan } from 'clashofclans.js';
import { BLUE_NUMBERS, WHITE_NUMBERS } from '../../util/NumEmojis';
import { EMOJIS, HERO_PETS } from '../../util/Emojis';
import { Command } from 'discord-akairo';
import { Util } from '../../util/Util';

const states: { [key: string]: string } = {
	inWar: 'Battle Day',
	preparation: 'Preparation',
	warEnded: 'War Ended'
};

export default class CWLLineupCommand extends Command {
	public constructor() {
		super('cwl-lineup', {
			aliases: ['cwl-lineup'],
			category: 'cwl',
			clientPermissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY'],
			description: {
				content: [
					'Shows lineup of the current round.'
				],
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
		if (body.statusCode === 504) {
			return message.util!.send('**504 Request Timeout!**');
		}

		if (!body.ok) {
			const embed = new MessageEmbed()
				.setColor(this.client.embed(message))
				.setAuthor(
					`${data.name} (${data.tag})`,
					`${data.badgeUrls.medium}`,
					`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${data.tag}`
				)
				.setThumbnail(data.badgeUrls.medium)
				.setDescription('Clan is not in CWL');
			return message.util!.send({ embeds: [embed] });
		}

		return this.rounds(message, body, data);
	}

	private async rounds(message: Message, body: ClanWarLeagueGroup, clan: Clan) {
		const clanTag = clan.tag;
		const rounds = body.rounds.filter(d => !d.warTags.includes('#0'));

		const chunks: { state: string; clan: WarClan; opponent: WarClan; round: number }[] = [];
		for (const { warTags } of rounds.slice(-2)) {
			for (const warTag of warTags) {
				const data: ClanWar = await this.client.http.clanWarLeagueWar(warTag);
				if (!data.ok) continue;

				if ((data.clan.tag === clanTag) || (data.opponent.tag === clanTag)) {
					const clan = data.clan.tag === clanTag ? data.clan : data.opponent;
					const opponent = data.clan.tag === clanTag ? data.opponent : data.clan;
					const round = rounds.findIndex(en => en.warTags.includes(warTag)) + 1;
					chunks.push({ state: data.state, clan, opponent, round });
				}
			}
		}

		if (!chunks.length) return message.util!.send('**504 Request Timeout!**');
		let data = rounds.length === 7
			? chunks.find(ch => ch.state === 'preparation') ?? chunks.slice(-1)[0]
			: chunks.slice(-2).reverse()[0];

		const embeds = await this.getComparisonLineup(data.state, data.round, data.clan, data.opponent);
		for (const embed of embeds) embed.setColor(this.client.embed(message));

		const [PlayerCustomID, ComapreCustomID, MenuID] = [this.client.uuid(), this.client.uuid(), this.client.uuid()];
		const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomID(PlayerCustomID)
					.setLabel('Show Player List')
					.setStyle('SECONDARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomID(ComapreCustomID)
					.setLabel('Compare')
					.setStyle('SECONDARY')
					.setDisabled(true)
			);

		const menus = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomID(MenuID)
					.setPlaceholder('Select War')
					.addOptions([
						{
							label: 'Preparation',
							value: 'preparation',
							description: 'Lineup for the preparation day.'
						},
						{
							label: 'Battle Day', value: 'inWar',
							description: 'Lineup for the battle day.'
						}
					])
					.setDisabled(chunks.length === 1)
			);

		const msg = await message.util!.send({ embeds, components: [buttons, menus] });
		const collector = msg.createMessageComponentCollector({
			filter: action => [ComapreCustomID, PlayerCustomID, MenuID].includes(action.customID) && action.user.id === message.author.id,
			time: 15 * 60 * 1000
		});

		let clicked = Boolean(false);
		collector.on('collect', async action => {
			if (action.customID === PlayerCustomID) {
				const embeds = this.getLineupList(data.state, data.round, { clan: data.clan, opponent: data.opponent });
				for (const embed of embeds) embed.setColor(this.client.embed(message));
				clicked = Boolean(true);
				buttons.components[0].setDisabled(true);
				buttons.components[1].setDisabled(false);
				return action.update({ embeds, components: [buttons, menus] });
			}

			if (action.customID === MenuID && action.isSelectMenu()) {
				data = chunks.find(ch => ch.state === action.values![0]) ?? chunks.slice(-1)[0];

				await action.deferUpdate();
				const embeds = clicked
					? this.getLineupList(data.state, data.round, { clan: data.clan, opponent: data.opponent })
					: await this.getComparisonLineup(data.state, data.round, data.clan, data.opponent);
				for (const embed of embeds) embed.setColor(this.client.embed(message));

				await action.editReply({ embeds });
			}

			if (action.customID === ComapreCustomID) {
				await action.deferUpdate();
				const embeds = await this.getComparisonLineup(data.state, data.round, data.clan, data.opponent);
				for (const embed of embeds) embed.setColor(this.client.embed(message));
				clicked = Boolean(false);
				buttons.components[0].setDisabled(false);
				buttons.components[1].setDisabled(true);
				await action.editReply({ embeds, components: [buttons, menus] });
			}
		});

		collector.on('end', async () => {
			this.client.components.delete(MenuID);
			this.client.components.delete(PlayerCustomID);
			this.client.components.delete(ComapreCustomID);
			if (msg.editable) await msg.edit({ components: [] });
		});
	}

	private async rosters(clanMembers: ClanWarMember[], opponentMembers: ClanWarMember[]) {
		const clanPlayers: Player[] = await this.client.http.detailedClanMembers(clanMembers);
		const a = clanPlayers.filter(res => res.ok).map((m, i) => {
			const heroes = m.heroes.filter(en => en.village === 'home');
			const pets = m.troops.filter(en => en.village === 'home' && en.name in HERO_PETS);
			return {
				e: 0,
				m: i + 1,
				t: m.townHallLevel,
				p: pets.map(en => en.level).reduce((prev, en) => en + prev, 0),
				h: heroes.map(en => en.level).reduce((prev, en) => en + prev, 0)
				// .concat(...Array(4 - heroes.length).fill(' '))
			};
		});

		const opponentPlayers: Player[] = await this.client.http.detailedClanMembers(opponentMembers as any);
		const b = opponentPlayers.filter(res => res.ok).map((m, i) => {
			const heroes = m.heroes.filter(en => en.village === 'home');
			const pets = m.troops.filter(en => en.village === 'home' && en.name in HERO_PETS);
			return {
				e: 1,
				m: i + 1,
				t: m.townHallLevel,
				p: pets.map(en => en.level).reduce((prev, en) => en + prev, 0),
				h: heroes.map(en => en.level).reduce((prev, en) => en + prev, 0)
				// .concat(...Array(4 - heroes.length).fill(' '))
			};
		});

		return Util.chunk([...a, ...b].sort((a, b) => a.e - b.e).sort((a, b) => a.m - b.m), 2);
	}

	private async getComparisonLineup(state: string, round: number, clan: WarClan, opponent: WarClan) {
		const linups = await this.rosters(
			clan.members.sort((a, b) => a.mapPosition - b.mapPosition),
			opponent.members.sort((a, b) => a.mapPosition - b.mapPosition)
		);
		const embed = new MessageEmbed();
		embed.setAuthor(`\u200e${clan.name} (${clan.tag})`, clan.badgeUrls.medium);

		embed.setDescription(
			[
				'**War Against**',
				`**\u200e${opponent.name} (${opponent.tag})**`,
				'',
				`\u200e${EMOJIS.HASH} \`TH HERO \u2002  \u2002 TH HERO \``,
				linups.map(
					(lineup, i) => {
						const desc = lineup.map(en => `${this.pad(en.t, 2)} ${this.pad(en.h, 4)}`).join(' \u2002vs\u2002 ');
						return `${BLUE_NUMBERS[i + 1]} \`${desc} \``;
					}
				).join('\n')
			].join('\n')
		);
		embed.setFooter(`Round #${round} (${states[state]})`);

		return [embed];
	}

	private getLineupList(state: string, round: number, data: { clan: WarClan; opponent: WarClan }) {
		const embeds = [
			new MessageEmbed()
				.setAuthor(
					`\u200e${data.clan.name} (${data.clan.tag})`,
					data.clan.badgeUrls.medium,
					this.clanURL(data.clan.tag)
				)
				.setDescription(
					data.clan.members.sort(
						(a, b) => a.mapPosition - b.mapPosition
					).map(
						(m, i) => `\u200e${WHITE_NUMBERS[i + 1]} [${m.name}](https://open.clashperk.com/${m.tag.replace('#', '')})`
					).join('\n')
				)
				.setFooter(`Round #${round} (${states[state]})`),

			new MessageEmbed()
				.setAuthor(
					`\u200e${data.opponent.name} (${data.opponent.tag})`,
					data.opponent.badgeUrls.medium,
					this.clanURL(data.opponent.tag)
				)
				.setDescription(
					data.opponent.members.sort(
						(a, b) => a.mapPosition - b.mapPosition
					).map(
						(m, i) => `\u200e${WHITE_NUMBERS[i + 1]} [${m.name}](https://open.clashperk.com/${m.tag.replace('#', '')})`
					).join('\n')
				)
				.setFooter(`Round #${round} (${states[state]})`)
		];

		return embeds;
	}

	private pad(num: number, depth: number) {
		return num.toString().padStart(depth, ' ');
	}

	private clanURL(tag: string) {
		return `https://link.clashofclans.com/en?action=OpenClanProfile&tag=${encodeURIComponent(tag)}`;
	}
}
