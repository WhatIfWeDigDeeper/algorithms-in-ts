import {
  head,
  isEmpty,
  tail,
  range,
  replicate,
  take,
  skip,
} from '../util';

describe('util', () => {
  describe('head', () => {
    test('single member array should return single', () => {
      expect(head(['a'])).toEqual('a');
    });
    test('empty array should return empty array', () => {
      expect(head([])).toEqual([]);
    });
  });
  describe('tail', () => {
    test('tail should return rest of array', () => {
      expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    });
    test('empty array should return empty array', () => {
      expect(tail([])).toEqual([]);
    });
  });
  describe('range', () => {
    test('range should default to start at 1 and return range of numbers from 1 to end', () => {
      expect(range(4)).toEqual([1, 2, 3, 4]);
    });
    test('can specify min and max', () => {
      expect(range(4, 2)).toEqual([2, 3, 4, 5]);
    });
    test('0 should return empty array', () => {
      expect(range(0)).toEqual([]);
    });
  });
  describe('replicate', () => {
    test('replicate should replicate value n times', () => {
      expect(replicate('a', 3)).toEqual(['a', 'a', 'a']);
    });
  });
  describe('take', () => {
    test('take should grab first n entries', () => {
      expect(take(3, [1, 2, 3, 4])).toEqual([1, 2, 3]);
    });
    test('take return [] when greater than length', () => {
      expect(take(5, [1, 2, 3, 4])).toEqual([]);
    });
  });
  describe('skip', () => {
    test('skip should grab last n entries', () => {
      expect(skip(2, [1, 2, 3, 4])).toEqual([3, 4]);
    });
    test('skip return [] when greater than length', () => {
      expect(skip(5, [1, 2, 3, 4])).toEqual([]);
    });
  });

  describe('isEmpty', () => {
    test('isEmpty should return false for populated array', () => {
      expect(isEmpty([1, 2, 3, 4])).toEqual(false);
    });
    test('isEmpty return true when length 0', () => {
      expect(isEmpty([])).toEqual(true);
    });
    test('isEmpty return true when length 0', () => {
      expect(isEmpty(undefined)).toEqual(true);
    });
  });
});
