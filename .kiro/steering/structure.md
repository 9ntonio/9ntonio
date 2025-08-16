# Project Structure

## Root Directory Organization

```
├── src/                    # Source code
├── static/                 # Static assets (copied to public)
├── public/                 # Generated build output
├── scripts/                # Build and analysis scripts
├── .kiro/                  # Kiro steering rules
└── config files            # Various configuration files
```

## Source Code Structure (`src/`)

```
src/
├── components/             # Reusable React components
│   ├── Seo.js             # SEO/meta tags with dynamic favicon management
│   ├── FontAwesome.js     # Lazy-loaded icon component
│   ├── ErrorBoundary.js   # Error handling and recovery
│   ├── VideoModal.js      # Accessible video modal with keyboard navigation
│   ├── PerformanceMonitor.js      # Dev performance tracking
│   ├── LayoutStabilityMonitor.js  # CLS and LCP monitoring
│   ├── PreloadResources.js        # Resource hints component
│   └── LazyComponentWrapper.js    # Component lazy loading wrapper
├── pages/                  # Gatsby page components
│   ├── index.js           # Homepage (main portfolio)
│   ├── 404.js             # Error page
│   └── unknown-pleasures.js       # Special project page
├── styles/                 # CSS files
│   ├── global.css         # Global styles with Tailwind
│   └── critical.css       # Critical CSS for inlining
├── hooks/                  # Custom React hooks
│   └── useParticleSystem.js       # Particle system management
├── config/                 # Configuration modules
│   ├── constants.js       # Application constants
│   └── webpack.config.js  # Webpack configuration overrides
├── scripts/                # Build-time scripts
└── html.js                 # Custom HTML template with static favicon fallbacks
```

## Key Directories

### `/static/`
Static assets that are copied directly to the public directory:
- Images (WebP, AVIF formats preferred)
- Favicon files
- robots.txt
- Service worker files
- Unknown Pleasures project assets

### `/scripts/`
Build and analysis utilities:
- `analyze-bundle.js` - JavaScript bundle size analysis
- `minification-report.js` - Minification effectiveness reporting
- `performance-validation.js` - Performance metrics validation
- `validate-netlify-config.js` - Netlify configuration validation

### `/public/` (Generated)
Build output directory containing:
- Optimized HTML, CSS, JS files
- Processed images with multiple formats
- Service worker and PWA manifest
- Webpack bundle analysis reports

## Component Architecture

### Core Components
- **Seo.js**: Handles meta tags, Open Graph, Twitter cards, and favicon management
- **ErrorBoundary.js**: Catches and handles React errors gracefully
- **VideoModal.js**: Accessible modal for video playback with keyboard navigation

### Performance Components
- **PerformanceMonitor.js**: Development-only performance tracking
- **LayoutStabilityMonitor.js**: Real-time CLS detection and logging
- **PreloadResources.js**: Resource hints for external dependencies

### Lazy Loading Strategy
Heavy components are lazy-loaded to improve initial page load:
- Particles system (desktop only)
- FontAwesome icons
- Video players

## Configuration Files

### Core Config
- `gatsby-config.js` - Main Gatsby configuration with Netlify adapter
- `gatsby-node.js` - Build-time logic and webpack customization
- `gatsby-browser.js` - Browser-side Gatsby APIs
- `package.json` - Dependencies and scripts with yarn resolutions

### Styling Config
- `tailwind.config.js` - Tailwind CSS configuration with custom colors
- `postcss.config.js` - PostCSS configuration with autoprefixer
- `.editorconfig` - Code style consistency (tabs, 200 char limit)

### Quality Assurance
- `.eslintrc.js` - ESLint rules for React, accessibility, and Gatsby
- `.prettierrc` - Code formatting rules
- `.husky/` - Git hooks for automated quality checks

### Deployment
- `netlify.toml` - Netlify deployment configuration with asset optimization
- `.env.local` - Environment variables (not committed)

## Naming Conventions

### Files
- React components: PascalCase (e.g., `VideoModal.js`)
- Pages: lowercase (e.g., `index.js`, `unknown-pleasures.js`)
- Utilities/hooks: camelCase with prefix (e.g., `useParticleSystem.js`)
- Config files: lowercase with hyphens (e.g., `gatsby-config.js`)

### Components
- Component names: PascalCase
- Props: camelCase
- CSS classes: Tailwind utilities preferred, custom classes in kebab-case

## Asset Organization

### Images
- Source images in `/static/` directory
- Use WebP/AVIF formats when possible
- Implement responsive images with Gatsby Image
- 75% quality compression for optimal performance

### Fonts
- Google Fonts loaded with display swap
- Fredoka font family with weights 300-700
- Fallback fonts specified in Tailwind config

## Performance Considerations

### Code Splitting
- Vendor chunks separated from application code
- Heavy libraries (particles, video player) lazy-loaded
- Route-based splitting for pages

### Bundle Analysis
- Automated bundle size monitoring
- Minification reporting with 83.7% compression target
- Performance validation scripts

### Accessibility
- WCAG 2.1 AA compliance throughout
- Comprehensive aria-labels and screen reader support
- Keyboard navigation for all interactive elements
- Error boundaries with accessible error messages
