let hlSelectorsList = [
  '.hljs-string',
  '.hljs-comment',
  '.hljs-attr',
  '.hljs-attribute',
  '.hljs-function',
  '.hljs-variable',
  '.hljs-title',
  '.hljs-property',
  '.hljs-selector-class',
  '.hljs-keyword',
  '.hljs-tag',
  '.hljs-name',
  '.hljs-number',
  '.hljs-params',
  '.hljs-literal',
];

let hlStyles = /*css*/ `
pre {
  font-family: monospace;

  code {
    display: block;
    background-color: var(--clr-2);
    color: var(--clr-1);
    padding: var(--gap-max);
    overflow-x: auto;
  }
}
`;
let step = 0;
let hsl = () => {
  return `hsl(${step++ * 150}deg 85% 74%)`;
};

hlSelectorsList.forEach((selector) => {
  hlStyles += /*css*/ `
    code ${selector} {
      color: ${hsl()};
    }
  `;
});

export default hlStyles;