const menuData = [
  {
    name: 'JSDAStack',
    path: './',
    attr: 'current',
  },
  {
    name: 'Symbiote.js',
    path: './pages/symbiote/',
    attr: '',
  },
  {
    name: 'Cloud Images Toolkit',
    path: './pages/cit/',
    attr: '',
  },
  // {
  //   name: 'Contacts',
  //   path: '/contacts',
  //   attr: '',
  // }
];

export default /*html*/ `
${menuData.map(item => `<a ${item.attr} href="${item.path}">${item.name}</a>`).join('')}
`;