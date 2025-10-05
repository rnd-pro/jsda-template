export default /*css*/ `
side-panel {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  background-color: var(--clr-1);
  color: var(--clr-2);
  z-index: 10000;
  padding: var(--gap-mid);
  gap: var(--gap-mid);
  min-width: 240px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  overflow: auto;
  transform: translateX(calc(-100% + var(--ui-size)));
  transition: .3s;
  border-right: var(--ui-size) solid var(--clr-2);
  cursor: pointer;

  &:focus-within {
    transform: translateX(0);
    border-right: var(--gap-min) solid var(--clr-2);
    cursor: default;
  }

  a {
    display: flex;
    height: var(--ui-size);
    background-color: var(--clr-1);
    color: var(--clr-2);
    align-items: center;
    padding-left: var(--gap-max);
    padding-right: var(--gap-max);
    cursor: pointer;
    text-decoration: none;
    border: var(--gap-min) solid transparent;
    transition: .3s;

    &[current] {
      background-color: var(--clr-2);
      color: var(--clr-1);
    }

    &:hover {
      border: var(--gap-min) solid var(--clr-2);
    }
  }
}

@media (min-width: 1420px) {
  side-panel {
    transform: translateX(0);
    border-right: var(--gap-min) solid var(--clr-2);
    cursor: default;
    box-shadow: none;
  }
}
`;