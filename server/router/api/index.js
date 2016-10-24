const express = require('express');
const router = express.Router();

// GET TO ROUTIN'
router.use('/user', require('./user'));
router.use('/npc', require('./npc'));

module.exports = router;
