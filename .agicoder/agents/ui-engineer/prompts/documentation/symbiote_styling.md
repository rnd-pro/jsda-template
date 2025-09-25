Styling in SymbioteJS 2.x

Use constructable stylesheets (`rootStyles`) and CSS custom properties to style components and enable theming.

Root styles

```js
import { Symbiote, html, css } from '@symbiotejs/symbiote';

class Badge extends Symbiote {}

Badge.rootStyles = css`
  :host { display: inline-block; }
  .badge {
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--badge-bg, #eee);
    color: var(--badge-fg, #222);
    font: 12px/1.4 system-ui, sans-serif;
  }
`;

Badge.template = html`<span class="badge"><slot></slot></span>`;
Badge.reg('x-badge');
```

CSS variables and theming

- Expose tokens via `--*` custom properties. Consumers can override at any ancestor.

```html
<style>
  x-badge.theme-success { --badge-bg: #e1f7e6; --badge-fg: #0a7a2a; }
</style>
<x-badge class="theme-success">OK</x-badge>
```

CSS Data context

- Read CSS custom properties as data tokens in templates: `{{--token}}` or bind to styles: `$={{ 'style.color': '--text-color' }}`.

Best practices

- Prefer `part` attributes and CSS custom properties over deep selectors.
- Keep component styles small and composable; let apps theme via `--tokens`.
- Avoid leaking layout—encapsulate spacing inside the component only when essential.
