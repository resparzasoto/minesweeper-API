'use strict';

const Cell = require('../entities/Cell');
const Cord = require('../entities/Cord');

const createMatrix = (columns, rows) => {
  const matrix = [];

  for (let column = 0; column < columns; column++) {
    matrix[column] = [];
    for (let row = 0; row < rows; row++) {
      const cord = new Cord(column, row);
      matrix[cord.column][cord.row] = new Cell(cord);
    }
  }

  return matrix;
};

module.exports = createMatrix;
