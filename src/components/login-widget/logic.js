import Symbiote from '@symbiotejs/symbiote';

export class LoginWidget extends Symbiote {

  ssrMode = true;

  init$ = {
    onLoginClicked: () => {
      console.log('Login clicked');
    }
  }

  renderCallback() {
    console.log('LoginWidget');
  }
}

LoginWidget.reg('login-widget');