'use strict';

const constants = {
  CELL: {
    STATES: {
      UNCOVERED: 'UNCOVERED',
      COVERED: 'COVERED',
      FLAGGED: 'FLAGGED',
      QUESTION: 'QUESTION',
    },
    ADJACENT_COUNT: {
      CORNER: 3,
      BORDER: 5,
      MIDDLE: 8,
    },
    CONTENT: {
      BLANK: 'BLANK',
      MINE: 'MINE',
    },
  },
};

module.exports = constants;
