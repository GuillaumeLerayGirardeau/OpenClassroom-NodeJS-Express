const express = require('express');
const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff');

const router = express.Router();

router.post('/', stuffCtrl.createThing);

router.get('/', (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

module.exports = router;