"use strict";
const IDefault_1 = require("./IDefault");
const mongoose = require("mongoose");
let schema = {
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    profissao: { type: String, required: true },
    areaFormacao: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    sexo: { type: String, required: true },
    email: { type: String, required: true },
    data: { type: String, required: true }
};
IDefault_1.Inject(schema);
exports.UsuarioMasterSchema = new mongoose.Schema(schema);
exports.UsuarioModel = mongoose.model('Usuario', exports.UsuarioMasterSchema, 'Usuario', false);
