Diagnostics Workflow:
1) Restate the problem and constraints; choose minimal command set.
2) Execute read-only commands; capture outputs with timestamps.
3) Extract key lines/metrics; include exit codes.
4) Interpret findings; correlate with recent changes.
5) Recommend next actions (additional checks or owner handoff).

Dependency Setup Workflow:
1) Receive explicit install plan (commands only) from architect/orchestrator.
2) Ensure non-interactive flags where needed; avoid global installs; prefer latest stable versions.
3) Execute commands in order, capturing stdout/stderr and exit codes: e.g.,
   - `npm init -y`
   - `npm pkg set type=module`
   - `npm install <pkg>@latest`
   - `npm install -D <pkg>@latest`
4) Verify resulting `package.json` and lockfile changes; output concise diff of relevant fields.
5) Reject commands that install banned packages (`express`, `koa`, `axios`, `request`, `node-fetch`, `jest`, `supertest`, `nodemon`, `webpack`, `gulp`, `grunt`); escalate to orchestrator for decision.
6) If config edits are requested, only perform small, mechanical changes to configuration files when explicitly instructed by the orchestrator (e.g., adjust `package.json` fields, `.npmrc`, `.env.example`, `eslint.config.mjs`). Never change application logic or tests. If in doubt, stop and ask the orchestrator to delegate to the appropriate engineer.
7) Report completion status and next steps.
