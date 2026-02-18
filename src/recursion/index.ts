import { head, tail } from '../util';

export const factorial = (n: number): number => (
  n === 1
    ? 1
    : n * factorial(n - 1)
);

export const tailFactorial = (n: number, current: number = 1): number => (
  n === 1
    ? current
    : tailFactorial(n - 1, current * n)
);

export const tailSum = (xs: number[], acc: number = 0): number => (
  xs.length === 0
    ? acc
    : tailSum(tail(xs) as number[], acc + (head(xs) as number))
);
