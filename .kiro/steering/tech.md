# Technology Stack & Build System

## Core Framework

- **Gatsby 5.14.1**: Static site generator with React
- **React 18.3.1**: UI library with hooks and Suspense
- **Node.js 18.17.0**: Runtime environment

## Styling & Design

- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Google Fonts**: Fredoka font family with display swap
- **Custom CSS**: Critical CSS inlining for performance

## Performance & Optimization

- **Gatsby Image**: Optimized images with WebP/AVIF formats
- **Code Splitting**: Webpack chunks for vendors, particles, react-player
- **Lazy Loading**: React.lazy() for heavy components
- **Bundle Analysis**: Custom script for monitoring JS bundle sizes
- **Terser**: Advanced minification with console removal in production

## Interactive Features

- **react-tsparticles 2.12.2**: Particle background system
- **react-player 2.16.0**: Video embedding with lazy loading
- **FontAwesome**: Icon system with lazy loading

## Development Tools

- **Yarn 4.6.0**: Package manager with PnP
- **Prettier 3.0.0**: Code formatting
- **ESLint**: JavaScript linting with Gatsby and accessibility rules
- **Husky 8.0.3**: Git hooks for automated code quality checks
- **lint-staged 15.2.0**: Run linters on staged files before commit
- **EditorConfig**: Consistent coding style (tabs, 200 char limit)

## Deployment & Hosting

- **Netlify**: Static hosting with build optimization
- **Netlify Plugin Gatsby**: Gatsby-specific optimizations
- **Service Worker**: Basic caching strategy

## Common Commands

### Development

```bash
yarn dev          # Start development server
yarn start        # Alias for yarn dev
yarn clean        # Clean Gatsby cache
```

### Production Build

```bash
yarn build                    # Full production build with analysis
yarn build:production         # Production build without analysis
yarn serve                    # Serve built site locally
```

### Code Quality

```bash
yarn format                   # Format code with Prettier
yarn lint                     # Run ESLint with auto-fix
yarn lint:check               # Run ESLint without auto-fix
yarn prepare                  # Install Husky Git hooks (runs automatically)
```

### Git Hooks (Automated)

- **Pre-commit**: ESLint + Prettier on staged JS/JSX files
- **Pre-commit**: Prettier formatting on JSON, MD, CSS files
- **Automatic Setup**: Husky installs hooks after yarn install

### Analysis & Monitoring

```bash
yarn analyze-bundle           # Analyze JavaScript bundle sizes
yarn minification-report      # Generate minification report
yarn verify-build            # Verify build integrity
```

## Build Process

1. **Pre-build**: Copy unknown-pleasures static files to public directory
2. **Build**: Gatsby build with CPU limit (GATSBY_CPU_COUNT=2)
3. **Post-build**: Verify file copying and run bundle analysis
4. **Analysis**: Generate bundle size report and minification metrics

## Performance Targets

- **Lighthouse Performance**: 90+
- **Accessibility**: WCAG 2.1 AA compliance
- **Bundle Size**: Monitor and optimize large chunks (>100KB)
- **Core Web Vitals**: Optimized FCP, LCP, CLS

## Environment Variables

- `NODE_ENV`: production/development
- `GATSBY_CPU_COUNT`: Build parallelization (set to 2)
- `G-640WERC942`: Google Analytics tracking ID
