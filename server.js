const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config();

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
