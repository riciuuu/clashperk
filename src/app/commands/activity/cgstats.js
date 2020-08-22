const { Command } = require('discord-akairo');
const { mongodb } = require('../../struct/Database');
const { blueNum, emoji } = require('../../util/emojis');
const moment = require('moment');

class ClanGameStatsCommand extends Command {
	constructor() {
		super('cgstats', {
			aliases: ['cgstats'],
			category: 'activity',
			channel: 'guild',
			clientPermissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
			description: {
				content: [
					'Compare clan games scoreboard among clans.',
					'',
					'Scoreboard is based on completion times & highest sores.',
					'Performance is based on 4000 points completion.',
					'',
					'**Patron only Feature**',
					'',
					'[Become a Patron](https://www.patreon.com/clashperk)'
				],
				examples: ['']
			}
		});
	}

	cooldown(message) {
		if (this.client.patron.check(message.author, message.guild)) return 1000;
		return 3000;
	}

	async exec(message) {
		if (!this.client.patron.check(message.author, message.guild)) {
			return this.handler.handleDirectCommand(message, 'cgstats', this.handler.modules.get('help'), false);
		}

		const db = mongodb.db('clashperk');
		const tags = await db.collection('clangameslogs').find({ guild: message.guild.id }).toArray();
		if (!tags.length) return message.util.send(`${message.guild.name} does not have any clans. Why not add some?`);
		const clans = await db.collection('clangames').find({ tag: { $in: [...tags.map(d => d.tag)] } }).toArray();
		if (clans.length <= 1) return message.util.send('Minimum 2 clans are required to use this command.');

		const performances = clans.map(d => {
			const members = Object.values(d.members)
				.filter(m => m.gain >= 4000);
			return {
				count: members.length,
				name: d.name,
				tag: d.tag
			};
		});
		performances.sort((a, b) => b.count - a.count);

		const now = new Date();
		clans.sort((a, b) => new Date(b?.endedAt ?? now) - new Date(a?.endedAt ?? now))
			.sort((a, b) => b.total - a.total);

		const embed = this.client.util.embed()
			.setColor(this.client.embed(message))
			.setAuthor('Clan Games Stats', message.guild.iconURL())
			.setFooter(`${moment(clans[0].updatedAt).format('MMMM YYYY')}`, this.client.user.displayAvatarURL())
			.setDescription([
				'**Scoreboard**',
				'Based on completion times & highest sores.',
				`${emoji.hash} \`\u200e ${'POINTS'} ${'CLAN'}\u200f\``,
				...clans.map((clan, i) => `${blueNum[++i]} \`\u200e ${(clan.total || 0).toString().padEnd(6, ' ')} ${clan.name.padEnd(16, ' ')}\u200f\``),
				'',
				'**Performance**',
				'Based on 4000 points completion.',
				`${emoji.hash} \`\u200e ${'🎯'} ${'CLAN'}\u200f\``,
				...performances.map((clan, i) => `${blueNum[++i]} \`\u200e ${clan.count.toString().padEnd(2, ' ')} ${clan.name.padEnd(20, ' ')}\u200f\``)
			]);

		return message.util.send({ embed });
	}
}

module.exports = ClanGameStatsCommand;
