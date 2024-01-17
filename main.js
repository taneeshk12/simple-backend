// index.js

const express = require('express');
const app = express();
const port = 3000;

// Import the /api route
const apiRoutes = require('./api');

// Use the /api route
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
