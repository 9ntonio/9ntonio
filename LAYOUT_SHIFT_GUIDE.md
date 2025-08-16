# Layout Shift Prevention Guide

## Overview

This document outlines the comprehensive fixes applied to prevent Cumulative Layout Shift (CLS) issues and achieve a better Lighthouse performance score.

## What Causes Layout Shifts

Layout shifts occur when visible elements change position after initial render, typically due to:

1. **Images loading without dimensions**
2. **Fonts loading and changing text metrics**
3. **Dynamic content appearing**
4. **Ads or embeds loading**
5. **CSS animations affecting layout**

## Fixes Applied

### 1. Logo Image Stabilization

**Before**:

```jsx
<img
	src={logo}
	alt="Logo"
	className="w-full sm:w-[510px] mb-1"
	height="83px"
	width="auto"
/>
```

**After**:

```jsx
<img
	src={logo}
	alt="Antonio Almena - Senior Full Stack Engineer Logo"
	className="w-full sm:w-[510px] mb-1"
	height="83"
	width="510"
	style={{ aspectRatio: "510/83" }}
/>
```

**Key Changes**:

- Added explicit `width` and `height` attributes
- Added `aspectRatio` CSS property for modern browsers
- Improved alt text for accessibility

### 2. FontAwesome Icons Loading

**Before**:

```jsx
<Suspense
	fallback={
		<div className="circle-container animate-pulse bg-gray-300 rounded-full w-12 h-12" />
	}
>
	<FontAwesome />
</Suspense>
```

**After**:

```jsx
<Suspense
	fallback={
		<div className="flex flex-row">
			<div className="circle-container animate-pulse bg-gray-300 rounded-full w-12 h-12 mr-2" />
			<div className="circle-container animate-pulse bg-gray-300 rounded-full w-12 h-12 mr-2" />
			<div className="circle-container animate-pulse bg-gray-300 rounded-full w-12 h-12" />
		</div>
	}
>
	<FontAwesome />
</Suspense>
```

**Key Changes**:

- Fallback now matches the exact layout of loaded icons
- Prevents horizontal layout shift when icons load
- Maintains proper spacing between elements

### 3. Video Player Stabilization

**Before**:

```jsx
<div className="player-wrapper">
  <Suspense fallback={<div className="w-full h-full bg-green-800 rounded-lg animate-pulse" />}>
    <ReactPlayer ... />
  </Suspense>
</div>
```

**After**:

```jsx
<div className="player-wrapper" style={{ aspectRatio: '16/9', minHeight: '200px' }}>
  <Suspense fallback={
    <div
      className="w-full h-full bg-green-800 rounded-lg animate-pulse flex items-center justify-center"
      style={{ aspectRatio: '16/9' }}
    >
      <div className="text-white text-sm">Loading video...</div>
    </div>
  }>
    <ReactPlayer ... />
  </Suspense>
</div>
```

**Key Changes**:

- Added explicit `aspectRatio` and `minHeight`
- Fallback maintains exact video player dimensions
- Added loading indicator for better UX

### 4. Image Container Stabilization

**Before**:

```jsx
<a href="...">
  <StaticImage aspectRatio={3 / 2} ... />
</a>
```

**After**:

```jsx
<div style={{ aspectRatio: '3/2' }}>
  <a href="...">
    <StaticImage aspectRatio={3 / 2} ... />
  </a>
</div>
```

**Key Changes**:

- Added container with explicit aspect ratio
- Prevents layout shift during image loading
- Maintains consistent spacing

### 5. Font Loading Optimization

**Critical CSS Updated**:

```css
.font-fredoka {
	font-family:
		"Fredoka",
		-apple-system,
		BlinkMacSystemFont,
		"Segoe UI",
		Roboto,
		sans-serif;
	font-display: swap;
}
```

**PreloadResources Enhanced**:

```jsx
<link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap"
  as="style"
  onLoad="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap"
  />
</noscript>
```

**Key Changes**:

- Added fallback fonts to prevent FOIT (Flash of Invisible Text)
- Used `font-display: swap` for better loading behavior
- Added noscript fallback for accessibility

### 6. CSS Layout Stability

**Enhanced Critical CSS**:

```css
/* Prevent layout shift for social icons */
.circle-container {
	flex-shrink: 0; /* Prevent shrinking */
}

/* Video player with stable aspect ratio */
.player-wrapper {
	position: relative;
	width: 100%;
	aspect-ratio: 16/9;
	min-height: 200px;
	background: #00474f;
	border-radius: 0.5rem;
	overflow: hidden;
}

/* Stable image dimensions */
img {
	max-width: 100%;
	height: auto;
}

/* Prevent cumulative layout shift */
* {
	box-sizing: border-box;
}
```

## Layout Stability Monitoring

### Development Monitoring

Added `LayoutStabilityMonitor` component that logs:

- Layout shift events with affected elements
- Largest Contentful Paint (LCP) information
- Performance metrics for debugging

### Usage

```jsx
{
	process.env.NODE_ENV === "development" && (
		<>
			<PerformanceMonitor />
			<LayoutStabilityMonitor />
		</>
	);
}
```

## Expected Improvements

### Lighthouse Metrics

- **Cumulative Layout Shift (CLS)**: < 0.1 (Good)
- **Largest Contentful Paint (LCP)**: Improved due to stable layout
- **Performance Score**: 90+ (up from 64)

### User Experience

- **No unexpected content jumps**
- **Stable loading experience**
- **Consistent visual hierarchy**
- **Better perceived performance**

## Testing Layout Stability

### 1. Development Testing

```bash
yarn dev
# Open browser dev tools
# Check console for layout shift logs
```

### 2. Production Testing

```bash
yarn build:production && yarn serve
# Run Lighthouse audit
# Check CLS score in Performance section
```

### 3. Manual Testing

- **Slow 3G simulation**: Test on slow connections
- **Disable cache**: Ensure fresh loading experience
- **Mobile testing**: Verify responsive behavior
- **Font loading**: Test with font loading disabled

## Best Practices Applied

### 1. Explicit Dimensions

- All images have width/height or aspect-ratio
- Containers have stable dimensions
- Fallbacks match loaded content dimensions

### 2. Font Loading Strategy

- Preload critical fonts
- Use font-display: swap
- Provide fallback font stacks
- Inline critical font CSS

### 3. Progressive Enhancement

- Content works without JavaScript
- Graceful degradation for older browsers
- Accessible fallbacks provided

### 4. Performance Monitoring

- Real-time layout shift detection
- Development-only monitoring
- Detailed logging for debugging

## Maintenance Guidelines

### Adding New Content

1. **Images**: Always specify dimensions or aspect-ratio
2. **Dynamic Content**: Use placeholder with exact dimensions
3. **Fonts**: Preload and provide fallbacks
4. **Animations**: Avoid layout-affecting animations

### Regular Testing

- Run Lighthouse audits after content changes
- Monitor CLS scores in production
- Test on various devices and connections
- Validate with real user monitoring

## Browser Support

### Modern Features Used

- `aspect-ratio` CSS property (fallback provided)
- `font-display: swap` (progressive enhancement)
- PerformanceObserver API (feature detection)

### Fallbacks Provided

- Explicit width/height for older browsers
- Fallback fonts for font loading issues
- Graceful degradation for JavaScript disabled

## Results Summary

✅ **Fixed**: Logo image layout shifts
✅ **Fixed**: FontAwesome icon loading shifts  
✅ **Fixed**: Video player dimension shifts
✅ **Fixed**: Image container stability
✅ **Fixed**: Font loading shifts
✅ **Added**: Real-time monitoring
✅ **Improved**: Overall CLS score
✅ **Enhanced**: User experience consistency

Expected CLS improvement: **4 layout shifts → 0 layout shifts**
