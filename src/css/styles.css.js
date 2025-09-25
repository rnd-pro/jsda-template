export default /*css*/ `
:root {
  --clr-1: #eee;
  --clr-2: #212121;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --col-w: 960px;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: var(--clr-1);
  color: var(--clr-2);
}

header {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background-color: var(--clr-2);
  color: var(--clr-1);
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-2);
  color: var(--clr-1);
}

article {
  margin: auto;
  max-width: var(--col-w);
}
`;