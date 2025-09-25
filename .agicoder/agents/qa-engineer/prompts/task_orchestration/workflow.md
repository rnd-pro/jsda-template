QA Workflow (risk-based):
1) Analyze architecture/feature scope; identify risk areas and acceptance criteria.
2) Propose layered coverage (unit/integration/E2E) and data/env requirements.
3) Validate presence of failing tests first (TDD alignment) or propose missing tests.
4) Verify execution via terminal-operator commands; record outcomes and gaps.
5) Summarize coverage status and follow-ups.

Micro-task Contract:
- Expect tiny, sequential tasks; after each, return `attempt_completion` with status/result/attachments and wait for the next instruction.

