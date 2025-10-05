import names from './collection.js';

/**
 * 
 * @param {keyof names} name 
 * @returns 
 */
export function icon(name) {
  return `<span icon class="material-symbols-outlined">${name}</span>`;
};