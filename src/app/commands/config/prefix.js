const { Argument, Command } = require('discord-akairo');

class PrefixCommand extends Command {
	constructor() {
		super('prefix', {
			aliases: ['prefix'],
			category: 'config',
			channel: 'guild',
			quoted: false,
			description: {
				content: 'Displays or changes the prefix of the guild.',
				usage: '<prefix>',
				examples: ['!', '?']
			},
			args: [
				{
					id: 'prefix',
					type: Argument.validate('string', (msg, p) => !/\s/.test(p) && p.length <= 3),
					prompt: {
						retry: 'Please provide a prefix without spaces and less than 3 characters.',
						optional: true
					}
				}
			]
		});
	}

	cooldown(message) {
		if (this.client.patron.check(message.author, message.guild)) return 1000;
		return 3000;
	}

	regex() {
		return new RegExp(`^<@!?(${this.client.user.id})>$`, 'i');
	}

	exec(message, { prefix }) {
		if (/^<@!?(\d+)>$/.test(message.content) && !message.mentions.has(this.client.user.id)) return;
		if (!prefix) {
			return message.util.send(`The current prefix for this guild is \`${this.handler.prefix(message)}\``);
		}
		if (prefix && !message.member.permissions.has('MANAGE_GUILD')) {
			return message.util.send([
				`The current prefix for this guild is \`${this.handler.prefix(message)}\``,
				'You are missing `Manage Server` to change the prefix.'
			]);
		}
		this.client.settings.set(message.guild, 'prefix', prefix);
		if (prefix === this.handler.prefix(message)) {
			return message.util.send(`Prefix has been reset to \`${prefix}\``);
		}
		return message.util.send(`Prefix has been set to \`${prefix}\``);
	}
}

module.exports = PrefixCommand;
