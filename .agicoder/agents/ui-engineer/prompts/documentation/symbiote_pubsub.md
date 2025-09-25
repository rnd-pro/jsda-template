Pub/Sub patterns with SymbioteJS 2.x

Use decoupled messaging for cross-component communication. Prefer DOM `CustomEvent` and/or shared context as a lightweight event bus.

DOM CustomEvent

```js
import { Symbiote, html } from '@symbiotejs/symbiote';

class EmitterBtn extends Symbiote {
  init$ = {
    send: () => this.dispatchEvent(new CustomEvent('app:ping', { detail: { t: Date.now() }, bubbles: true }))
  };
}

EmitterBtn.template = html`<button $={{ onclick: 'send' }}>Ping</button>`;
EmitterBtn.reg('emitter-btn');

class ListenerBox extends Symbiote {
  connectedCallback() {
    super.connectedCallback();
    this._onPing = (e) => (this.$.last = e.detail.t);
    this.addEventListener('app:ping', this._onPing);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('app:ping', this._onPing);
  }
  init$ = { last: null };
}

ListenerBox.template = html`<output>{{last}}</output>`;
ListenerBox.reg('listener-box');
```

Shared context as a bus

- Expose bus functions on `*` context and consume them from any participant.

```js
class BusProvider extends Symbiote {
  init$ = {
    '*emit': (type, detail) => this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true })),
  };
}

class BusClient extends Symbiote {
  connectedCallback() {
    super.connectedCallback();
    this._onAny = (e) => console.log('bus event', e.type, e.detail);
    this.addEventListener('notify', this._onAny);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('notify', this._onAny);
  }
}

BusClient.template = html`<button $={{ onclick: '*emit' }} data-args='["notify", {"ok":true}]'>Notify</button>`;
```

Guidelines

- Prefer bubbling `CustomEvent` for parent/child communication.
- Use named event types (prefix with a namespace like `app:`).
- Keep payloads serializable. Avoid passing component instances across boundaries.
