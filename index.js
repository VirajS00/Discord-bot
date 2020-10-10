const Discord = require('discord.js');
const dotenv = require('dotenv').config();
const client = new Discord.Client();
const eightBall = require('./8ball');
const fetch = require('node-fetch');

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
	if (msg.guild.id === '702406379624988712' && msg.channel.id === '764146680635326529') {
		if (msg.content.toLowerCase() === '!ping') {
			await msg.channel.send('pong');
			console.log('ping pong');
		} else if (msg.content.toLowerCase() === '!8ball') {
			await msg.channel.send('🎱 ' + eightBall());
		}
	}
});

client.login(process.env.BOT_TOKEN);
