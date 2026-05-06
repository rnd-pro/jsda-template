import { getPage } from './getPage.js';

export default await getPage({
  TITLE: 'JSDAStack',
  HEADER_CONTENT: 'JSDAStack Reference Project',
  MD_URL: './README.md',
});