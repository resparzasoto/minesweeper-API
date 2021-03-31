'use strict';

module.exports = class GameConfiguration {
  constructor(columns, rows, mines) {
    this.columns = columns;
    this.rows = rows;
    this.mines = mines;
  }
};
