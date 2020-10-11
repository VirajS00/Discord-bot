const emoji = require('emoji.json');

const search = (nameKey, myArray) => {
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i].name.includes(nameKey)) {
			return myArray[i].char;
		}
	}
};

module.exports = (msg) => {
	const regex = /!react\s(.*)/i;
	let rand = Math.floor(Math.random() * emoji.length);
	if (msg === '!react') {
		return emoji[rand].char;
	} else if (regex.test(msg)) {
		let msgW = msg.split(regex);
		let msgC = msgW[1];
		let emojiChar = search(msgC, emoji);
		return emojiChar;
	}
};
