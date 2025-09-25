Reactive lists with `itemize` (SymbioteJS 2.x)

Use the special `itemize` binding to render arrays efficiently. DOM updates are granular when items are added, removed, or changed.

Basic example

```js
import { Symbiote, html } from '@symbiotejs/symbiote';

class TodoList extends Symbiote {
  init$ = {
    items: [
      { id: '1', title: 'Read docs' },
      { id: '2', title: 'Build UI' },
    ],
    add(title) {
      this.$.items = [...this.$.items, { id: String(Date.now()), title }];
    },
  };
}

TodoList.template = html`
  <ul $={{ itemize: 'items' }}>
    <li>
      <span>{{title}}</span>
    </li>
  </ul>
`;

TodoList.reg('todo-list');
```

Updating the list

- Replace the array reference to trigger reconciliation: `this.$.items = this.$.items.filter(/* ... */)`
- For edits, reassign with an updated copy: `this.$.items = this.$.items.map(/* ... */)`

Tips

- Keep each item a plain object with stable identifiers if possible (e.g., `id`).
- Avoid mutating the same array instance in place; reassign to allow Symbiote to diff efficiently.
