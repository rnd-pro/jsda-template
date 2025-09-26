const menuData = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Contacts',
    path: '/contacts'
  }
];

export default /*html*/ `
${menuData.map(item => `<a href="${item.path}">${item.name}</a>`).join('')}
`;