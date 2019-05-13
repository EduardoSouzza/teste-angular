"use strict";
const Usuario_1 = require("./definitions/Usuario");
class Usuario {
    static create(Usuario) {
        return new Promise((resolve, reject) => {
            Usuario_1.UsuarioModel.create(Usuario, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    static updateUsuario(obj) {
        return new Promise((resolve, reject) => {
            Usuario_1.UsuarioModel.findByIdAndUpdate(obj._id, {
                nome: obj.nome,
                sobrenome: obj.sobrenome,
                sexo: obj.sexo,
                data: obj.data,
                cidade: obj.cidade,
                estado: obj.estado,
                areaFormacao: obj.areaFormacao,
                profissao: obj.profissao,
                email: obj.email
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    static deleteUsuario(id) {
        return new Promise((resolve, reject) => {
            Usuario_1.UsuarioModel.findByIdAndUpdate(id, {
                isDeleted: true
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    static findAllConditions(texto) {
        return new Promise((resolve, reject) => {
            Usuario_1.UsuarioModel.find({
                isDeleted: false,
                $or: [
                    { nome: new RegExp(texto, "i") },
                    { sobrenome: new RegExp(texto, "i") },
                    { profissao: new RegExp(texto, "i") }
                ],
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    static findAll() {
        return new Promise((resolve, reject) => {
            Usuario_1.UsuarioModel.find({
                isDeleted: false
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Usuario;
