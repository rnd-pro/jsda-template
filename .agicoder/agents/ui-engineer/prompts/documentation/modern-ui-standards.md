Modern UI Standards (Vanilla JS)

HTML & Accessibility
- Use semantic HTML (landmarks: header/main/nav/footer; proper heading levels).
- All interactive elements must be reachable by keyboard; respect focus order; visible focus ring.
- Label controls (label/for, aria-label/aria-labelledby). Provide alt text for images.
- Announce dynamic updates where appropriate (aria-live) and manage roles minimally.
- Prefer progressive enhancement; degrade gracefully without JS.

CSS & Design System
- Use CSS custom properties (tokens) for colors, spacing, typography, z-index.
- Prefer Flexbox/Grid for layout; avoid legacy floats; keep layout responsive (fluid widths, min/max, clamp()).
- Respect user preferences: `@media (prefers-reduced-motion: reduce)` to limit animations; `color-scheme: light dark` and dark-theme tokens.
- Keep files small; co-locate component styles or use layers (optional). Avoid over-specific selectors.
- Use system fonts or preloaded webfonts with `font-display: swap`; minimize blocking CSS.

JavaScript (Vanilla ESM)
- Use native ESM; avoid bundlers unless strictly necessary.
- Organize by feature: `src/components/*`, `src/utils/*`, `src/styles/*`.
- Keep modules small and single-purpose; prefer pure functions; avoid side-effects in module scope.
- JSDoc in English; code comments in English. No TypeScript.

Import Maps (CDN ESM) — optional
```html
<script type="importmap">
  {
    "imports": {
      "dayjs": "https://esm.run/dayjs"
    }
  }
</script>
<script type="module">
  import dayjs from 'dayjs';
  document.querySelector('#now').textContent = dayjs().format();
</script>
```

Performance
- Defer non-critical JS; use `type=module` (defer by default) and dynamic `import()` when useful.
- Prefer build-less; if tooling is required, justify and keep config minimal.
- Optimize images; avoid large dependencies; tree-shakeable ESM when external libs are necessary.

Testing
- Place tests under `tests/`; write comprehensive, scenario-meaningful tests; fail fast.
- Use real data/keys where applicable; avoid mocks to bypass unavailable AI.

Data & State
- Standardize data structures; avoid `||` fallbacks after refactors (use explicit defaults/guards).
- Prefer immutable updates (copy-on-write) and small, explicit state.

Security & Hygiene
- Favor CSP-friendly patterns; avoid inline event handlers; never inject unsanitized HTML.
- Handle user input defensively (validate/escape). Keep dependencies updated.

Documentation
- Update README with setup (npm install/start/test), project structure, coding rules, and testing instructions.

