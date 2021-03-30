'use strict';

module.exports = () => {
  const execute = () => {
    const randomIsMine = Math.round(Math.random());

    if (randomIsMine) {
      return true;
    }

    return false;
  };

  return {
    execute,
  };
};
