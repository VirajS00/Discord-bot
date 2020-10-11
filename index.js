const { Client, MessageAttachment } = require('discord.js');
const dotenv = require('dotenv').config();
const client = new Client();
const eightBall = require('./includes/8ball');
const reaction = require('./includes/reation');

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
	if (msg.guild.id === '702406379624988712' && msg.channel.id === '764146680635326529') {
		if (msg.content.toLowerCase() === '!ping') {
			await msg.channel.send('pong');
		} else if (msg.content.toLowerCase() === '!8ball') {
			await msg.channel.send('⓼ ' + eightBall());
		} else if (msg.content.toLowerCase() === '!sticker') {
			let rand = Math.floor(Math.random() * 7) + 1;
			let attachment = new MessageAttachment('./friendss/' + rand + '.webp');
			await msg.channel.send(attachment);
		}
		await msg.react(reaction(msg.content.toLowerCase()));
		// await msg.react(reaction(msg.content.toLowerCase()));
	}
});

client.login(process.env.BOT_TOKEN);
