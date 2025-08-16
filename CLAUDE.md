# CLAUDE.md - Agent Guidelines for Antonio Almena Portfolio

## Project Overview

The Antonio Almena Portfolio is a high-performance personal portfolio website showcasing 12+ years of full-stack engineering experience. The site demonstrates technical expertise through both content and implementation, serving as a working example of modern web development best practices.

### Key Features

- Interactive particle background system
- Performance optimized (Lighthouse 90+)
- WCAG 2.1 AA accessibility compliant
- Mobile-first responsive design
- Unknown Pleasures creative coding project
- Video portfolio showcases

## Commands

### Development

- `yarn dev` - Start development server
- `yarn start` - Alias for yarn dev
- `yarn clean` - Clear Gatsby cache

### Production Build

- `yarn build` - Full production build with analysis (uses 2 CPU cores)
- `yarn build:production` - Production build without analysis
- `yarn serve` - Serve production build locally

### Code Quality & Analysis

- `yarn format` - Format code with Prettier
- `yarn analyze-bundle` - Analyze JavaScript bundle sizes
- `yarn minification-report` - Generate minification report
- `yarn verify-build` - Run build verification checks

## Code Style Guidelines

### Framework & Architecture

- **Framework**: Gatsby 5.14.1 with React 18.3.1
- **Styling**: Tailwind CSS 3.4.0 with PostCSS
- **Package Manager**: Yarn 4.6.0 with PnP
- **Formatting**: Prettier 3.0.0 (default config)

### Component Guidelines

- **Components**: Functional components with React hooks
- **PropTypes**: Required for all components
- **Imports**: Group in order: React, libraries, components, assets
- **Naming**: camelCase for variables/functions, PascalCase for components
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Error Handling**: Try/catch blocks with console.error for async operations

### Performance Best Practices

- **Code Splitting**: Use React.lazy and Suspense for heavy components
- **Lazy Loading**: Load particles and video components only when needed
- **Image Optimization**: Use StaticImage with WebP/AVIF formats
- **Bundle Analysis**: Monitor chunk sizes and optimize regularly

### Accessibility Requirements

- **WCAG 2.1 AA**: All components must meet accessibility standards
- **Aria Labels**: Descriptive labels for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility required
- **Screen Readers**: Proper semantic HTML and ARIA attributes

### CSS & Styling

- **Primary Framework**: TailwindCSS utility classes
- **Global Styles**: Located in src/styles/global.css
- **Critical CSS**: Inlined in src/html.js for performance
- **Responsive**: Mobile-first approach with md: breakpoints

## Project Structure

```
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Seo.js         # SEO/meta tags component
│   │   ├── FontAwesome.js # Lazy-loaded icon component
│   │   ├── PerformanceMonitor.js  # Dev performance tracking
│   │   └── PreloadResources.js    # Resource hints component
│   ├── pages/             # Page components (auto-routed by Gatsby)
│   │   ├── index.js       # Homepage (main portfolio)
│   │   ├── 404.js         # Error page
│   │   └── unknown-pleasures.js   # Special project page
│   ├── styles/            # CSS files
│   │   ├── global.css     # Global styles with Tailwind
│   │   └── critical.css   # Critical CSS for inlining
│   └── html.js            # Custom HTML template
├── static/                # Static assets (copied to public)
├── scripts/               # Build and analysis scripts
├── .kiro/                 # Kiro steering rules and settings
└── config files           # Gatsby, Tailwind, PostCSS configs
```

## Performance Targets

- **Lighthouse Performance**: 90+
- **Accessibility**: WCAG 2.1 AA compliance (95+)
- **Best Practices**: 95+
- **SEO**: 100
- **Bundle Size**: Monitor chunks >100KB
- **Core Web Vitals**: Optimized FCP, LCP, CLS

## Documentation Files

- **README.md**: Main project documentation
- **ACCESSIBILITY_GUIDE.md**: Comprehensive accessibility implementation
- **MINIFICATION_GUIDE.md**: JavaScript optimization details
- **PERFORMANCE_OPTIMIZATIONS.md**: Performance strategy documentation
