'use strict';

const Field = require('../../entities/Field');
const generateMinesCommand = require('./generateMines');
const generateContentCommand = require('./generateContent');

module.exports = (gameConfiguration) => {
  const execute = () => {
    const { columns, rows } = gameConfiguration;
    let matrix;

    matrix = generateMinesCommand(gameConfiguration).execute();
    matrix = generateContentCommand(gameConfiguration).execute(matrix);

    const field = new Field(columns, rows, matrix);

    return field;
  };

  return {
    execute,
  };
};
