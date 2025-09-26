const menuData = [
  {
    name: 'Home',
    path: '/',
    attr: 'current',
  },
  {
    name: 'About',
    path: '/about',
    attr: '',
  },
  {
    name: 'Blog',
    path: '/blog',
    attr: '',
  },
  {
    name: 'Contacts',
    path: '/contacts',
    attr: '',
  }
];

export default /*html*/ `
${menuData.map(item => `<a ${item.attr} href="${item.path}">${item.name}</a>`).join('')}
`;