const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validarJWT = require('../middlewares/validarJWT');
const autorizarPefil = require('../middlewares/autorizarPerfil');

// Rotas públicas
router.post('/register', authController.registrar);
router.post('/login', authController.login);

// Rota privada comum
router.get('/perfil', validarJWT, authController.perfil);

module.exports = router;
