const emoji = require('emoji.json');

const AddIng = (str) => {
	let newStr = '';
	if (str.endsWith('e')) {
		newStr = str.substr(0, str.length - 1);
	} else {
		newStr = str;
	}
	if (newStr.length === 0 || newStr === '') return;
	const ing = 'ing';
	let finalStr = newStr + ing;
	return finalStr;
};

const search = (nameKey, myArray) => {
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i].name.includes(nameKey) || myArray[i].name.includes(AddIng(nameKey))) {
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
