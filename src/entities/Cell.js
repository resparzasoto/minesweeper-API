'use strict';

const constants = require('../utils/constants');

class Square {
  constructor(content = undefined, state = constants.CELL.STATES.UNCOVERED) {
    this.content = content;
    this.state = state;
  }
}

module.exports = Square;
