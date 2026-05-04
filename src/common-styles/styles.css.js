// Common rules
import common from './common.css.js';

// UI Components
import sidePanelStyles from '../ui-components/universal/side-panel/styles.css.js';

// Code highlighting styles
import codeStyles from './code.css.js'; // Auto-generated color scheme

export default /*css*/ `
${common}

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

${codeStyles}
${sidePanelStyles}
`;