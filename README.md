# JSDA-Stack Template

![JSDAStack](https://img.shields.io/badge/JSDAStack-Template-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)
![JSDA Kit](https://img.shields.io/badge/jsda--kit-1.4.0-orange)
![Symbiote.js](https://img.shields.io/badge/Symbiote.js-3.6.0-orange)
![Cloud Images Toolkit](https://img.shields.io/badge/cloud--images--toolkit-1.3.2-orange)

[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-blue?logo=github)](https://rnd-pro.github.io/jsda-template/)

A starter template for building modern web projects with the **JSDA-Stack**. 

**JSDA** (JavaScript Distributed Assets) is a development philosophy and a set of solutions designed to leverage modern web standards. It treats standard JavaScript ESM modules as highly dynamic, text-based web asset generation endpoints (e.g., HTML, CSS, SVG, MD, JSON).

It feels as intuitive as PHP (evaluating scripts to generate text), but overcomes the limitations of PHP architectures by being inherently universal and format-agnostic:

- **Language as Template (No Additional Engines)**: JSDA uses native JavaScript template literals. You retain the full programmatic power of JS (loops, conditionals, map/filter) without the overhead of learning or compiling an intermediate templating language.
- **Universal Multi-Format Generation**: JSDA applies the exact same unified mental model to dynamically build and serve *any* text-based file: CSS modules, SVG graphics, JSON payloads, or RSS feeds - automatically resolving proper MIME types via the `.[ext].js` file pattern.
- **Isomorphic (Universal) Codebase**: PHP runs strictly on the server, forcing a language divide between backend rendering and frontend interactivity. With JSDA, you can share the exact same utility functions, state logic, and UI components seamlessly across both the Node.js server and the browser.
- **Native Async & Data Fetching**: JSDA generation modules inherently support Promises and non-blocking I/O. You can use top-level await to query databases or fetch from remote APIs natively before rendering the final string.
- **Distributed Composition (Micro-Frontends)**: JSDA relies on standard ES Modules, resources can be seamlessly imported from local files or even directly from remote JS CDNs. Teams can natively architect decentralized micro-frontends without complex bundlers.
- **Hybrid Delivery**: JSDA lets you effortlessly transition between blazing-fast SSG for zero-cost edge deployment, or dynamic asset rendering for authenticated routes - all using the exact same codebase.

Powered by **[JSDA-Kit](https://github.com/rnd-pro/jsda-kit)** as the core underlying engine.

## Core Features

- **Hybrid Rendering** — SSG for static pages, dynamic JSDA server, all with a simple configuration (`project.cfg.js`).
- **SSR for Web Components** — [Symbiote.js](https://github.com/symbiotejs/symbiote.js) - isomorphic (universal), client-only or server-only components are supported.
- **Powerful Isomorphic Application Data Management** - flexible Pub/Sub based data context objects (Symbiote.js).
- **Automated Import Maps** — CDN-resolved import maps generated from `package.json` dependencies for efficient resource sharing (micro-frontend architecture, widgets, etc.).
- **Markdown to HTML** — pull and render remote or local Markdown files.
- **Code Highlighting** — fenced code blocks in Markdown are syntax-highlighted at build time.
- **Asset Minification & Bundling** — on-the-fly minification of JS, CSS, HTML, and SVG with configurable excludes.
- **Sitemap Generation** — automatic `sitemap.xml` output during SSG builds with exclude patterns.
- **Cloud Image Management** — integrated [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit) for image publishing and CDN delivery. Interactive media widgets generation support out of the box (IMS).
- **Icon System** — centralized Material Symbols icon collection with auto-injected link tags.
- **TypeScript Support** — type secured JS code base; no additional compilation step required (JSDoc + *.d.ts).

## Project Structure

```
.
├── src/
│   ├── common-styles/              # Shared CSS modules and design tokens
│   ├── dynamic-pages/              # Dynamic application (JSDA server endpoints)
│   ├── static-pages/               # Static site generation (SSG) sources
│   ├── ui-components/              # Web components (universal, client-only, server-only)
│   └── icons/                      # Centralized Material Symbols configuration
│
├── types/                          # TypeScript definitions (JSDoc)
├── cit/                            # Cloud Images Toolkit workspace
├── dist/                           # Output directory for the static build
├── secrets/                        # Sensitive data (e.g. auth configurations)
│
├── project.cfg.js                  # Main project configuration
├── cit-config.json                 # Cloud Images Toolkit configuration
├── tsconfig.json                   # TypeScript / JSDoc checking
└── package.json
```

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm

### Installation

```bash
# Clone the template
git clone https://github.com/rnd-pro/jsda-template.git my-project
cd my-project

# Install dependencies
npm install
```

### Development

**Static site** (SSG build with watcher + SSR for web components + dev server):

```bash
npx jsda ssg
```

Output goes to `dist/`.

**Dynamic app** (JSDA server + SSR for web components):

```bash
npx jsda serve
```

The server starts at `http://localhost:3000`. Routes are defined in `src/dynamic-pages/routes/routes.js`.

### Production Build

```bash
npm run build
```

Runs `jsda build` and copies `robots.txt` to the output directory.

### GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) is included. It builds the static site and deploys `dist/` to GitHub Pages on every push to `main`.

To enable it:

1. Go to your repo **Settings → Pages → Source** and select **GitHub Actions**.
2. Push to `main` — the workflow will build and deploy automatically.

SSG result demo: https://rnd-pro.github.io/jsda-template/

## IDE Setup

JSDA relies heavily on JavaScript template literals for HTML and CSS (e.g., `/*html*/`, `/*css*/`, or using `html\`` and `css\`` template tags). 

For the best developer experience, we strongly recommend enabling syntax highlighting for these template strings in your IDE. 

If you are using **VS Code**, install the appropriate extension (F.e. [es6-string-html](https://github.com/0x00000001A/es6-string-html)). This will highlight, lint and enable auto-completion for HTML, SVG and CSS embedded inside your JavaScript files.

### Optional TypeScript Setup

We use JSDoc annotations within standard JavaScript files to provide type safety via TypeScript. If you do not have TypeScript installed globally or supported natively in your IDE, you can still run type checks locally.

Install `typescript` as a dev dependency:

```bash
npm install -D typescript
```

Then, you can run the included npm script to verify your types across the project:

```bash
npm run check:types
```

This will run `npx tsc --noEmit` to validate your types against `tsconfig.json` without unnecessary compiling the source code.

## Project Configuration

All project behavior is controlled via `project.cfg.js`:

| Section | Purpose |
|---|---|
| `dynamic` | Dev server port, route map, base directory, cache rules, request handlers |
| `static` | SSG source and output directories |
| `ssr` | Toggle SSR and list component barrel imports |
| `minify` | Per-format minification flags (JS, CSS, HTML, SVG) with excludes |
| `bundle` | JS/CSS bundling toggles with excludes |
| `importmap` | Auto-generated import map from npm packages via CDN |
| `sitemap` | Sitemap generation with base URL and route excludes |
| `log` | Enable/disable request logging |

Cloud Images Toolkit is configured separately in `cit-config.json`. See the [CIT documentation](https://github.com/rnd-pro/cloud-images-toolkit) for details.

## File Naming and Syntax Conventions

JSDA heavily embraces a **convention-over-configuration** approach. By leveraging strict file naming patterns, JSDA generates various types of web assets directly from JavaScript modules without requiring complex build configuration files. The default export of these modules must simply be a string (or a function returning a string) containing the raw asset data.

| Pattern | Output | Purpose |
|---|---|---|
| `[name].html.js` | `[name].html` | Dynamic HTML generator (exports an HTML string). |
| `[name].css.js` | `[name].css` | CSS module (exports a CSS string). |
| `[name].svg.js` | `[name].svg` | SVG graphic (exports an SVG markup string). |
| `[name].json.js` | `[name].json` | JSON data payload (exports a JSON string). |
| `[name].md.js` | `[name].md` | Markdown content (exports a markdown string). |
| `index.js`       | `index.js`    | JS bundle entry point. |
| `*.tpl.html`     | n/a           | Static template file containing `{[PLACEHOLDER]}` tags. |

### The `index.*.js` Pattern and SSG

During Static Site Generation (SSG), JSDA-Kit uses the file structure to reflect output path by scanning specifically for files matching the `index.*.js` pattern (which includes double extensions like `index.html.js` as well as plain `index.js`).

These files determine the output file path:
- `src/static-pages/about/index.html.js` → `dist/about/index.html`
- `src/static-pages/app/index.js` → `dist/app/index.js` (bundled and minified automatically)

They act as the default entry points for final output generation.

### MIME Type Resolution and Minification

The double-extension pattern (`.[ext].js`) tells JSDA-Kit exactly what the final output format is. This `[ext]` is used for **proper MIME type resolution** during dynamic serving and dictates which minification pipeline to apply during SSG builds (e.g., HTML minifier for `.html.js`, CSS minifier for `.css.js`).


## Key Dependencies

| Package | Role |
|---|---|
| [`jsda-kit`](https://github.com/rnd-pro/jsda-kit) | Build toolkit — SSG, SSR, dev server, minification, bundling, import maps, sitemap, etc. |
| [`@symbiotejs/symbiote`](https://github.com/symbiotejs/symbiote.js) | Light but powerful Web component library with SSR support and more... |
| [`cloud-images-toolkit`](https://github.com/rnd-pro/cloud-images-toolkit) | Image management and cloud (Image CDN) publishing (dev dependency) |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push and open a Pull Request

## License

MIT License © [rnd-pro.com](https://rnd-pro.com)

## Links

- [JSDA Manifest](https://github.com/rnd-pro/jsda)
- [JSDA Kit](https://github.com/rnd-pro/jsda-kit)
- [Symbiote.js](https://github.com/symbiotejs/symbiote.js)
- [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit)