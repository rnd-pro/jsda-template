Routing with SymbioteJS 2.x

Symbiote does not impose a router. Use the History API and component state to reflect URL changes and render appropriate views.

Minimal router pattern

```js
import { Symbiote, html } from '@symbiotejs/symbiote';

const parseRoute = () => {
  const url = new URL(window.location.href);
  const path = url.pathname.replace(/\/+$/, '') || '/';
  const params = Object.fromEntries(url.searchParams.entries());
  return { path, params };
};

class AppShell extends Symbiote {
  init$ = { route: parseRoute() };

  connectedCallback() {
    super.connectedCallback();
    this._onPop = () => (this.$.route = parseRoute());
    window.addEventListener('popstate', this._onPop);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this._onPop);
  }

  navigate(path) {
    history.pushState(null, '', path);
    this.$.route = parseRoute();
  }
}

AppShell.template = html`
  <nav>
    <a href="/" $={{ onclick: 'navigate' }} data-args='["/"]'>Home</a>
    <a href="/about" $={{ onclick: 'navigate' }} data-args='["/about"]'>About</a>
  </nav>
  <main>
    {{+view}}
  </main>
`;

AppShell.prototype.init$['+view'] = ($) => {
  switch ($.route.path) {
    case '/': return 'Welcome';
    case '/about': return 'About us';
    default: return 'Not found';
  }
};

AppShell.reg('app-shell');
```

Tips

- Prevent full page reloads by handling `<a>` clicks (call `event.preventDefault()` in handlers) and updating history/state.
- Derive view-level state from `route` rather than mutating many independent flags.
- For larger apps, extract a tiny router utility (route table, path-to-regexp, guards) but keep components simple and state-driven.
