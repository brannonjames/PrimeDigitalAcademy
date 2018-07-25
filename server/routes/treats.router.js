const router = require('express').Router();
const db = require('../modules/treats');


// GET /treats

router.get('/', function(req, res){
  db.find(req.query.q)
    .then(data => res.send(data.rows))
    .catch(err => res.send(err));
});

// POST /treats

router.post('/', function(req, res){
  db.create(req.body)
    .then(res => res.sendStatus(res.status || 200))
    .catch(err => res.send(err));
});

// PUT /treats/<id>

router.put('/:id', function(req, res){
  db.findByIdAndUpdate(req.params.id, req.body)
    .then(res => res.sendStatus(res.status || 200))
    .catch(err => res.send(err));
});

// DELETE /treats/<id>

router.delete('/:id', function(req, res){
  db.delete(req.params.id)
  .then(res => res.sendStatus(res.status || 200))
  .catch(err => res.send(err));
});

module.exports = router;
