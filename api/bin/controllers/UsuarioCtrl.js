"use strict";
const Usuario_1 = require("./../model/Usuario");
class UsuarioCtrl {
    static findAll(req, res, next) {
        Usuario_1.default.findAll()
            .then(data => {
            res.json(data);
        }, error => next(error));
    }
    static findAllConditions(req, res, next) {
        console.log(req.params.texto);
        Usuario_1.default.findAllConditions(req.params.texto)
            .then(data => {
            res.json(data);
        }, error => next(error));
    }
    static create(req, res, next) {
        Usuario_1.default.create(req.body).then((data) => {
            res.json(data);
        }, (err) => {
            next(err);
        });
    }
    static update(req, res, next) {
        Usuario_1.default.updateUsuario(req.body).then((obj) => {
            res.send(obj);
        }, (err) => {
            next(err);
        });
    }
    static delete(req, res, next) {
        Usuario_1.default.deleteUsuario(req.params.id)
            .then(data => res.send(data), error => next(error));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsuarioCtrl;
