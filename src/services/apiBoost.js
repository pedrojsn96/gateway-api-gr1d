const axios = require('axios');

const apiBoost = axios.create({
	baseURL: process.env.BOOST_BASE_URL,
	headers: {
		'x-api-key': process.env.BOOST_API_KEY,
		'Content-Type': 'application/json'
	}
});

module.exports = apiBoost;
