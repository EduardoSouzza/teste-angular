import * as express from 'express';

import UsuarioCtrl from '../controllers/UsuarioCtrl';

var router = express.Router();


//Usuario 
router.get('/usuario', UsuarioCtrl.findAll);
router.post('/usuario', UsuarioCtrl.create);
router.put('/usuario', UsuarioCtrl.update);
router.delete('/usuario/:id', UsuarioCtrl.delete);
router.get('/usuario/:texto', UsuarioCtrl.findAllConditions);

export = router;    