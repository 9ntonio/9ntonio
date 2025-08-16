# Technology Stack

## Core Framework
- **Gatsby 5.14.1**: Static site generator with React
- **React 18.3.1**: UI library with hooks and Suspense
- **Node.js 18.17.0**: Runtime environment
- **Yarn 4.6.0**: Package manager with PnP

## Build System
- **Webpack 5**: Module bundler with code splitting
- **Gatsby Adapter Netlify**: Official Gatsby 5+ deployment adapter
- **PostCSS**: CSS processing with autoprefixer
- **Terser**: JavaScript minification (83.7% compression)

## Styling & UI
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **Google Fonts**: Fredoka font family with display swap
- **FontAwesome**: Icon system with lazy loading
- **Custom CSS**: Critical CSS inlining

## Interactive Features
- **react-tsparticles 2.12.2**: Particle background system
- **tsparticles-preset-triangles 2.12.0**: Triangle particle effects
- **react-player 2.16.0**: Video embedding with lazy loading

## Development Tools
- **ESLint**: JavaScript linting with React, accessibility, and Gatsby rules
- **Prettier 3.0.0**: Code formatting
- **Husky 8.0.3**: Git hooks for automated quality checks
- **lint-staged 15.2.0**: Pre-commit linting

## Performance & Optimization
- **Gatsby Image**: WebP/AVIF formats with 75% quality compression
- **Code Splitting**: Separate chunks for vendors, particles, react-player
- **Bundle Analysis**: Custom scripts for monitoring JS bundle sizes
- **PWA Support**: Web App Manifest for installable experience

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
```

### Analysis & Monitoring
```bash
yarn analyze-bundle           # Analyze JavaScript bundle sizes
yarn minification-report      # Generate minification report
yarn verify-build            # Verify build integrity
```

## Deployment
- **Netlify**: Static hosting with Gatsby adapter
- **Automatic Deployments**: From main branch
- **Asset Optimization**: CSS/JS bundling, minification, image compression
- **Advanced Caching**: 1-year cache for immutable assets
- **Security Headers**: XSS protection, frame options, content type validation
