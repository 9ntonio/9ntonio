/**
 * Design tokens for consistent styling across the application
 * These values should match the Tailwind configuration
 */

export const COLORS = {
  primary: '#b5f5ec',
  secondary: '#5b8c00',
  background: '#00474f',
  highlight: '#FFE8BA',
  textColor: '#fff'
};

export const BREAKPOINTS = {
  md: '768px'
};

export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem'     // 48px
};

export const FONT_FAMILIES = {
  fredoka: [
    'Fredoka',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Nunito',
    'Comfortaa',
    'Quicksand',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ].join(', ')
};

export const LOGO_DIMENSIONS = {
  width: 510,
  height: 83,
  aspectRatio: '510/83'
};

export const CIRCLE_SIZE = {
  width: '46px',
  height: '46px'
};
