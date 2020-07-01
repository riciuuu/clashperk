const { Command, Argument, Flag } = require('discord-akairo');
const fetch = require('node-fetch');
const moment = require('moment');
const { MessageEmbed } = require('discord.js');
const { status } = require('../../util/constants');
const Resolver = require('../../struct/Resolver');
const { emoji } = require('../../util/emojis');

class CWLStarsComamnd extends Command {
	constructor() {
		super('cwl-stars', {
			aliases: ['cwl-stars'],
			category: 'cwl-hidden',
			clientPermissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
			description: {
				content: 'Shows stars of current CWL.',
				usage: '<clanTag>',
				examples: ['#8QU8J9LP']
			}
		});
	}

	cooldown(message) {
		if (this.client.patron.isPatron(message.author, message.guild)) return 1000;
		return 3000;
	}

	*args() {
		const data = yield {
			type: async (message, args) => {
				const resolved = await Resolver.resolve(message, args);
				if (resolved.status !== 200) {
					await message.util.send({ embed: resolved.embed });
					return Flag.cancel();
				}
				return resolved;
			}
		};

		return { data };
	}

	async exec(message, { data }) {
		await message.util.send(`**Fetching data... ${emoji.loading}**`);
		const res = await fetch(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(data.tag)}/currentwar/leaguegroup`, {
			method: 'GET', timeout: 3000,
			headers: { accept: 'application/json', authorization: `Bearer ${process.env.DEVELOPER_TOKEN}` }
		}).catch(() => null);

		if (!res) {
			return message.util.send({
				embed: {
					color: 0xf30c11,
					author: { name: 'Error' },
					description: status(504)
				}
			});
		}

		const body = await res.json();

		const embed = this.client.util.embed()
			.setColor(this.client.embed(message));

		if (!(body.state || res.ok)) {
			embed.setAuthor(`${data.name} (${data.tag})`, data.badgeUrls.medium, `https://link.clashofclans.com/?action=OpenClanProfile&tag=${data.tag}`)
				.setThumbnail(data.badgeUrls.medium)
				.setDescription('Clan is not in CWL');
			return message.util.send({ embed });
		}

		return this.rounds(message, body, { clanTag: data.tag, clanName: data.name, clanBadge: data.badgeUrls.medium });
	}

	async rounds(message, body, { clanTag, clanName, clanBadge } = {}) {
		const rounds = body.rounds.filter(r => !r.warTags.includes('#0'));
		const members = body.clans.find(clan => clan.tag === clanTag)
			.members.map(member => ({ name: member.name, tag: member.tag, stars: 0, attacks: 0, of: 0, dest: 0 }));

		for (const { warTags } of rounds) {
			for (const warTag of warTags) {
				const res = await fetch(`https://api.clashofclans.com/v1/clanwarleagues/wars/${encodeURIComponent(warTag)}`, {
					method: 'GET', headers: { accept: 'application/json', authorization: `Bearer ${process.env.DEVELOPER_TOKEN}` }
				});
				const data = await res.json();

				if ((data.clan && data.clan.tag === clanTag) || (data.opponent && data.opponent.tag === clanTag)) {
					const clan = data.clan.tag === clanTag ? data.clan : data.opponent;
					if (data.state === 'warEnded') {
						for (const member of clan.members) {
							members.find(m => m.tag === member.tag)
								.of += 1;
							if (member.attacks) {
								members.find(m => m.tag === member.tag)
									.attacks += 1;

								members.find(m => m.tag === member.tag)
									.stars += member.attacks[0].stars;

								members.find(m => m.tag === member.tag)
									.dest += member.attacks[0].destructionPercentage;
							}
						}
					}
					if (data.state === 'inWar') {
						for (const member of clan.members) {
							members.find(m => m.tag === member.tag)
								.of += 1;
							if (member.attacks) {
								members.find(m => m.tag === member.tag)
									.attacks += 1;

								members.find(m => m.tag === member.tag)
									.stars += member.attacks[0].stars;

								members.find(m => m.tag === member.tag)
									.dest += member.attacks[0].destructionPercentage;
							}
						}
					}
				}
			}
		}

		const leaderboard = members.sort((a, b) => b.stars - a.stars);
		return message.util.send({
			embed: {
				color: 0x5970c1,
				author: {
					name: `${clanName} CWL`,
					icon_url: clanBadge
				},
				description: [
					`\`\`\`\u200e # STR DEST ATT ${'NAME'}`,
					leaderboard.filter(m => m.attacks !== 0)
						.map((m, i) => `\u200e${(++i).toString().padStart(2, ' ')}  ${m.stars.toString().padEnd(2, ' ')} ${this.destruction(m.dest)} ${this.attacks(m.attacks, m.of).padEnd(3, ' ')} ${m.name.substring(0, 12)}`)
						.join('\n'),
					'```'
				].join('\n')
			}
		});
	}

	destruction(dest) {
		return dest.toFixed()
			.toString()
			.concat('%')
			.padEnd(4, ' ');
	}

	attacks(num, team) {
		return num.toString().concat(`/${team}`);
	}

	winner(clan, opponent) {
		if (clan.stars > opponent.stars) {
			return true;
		} else if (clan.stars < opponent.stars) {
			return false;
		}
		if (clan.destructionPercentage > opponent.destructionPercentage) {
			return true;
		} else if (clan.destructionPercentage < opponent.destructionPercentage) {
			return false;
		}
	}
}

module.exports = CWLStarsComamnd;
