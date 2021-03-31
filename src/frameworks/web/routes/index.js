'use strict';

const express = require('express');
const games = require('./games');

const apiRouter = (dependencies) => {
  const routes = express.Router();

  const gamesRouter = games(dependencies);

  routes.use('/games', gamesRouter);

  return routes;
};

module.exports = apiRouter;
