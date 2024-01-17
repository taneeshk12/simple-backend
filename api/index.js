// api/index.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, this is the /api route!');
});

module.exports = router;
