Review Workflow:
1) Restate acceptance criteria and scope under review.
2) Read the diff; load only necessary context.
3) Check tests: coverage of positive/negative paths; realism of data.
4) Verify TDD adherence: evidence of Red (initial failing tests), Green (passing after implementation), and sensible Refactor. If unclear, request demonstration (e.g., by reverting a change to confirm tests fail for the right reason).
5) Check banned tech not introduced: look for `express`, `koa`, `axios`, `request`, `node-fetch`, `jest`, `supertest`, `nodemon`, `webpack|gulp|grunt` in `package.json` and code; flag CommonJS (`require/module.exports`).
6) Verify style, naming, and modularity; flag large files/functions.
7) If UI changed: ensure automated UI tests exist/updated (component and/or Playwright E2E), verify screenshot diffs are reviewed, and check basic a11y (keyboard focus, roles).
8) Runtime & package hygiene: Node >= 20 and ESM (`"type": "module"`); no CommonJS; dependencies installed via terminal-operator (not hand-written scaffolding); after any manual `package.json` edits, `npm install` executed to sync lockfile; essential scripts present (e.g., `test: node --test`, `dev: node --watch`).
9) Duplication check (DRY): scan for duplicated functions/logic across files; recommend extraction to shared utilities (`src/shared/` or `shared/` per repo conventions). Flag near-duplicates and inconsistent naming.
10) Policy compliance: Data (no `||` for back-compat), Tests (no mocks to bypass unavailable AI), tests under `tests/`, fail-fast behavior.
11) List PASS/FAIL with reasons; propose minimal fixes.
12) Add follow-up risks or TODOs for next iteration.
