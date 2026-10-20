/**
 * Gaja Lanka - High-Performance Telemetry Number Counter Animation
 * Animates numbers ticking upward with smooth ease-out curves upon scrolling into view.
 */

(function () {
  'use strict';

  // Smooth ease-out exponential function
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  // Parse element text and data attributes
  function parseCounterData(el) {
    const rawText = el.textContent.trim();
    const explicitTarget = el.getAttribute('data-counter') || el.getAttribute('data-count') || el.getAttribute('data-target');
    const explicitPrefix = el.getAttribute('data-prefix');
    const explicitSuffix = el.getAttribute('data-suffix');
    const explicitDecimals = el.getAttribute('data-decimals');
    const explicitFormat = el.getAttribute('data-format');

    let prefix = explicitPrefix !== null ? explicitPrefix : '';
    let suffix = explicitSuffix !== null ? explicitSuffix : '';
    let target = explicitTarget !== null ? parseFloat(explicitTarget) : null;
    let decimals = explicitDecimals !== null ? parseInt(explicitDecimals, 10) : 0;
    let useCommas = explicitFormat === 'comma';

    // Auto-parse from textContent if target not explicitly provided
    if (target === null || isNaN(target)) {
      // Matches: optional non-digits, digits with optional commas and decimals, optional trailing non-digits
      const match = rawText.match(/^([^0-9]*?)([\d,]+(?:\.\d+)?)([^0-9]*)$/);
      if (match) {
        if (explicitPrefix === null) prefix = match[1];
        const numStr = match[2];
        if (explicitSuffix === null) suffix = match[3];

        if (numStr.includes(',')) useCommas = true;
        if (numStr.includes('.') && explicitDecimals === null) {
          decimals = numStr.split('.')[1].length;
        }
        target = parseFloat(numStr.replace(/,/g, ''));
      } else {
        return null;
      }
    }

    if (isNaN(target)) return null;

    // Check if original raw text had commas if not already set
    if (!useCommas && rawText.includes(',')) {
      useCommas = true;
    }

    const duration = parseInt(el.getAttribute('data-duration'), 10) || 1600;
    const delay = parseInt(el.getAttribute('data-delay'), 10) || 0;

    return {
      target,
      prefix,
      suffix,
      decimals,
      useCommas,
      duration,
      delay
    };
  }

  // Format a numeric value with prefix, suffix, decimals, and commas
  function formatNumber(val, decimals, useCommas, prefix, suffix) {
    let formatted;
    if (decimals > 0) {
      formatted = val.toFixed(decimals);
      if (useCommas) {
        const parts = formatted.split('.');
        parts[0] = parseInt(parts[0], 10).toLocaleString('en-US');
        formatted = parts.join('.');
      }
    } else {
      const intVal = Math.round(val);
      formatted = useCommas ? intVal.toLocaleString('en-US') : intVal.toString();
    }
    return prefix + formatted + suffix;
  }

  // Animate a single counter element
  function animateCounter(el, config, staggerIndex) {
    if (el._counterAnimated) return;
    el._counterAnimated = true;

    // Prefers reduced motion check
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = formatNumber(config.target, config.decimals, config.useCommas, config.prefix, config.suffix);
      return;
    }

    const startVal = 0;
    const targetVal = config.target;
    const duration = config.duration;
    // Add 80ms stagger delay per element in same container if not explicitly provided
    const totalDelay = config.delay + (staggerIndex * 80);

    // Initial state at 0
    el.textContent = formatNumber(startVal, config.decimals, config.useCommas, config.prefix, config.suffix);

    let startTimestamp = null;

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp + totalDelay;
      
      if (timestamp < startTimestamp) {
        requestAnimationFrame(step);
        return;
      }

      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentVal = startVal + (targetVal - startVal) * easedProgress;

      el.textContent = formatNumber(currentVal, config.decimals, config.useCommas, config.prefix, config.suffix);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final value matches target exactly
        el.textContent = formatNumber(targetVal, config.decimals, config.useCommas, config.prefix, config.suffix);
      }
    }

    requestAnimationFrame(step);
  }

  // Initialize all counters on the page
  function initCounters() {
    const counterElements = document.querySelectorAll('.counter-value, [data-counter], [data-count]');
    if (!counterElements.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      counterElements.forEach((el, i) => {
        const config = parseCounterData(el);
        if (config) animateCounter(el, config, i);
      });
      return;
    }

    // Group elements by parent container for natural stagger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          observer.unobserve(el);

          const config = el._counterConfig || parseCounterData(el);
          if (config) {
            // Find sibling index within parent to calculate stagger
            const parent = el.closest('.grid, .flex, section, div') || el.parentElement;
            const siblings = parent ? Array.from(parent.querySelectorAll('.counter-value, [data-counter], [data-count]')) : [];
            const staggerIndex = Math.max(0, siblings.indexOf(el));
            animateCounter(el, config, staggerIndex);
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    counterElements.forEach((el) => {
      if (el._counterAnimated) return;
      const config = parseCounterData(el);
      if (config) {
        el._counterConfig = config;
        observer.observe(el);
      }
    });
  }

  // =========================================================================
  // PROGRESS BAR TELEMETRY FILL ANIMATIONS
  // =========================================================================
  function initProgressBars() {
    const explicitBars = Array.from(document.querySelectorAll('.progress-bar-fill, [data-progress]'));

    // Auto-discover any child div with style="width: X%" inside rounded-full overflow-hidden containers
    const autoBars = [];
    document.querySelectorAll('.rounded-full.overflow-hidden, .overflow-hidden.rounded-full').forEach(function (container) {
      const child = container.querySelector('div[style*="width"]');
      if (child && !explicitBars.includes(child) && !autoBars.includes(child)) {
        autoBars.push(child);
      }
    });

    const allBars = explicitBars.concat(autoBars);
    if (!allBars.length) return;

    // Prefers reduced motion check
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    allBars.forEach(function (bar) {
      let targetWidth = bar.getAttribute('data-progress');
      if (!targetWidth) {
        const styleWidth = bar.style.width;
        if (styleWidth) {
          targetWidth = styleWidth;
          bar.setAttribute('data-progress', targetWidth);
        }
      }
      if (!targetWidth) return;

      bar.classList.add('progress-bar-fill');

      if (prefersReducedMotion) {
        bar.style.width = targetWidth;
        bar._barAnimated = true;
        return;
      }

      // Initial state: 0% width
      bar.style.width = '0%';
    });

    if (prefersReducedMotion) return;

    if (!('IntersectionObserver' in window)) {
      allBars.forEach(function (bar) {
        const target = bar.getAttribute('data-progress');
        if (target) bar.style.width = target;
      });
      return;
    }

    const barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          barObserver.unobserve(bar);
          if (bar._barAnimated) return;
          bar._barAnimated = true;

          const targetWidth = bar.getAttribute('data-progress');
          if (!targetWidth) return;

          // Find sibling index within parent card/list to calculate stagger delay
          const parent = bar.closest('.space-y-space-md, .space-y-space-xs, .space-y-1, .space-y-4, .space-y-2, [class*="space-y"], section, div') || bar.parentElement;
          const groupBars = parent ? Array.from(parent.querySelectorAll('.progress-bar-fill, [data-progress]')) : [bar];
          const staggerIndex = Math.max(0, groupBars.indexOf(bar));
          const delay = staggerIndex * 120; // 120ms stagger between bars in the same card

          setTimeout(function () {
            requestAnimationFrame(function () {
              bar.style.width = targetWidth;
            });
          }, delay);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    allBars.forEach(function (bar) {
      if (!bar._barAnimated) {
        barObserver.observe(bar);
      }
    });
  }

  function initAll() {
    initCounters();
    initProgressBars();
  }

  // Expose globally
  window.initCounterAnimations = initCounters;
  window.initProgressBarAnimations = initProgressBars;
  window.initAllTelemetryAnimations = initAll;

  // Auto-init on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
