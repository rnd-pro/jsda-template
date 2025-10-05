import { icon } from '../../icons/icon.js';

export default /*html*/ `
<input type="password" ref="password" name="password" placeholder="Enter access token" />
<button bind="onclick: onLoginClicked">${icon('login')} Login</button>
`;