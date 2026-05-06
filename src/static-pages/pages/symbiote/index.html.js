import { getPage } from '../../getPage.js';

export default await getPage({
  BASE_PATH: '../../',
  TITLE: 'Symbiote.js',
  HEADER_CONTENT: 'JSDA Stack Reference: Symbiote.js',
  MD_URL: 'https://raw.githubusercontent.com/symbiotejs/symbiote.js/refs/heads/main/README.md',
});