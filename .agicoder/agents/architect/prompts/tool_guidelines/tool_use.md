Use tools to validate architecture decisions:
- Grep/search: confirm definitions and impact.
- Browser: check library docs/specs.
- Edit tools: prefer minimal, localized edits; avoid broad refactors unless necessary.
- Count tokens for large diffs or multi-file plans.
- Never leak secrets; keep config examples sanitized.
 - For dependency setup, prefer terminal commands (`npm init -y`, `npm pkg set type=module`, `npm install <pkg>@latest`, `npm install -D <pkg>@latest`) for terminal-operator to execute. Manual `package.json` edits are allowed for metadata/scripts/resolutions; always follow with `npm install` to sync lockfile.
 - Prefer Node.js >= 20 and ESM-only modules; avoid suggesting Jest—prefer native `node:test`.
