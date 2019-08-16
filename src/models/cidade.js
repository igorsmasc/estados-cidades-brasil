"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cidadeModel = new Schema({
  nome: { type: String, required: true, index: true },
  uf: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: false
  }
});

module.exports = mongoose.model("Cidade", cidadeModel);
