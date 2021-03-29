/* eslint-disable no-undef */
'use strict';

const Field = require('../../entities/Field');
const GameConfiguration = require('../../entities/GameConfiguration');
const createMatrix = require('../../utils/createMatrix');
const createField = require('./createField');

describe('createField', () => {
  describe('creating field', () => {
    it('give an GameConfiguration, then the function must return an new Field ', () => {
      // Arrange
      const COLUMNS = 4;
      const ROWS = 4;
      const MINES = 10;

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
      const fieldActual = createField().execute(gameConfigurationActual);

      // Asserts
      expect(fieldActual.columns).toEqual(fieldExpected.columns);
      expect(fieldActual.rows).toEqual(fieldExpected.rows);
      expect(fieldActual).toBeInstanceOf(Field);
    });
  });
});
