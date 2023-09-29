const express = require('express');
const PersonController = require('../controllers/person');

const controller = new PersonController();
const router = express.Router();

router.get('/api/people', controller.GetAll);
router.get('/api/person/:id', controller.GetById);
router.post('/api/person', controller.Add);
router.put('/api/person/:id', controller.Update);
router.delete('/api/person/:id', controller.Delete);

module.exports = router;
