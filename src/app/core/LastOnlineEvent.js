const { mongodb } = require('../struct/Database');
const { MessageEmbed } = require('discord.js');
const { ObjectId } = require('mongodb');

class LastOnlineEvent {
	constructor(client) {
		this.client = client;
		this.cached = new Map();
	}

	async exec(_id, clan, update) {
		const cache = this.cached.get(ObjectId(_id).toString());
		console.log(clan.name, typeof _id);
		if (Object.keys(update).length) {
			await mongodb.db('clashperk')
				.collection('lastonlines')
				.updateOne({ tag: clan.tag }, update, { upsert: true })
				.catch(error => this.logger.error(error, { label: 'MONGO_ERROR' }));
		}

		if (cache) {
			return this.permissionsFor(cache, clan);
		}
	}

	permissionsFor(cache, clan) {
		console.log('t');
		const permissions = [
			'READ_MESSAGE_HISTORY',
			'SEND_MESSAGES',
			'EMBED_LINKS',
			'USE_EXTERNAL_EMOJIS',
			'ADD_REACTIONS',
			'VIEW_CHANNEL'
		];

		console.log(this.client.channels.cache.has(cache.channel));
		if (this.client.channels.cache.has(cache.channel)) {
			const channel = this.client.channels.cache.get(cache.channel);
			if (channel.permissionsFor(channel.guild.me).has(permissions, false)) {
				console.log('perm');
				return this.handleMessage(cache._id, channel, clan);
			}
		}
	}

	async handleMessage(_id, channel, clan) {
		const cache = this.cached.get(_id);
		console.log(cache);
		if (cache && cache.msg && cache.msg.deleted) {
			const msg = await this.sendNew(_id, channel, clan);
			if (!msg) return;

			await mongodb.db('clashperk')
				.collection('lastonlinelogs')
				.updateOne({ id: ObjectId(_id).toString() }, { $set: { message: msg.id } })
				.catch(() => null);

			cache.msg = msg;
			return this.cached.set(_id, cache);
		}

		if (cache && cache.msg && !cache.msg.deleted) {
			const msg = await this.edit(_id, cache.msg, clan);
			cache.msg = msg;
			return this.cached.set(_id, cache);
		}

		const msg = await channel.messages.fetch(cache.message, false)
			.catch(error => {
				this.client.logger.warn(error, { label: 'LAST_ONLINE_FETCH_MESSAGE' });
				return null;
			});

		if (!msg) {
			const msg = await this.sendNew(_id, channel, clan);
			if (!msg) return;

			await mongodb.db('clashperk')
				.collection('lastonlinelogs')
				.updateOne({ id: ObjectId(_id).toString() }, { $set: { message: msg.id } })
				.catch(() => null);

			cache.msg = msg;
			return this.cached.set(_id, cache);
		}

		if (msg) {
			cache.msg = msg;
			this.cached.set(_id, cache);
			return this.edit(_id, msg, clan);
		}
	}

	async sendNew(_id, channel, clan) {
		const embed = await this.embed(_id, clan);
		return channel.send({ embed });
	}

	async edit(_id, message, clan) {
		const embed = await this.embed(_id, clan);
		return message.edit({ embed });
	}

	async embed(_id, clan) {
		const cache = this.cached.get(_id);
		const embed = new MessageEmbed();
		if (cache) {
			embed.setColor(0x5970c1)
				.setTimestamp()
				.setAuthor(clan.name);
			// TODO: More

			return embed;
		}

		embed.setColor(0x5970c1)
			.setTimestamp()
			.setAuthor(clan.name);
		// TODO: More

		return embed;
	}

	async init() {
		const collection = await mongodb.db('clashperk')
			.collection('lastonlinelogs')
			.find()
			.toArray();

		collection.forEach(data => {
			if (this.client.guilds.cache.has(data.guild)) {
				this.cached.set(data.id, {
					_id: data.id,
					guild: data.guild,
					channel: data.channel,
					message: data.message
				});
			}
		});
	}

	add(data) {
		return this.cached.set(data._id, {
			_id: data.id,
			guild: data.guild,
			channel: data.channel,
			message: data.message
		});
	}

	delete(_id) {
		return this.cached.delete(_id);
	}
}

module.exports = LastOnlineEvent;
