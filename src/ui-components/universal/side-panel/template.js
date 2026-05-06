import { icon } from '../../../icons/icon.js';

const menuData = [
  {
    name: 'Template Repo',
    path: './',
  },
  {
    name: 'JSDA Manifest',
    path: './pages/manifest/',
  },
  {
    name: 'Symbiote.js',
    path: './pages/symbiote/',
  },
  {
    name: 'Cloud Images Toolkit',
    path: './pages/cit/',
  },
];

let links = menuData.map(
  item => /*html*/ `<a href="${item.path}">${icon('arrow_forward')} ${item.name}</a>`
).join('');

export default /*html*/ `
${links}<div collapsed-btn>${icon('chevron_right')}</div>
`;