const routes = require('express').Router();

const api = require('./services/api');

// Mongeral API Methods

// Pegar os modelos de proposta disponiveis
routes.get('/modeloproposta', (req, res) => {
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
routes.post('/simulacao', (req, res) => {
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
routes.post('/proposta/1', (req, res) => {
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
routes.get('/proposta/:id', (req, res) => {
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
routes.get('/timeline', (req, res) => {
	const queryParams = req.query;
	api
		.get('/timeline', {
			params: queryParams
		})
		.then(response => {
			console.log('response:', response.data);
			return response.data;
		})
		.catch(error => {
			// console.log('error: ', error);
			return error;
		});
});

module.exports = routes;
