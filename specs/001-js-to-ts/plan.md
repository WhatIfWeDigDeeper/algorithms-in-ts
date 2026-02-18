# Migrate Codebase from JavaScript to TypeScript

## Context

This is a pure educational algorithms project (10 source files + 10 test files) currently using ES6 with Babel for transpilation. The goal is to migrate fully to TypeScript with strict mode, replacing the Babel toolchain with `ts-jest` and adding proper types throughout. The codebase is small enough to migrate in one pass.

---

## Phase 1: Infrastructure Setup

### 1.1 Install TypeScript dependencies
```bash
npm install --save-dev typescript ts-jest @types/jest
```

### 1.2 Remove Babel dependencies
```bash
npm uninstall @babel/core @babel/preset-env babel-jest
```

### 1.3 Create `tsconfig.json` (project root)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### 1.4 Update `jest.config.js`
Replace contents with:
```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

### 1.5 Delete `babel.config.js`

### 1.6 Update `package.json` scripts
```json
"scripts": {
  "audit.ci": "npx audit-ci --high",
  "test": "jest --color",
  "test.watch": "jest --watch --color",
  "lint": "tsc --noEmit",
  "build": "tsc"
}
```

### 1.7 Add `dist/` to `.gitignore`

---

## Phase 2: Migrate Source Files (dependency order)

### 2.1 `src/util/index.js` → `src/util/index.ts`
- Add generics to `head`, `tail`, `take`, `skip`, `isEmpty`, `replicate`
- Type `range` with `number` params/return
- **Note:** `head` returns `T | T[]` due to returning `[]` on empty input — keep this behavior, use type assertions at call sites

### 2.2 `src/recursion/index.js` → `src/recursion/index.ts`
- Type `factorial`, `tailFactorial` as `(n: number) => number`
- Type `tailSum` as `(xs: number[], acc?: number) => number`
- Add type assertions on `head()`/`tail()` calls

### 2.3 `src/fibonacci/index.js` → `src/fibonacci/index.ts`
- All `number` types, straightforward

### 2.4 `src/search/index.js` → `src/search/index.ts`
- Generic `<T>` on both `binarySearch` and `binarySearchRecursive`
- `compareFn: (a: T, b: T) => number` parameter

### 2.5 `src/sort/quickSort.js` → `src/sort/quickSort.ts`
- Typed as `number[]` (uses `<=`/`>` comparison)
- Type assertions on `head()`/`tail()` calls

### 2.6 `src/sort/mergeSort.js` → `src/sort/mergeSort.ts`
- Generic `SplitResult<T>` interface for `split`/`partition`
- `merge` and `mergeSort` typed as `number[]` (uses `>` comparison)

### 2.7 `src/graph/breadthFirstSearch.js` → `src/graph/breadthFirstSearch.ts`
- Define `Graph` interface: `{ [node: string]: string[] }`
- Type predicate as `(name: string) => boolean`

### 2.8 `src/graph/dijkstrasWeightedGraph.js` → `src/graph/dijkstrasWeightedGraph.ts`
- Define `WeightedGraph`, `CostsTable`, `ParentsTable` interfaces

### 2.9 `src/binary-tree/branch.js` → `src/binary-tree/branch.ts`
- Generic `Node<K, V>` and `Branch<K, V>` classes with `readonly` properties
- `Leaf` class, `TreeNode<K, V> = Branch<K, V> | Leaf` union type
- Replace `Object.freeze()` with `readonly` modifiers
- `buildTree`, `traverse`, `traverseAcc` become generic functions
- Type assertions needed after `isLeaf()` guard checks

### 2.10 `src/divide-and-conquer/karatsuba-multiplication.js` → `src/divide-and-conquer/karatsuba-multiplication.ts`
- Simple — all `number` params and return

---

## Phase 3: Migrate Test Files

Rename all `.test.js`/`.spec.js` → `.test.ts`/`.spec.ts`. Most require no code changes beyond the rename. Exceptions:

- **`breadthFirstSearch.test.ts`** — Add type annotation to dynamic graph object: `const graph: Record<string, string[]> = {}`
- **`dijkstrasWeightedGraph.test.ts`** — Add type annotations to `graph`, `costs`, `parents` objects
- **`branch.test.ts`** — Add type assertions when accessing `.node()`, `.left()`, `.right()` on `TreeNode` union
- **`breadthFirstSearch.test.ts`** — Add type to `itemIsSeller` parameter: `(name: string)`

---

## Phase 4: Update Documentation

### `CLAUDE.md`
- Update overview: "TypeScript" instead of "ES6"
- Update test example: `npx jest src/sort/quickSort.test.ts --color`
- Update conventions: mention `strict` mode, `ts-jest`, `.test.ts`/`.spec.ts` suffixes
- Update lint command description: `tsc --noEmit`

---

## Phase 5: Verification

1. `npm test` — all 10 test files pass
2. `npm run lint` (`tsc --noEmit`) — no type errors
3. `npm run build` — compiles to `dist/` without errors

---

## Files to Modify

| File | Action |
|------|--------|
| `package.json` | Update deps and scripts |
| `tsconfig.json` | Create new |
| `jest.config.js` | Replace contents |
| `babel.config.js` | Delete |
| `.gitignore` | Add `dist/` |
| `CLAUDE.md` | Update docs |
| `src/**/*.js` (20 files) | Rename to `.ts`, add types |
