export default /*css*/ `
.task-board {
  sym-context:not(:defined) {
    display: none;
  }

  .task-toolbar, .task-row {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: var(--gap-mid);
    margin-block: var(--gap-max);
  }

  .task-title {
    display: grid;
    flex: 1 1 220px;
    gap: var(--gap-mid);
  }

  input:not([type="checkbox"], [type="radio"]), button {
    min-height: var(--ui-size);
    padding-inline: var(--gap-mid);
    font: inherit;
    max-width: 100%;
    min-width: 0;
  }

  fieldset {
    margin: 0;
  }

  .task-done {
    align-self: center;
  }

  .task-list {
    list-style: none;
    padding: 0;
  }

  .task-row {
    padding-block: var(--gap-mid);
    border-bottom: 1px solid currentColor;
  }

  form {
    margin: 0;
  }

  [hidden] {
    display: none;
  }
}
`;
