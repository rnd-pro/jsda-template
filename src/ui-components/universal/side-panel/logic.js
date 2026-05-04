import Symbiote from '@symbiotejs/symbiote';
import template from './ssr-tpl.js';

export class SidePanel extends Symbiote {
  
  // ISO-flag related documentation: https://github.com/symbiotejs/symbiote.js/blob/main/docs/flags.md#isomode
  isoMode = true;

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

SidePanel.template = template;
SidePanel.reg('side-panel');