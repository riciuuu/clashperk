import { CommandInteraction } from 'discord.js';
import { Command } from '../../lib/index.js';
import { Collections, Flags } from '../../util/Constants.js';

export default class ServerLinkCommand extends Command {
	public constructor() {
		super('setup-server-link', {
			category: 'none',
			channel: 'guild',
			clientPermissions: ['EmbedLinks', 'UseExternalEmojis'],
			userPermissions: ['ManageGuild'],
			defer: true,
			ephemeral: true
		});
	}

	public async exec(interaction: CommandInteraction<'cached'>, args: { tag: string }) {
		const clan = await this.client.storage.collection.findOne({ tag: args.tag, guild: interaction.guild.id });
		if (clan)
			return interaction.editReply(
				this.i18n('command.setup.enable.server_link.already_linked', {
					lng: interaction.locale,
					clan: `${clan.name} (${clan.tag})`,
					guild: interaction.guild.name
				})
			);

		const data = await this.client.resolver.enforceSecurity(interaction, { tag: args.tag, collection: Collections.CLAN_STORES });
		if (!data) return;

		const id = await this.client.storage.register(interaction, {
			op: Flags.SERVER_LINKED,
			guild: interaction.guild.id,
			name: data.name,
			tag: data.tag
		});

		await this.client.rpcHandler.add(id, {
			op: Flags.CHANNEL_LINKED,
			tag: data.tag,
			guild: interaction.guild.id
		});

		return interaction.editReply(
			this.i18n('command.setup.enable.server_link.success', {
				lng: interaction.locale,
				clan: `${data.name} (${data.tag})`,
				guild: interaction.guild.name
			})
		);
	}
}
