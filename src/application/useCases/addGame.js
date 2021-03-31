'use strict';

const Field = require('../../entities/Field');
const createMatrix = require('../../frameworks/utils/createMatrix');
const generateMinesCommand = require('./generateMines');
const generateContentCommand = require('./generateContent');

module.exports = (gameConfiguration, gameRepository) => {
  const { columns, rows, mines } = gameConfiguration;

  const execute = async () => {
    let matrix = createMatrix(columns, rows);
    let field = createMatrix(columns, rows);

    field = generateMinesCommand(gameConfiguration).execute(matrix);
    field = generateContentCommand(gameConfiguration).execute(matrix);
    field = new Field(columns, rows, mines, matrix);

    const addedGame = await gameRepository.add(field.matrix);

    return { addedGame, matrix };
  };

  return {
    execute,
  };
};
