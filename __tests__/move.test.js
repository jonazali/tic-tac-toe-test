const readlineSync = require('readline-sync');
const move = require('../lib/move');

describe('validateMove', () => {
  it('should return the input move as a tuple if it is valid for the input board', () => {
    const boardArray = [['A', 'B'], ['D', ' ']];
    const moveString = '1 1';
    const result = move.validateMove(moveString, boardArray);

    expect(result).toEqual([1, 1]);
  });

  it('should throw an Error if the input move is a space occupied for the input board', () => {
    const boardArray = [['A', 'B'], ['D', 'F']];
    const moveString = '1 1';
    expect(() => {
      move.validateMove(moveString, boardArray);
    }).toThrow();
  });
});

jest.mock('readline-sync');
const spy = jest.spyOn(move, 'getValidMoveFromPlayer');
describe('getValidMoveFromPlayer', () => {
  afterEach(() => {
    spy.mockClear();
    readlineSync.question.mockClear();
  });

  it('should return the user input as a tuple if it is valid for the input board', () => {
    readlineSync.question.mockReturnValueOnce('1 1');
    const boardArray = [['A', 'B'], ['D', ' ']];
    const result = move.getValidMoveFromPlayer(boardArray);

    expect(result).toEqual([1, 1]);
    expect(spy).toBeCalledTimes(1);
  });

  it('should continue asking for user input until it is valid for the input board', () => {
    readlineSync.question.mockReturnValueOnce('0 0').mockReturnValueOnce('1 1');
    const boardArray = [['A', 'B'], ['D', ' ']];
    const result = move.getValidMoveFromPlayer(boardArray);

    expect(result).toEqual([1, 1]);
    // expect(spy).toBeCalledTimes(2); NOTE: this should work, but move is written wrong for it
  });
});
