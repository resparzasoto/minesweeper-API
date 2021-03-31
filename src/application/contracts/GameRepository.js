/* eslint-disable no-unused-vars */
'use strict';

module.exports = class GameRepository {
  constructor() {
    this.Model = null;
  }

  add(gameInstance) {
    return Promise.reject(new Error('not implemented'));
  }

  update(gameInstance) {
    return Promise.reject(new Error('not implemented'));
  }

  get(id) {
    return Promise.reject(new Error('not implemented'));
  }
};
