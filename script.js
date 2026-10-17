const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   Reactive ASCII field.
   The grid is otherwise still — nothing redraws itself on a
   timer. Cells only change in response to the pointer, and
   settle back down on their own via a CSS transition (no JS
   animation loop needed for the fade).
   ========================================================= */

const field = document.getElementById('asciiField');
const GLITCH_CHARS = '@#%&$*+=-:.?/\\|(){}[]<>01❤︎★✿';
const IDLE_CHAR = '·';
const CELL = 25; // px, square-ish grid cell

let cols = 0;
let rows = 0;
let cells = []; // flat array of { el, timers: [] }

function randomChar() {
  return GLITCH_CHARS[(Math.random() * GLITCH_CHARS.length) | 0];
}

function buildGrid() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  cols = Math.ceil(width / CELL);
  rows = Math.ceil(height / CELL);

  field.style.setProperty('--cols', cols);
  field.style.gridTemplateColumns = `repeat(${cols}, ${CELL}px)`;
  field.style.gridAutoRows = `${CELL}px`;
  field.style.fontSize = `${Math.round(CELL * 0.6)}px`;
  field.style.lineHeight = `${CELL}px`;

  field.innerHTML = '';
  cells = new Array(cols * rows);

  const frag = document.createDocumentFragment();
  for (let i = 0; i < cols * rows; i++) {
    const span = document.createElement('span');
    span.className = 'cell';
    span.textContent = IDLE_CHAR;
    frag.appendChild(span);
    cells[i] = { el: span, timers: [] };
  }
  field.appendChild(frag);
}

buildGrid();

let resizeDebounce;
window.addEventListener('resize', () => {
  clearTimeout(resizeDebounce);
  resizeDebounce = setTimeout(buildGrid, 150);
});

function clearCellTimers(cell) {
  cell.timers.forEach(clearTimeout);
  cell.timers.length = 0;
}

function excite(index) {
  if (index < 0 || index >= cells.length) return;
  const cell = cells[index];
  clearCellTimers(cell);

  // quick stutter: a couple of character swaps before settling,
  // then hold briefly, then let the CSS transition fade it out.
  cell.el.textContent = randomChar();
  cell.el.classList.add('active');

  cell.timers.push(setTimeout(() => { cell.el.textContent = randomChar(); }, 45));
  cell.timers.push(setTimeout(() => { cell.el.textContent = randomChar(); }, 95));
  cell.timers.push(setTimeout(() => {
    cell.el.classList.remove('active');
  }, 160 + Math.random() * 220));
}

function excitePointer(clientX, clientY) {
  const col = Math.floor(clientX / CELL);
  const row = Math.floor(clientY / CELL);
  const radius = 2;

  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) continue;
      // sparser the further from center, so the trail doesn't feel like a solid block
      if (dist > 0 && Math.random() < dist / (radius + 0.6)) continue;

      const c = col + dx;
      const r = row + dy;
      if (c < 0 || c >= cols || r < 0 || r >= rows) continue;
      excite(r * cols + c);
    }
  }
}

let ticking = false;
let lastEvent = null;

function onPointerMove(e) {
  lastEvent = e;
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    if (lastEvent) excitePointer(lastEvent.clientX, lastEvent.clientY);
    ticking = false;
  });
}

if (!prefersReducedMotion) {
  window.addEventListener('pointermove', onPointerMove);
}

/* click clears every currently-active cell immediately */
window.addEventListener('pointerdown', () => {
  cells.forEach((cell) => {
    clearCellTimers(cell);
    cell.el.classList.remove('active');
  });
});

/* ---------- glitch-burst on fast mouse movement (hero name) ---------- */

const pointer = { lastX: 0, lastY: 0 };
const nameEl = document.querySelector('.glitch-text');
let burstTimeout = null;

window.addEventListener('pointermove', (e) => {
  const dx = e.clientX - pointer.lastX;
  const dy = e.clientY - pointer.lastY;
  const speed = Math.sqrt(dx * dx + dy * dy);
  pointer.lastX = e.clientX;
  pointer.lastY = e.clientY;

  if (!prefersReducedMotion && speed > 45 && nameEl) {
    nameEl.classList.add('glitch-burst');
    clearTimeout(burstTimeout);
    burstTimeout = setTimeout(() => nameEl.classList.remove('glitch-burst'), 220);
  }
});
