import { icon } from '../../icons/icon.js';

// Symbiote.js component SSR template:
export default /*html*/ `
<input type="password" ref="password" name="password" placeholder="Enter access token" />
<button bind="onclick: onLoginClicked">${icon('login')} Login</button>
`;