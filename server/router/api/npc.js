const express = require('express');
const router = express.Router();

const NPC = require('../../models').npc;

router.get('/getOne', (req, res) => {
  new Promise((resolve, reject) => {
    NPC.findOne({ where: { id: req.data.id }}, npc => {
      res.json(npc);
      resolve();
    })
    .catch(err => {
      reject();
      res.json(err);
    });
  });
});

router.post('/create', (req, res) => {
  const newNpc = new NPC(req.body.data);
  console.log(newNpc);

  new Promise((resolve, reject) => {
    NPC.create(npc => {
      res.json(npc);
      resolve();
    })
    .catch(err => {
      reject();
      res.json(err);
    });
  });
});


module.exports = router;