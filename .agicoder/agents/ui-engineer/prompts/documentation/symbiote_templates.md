Templates in SymbioteJS 2.x

Symbiote uses native DOM parsing for templates. Bindings are declarative and ergonomic for properties, attributes, events, and lists.

Text bindings

- Interpolate state values: `{{key}}`
- Use context tokens: `{{^parentKey}}`, `{{*sharedKey}}`, `{{/Name.key}}`, `{{--cssVar}}`, `{{@attr}}`

Binding maps (`$={{ ... }}`)

- Set DOM properties: `$={{ value: 'inputValue' }}`
- Nested props via path: `$={{ 'style.color': 'textColor' }}`
- Events: `$={{ onclick: 'handleClick' }}`
- Attributes via `@`: `$={{ '@aria-label': 'label', '@hidden': 'isHidden' }}`
- Boolean coercion: `!prop`, `!!prop`

```js
import { Symbiote, html } from '@symbiotejs/symbiote';

class FormField extends Symbiote {
  init$ = {
    value: '',
    hint: 'Type here',
    invalid: false,
    onInput: (e) => (this.$.value = e.target.value),
  };
}

FormField.template = html`
  <label>
    <span>{{hint}}</span>
    <input $={{ value: 'value', oninput: 'onInput', '@aria-invalid': '!!invalid', '@placeholder': 'hint' }} />
  </label>
`;
```

Refs

- Mark elements for imperative access: `ref="name"` or `ref=name`. Access with `this.ref.name` after render.

```js
class RefDemo extends Symbiote {}
RefDemo.template = html`<button ref="btn">Click</button>`;
RefDemo.prototype.renderCallback = function () { this.ref.btn.focus(); };
```

Slots

- Default and named slots are supported via native Shadow DOM slots.

```js
class Card extends Symbiote {}
Card.template = html`
  <article>
    <header><slot name="title"></slot></header>
    <section><slot></slot></section>
  </article>
`;
```

Dynamic lists with `itemize`

```js
class ListBox extends Symbiote {
  init$ = { items: [{ title: 'A' }, { title: 'B' }] };
}
ListBox.template = html`
  <ul $={{ itemize: 'items' }}>
    <li>{{title}}</li>
  </ul>
`;
```

External templates

- If `allowCustomTemplate` is enabled on the component class, consumers can provide an external template and reference it with `use-template="#id"` on the element instance.

Best practices

- Prefer property bindings (e.g., `value`, `checked`) for interactive elements; use `@attr` for attributes that must be reflected.
- Keep binding expressions simple. Compute complex values in code and bind the result.
- Use context tokens intentionally to avoid over-coupling across components.
