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
  transition: 0.3s ease-in-out;
  border-right: var(--ui-size) solid var(--clr-2);
  cursor: pointer;

  &:focus-within {
    transform: translateX(0);
    border-right: var(--gap-min) solid var(--clr-2);
    cursor: default;
  }
}

@media (min-width: 1400px) {
  side-panel {
    transform: translateX(0);
    border-right: var(--gap-min) solid var(--clr-2);
    cursor: default;
    box-shadow: none;
  }
}
`;