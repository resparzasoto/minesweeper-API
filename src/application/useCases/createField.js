'use strict';

const Field = require('../../entities/Field');
const Square = require('../../entities/Cell');
const createMatrix = require('../../utils/createMatrix');
const createCord = require('./createCord');
const createMine = require('./createMine');

module.exports = () => {
  const execute = (gameConfiguration) => {
    const { columns, rows, mines } = gameConfiguration;
    let minesCount = 0;

    const matrix = createMatrix(columns, rows);

    while (minesCount < mines) {
      const cord = createCord().execute(gameConfiguration);

      const square = matrix[cord.column][cord.row];

      if (!square.content) {
        const isMine = createMine().execute();

        if (isMine) {
          matrix[cord.column][cord.row] = new Square(isMine);
          minesCount++;
        }
      }
    }

    return new Field(columns, rows, matrix);
  };

  return {
    execute,
  };
};
