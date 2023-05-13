import { Clan, Player } from 'clashofclans.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, EmbedBuilder } from 'discord.js';
import { Command } from '../../lib/index.js';
import { LEGEND_LEAGUE_ID } from '../../util/Constants.js';
import { Util } from '../../util/index.js';
import { EMOJIS } from '../../util/Emojis.js';

export default class LegendLeaderboardCommand extends Command {
	public constructor() {
		super('legend-leaderboard', {
			category: 'search',
			channel: 'guild',
			clientPermissions: ['EmbedLinks', 'UseExternalEmojis'],
			defer: true
		});
	}

	public async exec(interaction: CommandInteraction<'cached'>, args: { clans?: string }) {
		const tags = await this.client.resolver.resolveArgs(args.clans);
		const clans = tags.length
			? await this.client.storage.search(interaction.guildId, tags)
			: await this.client.storage.find(interaction.guildId);

		if (!clans.length && tags.length)
			return interaction.editReply(
				this.i18n('common.no_clans_found', { lng: interaction.locale, command: this.client.commands.SETUP_ENABLE })
			);
		if (!clans.length) {
			return interaction.editReply(
				this.i18n('common.no_clans_linked', { lng: interaction.locale, command: this.client.commands.SETUP_ENABLE })
			);
		}

		const raw = await this.client.redis.connection.json.mGet(
			clans.map((clan) => `C${clan.tag}`),
			'$'
		);
		const _cachedClans = raw.flat().filter((_) => _) as unknown as Clan[];
		const members = _cachedClans.map((clan) => clan.memberList.map((m) => m.tag)).flat();
		const rawPlayers = await this.client.redis.connection.json.mGet(
			members.map((tag) => `P${tag}`),
			'$'
		);
		const players = rawPlayers.flat().filter((_) => _) as unknown as Player[];

		const legends = players.filter((player) => player.trophies >= 5000 || player.league?.id === LEGEND_LEAGUE_ID);
		legends.sort((a, b) => b.trophies - a.trophies);

		const embed = new EmbedBuilder()
			.setColor(this.client.embed(interaction))
			.setAuthor({ name: 'Legend Leaderboard', iconURL: interaction.guild.iconURL()! })
			.setTimestamp()
			.setDescription(
				[
					'```',
					`\u200e #        WON  NAME`,
					...legends.slice(0, 99).map((player, n) => {
						const trophies = this.pad(player.trophies, 4);
						const attacks = this.pad(player.attackWins, 3);
						const name = Util.escapeBackTick(player.name);
						return `\u200e${this.pad(n + 1)}  ${trophies}  ${attacks}  ${name}`;
					}),
					'```'
				].join('\n')
			);

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			new ButtonBuilder()
				.setEmoji(EMOJIS.REFRESH)
				.setStyle(ButtonStyle.Secondary)
				.setCustomId(
					JSON.stringify({
						cmd: this.id,
						clans: args.clans?.substring(0, 60)
					})
				)
		);
		return interaction.editReply({ embeds: [embed], components: [row] });
	}

	private pad(num: string | number, padding = 2) {
		return String(num).padStart(padding, ' ');
	}
}