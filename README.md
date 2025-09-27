# JSDAStack Template Repository

![JSDAStack](https://img.shields.io/badge/JSDAStack-Template-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![Symbiote.js](https://img.shields.io/badge/Symbiote.js-2.3.3-orange)

A modern template repository for creating JSDAStack projects with static-site-generation (SSG), server-side rendering (SSR), web components, and TypeScript support.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Full SSR support for web components
- **Web Components** - Built with [Symbiote.js](https://github.com/symbiotejs/symbiote) framework
- **TypeScript Support** - Optional TypeScript configuration included
- **Static Site Generation** - Build static sites with dynamic routing
- **Markdown Processing** - Built-in markdown rendering capabilities
- **Component Library** - Modular component architecture
- **Modern ES Modules** - Native ES module support
- **Minification & Bundling** - On-the-fly asset optimization

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable web components
│   │   └── side-panel/      # Example side panel component
│   ├── css/                 # JSDA Stylesheets
│   ├── dynamic/             # Dynamic JSDA application code
│   ├── md/                  # Markdown content files
│   ├── static/              # Static assets and pages
│   │   ├── css/             # Static CSS files
│   │   ├── js/              # Static JavaScript files
│   │   └── pages/           # Static page definitions
│   └── templates/           # HTML templates
├── project.cfg.js           # Project configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Use this template** to create a new repository or clone it:
   ```bash
   git clone https://github.com/rnd-pro/jsda-template.git my-project
   cd my-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Static site development:**
   ```bash
   jsda ssr
   ```

4. **Dynamic JSDA-Server Usage:**
   ```bash
   jsda serve
   ```

## 📖 Usage

### Dynamic Server Routes

Define dynamic routes in `src/dynamic/routes.js`:

```javascript
export default {
  '/': './src/dynamic/home.html.js',
  '/about': './src/dynamic/about.html.js',
  // Add more routes here
};
```

## ⚙️ Configuration

### Project Configuration

Configure your project in `project.cfg.js`:

```javascript
export default {
  dynamic: {
    port: 3000,              // Dynamic server port
    routes: './src/dynamic/routes.js',
    cache: {
      inMemory: true,
      exclude: [],
    },
  },
  static: {
    outputDir: './dist',     // Build output directory
    sourceDir: './src/static', // Static files source directory
  },
  minify: {
    js: true,
    css: true,
    html: true,
    svg: true,
  },
  bundle: {
    js: true,
    css: true,
  },
  importmap: {
    packageList: ['@symbiotejs/symbiote'], // Importmap package list
    srcSchema: 'https://cdn.jsdelivr.net/npm/{pkg-name}/+esm',
  },
};
```

## 📦 Dependencies

### Core Dependencies

- **[@symbiotejs/symbiote](https://github.com/symbiotejs/symbiote)** - Web components framework
- **[jsda-kit](https://github.com/rnd-pro/jsda-kit)** - JSDA development toolkit

### Development Dependencies

- **@types/node** - Node.js type definitions
- **cloud-images-toolkit** - Image publishing utilities

## 🏗️ Build Process

The template supports both static site generation and dynamic server-side rendering:

1. **Static Build**: Generates static HTML files for hosting
2. **Dynamic Build**: Creates a server-side rendered application
3. **Hybrid Mode**: Combines static and dynamic rendering

## 📚 Examples

The template includes several example implementations:

- **Side Panel Component** - Navigation component with SSR support
- **Page Templates** - HTML template with variable substitution
- **Markdown Rendering** - Dynamic markdown content processing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [JSDAStack Documentation](https://github.com/rnd-pro/jsda)
- [Symbiote.js Framework](https://rnd-pro.com/symbiote)
- [JSDA Kit](https://github.com/rnd-pro/jsda-kit)

## 📞 Support

- Create an [issue](https://github.com/rnd-pro/jsda-template/issues) for bug reports
- Contact: team@rnd-pro.com

---

**Happy coding with JSDAStack! 🎉**