import fs from 'fs';
import { wcSsr } from 'jsda-kit/node/wcSsr.js';
import { applyData } from 'jsda-kit/iso/applyData.js';
import { md } from 'jsda-kit/node/md.js';
import importmap from 'jsda-kit/node/importmap.js';
import ICONS_LINK from '../lib/icons/link.html.js';
import EMOJI_LINK from '../lib/emoji/link.html.js';

const template = fs.readFileSync('./src/static/page.tpl.html', 'utf8');

/**
 * @typedef {Object} PageData
 * @property {String} [IMPORTMAP]
 * @property {String} TITLE
 * @property {String} [BASE_PATH]
 * @property {String} [CSS_PATH]
 * @property {String} [JS_PATH]
 * @property {String} HEADER_CONTENT
 * @property {String} MD_PATH
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
    EMOJI_LINK,
    TITLE: pageData.TITLE,
    BASE_PATH: pageData.BASE_PATH || './',
    CSS_PATH: pageData.CSS_PATH || 'css/index.css',
    JS_PATH: pageData.JS_PATH || 'js/index.js',
    HEADER_CONTENT: pageData.HEADER_CONTENT,
    CONTENT: await md(pageData.MD_PATH),
    FOOTER_CONTENT: pageData.FOOTER_CONTENT || `&copy; ${new Date().getFullYear()}`,

    /** 
     * The source String for the Web Component Server Side Rendering 
     * could be any HTML-String with any valid structure that contains custom tags:
     */
    SIDE_PANEL: await wcSsr(
      pageData.SIDE_PANEL_HTML || /*html*/ `<side-panel tabindex="0"></side-panel>`,
      './src/lib/components/{tag-name}/ssr-tpl.js', 
      pageData.SIDE_PANEL_DATA || {}),
  });
};