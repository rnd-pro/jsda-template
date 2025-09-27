import Symbiote from '@symbiotejs/symbiote';

export class SidePanel extends Symbiote {
  ssrMode = true;

  renderCallback() {
    console.log('HELLO SIDE_PANEL!');
  }
}

SidePanel.reg('side-panel');