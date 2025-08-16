# Antonio Almena Portfolio

A high-performance personal portfolio website showcasing the work and expertise of Antonio Almena, a Senior Full Stack Engineer with 12+ years of experience.

**Live Site**: [antonio.almena.io](https://antonio.almena.io)  
**Contact**: [antonio@spacebase.one](mailto:antonio@spacebase.one)  
**LinkedIn**: [linkedin.com/in/antonio-almena](https://www.linkedin.com/in/antonio-almena/)

## 🚀 Project Overview

This portfolio demonstrates technical expertise through both content and implementation - serving as a working example of modern web development best practices including performance optimization, accessibility compliance, and responsive design.

### Key Features

- **Interactive Particle Background**: Uses tsparticles 2.12.0 with triangles preset for visual appeal
- **Performance Optimized**: Lighthouse score optimized from 64 to 90+ through strategic lazy loading and code splitting
- **PWA Ready**: Web App Manifest enables installation as a native-like app experience
- **Accessibility Compliant**: WCAG 2.1 AA compliant with comprehensive aria-labels and screen reader support
- **Error Handling**: Comprehensive error boundaries and direct DOM SEO management with favicon handling for robust user experience
- **Favicon Management**: Dual-layer favicon system with static HTML fallbacks and dynamic JavaScript management
- **Video Modal System**: Interactive video thumbnails with play button overlays trigger accessible modal component for embedded video playback with keyboard navigation and backdrop controls
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Unknown Pleasures Project**: Special interactive visualization inspired by Joy Division's album cover
- **Video Portfolio**: Interactive video thumbnails with modal playback for major projects (Gusto with VideoModal using StaticImage, Google Store, PlayStation Vue with external links)

### Notable Projects Featured

- **[Gusto](https://www.gusto.com)**: Payroll, HR & Benefits platform (DEPT® collaboration)
- **[Google Store](https://store.google.com)**: E-commerce platform (Odopod/Google collaboration)
- **[PlayStation Vue](https://www.odopod.com/case-studies/ps-vue)**: Streaming service interface (Odopod/Sony collaboration)
- **[Unknown Pleasures](/unknown-pleasures)**: Personal creative coding project using AI assistance

## 🛠 Technology Stack

### Core Framework

- **Gatsby 5.14.1**: Static site generator with React
- **React 18.3.1**: UI library with hooks and Suspense (version locked via resolutions)
- **Node.js 18.17.0**: Runtime environment
- **PWA Support**: Web App Manifest for installable app experience
- **Yarn Resolutions**: Dependency version management for React Server Components compatibility

### Styling & Design

- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Google Fonts**: Fredoka font family with display swap
- **Custom CSS**: Critical CSS inlining for performance

### Performance & Optimization

- **Gatsby Image**: Optimized images with WebP/AVIF formats, 75% quality compression, and metadata stripping
- **Responsive Images**: Enhanced breakpoints (480, 750, 1080, 1366, 1920px) for optimal mobile performance
- **Code Splitting**: Webpack chunks for vendors, particles, react-player
- **Lazy Loading**: React.lazy() for heavy components
- **Bundle Analysis**: Custom script for monitoring JS bundle sizes
- **Terser Minification**: Advanced JavaScript compression achieving 83.7% size reduction with aggressive optimization settings

### Interactive Features

- **react-tsparticles 2.12.2**: Particle background system with tsparticles 2.12.0 core
- **tsparticles-preset-triangles 2.12.0**: Triangle particle preset for visual effects
- **react-player 2.16.0**: Video embedding with lazy loading
- **FontAwesome**: Icon system with lazy loading

### Development Tools

- **Yarn 4.6.0**: Package manager with PnP and dependency resolutions
- **Prettier 3.0.0**: Code formatting
- **ESLint**: JavaScript linting with Gatsby and accessibility rules
- **Husky 8.0.3**: Git hooks for automated code quality checks
- **lint-staged 15.2.0**: Run linters on staged files before commit
- **EditorConfig**: Consistent coding style (tabs, 200 char limit)
- **Dependency Management**: Yarn resolutions for React version consistency

### Deployment & Hosting

- **Netlify**: Static hosting with advanced asset optimization and build processing
- **Gatsby Adapter Netlify**: Official Gatsby 5+ adapter for optimized Netlify deployments with datastore engine function support
- **Asset Processing**: Comprehensive CSS/JS bundling, minification, and image compression
- **PWA Manifest**: Web App Manifest for installable app experience
- **Service Worker**: Basic caching strategy

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- Yarn 4.6.0

### Installation

```bash
# Clone the repository
git clone https://github.com/9ntonio/9ntonio.git
cd 9ntonio

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Dependency Resolution

The project uses a two-layer approach for dependency management:

**Package Extensions (.yarnrc.yml):**
```yaml
packageExtensions:
    react-server-dom-webpack@*:
        peerDependencies:
            react: "^18.0.0"
            react-dom: "^18.0.0"
```

**Version Resolutions (package.json):**
```json
{
  "resolutions": {
    "react-server-dom-webpack/react": "18.3.1",
    "react-server-dom-webpack/react-dom": "18.3.1"
  }
}
```

This prevents version conflicts with React Server Components and ensures stable builds with React 18.3.1.

Visit `http://localhost:8000` to view the site.

## 📜 Available Scripts

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

### Git Hooks (Automated)

The project uses Husky and lint-staged for automated code quality checks:

```bash
# Automatically runs on git commit:
# - ESLint with auto-fix on *.js, *.jsx files
# - Prettier formatting on *.js, *.jsx files
# - Prettier formatting on *.json, *.md, *.css files

# Manual setup (runs automatically after yarn install):
yarn prepare                  # Install Husky Git hooks
```

### Analysis & Monitoring

```bash
yarn analyze-bundle           # Analyze JavaScript bundle sizes
yarn minification-report      # Generate minification report
yarn verify-build            # Verify build integrity
```

## 🏗 Project Structure

```
├── src/                    # Source code
│   ├── components/         # Reusable React components
│   │   ├── Seo.js         # SEO/meta tags component with dynamic favicon management
│   │   ├── FontAwesome.js # Lazy-loaded icon component
│   │   ├── ErrorBoundary.js # Error handling and recovery
│   │   ├── VideoModal.js  # Accessible video modal with keyboard navigation
│   │   ├── PerformanceMonitor.js  # Dev performance tracking
│   │   ├── LayoutStabilityMonitor.js  # CLS and LCP monitoring
│   │   └── PreloadResources.js    # Resource hints component
│   ├── pages/             # Gatsby page components
│   │   ├── index.js       # Homepage (main portfolio)
│   │   ├── 404.js         # Error page
│   │   └── unknown-pleasures.js   # Special project page
│   ├── styles/            # CSS files
│   │   ├── global.css     # Global styles with Tailwind
│   │   └── critical.css   # Critical CSS for inlining
│   └── html.js            # Custom HTML template with static favicon fallbacks
├── static/                # Static assets (copied to public)
├── scripts/               # Build and analysis scripts
├── .kiro/                 # Kiro steering rules
└── config files           # Various configuration files
```

## ⚡ Performance Optimizations

This portfolio has been optimized for maximum performance:

### Lighthouse Scores

- **Performance**: 90+ (improved from 64)
- **Accessibility**: 95+ (WCAG 2.1 AA compliant)
- **Best Practices**: 95+
- **SEO**: 100

### Key Optimizations

- **Code Splitting**: Separate chunks for vendors, particles, react-player
- **Lazy Loading**: Heavy components load only when needed
- **Image Optimization**: WebP/AVIF formats with progressive loading, 75% quality compression, and metadata stripping for smaller file sizes
- **Layout Shift Prevention**: Comprehensive CLS fixes with explicit dimensions and stable loading states
- **Bundle Analysis**: Continuous monitoring of JavaScript bundle sizes
- **Critical CSS**: Inlined essential styles to prevent render blocking
- **Resource Hints**: DNS prefetch and preconnect for external resources
- **Performance Monitoring**: Real-time CLS and LCP tracking in development
- **SSR Optimization**: SEO component excluded from server-side rendering fallback for improved hydration
- **Error Handling**: React error boundaries and direct DOM SEO management for stability
- **Advanced Minification**: Terser configuration with aggressive compression, console removal, and multi-pass optimization achieving 83.7% JavaScript size reduction

### Bundle Splitting Strategy

- **Vendor Chunk**: Separate chunk for node_modules
- **Library Chunks**: Dedicated chunks for heavy libraries:
    - FontAwesome icons
    - Particles.js
    - ReactPlayer
- **Better Caching**: Users only re-download changed chunks

### Component Implementation

- **Interactive Video Thumbnails**: Gusto project uses StaticImage with local asset and VideoModal for embedded playback
- **Enhanced User Interface**: Play button overlay with hover effects and smooth transitions
- **Consistent Image Optimization**: All project showcases use Gatsby's StaticImage with WebP/AVIF formats
- **Modal Integration**: VideoModal component provides accessible, keyboard-navigable video playback

### Video Modal Integration Strategy

The Gusto project section now uses an interactive video thumbnail with modal playback:

- **Enhanced User Experience**: Video thumbnail with play button overlay triggers modal playback
- **Professional Presentation**: Polished interface with hover effects and smooth transitions
- **Accessibility**: Proper aria-labels and keyboard navigation support
- **Performance**: Optimized thumbnail loading with modal-based video playback
- **Visual Appeal**: Play button overlay with hover animations for clear user interaction

**Thumbnail Implementation**: Uses Gatsby's StaticImage component with `static/gusto.webp` for optimized loading with blur-up placeholder and responsive image generation.

### Advanced JavaScript Minification

The project uses a highly optimized Terser configuration achieving **83.7% JavaScript compression**:

- **Console Removal**: All console.log statements stripped in production
- **Multi-pass Compression**: Two compression passes for maximum optimization
- **Variable Mangling**: Function and variable names shortened (e.g., `calculateUserEngagement` → `a`)
- **Dead Code Elimination**: Unused code automatically removed
- **Property Mangling**: Private properties (underscore prefix) optimized
- **Aggressive Optimizations**: Unsafe optimizations enabled for modern codebases
- **Parallel Processing**: Multi-core compression for faster builds

**Example Compression Results:**

- Original: 1,596 KB → Minified: 264 KB (83.7% reduction)
- Parse time: ~45ms → ~12ms (73% faster)
- Network transfer: 5x smaller file sizes

### Netlify Asset Optimization

The deployment configuration includes comprehensive asset processing for maximum performance:

**Build Processing Settings:**
- **CSS Optimization**: Automatic bundling and minification of stylesheets
- **JavaScript Optimization**: Bundle consolidation and minification
- **HTML Processing**: Pretty URLs and optimization
- **Image Compression**: Automatic image optimization during build

**Advanced Caching Strategy:**
- **Immutable Assets**: 1-year cache for CSS, JS, fonts, and images (`max-age=31536000, immutable`)
- **Content Compression**: Brotli and Gzip compression for CSS/JS assets
- **Dynamic Content**: Short cache for HTML files to ensure content freshness
- **Service Worker**: No-cache policy for proper update handling

**Security Headers:**
- **XSS Protection**: `X-XSS-Protection: 1; mode=block`
- **Frame Options**: `X-Frame-Options: DENY`
- **Content Type**: `X-Content-Type-Options: nosniff`
- **Referrer Policy**: `strict-origin-when-cross-origin`
- **Permissions Policy**: Restricted camera, microphone, and geolocation access

### Favicon Management System

- **Static HTML Fallbacks**: ICO and PNG favicons in HTML template for immediate display
- **Dynamic JavaScript Management**: SEO component ensures favicon presence with existence checking
- **Progressive Enhancement**: Works without JavaScript, enhanced with client-side management
- **Browser Compatibility**: Multiple formats (ICO, PNG) for broad browser support

### Progressive Web App (PWA) Features

- **Web App Manifest**: Enables installation as a native-like app on mobile and desktop
- **App Identity**: Configured with proper name, short name, and branding colors
- **Theme Integration**: Uses project color scheme (#00474f background, #b5f5ec theme color)
- **Minimal UI Display**: Optimized for app-like experience when installed
- **Icon Support**: Uses favicon.ico as the app icon for consistent branding

### Layout Shift Prevention

- **Explicit Dimensions**: All images and containers have stable dimensions using aspect-ratio CSS
- **Consistent Aspect Ratios**: All project showcase sections use uniform 3:2 aspect ratio for visual harmony
- **Stable Loading States**: Fallback components match exact dimensions of loaded content
- **Font Loading Optimization**: Display swap strategy with fallback fonts to prevent FOIT
- **Real-time Monitoring**: Development tools track and log layout shifts for debugging
- **Progressive Enhancement**: Graceful degradation ensures stability across all browsers

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance

- **Screen Reader Support**: All links have descriptive aria-labels
- **Keyboard Navigation**: Full keyboard accessibility including Escape key modal dismissal
- **Color Contrast**: Meets AA standards throughout
- **External Link Indicators**: Clear indication of links opening in new tabs
- **Modal Accessibility**: Proper focus management, backdrop dismissal, and keyboard controls
- **Error Handling**: Accessible error messages, recovery options, and stable SEO management

### Implementation Details

- Comprehensive `aria-label` attributes for all interactive elements
- `aria-hidden="true"` for decorative icons
- Semantic HTML structure
- Focus management and indicators in modals
- Keyboard event handling (Escape key, click outside)
- Body scroll prevention during modal display
- Graceful error boundaries with user-friendly messages

## 🎨 Design System

### Color Palette

- **Primary**: #b5f5ec (light teal)
- **Secondary**: #5b8c00 (green)
- **Background**: #00474f (dark teal)
- **Highlight**: #FFE8BA (cream)
- **Text**: #fff (white)

### Typography

- **Font Family**: Fredoka (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Loading**: Display swap for performance

### Responsive Breakpoints

- **Mobile**: < 768px
- **Desktop**: ≥ 768px (md: breakpoint in Tailwind)

## 🔧 Configuration Files

- **gatsby-config.js**: Main Gatsby configuration with Netlify adapter, plugins, and PWA manifest
- **gatsby-node.js**: Build-time logic, webpack config, file copying
- **gatsby-browser.js**: Browser-side Gatsby APIs
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration
- **netlify.toml**: Comprehensive deployment configuration with asset optimization, caching headers, and security settings

## 📊 Monitoring & Analysis

### Bundle Analysis

The `analyze-bundle.js` script provides:

- File-by-file size breakdown
- Minification status check
- Optimization suggestions
- Total bundle size metrics

### Performance Monitoring

- Development-only performance tracking with PerformanceMonitor component
- Real-time Cumulative Layout Shift (CLS) detection with LayoutStabilityMonitor
- Largest Contentful Paint (LCP) monitoring and logging
- Core Web Vitals tracking and console reporting
- Build verification checks and bundle analysis

## 🚀 Deployment

### Gatsby 5 Adapter Configuration

The project uses the official Gatsby 5 adapter for optimized Netlify deployments:

```javascript
// gatsby-config.js
module.exports = {
  adapter: require("gatsby-adapter-netlify").default({
    excludeDatastoreFromEngineFunction: false,
  }),
  // ... rest of configuration
};
```

**Benefits of Gatsby Adapter Netlify:**

- **Native Integration**: Purpose-built for Netlify's infrastructure
- **Optimized Builds**: Enhanced build performance and caching
- **Edge Functions**: Support for Netlify Edge Functions when needed
- **Datastore Integration**: Configurable datastore engine function support
- **Automatic Configuration**: Handles Netlify-specific optimizations automatically
- **Future-Proof**: Official Gatsby 5+ deployment strategy

**Configuration Options:**
- `excludeDatastoreFromEngineFunction: false` - Enables datastore integration with Netlify's engine functions for enhanced performance

### Netlify Configuration

- **Gatsby Adapter**: Official `gatsby-adapter-netlify` for Gatsby 5+ compatibility
- **Automatic Deployments**: From main branch with optimized build process
- **Build Optimization**: Native Netlify integration with enhanced performance
- **Asset Processing**: Comprehensive build-time optimization including:
  - CSS bundling and minification
  - JavaScript bundling and minification
  - HTML pretty URLs
  - Image compression
- **Advanced Caching**: Optimized cache headers for different asset types (1 year for immutable assets)
- **Compression**: Brotli and Gzip compression for CSS/JS assets
- **Security Headers**: Comprehensive security headers including XSS protection, frame options, and content type validation
- **Environment Variables**: Configured for production deployment

### Build Process

1. **Pre-build**: Copy unknown-pleasures static files
2. **Build**: Gatsby build with Netlify adapter and CPU limit (2 cores)
3. **Post-build**: Verify file copying and run bundle analysis
4. **Analysis**: Generate reports and metrics

## 🎯 Performance Targets

- **Lighthouse Performance**: 90+
- **Accessibility**: WCAG 2.1 AA compliance
- **Bundle Size**: Monitor and optimize large chunks (>100KB)
- **Core Web Vitals**: Optimized FCP, LCP, CLS
- **Cumulative Layout Shift**: < 0.1 (Good)
- **Layout Stability**: Zero unexpected content jumps

## 🔍 Development Monitoring

### Real-time Performance Tracking

When running in development mode (`yarn dev`), the application includes comprehensive monitoring:

```javascript
// Automatically included in development
{
	process.env.NODE_ENV === "development" && (
		<>
			<PerformanceMonitor />
			<LayoutStabilityMonitor />
		</>
	);
}
```

### Console Logging

- **Layout Shifts**: Real-time CLS detection with element details
- **LCP Events**: Largest Contentful Paint monitoring
- **Performance Metrics**: DOM loading times, paint events
- **Core Web Vitals**: FCP, LCP, and other key metrics

### Testing Layout Stability

```bash
# Development with monitoring
yarn dev
# Check browser console for layout shift logs

# Production testing
yarn build:production && yarn serve
# Run Lighthouse audit on http://localhost:9000
```

## 🤖 AI-Assisted Development

This portfolio showcases modern AI-assisted development practices:

### Unknown Pleasures Project

- **AI Collaboration**: Developed with Claude AI assistance for complex audio visualization
- **Creative Coding**: Transforms Joy Division's album audio data into interactive waveforms
- **Technical Innovation**: Demonstrates AI's role in solving complex creative coding challenges

### Development Process

- **Code Optimization**: AI-assisted performance optimization strategies
- **Accessibility Enhancement**: AI-guided WCAG compliance implementation
- **Documentation**: AI-assisted technical documentation and code comments

### Blog Post

Read about the AI-assisted development process: [Unknown Pleasures in a Brave New World: AI & Creativity](https://medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf)

## 📚 Documentation

- **[DEPENDENCY_RESOLUTION_GUIDE.md](./DEPENDENCY_RESOLUTION_GUIDE.md)**: Yarn resolutions for React Server Components compatibility
- **[MISSING_ASSETS.md](./MISSING_ASSETS.md)**: Required assets for full functionality
- **[ACCESSIBILITY_GUIDE.md](./ACCESSIBILITY_GUIDE.md)**: Comprehensive accessibility implementation guide
- **[MINIFICATION_GUIDE.md](./MINIFICATION_GUIDE.md)**: JavaScript minification and optimization details
- **[TERSER_OPTIMIZATION_GUIDE.md](./TERSER_OPTIMIZATION_GUIDE.md)**: Advanced Terser configuration achieving 83.7% compression
- **[LAYOUT_SHIFT_GUIDE.md](./LAYOUT_SHIFT_GUIDE.md)**: Cumulative Layout Shift prevention and monitoring
- **[ERROR_HANDLING_GUIDE.md](./ERROR_HANDLING_GUIDE.md)**: Error boundaries and direct DOM SEO management
- **[VIDEO_MODAL_IMPLEMENTATION.md](./VIDEO_MODAL_IMPLEMENTATION.md)**: Accessible video modal component with keyboard navigation
- **[VIDEO_MODAL_INTEGRATION_GUIDE.md](./VIDEO_MODAL_INTEGRATION_GUIDE.md)**: Integration guide for VideoModal component
- **[VIDEO_THUMBNAIL_IMPLEMENTATION_UPDATE.md](./VIDEO_THUMBNAIL_IMPLEMENTATION_UPDATE.md)**: Interactive video thumbnail with play button overlay implementation
- **[SEO_OPTIMIZATION_UPDATE.md](./SEO_OPTIMIZATION_UPDATE.md)**: Direct DOM SEO management replacing React Helmet
- **[FAVICON_MANAGEMENT_UPDATE.md](./FAVICON_MANAGEMENT_UPDATE.md)**: Comprehensive dual-layer favicon management system
- **[HTML_TEMPLATE_FAVICON_UPDATE.md](./HTML_TEMPLATE_FAVICON_UPDATE.md)**: Static favicon fallbacks in HTML template
- **[PWA_MANIFEST_UPDATE.md](./PWA_MANIFEST_UPDATE.md)**: Progressive Web App implementation with installable app experience
- **[PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md)**: Detailed performance optimization strategies
- **[SSR_OPTIMIZATION_UPDATE.md](./SSR_OPTIMIZATION_UPDATE.md)**: Latest SSR performance optimization details
- **[GIT_HOOKS_INTEGRATION_UPDATE.md](./GIT_HOOKS_INTEGRATION_UPDATE.md)**: Git hooks setup with Husky and lint-staged for automated code quality
- **[ASPECT_RATIO_CONSISTENCY_UPDATE.md](./ASPECT_RATIO_CONSISTENCY_UPDATE.md)**: Aspect ratio standardization for visual consistency
- **[VIDEO_OPTIMIZATION_UPDATE.md](./VIDEO_OPTIMIZATION_UPDATE.md)**: Video content optimization with StaticImage and external links
- **[DOCUMENTATION_UPDATES.md](./DOCUMENTATION_UPDATES.md)**: Summary of all documentation improvements
- **[CLAUDE.md](./CLAUDE.md)**: AI assistant guidelines and project conventions

## 🏆 Awards & Recognition

- **Communication Arts Interactive Annual Award**: Excellence in Interactive Design
- **Webby Award Nominee**: Best User Experience (Google Store project)

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🤝 Contact

**Antonio Almena**  
Senior Full Stack Engineer  
📧 [antonio@spacebase.one](mailto:antonio@spacebase.one)  
🌐 [antonio.almena.io](https://antonio.almena.io)  
💼 [LinkedIn](https://www.linkedin.com/in/antonio-almena/)
