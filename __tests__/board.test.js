const board = require('../lib/board');

describe('prettifyRow', () => {
  it('should convert array of strings into a single prettified string with pipes and spaces', () => {
    const testStringArray = ['A', 'B', 'C'];
    const result = board.prettifyRow(testStringArray);

    expect(result).toBe(' A | B | C ');
  });

  it('should throw a TypeError with undefined input', () => {
    expect(board.prettifyRow).toThrow(TypeError);
  });

  it('should also work with arrays with 0 to 2 elements', () => {
    const emptyArray = [];
    const testStringArrayOneElement = ['A'];
    const testStringArrayTwoElements = ['A', 'B'];
    const resultEmpty = board.prettifyRow(emptyArray);
    const resultOneElement = board.prettifyRow(testStringArrayOneElement);
    const resultTwoElements = board.prettifyRow(testStringArrayTwoElements);

    expect(resultEmpty).toBe('');
    expect(resultOneElement).toBe(' A ');
    expect(resultTwoElements).toBe(' A | B ');
  });
});

describe('prettifyBoard', () => {
  it('should convert an array of string arrays into a single prettified grid-like string representation', () => {
    const array = [['A', 'B', 'C'], ['D', 'E', 'F']];
    const result = board.prettifyBoard(array);

    expect(result).toBe(' A | B | C \n---|---|---\n D | E | F ');
  });

  it('should throw a TypeError with undefined input', () => {
    expect(board.prettifyBoard).toThrow(TypeError);
  });

  it('should still prettify boards with only one or zero rows', () => {
    const arrayOne = [['A', 'B', 'C']];
    const arrayZero = [[]];
    const resultOne = board.prettifyBoard(arrayOne);
    const resultZero = board.prettifyBoard(arrayZero);

    expect(resultOne).toBe(' A | B | C ');
    expect(resultZero).toBe('');
  });
});

describe('generateStartingBoard', () => {
  it('should create a space-filled n x n array of string arrays using input n', () => {
    const input = 2;
    const result = board.generateStartingBoard(input);
    const expResult = [[' ', ' '], [' ', ' ']];

    expect(result).toEqual(expResult);
  });

  it('should return an empty array when passed an input of 0', () => {
    const result = board.generateStartingBoard(0);
    const expResult = [];

    expect(result).toEqual(expResult);
  });
});

describe('updateBoard', () => {
  it('should update a given board with a given input at a given position', () => {
    const boardArray = [['A', 'B', 'C'], ['D', 'E', 'F']];
    const player = 'P';
    const position = [1, 2];
    const result = board.updateBoard(boardArray, position, player);

    expect(result[1][2]).toBe(player);
  });
});
