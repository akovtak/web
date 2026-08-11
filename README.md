# Aleksandra Gudkova — site

A small, minimal multi-page site with a reactive ASCII background. No build step, no framework — plain HTML/CSS/JS, so it deploys straight to GitHub Pages.

## Structure

```
index.html          home (hero + short bio)
projects.html        \
events.html            } content-driven pages — see content.js
photos.html           /
partials/nav.html    shared top nav, injected into every page
partials/footer.html shared footer (links), injected into every page
content.js            <- edit THIS to add projects, events, or photos
include.js            loads the shared nav/footer (don't need to touch this)
script.js             the reactive ASCII background + hero glitch effect
style.css             all styling — colors and spacing live at the top
photos/               drop image files here
```

## Adding things

**A new project** — open `content.js`, add a line to the `projects` array:
```js
{ title: "New Piece", meta: "live set · 2027" },
```

**A new event** — same file, add to `eventsUpcoming` or the right year inside `eventsByYear` (create a new year key if needed):
```js
{ date: "12.9", title: "Some Festival — Venue, City" },
```

**A new photo** — drop the image file into `/photos/`, then add a line to the `photos` array in `content.js`:
```js
{ src: "photos/my-photo.jpg", caption: "short caption" },
```
Photos render in grayscale automatically to match the site.

**A new page** — copy `projects.html` (or any page) as a starting point:
1. Rename it, e.g. `press.html`.
2. Update the `<title>` and the content inside `<main>`.
3. Add a link to it in `partials/nav.html` — it updates everywhere at once:
   ```html
   <a href="press.html">press</a>
   ```
4. If the page needs data-driven lists, add an array to `content.js` and a small render function following the pattern of `renderProjects()`.

## Deploy with GitHub Pages

1. Create a new repository on GitHub.
2. From this folder, push it up:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a URL after a minute or two.

## Local preview

The shared nav/footer are loaded with `fetch()`, which browsers block on `file://` URLs — so double-clicking `index.html` won't show the nav. Serve the folder instead:
```bash
python3 -m http.server 8000
```
then open `http://localhost:8000`.

## Notes

- Site chrome (the ASCII background, scanlines, skip link) is duplicated at the top of each HTML page rather than templated, so every page stays self-contained and robust even without the includes loading.
- `partials/nav.html` and `partials/footer.html` are the only shared bits — edit those once, and every page picks it up.
