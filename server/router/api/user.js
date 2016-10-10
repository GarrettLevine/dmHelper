const express = require('express');
const router = express.Router();

router.get('/getUser', (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
