import Usuario from './../model/Usuario';

class UsuarioCtrl {

    static findAll(req, res, next) {
        Usuario.findAll()
            .then(data => {
                res.json(data);
            }, error => next(error));
    }


    static findAllConditions(req, res, next) {
        console.log(req.params.texto);
        Usuario.findAllConditions(req.params.texto)
            .then(data => {
                res.json(data);
            }, error => next(error));
    }


    static create(req, res, next) {
        Usuario.create(req.body).then((data) => {
            res.json(data);
        }, (err) => {
            next(err);
        });
    }
    static update(req, res, next) {
        Usuario.updateUsuario(req.body).then((obj) => {
            res.send(obj);
        }, (err) => {
            next(err)
        });
    }

    static delete(req, res, next) {
        Usuario.deleteUsuario(req.params.id)
            .then(data => res.send(data), error => next(error));
    }


}

export default UsuarioCtrl;