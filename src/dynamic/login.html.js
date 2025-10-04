import fs from 'fs';
// SSR for Web Components
import { wcSsr } from 'jsda-kit/node/wcSsr.js';
// Apply data to template
import { applyData } from 'jsda-kit/iso/applyData.js';
// Importmap generation
import IMPORTMAP from 'jsda-kit/node/importmap.js';

let template = fs.readFileSync(new URL('./login.tpl.html', import.meta.url), 'utf-8');

export default applyData(await wcSsr(template, './src/components/{tag-name}/ssr-tpl.js', {}), {
  IMPORTMAP,
  TITLE: 'Login Page',
  BASE_PATH: '/',
  CSS_PATH: './css/styles.css.js',
  JS_PATH: './app/index.js',
  HEADER_CONTENT: 'Login Page',
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,
});