import fs from 'fs';
// SSR for Web Components
import { wcSsr } from 'jsda-kit/node/wcSsr.js';
// Apply data to template
import { applyData } from 'jsda-kit/iso/applyData.js';
// Importmap generation
import IMPORTMAP from 'jsda-kit/node/importmap.js';
// Google Icons link
import ICONS_LINK from '../lib/icons/link.html.js';
// Icon helper
import { icon } from '../lib/icons/icon.js';
// Google Noto Emoji link
import EMOJI_LINK from '../lib/emoji/link.html.js';
// Emoji helper
import { emo } from '../lib/emoji/emo.js';

let template = fs.readFileSync(new URL('./tpl/dashboard.tpl.html', import.meta.url), 'utf-8');

export default applyData(await wcSsr(template, './src/components/{tag-name}/ssr-tpl.js', {}), {
  IMPORTMAP,
  ICONS_LINK,
  EMOJI_LINK,
  TITLE: 'Dashboard',
  BASE_HREF: '../',
  CSS_PATH: './css/dashboard.css.js',
  JS_PATH: './browser/dashboard/index.js',
  HEADER_CONTENT: `${icon('dashboard')} Dashboard`,
  CONTENT: `${emo('🍰')} DASHBOARD CONTENT`,
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,
});