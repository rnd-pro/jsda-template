# JSDAStack Template Repository

![JSDAStack](https://img.shields.io/badge/JSDAStack-Template-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![JSDA Kit](https://img.shields.io/badge/jsda--kit-0.3.6-orange)
![Symbiote.js](https://img.shields.io/badge/Symbiote.js-2.3.3-orange)
![Cloud Images Toolkit](https://img.shields.io/badge/cloud--images--toolkit-0.1.4-orange)

This repository serves as a comprehensive template for kickstarting modern web projects using the **JSDAStack**. It is pre-configured for a seamless development experience, featuring Static Site Generation (SSG), Server-Side Rendering (SSR) with web components, and optional TypeScript support.

## 🚀 Core Features

- **Hybrid Rendering**: Full support for both SSG and SSR, allowing for flexible and performant web applications.
- **Web Components**: Leverages the [Symbiote.js](https://symbiotejs.org/) framework for creating reusable and encapsulated components.
- **TypeScript Integration**: Comes with a pre-configured `tsconfig.json` for optional static typing in your JavaScript code.
- **Dynamic Routing**: The dynamic application part uses a simple yet powerful routing mechanism.
- **Markdown Processing**: Built-in capabilities for rendering Markdown content.
- **Component-Based Architecture**: A modular structure for building and maintaining your component library.
- **ES Modules**: Utilizes native ES modules for a modern development workflow.
- **Asset Optimization**: On-the-fly minification and bundling for JavaScript, CSS, HTML, and SVG assets.
- **Cloud Image Management**: Integrated with the [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit) for efficient image handling and optimization.

## 📁 Project Structure

The project is organized into the following main directories:

```
.
├── cit/                     # Cloud Images Toolkit data and configuration
├── dist/                    # Build output for the static site
├── src/
│   ├── dynamic/             # Dynamic application source code (SSR)
│   │   ├── browser/         # Client-side JavaScript for dynamic pages
│   │   ├── css/             # CSS for dynamic pages
│   │   ├── node/            # Node.js handlers for data and routing
│   │   └── tpl/             # HTML templates for dynamic pages
│   ├── lib/                 # Shared libraries and components
│   │   ├── components/      # Reusable web components
│   │   ├── css/             # Common stylesheets
│   │   ├── emoji/           # Emoji-related assets
│   │   └── icons/           # Icon library
│   ├── md/                  # Markdown content files
│   └── static/              # Static site source code (SSG)
│       ├── css/             # CSS for static pages
│       ├── js/              # JavaScript for static pages
│       └── pages/           # Page definitions for the static site
├── types/                   # Project-wide TypeScript type definitions
├── project.cfg.js           # Main project configuration file
├── cit-config.json          # Configuration for the Cloud Images Toolkit
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager

### Installation

1.  **Create a new repository** from this template or clone it:
    ```bash
    git clone https://github.com/rnd-pro/jsda-template.git my-project
    cd my-project
    ```

2.  **Install the dependencies**:
    ```bash
    npm install
    ```

### Development Servers

-   **Static Site Development (SSG)**:
    This command starts a development server for the static site with hot-reloading.
    ```bash
    jsda ssr
    ```

-   **Dynamic Application Development (SSR)**:
    This command starts the dynamic application server.
    ```bash
    jsda serve
    ```

## ⚙️ Configuration

The project's behavior is controlled by the `project.cfg.js` file. Here you can configure the dynamic and static parts of the application, minification, bundling, and import maps.

The `cit-config.json` file is used to configure the Cloud Images Toolkit. For more information, please refer to the [official documentation](https://github.com/rnd-pro/cloud-images-toolkit).

## 📦 Key Dependencies

### Core

-   **[@symbiotejs/symbiote](https://symbiotejs.org/)**: A lightweight and powerful framework for creating web components.
-   **[jsda-kit](https://github.com/rnd-pro/jsda-kit)**: The development toolkit for JSDAStack projects.

### Development

-   **[@types/node](https://www.npmjs.com/package/@types/node)**: Type definitions for Node.js.
-   **[cloud-images-toolkit](https://github.com/rnd-pro/cloud-images-toolkit)**: A toolkit for managing and publishing images to the cloud.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/your-feature`).
3.  Commit your changes (`git commit -m 'Add your feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

-   [JSDAStack Documentation](https://github.com/rnd-pro/jsda)
-   [Symbiote.js Framework](https://symbiotejs.org/)
-   [JSDA Kit](https://github.com/rnd-pro/jsda-kit)
-   [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit)

---

**Happy coding with JSDAStack! 🎉**