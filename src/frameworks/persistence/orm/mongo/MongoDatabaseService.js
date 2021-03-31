/* eslint-disable no-console */
'use strict';

const mongoose = require('mongoose');
const DatabaseService = require('../../../../application/contracts/DatabaseService');
const MongoGameRepository = require('./MongoGameRepository');

module.exports = class MongoDatabaseService extends DatabaseService {
  constructor() {
    super();
    this.gameRepository = new MongoGameRepository();
  }

  async initDatabase() {
    mongoose.connect(
      'mongodb://admin:admin@localhost:27017/minesweeper?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = mongoose.connection;

    db.once('open', () => {
      return console.log('connection successfully');
    });
    db.on('error', () => {
      return console.error('error in connection');
    });
  }
};
