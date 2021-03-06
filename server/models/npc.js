'use strict'

const mongoose = require('mongoose');

const NPCSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  race: String,
  feature: String,
  highAbility: Object,
  lowAbility: Object,
  talent: String,
  mannerisms: String,
  interaction: String,
  bond: String,
  flaw: String,
});

module.exports = mongoose.model('NPC', NPCSchema);
