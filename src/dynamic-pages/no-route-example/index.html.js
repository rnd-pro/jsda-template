import fs from 'node:fs';
import pageData from './pageData.js';
import { applyData } from 'jsda-kit/iso/applyData.js';

let template = fs.readFileSync(new URL('./template.html', import.meta.url)).toString();

export default applyData(template, pageData);