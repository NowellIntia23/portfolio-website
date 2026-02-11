/* === PORTFOLIO JAVASCRIPT - script.js
Created for: My portfolio Website

This file contains ALL interactive functionality in the portfolio.
It handles:
- Page loading animation
- Mobile menu
- Smooth schrolling
- Scroll animations
- Contact form (with EmailJS email sending)
=== */

/* === PAGE LOADING === */
/* Removes the loading screen once the page has been fully loaded */

// Wait for page to load (including images)
window.addEventListener('load', () => {
    // Wait 500ms (half a second) before hiding the loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.classList.add('hide');
    }, 500);
});
