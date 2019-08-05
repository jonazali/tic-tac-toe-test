const utils = require('../lib/utils');

describe('isUniform', () => {
  it('should return truthy if every element of the input array is the same', () => {
    const array = ['A', 'A', 'A'];
    const result = utils.isUniform(array);
    expect(result).toBeTruthy();
  });

  it('should return falsy if every element of the input array is not the same', () => {
    const array = ['U', 'W', 'U'];
    const result = utils.isUniform(array);
    expect(result).toBeFalsy();
  });
});

describe('parseIntBase10', () => {
  it('should call parseInt with the input and using base 10', () => {
    const spy = jest.spyOn(global, 'parseInt');
    utils.parseIntBase10('5');
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith('5', 10);
    spy.mockClear();
  });
});

describe('doesNotInclude', () => {
  it('should return a function that tests if given input includes the input value', () => {
    const includesX = utils.doesNotInclude('X');
    const inputIncludingX = ['X', 'O', ' '];
    const inputExcludingX = ['O', 'O', ' '];

    expect(includesX(inputIncludingX)).toBeFalsy();
    expect(includesX(inputExcludingX)).toBeTruthy();
  });
});

describe('satisfies', () => {
  it('should return a function that tests if given input returns true for every input function', () => {
    const greaterThan10AndLessThan20 = utils.satisfies(
      num => num > 10,
      num => num < 20
    );
    const inputSatisfies = 14;
    const inputFails = 9;

    expect(greaterThan10AndLessThan20(inputSatisfies)).toBeTruthy();
    expect(greaterThan10AndLessThan20(inputFails)).toBeFalsy();
  });
});

describe('columns', () => {
  it('should return the transpose of an input array', () => {
    const arr = [[1, 2, 3], ['a', 'b', 'c']];
    const result = utils.columns(arr); // → [[1, 'a'], [2, 'b'], [3, 'c']]

    expect(result).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });
});

describe('diagonals', () => {
  it('should return the a tuple of the diagonals of the input array', () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const result = utils.diagonals(arr); // → [[1, 5, 9], [3, 5, 7]];

    expect(result).toEqual([[1, 5, 9], [3, 5, 7]]);
  });
});

describe('pad', () => {
  it('should add a space on each side of an input string', () => {
    const result = utils.pad('A');
    expect(result).toBe(' A ');
  });
});
