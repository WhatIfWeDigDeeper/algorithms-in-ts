# Classic Algorithms in TypeScript

References "Grokking Algorithms" by Manning Press. Modified some algorithms to use tail recursion. All implementations include Jest unit tests.

## Algorithms

### Search
- [Binary Search](src/search/index.ts) — iterative and recursive implementations

### Sort
- [Quick Sort](src/sort/quickSort.ts) — recursive pivot-based sort
- [Merge Sort](src/sort/mergeSort.ts) — with split, partition, and merge helpers

### Graph
- [Breadth-First Search](src/graph/breadthFirstSearch.ts) — iterative and recursive implementations
- [Dijkstra's Weighted Graph](src/graph/dijkstrasWeightedGraph.ts) — shortest path algorithm

### Recursion
- [Factorial & Sum](src/recursion/index.ts) — standard and tail-recursive variants

### Fibonacci
- [Fibonacci](src/fibonacci/index.ts) — naive and memoized implementations

### Binary Tree
- [Branch](src/binary-tree/branch.ts) — tree construction and traversal

### Divide and Conquer
- [Karatsuba Multiplication](src/divide-and-conquer/karatsuba-multiplication.ts) — fast integer multiplication

### Utilities
- [Array Helpers](src/util/index.ts) — `head`, `tail`, `range`, `replicate`, `take`, `skip`, `isEmpty`

## Commands

```bash
npm test            # run all tests
npm run test.watch  # run tests in watch mode
npm run lint        # eslint
npm run build       # typescript compile
```
