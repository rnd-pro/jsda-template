import fs from 'fs';
import { applyData } from 'jsda-kit/iso/applyData.js';
import { md } from 'jsda-kit/node/md.js';
import importmap from 'jsda-kit/node/importmap.js';
import ICONS_LINK from '../icons/link.html.js';

const template = fs.readFileSync('./src/static-pages/page.tpl.html', 'utf8');

/**
 * @typedef {Object} PageData
 * @property {String} [IMPORTMAP]
 * @property {String} TITLE
 * @property {String} [BASE_PATH]
 * @property {String} [CSS_PATH]
 * @property {String} [JS_PATH]
 * @property {String} HEADER_CONTENT
 * @property {String} MD_URL
 * @property {String} [FOOTER_CONTENT]
 * @property {String} [SIDE_PANEL_HTML]
 * @property {Object<string, string>} [SIDE_PANEL_DATA]
 */

/**
 * 
 * @param {PageData} pageData 
 * @returns 
 */
export async function getPage(pageData) {

  return applyData(template, {
    IMPORTMAP: pageData.IMPORTMAP || importmap,
    ICONS_LINK,
    TITLE: pageData.TITLE,
    BASE_PATH: pageData.BASE_PATH || './',
    CSS_PATH: pageData.CSS_PATH || 'css/index.css',
    JS_PATH: pageData.JS_PATH || 'js/index.js',
    HEADER_CONTENT: pageData.HEADER_CONTENT,
    CONTENT: await md(pageData.MD_URL),
    FOOTER_CONTENT: pageData.FOOTER_CONTENT || `&copy; ${new Date().getFullYear()}`,
  });
};