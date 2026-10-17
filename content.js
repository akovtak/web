/* =========================================================
   All editable content lives here. Add a project, event, or
   photo by adding an entry to the matching array below — the
   pages render these automatically, no HTML editing needed.
   ========================================================= */

const CONTENT = {
  projects: [
    { title: "R5", meta: "live set · 2026" },
    { title: "chao", meta: "live set · 2026" },
    { title: "must have been the wind", meta: "live set · 2026" },
    { title: "hand tracking improvisation", meta: "live set · 2026" },
    { title: "Luftschloss", meta: "live set / fixed-media · 2026" },
    { title: "branching", meta: "live set · 2026" },
    { title: "CO3", meta: "live set · 2026" },
    { title: "time has ticks", meta: "fixed-media · 2026" },
    { title: "NRPS", meta: "live set · 2025" },
    { title: "trapezius", meta: "for intonarumori · 2025" },
    { title: "haché", meta: "for intonarumori · 2025" },
    { title: "Re-Imagine Europe Pilot Study #8 – Glitch Tonic: Building an Active Artistic Community", meta: "2025" },
    { title: "kopfkissen", meta: "multichannel fixed-media · 2025" },
    { title: "thirst in the liquid depths", meta: "live electronics · 2025" },
    { title: "dakor", meta: "for organ · 2025" },
    { title: "studies on 20th century compositional techniques", meta: "2025" },
    { title: "Soare", meta: "for guitar and double bass · 2025" },
    { title: "Violin and live electronics", meta: "2024" },
    { title: "Three miniatures for clarinet and fixed electronics", meta: "2024" },
    { title: "Piano sonata", meta: "2024" },
    { title: "revo", meta: "for voice and fixed electronics · 2024" },
    { title: "I am become death", meta: "short film — music and sound design · 2024" },
    { title: "Krutnava", meta: "videogame — music and sound design · 2024" },
    { title: "Jazz etudes for piano", meta: "2024" },
    { title: "wdkumus", meta: "for ssaattbb · 2023" },
    { title: "zvichapera", meta: "for satb · 2023" },
    { title: "ash.", meta: "for satb · 2023" },
    { title: "Today", meta: "for horn in f, piano and violin · 2023" },
    { title: "Weltschmerz", meta: "for fixed electronics and livecoding · 2023" },
    { title: "Old Nick's travel notes", meta: "for pierrot ensemble · 2023" },
    { title: "Posledná večera", meta: "short animation film — music · 2023" },
  ],

  eventsUpcoming: [
    // { date: "12.9", title: "Some Festival — Venue, City" },
  ],

  eventsByYear: {
    2026: [
      { date: "28.6", title: "REZONE 5 — A4, Bratislava" },
      { date: "19.6", title: "KRAA — A4, Bratislava" },
      { date: "15.6", title: "chao — IEM, Graz" },
      { date: "4.6", title: "must have been the wind (concert / performance / installation) — uuu, Trenčín" },
      { date: "30.5", title: "hand tracking improvisation — Impuls Concerts, esc medien kunst labor, Graz" },
      { date: "30.5", title: "Luftschloss — Wolken, Kunst Uni Graz" },
      { date: "22.5", title: "Ladenie mesta — Trenčín" },
      { date: "24.4", title: "Branching (exhibition opening) — Vienna" },
      { date: "8.4", title: "ČO — Bratislava" },
      { date: "26.1", title: "time has ticks — IEM, Graz" },
    ],
    2025: [
      { date: "20.12", title: "Römerov dom — Bratislava" },
      { date: "27.11", title: "trapezius (for intonarumori) — NEXT Festival, A4, Bratislava" },
      { date: "22.11", title: "BIO — Alternativa Festival, ARCHA+, Prague" },
      { date: "14.10", title: "CMKK — Kultum, Graz" },
      { date: "6.8", title: "BIO — Stará tržnica, Bratislava" },
      { date: "4.7", title: "REZONÉ II — A4, Bratislava" },
      { date: "23.5", title: "Festival Orfeus — A4, Bratislava" },
      { date: "19.5", title: "BIO — A4, Bratislava" },
      { date: "6.5", title: "thirst in the liquid deep — Festival Orfeus, Bratislava" },
      { date: "15.4", title: "SuperCollider workshop — The Academy of Performing Arts in Bratislava" },
      { date: "14.4", title: "BIO — A4, Bratislava" },
      { date: "28.3", title: "Soare — Her Endangered Melody, Manchester" },
      { date: "13.3", title: "BIO — A4, Bratislava" },
      { date: "8.2", title: "BIO — A4, Bratislava" },
      { date: "22.1", title: "Composition concert — Pistori Palace, Bratislava" },
      { date: "13.1", title: "BIO — A4, Bratislava" },
    ],
    2024: [
      { date: "12.12", title: "Composition concert — Bratislava Conservatory" },
      { date: "9.12", title: "BIO — A4, Bratislava" },
      { date: "4.11", title: "BIO — A4, Bratislava" },
      { date: "14.10", title: "BIO — A4, Bratislava" },
      { date: "23.9", title: "BIO — A4, Bratislava" },
      { date: "5.9", title: "Festival V novom svetle — KC COOLTAJNER, Považská Bystrica" },
      { date: "10.6", title: "BIO — A4, Bratislava" },
      { date: "6.6", title: "Composition concert — Pistori Palace, Bratislava" },
      { date: "24.5", title: "Weltschmerz — Festival Orfeus, A4, Bratislava" },
      { date: "6.5", title: "BIO — A4, Bratislava" },
      { date: "16.4", title: "BIO — A4, Bratislava" },
      { date: "20.3", title: "Bratislava Improvisers Orchestra — A4, Bratislava" },
      { date: "17.2", title: "Festival KRAA — A4, Bratislava" },
      { date: "24.1", title: "Composition concert — University Library, Bratislava" },
    ],
    2023: [
      { date: "20.12", title: "Composition concert — Bratislava Conservatory" },
      { date: "14.10", title: "JAMA (Veni Academy) — Banská Štiavnica" },
      { date: "7.7", title: "Composers Laboratory — Bratislava Conservatory" },
      { date: "14.6", title: "Composition concert — Pistori Palace, Bratislava" },
      { date: "15.5", title: "Old Nick's travel notes — Ensemblab, Bratislava Conservatory" },
      { date: "17.2", title: "Livecoding — A4, Bratislava" },
    ],
  },

  // Add a photo by dropping a file in /photos/ and adding a line here.
  photos: [
    { src: "photos/photo_5361537774911171320_y.jpg", caption: "me" },
    { src: "photos/photo_5361537774911171938_x.jpg", caption: "Rezone V" },
    { src: "photos/photo_5361537774911171939_y.jpg", caption: "hand tracker" },
    { src: "photos/photo_5361537774911171940_y.jpg", caption: "úúú" },
  ],

  news: [
    { date: "17/10/26", text: "Working on disgusting things, so excited, check this out!", link: "https://miro.com/app/board/uXjVEa6gOZ8=/?share_link_id=812543402876"},
  ],
   
};

/* ---------- render helpers (only run if the target exists on the page) ---------- */

function renderProjects() {
  const list = document.getElementById("projectsList");
  if (!list) return;
  list.innerHTML = CONTENT.projects
    .map(
      (p) => `
      <li class="work-item">
        <a href="#">
          <span class="work-title">${p.title}</span>
          <span class="work-meta">${p.meta}</span>
        </a>
      </li>`
    )
    .join("");
}

function renderEvents() {
  const upcomingList = document.getElementById("eventsUpcoming");
  const pastRoot = document.getElementById("eventsPast");
  if (!upcomingList && !pastRoot) return;

  if (upcomingList) {
    if (CONTENT.eventsUpcoming.length === 0) {
      upcomingList.outerHTML = '<p class="events-empty">nothing announced yet — check back soon.</p>';
    } else {
      upcomingList.innerHTML = CONTENT.eventsUpcoming
        .map((e) => `<li><span class="ev-date">${e.date}</span> ${e.title}</li>`)
        .join("");
    }
  }

  if (pastRoot) {
    const years = Object.keys(CONTENT.eventsByYear).sort((a, b) => b - a);
    pastRoot.innerHTML = years
      .map((year, i) => {
        const events = CONTENT.eventsByYear[year];
        return `
        <details class="year-group" ${i === 0 ? "open" : ""}>
          <summary>${year} <span class="count">(${events.length})</span></summary>
          <ul class="events-list">
            ${events.map((e) => `<li><span class="ev-date">${e.date}</span> ${e.title}</li>`).join("")}
          </ul>
        </details>`;
      })
      .join("");
  }
}

function renderPhotos() {
  const grid = document.getElementById("photoGrid");
  if (!grid) return;
  grid.innerHTML = CONTENT.photos
    .map(
      (p) => `
      <figure class="photo">
        <img src="${p.src}" alt="${p.caption}" loading="lazy">
        <figcaption>${p.caption}</figcaption>
      </figure>`
    )
    .join("");
}

function renderNews() {
  const list = document.getElementById("newsList");
  if (!list) return;
  const limit = Number(list.dataset.limit) || CONTENT.news.length;
  list.innerHTML = CONTENT.news.slice(0, limit).map((n) => `
    <li class="news-item">
      <span class="news-date">${n.date}</span>
      <div>
        <p class="news-title">${n.link ? `<a href="${n.link}" target="_blank" rel="noopener">${n.title}</a>` : n.title}</p>
        ${n.text ? `<p class="news-text">${n.text}</p>` : ""}
      </div>
    </li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderEvents();
  renderPhotos();
  renderNews();
});
