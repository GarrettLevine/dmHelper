const express = require('express');
const router = express.Router();

const User = require('../../models').user;

router.get('/getUser', (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
