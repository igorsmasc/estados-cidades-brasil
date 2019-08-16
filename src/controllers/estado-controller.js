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

exports.getById = (req, res, next) => {
    Estado
    .findById(req.params.id , 'sigla nome')
    .then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });

}

exports.getBySigla = (req, res, next) => {
    Estado
    .find({ sigla: req.params.sigla }, 'sigla nome')
    .then(data => {

        res.status(200).send({data});
 
    }).catch(e => {
        res.status(400).send({e});
    });

}

exports.post = (req, res, next) => {
   var estado = new Estado(req.body);
   estado.save()
    .then(x => {
        res.status(200).send({ message: 'Estado cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Erro ao cadastrar Estado!', data: e });
    });
   res.status(201).send(req.body);
}

// Insere grupo de estados

exports.postMany = (req, res, next) => {
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