'use strict';

const Cord = require('../../entities/Cord');

module.exports = (gameConfiguration) => {
  const execute = () => {
    const { columns, rows } = gameConfiguration;

    const column = Math.floor(Math.random() * columns);
    const row = Math.floor(Math.random() * rows);
    const cord = new Cord(column, row);

    return cord;
  };

  return {
    execute,
  };
};
