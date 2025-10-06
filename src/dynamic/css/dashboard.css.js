import common from '../../lib/css/common.css.js';
import iconsCss from '../../lib/icons/icons.css.js';
import emojiCss from '../../lib/emoji/emoji.css.js';

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
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--ui-size);
  background-color: var(--clr-2);
  color: var(--clr-1);
  padding: 0 var(--gap-max);
}

div[emostration] > [emoji] {
  font-size: 200px;
}

/* Icon Styles */
${iconsCss}

/* Emoji Styles */
${emojiCss}
`;