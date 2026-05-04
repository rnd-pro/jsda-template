import Symbiote from '@symbiotejs/symbiote';
import styles from './styles.css.js';
import template from './template.js';

export class LoginWidget extends Symbiote {

  // ISO-flag related documentation: https://github.com/symbiotejs/symbiote.js/blob/main/docs/flags.md#isomode
  isoMode = true;

  init$ = {
    onLoginClicked: () => {
      console.log('Login clicked');
      let token = this.ref.password.value.trim();
      if (token) {
        document.cookie = `access_token=${token}; path=/`;
        window.location.href = '/dashboard/';
      } else {
        alert('Please enter an access token');
      }
    }
  }

  renderCallback() {
    console.log('LoginWidget');
  }
}

LoginWidget.rootStyles = styles;
LoginWidget.template = template;
LoginWidget.reg('login-widget');