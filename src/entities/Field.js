'use strict';

class Field {
  constructor(columns, rows, mines, matrix) {
    this.columns = columns;
    this.rows = rows;
    this.mines = mines;
    this.matrix = matrix;
  }
}

module.exports = Field;
