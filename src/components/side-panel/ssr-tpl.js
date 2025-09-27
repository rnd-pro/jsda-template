const menuData = [
  {
    name: 'JSDAStack',
    path: './',
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

export default /*html*/ `
${menuData.map(item => `<a href="${item.path}">${item.name}</a>`).join('')}
`;