'use strict';

const constants = require('../utils/constants');

class Cell {
  constructor(
    cord,
    isMine = false,
    content = constants.CELL.CONTENT.BLANK,
    state = constants.CELL.STATES.UNCOVERED
  ) {
    // debug
    this.column = cord.column;
    this.row = cord.row;
    this.isMine = isMine;
    this.content = content;
    this.state = state;
  }
}

module.exports = Cell;
