// Documentation: https://developers.google.com/fonts/docs/material_symbols

import names from './collection.js';

// IMPORTANT: Icon names should be sorted alphabetically
let namesList = Object.keys(names).sort().join(',');

export default /*html*/ `
<link 
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${namesList}" 
  rel="stylesheet"/>
`;