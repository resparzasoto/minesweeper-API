'use strict';

module.exports = () => {
  const execute = () => {
    const randomMine = Math.round(Math.random());

    if (randomMine) {
      return true;
    }

    return false;
  };

  return {
    execute,
  };
};
