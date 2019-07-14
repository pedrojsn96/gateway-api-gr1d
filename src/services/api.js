const axios = require('axios');

const api = axios.create({
	baseURL: 'https://gateway.gr1d.io/sandbox/mongeral/v1/',
	headers: {
		'x-api-key': '3cd346aa-a061-4242-b249-08985f4ce862',
		'Content-Type': 'application/json'
	}
});

module.exports = api;
