import { factorial, tailFactorial, tailSum } from './index';

describe('factorial', () => {
  test('recursive', () => {
    expect(factorial(5)).toBe(120);
  });
});

describe('tail recursion factorial', () => {
  test('tail recursive', () => {
    expect(tailFactorial(6)).toBe(720);
  });
});

describe('tail recursion sum', () => {
  test('tail sum', () => {
    expect(tailSum([10, 20, 30])).toBe(60);
  });

  test('tail sum empty', () => {
    expect(tailSum([])).toBe(0);
  });
});
