'use strict';

const createMatrix = require('../../utils/createMatrix');
const createCordCommand = require('./createCord');
const generateMineCommand = require('./generateMine');

module.exports = (gameConfiguration) => {
  const execute = () => {
    const { columns, rows, mines } = gameConfiguration;
    let minesCount = 0;

    const matrix = createMatrix(columns, rows);

    while (minesCount < mines) {
      const cord = createCordCommand(gameConfiguration).execute();
      const cell = matrix[cord.column][cord.row];

      if (!cell.isMine) {
        const isMine = generateMineCommand().execute();

        if (isMine) {
          cell.isMine = isMine;
          minesCount++;
        }
      }
    }

    return matrix;
  };

  return {
    execute,
  };
};
