# Project Structure & Organization

## Root Directory Structure

```
├── src/                    # Source code
├── static/                 # Static assets (copied to public)
├── public/                 # Build output (generated)
├── scripts/                # Build and analysis scripts
├── .kiro/                  # Kiro steering rules
├── .yarn/                  # Yarn PnP dependencies
└── config files            # Various configuration files
```

## Source Code Organization (`src/`)

```
src/
├── components/             # Reusable React components
│   ├── Seo.js             # SEO/meta tags component
│   ├── FontAwesome.js     # Lazy-loaded icon component
│   ├── PerformanceMonitor.js  # Dev performance tracking
│   └── PreloadResources.js    # Resource hints component
├── pages/                  # Gatsby page components
│   ├── index.js           # Homepage (main portfolio)
│   ├── 404.js             # Error page
│   └── unknown-pleasures.js   # Special project page
├── styles/                 # CSS files
│   ├── global.css         # Global styles with Tailwind
│   └── critical.css       # Critical CSS for inlining
├── scripts/                # Client-side scripts
└── html.js                 # Custom HTML template
```

## Static Assets (`static/`)

```
static/
├── favicon.png            # Site favicon
├── social.jpg             # Social media preview image
├── logo-2.svg             # Main logo
├── *.webp, *.jpg          # Project showcase images
├── sw.js                  # Service worker
└── unknown-pleasures/     # Special project assets
    ├── index.html         # Standalone HTML page
    └── assets/            # Project-specific assets
        ├── disorder.mp3   # Audio file
        └── index-*.js     # Compiled JavaScript
```

## Configuration Files

- **gatsby-config.js**: Main Gatsby configuration with plugins
- **gatsby-node.js**: Build-time logic, webpack config, file copying
- **gatsby-browser.js**: Browser-side Gatsby APIs
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration
- **package.json**: Dependencies and scripts
- **netlify.toml**: Deployment configuration
- **.editorconfig**: Code style rules (tabs, 200 char limit)

## Build Scripts (`scripts/`)

- **analyze-bundle.js**: JavaScript bundle size analysis
- **minification-report.js**: Minification effectiveness report
- **verify-build.js**: Build integrity verification

## Component Architecture

### Page Components

- **Single responsibility**: Each page handles one main route
- **Performance optimized**: Lazy loading for heavy components
- **SEO ready**: Proper meta tags and structured data

### Reusable Components

- **Seo.js**: Centralized SEO/meta tag management
- **FontAwesome.js**: Lazy-loaded icon system
- **PerformanceMonitor.js**: Development-only performance tracking
- **PreloadResources.js**: Resource hints for performance

## Styling Conventions

### Tailwind CSS Classes

- **Responsive**: Mobile-first with `md:` breakpoints
- **Custom colors**: Defined in tailwind.config.js
    - `primary`: #b5f5ec (light teal)
    - `secondary`: #5b8c00 (green)
    - `background`: #00474f (dark teal)
    - `highlight`: #FFE8BA (cream)
    - `textColor`: #fff (white)

### CSS Organization

- **Global styles**: Base styles and Tailwind imports
- **Component styles**: Scoped utility classes
- **Critical CSS**: Inlined for performance

## File Naming Conventions

- **Components**: PascalCase (e.g., `FontAwesome.js`)
- **Pages**: lowercase (e.g., `index.js`, `unknown-pleasures.js`)
- **Assets**: kebab-case (e.g., `logo-2.svg`, `unknown-pleasures.webp`)
- **Scripts**: kebab-case (e.g., `analyze-bundle.js`)

## Import Patterns

### Lazy Loading

```javascript
const ReactPlayer = React.lazy(() => import("react-player/lazy"));
const Particles = React.lazy(() => import("react-tsparticles"));
```

### Static Assets

```javascript
import logo from "../../static/logo-2.svg";
import { StaticImage } from "gatsby-plugin-image";
```

### Components

```javascript
import Seo from "../components/Seo";
import PreloadResources from "../components/PreloadResources";
```

## Special Directories

### `.yarn/` - Yarn PnP

- Contains unplugged packages and Yarn releases
- Managed automatically by Yarn
- Should not be manually modified

### `public/` - Build Output

- Generated during build process
- Contains optimized assets and HTML
- Includes copied files from `static/`
- Should not be committed to version control

### `.kiro/steering/` - AI Assistant Rules

- Contains markdown files with project guidance
- Automatically included in AI context
- Helps maintain consistency across development sessions

## Development Workflow

1. **Start development**: `yarn dev`
2. **Make changes**: Edit files in `src/`
3. **Add assets**: Place in `static/` for copying to `public/`
4. **Test build**: `yarn build && yarn serve`
5. **Analyze performance**: `yarn analyze-bundle`
6. **Format code**: `yarn format`
