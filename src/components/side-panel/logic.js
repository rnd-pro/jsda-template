import Symbiote from '@symbiotejs/symbiote';

export class SidePanel extends Symbiote {
  ssrMode = true;

  renderCallback() {
    let menuItems = [...this.querySelectorAll('a')];
    let current;
    menuItems.forEach((el) => {
      let elHref = el.getAttribute('href').replace('./', '').trim();
      if (elHref && window.location.pathname.includes(elHref)) {
        el.setAttribute('current', '');
        current = el;
      }
    });
    if (!current) {
      this.querySelector('a')?.setAttribute('current', '');
    }
  }
}

SidePanel.reg('side-panel');