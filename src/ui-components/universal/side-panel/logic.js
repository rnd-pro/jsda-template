import Symbiote from '@symbiotejs/symbiote';
import styles from './styles.css.js';
import template from './template.js';

export class SidePanel extends Symbiote {
  
  // ISO-flag related documentation: https://github.com/symbiotejs/symbiote.js/blob/main/docs/flags.md#isomode
  isoMode = true;

  renderCallback() {
    this.tabIndex = 0;
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

SidePanel.rootStyles = styles;
SidePanel.template = template;
SidePanel.reg('side-panel');