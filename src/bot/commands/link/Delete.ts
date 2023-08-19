import { CommandInteraction } from 'discord.js';
import { Command } from '../../lib/index.js';
import { Collections } from '../../util/Constants.js';
import { PlayerLinks, UserInfoModel } from '../../types/index.js';

export default class LinkDeleteCommand extends Command {
	public constructor() {
		super('link-delete', {
			category: 'none',
			channel: 'guild',
			clientPermissions: ['EmbedLinks'],
			description: {
				content: [
					'Unlinks a clan or player account.',
					'',
					'You must be a __Verified__ Co/Leader of the clan to unlink players on behalf of someone.'
				]
			},
			defer: true
		});
	}

	public async exec(interaction: CommandInteraction<'cached'>, args: { clan_tag?: string; player_tag?: string }) {
		const clanTag = this.parseTag(args.clan_tag);
		const playerTag = this.parseTag(args.player_tag);

		if (!(clanTag || playerTag)) {
			return interaction.editReply(this.i18n('command.link.no_tag', { lng: interaction.locale }));
		}

		if (clanTag) {
			const unlinked = await this.unlinkClan(interaction.user.id, clanTag);
			if (unlinked) {
				return interaction.editReply(this.i18n('command.link.delete.success', { lng: interaction.locale, tag: `**${clanTag}**` }));
			}
			return interaction.editReply(this.i18n('command.link.delete.no_result', { lng: interaction.locale, tag: `**${clanTag}**` }));
		}

		if (!playerTag) return null;

		const member = await this.getMember(playerTag, interaction);
		if (interaction.user.id !== member.id) {
			const players = await this.client.db
				.collection<PlayerLinks>(Collections.PLAYER_LINKS)
				.find({ userId: interaction.user.id, verified: true })
				.toArray();
			const playerTags = players.map((player) => player.tag);

			if (!players.length) {
				return interaction.editReply(this.i18n('command.link.delete.no_access', { lng: interaction.locale }));
			}

			const { body: data } = await this.client.http.getPlayer(playerTag);
			if (!data.clan) {
				return interaction.editReply(this.i18n('command.link.delete.no_access', { lng: interaction.locale }));
			}

			const { body: clan } = await this.client.http.getClan(data.clan.tag);
			if (!clan.memberList.find((mem) => ['leader', 'coLeader'].includes(mem.role) && playerTags.includes(mem.tag))) {
				return interaction.editReply(this.i18n('command.link.delete.no_access', { lng: interaction.locale }));
			}
		}

		if (await this.unlinkPlayer(member.id, playerTag)) {
			return interaction.editReply(this.i18n('command.link.delete.success', { lng: interaction.locale, tag: `**${playerTag}**` }));
		}

		return interaction.editReply(this.i18n('command.link.delete.no_result', { lng: interaction.locale, tag: `**${playerTag}**` }));
	}

	private async unlinkPlayer(userId: string, tag: string) {
		const link = await this.client.http.unlinkPlayerTag(tag);
		const { value } = await this.client.db.collection<PlayerLinks>(Collections.PLAYER_LINKS).findOneAndDelete({ userId, tag });
		return value ? tag : link ? tag : null;
	}

	private async unlinkClan(userId: string, tag: string): Promise<string | null> {
		const { value } = await this.client.db
			.collection<UserInfoModel>(Collections.USERS)
			.findOneAndUpdate({ userId, 'clan.tag': tag }, { $unset: { clan: '' } }, { returnDocument: 'before' });
		return value?.clan?.tag ?? null;
	}

	private parseTag(tag?: string) {
		return tag ? this.client.http.fixTag(tag) : null;
	}

	private async getMember(tag: string, interaction: CommandInteraction<'cached'>) {
		const target = await this.client.db.collection<PlayerLinks>(Collections.PLAYER_LINKS).findOne({ tag });
		return target ? { id: target.userId } : { id: interaction.user.id };
	}
}
