import fs from 'node:fs';
import { applyData } from 'jsda-kit/iso/applyData.js';
import IMPORTMAP from 'jsda-kit/node/importmap.js';

const template = fs.readFileSync(new URL('../dashboard/dashboard.tpl.html', import.meta.url), 'utf8');

export default applyData(template, {
  IMPORTMAP,
  ICONS_LINK: '',
  TITLE: 'Symbiote HTML-app Starter',
  BASE_HREF: '../',
  CSS_PATH: './routes/html-app/index.css.js',
  JS_PATH: './routes/html-app/index.js',
  HEADER_CONTENT: 'JSDA Stack Reference: HTML-app',
  CONTENT: fs.readFileSync(new URL('../../../ui-components/html-app/task-board/template.html', import.meta.url), 'utf8'),
  FOOTER_CONTENT: `JSDA Template &copy; ${new Date().getFullYear()}`,
});
