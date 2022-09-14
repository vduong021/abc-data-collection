const express = require('express');
const abcController = require('../controllers/abcControllers');
const router = express.Router();


router.get('/:client', abcController.getClient, (req, res) => res.status(200).json(res.locals.data));

router.post('/', abcController.createForm, (req, res) => res.status(200).json(res.locals.newInstance));

router.delete('/:id', abcController.deleteForm, (req, res) => res.status(200).json(res.locals.form));

router.put('/:id', abcController.updateForm, (req, res) => res.status(200).json(res.locals.update));

module.exports = router;