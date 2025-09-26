import codeStyles from './code.css.js'; // Auto-generated code highlighting styles

// Collect all component styles:
const components = Object.values(await import('../templates/wc-ssr/exports.css.js')).map((m) => {
  return m.default;
}).join('\n');

export default /*css*/ `
:root {
  --clr-1: #eee;
  --clr-2: #212121;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --ui-size: 40px;
  --col-w: 960px;

  --calc-gap-aside: calc(((100vw - var(--col-w)) / 2) + var(--gap-max));
}

* {
  box-sizing: border-box;
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
  top: 0;
  height: var(--ui-size);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-max);
  z-index: 1000;
  background-color: var(--clr-2);
  color: var(--clr-1);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  padding-left: var(--calc-gap-aside);
  padding-right: var(--calc-gap-aside);
}

footer {
  display: flex;
  height: var(--ui-size);
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-max);
  background-color: var(--clr-2);
  color: var(--clr-1);
  padding-left: var(--calc-gap-aside);
  padding-right: var(--calc-gap-aside);
}

article {
  display: block;
  margin: auto;
  max-width: var(--col-w);
  min-height: calc(100vh - var(--ui-size) * 2);
  padding: var(--gap-max);
}

${codeStyles}
${components}
`;