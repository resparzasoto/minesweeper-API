'use strict';

module.exports = class DatabaseService {
  constructor() {
    this.gameRepository = null;
  }

  initDatabase() {
    return Promise.reject(new Error('not implemented'));
  }
};
