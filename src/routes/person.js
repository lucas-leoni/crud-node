const express = require('express');
const PersonController = require('../controllers/person');
const authMiddleware = require('../middleware/auth');

const controller = new PersonController();
const router = express.Router();

router.post('/api/login', controller.Login);
router.get('/api/people', authMiddleware, controller.GetAll);
router.get('/api/person/:id', authMiddleware, controller.GetById);
router.post('/api/person', authMiddleware, controller.Add);
router.put('/api/person/:id', authMiddleware, controller.Update);
router.delete('/api/person/:id', authMiddleware, controller.Delete);

module.exports = router;
