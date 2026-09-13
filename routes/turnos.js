const express = require('express');
const router = express.Router();
const TurnoController = require('../controllers/TurnoController');

// Rutas dinámicas
router.get('/', TurnoController.listar);
router.post('/', TurnoController.crear);
router.get('/:id', TurnoController.obtener);
router.delete('/:id', TurnoController.eliminar);

module.exports = router;
