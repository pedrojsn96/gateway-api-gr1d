const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');

const api = axios.create({
	baseURL: 'https://gateway.gr1d.io/sandbox/mongeral/v1/',
	headers: {
		'x-api-key': '3cd346aa-a061-4242-b249-08985f4ce862',
		'Content-Type': 'application/json'
	}
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen('3000', () => {
	console.log('This application is running !!!!');
});

// Mongeral API Methods

// Pegar os modelos de proposta disponiveis
app.get('/modeloproposta', (req, res) => {
	const queryParams = req.query;
	api
		.get('/modeloproposta', {
			// params: {
			// 	completo: true,
			// 	canalVenda: 4,
			// 	cnpj: 11321351000110
			// }
			params: queryParams
		})
		.then(response => {
			// console.log('response:', response.data.Valor[0].nome);
			return response.data.Valor;
		})
		.catch(error => {
			// console.log('error: ', error);
			return error;
		});
});

// Fazer uma simulacao
app.post('/simulacao', (req, res) => {
	const queryParams = req.query;
	const dataBody = req.body;

	api
		.post(
			`/simulacao?codigoModeloProposta=${
				queryParams.codigoModeloProposta
			}&cnpj=${queryParams.cnpj}`,
			dataBody
		)
		.then(response => {
			// console.log('response: ', response.data);
			return response.data;
		})
		.catch(error => {
			// console.log('error');
			return error;
		});
});

// Criar uma proposta
app.post('/proposta/1', (req, res) => {
	const queryParams = req.query;
	const dataBody = req.body;

	api
		.post(`/proposta/1?empresa=${queryParams.empresa}`, dataBody)
		.then(response => {
			// console.log('response: ', response.data);
			return response.data;
		})
		.catch(error => {
			// console.log('error');
			return error;
		});
});

// Recuperar uma proposta
app.get('/proposta/:id', (req, res) => {
	const queryParams = req.query;
	api
		.get(`/proposta/${req.params.id}`, {
			params: queryParams
		})
		.then(response => {
			// console.log('response:', response.data);
			return response.data;
		})
		.catch(error => {
			// console.log('error: ', error);
			return error;
		});
});

// Timeline
app.get('/timeline', (req, res) => {
	const queryParams = req.query;
	api
		.get('/timeline', {
			params: queryParams
		})
		.then(response => {
			// console.log('response:', response.data);
			return response.data;
		})
		.catch(error => {
			// console.log('error: ', error);
			return error;
		});
});
