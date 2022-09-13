const express = require('express');
const abcController = require('../controllers/abcControllers');
const router = express.Router();



router.post('/index', abcController.createForm, (req, res) => res.status(200).json(res.locals.newInstance));

module.exports = router;