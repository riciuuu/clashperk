import { CommandInteraction, Role } from 'discord.js';
import moment from 'moment-timezone';
import { Command } from '../../lib/index.js';
import { IRoster, RosterSortTypes } from '../../struct/RosterManager.js';

export default class RosterCreateCommand extends Command {
	public constructor() {
		super('roster-create', {
			category: 'roster',
			channel: 'guild',
			userPermissions: ['ManageGuild'],
			description: {
				content: ['Create, delete, edit or view rosters.']
			},
			defer: true,
			ephemeral: true
		});
	}

	public async exec(
		interaction: CommandInteraction<'cached'>,
		args: {
			name: string;
			clan: string;
			import_members?: boolean;
			max_members?: number;
			min_town_hall?: number;
			max_town_hall?: number;
			min_hero_level?: number;
			roster_role?: Role;
			allow_group_selection?: boolean;
			allow_multi_signup?: boolean;
			end_time?: string;
			start_time?: string;
			sort_by?: RosterSortTypes;
			layout?: string;
			timezone?: string;
			use_clan_alias?: boolean;
		}
	) {
		// Create default categories
		this.client.rosterManager.createDefaultCategories(interaction.guild.id);

		const clan = await this.client.resolver.resolveClan(interaction, args.clan);
		if (!clan) return;

		const defaultSettings = this.client.rosterManager.getDefaultSettings(interaction.guild.id);
		const data: IRoster = {
			name: args.name,
			clan: {
				name: clan.name,
				tag: clan.tag,
				badgeUrl: clan.badgeUrls.large
			},
			guildId: interaction.guild.id,
			closed: false,
			allowMultiSignup: Boolean(args.allow_multi_signup ?? defaultSettings.allowMultiSignup ?? true),
			allowCategorySelection: Boolean(args.allow_group_selection ?? defaultSettings.allowCategorySelection ?? true),
			maxMembers: args.max_members ?? defaultSettings.maxMembers,
			sortBy: args.sort_by ?? defaultSettings.sortBy,
			layout: args.layout ?? defaultSettings.layout,
			minHeroLevels: args.min_hero_level ?? defaultSettings.minHeroLevels,
			minTownHall: args.min_town_hall ?? defaultSettings.minTownHall,
			maxTownHall: args.max_town_hall ?? defaultSettings.maxTownHall,
			useClanAlias: args.use_clan_alias ?? defaultSettings.useClanAlias,
			roleId: args.roster_role?.id ?? null,
			members: args.import_members ? await this.client.rosterManager.getClanMembers(clan.memberList) : [],
			startTime: null,
			endTime: null,
			lastUpdated: new Date(),
			createdAt: new Date()
		};

		if (args.roster_role) {
			const dup = await this.client.rosterManager.rosters.findOne(
				{ roleId: args.roster_role.id, closed: false },
				{ projection: { _id: 1 } }
			);
			if (dup) return interaction.editReply({ content: 'A roster with this role already exists.' });
		}

		if (args.start_time && moment(args.start_time).isValid()) {
			const timezone = await this.client.rosterManager.getTimezoneOffset(interaction, args.timezone);
			data.startTime = moment.tz(args.start_time, timezone.id).utc().toDate();
			if (data.startTime < new Date()) return interaction.editReply('Start time cannot be in the past.');
			if (data.startTime < moment().add(5, 'minutes').toDate()) {
				return interaction.editReply('Start time must be at least 5 minutes from now.');
			}
		}

		if (args.end_time && moment(args.end_time).isValid()) {
			const timezone = await this.client.rosterManager.getTimezoneOffset(interaction, args.timezone);
			data.endTime = moment.tz(args.end_time, timezone.id).utc().toDate();
			if (data.endTime < new Date()) return interaction.editReply('End time cannot be in the past.');
			if (data.endTime < moment().add(5, 'minutes').toDate()) {
				return interaction.editReply('End time must be at least 5 minutes from now.');
			}
		}

		if (data.endTime && data.startTime) {
			if (data.endTime < data.startTime) return interaction.editReply('End time cannot be before start time.');
			if (data.endTime.getTime() - data.startTime.getTime() < 600000)
				return interaction.editReply('Roster must be at least 10 minutes long.');
		}

		const roster = await this.client.rosterManager.create(data);
		this.client.rosterManager.setDefaultSettings(interaction.guild.id, roster);

		const embed = this.client.rosterManager.getRosterInfoEmbed(roster);
		return interaction.editReply({ embeds: [embed] });
	}
}