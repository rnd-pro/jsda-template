import LoginWidgetStyles from '../../lib/components/login-widget/styles.css.js';
import iconsCss from '../../lib/icons/icons.css.js';
import common from '../../lib/css/common.css.js';

export default /*css*/ `
${common}

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

/* Icon Styles */
${iconsCss}
`;