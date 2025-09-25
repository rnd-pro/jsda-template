# Symbiote.js — Lifecycle

This guide summarizes practical lifecycle stages and best practices for Symbiote components (vanilla Web Components powered by Symbiote).

## Core Lifecycle Phases
- Initialization: class loading, static fields, template/styles registration
- Construction: instance created (constructor), fields initialized
- Mount: element is attached to DOM (connectedCallback)
- Render/Update: state changes trigger DOM updates (reactive fields / signals)
- Attribute/Property Sync: reflect attributes to properties and vice versa when needed
- Unmount: element is detached from DOM (disconnectedCallback), cleanup resources

## Hooks & Responsibilities
- connectedCallback:
  - Bind event listeners
  - Initialize reactive state from attributes/properties
  - Schedule initial render (if not automatic)
  - Subscribe to external stores (unsubscribe on unmount)
- disconnectedCallback:
  - Remove event listeners
  - Cancel pending timeouts/intervals/raf
  - Abort fetches (AbortController)
  - Unsubscribe from stores/observers
- attributeChangedCallback:
  - Map attribute changes to internal state
  - Avoid heavy work; defer to update/render cycle

## Reactive State & Updates
- Keep state minimal and explicit (one source of truth)
- Derive computed values rather than duplicating state
- Batch updates to avoid unnecessary reflows
- Prefer idempotent updates (same input -> same DOM)

## Data Flow
- Inputs: attributes/properties, custom events, store subscriptions
- Outputs: custom events upward, DOM updates, slots
- Validate inputs on receipt; coerce types (number/boolean)
- Reflect only when necessary (attribute <-> property)

## Event Management
- Add listeners on mount; remove on unmount
- Use named handlers bound to the instance (for removeEventListener)
- Dispatch custom events with detail payloads; document contract

## Performance
- Minimize layout thrashing; group reads/writes
- Use requestAnimationFrame for visual updates when needed
- Defer non-critical work (requestIdleCallback or microtasks) when safe
- Prefer CSS for animations; avoid JS-driven layout loops

## Accessibility
- Keep roles/aria attributes in sync with state
- Manage focus: move focus only with user intent or clear UX reason
- Respect reduced motion/user preferences when applicable

## Styling Lifecycle
- Register styles once (static) when possible
- Avoid injecting styles repeatedly on updates
- Scope styles to the component; avoid leaking globals

## Async Work
- Wrap fetches with AbortController; abort on unmount
- Guard against race conditions (track request token; ignore late responses)
- Surface loading/error states in DOM with minimal reflows

## Cleanup Checklist (on Unmount)
- removeEventListener for every added listener
- unsubscribe/observer.disconnect for observers
- clearTimeout/clearInterval/cancelAnimationFrame
- abortController.abort for in-flight fetches
- null out large references to help GC

## Testing Notes
- Mount/unmount components in tests to assert cleanup
- Simulate attribute/property changes and verify updates
- Validate A11y attributes and keyboard interactions

## Example Structure (conceptual)
- constructor: init fields, bind handlers
- connectedCallback: subscribe, attach listeners, initial render
- attributeChangedCallback: map attrs -> state, schedule update
- disconnectedCallback: full cleanup

Keep components small, focused, and predictable. Favor explicit lifecycle management and deterministic state transitions.
