module.exports = () => {
	let emojiArr = [];
	let messages = [
		'Mihir kinda sus',
		'Got it!',
		'Ricks nahi lene ka',
		'Understandable, have a nice day',
		'no no',
		'Brooooo',
		"Sir, you're muted",
		'Pact karega?',
		'Life is in a tunak'
	];
	let rand = Math.floor(Math.random() * messages.length);
	return messages[rand];
};
