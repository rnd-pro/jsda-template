import { getPage } from '../static/getPage.js';

export default await getPage({
  TITLE: 'Home',
  BASE_PATH: './src/',
  CSS_PATH: './css/styles.css.js',
  JS_PATH: './static/js/index.js',
  HEADER_CONTENT: 'Header',
  MD_PATH: './README.md',
  FOOTER_CONTENT: 'Footer',
  SIDE_PANEL_HTML: '',
});