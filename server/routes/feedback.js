const express = require('express');
const router = express.Router();
const { create, find } = require('../modules/queries');

router.get('/', (req, res) => {
  find('feedback')
    .then(results => res.send(results.rows))
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  create('feedback', req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
});

module.exports = router;