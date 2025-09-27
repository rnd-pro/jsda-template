import { getPage } from './getPage.js';

export default await getPage({
  TITLE: 'JSDAStack',
  HEADER_CONTENT: 'JSDAStack Reference Project',
  MD_PATH: 'https://raw.githubusercontent.com/rnd-pro/jsda/refs/heads/main/README.md',
});