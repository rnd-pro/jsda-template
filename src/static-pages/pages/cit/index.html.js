import { getPage } from '../../getPage.js';

export default await getPage({
  BASE_PATH: '../../',
  TITLE: 'Cloud Images Toolkit',
  HEADER_CONTENT: 'JSDAStack Reference: Cloud Images Toolkit',
  MD_URL: 'https://raw.githubusercontent.com/rnd-pro/cloud-images-toolkit/refs/heads/main/README.md',
});