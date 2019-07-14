const axios = require('axios');

const api = axios.create({
	baseURL: process.env.BASE_URL,
	headers: {
		'x-api-key': process.env.API_KEY,
		'Content-Type': 'application/json'
	}
});

module.exports = api;
