'use strict';

const Cord = require('../../entities/Cord');
const identifyContentCommand = require('./identifyContent');

module.exports = (gameConfiguration) => {
  const execute = (matrix) => {
    const { columns, rows } = gameConfiguration;
    // comenzar a añadir simbologia, si tiene boombs cercanas, si es bomba o está en blank
    for (let column = 0; column < columns; column++) {
      for (let row = 0; row < rows; row++) {
        const cord = new Cord(column, row);
        const cell = matrix[cord.column][cord.row];
        const content = identifyContentCommand(gameConfiguration).execute(
          matrix,
          cord
        );

        cell.content = content;
      }
    }

    return matrix;
  };

  return {
    execute,
  };
};
