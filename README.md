# JSDA-Stack Template

![JSDAStack](https://img.shields.io/badge/JSDAStack-Template-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)
![JSDA Kit](https://img.shields.io/badge/jsda--kit-1.4.0-orange)
![Symbiote.js](https://img.shields.io/badge/Symbiote.js-3.6.0-orange)
![Cloud Images Toolkit](https://img.shields.io/badge/cloud--images--toolkit-1.3.2-orange)

[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-blue?logo=github)](https://rnd-pro.github.io/jsda-template/)

A starter template for building modern web projects with the **JSDA-Stack**. 

**JSDA** (JavaScript Distributed Assets) is a development philosophy and a set of solutions designed to leverage native web technologies by treating standard JavaScript ESM modules as text-based web asset generation endpoints (e.g., HTML, CSS, SVG, JSON). 

Almost everything in this template - from Static Site Generation (SSG) and Server-Side Rendering (SSR) of Web Components to dynamic routing, asset minification, and serving - is powered by **[JSDA-Kit](https://github.com/rnd-pro/jsda-kit)** as the core underlying engine.

## Core Features

- **Hybrid Rendering** — SSG for public content, dynamic SSR for authenticated areas, all powered by a simple configuration (`project.cfg.js`).
- **Web Components** — [Symbiote.js](https://github.com/symbiotejs/symbiote.js) components split into three tiers: `universal` (isomorphic), `client-only`, and `server-only`.
- **Route-Level Asset Co-location** — each dynamic route keeps its template (`.tpl.html`), page generator (`.html.js`), and styles (`.css.js`) together.
- **Automated Import Maps** — CDN-resolved import maps generated from `package.json` dependencies.
- **Markdown to HTML** — static pages can pull and render remote or local Markdown files.
- **Code Highlighting** — fenced code blocks in Markdown are syntax-highlighted at build time via [highlight.js](https://highlightjs.org/). The color scheme is auto-generated in `code.css.js` using HSL rotation.
- **Asset Minification & Bundling** — on-the-fly minification of JS, CSS, HTML, and SVG with configurable excludes.
- **Sitemap Generation** — automatic `sitemap.xml` output during SSG builds with exclude patterns.
- **Cloud Image Management** — integrated [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit) for image publishing and CDN delivery.
- **Icon System** — centralized Material Symbols icon collection with auto-injected link tags.
- **TypeScript Support** — JSDoc types checked via `tsconfig.json`; no compilation step required.

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

**Dynamic app** (JSDA server + SSR for web components):

```bash
npx jsda serve
```

The server starts at `http://localhost:3000`. Routes are defined in `src/dynamic-pages/routes/routes.js`.

**Static site** (SSG build with watcher + SSR for web components):

```bash
npx jsda ssg
```

Output goes to `dist/`.

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

Live demo: https://rnd-pro.github.io/jsda-template/

## IDE Setup

JSDA relies heavily on JavaScript template literals for HTML and CSS (e.g., `/*html*/`, `/*css*/`, or using `html\`` and `css\`` template tags). 

For the best developer experience, we strongly recommend enabling syntax highlighting for these template strings in your IDE. 

If you are using **VS Code**, install the extension (F.e. [es6-string-html](https://github.com/0x00000001A/es6-string-html)). This will highlight HTML, SVG and CSS embedded inside your JavaScript files.

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
| `index.js`       | `index.js`    | JS bundle entry point. |
| `*.tpl.html`     | n/a           | Static template file containing `{[PLACEHOLDER]}` tags. |

### The `index.*.js` Pattern and SSG

During Static Site Generation (SSG), JSDA-Kit uses the file structure to reflect output path by scanning specifically for files matching the `index.*.js` pattern (which includes double extensions like `index.html.js` as well as plain `index.js`).

These files determine the output file path:
- `src/static-pages/about/index.html.js` → `dist/about/index.html`
- `src/static-pages/app/index.js` → `dist/app/index.js` (bundled and minified automatically)

They act as the default entry points for their containing directories.

### MIME Type Resolution and Minification

The double-extension pattern (`.[ext].js`) tells JSDA-Kit exactly what the final output format is. This `[ext]` is used for **proper MIME type resolution** during dynamic serving and dictates which minification pipeline to apply during SSG builds (e.g., HTML minifier for `.html.js`, CSS minifier for `.css.js`).


## Key Dependencies

| Package | Role |
|---|---|
| [`jsda-kit`](https://github.com/rnd-pro/jsda-kit) | Build toolkit — SSG, SSR, dev server, minification, bundling, import maps |
| [`@symbiotejs/symbiote`](https://symbiotejs.org/) | Web component framework (loaded via CDN import map) |
| [`cloud-images-toolkit`](https://github.com/rnd-pro/cloud-images-toolkit) | Image management and cloud publishing (dev dependency) |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push and open a Pull Request

## License

MIT — see [LICENSE](LICENSE).

## Links

- [JSDA Manifest](https://github.com/rnd-pro/jsda)
- [Symbiote.js](https://github.com/symbiotejs/symbiote.js)
- [JSDA Kit](https://github.com/rnd-pro/jsda-kit)
- [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit)