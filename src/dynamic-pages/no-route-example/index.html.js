import fs from 'node:fs';
import pageData from './pageData.js';
import { applyData } from 'jsda-kit/iso/applyData.js';

// Endpoint specific dependency to render server component:
export const ssrImports = [
  './src/ui-components/server-only/server-info/logic.js',
];

let template = fs.readFileSync(new URL('./template.html', import.meta.url)).toString();

export default applyData(template, pageData);