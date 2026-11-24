// Staged walk-through. One picture, one stage per click, one caption per stage.
// The stages share one grid cell, so the box is always as tall as the tallest
// stage and Back/Next never move. The arrow keys work from anywhere on the page.
//
//   <div class="walk" data-walk>
//     <div class="walk-stage" data-caption="What happens here">...</div>
//   </div>
//
// With several walks on a page, the arrow keys drive the last one used
// (the first one until then).
document.addEventListener('DOMContentLoaded', () => {
  let active = null;
  const walks = Array.from(document.querySelectorAll('[data-walk]')).map((el) => {
    const stages = Array.from(el.querySelectorAll('.walk-stage'));
    const box = document.createElement('div');
    box.className = 'walk-box';
    const caps = document.createElement('div');
    caps.className = 'walk-box walk-caption';
    stages.forEach((s) => {
      box.appendChild(s);
      const c = document.createElement('div');
      c.className = 'walk-stage';
      c.innerHTML = s.dataset.caption || '';
      caps.appendChild(c);
    });
    const bar = document.createElement('div');
    bar.className = 'walk-bar';
    bar.innerHTML = '<button type="button">&larr; Back</button><span></span><button type="button">Next &rarr;</button>';
    const [back, count, next] = bar.children;
    el.append(box, caps, bar);
    let i = 0;
    const show = (n) => {
      i = Math.max(0, Math.min(stages.length - 1, n));
      [box, caps].forEach((b) => Array.from(b.children).forEach((s, k) => s.classList.toggle('on', k === i)));
      count.textContent = `Step ${i + 1} of ${stages.length}`;
      back.disabled = i === 0;
      next.disabled = i === stages.length - 1;
    };
    const w = { step: (d) => { active = w; show(i + d); } };
    back.addEventListener('click', () => w.step(-1));
    next.addEventListener('click', () => w.step(1));
    show(0);
    return w;
  });
  active = walks[0] || null;
  document.addEventListener('keydown', (e) => {
    if (!active || e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowLeft') active.step(-1);
    if (e.key === 'ArrowRight') active.step(1);
  });
});
