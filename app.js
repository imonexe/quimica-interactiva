/* Tabla periódica interactiva — lógica */
'use strict';

const $ = (sel) => document.querySelector(sel);

// ---------- normalización de datos ----------
// [z, sym, name, mass, cat, group, period, block, state, en, uses]
const DATA = ELEMENTS.map(([z, sym, name, mass, cat, group, period, block, state, en, usos]) => ({
  z, sym, name, mass, cat, group, period, block, state, en, usos,
}));

const byZ = new Map(DATA.map((e) => [e.z, e]));
const catOf = (code) => CATS[code];

// ---------- configuración electrónica ----------
const FILL_ORDER = [
  ['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6],
  ['4s', 2], ['3d', 10], ['4p', 6], ['5s', 2], ['4d', 10],
  ['5p', 6], ['6s', 2], ['4f', 14], ['5d', 10], ['6p', 6],
  ['7s', 2], ['5f', 14], ['6d', 10], ['7p', 6],
];

const NOBLE_CORES = [
  { z: 86, sym: 'Rn' }, { z: 54, sym: 'Xe' }, { z: 36, sym: 'Kr' },
  { z: 18, sym: 'Ar' }, { z: 10, sym: 'Ne' }, { z: 2, sym: 'He' },
];

// Excepciones establecidas de la configuración (orden de escritura: n, l)
const CONFIG_X = {
  24: '[Ar] 4s¹ 3d⁵', 29: '[Ar] 4s¹ 3d¹⁰',
  41: '[Kr] 5s¹ 4d⁴', 42: '[Kr] 5s¹ 4d⁵', 44: '[Kr] 5s¹ 4d⁷',
  45: '[Kr] 5s¹ 4d⁸', 46: '[Kr] 4d¹⁰', 47: '[Kr] 5s¹ 4d¹⁰',
  57: '[Xe] 6s² 5d¹', 58: '[Xe] 6s² 4f¹ 5d¹', 64: '[Xe] 6s² 4f⁷ 5d¹',
  71: '[Xe] 6s² 4f¹⁴ 5d¹', 78: '[Xe] 6s¹ 4f¹⁴ 5d⁹', 79: '[Xe] 6s¹ 4f¹⁴ 5d¹⁰',
  89: '[Rn] 7s² 6d¹', 90: '[Rn] 7s² 6d²', 91: '[Rn] 7s² 5f² 6d¹',
  92: '[Rn] 7s² 5f³ 6d¹', 93: '[Rn] 7s² 5f⁴ 6d¹', 96: '[Rn] 7s² 5f⁷ 6d¹',
  103: '[Rn] 7s² 5f¹⁴ 6d¹',
};

const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((d) => SUP[d]).join('');

function configOf(z) {
  if (CONFIG_X[z]) return CONFIG_X[z];
  let rem = z;
  const parts = [];
  for (const [orb, cap] of FILL_ORDER) {
    if (rem <= 0) break;
    const n = Math.min(cap, rem);
    parts.push({ orb, n });
    rem -= n;
  }
  // núcleo de gas noble más pesado menor que z
  const coreSel = NOBLE_CORES.find((c) => c.z < z);
  if (!coreSel) return parts.map((p) => `${p.orb}${sup(p.n)}`).join(' ');
  // configuración completa del núcleo
  let remC = coreSel.z;
  const coreParts = [];
  for (const [orb, cap] of FILL_ORDER) {
    if (remC <= 0) break;
    const n = Math.min(cap, remC);
    coreParts.push({ orb, n });
    remC -= n;
  }
  // quitar del frente los orbitales que ya cubre el núcleo
  let toRemove = coreParts.length;
  const rest = parts.slice(toRemove);
  const coreHtml = `[${coreSel.sym}]`;
  return coreHtml + ' ' + rest.map((p) => `${p.orb}${sup(p.n)}`).join(' ');
}

// ---------- estado ----------
const STATE_LABEL = { s: 'Sólido', l: 'Líquido', g: 'Gas' };
const BLOCK_LABEL = { s: 's', p: 'p', d: 'd', f: 'f' };

// ---------- compatibilidades por elemento ----------
function compatOf(e) {
  return COMPAT[e.z] || CAT_COMPAT[e.cat] || { con: [], evita: null };
}

// ---------- render de la tabla ----------
const ptable = $('#ptable');
const fblock = $('#fblock');
const legendEl = $('#legend');
const stateEl = $('#state-filters');

let activeCat = null;
let activeState = null;
let query = '';
let selectedZ = null;

function elButton(e, extraClass = '') {
  const cat = catOf(e.cat);
  const b = document.createElement('button');
  b.className = `el ${extraClass}`.trim();
  b.style.setProperty('--cat', cat.color);
  b.dataset.z = e.z;
  b.dataset.g = e.group ?? 'f';
  b.dataset.p = e.period;
  b.dataset.cat = e.cat;
  b.dataset.state = e.state;
  b.setAttribute('aria-label', `${e.name}, elemento ${e.z}`);
  b.innerHTML = `
    <span class="z">${e.z}</span>
    <span class="sym">${e.sym}</span>
    <span class="nm">${e.name}</span>`;
  b.addEventListener('click', () => openDrawer(e.z));
  b.addEventListener('mouseenter', () => highlightRowCol(e));
  b.addEventListener('mouseleave', clearHighlight);
  b.addEventListener('focus', () => highlightRowCol(e));
  b.addEventListener('blur', clearHighlight);
  return b;
}

function buildTable() {
  // etiquetas de grupos (columnas)
  for (let g = 0; g <= 18; g++) {
    const lab = document.createElement('span');
    lab.className = 'axis-label';
    lab.textContent = g === 0 ? '' : g;
    lab.style.gridRow = '1';
    lab.style.gridColumn = g + 1;
    ptable.appendChild(lab);
  }
  // etiquetas de períodos (filas)
  for (let p = 1; p <= 7; p++) {
    const lab = document.createElement('span');
    lab.className = 'axis-label row';
    lab.textContent = p;
    lab.style.gridRow = p + 1;
    lab.style.gridColumn = '1';
    ptable.appendChild(lab);
  }
  // elementos del bloque principal (s, p, d + La/Ac que ocupan el grupo 3)
  for (const e of DATA) {
    if (e.block === 'f' && e.z !== 57 && e.z !== 89) continue;
    const b = elButton(e);
    b.style.gridRow = e.period + 1;
    b.style.gridColumn = (e.group ?? 3) + 1;
    if (e.group === null) b.style.gridColumn = '4';
    ptable.appendChild(b);
  }
  // filas f
  const fRows = [
    { catCode: 'lant', first: 58, last: 71, markerZ: 57, marker: '57–71', period: 6 },
    { catCode: 'act', first: 90, last: 103, markerZ: 89, marker: '89–103', period: 7 },
  ];
  fRows.forEach((row, i) => {
    const lab = document.createElement('span');
    lab.className = 'axis-label row';
    lab.textContent = row.period === 6 ? '6' : '7';
    lab.style.gridRow = String(i + 1);
    lab.style.gridColumn = '1';
    fblock.appendChild(lab);

    const cat = catOf(row.catCode);
    const marker = document.createElement('button');
    marker.className = 'fmarker';
    marker.style.setProperty('--cat', cat.color);
    marker.style.gridRow = String(i + 1);
    marker.style.gridColumn = '2 / span 3';
    marker.innerHTML = `<b>${row.marker}</b>`;
    marker.title = `Ver ${byZ.get(row.markerZ).name}`;
    marker.setAttribute('aria-label', `Elementos ${row.marker}: abrir ${byZ.get(row.markerZ).name}`);
    marker.addEventListener('click', () => openDrawer(row.markerZ));
    fblock.appendChild(marker);

    for (let z = row.first; z <= row.last; z++) {
      const e = byZ.get(z);
      const b = elButton(e);
      b.style.gridRow = String(i + 1);
      b.style.gridColumn = String(z - row.first + 5);
      fblock.appendChild(b);
    }
  });
}

function buildLegend() {
  const all = [['todos', 'Todos', null], ...Object.entries(CATS).map(([k, v]) => [k, v.nombre, v.color])];
  for (const [key, label, color] of all) {
    const b = document.createElement('button');
    b.dataset.cat = key;
    if (color) {
      b.style.setProperty('--cat', color);
      b.innerHTML = `<span class="dot" style="background:${color}"></span>${label}`;
    } else {
      b.textContent = label;
    }
    b.addEventListener('click', () => {
      activeCat = activeCat === key ? null : key;
      syncFilterUI();
    });
    legendEl.appendChild(b);
  }

  const states = [['todos', 'Todos los estados'], ['s', 'Sólidos'], ['l', 'Líquidos'], ['g', 'Gases']];
  for (const [key, label] of states) {
    const b = document.createElement('button');
    b.dataset.state = key;
    b.textContent = label;
    b.addEventListener('click', () => {
      activeState = activeState === key ? null : key;
      syncFilterUI();
    });
    stateEl.appendChild(b);
  }
}

function syncFilterUI() {
  legendEl.querySelectorAll('button').forEach((b) => {
    b.classList.toggle('active', b.dataset.cat === activeCat);
  });
  stateEl.querySelectorAll('button').forEach((b) => {
    b.classList.toggle('active', b.dataset.state === activeState);
  });
  applyDim();
}

function matchesQuery(e) {
  if (!query) return true;
  const q = query;
  if (String(e.z) === q) return true;
  return e.name.toLowerCase().includes(q) || e.sym.toLowerCase().includes(q);
}

function applyDim() {
  document.querySelectorAll('.el').forEach((b) => {
    const e = byZ.get(Number(b.dataset.z));
    const dimCat = activeCat && activeCat !== 'todos' && e.cat !== activeCat;
    const dimState = activeState && activeState !== 'todos' && e.state !== activeState;
    const dimQuery = query && !matchesQuery(e);
    b.classList.toggle('dim', Boolean(dimCat || dimState || dimQuery));
  });
}

function highlightRowCol(e) {
  document.querySelectorAll('.el').forEach((b) => {
    const sameGroup = e.group !== null && b.dataset.g === String(e.group);
    const samePeriod = b.dataset.p === String(e.period);
    b.classList.toggle('hl', sameGroup || samePeriod);
  });
}

function clearHighlight() {
  document.querySelectorAll('.el.hl').forEach((b) => b.classList.remove('hl'));
}

// ---------- búsqueda ----------
$('#search').addEventListener('input', (ev) => {
  const raw = ev.target.value.trim().toLowerCase();
  if (activeBranch === 'tabla') {
    query = raw;
    applyDim();
    if (query) {
      const hit = DATA.find((e) => matchesQuery(e));
      if (hit) {
        const cell = document.querySelector(`.el[data-z="${hit.z}"]`);
        cell && cell.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
      }
    }
  } else {
    chemQuery = raw;
    applyChemDim();
  }
});

// ---------- drawer ----------
const drawer = $('#drawer');
const drawerBackdrop = $('#drawer-backdrop');
const drawerContent = $('#drawer-content');

function fmtMass(m) {
  return Number.isInteger(m) ? String(m) : m.toFixed(m < 10 ? 3 : 2).replace(/0+$/, '').replace(/\.$/, '');
}

function fmtProp(n) {
  if (n === null || n === undefined) return '—';
  return String(Math.round(n * 100) / 100);
}

function oxChips(ox) {
  if (!ox || !ox.length) return '<span class="ox-none">Sin estados conocidos (inerte o sintético)</span>';
  return ox.map((o) => `<span class="ox-chip ${o < 0 ? 'neg' : ''}">${o > 0 ? '+' + o : o < 0 ? '−' + Math.abs(o) : '0'}</span>`).join('');
}

function openDrawer(z) {
  const e = byZ.get(z);
  if (!e) return;
  selectedZ = z;
  const cat = catOf(e.cat);
  const en = e.en !== null ? e.en.toFixed(2).replace(/\.?0+$/, '') : '—';
  const enPct = e.en !== null ? Math.round((e.en / 3.98) * 100) : 0;
  const compat = compatOf(e);
  const p = (typeof PROPS !== 'undefined' && PROPS[z]) || {};

  drawerContent.innerHTML = `
    <div class="drawer-inner" style="--cat:${cat.color}">
      <div class="drawer-top">
        <div>
          <p class="drawer-kicker">${e.z} · ${cat.nombre}</p>
          <h2 class="drawer-name">${e.name}</h2>
          <p class="drawer-mass">Masa atómica · ${fmtMass(e.mass)} u</p>
        </div>
        <div class="el-hero">
          <span class="z">${e.z}</span>
          <span class="sym">${e.sym}</span>
        </div>
      </div>

      <dl class="data-grid">
        <div class="data-cell"><dt>Número atómico</dt><dd>${e.z}</dd></div>
        <div class="data-cell"><dt>Masa atómica</dt><dd>${fmtMass(e.mass)} u</dd></div>
        <div class="data-cell"><dt>Grupo</dt><dd>${e.group ?? 'f'}</dd></div>
        <div class="data-cell"><dt>Período</dt><dd>${e.period}</dd></div>
        <div class="data-cell"><dt>Bloque</dt><dd>${BLOCK_LABEL[e.block]}</dd></div>
        <div class="data-cell"><dt>Estado (25 °C)</dt><dd>${STATE_LABEL[e.state]}</dd></div>
        <div class="data-cell" style="grid-column: 1 / -1">
          <dt>Electronegatividad (Pauling)</dt>
          <dd>${en}</dd>
          <div class="en-bar"><span style="width:${enPct}%"></span></div>
        </div>
      </dl>

      <p class="ficha-label">Configuración electrónica</p>
      <p class="config">${configOf(e.z).replace(/\[(\w+)\]/, '<span class="core">[$1]</span>')}</p>

      <p class="ficha-label">Estados de oxidación</p>
      <div class="ox-box">${oxChips(p.ox)}</div>

      <p class="ficha-label">Ficha técnica</p>
      <dl class="data-grid">
        <div class="data-cell"><dt>Densidad</dt><dd>${p.den != null ? `${fmtProp(p.den)} ${p.du}` : '—'}</dd></div>
        <div class="data-cell"><dt>P. de fusión</dt><dd>${p.melt != null ? `${fmtProp(p.melt)} °C` : '—'}</dd></div>
        <div class="data-cell"><dt>P. de ebullición</dt><dd>${p.boil != null ? `${fmtProp(p.boil)} °C` : '—'}</dd></div>
        <div class="data-cell"><dt>1ª energía de ionización</dt><dd>${p.ie != null ? `${fmtProp(p.ie)} kJ/mol` : '—'}</dd></div>
        <div class="data-cell"><dt>Afinidad electrónica</dt><dd>${p.ea != null ? `${fmtProp(p.ea)} kJ/mol` : '—'}</dd></div>
        <div class="data-cell"><dt>Descubrimiento</dt><dd>${p.disc ?? '—'}</dd></div>
      </dl>

      <p class="ficha-label">Con qué se combina</p>
      <div class="qsec" style="margin-top:0">
        <ul>${compat.con.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>

      ${compat.evita ? `
      <p class="ficha-label" style="color:var(--warn)">Con qué NO combinar</p>
      <div class="evita-box">${compat.evita}</div>` : ''}

      <p class="ficha-label">Dato farmacéutico</p>
      <div class="usos-box"><p class="usos">${e.usos}</p></div>
    </div>`;

  drawer.classList.remove('hidden');
  drawerBackdrop.classList.remove('hidden');
  requestAnimationFrame(() => {
    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
  });
  document.querySelectorAll('.el.selected').forEach((b) => b.classList.remove('selected'));
  const cell = document.querySelector(`.el[data-z="${z}"]`);
  cell && cell.classList.add('selected');
  const closeBtn = document.createElement('button');
  closeBtn.className = 'drawer-close';
  closeBtn.setAttribute('aria-label', 'Cerrar ficha');
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', closeDrawer);
  drawerContent.querySelector('.drawer-top').appendChild(closeBtn);
  drawerContent.querySelector('.drawer-top > div').style.flex = '1';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '22px';
  closeBtn.style.right = '22px';
  drawerContent.style.position = 'relative';
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
  document.querySelectorAll('.el.selected').forEach((b) => b.classList.remove('selected'));
  selectedZ = null;
  setTimeout(() => {
    drawer.classList.add('hidden');
    drawerBackdrop.classList.add('hidden');
  }, 300);
}

drawerBackdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
});

// ---------- vistas: tabla / repaso ----------
const vistaTabla = $('#vista-tabla');
const vistaRepaso = $('#vista-repaso');
const tabTabla = $('#tab-tabla');
const tabRepaso = $('#tab-repaso');

let quizBuilt = false;
let currentQuiz = null;
let quizFlipped = false;
let quizCount = 0;
let quizOk = 0;

let quizView = false;

function setView(v) {
  const isQuiz = v === 'repaso';
  quizView = isQuiz;
  vistaTabla.classList.toggle('hidden', isQuiz);
  vistaRepaso.classList.toggle('hidden', !isQuiz);
  tabTabla.classList.toggle('active', !isQuiz);
  tabRepaso.classList.toggle('active', isQuiz);
  tabTabla.setAttribute('aria-selected', String(!isQuiz));
  tabRepaso.setAttribute('aria-selected', String(isQuiz));
  if (isQuiz && !quizBuilt) {
    buildQuiz();
    quizBuilt = true;
  }
  if (!isQuiz && drawer.classList.contains('open')) closeDrawer();
}

tabTabla.addEventListener('click', () => setView('tabla'));
tabRepaso.addEventListener('click', () => setView('repaso'));

function buildQuiz() {
  nextCard();
}

function nextCard(known) {
  if (known === true) quizOk++;
  if (known !== undefined) quizCount++;
  let pick;
  do {
    pick = DATA[Math.floor(Math.random() * DATA.length)];
  } while (currentQuiz && pick.z === currentQuiz.z && DATA.length > 1);
  currentQuiz = pick;
  quizFlipped = false;
  renderQuiz();
}

function renderQuiz() {
  const e = currentQuiz;
  const cat = catOf(e.cat);
  $('#quiz').innerHTML = `
    <p class="quiz-meta">TARJETA ${quizCount + 1} · ACIERTOS ${quizOk}</p>
    <div class="flashcard" id="flashcard" style="--cat:${cat.color}" role="button" tabindex="0" aria-label="Tarjeta de repaso, activar para ver la respuesta">
      <p class="q-z">ELEMENTO ${e.z}</p>
      <p class="q-sym">${e.sym}</p>
      <p class="q-cat">${cat.nombre}</p>
      <p class="q-ask">¿De qué elemento se trata? Toca la tarjeta para ver la respuesta.</p>
      <div class="q-answer hidden" id="q-answer">
        <p class="q-name">${e.name}</p>
        <p class="q-facts">Masa ${fmtMass(e.mass)} u · Grupo ${e.group ?? 'f'} · Período ${e.period}<br>${configOf(e.z)}</p>
      </div>
    </div>
    <div class="quiz-actions">
      <button id="q-flip" class="primary">Ver respuesta</button>
      <button id="q-next">Siguiente</button>
    </div>`;

  const flip = () => {
    quizFlipped = !quizFlipped;
    $('#q-answer').classList.toggle('hidden', !quizFlipped);
    $('#q-flip').textContent = quizFlipped ? 'Ocultar respuesta' : 'Ver respuesta';
  };
  $('#flashcard').addEventListener('click', flip);
  $('#flashcard').addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); flip(); }
  });
  $('#q-flip').addEventListener('click', flip);
  $('#q-next').addEventListener('click', () => nextCard(quizFlipped));
}

// ---------- ramas: tabla / inorgánica / orgánica ----------
let activeBranch = 'tabla';
let chemQuery = '';
const chemState = {
  inorg: { built: false, tema: null },
  org: { built: false, tema: null },
};

const BRANCH_SECTIONS = {
  tabla: ['vista-tabla', 'vista-repaso'],
  inorg: ['vista-inorg'],
  org: ['vista-org'],
};

function setBranch(b) {
  activeBranch = b;
  ['tabla', 'inorg', 'org'].forEach((k) => {
    const btn = $(`#btab-${k}`);
    const on = k === b;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-selected', String(on));
  });
  Object.entries(BRANCH_SECTIONS).forEach(([k, ids]) => {
    ids.forEach((id, i) => {
      // dentro de la rama tabla respeta el sub-modo tabla/repaso
      const show = k === b && (k !== 'tabla' || i === (quizView ? 1 : 0));
      document.getElementById(id).classList.toggle('hidden', !show);
    });
  });
  $('#tabla-toggle').classList.toggle('hidden', b !== 'tabla');
  $('#tabla-filters').classList.toggle('hidden', b !== 'tabla');
  if (b !== 'tabla' && drawer.classList.contains('open')) closeDrawer();
  if (b !== 'tabla') {
    const st = chemState[b];
    if (!st.built) {
      buildChem(b);
      st.built = true;
    }
    applyChemDim();
  }
  $('#search').placeholder = b === 'tabla'
    ? 'Buscar por nombre, símbolo o número…'
    : 'Buscar en los módulos…';
  if ($('#search').value) {
    $('#search').value = '';
    chemQuery = '';
    query = '';
    if (b === 'tabla') applyDim(); else applyChemDim();
  }
}

$('#btab-tabla').addEventListener('click', () => setBranch('tabla'));
$('#btab-inorg').addEventListener('click', () => setBranch('inorg'));
$('#btab-org').addEventListener('click', () => setBranch('org'));

function buildChem(rama) {
  const container = document.getElementById(`chem-${rama}`);
  const ramaKey = rama === 'inorg' ? 'inorganica' : 'organica';
  const mods = QMODS.filter((m) => m.rama === ramaKey);
  const temas = QTEMAS[ramaKey];

  const meta = document.createElement('p');
  meta.className = 'chem-meta';
  meta.innerHTML = `<b>${mods.length}</b> módulos · <b>${temas.length}</b> temas · ${rama === 'inorg' ? 'con qué se juntan, qué se forma y qué nunca mezclar' : 'mecanismos, grupos funcionales y química medicinal'}`;
  container.appendChild(meta);

  const chips = document.createElement('div');
  chips.className = 'chem-chips';
  const allChip = document.createElement('button');
  allChip.textContent = `Todos · ${mods.length}`;
  allChip.classList.add('active');
  allChip.addEventListener('click', () => {
    chemState[rama].tema = null;
    chips.querySelectorAll('button').forEach((c, i) => c.classList.toggle('active', i === 0));
    applyChemDim();
  });
  chips.appendChild(allChip);
  temas.forEach((t) => {
    const n = mods.filter((m) => m.tema === t).length;
    const c = document.createElement('button');
    c.textContent = `${t} · ${n}`;
    c.addEventListener('click', () => {
      chemState[rama].tema = chemState[rama].tema === t ? null : t;
      chips.querySelectorAll('button').forEach((x) => x.classList.remove('active'));
      (chemState[rama].tema ? [...chips.children].find((x) => x.textContent.startsWith(t)) : allChip).classList.add('active');
      applyChemDim();
    });
    chips.appendChild(c);
  });
  container.appendChild(chips);

  mods.forEach((m, i) => {
    const row = document.createElement('button');
    row.className = 'qrow';
    row.dataset.id = m.id;
    row.dataset.tema = m.tema;
    row.innerHTML = `
      <span class="qrow-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="qrow-main"><b>${m.titulo}</b><i>${m.resumen}</i></span>
      <span class="qrow-tema">${m.tema}</span>`;
    row.addEventListener('click', () => openChemDrawer(m));
    container.appendChild(row);
  });
}

function chemMatches(m, q) {
  if (!q) return true;
  const hay = [m.titulo, m.resumen, m.tema, ...m.secciones.flatMap((s) => [s.t, ...s.items])]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
}

function applyChemDim() {
  if (activeBranch === 'tabla') return;
  const st = chemState[activeBranch];
  document.querySelectorAll(`#chem-${activeBranch} .qrow`).forEach((row) => {
    const m = QMODS.find((x) => String(x.id) === row.dataset.id);
    const dimTema = st.tema && m.tema !== st.tema;
    const dimQuery = chemQuery && !chemMatches(m, chemQuery);
    row.classList.toggle('dim', Boolean(dimTema || dimQuery));
  });
}

function openChemDrawer(m) {
  const ramaLabel = m.rama === 'inorg' ? 'Química inorgánica' : 'Química orgánica';
  drawerContent.innerHTML = `
    <div class="drawer-inner" style="--cat: var(--accent)">
      <div class="drawer-top" style="position:relative">
        <div>
          <p class="drawer-kicker">${ramaLabel} · ${m.tema}</p>
          <h2 class="drawer-name">${m.titulo}</h2>
          <p class="drawer-mass">${m.resumen}</p>
        </div>
      </div>
      ${m.secciones.map((s) => `
        <div class="qsec">
          <h4>${s.t}</h4>
          <ul>${s.items.map((it) => `<li>${it}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>`;
  drawer.classList.remove('hidden');
  drawerBackdrop.classList.remove('hidden');
  requestAnimationFrame(() => {
    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
  });
  const closeBtn = document.createElement('button');
  closeBtn.className = 'drawer-close';
  closeBtn.setAttribute('aria-label', 'Cerrar módulo');
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', closeDrawer);
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '22px';
  closeBtn.style.right = '22px';
  drawerContent.querySelector('.drawer-top').appendChild(closeBtn);
}

// ---------- init ----------
buildTable();
buildLegend();
syncFilterUI();
