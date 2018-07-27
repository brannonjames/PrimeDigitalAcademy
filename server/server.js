const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const calculatorRoutes = require('./routes/calculate');
const historyRoutes = require('./routes/history');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/calculate', calculatorRoutes);
app.use('/history', historyRoutes);
app.use(function(err, req, res, next){
  res.status(err.status || 500).json(err.message);
});

app.listen(PORT, function(){
  console.log('Server is running on ', PORT);
});
