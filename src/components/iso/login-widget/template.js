import { html } from '@symbiotejs/symbiote';
import { icon } from '../../../lib/icons/icon.js';

// Symbiote.js component SSR template:
export default html`
<input type="password" ref="password" name="password" placeholder="Enter access token" />
<button ${{onclick: 'onLoginClicked'}}>${icon('login')} Login</button>
`;