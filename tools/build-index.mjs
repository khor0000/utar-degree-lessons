#!/usr/bin/env node
// Generates index.html pages for the lesson site. No dependencies.
//
// Pages written (all generated, never committed):
//   /index.html                         years
//   /Y*/index.html                      semesters
//   /Y*/Sem*/index.html                 courses
//   /Y*/Sem*/<course>/index.html        lessons (grouped by Tutorial) and reference
//
// Usage: node tools/build-index.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP = new Set(['.git', '.github', 'tools', 'node_modules']);

// ---------- helpers ----------

const NAMED = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: '—', ndash: '–', middot: '·', hellip: '…',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
};

function decode(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return String.fromCodePoint(code);
    }
    const v = NAMED[e.toLowerCase()];
    return v === undefined ? m : v;
  });
}

function stripTags(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ').trim();
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const enc = (name) => encodeURIComponent(name);

function subdirs(dir, pattern) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('.') && !SKIP.has(e.name))
    .map((e) => e.name)
    .filter((n) => (pattern ? pattern.test(n) : true))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
}

function htmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith('.html'))
    .map((e) => e.name);
}

// Sort 0006 < 0006a < 0006b < 0007. Files without a leading number go last.
function lessonCompare(a, b) {
  const ma = /^(\d+)([a-z]*)/i.exec(a);
  const mb = /^(\d+)([a-z]*)/i.exec(b);
  const ka = ma ? [0, Number(ma[1]), ma[2].toLowerCase()] : [1, 0, ''];
  const kb = mb ? [0, Number(mb[1]), mb[2].toLowerCase()] : [1, 0, ''];
  if (ka[0] !== kb[0]) return ka[0] - kb[0];
  if (ka[1] !== kb[1]) return ka[1] - kb[1];
  if (ka[2] !== kb[2]) return ka[2] < kb[2] ? -1 : 1;
  return a < b ? -1 : a > b ? 1 : 0;
}

function courseLabel(folder) {
  return folder.replace(/-/g, ' ');
}

function semLabel(folder) {
  return folder.replace(/^Sem(\d+)$/i, 'Sem $1');
}

function lessonInfo(file) {
  const html = fs.readFileSync(file, 'utf8');
  const t = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  const title = t ? stripTags(t[1]) : path.basename(file, '.html');

  let text = '';
  const eyebrow = /<([a-z0-9]+)\b[^>]*\bclass="[^"]*\beyebrow\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/i.exec(html);
  if (eyebrow) text = stripTags(eyebrow[2]);
  if (!text) {
    const body = /<body[^>]*>([\s\S]*)/i.exec(html);
    text = stripTags(body ? body[1] : html).slice(0, 400);
  }
  const tut = /\bTutorial\s+(\d+)\b/i.exec(text);
  return { title: title || path.basename(file, '.html'), group: tut ? `Tutorial ${tut[1]}` : 'Other' };
}

// ---------- page rendering ----------

const CSS = `
:root{--bg:#fbfaf7;--fg:#1d1d1f;--muted:#6b6b70;--line:#e3e1db;--card:#ffffff;--accent:#1a5fb4;--hover:#eef3fb;--focus:#1a5fb4}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--bg:#161618;--fg:#ececef;--muted:#9a9aa3;--line:#2e2e33;--card:#1f1f23;--accent:#7fb6ff;--hover:#24262d;--focus:#7fb6ff}}
:root[data-theme="dark"]{--bg:#161618;--fg:#ececef;--muted:#9a9aa3;--line:#2e2e33;--card:#1f1f23;--accent:#7fb6ff;--hover:#24262d;--focus:#7fb6ff}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;color-scheme:light dark}
body{margin:0;background:var(--bg);color:var(--fg);font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;line-height:1.5}
main{max-width:44rem;margin:0 auto;padding:1.25rem 16px 3rem}
nav.crumbs{font-size:.9rem;color:var(--muted);margin-bottom:.75rem;overflow-wrap:anywhere}
nav.crumbs a{color:var(--accent);text-decoration:none}
nav.crumbs a:hover{text-decoration:underline}
h1{font-size:1.5rem;line-height:1.25;margin:.25rem 0 1rem;overflow-wrap:anywhere}
h2{font-size:.85rem;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin:1.6rem 0 .5rem}
input[type=search]{width:100%;font:inherit;padding:.7rem .85rem;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--fg);margin-bottom:.25rem;-webkit-appearance:none;appearance:none}
input[type=search]:focus{outline:2px solid var(--focus);outline-offset:1px}
ul.list{list-style:none;margin:0;padding:0;border:1px solid var(--line);border-radius:12px;background:var(--card);overflow:hidden}
ul.list li+li{border-top:1px solid var(--line)}
ul.list a{display:flex;justify-content:space-between;align-items:center;gap:12px;min-height:48px;padding:.7rem 1rem;color:var(--fg);text-decoration:none;overflow-wrap:anywhere}
ul.list a:hover,ul.list a:focus-visible{background:var(--hover);color:var(--accent)}
.meta{color:var(--muted);font-size:.85rem;white-space:nowrap}
.note{color:var(--muted);margin:.75rem 0}
[hidden]{display:none!important}
`;

function hrefTo(depth, level) {
  // Relative link from a page at `depth` up to the index of ancestor `level`.
  return '../'.repeat(depth - level) + 'index.html';
}

// segments: labels for each level below root, e.g. ['Y2', 'Sem 1', 'UCCD2123 ...']
function crumbsFor(segments) {
  const depth = segments.length;
  const crumbs = [{ label: 'Home', href: hrefTo(depth, 0) }];
  segments.forEach((label, i) => crumbs.push({ label, href: hrefTo(depth, i + 1) }));
  crumbs[crumbs.length - 1].href = null; // current page
  return crumbs;
}

function renderPage({ title, segments, heading, sections, emptyText, searchable }) {
  const crumbs = crumbsFor(segments);
  const crumbHtml = crumbs
    .map((c) => (c.href === null ? `<span aria-current="page">${esc(c.label)}</span>` : `<a href="${esc(c.href)}">${esc(c.label)}</a>`))
    .join(' <span aria-hidden="true">›</span> ');

  const nonEmpty = sections.filter((s) => s.items.length > 0);
  const listHtml = nonEmpty
    .map((s) => {
      const h = s.heading ? `<h2>${esc(s.heading)}</h2>\n` : '';
      const lis = s.items
        .map((it) => {
          const search = esc(`${it.label} ${s.heading || ''}`.toLowerCase());
          const meta = it.meta ? `<span class="meta">${esc(it.meta)}</span>` : '';
          return `      <li data-search="${search}"><a href="${esc(it.href)}"><span>${esc(it.label)}</span>${meta}</a></li>`;
        })
        .join('\n');
      return `<section data-group>\n${h}    <ul class="list">\n${lis}\n    </ul>\n  </section>`;
    })
    .join('\n  ');

  const search = searchable && nonEmpty.length
    ? `<label class="sr-only" for="q">Filter this list</label>\n  <input type="search" id="q" placeholder="Filter by name" autocomplete="off">\n  <p id="nomatch" class="note" hidden>No matches.</p>`
    : '';
  const empty = nonEmpty.length ? '' : `<p class="note">${esc(emptyText)}</p>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>${esc(title)} · UTAR degree lessons</title>
<style>${CSS}</style>
</head>
<body>
<main>
  <nav class="crumbs" aria-label="Breadcrumb">${crumbHtml}</nav>
  <h1>${esc(heading)}</h1>
  ${search}
  ${empty}
  ${listHtml}
</main>
<script>
(function () {
  var q = document.getElementById('q');
  if (!q) return;
  var items = document.querySelectorAll('li[data-search]');
  var groups = document.querySelectorAll('section[data-group]');
  var none = document.getElementById('nomatch');
  q.addEventListener('input', function () {
    var t = q.value.trim().toLowerCase();
    var shown = 0;
    items.forEach(function (li) {
      var ok = !t || li.getAttribute('data-search').indexOf(t) !== -1;
      li.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (s) { s.hidden = !s.querySelector('li:not([hidden])'); });
    if (none) none.hidden = shown > 0;
  });
})();
</script>
</body>
</html>
`;
}

function writeIndex(dirAbs, html) {
  const out = path.join(dirAbs, 'index.html');
  fs.writeFileSync(out, html, 'utf8');
  return path.relative(ROOT, out).split(path.sep).join('/');
}

// ---------- walk and build ----------

const written = [];

// Root: years
const years = subdirs(ROOT, /^Y\d+$/i);
written.push(
  writeIndex(
    ROOT,
    renderPage({
      title: 'Home',
      segments: [],
      heading: 'UTAR degree lessons',
      searchable: false,
      emptyText: 'No years yet.',
      sections: [
        {
          heading: null,
          items: years.map((y) => ({
            label: y,
            href: `${enc(y)}/index.html`,
            meta: `${subdirs(path.join(ROOT, y), /^Sem\d+$/i).length} semester(s)`,
          })),
        },
      ],
    })
  )
);

for (const year of years) {
  const yearDir = path.join(ROOT, year);
  const sems = subdirs(yearDir, /^Sem\d+$/i);

  written.push(
    writeIndex(
      yearDir,
      renderPage({
        title: year,
        segments: [year],
        heading: year,
        searchable: false,
        emptyText: 'No semesters yet.',
        sections: [
          {
            heading: null,
            items: sems.map((s) => ({
              label: semLabel(s),
              href: `${enc(s)}/index.html`,
              meta: `${subdirs(path.join(yearDir, s)).length} course(s)`,
            })),
          },
        ],
      })
    )
  );

  for (const sem of sems) {
    const semDir = path.join(yearDir, sem);
    const courses = subdirs(semDir);

    written.push(
      writeIndex(
        semDir,
        renderPage({
          title: `${year} ${semLabel(sem)}`,
          segments: [year, semLabel(sem)],
          heading: `${year} · ${semLabel(sem)}`,
          searchable: true,
          emptyText: 'No courses yet.',
          sections: [
            {
              heading: null,
              items: courses.map((c) => ({
                label: courseLabel(c),
                href: `${enc(c)}/index.html`,
              })),
            },
          ],
        })
      )
    );

    for (const course of courses) {
      const courseDir = path.join(semDir, course);
      const label = courseLabel(course);

      // Lessons, grouped by Tutorial N (first mention in the eyebrow or opening text).
      const groups = new Map();
      const lessonFiles = htmlFiles(path.join(courseDir, 'lessons')).sort(lessonCompare);
      for (const file of lessonFiles) {
        const info = lessonInfo(path.join(courseDir, 'lessons', file));
        if (!groups.has(info.group)) groups.set(info.group, []);
        groups.get(info.group).push({ label: info.title, href: `lessons/${enc(file)}` });
      }
      const groupNames = [...groups.keys()].sort((a, b) => {
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        return Number(/\d+/.exec(a)?.[0] ?? 0) - Number(/\d+/.exec(b)?.[0] ?? 0);
      });
      const sections = groupNames.map((g) => ({ heading: g, items: groups.get(g) }));

      const refFiles = htmlFiles(path.join(courseDir, 'reference')).sort(lessonCompare);
      const refInfos = refFiles.map((file) => ({
        label: lessonInfo(path.join(courseDir, 'reference', file)).title,
        href: `reference/${enc(file)}`,
      }));
      sections.push({ heading: 'Reference', items: refInfos });

      written.push(
        writeIndex(
          courseDir,
          renderPage({
            title: label,
            segments: [year, semLabel(sem), label],
            heading: label,
            searchable: true,
            emptyText: 'No lessons yet.',
            sections,
          })
        )
      );
    }
  }
}

for (const f of written) console.log(`wrote ${f}`);
console.log(`${written.length} index page(s) generated.`);
