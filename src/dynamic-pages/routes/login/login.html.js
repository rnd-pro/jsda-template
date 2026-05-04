import fs from 'fs';
// Apply data to template
import { applyData } from 'jsda-kit/iso/applyData.js';
// Importmap generation
import IMPORTMAP from 'jsda-kit/node/importmap.js';
// Google Icons link
import iconsLink from '../../../icons/link.html.js';

let template = fs.readFileSync('./src/dynamic/tpl/login.tpl.html', 'utf-8');

export default applyData(template, {
  IMPORTMAP,
  ICONS_LINK: iconsLink,
  TITLE: 'Login Page',
  BASE_HREF: '../',
  CSS_PATH: './css/login.css.js',
  JS_PATH: './js/index.js',
  HEADER_CONTENT: 'Login Page',
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,
});