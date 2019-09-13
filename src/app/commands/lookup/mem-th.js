const { Command, Flag, Argument } = require('discord-akairo');
const Fetch = require('../../struct/Fetch');
const fetch = require('node-fetch');
const { firestore } = require('../../struct/Database');
const { geterror, fetcherror } = require('../../util/constants');

const TownHallEmoji = {
	2: '<:townhall2:534745498561806357>',
	3: '<:townhall3:534745539510534144>',
	4: '<:townhall4:534745571798286346>',
	5: '<:townhall5:534745574251954176>',
	6: '<:townhall6:534745574738624524>',
	7: '<:townhall7:534745575732805670>',
	8: '<:townhall8:534745576802353152>',
	9: '<:townhall9:534745577033039882>',
	10: '<:townhall10:534745575757709332>',
	11: '<:townhall11:534745577599270923>',
	12: '<:townhall12:534745574981894154>'
};

const API = [
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIzYTdkMDcxLTM0M2UtNDA2Yy04MDQ0LWFmNDk0NmQ1OGVhNSIsImlhdCI6MTU2ODMwNjEwNSwic3ViIjoiZGV2ZWxvcGVyLzNiZTY0NzFkLWM1ODAtNjIyMy0xOWNhLTRkY2ZmNzhiMDBiNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.OWvKCU1bdNx0to3d316jsH2xwfZ8mKfnZypNetsBakbhrwOiiWojkAWiKd2iM0Bdqx7cIXTlJgZptpx-YKyWgw',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRjYzA1ZWU0LWFjZWMtNGY5My1hZWNiLWJjOTU1YThiYmUxMiIsImlhdCI6MTU2ODMwNjExMywic3ViIjoiZGV2ZWxvcGVyLzNiZTY0NzFkLWM1ODAtNjIyMy0xOWNhLTRkY2ZmNzhiMDBiNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.N75KyVEJSwOPLoKtXjkhQ1v38LQMIhj8LA6hQqMLHT2ctTHN5ipI73s01Yzibhg59jeipMDLC6fLlH4x155lTA',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI0NmFlYzU1LTgxZWYtNDNlOS05MzkxLThlNGVhYTlkOTAyZSIsImlhdCI6MTU2ODMwNjEyMiwic3ViIjoiZGV2ZWxvcGVyLzNiZTY0NzFkLWM1ODAtNjIyMy0xOWNhLTRkY2ZmNzhiMDBiNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.xr2AStr1a1n9R56BFA1TAn8qgEYGraX23ZmOxV3xJKb2zVZyGT4fSeVrKWDIie682dO_MnYQE8rlTXPmepgYIg',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM1ZTE3OWU2LWViZWEtNGMxYS05NzlkLTQ4MjM3NTkzNzcwMyIsImlhdCI6MTU2ODMwNjEzMywic3ViIjoiZGV2ZWxvcGVyLzNiZTY0NzFkLWM1ODAtNjIyMy0xOWNhLTRkY2ZmNzhiMDBiNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.jNDGf9xsDjKZYHMIGAMU4APdMm1WtX3FjoxCT6Mpc2RoxqICDyeBjrZyWGgeZ1woif4yUxAl0ZK9njhdLD9h_w',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRkM2EyMWQ1LWNmODYtNDVkOS04OWFhLWRjYTI1MDliODc1YSIsImlhdCI6MTU2ODMwNjE0MSwic3ViIjoiZGV2ZWxvcGVyLzNiZTY0NzFkLWM1ODAtNjIyMy0xOWNhLTRkY2ZmNzhiMDBiNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.O3gLGXp8p3br0JGEHl_DGUZM0DVWF2FOH81unCZ79FvjW8catobY8JbPV8bD0X8TzrgsQX-8UexCMSXtVV8miw',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ0NGFjMDdmLWY0NmYtNDBiYS1iYjllLTRkNmFlYjQ5MzYwNCIsImlhdCI6MTU2ODM0Njc2Mywic3ViIjoiZGV2ZWxvcGVyL2ZiMjgwMWUyLTA5ZGUtYjU0OC05ZWEwLTkzMDExYzY1YmUyYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.SeHrl1cNjeXj7YNFRydDYH8waM7H1ZJP4kVtkAe9fsomhZLWaDAQMuS4Dr8_WFFFsqYNlUVG-BP9gnQMrqJ8Hw',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM0NDhlNThmLTc4ODYtNGE0Yy1hYTM3LWNiZWFjNzc0MDkzYiIsImlhdCI6MTU2ODM0Njc3MCwic3ViIjoiZGV2ZWxvcGVyL2ZiMjgwMWUyLTA5ZGUtYjU0OC05ZWEwLTkzMDExYzY1YmUyYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.5cGkrmcG5op7bpmvqBNjXl7eQAbdjgxtEEqEvto2eXgniIgWXdkRqJUGDP4UVyclR7fIfrH1fNTUtQvoYv-VaQ',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZiNTk0MTJlLTViNTUtNDQwNS04ZjUxLTUxNTczYjE0ZDBjNiIsImlhdCI6MTU2ODM0Njc4MCwic3ViIjoiZGV2ZWxvcGVyL2ZiMjgwMWUyLTA5ZGUtYjU0OC05ZWEwLTkzMDExYzY1YmUyYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.uBYFzBZ77aPlVtQlRoAwRFW4SOBPEdu39yg8qsQtHnwBacMbMjEQK1QwzB96vgX5sgses67P6J6MABu8MUXbzw',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY4ZWJmYTBjLWMxOWYtNGI2MC05ZTJhLWVhMGYxYzVjZjBkMyIsImlhdCI6MTU2ODM0Njc5NCwic3ViIjoiZGV2ZWxvcGVyL2ZiMjgwMWUyLTA5ZGUtYjU0OC05ZWEwLTkzMDExYzY1YmUyYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.-PLch4MzuPXEfWItC91ar3hq8ke_wqvTQfeYRvBsAJpVUuh0jxtO5_RUdx9SF9yShCwItpuRI0fC3jnvbQUL6g',
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVkMjQ0NDJhLTA3OGUtNGJiMC1iMWE0LTIyZTc3YmZkOWIyMiIsImlhdCI6MTU2ODM0NjgwMSwic3ViIjoiZGV2ZWxvcGVyL2ZiMjgwMWUyLTA5ZGUtYjU0OC05ZWEwLTkzMDExYzY1YmUyYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjY3LjI0Mi40NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.46CiAxuj2qBclTPeh3s54TfhRIIQy4IOdVO96VH6fU0ng3XAFLC1sqPQPnGeX3tj_4O9gwooYUB1KMEXheBaFA'
];

class MembersTHCommand extends Command {
	constructor() {
		super('members-th', {
			category: 'lookup',
			clientPermissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
			description: {
				content: 'Displays a list of clan members.',
				usage: '<tag>',
				examples: ['#2Q98URCGY', '2Q98URCGY']
			}
		});
	}

	*args() {
		const data = yield {
			type: async (msg, str) => {
				const resolver = this.handler.resolver.type('guildMember')(msg, str || msg.member.id);
				if (!resolver && !str) return null;
				if (!resolver && str) {
					return Fetch.clan(str).then(data => {
						if (data.status !== 200) return msg.util.send({ embed: fetcherror(data.status) }) && Flag.cancel();
						return data;
					});
				}
				const data = await firestore.collection('linked_clans')
					.doc(resolver.id)
					.get()
					.then(snap => snap.data());
				if (!data) return msg.util.send({ embed: geterror(resolver, 'clan') }) && Flag.cancel();
				if (!data[msg.guild.id]) return msg.util.send({ embed: geterror(resolver, 'clan') }) && Flag.cancel();
				return Fetch.clan(data[msg.guild.id].tag).then(data => {
					if (data.status !== 200) return msg.util.send({ embed: fetcherror(data.status) }) && Flag.cancel();
					return data;
				});
			},
			prompt: {
				start: 'what would you like to search for?',
				retry: 'what would you like to search for?'
			}
		};

		const th = yield {
			type: Argument.range('integer', 1, 12, true)
		};

		return { data, th };
	}

	cooldown(message) {
		if (this.client.patron.users.get(message.author, 'patron', false) || this.client.voter.isVoter(message.author.id)) return 3000;
		return 20000;
	}

	async exec(message, { data, th }) {
		await message.util.send('**Making list of your clan members... <a:loading:538989228403458089>**');
		const hrStart = process.hrtime();

		const object_array = await Promise.all([
			this.one(data.memberList.slice(0, 5).map(m => m.tag)),
			this.two(data.memberList.slice(5, 10).map(m => m.tag)),
			this.three(data.memberList.slice(10, 15).map(m => m.tag)),
			this.four(data.memberList.slice(15, 20).map(m => m.tag)),
			this.five(data.memberList.slice(20, 25).map(m => m.tag)),
			this.six(data.memberList.slice(25, 30).map(m => m.tag)),
			this.seven(data.memberList.slice(30, 35).map(m => m.tag)),
			this.eight(data.memberList.slice(35, 40).map(m => m.tag)),
			this.nine(data.memberList.slice(40, 45).map(m => m.tag)),
			this.ten(data.memberList.slice(45, 50).map(m => m.tag))
		]);

		const array = [];
		for (const arr of object_array) {
			for (const member of arr) {
				array.push({ tag: member.tag, name: member.name, townHallLevel: member.townHallLevel });
			}
		}

		const items = this.sort(array);
		const filter = items.filter(arr => arr.townHallLevel === th);
		const first = this.paginate(th ? filter : items, 0, 32);
		const second = this.paginate(th ? filter : items, 32, 35);
		const third = this.paginate(th ? filter : items, 35, 50);

		const embed = this.client.util.embed()
			.setColor(0x5970c1)
			.setAuthor(`${data.name} (${data.tag}) ~ ${data.members}/50`, data.badgeUrls.medium);
		if (first.items.length) embed.setDescription(first.items.map(member => `${TownHallEmoji[member.townHallLevel]} **${member.name}** ${member.tag}`).join('\n'));
		if (second.items.length) {
			embed.addField(second.items.map(member => `${TownHallEmoji[member.townHallLevel]} **${member.name}** ${member.tag}`).join('\n'), [
				third.items.length ? third.items.map(member => `${TownHallEmoji[member.townHallLevel]} **${member.name}** ${member.tag}`).join('\n') : '\u200b'
			]);
		}

		return message.util.send(`*\u200b**Executed in ${((Date.now() - message.createdTimestamp) / 1000).toFixed(2)} sec**\u200b*`, { embed });
	}

	paginate(items, start, end) {
		return { items: items.slice(start, end) };
	}

	sort(items) {
		return items.sort((a, b) => b.townHallLevel - a.townHallLevel);
	}

	async one(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[0]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async two(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[1]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async three(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[2]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async four(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[3]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async five(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[4]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async six(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[5]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async seven(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[6]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async eight(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[7]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async nine(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[8]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}

	async ten(items, collection = []) {
		for (const tag of items) {
			const uri = `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`;
			const member = await fetch(uri, { method: 'GET', headers: { Accept: 'application/json', authorization: `Bearer ${API[9]}` } }).then(res => res.json());
			collection.push({ name: member.name, tag: member.tag, townHallLevel: member.townHallLevel });
		}
		return collection;
	}
}

module.exports = MembersTHCommand;
