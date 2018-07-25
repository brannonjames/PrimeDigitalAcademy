const express = require('express');
const bodyParser = require('body-parser');
const listingsRoutes = require('./routes/listings');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/listings', listingsRoutes);

app.listen(PORT, () => {
  console.log('real-estate-listings running on port ', PORT);
})
