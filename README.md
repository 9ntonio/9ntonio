# Antonio Almena Portfolio

A high-performance personal portfolio website showcasing the work and expertise of Antonio Almena, a Senior Full Stack Engineer with 12+ years of experience.

**Live Site**: [antonio.almena.io](https://antonio.almena.io)  
**Contact**: [antonio@spacebase.one](mailto:antonio@spacebase.one)  
**LinkedIn**: [linkedin.com/in/antonio-almena](https://www.linkedin.com/in/antonio-almena/)

## 🚀 Project Overview

This portfolio demonstrates technical expertise through both content and implementation - serving as a working example of modern web development best practices including performance optimization, accessibility compliance, and responsive design.

### Key Features

- **Interactive Particle Background**: Uses tsparticles with triangles preset for visual appeal
- **Performance Optimized**: Lighthouse score optimized from 64 to 90+ through strategic lazy loading and code splitting
- **Accessibility Compliant**: WCAG 2.1 AA compliant with comprehensive aria-labels and screen reader support
- **Error Handling**: Comprehensive error boundaries and direct DOM SEO management with favicon handling for robust user experience
- **Favicon Management**: Dual-layer favicon system with static HTML fallbacks and dynamic JavaScript management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Unknown Pleasures Project**: Special interactive visualization inspired by Joy Division's album cover
- **Video Portfolio**: Embedded Vimeo showcases of major projects (Gusto, Google Store, PlayStation Vue)

### Notable Projects Featured

- **[Gusto](https://www.gusto.com)**: Payroll, HR & Benefits platform (DEPT® collaboration)
- **[Google Store](https://store.google.com)**: E-commerce platform (Odopod/Google collaboration)
- **[PlayStation Vue](https://www.odopod.com/case-studies/ps-vue)**: Streaming service interface (Odopod/Sony collaboration)
- **[Unknown Pleasures](/unknown-pleasures)**: Personal creative coding project using AI assistance

## 🛠 Technology Stack

### Core Framework

- **Gatsby 5.14.1**: Static site generator with React
- **React 18.3.1**: UI library with hooks and Suspense
- **Node.js 18.17.0**: Runtime environment

### Styling & Design

- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Google Fonts**: Fredoka font family with display swap
- **Custom CSS**: Critical CSS inlining for performance

### Performance & Optimization

- **Gatsby Image**: Optimized images with WebP/AVIF formats
- **Code Splitting**: Webpack chunks for vendors, particles, react-player
- **Lazy Loading**: React.lazy() for heavy components
- **Bundle Analysis**: Custom script for monitoring JS bundle sizes
- **Terser Minification**: Advanced JavaScript compression achieving 83.7% size reduction with aggressive optimization settings

### Interactive Features

- **react-tsparticles 2.12.2**: Particle background system
- **react-player 2.16.0**: Video embedding with lazy loading
- **FontAwesome**: Icon system with lazy loading

### Development Tools

- **Yarn 4.6.0**: Package manager with PnP
- **Prettier 3.0.0**: Code formatting
- **ESLint**: JavaScript linting with Gatsby and accessibility rules
- **Husky 8.0.3**: Git hooks for automated code quality checks
- **lint-staged 15.2.0**: Run linters on staged files before commit
- **EditorConfig**: Consistent coding style (tabs, 200 char limit)

### Deployment & Hosting

- **Netlify**: Static hosting with build optimization
- **Netlify Plugin Gatsby**: Gatsby-specific optimizations
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
- **Image Optimization**: WebP/AVIF formats with progressive loading
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

### Favicon Management System

- **Static HTML Fallbacks**: ICO and PNG favicons in HTML template for immediate display
- **Dynamic JavaScript Management**: SEO component ensures favicon presence with existence checking
- **Progressive Enhancement**: Works without JavaScript, enhanced with client-side management
- **Browser Compatibility**: Multiple formats (ICO, PNG) for broad browser support

### Layout Shift Prevention

- **Explicit Dimensions**: All images and containers have stable dimensions using aspect-ratio CSS
- **Stable Loading States**: Fallback components match exact dimensions of loaded content
- **Font Loading Optimization**: Display swap strategy with fallback fonts to prevent FOIT
- **Real-time Monitoring**: Development tools track and log layout shifts for debugging
- **Progressive Enhancement**: Graceful degradation ensures stability across all browsers

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance

- **Screen Reader Support**: All links have descriptive aria-labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: Meets AA standards throughout
- **External Link Indicators**: Clear indication of links opening in new tabs
- **Error Handling**: Accessible error messages, recovery options, and stable SEO management

### Implementation Details

- Comprehensive `aria-label` attributes for all interactive elements
- `aria-hidden="true"` for decorative icons
- Semantic HTML structure
- Focus management and indicators
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

- **gatsby-config.js**: Main Gatsby configuration with plugins
- **gatsby-node.js**: Build-time logic, webpack config, file copying
- **gatsby-browser.js**: Browser-side Gatsby APIs
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration
- **netlify.toml**: Deployment configuration

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

### Netlify Configuration

- Automatic deployments from main branch
- Build optimization with Gatsby plugin
- Environment variables configured
- Custom headers and redirects

### Build Process

1. **Pre-build**: Copy unknown-pleasures static files
2. **Build**: Gatsby build with CPU limit (2 cores)
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

- **[ACCESSIBILITY_GUIDE.md](./ACCESSIBILITY_GUIDE.md)**: Comprehensive accessibility implementation guide
- **[MINIFICATION_GUIDE.md](./MINIFICATION_GUIDE.md)**: JavaScript minification and optimization details
- **[TERSER_OPTIMIZATION_GUIDE.md](./TERSER_OPTIMIZATION_GUIDE.md)**: Advanced Terser configuration achieving 83.7% compression
- **[LAYOUT_SHIFT_GUIDE.md](./LAYOUT_SHIFT_GUIDE.md)**: Cumulative Layout Shift prevention and monitoring
- **[ERROR_HANDLING_GUIDE.md](./ERROR_HANDLING_GUIDE.md)**: Error boundaries and direct DOM SEO management
- **[SEO_OPTIMIZATION_UPDATE.md](./SEO_OPTIMIZATION_UPDATE.md)**: Direct DOM SEO management replacing React Helmet
- **[FAVICON_MANAGEMENT_UPDATE.md](./FAVICON_MANAGEMENT_UPDATE.md)**: Comprehensive dual-layer favicon management system
- **[HTML_TEMPLATE_FAVICON_UPDATE.md](./HTML_TEMPLATE_FAVICON_UPDATE.md)**: Static favicon fallbacks in HTML template
- **[PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md)**: Detailed performance optimization strategies
- **[SSR_OPTIMIZATION_UPDATE.md](./SSR_OPTIMIZATION_UPDATE.md)**: Latest SSR performance optimization details
- **[GIT_HOOKS_INTEGRATION_UPDATE.md](./GIT_HOOKS_INTEGRATION_UPDATE.md)**: Git hooks setup with Husky and lint-staged for automated code quality
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
