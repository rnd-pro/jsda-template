import Symbiote from '@symbiotejs/symbiote';
import styles from './styles.js';
import template from './template.js';

class ServerInfo extends Symbiote {
  serverTime = new Date().toISOString();
  
  // Node.js only code:
  nodeVersion = globalThis.process.version;
}

ServerInfo.template = template;
ServerInfo.rootStyles = styles;
ServerInfo.reg('server-info');

export default ServerInfo;
