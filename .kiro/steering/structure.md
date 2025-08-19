# Project Structure

## Root Directory Organization

```
├── src/                    # Source code
├── static/                 # Static assets (copied to public)
├── public/                 # Built site output
├── scripts/                # Build and analysis scripts
├── plugins/                # Custom Gatsby plugins
├── .kiro/                  # Kiro steering rules
└── config files            # Various configuration files
```

## Source Code Structure (`src/`)

### Components (`src/components/`)
- **Seo.js**: SEO component using Gatsby Head API for optimal SSR
- **ErrorBoundary.js**: React error boundaries for stability
- **FontAwesome.js**: Lazy-loaded icon component with chunking
- **VideoModal.js**: Accessible video modal with keyboard navigation
- **PreloadResources.js**: Critical resource preloading and hints
- **FontLoadingOptimizer.js**: SSR-safe font loading optimization
- **LayoutStabilityMonitor.js**: CLS and LCP monitoring (dev only)
- **ThirdPartyScriptLoader.js**: Optimized third-party script loading

### Pages (`src/pages/`)
- **index.js**: Homepage with portfolio showcase
- **404.js**: Error page
- **unknown-pleasures.js**: Special AI-assisted creative project

### Utilities (`src/utils/`)
- **ssrSafeHelpers.js**: SSR-safe utilities preventing hydration mismatches
- **hydrationFix.js**: Client-side hydration stability helpers
- **imageOptimization.js**: Image loading and caching utilities

### Configuration (`src/config/`)
- **homePageConstants.js**: Centralized constants for homepage
- **particleConfig.js**: Particle system configuration
- **constants.js**: Global application constants

### Hooks (`src/hooks/`)
- **useParticleLoader.js**: Particle system loading logic
- **useVideoModal.js**: Video modal state management
- **useConnectionAwareImages.js**: Network-aware image loading

### Styles (`src/styles/`)
- **global.css**: Global styles with Tailwind and layout stability fixes

## Static Assets (`static/`)
- Images, fonts, and other assets copied directly to public
- **unknown-pleasures/**: Special project assets
- **favicon.ico**, **robots.txt**, **manifest files**

## Build Scripts (`scripts/`)
- **analyze-bundle.js**: JavaScript bundle size analysis
- **performance-optimization.js**: Performance validation
- **fix-unknown-pleasures.js**: Post-build asset processing
- **validate-modern-build.js**: Build verification

## Configuration Files

### Core Configuration
- **gatsby-config.js**: Main Gatsby configuration with Netlify adapter
- **gatsby-node.js**: Build-time logic and webpack customization
- **gatsby-browser.js**: Browser-side Gatsby APIs
- **package.json**: Dependencies and scripts

### Styling & Build
- **tailwind.config.js**: Tailwind CSS configuration with custom colors
- **postcss.config.js**: PostCSS configuration
- **babel.config.js**: Babel configuration for modern JS features

### Development Tools
- **.eslintrc.js**: ESLint configuration with React, accessibility, and Gatsby rules
- **.editorconfig**: Consistent coding style (tabs, 200 char limit)
- **renovate.json**: Automated dependency updates

### Deployment
- **netlify.toml**: Comprehensive deployment configuration with caching and security headers
- **.yarnrc.yml**: Yarn configuration with PnP and package extensions

## Architecture Patterns

### Component Organization
- **Lazy Loading**: Heavy components use React.lazy() with dedicated webpack chunks
- **Error Boundaries**: Comprehensive error handling at component level
- **SSR Safety**: All components handle server-side rendering gracefully

### Performance Patterns
- **Code Splitting**: Separate chunks for vendors, particles, video, and utilities
- **Resource Hints**: Strategic preloading and prefetching
- **Layout Stability**: Fixed dimensions and aspect ratios prevent CLS

### Accessibility Patterns
- **WCAG 2.1 AA**: Comprehensive aria-labels and keyboard navigation
- **Screen Reader Support**: Semantic HTML and proper focus management
- **External Link Indicators**: Clear indication of new tab links

### Development Patterns
- **Constants**: Centralized configuration in config files
- **Hooks**: Custom hooks for complex state management
- **Utilities**: Reusable helper functions with SSR safety

## File Naming Conventions
- **Components**: PascalCase (e.g., `VideoModal.js`)
- **Utilities**: camelCase (e.g., `ssrSafeHelpers.js`)
- **Pages**: lowercase (e.g., `index.js`, `unknown-pleasures.js`)
- **Config**: descriptive names (e.g., `homePageConstants.js`)

## Import Patterns
- **Lazy Imports**: Use webpack chunk names for better debugging
- **Static Imports**: For critical components and utilities
- **Dynamic Imports**: For heavy libraries and optional features
