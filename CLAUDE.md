# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Classic algorithm implementations in TypeScript, based on "Grokking Algorithms" by Manning Press. Some algorithms use tail recursion variants. All code uses ES module syntax (import/export) with TypeScript strict mode.

## Commands

- **Run all tests:** `npm test`
- **Run tests in watch mode:** `npm run test.watch`
- **Run a single test file:** `npx jest src/sort/quickSort.test.ts --color`
- **Type check (lint):** `npm run lint`
- **Build:** `npm run build`

## Code Conventions

- TypeScript with strict mode, transpiled via ts-jest for tests
- Tests use Jest, colocated with source files (e.g., `quickSort.ts` / `quickSort.test.ts`)
- Test files use either `.test.ts` or `.spec.ts` suffix
- Shared helpers (`head`, `tail`, `isEmpty`) live in `src/util/index.ts`
- Algorithms are organized by category under `src/` (sort, search, graph, recursion, fibonacci, binary-tree, divide-and-conquer)
- Many algorithms provide both iterative and recursive implementations

## Git Workflow

- Never force push (`--force`, `--force-with-lease`). Create new commits to fix mistakes instead of amending and force pushing.
