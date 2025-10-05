import fs from 'fs';
// SSR for Web Components
import { wcSsr } from 'jsda-kit/node/wcSsr.js';
// Apply data to template
import { applyData } from 'jsda-kit/iso/applyData.js';
// Importmap generation
import IMPORTMAP from 'jsda-kit/node/importmap.js';
// Google Icons link
import iconsLink from '../lib/icons/link.html.js';

let template = fs.readFileSync(new URL('./tpl/dashboard.tpl.html', import.meta.url), 'utf-8');

export default applyData(await wcSsr(template, './src/components/{tag-name}/ssr-tpl.js', {}), {
  IMPORTMAP,
  ICONS_LINK: iconsLink,
  TITLE: 'Dashboard',
  BASE_HREF: '../',
  CSS_PATH: './css/dashboard.css.js',
  JS_PATH: './browser/dashboard/index.js',
  HEADER_CONTENT: 'Dashboard',
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,
});