import LoginWidgetStyles from '../../components/login-widget/styles.css.js';

export default /*css*/ `
:root {
  --clr-1: rgba(39, 39, 60, 1);
  --clr-2: hsla(240, 82%, 87%, 1.00);

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --ui-size: 40px;
  --col-w: 960px;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: var(--clr-1);
  color: var(--clr-2);
  min-height: 100vh;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--ui-size) * 2);
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--ui-size);
  background-color: var(--clr-2);
  color: var(--clr-1);
  padding: 0 var(--gap-max);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--ui-size);
  background-color: var(--clr-2);
  color: var(--clr-1);
  padding: 0 var(--gap-max);
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}

/* Component Styles */
${LoginWidgetStyles}
`;