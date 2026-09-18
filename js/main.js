/* ============================================
   MAIN JS — Navigation, Smooth Scroll, State
   ============================================ */

(function() {
  'use strict';

  // Set active nav link based on current page (supports relative paths & GH Pages subdirectory)
  function setActiveNav() {
    const path = window.location.pathname;
    const isAbout = path.indexOf('/about') !== -1;
    const isHome = !isAbout && (path === '/' || path.endsWith('/index.html') || path.split('/').filter(Boolean).length <= 1);
    const navLinks = document.querySelectorAll('.header-nav a');
    navLinks.forEach(function(link) {
      const text = link.textContent.trim().toUpperCase();
      link.classList.remove('active');
      if (text === 'HOME' && !isAbout) {
        // Highlight HOME when not on about page
        if (isHome || path.indexOf('/projects/') !== -1) {
          // For project pages, no nav is active by design; keep HOME not active unless at root
          // Only activate HOME at root
          if (isHome) link.classList.add('active');
        } else {
          link.classList.add('active');
        }
      } else if (text === 'ABOUT' && isAbout) {
        link.classList.add('active');
      }
      // CONTACT never marked active (hash link)
    });
    // Ensure Home active at root, About active in /about
    if (isHome) {
      const homeLink = document.querySelector('.header-nav a:nth-child(1)');
      if (homeLink) homeLink.classList.add('active');
    }
  }

  // Smooth scroll for hash links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Init
  document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    initSmoothScroll();
  });
})();
