import names from './collection.js';

// IMPORTANT: Icon names should be sorted alphabetically
export default /*html*/ `
<!-- loads the entire Variable Font -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${Object.keys(names).sort().join(',')}" rel="stylesheet" />
`;