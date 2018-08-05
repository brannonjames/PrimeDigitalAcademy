const express = require('express');
const router = express.Router();
const { create, find, findByIdAndRemove } = require('../modules/queries');

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

router.delete('/:id', (req, res) => {
  findByIdAndRemove('feedback', req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
})

module.exports = router;