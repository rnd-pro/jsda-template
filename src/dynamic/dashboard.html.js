import fs from 'fs';

let template = fs.readFileSync(new URL('./tpl/dashboard.tpl.html', import.meta.url), 'utf-8');

export default template;