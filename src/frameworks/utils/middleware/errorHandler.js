'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  res.status(err.status);
  res.send({ error: err.message });
};
