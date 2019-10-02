const { Command } = require('discord-akairo');

class MembersCommand extends Command {
	constructor() {
		super('members', {
			aliases: ['members'],
			category: 'lookup',
			cooldown: 0,
			description: {
				content: 'List of clan members (--th to view th levels).',
				usage: '<tag> [th] [th level]',
				examples: [
					'#8QU8J9LP',
					'#8QU8J9LP th',
					'#8QU8J9LP th 10',
					'#8QU8J9LP th 9'
				]
			},
			args: [
				{
					id: 'num',
					match: 'option',
					flag: ['--th', '-th', 'th']
				},
				{
					id: 'name',
					match: 'rest',
					default: ''
				}
			]
		});
	}

	exec(message, { name, num: type, num }) {
		let command;
		if (type) {
			command = this.handler.modules.get('members-th');
		} else {
			command = this.handler.modules.get('members-league');
		}
		console.log(command);
		return this.handler.handleDirectCommand(message, type ? `${num} ${name}` : name, command, false);
	}
}

module.exports = MembersCommand;
