const express = require('express');
const router = express.Router();
let history = require('../modules/history');

router.get('/', function(req, res){
  res.status(200).send(history.get(req.query.limit));
});

router.delete('/', function(req, res){
  history.delete();
  res.status(200).send('deleted');
})

module.exports = router;