export default {
  dynamic: {
    port: 3000,
    routes: './src.dynamic/routes.js',
    cache: {
      inMemory: true,
      exclude: []
    }
  },
  static: {
    outputDir: './dist',
    sourceDir: './src/static',
  },
  minify: {
    js: true,
    css: true,
    html: true,
    svg: true,
    exclude: []
  },
  bundle: {
    js: true,
    css: true,
    exclude: []
  },
  log: true,
  importmap: {
    packageList: [],
    srcSchema: 'https://cdn.jsdelivr.net/npm/{pkg-name}/+esm',
    polyfills: false,
    preload: true
  }
}