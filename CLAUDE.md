# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Classic algorithm implementations in ES6, based on "Grokking Algorithms" by Manning Press. Some algorithms use tail recursion variants. All code uses ES module syntax (import/export).

## Commands

- **Run all tests:** `npm test`
- **Run tests in watch mode:** `npm run test.watch`
- **Run a single test file:** `npx jest src/sort/quickSort.test.js --color`
- **Lint:** `npm run lint`

## Code Conventions

- ES module syntax (`import`/`export default`) transpiled via Babel
- Tests use Jest, colocated with source files (e.g., `quickSort.js` / `quickSort.test.js`)
- Test files use either `.test.js` or `.spec.js` suffix
- Shared helpers (`head`, `tail`, `isEmpty`) live in `src/util/index.js`
- Algorithms are organized by category under `src/` (sort, search, graph, recursion, fibonacci, binary-tree, divide-and-conquer)
- Many algorithms provide both iterative and recursive implementations
