import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, EmbedBuilder } from 'discord.js';
import { Command } from '../../lib/index.js';
import { Settings } from '../../util/Constants.js';

export default class AutoRoleListCommand extends Command {
	public constructor() {
		super('autorole-list', {
			category: 'setup',
			channel: 'guild',
			defer: true
		});
	}

	public async exec(interaction: CommandInteraction<'cached'>, args: { expand?: boolean }) {
		const clans = await this.client.storage.find(interaction.guildId);
		const rolesMap = await this.client.rolesManager.getGuildRolesMap(interaction.guildId);

		const allowNonFamilyTownHallRoles = this.client.settings.get<boolean>(interaction.guild, Settings.ALLOW_EXTERNAL_ACCOUNTS, false);
		const allowNonFamilyLeagueRoles = this.client.settings.get<boolean>(
			interaction.guildId,
			Settings.ALLOW_EXTERNAL_ACCOUNTS_LEAGUE,
			false
		);

		const leagueRoles = Array.from(new Set(Object.values(rolesMap.leagueRoles).filter((id) => id)));
		const builderLeagueRoles = Array.from(new Set(Object.values(rolesMap.builderLeagueRoles).filter((id) => id)));
		const townHallRoles = Array.from(new Set(Object.values(rolesMap.townHallRoles).filter((id) => id)));
		const builderHallRoles = Array.from(new Set(Object.values(rolesMap.builderHallRoles).filter((id) => id)));

		const clanRoles = Array.from(
			new Set(
				Object.values(rolesMap.clanRoles ?? {})
					.map((_rMap) => Object.values(_rMap.roles))
					.flat()
					.filter((id) => id)
			)
		);
		const warRoles = Array.from(
			new Set(
				Object.values(rolesMap.clanRoles ?? {})
					.map((_rMap) => _rMap.warRoleId)
					.flat()
					.filter((id) => id)
			)
		);

		const clanRoleList = clans
			.map((clan) => {
				const roleSet = rolesMap.clanRoles[clan.tag];
				return {
					name: `${clan.nickname || clan.name} (${clan.tag})`,
					roleIds: Object.values(roleSet?.roles ?? {}),
					warRoleId: roleSet?.warRoleId
				};
			})
			.filter((roleSet) => roleSet.roleIds.length || roleSet.warRoleId);

		const requiresVerification = this.client.settings.get<boolean>(interaction.guildId, Settings.VERIFIED_ONLY_CLAN_ROLES, false);

		const embed = new EmbedBuilder();
		embed.setColor(this.client.embed(interaction));
		embed.setURL('https://docs.clashperk.com/features/auto-role');

		if (args.expand) {
			embed.setTitle('Clan Roles and War Roles');
			embed.setDescription(
				[
					requiresVerification ? '*Requires Verification\n' : '',
					clanRoleList
						.map((clan) => {
							return [
								`${clan.name}`,
								`- ${clan.roleIds.map((id) => `<@&${id}>`).join(' ') || 'No clan roles'}`,
								`${clan.warRoleId ? `- <@&${clan.warRoleId}>\n` : ''}`
							];
						})
						.flat()
						.join('\n')
				].join('\n')
			);
		} else {
			embed.setTitle('Clan Roles');
			embed.setDescription(
				[requiresVerification ? '*Requires Verification\n' : '', clanRoles.map((id) => `<@&${id}>`).join(' ') || 'None'].join('\n')
			);
			embed.addFields({ name: 'War Roles', value: warRoles.map((id) => `<@&${id}>`).join(' ') || 'None' });
			embed.addFields({
				name: 'TownHall Roles' + (townHallRoles.length && !allowNonFamilyTownHallRoles ? ' (Family Only)' : ''),
				value: [townHallRoles.map((id) => `<@&${id}>`).join(' ') || 'None'].join(' ')
			});
			embed.addFields({
				name: 'BuilderHall Roles' + (builderHallRoles.length && !allowNonFamilyTownHallRoles ? ' (Family Only)' : ''),
				value: [builderHallRoles.map((id) => `<@&${id}>`).join(' ') || 'None'].join(' ')
			});
			embed.addFields({
				name: 'League Roles' + (leagueRoles.length && !allowNonFamilyLeagueRoles ? ' (Family Only)' : ''),
				value: [leagueRoles.map((id) => `<@&${id}>`).join(' ') || 'None'].join(' ')
			});
			embed.addFields({
				name: 'Builder League Roles' + (builderLeagueRoles.length && !allowNonFamilyLeagueRoles ? ' (Family Only)' : ''),
				value: [builderLeagueRoles.map((id) => `<@&${id}>`).join(' ') || 'None'].join(' ')
			});
			embed.addFields({
				name: 'Family Leaders Roles',
				value: rolesMap.familyLeadersRoles.map((id) => this.getRoleOrNone(id)).join(', ') || 'None'
			});
			embed.addFields({ name: 'Family Role', value: this.getRoleOrNone(rolesMap.familyRoleId) });
			embed.addFields({ name: 'Exclusive Family Role', value: this.getRoleOrNone(rolesMap.exclusiveFamilyRoleId) });
			embed.addFields({ name: 'Guest Role', value: this.getRoleOrNone(rolesMap.guestRoleId) });
			embed.addFields({ name: 'Verified Role', value: this.getRoleOrNone(rolesMap.verifiedRoleId) });
		}

		const useAutoRole = this.client.settings.get<boolean>(interaction.guild, Settings.USE_AUTO_ROLE, true);
		if (!useAutoRole) embed.setFooter({ text: '*Auto updating is disabled! Use /config to enable it.' });

		const customId = this.createId({ cmd: this.id, expand: !args.expand });
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			new ButtonBuilder()
				.setStyle(ButtonStyle.Primary)
				.setCustomId(customId)
				.setLabel(args.expand ? 'All Roles' : 'Clan Specific Roles')
		);

		return interaction.editReply({ embeds: [embed], components: [row] });
	}

	private getRoleOrNone(id?: string | null) {
		return id ? `<@&${id}>` : 'None';
	}
}
