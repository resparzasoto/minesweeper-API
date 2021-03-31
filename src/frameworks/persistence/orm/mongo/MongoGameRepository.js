'use strict';

const GameRepository = require('../../../../application/contracts/GameRepository');

const GameModel = require('./models/GameModel');

module.exports = class MongoGameRepository extends GameRepository {
  constructor() {
    super();
    this.Model = GameModel;
  }

  async add(gameInstance) {
    const game = new this.Model(gameInstance);
    const addedGame = await game.save();
    return addedGame;
  }

  async update(gameInstance) {}

  async get(id) {
    const searchedGame = await this.Model.findById(id);
    return searchedGame;
  }
};
