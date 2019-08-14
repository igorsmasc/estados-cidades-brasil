'use strict'

const mongoose = require('mongoose');
const Estado = mongoose.model('Estado');

// Traz todos os estados

exports.get = (req, res, next) => {
    Estado
    .find({ }, 'sigla nome')
    .then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });

}

// Insere grupo de estados

exports.post = (req, res, next) => {
    Estado.insertMany(req.body).then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });
}

// Edita estado

exports.put = (req, res, next) => {
    const id = req.params.id;

    res.status(200).send({
        id: id,
        item: req.body
    });
}

// Deleta estado

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}