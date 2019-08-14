'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   
    sigla: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Estado', schema);