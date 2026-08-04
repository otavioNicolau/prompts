const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const OUT = path.join(DIR, 'index.html');

// ── parse frontmatter + body ──────────────────────────────────────────────────
function parseMd(file) {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;

  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim();
    if (key) meta[key] = val;
  }

  let body = m[2].trim();
  body = body.replace(/^```[a-z]*\n([\s\S]*)\n```$/m, '$1').trim();

  meta.inputs = meta.inputs ? meta.inputs.split('|').map(s => s.trim()) : [];
  meta.tags   = meta.tags   ? meta.tags.split(' ')                       : [meta.type];
  meta.order  = parseInt(meta.order || '99', 10);

  return { meta, body };
}

// ── helpers ───────────────────────────────────────────────────────────────────
function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escAttr(s) {
  return esc(s).replace(/"/g, '&quot;');
}

function tagBadge(tag) {
  const map = {
    img:  ['tag-img',  'Imagem'],
    vid:  ['tag-vid',  'Vídeo'],
    json: ['tag-json', 'JSON'],
    beta: ['tag-beta', 'BETA'],
    novo: ['tag-novo', 'NOVO'],
  };
  const [cls, label] = map[tag] || ['', tag];
  return `<span class="tag ${cls}">${label}</span>`;
}

function buildCard(p, id) {
  const { meta, body } = p;
  const pid = `p${id}`;
  const familyBadge = meta.family ? `<span class="tag tag-family">#${meta.family}</span>` : '';
  const badges      = meta.tags.map(tagBadge).join('\n        ');
  const inputBadges = meta.inputs.map(i => `<span class="input-badge">${i}</span>`).join('\n        ');
  const searchText  = [meta.title, meta.desc, meta.family ? `#${meta.family}` : '', meta.tags.join(' ')]
    .join(' ').toLowerCase();
  return `
  <div class="card" data-type="${meta.type}" data-search="${escAttr(searchText)}">
    <div class="card-header">
      <div class="card-meta">
        ${familyBadge}
        ${badges}
      </div>
      <div class="card-title">${meta.title}</div>
      <div class="card-desc">${meta.desc}</div>
      <div class="inputs">
        ${inputBadges}
      </div>
    </div>
    <div class="code-wrap">
      <div class="code-scroll"><pre id="${pid}">${esc(body)}</pre></div>
    </div>
    <div class="card-footer">
      <button class="copy-btn" onclick="copyText('${pid}', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copiar
      </button>
    </div>
  </div>`;
}

// ── HTML template ─────────────────────────────────────────────────────────────
function buildHtml(imgCards, vidCards) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prompt Library</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d0d0f;
      --surface: #141416;
      --surface2: #1c1c1f;
      --border: #2a2a2f;
      --accent: #7c6dfa;
      --accent2: #a78bfa;
      --text: #e8e8ed;
      --muted: #7a7a8a;
      --tag-img: #1a3a2a;
      --tag-img-text: #4ade80;
      --tag-vid: #1a1a3a;
      --tag-vid-text: #818cf8;
      --tag-json: #2a1a1a;
      --tag-json-text: #fb923c;
      --tag-beta: #3a1a2a;
      --tag-beta-text: #f472b6;
      --tag-novo: #1a2a3a;
      --tag-novo-text: #38bdf8;
      --tag-family: #26262c;
      --tag-family-text: #a1a1aa;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      min-height: 100vh;
    }

    /* ── HERO ── */
    .hero {
      padding: 72px 24px 56px;
      text-align: center;
      background: radial-gradient(ellipse 80% 60% at 50% -10%, #3b2f8820 0%, transparent 70%);
      border-bottom: 1px solid var(--border);
    }
    .hero h1 {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #fff 30%, var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero p {
      margin-top: 12px;
      color: var(--muted);
      font-size: 1.05rem;
    }

    /* ── NAV TABS ── */
    .tabs {
      display: flex;
      gap: 8px;
      justify-content: center;
      flex-wrap: wrap;
      padding: 28px 24px 0;
    }
    .tab {
      padding: 8px 18px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--muted);
      font-size: 0.85rem;
      cursor: pointer;
      transition: all .2s;
    }
    .tab:hover { border-color: var(--accent); color: var(--text); }
    .tab.active { background: var(--accent); border-color: var(--accent); color: #fff; }

    /* ── SEARCH ── */
    .search-wrap {
      display: flex;
      justify-content: center;
      padding: 16px 24px 0;
    }
    .search-box {
      position: relative;
      width: 100%;
      max-width: 420px;
    }
    .search-box svg {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      color: var(--muted);
      pointer-events: none;
    }
    .search-box input {
      width: 100%;
      padding: 10px 14px 10px 38px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text);
      font-size: 0.85rem;
      outline: none;
      transition: border-color .2s;
    }
    .search-box input::placeholder { color: var(--muted); }
    .search-box input:focus { border-color: var(--accent); }
    .search-empty {
      display: none;
      text-align: center;
      color: var(--muted);
      font-size: 0.9rem;
      padding: 48px 24px;
    }

    /* ── GRID ── */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 20px;
      max-width: 1280px;
      margin: 36px auto 80px;
      padding: 0 24px;
    }

    /* ── CARD ── */
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: border-color .2s, transform .2s;
    }
    .card:hover { border-color: #4a4a5a; transform: translateY(-2px); }

    .card-header {
      padding: 20px 20px 14px;
      border-bottom: 1px solid var(--border);
    }
    .card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
    }
    .tag {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: .06em;
      text-transform: uppercase;
      padding: 3px 9px;
      border-radius: 999px;
    }
    .tag-img  { background: var(--tag-img);  color: var(--tag-img-text); }
    .tag-vid  { background: var(--tag-vid);  color: var(--tag-vid-text); }
    .tag-json { background: var(--tag-json); color: var(--tag-json-text); }
    .tag-beta { background: var(--tag-beta); color: var(--tag-beta-text); }
    .tag-novo { background: var(--tag-novo); color: var(--tag-novo-text); }
    .tag-family { background: var(--tag-family); color: var(--tag-family-text); font-family: 'SF Mono', 'Fira Code', monospace; }

    .card-title {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.3;
    }
    .card-desc {
      margin-top: 6px;
      font-size: 0.83rem;
      color: var(--muted);
      line-height: 1.55;
    }

    .inputs {
      display: flex;
      gap: 6px;
      margin-top: 10px;
      flex-wrap: wrap;
    }
    .input-badge {
      font-size: 0.72rem;
      padding: 2px 8px;
      border-radius: 6px;
      background: var(--surface2);
      border: 1px solid var(--border);
      color: var(--muted);
    }

    .code-wrap {
      flex: 1;
      position: relative;
      background: #0a0a0c;
    }
    .code-scroll {
      max-height: 260px;
      overflow-y: auto;
      padding: 16px 20px;
      scrollbar-width: thin;
      scrollbar-color: var(--border) transparent;
    }
    .code-scroll::-webkit-scrollbar { width: 4px; }
    .code-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

    pre {
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 0.75rem;
      line-height: 1.7;
      color: #c9c9d8;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .card-footer {
      padding: 10px 16px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: flex-end;
    }
    .copy-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 16px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--surface2);
      color: var(--text);
      font-size: 0.8rem;
      cursor: pointer;
      transition: all .18s;
    }
    .copy-btn:hover { background: var(--accent); border-color: var(--accent); color: #fff; }
    .copy-btn.copied { background: #16a34a22; border-color: #16a34a; color: #4ade80; }
    .copy-btn svg { width: 14px; height: 14px; }

    .card[data-hidden] { display: none; }

    .section-label {
      max-width: 1280px;
      margin: 0 auto;
      padding: 36px 24px 0;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--muted);
    }
  </style>
</head>
<body>

<div class="hero">
  <h1>Prompt Library</h1>
  <p>Coleção de prompts para geração e animação de imagens com avatar</p>
</div>

<div class="tabs">
  <button class="tab active" onclick="filter('all', this)">Todos</button>
  <button class="tab" onclick="filter('img', this)">Imagem</button>
  <button class="tab" onclick="filter('vid', this)">Vídeo</button>
</div>

<div class="search-wrap">
  <div class="search-box">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    <input id="search" type="text" placeholder="Buscar prompts..." oninput="applyFilters()" />
  </div>
</div>

<!-- ══════════════ IMAGEM ══════════════ -->
<div class="section-label" id="label-img">Imagem</div>
<div class="grid" id="grid-img">
${imgCards}
</div>

<!-- ══════════════ VÍDEO ══════════════ -->
<div class="section-label" id="label-vid">Vídeo — Animações POV</div>
<div class="grid" id="grid-vid">
${vidCards}
</div>

<div class="search-empty" id="search-empty">Nenhum prompt encontrado.</div>

<script>
  let currentType = 'all';

  function filter(type, btn) {
    currentType = type;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }

  function applyFilters() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    const terms = query.split(/\s+/).filter(Boolean);

    let imgVisible = 0;
    let vidVisible = 0;

    document.querySelectorAll('.card').forEach(card => {
      const typeMatch = currentType === 'all' || card.dataset.type === currentType;
      const searchMatch = terms.every(t => card.dataset.search.includes(t));

      if (typeMatch && searchMatch) {
        delete card.dataset.hidden;
        if (card.dataset.type === 'img') imgVisible++;
        if (card.dataset.type === 'vid') vidVisible++;
      } else {
        card.dataset.hidden = '1';
      }
    });

    const showImgSection = currentType !== 'vid' && imgVisible > 0;
    const showVidSection = currentType !== 'img' && vidVisible > 0;

    document.getElementById('label-img').style.display = showImgSection ? '' : 'none';
    document.getElementById('grid-img').style.display = showImgSection ? '' : 'none';
    document.getElementById('label-vid').style.display = showVidSection ? '' : 'none';
    document.getElementById('grid-vid').style.display = showVidSection ? '' : 'none';

    document.getElementById('search-empty').style.display =
      (imgVisible === 0 && vidVisible === 0) ? '' : 'none';
  }

  function copyText(id, btn) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = \`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
        Copiado!
      \`;
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = \`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copiar
        \`;
      }, 2000);
    });
  }
</script>
</body>
</html>`;
}

// ── build ─────────────────────────────────────────────────────────────────────
function build() {
  const files = fs.readdirSync(DIR)
    .filter(f => f.startsWith('prompt-') && f.endsWith('.md'))
    .map(f => path.join(DIR, f));

  const prompts = files
    .map(parseMd)
    .filter(Boolean)
    .sort((a, b) => a.meta.order - b.meta.order);

  const imgs = prompts.filter(p => p.meta.type === 'img');
  const vids = prompts.filter(p => p.meta.type === 'vid');

  const imgCards = imgs.map((p, i) => buildCard(p, i + 1)).join('\n');
  const vidCards = vids.map((p, i) => buildCard(p, imgs.length + i + 1)).join('\n');

  fs.writeFileSync(OUT, buildHtml(imgCards, vidCards), 'utf8');
  console.log(`[build] index.html atualizado — ${new Date().toLocaleTimeString()} (${prompts.length} prompts)`);
}

// ── entry ─────────────────────────────────────────────────────────────────────
try {
  build();
} catch (e) {
  console.error('[erro]', e.message);
}

if (process.argv.includes('--watch')) {
  console.log('[watch] Observando arquivos .md... (Ctrl+C para parar)');
  fs.watch(DIR, { persistent: true }, (event, filename) => {
    if (filename && filename.startsWith('prompt-') && filename.endsWith('.md')) {
      console.log(`[watch] ${filename} alterado`);
      try { build(); } catch (e) { console.error('[erro]', e.message); }
    }
  });
}
