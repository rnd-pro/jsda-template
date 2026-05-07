// Universal isomorphic components
export * from './universal/login-widget/logic.js';
export * from './universal/side-panel/logic.js';

// The code re-exported here will be used on SSR stage only, 
// so it will not appear in the client-side bundle.