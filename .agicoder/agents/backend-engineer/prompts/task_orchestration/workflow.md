Backend Workflow (TDD):
1) Write tests first under `tests/` using native `node:test` (unit/integration). Cover acceptance criteria with positive, negative, and edge cases; no mocks to bypass unavailable AI; use real data/keys when applicable.
2) Do not run the tests you authored. Conclude the task and return results to the orchestrator; test execution and validation will be handled in subsequent steps by the orchestrator.
3) Implement the minimal logic to make tests PASS (Green): endpoints/services, DTOs/schemas/validation, robust error handling.
4) Refactor for clarity/performance while keeping tests green (Refactor).
5) Handle migrations and compatibility notes; avoid `||` fallbacks—use explicit defaults/mappers.
6) Verify logs, performance, and security (input validation, auth if present).
7) Produce a concise summary and TODOs for follow-up.
