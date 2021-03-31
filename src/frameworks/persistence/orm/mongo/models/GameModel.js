'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  field: Array,
});

const GameModel = mongoose.model('Game', gameSchema);

module.exports = GameModel;
