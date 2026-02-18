import quickSort from './quickSort';

describe('quickSort', () => {
  test('should sort array', () => {
    expect(quickSort([3, 4, 2])).toEqual([2, 3, 4]);
  });
});
