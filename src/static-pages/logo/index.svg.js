import fs from 'node:fs';

export default fs.readFileSync(new URL('../../svg/logo/jsda.svg', import.meta.url), 'utf-8');