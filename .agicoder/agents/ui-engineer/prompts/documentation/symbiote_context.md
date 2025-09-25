Context in SymbioteJS 2.x

Symbiote provides multiple context sources you can read from and bind to inside templates and binding maps. Use tokens to address a specific context:

- Local: default component state (no token)
- Inherited: `^` (read from a parent/top-level component context)
- Shared: `*` (shared workflow-level context)
- Named: `/NAME` (explicitly addressed named context)
- CSS Data: `--var` (CSS custom properties as data)

Where tokens can be used

- Text bindings: `{{...}}`
- Binding-map values: `$={{ propOrPath: 'valueKey' }}`

Local context (component state)

- Use `init$` to define state and read/write via the `$` proxy.

```js
import { Symbiote, html } from '@symbiotejs/symbiote';

class LocalDemo extends Symbiote {
  init$ = { title: 'Hello', count: 0 };
}

LocalDemo.template = html`
  <h1>{{title}}</h1>
  <button $={{ onclick: 'inc' }}>+</button>
`;

LocalDemo.prototype.inc = function () {
  this.$.count = this.$.count + 1;
};
```

Inherited context (`^`)

- Read data or call handlers exposed by a parent/hosting component.

```js
// Parent exposes data/handlers in its state
class ParentComp extends Symbiote {
  init$ = { title: 'From parent', onItemClick: (id) => console.log('click', id) };
}

// Child reads parent data/handlers with ^
class ChildComp extends Symbiote {}

ChildComp.template = html`
  <div>
    <h2>{{^title}}</h2>
    <button $={{ onclick: '^onItemClick' }}>Use parent handler</button>
  </div>
`;
```

Shared context (`*`)

- Use `*` for data shared by components participating in the same workflow.

```js
class SharedDemo extends Symbiote {
  init$ = {
    '*locale': 'en',
    '*setLocale': (loc) => (this.$['*locale'] = loc),
  };
}

SharedDemo.template = html`
  <p $={{ textContent: '*locale' }}></p>
  <button $={{ onclick: '*setLocale' }}>Switch locale</button>
`;
```

Named context (`/NAME`)

- Address an abstract, named source. Useful to decouple a component from a concrete parent.

```js
class NamedDemo extends Symbiote {}

NamedDemo.template = html`
  <h3>{{/Auth.userName}}</h3>
  <span $={{ title: '/Theme.tooltip' }}>Hover me</span>
`;
```

CSS Data context (`--var`)

- Read CSS custom properties as data in templates; great for theming and CSP-friendly data passing.

```js
class CssDataDemo extends Symbiote {}

CssDataDemo.template = html`
  <div class="box" $={{ 'style.backgroundColor': '--color-bg' }}>{{--label}}</div>
`;
```

Best practices

- Prefer local state for component-internal data; use `^`/`*`/`/NAME` sparingly to avoid tight coupling.
- Keep CSS Data (`--var`) to simple, serializable values (strings, numbers) and map them to styles or attributes.
- Avoid deep dependency chains across contexts; surface explicit inputs via attributes/properties when possible.
