// Stage diagram: one SVG, one stage per click, one caption per stage.
// <div class="stages" data-stages>
//   <svg ...><g data-layer="a">...</g><g data-layer="b">...</g></svg>
//   <div class="stage-captions"><p data-show="a">Caption</p><p data-show="a b">Next</p></div>
// </div>
// data-show lists every layer visible at that stage. Captions share one grid cell, so the
// box stays the height of its tallest step and Back/Next never move (LEARNER §3).
// Left/right arrow keys drive the stage diagram most in view, from anywhere on the page.
document.addEventListener('DOMContentLoaded', () => {
  const all = Array.from(document.querySelectorAll('[data-stages]')).map((root) => {
    const caps = Array.from(root.querySelectorAll('[data-show]'));
    const layers = Array.from(root.querySelectorAll('[data-layer]'));
    const bar = document.createElement('div');
    bar.className = 'stage-bar';
    bar.innerHTML = '<button type="button">&larr; Back</button><button type="button">Next &rarr;</button><span></span>';
    root.appendChild(bar);
    const [back, next, count] = bar.children;
    let at = 0;
    const show = (i) => {
      at = Math.max(0, Math.min(caps.length - 1, i));
      const on = caps[at].dataset.show.split(/\s+/);
      layers.forEach((l) => { l.style.opacity = on.includes(l.dataset.layer) ? 1 : 0; });
      caps.forEach((c, n) => c.classList.toggle('on', n === at));
      back.disabled = at === 0;
      next.disabled = at === caps.length - 1;
      count.textContent = `step ${at + 1} of ${caps.length}`;
    };
    back.onclick = () => show(at - 1);
    next.onclick = () => show(at + 1);
    show(0);
    return { root, step: (d) => show(at + d) };
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    const seen = (r) => {
      const b = r.getBoundingClientRect();
      return Math.min(b.bottom, innerHeight) - Math.max(b.top, 0);
    };
    const best = all.slice().sort((a, b) => seen(b.root) - seen(a.root))[0];
    if (best && seen(best.root) > 0) { e.preventDefault(); best.step(e.key === 'ArrowRight' ? 1 : -1); }
  });
});
