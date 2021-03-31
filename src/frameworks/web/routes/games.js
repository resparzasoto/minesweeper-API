'use strict';

const express = require('express');
const gamesController = require('../../../controllers/games/gameController');

const gamesRouter = (dependencies) => {
  const router = express.Router();

  const controller = gamesController(dependencies);

  router.route('/').post(controller.addGame);
  router.route('/').put(controller.updateGame);
  router.route('/:id').get(controller.getGame);

  return router;
};

module.exports = gamesRouter;
