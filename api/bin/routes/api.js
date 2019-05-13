"use strict";
const express = require("express");
const UsuarioCtrl_1 = require("../controllers/UsuarioCtrl");
var router = express.Router();
//Usuario 
router.get('/usuario', UsuarioCtrl_1.default.findAll);
router.post('/usuario', UsuarioCtrl_1.default.create);
router.put('/usuario', UsuarioCtrl_1.default.update);
router.delete('/usuario/:id', UsuarioCtrl_1.default.delete);
router.get('/usuario/:texto', UsuarioCtrl_1.default.findAllConditions);
module.exports = router;
