const play = require('../lib/play');
const readlineSync = require('readline-sync');

describe('nextPlayer', () => {
  it(`should return 'O' if input is 'X'`, () => {
    const result = play.nextPlayer('X');
    expect(result).toBe('O');
  });

  it(`should return 'X' if input is anything but 'X'`, () => {
    expect(play.nextPlayer()).toBe('X');
  });
});

jest.mock('readline-sync');
const spy = jest.spyOn(play, 'play');
describe('play', () => {
  afterEach(() => {
    spy.mockClear();
    readlineSync.question.mockClear();
  });

  it('should be called only once in the case of a winning move', () => {
    readlineSync.question.mockReturnValueOnce('1 1');
    const boardArray = [[' ', ' ', ' '], ['X', ' ', 'X'], [' ', ' ', ' ']];
    play.play(boardArray, 'X');

    expect(play.play).toBeCalledTimes(1);
  });

  it('should be called only once in the case of a tying move', () => {
    readlineSync.question.mockReturnValueOnce('1 1');
    const boardArray = [['X', 'O', 'X'], ['X', ' ', 'X'], ['O', 'X', 'O']];
    play.play(boardArray, 'O');

    expect(play.play).toBeCalledTimes(1);
  });

  it('should be called multiple times in the case of a non-tying, non-winning move', () => {
    readlineSync.question.mockReturnValueOnce('1 1').mockReturnValueOnce('1 2');
    const boardArray = [['X', 'O', 'X'], ['X', ' ', ' '], ['O', 'X', 'O']];
    play.play(boardArray, 'X');

    expect(play.play).toBeCalledTimes(2);
  });
});
