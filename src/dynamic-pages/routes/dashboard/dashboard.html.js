import fs from 'fs';
// Apply data to template
import { applyData } from 'jsda-kit/iso/applyData.js';
// Importmap generation
import IMPORTMAP from 'jsda-kit/node/importmap.js';
// Google Icons link
import ICONS_LINK from '../../../icons/link.html.js';
// Icon helper
import { icon } from '../../../icons/icon.js';

let template = fs.readFileSync(new URL('./dashboard.tpl.html', import.meta.url), 'utf-8');

export default applyData(template, {
  IMPORTMAP,
  ICONS_LINK,
  TITLE: 'Dashboard',
  BASE_HREF: '../',
  CSS_PATH: './routes/dashboard/dashboard.css.js',
  JS_PATH: './js/index.js',
  HEADER_CONTENT: `${icon('dashboard')} Dashboard`,
  CONTENT: /*html*/ `<div>🍰</div>`,
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,
});