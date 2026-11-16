import fs from 'node:fs';
import { getPage } from '../../getPage.js';

export default await getPage({
  BASE_PATH: '../../',
  TITLE: 'Symbiote HTML-app Starter',
  HEADER_CONTENT: 'JSDA Stack Reference: HTML-app',
  CSS_PATH: 'pages/html-app/index.css',
  JS_PATH: 'pages/html-app/index.js',
  CONTENT: fs.readFileSync(new URL('../../../ui-components/html-app/task-board/template.html', import.meta.url), 'utf8'),
});
