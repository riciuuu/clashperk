const { Command } = require('discord-akairo');
const { firestore } = require('../../struct/Database');

class LinkPlayerCommand extends Command {
	constructor() {
		super('link-player', {
			aliases: ['link-player', 'link-profile', 'save-profile'],
			category: 'profile',
			channel: 'guild',
			clientPermissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
			description: {
				content: 'Saves a player to your discord account.',
				usage: '<tag> [member]',
				examples: ['#9Q92C8R20', '#9Q92C8R20 Suvajit']
			},
			args: [
				{
					id: 'data',
					type: 'player',
					prompt: {
						start: 'What would you like to search for?',
						retry: (msg, { failure }) => failure.value
					}
				},
				{
					id: 'member',
					type: 'guildMember',
					default: message => message.member
				}
			]
		});
	}

	cooldown(message) {
		if (this.client.patron.users.get(message.author, 'patron', false) || this.client.voter.isVoter(message.author.id)) return 1000;
		return 3000;
	}

	async exec(message, { data, member }) {
		await firestore.collection('linked_players')
			.doc(member.id)
			.update({
				[message.guild.id]: {
					guild: message.guild.id,
					user: member.id,
					tag: data.tag,
					name: data.name,
					createdAt: new Date()
				}
			}, { merge: true });

		const prefix = this.handler.prefix(message);
		const embed = this.client.util.embed()
			.setColor(0x10ffc1)
			.addField(`Linked **${member.user.tag}** to ${data.name} (${data.tag})`, [
				'You\'ve successfully linked.',
				`You can link multiple accounts, to view your all accounts use **\u200b${prefix}profile** command.`,
				'',
				'If you don\'t provide the tag for other lookup comamnds, the Bot will use the last one you linked.',
				'',
				`For Examples **\u200b${prefix}player** will return the info of ${data.name} (${data.tag}).`,
				'',
				`As well as **\u200b${prefix}units** will return the player units for the same account.`,
				'',
				`Also get info by mention or user-id **\u200b${prefix}player <user/id>** (works if the user is linked).`
			])
			.setThumbnail(member.user.displayAvatarURL());
		return message.util.send({ embed });
	}
}

module.exports = LinkPlayerCommand;
