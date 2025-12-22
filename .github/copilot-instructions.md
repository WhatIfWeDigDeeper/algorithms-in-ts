<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot instructions — Classic Algorithms in ES6

Purpose: help an AI code agent be immediately productive in this repository by describing structure, conventions, and exact developer workflows discovered in the repo.

- **Big picture**: this repo is a small collection of classic algorithms implemented in ES6 under `src/`. Algorithms are grouped by domain (examples: `binary-tree`, `sort`, `search`, `graph`, `recursion`, `divide-and-conquer`, `fibonacci`) with unit tests colocated next to implementations.

- **Key files / directories**:
  - `src/` — algorithm modules (each folder is one algorithm area).
  - `src/util/index.js` — small utility helpers used across algorithms (`head`, `tail`, `take`, `skip`, `range`, etc.). Prefer using these helpers rather than reimplementing list utilities.
  - `.vscode/launch.json` — includes a ready-to-use launch configuration named `vscode-jest-tests` that runs Jest with `--runInBand --watchAll=false` (useful for single-run debugging).
  - `.eslintrc.json` — project uses `airbnb-base` rules and `babel-eslint` parser; Flow plugin enabled in linting environment.

- **Language & toolchain**:
  - Source uses ES6 `import`/`export` syntax. DevDependencies include `babel-jest`/`babel-*` packages so Jest + Babel are used to run tests.
  - Tests: Jest. Test files use `.test.js` or `.spec.js` and import modules with relative paths (e.g. `import Branch, { Node } from './branch';`).

- **Important developer commands (exact)**:
  - Run tests (interactive/watch):
    - `npm test` (note: `package.json` defines `test` as `jest --watch`, which starts Jest in watch mode)
  - Run tests once (non-watch):
    - `npx jest --watchAll=false` or `npm test -- --watchAll=false`
    - Or use the VS Code launch config: open `Run and Debug` → select `vscode-jest-tests` → Start (this runs Jest with `--runInBand --watchAll=false`).
  - Run single test file once:
    - `npx jest src/binary-tree/branch.test.js --watchAll=false`
  - Linting:
    - `npm run lint` (runs `eslint src/**`)

- **Observed coding patterns & conventions**:
  - Prefer small, focused modules: each algorithm lives in its own folder with an implementation file and a test file next to it.
  - Tests drive API expectations — read existing tests (`*.test.js`, `*.spec.js`) to infer intended behavior and edge cases.
  - Immutability is used in some classes (e.g. `Object.freeze` in `src/binary-tree/branch.js`) — avoid mutating input objects where existing patterns prefer frozen values.
  - Functional list helpers are centralized in `src/util/index.js`. Use them when manipulating arrays in algorithm implementations to maintain consistency.
  - Exports: modules commonly export both default and named exports. Preserve both when refactoring unless tests indicate otherwise.

- **Integration points & external deps**:
  - No runtime external services. Only runtime/developer dependencies found in `package.json` (Babel, Jest, ESLint, Prettier, Flow tooling).

- **Repo-specific gotchas**:
  - `package.json` `test` uses `--watch` by default — CI or single-run commands must explicitly disable watch (`--watchAll=false`).
  - There's a workspace task labeled "Compile" in the editor tasks, but `package.json` does not define a `compile` script. Do not rely on `npm run compile` until that script is added.

- **What an AI agent should do first when changing code**:
  1. Run a focused test for the module being changed (e.g. `npx jest path/to/file.test.js --watchAll=false`) and iterate until that test passes.
  2. Run `npm run lint` and fix any linting errors introduced (project uses `airbnb-base` + Flow plugin rules).
  3. Run broader test sweep if the change affects shared utilities (run `npx jest --watchAll=false`).

- **Examples to reference when implementing or modifying code**:
  - Immutable node implementation: `src/binary-tree/branch.js` (uses `Object.freeze`, `Node`/`Leaf` classes).
  - Utility helpers: `src/util/index.js` (reuse `head`, `tail`, `take`, `skip`, `range`).
  - Tests: `src/binary-tree/branch.test.js` shows typical Jest `describe/test` usage and how callers import modules.

If anything is unclear or you'd like additional rules (commit messages, preferred test flags, or CI commands), tell me which areas to expand and I'll iterate on this document.
