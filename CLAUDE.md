# CLAUDE.md - Agent Guidelines for 9ntonio Portfolio

## Commands
- `yarn dev` - Start development server
- `yarn format` - Format code with Prettier
- `yarn clean` - Clear Gatsby cache
- `yarn build` - Production build (uses 2 CPU cores)
- `yarn serve` - Serve production build locally
- `yarn verify-build` - Run build verification checks

## Code Style Guidelines
- **Framework**: Gatsby with React, TailwindCSS
- **Formatting**: Prettier (default config)
- **Components**: Functional components with React hooks
- **PropTypes**: Required for all components
- **Imports**: Group in order: React, libraries, components, assets
- **Naming**: camelCase for variables/functions, PascalCase for components
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Error Handling**: Try/catch blocks with console.error for async operations
- **CSS**: Use TailwindCSS utility classes, global styles in src/styles/global.css
- **Performance**: Code-splitting with React.lazy and Suspense for client-side only components

## Project Structure
- `src/components/` - Reusable React components
- `src/pages/` - Page components (auto-routed by Gatsby)
- `src/styles/` - Global CSS files
- `static/` - Static assets directly copied to public folder