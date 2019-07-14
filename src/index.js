const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen('3000', () => {
	console.log('This application is running !!!!');
});
