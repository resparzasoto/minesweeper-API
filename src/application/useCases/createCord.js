'use strict';

const Cord = require('../../entities/Cord');

module.exports = () => {
  const execute = (gameConfiguration) => {
    const { columns, rows } = gameConfiguration;

    const column = Math.floor(Math.random() * columns);
    const row = Math.floor(Math.random() * rows);

    return new Cord(column, row);
  };

  return {
    execute,
  };
};
