/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const Field = require('../../entities/Field');
const GameConfiguration = require('../../entities/GameConfiguration');
const createMatrix = require('../../utils/createMatrix');
const createFieldCommand = require('./createField');

describe('createField', () => {
  describe('creating field', () => {
    it('give an GameConfiguration, then the function must return an new Field ', () => {
      // Arrange
      const COLUMNS = 4;
      const ROWS = 4;
      const MINES = 5;

      const gameConfigurationActual = new GameConfiguration(
        COLUMNS,
        ROWS,
        MINES
      );

      const fieldExpected = new Field(
        COLUMNS,
        ROWS,
        createMatrix(COLUMNS, ROWS)
      );
      // Act
      const fieldActual = createFieldCommand(gameConfigurationActual).execute();

      console.log(fieldActual.matrix);

      // Asserts
      expect(fieldActual.columns).toEqual(fieldExpected.columns);
      expect(fieldActual.rows).toEqual(fieldExpected.rows);
      expect(fieldActual).toBeInstanceOf(Field);
    });
  });
});
