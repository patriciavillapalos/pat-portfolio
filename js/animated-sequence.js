/* ============================================
   ANIMATED SEQUENCE JS — GIF-like Frame Cycling
   ============================================ */

(function() {
  'use strict';

  function AnimatedSequence(element, options) {
    this.element = element;
    this.frames = options.frames || [];
    this.interval = options.interval || 800;
    this.currentIndex = 0;
    this.timer = null;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  AnimatedSequence.prototype.init = function() {
    if (this.frames.length <= 1) return;

    // Create image elements for each frame
    this.frameElements = [];
    for (var i = 0; i < this.frames.length; i++) {
      var img = document.createElement('img');
      img.src = this.frames[i];
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.style.position = 'absolute';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.opacity = i === 0 ? '1' : '0';
      img.style.transition = 'none';
      this.element.appendChild(img);
      this.frameElements.push(img);
    }

    // Start animation unless reduced motion is preferred
    if (!this.isReducedMotion) {
      this.start();
    }
  };

  AnimatedSequence.prototype.start = function() {
    var self = this;
    this.timer = setInterval(function() {
      self.nextFrame();
    }, this.interval);
  };

  AnimatedSequence.prototype.stop = function() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  AnimatedSequence.prototype.nextFrame = function() {
    // Hide current frame
    this.frameElements[this.currentIndex].style.opacity = '0';

    // Advance to next frame
    this.currentIndex = (this.currentIndex + 1) % this.frames.length;

    // Show new frame
    this.frameElements[this.currentIndex].style.opacity = '1';
  };

  // Auto-init all elements with data-animated-sequence attribute
  function initAnimatedSequences() {
    var elements = document.querySelectorAll('[data-animated-sequence]');
    elements.forEach(function(el) {
      var frames = el.getAttribute('data-frames').split(',');
      var interval = parseInt(el.getAttribute('data-interval'), 10) || 800;

      // Make container relative for absolute positioning
      el.style.position = 'relative';

      new AnimatedSequence(el, {
        frames: frames,
        interval: interval
      });
    });
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimatedSequences);
  } else {
    initAnimatedSequences();
  }

  // Expose for manual use
  window.AnimatedSequence = AnimatedSequence;
})();
