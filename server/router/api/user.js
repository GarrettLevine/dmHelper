const express = require('express');
const router = express.Router();

const User = require('../../models').user;

router.get('/getUser', (req, res) => {
  console.log(req.session);
  res.json({ user: req.user });
});

module.exports = router;
