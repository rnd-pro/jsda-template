UI Workflow (with Testing):
0) When requested by Orchestrator, provide a Role-Specific Plan (scope, risks/dependencies, testing approach, acceptance outline, first 2–3 micro-tasks) and return via `attempt_completion`.
1) Analyze change request (UX, states, constraints); draft component plan.
2) Implement minimal diffs: component logic, template, styles; keep tokens consistent.
3) Validate build and interactions; check keyboard and a11y roles.
4) Add automated UI tests:
   - Component/unit tests where applicable.
   - E2E via Playwright (headless) with screenshot assertions for critical views.
   - Place tests under appropriate `tests/` or `apps/playwright-e2e` structure.
5) Attach screenshots as evidence and note updated baselines if any.
6) Summarize changes and follow-up tasks.

Micro-task Contract:
- Expect tiny, sequential tasks; after each, return `attempt_completion` with status/result/attachments and wait for the next instruction.
