/**
 * Resource Loading Utilities
 * Centralized resource loading patterns to reduce code duplication
 */

/**
 * Creates a resource hint element with specified attributes
 * @param {string} rel - Link relationship (preload, prefetch, etc.)
 * @param {string} href - Resource URL
 * @param {Object} options - Additional attributes
 * @returns {HTMLLinkElement} - Link element
 */
export function createResourceHint(rel, href, options = {}) {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;

  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'crossOrigin') {
        link.crossOrigin = value;
      } else {
        link[key] = value;
      }
    }
  });

  return link;
}

/**
 * Batches DOM operations by using DocumentFragment
 * @param {HTMLElement[]} elements - Elements to append
 * @param {HTMLElement} parent - Parent element (defaults to document.head)
 */
export function batchAppendToHead(elements, parent = document.head) {
  const fragment = document.createDocumentFragment();
  elements.forEach(element => fragment.appendChild(element));
  parent.appendChild(fragment);
}

/**
 * Loads a stylesheet with preload strategy and fallback
 * @param {string} href - Stylesheet URL
 * @param {Object} options - Loading options
 * @returns {Promise} - Promise that resolves when loaded
 */
export function loadStylesheet(href, options = {}) {
  const {
    preload = true,
    media = 'all',
    onError = null,
    timeout = 5000
  } = options;

  return new Promise((resolve, reject) => {
    const link = createResourceHint(preload ? 'preload' : 'stylesheet', href, {
      as: preload ? 'style' : undefined,
      media: preload ? 'print' : media
    });

    let timeoutId;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      link.onload = null;
      link.onerror = null;
    };

    link.onload = function() {
      cleanup();
      if (preload) {
        this.rel = 'stylesheet';
        this.media = media;
      }
      resolve(this);
    };

    link.onerror = function(error) {
      cleanup();
      const errorMsg = `Failed to load stylesheet: ${href}`;
      console.warn(errorMsg, error);

      if (onError && typeof onError === 'function') {
        onError(error, href);
      }

      reject(new Error(errorMsg));
    };

    // Timeout fallback
    if (timeout > 0) {
      timeoutId = setTimeout(() => {
        cleanup();
        reject(new Error(`Stylesheet load timeout: ${href}`));
      }, timeout);
    }

    document.head.appendChild(link);
  });
}

/**
 * Creates DNS prefetch and preconnect hints for domains
 * @param {string[]} domains - Array of domain URLs
 * @param {Object} options - Configuration options
 */
export function setupDomainHints(domains, options = {}) {
  const { prefetch = true, preconnect = true } = options;
  const hints = [];

  domains.forEach(domain => {
    if (prefetch) {
      hints.push(createResourceHint('dns-prefetch', domain));
    }

    if (preconnect && domain.startsWith('https://')) {
      hints.push(createResourceHint('preconnect', domain, {
        crossOrigin: domain.includes('fonts.gstatic.com') ? 'anonymous' : undefined
      }));
    }
  });

  batchAppendToHead(hints);
}

/**
 * Resource loading manager with retry logic
 */
export class ResourceManager {
  constructor() {
    this.loadedResources = new Set();
    this.failedResources = new Set();
    this.loadingPromises = new Map();
  }

  /**
   * Load a resource with retry logic
   * @param {string} url - Resource URL
   * @param {Object} options - Loading options
   * @returns {Promise} - Loading promise
   */
  async loadResource(url, options = {}) {
    const {
      type = 'script',
      maxRetries = 2,
      retryDelay = 1000,
      attributes = {}
    } = options;

    // Return existing promise if already loading
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url);
    }

    // Return resolved promise if already loaded
    if (this.loadedResources.has(url)) {
      return Promise.resolve();
    }

    const loadPromise = this._loadWithRetry(url, type, attributes, maxRetries, retryDelay);
    this.loadingPromises.set(url, loadPromise);

    try {
      await loadPromise;
      this.loadedResources.add(url);
      this.loadingPromises.delete(url);
    } catch (error) {
      this.failedResources.add(url);
      this.loadingPromises.delete(url);
      throw error;
    }

    return loadPromise;
  }

  async _loadWithRetry(url, type, attributes, maxRetries, retryDelay) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await this._loadSingleResource(url, type, attributes);
      } catch (error) {
        lastError = error;

        if (attempt < maxRetries) {
          console.warn(`Resource load attempt ${attempt + 1} failed for ${url}, retrying...`);
          await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
        }
      }
    }

    throw lastError;
  }

  _loadSingleResource(url, type, attributes) {
    return new Promise((resolve, reject) => {
      const element = type === 'script'
        ? document.createElement('script')
        : document.createElement('link');

      const cleanup = () => {
        element.onload = null;
        element.onerror = null;
      };

      element.onload = () => {
        cleanup();
        resolve();
      };

      element.onerror = (error) => {
        cleanup();
        reject(new Error(`Failed to load ${type}: ${url}`));
      };

      // Set attributes
      Object.entries(attributes).forEach(([key, value]) => {
        element[key] = value;
      });

      if (type === 'script') {
        element.src = url;
        element.async = true;
      } else {
        element.href = url;
        element.rel = 'stylesheet';
      }

      document.head.appendChild(element);
    });
  }

  /**
   * Get loading statistics
   * @returns {Object} - Loading stats
   */
  getStats() {
    return {
      loaded: this.loadedResources.size,
      failed: this.failedResources.size,
      loading: this.loadingPromises.size
    };
  }

  /**
   * Clear all tracking data
   */
  clear() {
    this.loadedResources.clear();
    this.failedResources.clear();
    this.loadingPromises.clear();
  }
}

// Global resource manager instance
export const resourceManager = new ResourceManager();
