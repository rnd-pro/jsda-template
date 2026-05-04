import { getPage } from '../../getPage.js';

export default await getPage({
  BASE_PATH: '../../',
  TITLE: 'Template Repo',
  HEADER_CONTENT: 'JSDAStack Reference: Template Repo',
  MD_URL: './README.md',
});