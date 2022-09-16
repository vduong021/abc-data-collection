const express = require('express');
const abcController = require('../controllers/abcControllers');
const router = express.Router();

router.get('/', abcController.getAllClient, (req, res) => 
  res.status(200).json(res.locals.getAll));

router.get('/:client', abcController.getClient, (req, res) => res.status(200).json(res.locals.data));

router.post('/', abcController.createForm, abcController.getAllClient, (req, res) => res.status(200).json(res.locals.getAll));

router.delete('/:id', abcController.deleteForm, (req, res) => res.status(200));

router.put('/:id', abcController.updateForm, (req, res) => res.status(200).json(res.locals.update));

module.exports = router;