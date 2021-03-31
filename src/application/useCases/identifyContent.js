/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
'use strict';

const constants = require('../../frameworks/utils/constants');

module.exports = (gameConfiguration) => {
  const execute = (matrix, cord) => {
    const { columns, rows } = gameConfiguration;
    let content;

    const borderColumn = columns - 1;
    const borderRow = rows - 1;

    if (cord.column === 0 && cord.row === 0) {
      // Esquina superior izquierda
      // adjacentCount = 3;
      // right => column + 1;
      // lower-right-corner => column + 1 | row + 1
      // down => row + 1
      content = contentForUpperLeftCornerCell(matrix, cord);
    } else if (cord.column === borderColumn && cord.row === borderRow) {
      // Esquina inferior derecha
      // adjacentCount = 3;
      content = contentForLowerRightCornerCell(matrix, cord);
    } else if (cord.column === borderColumn && cord.row === 0) {
      // Esquina superior derecha
      // adjacentCount = 3;
      content = contentForUpperRightCornerCell(matrix, cord);
    } else if (cord.column === 0 && cord.row === borderRow) {
      // Esquina inferior izquierda
      // adjacentCount = 3;
      content = contentForLowerLeftCornerCell(matrix, cord);
    } else if (cord.column === 0 && cord.row > 0) {
      // Borde izquierdo
      // adjacentCount = 5;
      content = contentForLeftBorderCell(matrix, cord);
    } else if (cord.row === 0 && cord.column > 0) {
      // Borde superior
      // adjacentCount = 5;
      content = contentForUpperBorderCell(matrix, cord);
    } else if (cord.column === borderColumn && cord.row > 0) {
      // Borde derecho
      // adjacentCount = 5;
      content = contentForRightBorderCell(matrix, cord);
    } else if (cord.row === borderRow && cord.column > 0) {
      // Borde inferior
      // adjacentCount = 5;
      content = contentForDownBorderCell(matrix, cord);
    } else if (
      cord.column > 0 &&
      cord.column < borderColumn &&
      cord.row > 0 &&
      cord.row < borderRow
    ) {
      // Middle
      content = contentForMiddleCell(matrix, cord);
    }

    return content;
  };

  const contentForUpperLeftCornerCell = (matrix, cord) => {
    // right => column + 1;
    // lower-right-corner => column + 1 | row + 1
    // down => row + 1
    const right = rightCell(matrix, cord);
    const lowerRightCorner = lowerRightCornerCell(matrix, cord);
    const down = downCell(matrix, cord);

    const content = defineContent([right, lowerRightCorner, down]);

    return content;
  };

  const contentForLowerRightCornerCell = (matrix, cord) => {
    // up =>  row - 1;
    // upperLeftCorner => column - 1 | row -1
    // left => colum - 1
    const up = upCell(matrix, cord);
    const upperLeftCorner = upperLeftCornerCell(matrix, cord);
    const left = leftCell(matrix, cord);

    const content = defineContent([up, upperLeftCorner, left]);

    return content;
  };

  const contentForUpperRightCornerCell = (matrix, cord) => {
    // left
    // lowerLeftCorner
    // down
    const left = leftCell(matrix, cord);
    const lowerLeftCorner = lowerLeftCornerCell(matrix, cord);
    const down = downCell(matrix, cord);

    const content = defineContent([left, lowerLeftCorner, down]);

    return content;
  };

  const contentForLowerLeftCornerCell = (matrix, cord) => {
    // up
    // upperRightCorner
    // right
    const up = upCell(matrix, cord);
    const upperRightCorner = upperRightCornerCell(matrix, cord);
    const right = rightCell(matrix, cord);

    const content = defineContent([up, upperRightCorner, right]);

    return content;
  };

  const contentForUpperBorderCell = (matrix, cord) => {
    // left
    // right
    // lowerRightCorner
    // down
    // lowerLeftCorner
    const left = leftCell(matrix, cord);
    const right = rightCell(matrix, cord);
    const lowerRightCorner = lowerRightCornerCell(matrix, cord);
    const down = downCell(matrix, cord);
    const lowerLeftCorner = lowerLeftCornerCell(matrix, cord);

    const content = defineContent([
      left,
      right,
      lowerRightCorner,
      down,
      lowerLeftCorner,
    ]);

    return content;
  };

  const contentForLeftBorderCell = (matrix, cord) => {
    // up
    // upperRightCorner
    // right
    // lowerRightCorner
    // down
    const up = upCell(matrix, cord);
    const upperRightCorner = upperRightCornerCell(matrix, cord);
    const right = rightCell(matrix, cord);
    const lowerRightCorner = lowerRightCornerCell(matrix, cord);
    const down = downCell(matrix, cord);

    const content = defineContent([
      up,
      upperRightCorner,
      right,
      lowerRightCorner,
      down,
    ]);

    return content;
  };

  const contentForDownBorderCell = (matrix, cord) => {
    // up
    // upperLeftCorner
    // left
    // right
    // upperRightCorner
    const up = upCell(matrix, cord);
    const upperLeftCorner = upperLeftCornerCell(matrix, cord);
    const left = leftCell(matrix, cord);
    const right = rightCell(matrix, cord);
    const upperRightCorner = upperRightCornerCell(matrix, cord);

    const content = defineContent([
      up,
      upperLeftCorner,
      left,
      right,
      upperRightCorner,
    ]);

    return content;
  };

  const contentForRightBorderCell = (matrix, cord) => {
    // up
    // upperLeftCorner
    // left
    // lowerLeftCorner
    // down
    const up = upCell(matrix, cord);
    const upperLeftCorner = upperLeftCornerCell(matrix, cord);
    const left = leftCell(matrix, cord);
    const lowerLeftCorner = lowerLeftCornerCell(matrix, cord);
    const down = downCell(matrix, cord);

    const content = defineContent([
      up,
      upperLeftCorner,
      left,
      lowerLeftCorner,
      down,
    ]);

    return content;
  };

  const contentForMiddleCell = (matrix, cord) => {
    // up
    // upperLeftCorner
    // left
    // lowerLeftCorner
    // down
    // lowerRightCorner
    // right
    // upperRightCorner
    const up = upCell(matrix, cord);
    const upperLeftCorner = upperLeftCornerCell(matrix, cord);
    const left = leftCell(matrix, cord);
    const lowerLeftCorner = lowerLeftCornerCell(matrix, cord);
    const down = downCell(matrix, cord);
    const lowerRightCorner = lowerRightCornerCell(matrix, cord);
    const right = rightCell(matrix, cord);
    const upperRightCorner = upperRightCornerCell(matrix, cord);

    const content = defineContent([
      up,
      upperLeftCorner,
      left,
      lowerLeftCorner,
      down,
      lowerRightCorner,
      right,
      upperRightCorner,
    ]);

    return content;
  };

  const upCell = (matrix, cord) => {
    const cell = matrix[cord.column][cord.row - 1];
    return cell;
  };

  const upperLeftCornerCell = (matrix, cord) => {
    const cell = matrix[cord.column - 1][cord.row - 1];
    return cell;
  };

  const leftCell = (matrix, cord) => {
    const cell = matrix[cord.column - 1][cord.row];
    return cell;
  };

  const lowerLeftCornerCell = (matrix, cord) => {
    const cell = matrix[cord.column - 1][cord.row + 1];
    return cell;
  };

  const downCell = (matrix, cord) => {
    const cell = matrix[cord.column][cord.row + 1];
    return cell;
  };

  const lowerRightCornerCell = (matrix, cord) => {
    const cell = matrix[cord.column + 1][cord.row + 1];
    return cell;
  };

  const rightCell = (matrix, cord) => {
    const cell = matrix[cord.column + 1][cord.row];
    return cell;
  };

  const upperRightCornerCell = (matrix, cord) => {
    const cell = matrix[cord.column + 1][cord.row - 1];
    return cell;
  };

  const defineContent = (adjacent) => {
    let content = constants.CELL.CONTENT.BLANK;
    let minesCount = 0;

    for (let i = 0; i < adjacent.length; i++) {
      if (adjacent[i].isMine) {
        minesCount++;
      }
    }

    if (minesCount > 0) {
      content = minesCount;
    }

    return content;
  };

  return {
    execute,
  };
};
