const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/getUser', (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
