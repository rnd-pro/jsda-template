import Symbiote from '@symbiotejs/symbiote';

export class LoginWidget extends Symbiote {

  // SSR-flag related documentation: https://symbiotejs.org/2x/docs/Flags/
  ssrMode = true;

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

LoginWidget.reg('login-widget');