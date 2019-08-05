const ui = require('../lib/ui');

console.log = jest.fn();
console.error = jest.fn();
const boardArray = [['X', 'O', 'X'], ['X', ' ', 'X'], ['O', 'X', 'O']];
const player = 'X';

describe('displayTurn', () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it('should print the input board state and the input player turn', () => {
    ui.displayTurn(boardArray, player);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(
      ' X | O | X \n---|---|---\n X |   | X \n---|---|---\n O | X | O '
    );
    expect(console.log).toBeCalledWith(`${player} it is your turn`);
  });
});

describe('displayWin', () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it('should print the input board state and that the input player won', () => {
    ui.displayWin(boardArray, player);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(
      ' X | O | X \n---|---|---\n X |   | X \n---|---|---\n O | X | O '
    );
    expect(console.log).toBeCalledWith(`Congratulations! ${player} wins`);
  });
});

describe('displayTie', () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it('should print the input board state and that there was a tie', () => {
    ui.displayTie(boardArray);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(
      ' X | O | X \n---|---|---\n X |   | X \n---|---|---\n O | X | O '
    );
    expect(console.log).toBeCalledWith(`It's a tie! No one wins`);
  });
});

describe('displayError', () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it(`should display an input error's message through the console error stream`, () => {
    ui.displayError(Error('SPECIAL ERROR'));

    expect(console.error).toBeCalledTimes(1);
    expect(console.error).toBeCalledWith(`SPECIAL ERROR`);
  });
});
