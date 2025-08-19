# Technology Stack

## Core Framework
- **Gatsby 5.14.1**: Static site generator with React 18.3.1
- **Node.js 18.17.0**: Runtime environment (locked version)
- **Yarn 4.6.0**: Package manager with PnP (Plug'n'Play)

## Frontend Stack
- **React 18.3.1**: UI library with hooks, Suspense, and automatic JSX runtime
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Self-hosted Fonts**: Fredoka font family with display swap optimization

## Performance & Optimization
- **Gatsby Image**: WebP/AVIF formats, 70% quality, progressive loading
- **Code Splitting**: Webpack chunks for vendors, particles, react-player
- **Lazy Loading**: React.lazy() for heavy components with dedicated chunks
- **Bundle Analysis**: Custom scripts monitoring JS bundle sizes
- **Terser Minification**: 83.7% JS compression with aggressive optimization

## Interactive Features
- **react-tsparticles 2.12.2**: Particle background system
- **react-player 2.16.0**: Video embedding with lazy loading
- **FontAwesome**: Icon system with lazy loading

## Development Tools
- **ESLint**: JavaScript linting with React, accessibility, and Gatsby rules
- **Prettier 3.0.0**: Code formatting
- **Husky**: Git hooks for automated code quality
- **lint-staged**: Pre-commit linting

## Deployment
- **Netlify**: Static hosting with Gatsby adapter
- **gatsby-adapter-netlify**: Official Gatsby 5+ deployment adapter

## Common Commands

### Development
```bash
yarn start          # Start development server (alias for yarn dev)
yarn dev           # Start Gatsby development server
yarn clean         # Clean Gatsby cache
yarn serve         # Serve built site locally
```

### Production Build
```bash
yarn build                    # Full production build with analysis
yarn build:production         # Production build without analysis
yarn build:modern            # ES2020+ build only
yarn build:legacy            # ES5 build only
yarn build:differential      # Build both modern and legacy bundles
```

### Code Quality
```bash
yarn format                  # Format code with Prettier
yarn lint                    # Run ESLint with auto-fix
yarn lint:check             # Run ESLint without auto-fix
```

### Analysis & Monitoring
```bash
yarn analyze-bundle          # Analyze JavaScript bundle sizes
yarn minification-report     # Generate minification report
yarn verify-build           # Verify build integrity
yarn validate-performance   # Run performance validation
```

## Build Configuration
- **Modern Build**: `GATSBY_MODERN_BUILD=true` for ES2020+ features
- **CPU Limit**: `GATSBY_CPU_COUNT=2` for consistent builds
- **Polyfills**: Disabled for modern browsers
- **JSX Runtime**: Automatic (React 17+ feature)
