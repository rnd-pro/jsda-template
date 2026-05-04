# JSDA-Stack Template

![JSDAStack](https://img.shields.io/badge/JSDAStack-Template-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![JSDA Kit](https://img.shields.io/badge/jsda--kit-1.4.0-orange)
![Symbiote.js](https://img.shields.io/badge/Symbiote.js-3.6.0-orange)
![Cloud Images Toolkit](https://img.shields.io/badge/cloud--images--toolkit-1.3.2-orange)

A starter template for building modern web projects with the **JSDA-Stack**. Pre-configured with Static Site Generation (SSG), Server-Side Rendering (SSR) of web components, dynamic routing with auth guards, and JSDoc-based TypeScript checking.

## Core Features

- **Hybrid Rendering** — SSG for public content, dynamic SSR for authenticated areas, all powered by a single `project.cfg.js`.
- **Web Components** — [Symbiote.js](https://symbiotejs.org/) components split into three tiers: `universal` (isomorphic), `client-only`, and `server-only`.
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
│   ├── common-styles/              # Shared CSS modules (design tokens, code highlighting)
│   │   ├── common.css.js           # Base reset, CSS variables, typography
│   │   ├── styles.css.js           # Composed stylesheet (common + code + layout)
│   │   └── code.css.js             # Code block color scheme
│   │
│   ├── dynamic-pages/              # Dynamic application (SSR, served at runtime)
│   │   ├── css/                    # Global dynamic styles
│   │   │   └── index.css.js
│   │   ├── js/                     # Client-side JS entry point
│   │   │   └── index.js
│   │   ├── node/                   # Server-side handlers (routing, data)
│   │   │   └── handlers.js
│   │   └── routes/                 # Route definitions & per-route assets
│   │       ├── routes.js           # Route map (path → .html.js module)
│   │       ├── dashboard/          # Dashboard route (template + styles + page)
│   │       ├── login/              # Login route
│   │       ├── home/               # Home route
│   │       └── 404/                # 404 fallback route
│   │
│   ├── static-pages/               # Static site (SSG, built to dist/)
│   │   ├── page.tpl.html           # Base HTML template
│   │   ├── getPage.js              # Page generator utility
│   │   ├── index.html.js           # Root page definition
│   │   ├── robots.txt              # Robots file (copied to dist/ on build)
│   │   ├── css/                    # Static page styles
│   │   ├── js/                     # Static page scripts
│   │   └── pages/                  # Sub-pages (symbiote/, template/, cit/)
│   │
│   ├── ui-components/              # Web component library
│   │   ├── ssr-exports.js          # Barrel file for SSR component registration
│   │   ├── universal/              # Isomorphic components (server + client)
│   │   │   ├── login-widget/
│   │   │   └── side-panel/
│   │   ├── client-only/            # Browser-only components
│   │   │   └── client-counter/
│   │   └── server-only/            # Server-rendered-only components
│   │       └── server-info/
│   │
│   └── icons/                      # Icon system (Material Symbols)
│       ├── collection.js           # Icon name registry
│       ├── icon.js                 # Icon helper
│       ├── icons.css.js            # Icon styles
│       └── link.html.js            # <link> tag for Google Fonts injection
│
├── types/                          # TypeScript definitions
│   ├── globals.d.ts                # Global type declarations
│   └── project.d.ts                # Project-specific types
│
├── cit/                            # Cloud Images Toolkit workspace
├── dist/                           # SSG build output
├── secrets/                        # Sensitive data (git-ignored)
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

## Configuration

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

## File Conventions

| Pattern | Purpose |
|---|---|
| `*.html.js` | Page generator — default export is an HTML string |
| `*.css.js` | CSS module — default export is a CSS string |
| `*.tpl.html` | Static HTML template with `{[PLACEHOLDER]}` syntax |
| `logic.js` | Component logic (Symbiote.js class + registration) |
| `template.js` | Component HTML template |
| `styles.js` | Component scoped styles |

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
- [Symbiote.js](https://symbiotejs.org/)
- [JSDA Kit](https://github.com/rnd-pro/jsda-kit)
- [Cloud Images Toolkit](https://github.com/rnd-pro/cloud-images-toolkit)