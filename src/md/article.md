# My Home Page

This JSDA-page code example:
```javascript
import { wcSsr } from 'jsda-kit/node/wcSsr.js';
import { applyData } from 'jsda-kit/iso/applyData.js';
import { md } from 'jsda-kit/node/md.js';
import fs from 'fs';

const template = fs.readFileSync('./src/templates/home-template.html', 'utf8');

export default applyData(template, {
  TITLE: 'Home',
  BASE_PATH: './',
  CSS_PATH: 'css/index.css',
  HEADER_CONTENT: 'My Site',
  CONTENT: await md('./src/md/article.md'),
  FOOTER_CONTENT: `&copy; ${new Date().getFullYear()}`,

  /** 
   * The source string for the Web Component Server Side Rendering 
   * could be any HTML-string with any valid structure that contains custom tags:
   */
  SIDE_PANEL: await wcSsr(/*html*/ `<side-panel></side-panel>`, './src/templates/wc-ssr/{tag-name}/tpl.js', {}),
});
```