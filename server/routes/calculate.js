const express = require('express');
const router = express.Router();
const math = require('../modules/math');
let history = require('../modules/history');

router.post('/', function(req, res, next){
  const x = parseFloat(req.body.x);
  const y = parseFloat(req.body.y);
  let answer;
  let operator;

  switch(req.body.operator){
    case 'add':
      answer = math.add(x, y);
      operator = '+';
      break;
    case 'subtract':
      answer = math.subtract(x, y);
      operator = '-';
      break;
    case 'multiply':
      answer = math.multiply(x, y);
      operator = '*';
      break;
    case 'divide':
      if(y === 0){
        next({status: 400, message: 'Divide By Zero'});
      }
      answer = math.divide(x, y);
      operator = '/';
      break;
    default:
      answer = 0;
  }

  
  history.new(math.createHistoryObj(x, y, operator, answer));
  
  res.status(201).json(answer);
  
})


module.exports = router;