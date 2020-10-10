const emoji = require('emoji.json');

module.exports = (msg) => {
	const regex = /!react\s(.*)/i;
	let rand = Math.floor(Math.random() * emoji.length);
	let emojiChar = '';
	if (msg === '!react') {
		return emoji[rand].char;
	} else if (regex.test(msg)) {
		let msgW = msg.split(regex);
		let msgC = msgW[1];
		if (emoji.some((item) => item.name.toUpperCase() === msgC.toUpperCase())) {
			let index = emoji.name.findIndex((a) => a.name.toLowerCase() === msgC.toLowerCase());
			emojiChar = emoji[index].char.toString();
		}
		return emojiChar;
	}
};
