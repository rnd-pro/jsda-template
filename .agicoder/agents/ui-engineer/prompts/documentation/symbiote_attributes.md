Attribute bindings in SymbioteJS 2.x

Use the `@` token to bind component state to HTML attributes in templates. This allows you to declaratively control attribute presence and values based on your component’s state.

Basic usage in templates

- Bind any element’s attribute to a state key using the `$` binding map with an `@`-prefixed attribute name:
  - Example: `$={{ '@hidden': 'isHidden' }}`
  - When `isHidden` is truthy, the `hidden` attribute is present; when falsy, it is removed.

Boolean handling and coercion

- Boolean attributes (e.g., `hidden`, `disabled`, `checked`) are controlled by presence/absence.
- Use `!` and `!!` to coerce values when needed:
  - `$={{ '@hidden': '!textContent' }}` → adds `hidden` when `textContent` is empty/falsy.
  - `$={{ '@contenteditable': '!!canEdit' }}` → ensures `contenteditable` is set with a boolean-derived value.

Binding attribute values (non-boolean)

- For attributes that expect string/number values (e.g., `aria-label`, `role`, `title`, `id`), the bound value is stringified:
  - `$={{ '@aria-label': 'label' }}`
  - `$={{ '@title': 'tooltipText' }}`

Host element attributes

- You can also control the host element’s attributes using the host binding map when available in your component/template setup:
  - Example: `$host={{ '@tabindex': 'tabIndex', '@aria-busy': 'isLoading' }}`

Initialize state from attributes

- Read initial values from host attributes into component state via `init$` tokens:
  - `init$ = { label: '@aria-label', isHidden: '@hidden' }`
  - This initializes `label` from the host’s `aria-label` and `isHidden` from the presence of `hidden`.
- You can combine with coercion in expressions if your setup supports it:
  - `init$ = { isDisabled: '!!@disabled' }`

Two-way synchronization patterns

- Template bindings with `@` are state→attribute.
- Initialize state from attributes with `init$` for attribute→state on component creation.
- Together, these cover common one-time attribute→state initialization and ongoing state→attribute reflection.

Practical examples

1) Toggle visibility with a boolean state key:
   - Template: `$={{ '@hidden': 'isHidden' }}`
   - State: `this.$.isHidden = true` → adds `hidden`; set to `false` → removes it.

2) Derive `contenteditable` from text presence:
   - Template: `$={{ '@contenteditable': '!!text' }}`
   - Empty `text` → `false`; non-empty → `true`.

3) ARIA labels from state:
   - Template: `$={{ '@aria-label': 'computedLabel' }}`
   - Update `this.$.computedLabel` to keep the attribute in sync.

4) Initialize from attributes, then reflect back:
   - `init$ = { titleText: '@title' }`
   - Template: `$={{ '@title': 'titleText' }}`
   - On mount, reads the host’s `title` into `titleText`; subsequent changes to `titleText` update the attribute.

Notes and best practices

- Prefer boolean attributes for binary states; rely on presence/absence via truthiness.
- For numeric attributes, ensure you provide a number or a numeric string.
- Keep expressions simple and based on component state keys; compute derived values in code if logic grows.
- Use ARIA attributes to keep UI state accessible (`@aria-busy`, `@aria-expanded`, etc.).
