const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

module.exports = async (msg) => {
	let cont = msg.split(/!gif\s(.*)/i);
	let query = cont[1];
	let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env
		.GIPHY_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en`;
	const res = await fetch(url);
	const json = await res.json();
	return json.data[0].images.fixed_height_downsampled.webp;
};
