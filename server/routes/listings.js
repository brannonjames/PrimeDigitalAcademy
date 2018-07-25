const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', function(req, res){
  db.find(req.query.type)
    .then(listings => {
      res.send(listings.rows);
    })
    .catch(err => {
      res.status(500).json(err.message || 'somethings went wrong');
    });
});

router.post('/', function(req, res){
  db.add(req.body)
  .then(() => {
    res.send({ success: true });
  })
  .catch(err => {
    res.status(500).json(err.message || 'somethings went wrong');
  });
});

router.delete('/:id', function(req, res){
  db.remove(req.params.id)
  .then(() => {
    res.send({ success: true });
  })
  .catch(err => {
    res.status(500).json(err.message || 'somethings went wrong');
  });
});


module.exports = router;