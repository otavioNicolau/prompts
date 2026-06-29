const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const DIR  = __dirname;

// ── SSE clients ───────────────────────────────────────────────────────────────
const clients = new Set();

function notify() {
  for (const res of clients) res.write('data: reload\n\n');
}

// ── .md parser ────────────────────────────────────────────────────────────────
function parseMd(file) {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const m   = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
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
  meta.body   = body;

  return meta;
}

function getPrompts() {
  return fs.readdirSync(DIR)
    .filter(f => f.startsWith('prompt-') && f.endsWith('.md'))
    .map(f => parseMd(path.join(DIR, f)))
    .filter(Boolean)
    .sort((a, b) => a.order - b.order);
}

// ── file watcher ──────────────────────────────────────────────────────────────
fs.watch(DIR, { persistent: true }, (event, filename) => {
  if (filename && filename.startsWith('prompt-') && filename.endsWith('.md')) {
    console.log(`[watch] ${filename} — notificando browser`);
    notify();
  }
});

// ── MIME types ────────────────────────────────────────────────────────────────
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' };

// ── HTTP server ───────────────────────────────────────────────────────────────
http.createServer((req, res) => {

  // SSE — live reload
  if (req.url === '/sse') {
    res.writeHead(200, {
      'Content-Type':  'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection':    'keep-alive',
    });
    res.write('data: connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  // API — retorna prompts como JSON
  if (req.url === '/api/prompts') {
    const prompts = getPrompts();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(prompts));
    return;
  }

  // Arquivos estáticos
  let decodedUrl;
  try { decodedUrl = decodeURIComponent(req.url === '/' ? 'index.html' : req.url); }
  catch { res.writeHead(400); res.end(); return; }

  const filePath = path.join(DIR, decodedUrl);
  if (!filePath.startsWith(DIR)) { res.writeHead(403); res.end(); return; }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || (ext === '.mp4' ? 'video/mp4' : 'application/octet-stream');
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });

}).listen(PORT, () => {
  console.log(`[server] http://localhost:${PORT}`);
  console.log('[server] Observando .md... (Ctrl+C para parar)');
});
