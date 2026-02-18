export const head = <T>(xs: T[] | undefined): T | T[] =>
  (xs && xs.length > 0) ? xs[0] : [];

export const tail = <T>(xs: T[] | undefined): T[] =>
  (xs && xs.length > 1) ? xs.slice(1) : [];

export const range = (end: number, start: number = 1, xs: number[] = []): number[] => (
  (xs.length === end)
    ? xs
    : range(end, start + 1, xs.concat([start]))
);

export const replicate = <T>(val: T, n: number): T[] => (new Array(n).fill(val));

export const take = <T>(n: number, xs: T[] | undefined): T[] =>
  (xs && xs.length >= n) ? xs.slice(0, n) : [];

export const skip = <T>(n: number, xs: T[] | undefined): T[] =>
  (xs && xs.length >= n) ? xs.slice(n) : [];

export const isEmpty = <T>(xs: T[] | undefined): boolean =>
  (!xs || xs.length === 0);
