const win = require('../lib/win');

describe('isVerticalWin', () => {
  it('should return truthy if the input board has a winning column', () => {
    const boardArray = [['X', 'O', 'X'], ['X', ' ', 'X'], ['O', 'X', 'X']];
    const result = win.isVerticalWin(boardArray);
    expect(result).toBeTruthy();
  });

  it('should return falsy if the input board does not have a winning column', () => {
    const boardArray = [['X', 'O', 'X'], ['X', ' ', 'X'], ['O', 'X', 'O']];
    const result = win.isVerticalWin(boardArray);
    expect(result).toBeFalsy();
  });
});

describe('isHorizontalWin', () => {
  it('should return truthy if the input board has a winning row', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'X', 'X'], ['O', 'X', 'X']];
    const result = win.isHorizontalWin(boardArray);
    expect(result).toBeTruthy();
  });

  it('should return falsy if the input board does not have a winning row', () => {
    const boardArray = [['X', 'O', 'X'], ['X', ' ', 'X'], ['O', 'X', 'O']];
    const result = win.isHorizontalWin(boardArray);
    expect(result).toBeFalsy();
  });
});

describe('isDiagonalWin', () => {
  it('should return truthy if the input board has a winning diagonal', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'X', 'X'], ['O', 'X', 'X']];
    const result = win.isDiagonalWin(boardArray);
    expect(result).toBeTruthy();
  });

  it('should return falsy if the input board does not have a winning diagonal', () => {
    const boardArray = [['X', 'O', 'X'], ['X', ' ', 'X'], ['O', 'X', 'O']];
    const result = win.isDiagonalWin(boardArray);
    expect(result).toBeFalsy();
  });
});
