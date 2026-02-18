import mergeSort, { split, partition, merge } from './mergeSort';

describe('mergeSort', () => {
  describe('split', () => {
    test('it should split array into 2', () => {
      expect(split([1, 2, 3, 4])).toEqual({
        item1: [1, 3],
        item2: [2, 4],
      });
    });
    test('it should partition array and alternate', () => {
      expect(split([1, 2, 3, 4, 5])).toEqual({
        item1: [1, 3, 5],
        item2: [2, 4],
      });
    });
    test('it should partition unsorted array and alternate', () => {
      expect(split([5, 4, 3, 2, 1])).toEqual({
        item1: [5, 3, 1],
        item2: [4, 2],
      });
    });
    test('it should split single array into 1', () => {
      expect(split([1])).toEqual({
        item1: [1],
        item2: [],
      });
    });
  });

  describe('partition', () => {
    test('it should just split array into 2', () => {
      expect(partition([1, 2, 3, 4])).toEqual({
        item1: [1, 2],
        item2: [3, 4],
      });
    });
    test('it should partition array and alternate', () => {
      expect(partition([1, 2, 3, 4, 5])).toEqual({
        item1: [1, 2],
        item2: [3, 4, 5],
      });
    });
    test('it should partition unsorted array and alternate', () => {
      expect(partition([5, 4, 3, 2, 1])).toEqual({
        item1: [5, 4],
        item2: [3, 2, 1],
      });
    });
    test('it should partition single array into 1', () => {
      expect(partition([1])).toEqual({
        item1: [1],
        item2: [],
      });
    });
  });

  describe('merge', () => {
    test('should merge two sorted arrays', () => {
      expect(merge([4], [3])).toEqual([3, 4]);
    });
    test('should merge two sorted arrays', () => {
      expect(merge([1, 4], [3])).toEqual([1, 3, 4]);
    });
    test('should merge two sorted arrays', () => {
      expect(merge([1, 4, 5], [2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('mergeSort', () => {
    test('should mergeSort unsorted array', () => {
      expect(mergeSort([4, 3])).toEqual([3, 4]);
    });
    test('should mergeSort array', () => {
      expect(mergeSort([1, 4, 3])).toEqual([1, 3, 4]);
    });
    test('should mergeSort another array', () => {
      expect(mergeSort([1, 4, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
