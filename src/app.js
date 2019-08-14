'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('mongodb://127.0.0.1:27017/estados_cidades');

// Carrega Models
const Estado = require('./models/estado');

// Carrega as Rotas
const indexRoute = require('./routes/index-routes');
const estadoRoute = require('./routes/estado-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/estados', estadoRoute);

module.exports = app;
