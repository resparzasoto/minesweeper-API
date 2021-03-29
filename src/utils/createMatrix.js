'use strict';

const Square = require('../entities/Cell');

const createMatrix = (columns, rows) => {
  const matrix = [];

  for (let column = 0; column < columns; column++) {
    matrix[column] = [];
    for (let row = 0; row < rows; row++) {
      matrix[column][row] = new Square();
    }
  }

  return matrix;
};

module.exports = createMatrix;
