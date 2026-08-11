/* Loads shared partials (nav, footer) into any element with [data-include].
   Requires the page to be served over http(s) — e.g. `python3 -m http.server`
   locally, or GitHub Pages once deployed. Opening index.html directly via
   file:// will not fetch partials, since browsers block that for security. */

async function loadIncludes() {
  const targets = document.querySelectorAll('[data-include]');

  await Promise.all(
    Array.from(targets).map(async (el) => {
      const path = el.getAttribute('data-include');
      try {
        const res = await fetch(path);
        el.innerHTML = await res.text();
      } catch (err) {
        console.error(`Could not load ${path}. If you're viewing this via a file:// URL, run a local server instead — see README.md.`, err);
      }
    })
  );

  // highlight the current page in the nav
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach((a) => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // fill in the footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.dispatchEvent(new CustomEvent('includes:loaded'));
}

loadIncludes();
