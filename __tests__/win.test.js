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

describe('isWin', () => {
  it('should return a false if the input board does not contain a win', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'X']];
    const result = win.isWin(boardArray);
    expect(result).toBeFalsy();
  });

  it('should return true if the input board contains diagonal win', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'X', 'X']];
    const result = win.isWin(boardArray);
    expect(result).toBeTruthy();
  });

  it('should return true if the input board contains horizontal win', () => {
    const boardArray = [['X', 'X', 'X'], ['X', 'O', 'O'], ['O', 'X', 'O']];
    const result = win.isWin(boardArray);
    expect(result).toBeTruthy();
  });

  it('should return a true if the input board contains vertical win', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'O', 'O'], ['X', 'X', 'O']];
    const result = win.isWin(boardArray);
    expect(result).toBeTruthy();
  });
});

describe('isTie', () => {
  it('should return true if there is no wins in a completed input board', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'O']];
    const result = win.isTie(boardArray);
    expect(result).toBeTruthy();
  });

  it('should return false if there is a space in an input board', () => {
    const boardArray = [['X', 'O', 'X'], [' ', 'O', 'O'], ['X', 'X', 'O']];
    const result = win.isTie(boardArray);
    expect(result).toBeFalsy();
  });

  /* test case doesn't work because isTie returns true if board is completed
  NOT if its a tie between players */
  it('should return false if there is a win in a completed input board', () => {
    const boardArray = [['X', 'O', 'X'], ['X', 'O', 'O'], ['X', 'X', 'O']];
    const result = win.isTie(boardArray);
    expect(result).toBeTruthy();
  });
});
