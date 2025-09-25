Get started with SymbioteJS 2.x

Install

- npm: `npm i @symbiotejs/symbiote`
- CDN/HTTPS: `import { Symbiote } from 'https://esm.run/@symbiotejs/symbiote'`

Hello component

```js
import { Symbiote, html, css } from '@symbiotejs/symbiote';

class HelloCard extends Symbiote {
  init$ = {
    name: 'World',
    greet: () => alert(`Hello, ${this.$.name}!`),
  };
}

HelloCard.template = html`
  <section class="card">
    <h1>Hello, {{name}}!</h1>
    <button $={{ onclick: 'greet' }}>Greet</button>
  </section>
`;

HelloCard.rootStyles = css`
  :host { display: block; font: 14px/1.4 system-ui, sans-serif; }
  .card { padding: 12px; border: 1px solid #ddd; border-radius: 8px; }
`;

HelloCard.reg('hello-card');
```

Use in plain HTML

```html
<hello-card></hello-card>
```

Import map example (CDN ESM)

```html
<script type="importmap">
  {
    "imports": {
      "@symbiotejs/symbiote": "https://esm.run/@symbiotejs/symbiote"
    }
  }
  </script>

<script type="module">
  import { Symbiote, html, css } from '@symbiotejs/symbiote';

  class MyComponent extends Symbiote {
    init$ = {
      count: 0,
      increment: () => {
        this.$.count++;
      },
    }
  }

  MyComponent.template = html`
    <h2>{{count}}</h2>
    <button $={{onclick: 'increment'}}>Click me!</button>
  `;

  MyComponent.rootStyles = css`
    :host { display: inline-block; }
    h2 { color: #f00; }
  `;

  MyComponent.reg('my-component');
</script>

<my-component></my-component>
```

Key concepts

- State with `init$` and `$` proxy for reads/writes
- Declarative templates with `html` and binding maps (`$={{ ... }}`)
- Styles via constructable stylesheets (`rootStyles`)
- Registration with `.reg('tag-name')`

Works anywhere

- No framework lock-in: native Custom Elements, Shadow DOM, template slots, constructable stylesheets, CSS variables, and ESM/import maps.
