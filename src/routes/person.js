const express = require('express');
const ExerciceController = require('../controllers/person');

const controller = new ExerciceController();
const router = express.Router();

router.get('/api/names', controller.GetAll);
router.get('/api/name/:id', controller.GetById);
router.post('/api/name', controller.Add);
router.put('/api/name/:id', controller.Update);
router.delete('/api/name/:id', controller.Delete);

module.exports = router;
