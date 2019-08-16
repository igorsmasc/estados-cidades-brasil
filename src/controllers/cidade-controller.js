'use strict'

const mongoose = require('mongoose');
const Cidade = mongoose.model('Cidade');

// Traz todas as cidades de um estado

exports.get = (req, res, next) => {
    Cidade
    .find({ }, 'nome uf')
    .then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });

}

exports.getById = (req, res, next) => {
    Cidade
    .findById(req.params.id , 'uf nome')
    .then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });

}

exports.getByUF = (req, res, next) => {
    Cidade
    .find({ uf: req.params.uf }, 'uf nome')
    .then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });

}

exports.postMany = (req, res, next) => {
    Cidade.insertMany(req.body).then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });
}