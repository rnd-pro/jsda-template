export default /*css*/ `
:root {
  --page-height: 100svh;
}

body {
  margin: 0;
  height: var(--page-height);
}

main {
  height: var(--page-height);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-family: sans-serif;

  h1 {
    margin: 0;
    padding: 0;
    color: #00f;
  }

  p {
    margin: 0;
    padding: 0;
  }
}
`;