import { getDataFn, getRouteFn } from './src/dynamic-pages/node/handlers.js';

/** @type { JSDA_CFG } */
export default {
  dynamic: {
    port: 3000,
    routes: './src/dynamic-pages/routes/routes.js',
    cache: {
      inMemory: true,
      exclude: [
        '/dashboard/',
      ],
    },
    baseDir: './src/dynamic-pages/',
    getRouteFn,
    getDataFn,
  },
  static: {
    outputDir: './dist',
    sourceDir: './src/static-pages',
    entryPatterns: [
      'index.js',
      'index.*.js',
      '404.html.js',
      'llms.txt.js',
      'robots.txt.js',
    ],
    copy: [],
    exclude: [],
  },
  ssr: {
    enabled: true,
    imports: [
      './src/ui-components/ssr-exports.js',
    ],
  },
  minify: {
    js: true,
    css: true,
    html: true,
    svg: true,
    exclude: [],
  },
  bundle: {
    js: true,
    css: true,
    exclude: [],
  },
  log: true,
  importmap: {
    packageList: [
      '@symbiotejs/symbiote',
    ],
    srcSchema: 'https://cdn.jsdelivr.net/npm/{pkg-name}/+esm',
    polyfills: false,
    preload: false,
  },
  sitemap: {
    enabled: true,
    baseUrl: 'https://my-site.com/',
    exclude: [
      '/dashboard/',
      '/404/',
      '/login/',
    ],
  },
  markdown: {
    externalLinks: {
      enabled: true,
      target: '_blank',
      rel: 'noopener noreferrer',
      exclude: [],
    },
  },
}