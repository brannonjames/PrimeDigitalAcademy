const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('30 activity server running on ', PORT);
});

