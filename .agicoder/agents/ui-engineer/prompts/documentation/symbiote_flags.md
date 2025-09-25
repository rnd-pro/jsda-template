Component flags and options (SymbioteJS 2.x)

Use component-level flags to enable optional features or relax defaults for templating and styling.

Common flags

- allowCustomTemplate: allow consuming apps to provide an external template via `use-template="#id"`.
- allowCustomStyle: allow consuming apps to provide external styles via an adopted stylesheet or `<style>`.
- delegatesFocus: delegate focus from shadow root to focusable descendant (if your component uses shadow DOM).

How to enable flags

- Define flags on the component class. Both patterns below are commonly used:

```js
import { Symbiote, html, css } from '@symbiotejs/symbiote';

class CardView extends Symbiote {
  static allowCustomTemplate = true;
  static allowCustomStyle = true;
}

// or set after class definition
CardView.allowCustomTemplate = true;
CardView.allowCustomStyle = true;

CardView.template = html`<article><slot></slot></article>`;
CardView.rootStyles = css`
  :host { display: block; }
`;
CardView.reg('card-view');
```

External templates with allowCustomTemplate

```html
<template id="card-tpl">
  <article class="alt"><slot></slot></article>
  <style>
    :host { border: 1px solid currentColor; }
  </style>
  <!-- Optional in-template styles if allowed -->
  <div part="content">From page template</div>
  
  <!-- The component will pick this template if flagged -->
  <!-- Usage: <card-view use-template="#card-tpl"></card-view> -->
</template>
```

Notes

- Keep custom templates stable: expose `part`/`slot` hooks so apps can extend without breaking structure.
- If you allow external styles, prefer CSS custom properties for theming (`--tokens`) rather than deep selectors.
- Use flags intentionally; the more you open, the more surface for misuse in consuming apps.
