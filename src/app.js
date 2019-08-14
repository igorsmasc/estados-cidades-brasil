'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as Rotas
const indexRoute = require('./routes/index-routes');
const estadoRoute = require('./routes/estado-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/estados', estadoRoute);

module.exports = app;
