import codeStyles from './code.css.js'; // Auto-generated code highlighting styles

// Collect all component styles:
const components = Object.values(await import('../components/exports.css.js')).map((m) => {
  return m.default;
}).join('\n');

export default /*css*/ `
@view-transition {
  navigation: auto;
}

:root {
  --clr-1: #eee;
  --clr-2: #212121;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --ui-size: 40px;
  --col-w: 960px;

  --calc-gap-aside: calc((100vw - var(--col-w)) / 2);
  --calc-top-pan-height: calc(var(--ui-size) + var(--gap-mid) * 2);
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

body {
  display: block;
  padding-left: var(--ui-size);
}

header {
  position: sticky;
  top: 0;
  height: var(--calc-top-pan-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-max);
  z-index: 1000;
  background-color: var(--clr-1);
  color: var(--clr-2);
  border-bottom: var(--gap-min) solid currentColor;
  padding-left: var(--calc-gap-aside);
  padding-right: var(--calc-gap-aside);
}

footer {
  display: flex;
  height: var(--calc-top-pan-height);
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-max);
  background-color: var(--clr-1);
  color: var(--clr-2);
  border-top: var(--gap-min) solid currentColor;
  padding-left: var(--calc-gap-aside);
  padding-right: var(--calc-gap-aside);
}

article {
  display: block;
  margin: auto;
  max-width: var(--col-w);
  min-height: calc(100vh - var(--ui-size) * 2);
  padding: var(--gap-max);

  blockquote {
    display: block;
    margin: 0;
    padding: var(--gap-max);
    border: var(--gap-min) solid currentColor;

    p {
      margin: 0;
    }
  }

  a {
    color: currentColor;
    font-weight: bold;
  }

  img[src^="https://rnd-pro.com/idn/"] {
    width: 100%;
  }
}

${codeStyles}
${components}
`;