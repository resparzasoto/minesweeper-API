'use strict';

const constants = require('../../frameworks/utils/constants');
const createCordCommand = require('./createCord');
const generateMineCommand = require('./generateMine');

module.exports = (gameConfiguration) => {
  const execute = (matrix) => {
    const { mines } = gameConfiguration;
    let minesCount = 0;

    while (minesCount < mines) {
      const cord = createCordCommand(gameConfiguration).execute();
      const cell = matrix[cord.column][cord.row];

      if (!cell.isMine) {
        const isMine = generateMineCommand().execute();

        if (isMine) {
          cell.isMine = isMine;
          cell.content = constants.CELL.CONTENT.MINE;
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
