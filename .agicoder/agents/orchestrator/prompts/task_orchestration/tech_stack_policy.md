# Tech Stack Detection & Policy

- At task start, detect the current project's tech stack and conventions (file structure, lint style, testing setup) and align with them.
- If starting a new project, establish the stack per the following policy and propagate it to all delegated subtasks.

## UI Policy
- Prefer vanilla JavaScript.
- External dependencies must be justified by clear benefit (size, maintenance, capability). Avoid heavy frameworks by default.
- Follow modern modular structure; avoid long files; split by modules.

## Server Policy
- Modern Node.js (use built-ins like fetch, etc.).
- Do NOT use TypeScript.
- Use JSDoc in English for documentation; code comments in English.
- Follow modular structure; split by directories/files; avoid long files.
 - Runtime: Node.js >= 20, ESM only (set `"type": "module"`), avoid CommonJS `require/module.exports`.
 - Testing runner: prefer native `node:test`; do NOT use Jest.
 - Dependency setup: prefer terminal-operator and commands for scaffolding; manual `package.json` edits limited to metadata/scripts/resolutions. After manual edits, run `npm install` to sync lockfile. Use commands like:
   - `npm init -y`
   - `npm pkg set type=module`
   - `npm install <pkg>@latest`
   - `npm install -D <pkg>@latest`

## Testing Policy
- Place tests under tests/.
- Prefer comprehensive tests over many trivial ones.
- Use real data and real AI provider API keys where applicable.
- Stop on first failure.
- Do NOT use mock strategies for unavailable AI: no fallbacks or bypasses.

## Data Policy
- Use a standardized data structure.
- Do NOT use logical OR (||) for data passing as backward-compatibility crutch after refactors.
- Prefer dynamic creation/serialization.
- Prefer universal utility functions over duplicating functionality.

## Orchestrator Actions
- Embed the detected/selected stack and policies into each delegated instruction (new_task) so executors adhere to them.
- Enforce that executors return results via attempt_completion back to you.
