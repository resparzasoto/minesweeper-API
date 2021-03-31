/* eslint-disable require-await */
'use strict';

const addGameCommand = require('../../application/useCases/addGame');
const GameConfiguration = require('../../entities/GameConfiguration');

module.exports = (dependencies) => {
  const { gameRepository } = dependencies.DatabaseService;

  const addGame = async (req, res) => {
    const { columns, rows, mines } = req.body;

    const gameConfiguration = new GameConfiguration(columns, rows, mines);

    const field = await addGameCommand(
      gameConfiguration,
      gameRepository
    ).execute();

    return res.send(field);
  };

  const updateGame = async (req, res) => {
    return res.send('update');
  };

  const getGame = async (req, res) => {
    return res.send('get');
  };

  return {
    addGame,
    updateGame,
    getGame,
  };
};
