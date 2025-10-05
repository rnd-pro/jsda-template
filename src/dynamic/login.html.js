import fs from 'fs';
// SSR for Web Components
import { wcSsr } from 'jsda-kit/node/wcSsr.js';
// Apply data to template
import { applyData } from 'jsda-kit/iso/applyData.js';
// Importmap generation
import IMPORTMAP from 'jsda-kit/node/importmap.js';
// Google Icons link
import iconsLink from '../lib/icons/link.html.js';

let template = fs.readFileSync(new URL('./tpl/login.tpl.html', import.meta.url), 'utf-8');

export default applyData(await wcSsr(template, './src/lib/components/{tag-name}/ssr-tpl.js', {}), {
  IMPORTMAP,
  ICONS_LINK: iconsLink,
  TITLE: 'Login Page',
  BASE_HREF: '../',
  CSS_PATH: './css/login.css.js',
  JS_PATH: './app/login/index.js',
  HEADER_CONTENT: 'Login Page',
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,
});