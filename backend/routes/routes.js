const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.send('Hello World')
})

router.post('/addtask', (req, res) => {
  res.send('teste')
})

module.exports = {
  router,
};
