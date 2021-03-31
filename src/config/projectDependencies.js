'use strict';

const MongoDatabaseService = require('../frameworks/persistence/orm/mongo/MongoDatabaseService');

module.exports = (() => {
  return {
    DatabaseService: new MongoDatabaseService(),
  };
})();
