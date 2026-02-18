export const binarySearch = <T>(list: T[], item: T, compareFn: (a: T, b: T) => number): number | null => {
  let low = 0;
  let high = list.length - 1;
  let mid: number;
  let compareResult: number;

  while (low <= high) {
    mid = Math.floor(low + ((high - low) / 2));
    compareResult = compareFn(item, list[mid]);
    if (compareResult === 0) {
      return mid;
    }
    if (compareResult > 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
};

export const binarySearchRecursive = <T>(
  list: T[],
  searchItem: T,
  compareFn: (a: T, b: T) => number,
  low: number = 0,
  high: number = Infinity,
): number | null => {
  const top = (high === Infinity) ? list.length - 1 : high;
  if (low > top) {
    return null;
  }
  const mid = Math.floor(low + ((top - low) / 2));
  const compareResult = compareFn(searchItem, list[mid]);
  if (compareResult === 0) {
    return mid;
  }
  return (compareResult > 0)
    ? binarySearchRecursive(list, searchItem, compareFn, mid + 1, top)
    : binarySearchRecursive(list, searchItem, compareFn, low, mid - 1);
};
