export default /*css*/ `
login-widget {
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: var(--clr-2);
  color: var(--clr-1);
  gap: var(--gap-mid);
  padding: var(--gap-max);
  width: 100%;
  max-width: 300px;

  input {
    height: var(--ui-size);
    padding-left: var(--gap-mid);
    padding-right: var(--gap-mid);
    border: none;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-mid);
    height: var(--ui-size);
    background-color: var(--clr-1);
    color: var(--clr-2);
    border: none;
    cursor: pointer;
  }
}
`;