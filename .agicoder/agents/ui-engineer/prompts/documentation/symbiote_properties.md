State and properties (SymbioteJS 2.x)

Define component state with `init$`. Read and write through the reactive `$` proxy.

Basics

- Read: `this.$.value`
- Write: `this.$.value = 123`
- Batch: `this.set$({ a: 1, b: 2 })`

```js
import { Symbiote, html } from '@symbiotejs/symbiote';

class ClockFace extends Symbiote {
  init$ = { time: Date.now() };

  connectedCallback() {
    super.connectedCallback();
    this._t = setInterval(() => (this.$.time = Date.now()), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._t);
  }
}

ClockFace.template = html`<time>{{time}}</time>`;
```

Subscriptions and notifications

- Subscribe to state changes: `this.sub('time', (val) => { /* ... */ })`
- Manually trigger: `this.notify('time')` (useful after in-place adjustments)

Computed properties

- Prefix computed keys with `+`. They recompute automatically when dependencies change.
- If you mutate nested data, you can notify manually with `this.notify('+fullName')`.

```js
class UserCard extends Symbiote {
  init$ = {
    first: 'Ada',
    last: 'Lovelace',
    '+fullName': ($) => `${$.first} ${$.last}`,
  };
}

UserCard.template = html`<h3>{{+fullName}}</h3>`;
```

Context tokens

- You can reference cross-component data with tokens: `^` (inherited), `*` (shared), `/NAME` (named), `--var` (CSS Data), `@attr` (host attribute).
- Use them in text bindings and binding-map values, for example: `$={{ textContent: '^title' }}` or `{{/Theme.color}}`.
