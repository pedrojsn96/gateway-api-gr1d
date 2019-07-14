const routes = require('express').Router();

const api = require('./services/api');
const apiBoost = require('./services/apiBoost');

const FirebaseDB = require('./services/firebaseConfig');

// Mongeral API Methods

// Pega os modelos de proposta disponiveis
routes.get('/modeloproposta', (req, res) => {
	const queryParams = req.query;
	api
		.get('/modeloproposta', {
			params: queryParams
		})
		.then(response => {
			return res.send(response.data.Valor);
		})
		.catch(error => {
			return res.send(error);
		});
});

// Faz uma simulacao e persiste no Firebase
routes.post('/simulacao', (req, res) => {
	const queryParams = req.query;
	const dataBody = req.body;

	const newUser = FirebaseDB.ref('usuarios/ ' + dataBody.simulacoes.user_id);

	api
		.post(
			`/simulacao?codigoModeloProposta=${
				queryParams.codigoModeloProposta
			}&cnpj=${queryParams.cnpj}`,
			dataBody
		)
		.then(response => {
			newUser.child('simulacao').set({
				...response.data.simulacoes
			});
			return res.send(response.data);
		})
		.catch(error => {
			return res.send(error);
		});
});

// Cria uma proposta e persiste no Firebase
routes.post('/proposta/1', (req, res) => {
	const queryParams = req.query;
	const dataBody = req.body;
	const { PROPOSTA } = dataBody;

	const getUser = FirebaseDB.ref('usuarios/ ' + PROPOSTA.user_id);

	api
		.post(`/proposta/1?empresa=${queryParams.empresa}`, dataBody)
		.then(response => {
			getUser.child('proposta').set({
				...PROPOSTA,
				numeroProposta: response.data.numeroProposta
			});
			return res.send(response.data);
		})
		.catch(error => {
			return res.send(error);
		});
});

// Recupera uma proposta
routes.get('/proposta/:id', (req, res) => {
	const queryParams = req.query;
	api
		.get(`/proposta/${req.params.id}`, {
			params: queryParams
		})
		.then(response => {
			return res.send(response.data);
		})
		.catch(error => {
			return res.send(error);
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
			return res.send(response.data);
		})
		.catch(error => {
			return res.send(error);
		});
});

// Boost API

// Valida dados do usuário
routes.post('/identity', (req, res) => {
	const dataBody = req.body;

	const getUser = FirebaseDB.ref('usuarios/ ' + dataBody.user_id);

	apiBoost
		.post('/peoplev2', dataBody)
		.then(response => {
			const { BasicData } = response.data.Result;
			getUser.child('infoPessoais').set({
				age: BasicData.Age,
				name: BasicData.Name,
				mae: BasicData.MotherName
			});
			return res.send(BasicData);
		})
		.catch(error => {
			return res.send(error);
		});
});

module.exports = routes;
