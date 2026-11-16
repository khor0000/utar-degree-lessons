// Two reusable activities. Both keep a constant height, so buttons never move (LEARNER §3).
//
// Tap-to-explore diagram:
// <div class="stages" data-explore>
//   <svg><g class="pick" data-pick="x" >...</g></svg>
//   <div class="stage-captions"><p data-panel="">Start text</p><p data-panel="x">Detail</p></div>
// </div>
//
// Sorting game:
// <div class="sorter" data-sort data-bins="One|Two">
//   <div data-card="One" data-why="Reason">Statement</div>
// </div>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-explore]').forEach((root) => {
    const picks = Array.from(root.querySelectorAll('[data-pick]'));
    const panels = Array.from(root.querySelectorAll('[data-panel]'));
    const show = (id) => {
      picks.forEach((p) => p.classList.toggle('on', p.dataset.pick === id));
      panels.forEach((p) => p.classList.toggle('on', p.dataset.panel === id));
    };
    picks.forEach((p) => {
      p.setAttribute('tabindex', '0');
      p.setAttribute('role', 'button');
      p.addEventListener('click', () => show(p.dataset.pick));
      p.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(p.dataset.pick); }
      });
    });
    show('');
  });

  document.querySelectorAll('[data-sort]').forEach((root) => {
    const bins = root.dataset.bins.split('|');
    const source = Array.from(root.querySelectorAll('[data-card]'));
    const data = source.map((c) => ({ text: c.innerHTML, bin: c.dataset.card, why: c.dataset.why }));
    root.innerHTML = '';
    const deck = document.createElement('div');
    deck.className = 'sort-deck';
    const cards = data.map((d) => {
      const el = document.createElement('div');
      el.className = 'sort-card';
      el.innerHTML = `<p class="sort-text"></p><p class="sort-why"></p>`;
      el.firstChild.innerHTML = d.text;
      el.lastChild.textContent = d.why;
      deck.appendChild(el);
      return el;
    });
    const end = document.createElement('div');
    end.className = 'sort-card';
    deck.appendChild(end);
    const buttons = document.createElement('div');
    buttons.className = 'sort-bins';
    const bar = document.createElement('div');
    bar.className = 'stage-bar';
    bar.innerHTML = '<button type="button">Next &rarr;</button><span></span>';
    root.append(deck, buttons, bar);
    const [next, count] = bar.children;
    const binEls = bins.map((b) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = b;
      buttons.appendChild(btn);
      return btn;
    });
    let order = [];
    let at = 0;
    let score = 0;
    const paint = () => {
      const done = at >= order.length;
      cards.forEach((c, i) => {
        c.classList.toggle('on', !done && order[at] === i);
        c.classList.remove('answered', 'right', 'wrong');
      });
      end.classList.toggle('on', done);
      binEls.forEach((b) => { b.disabled = done; b.classList.remove('right', 'wrong'); });
      next.disabled = true;
      next.textContent = done ? 'Play again' : 'Next →';
      if (done) {
        end.textContent = `${score} of ${order.length} right. Press Play again to reshuffle.`;
        next.disabled = false;
      }
      count.textContent = done ? '' : `card ${at + 1} of ${order.length}`;
    };
    const start = () => {
      order = data.map((_, i) => i);
      for (let i = order.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      at = 0;
      score = 0;
      paint();
    };
    binEls.forEach((btn, b) => {
      btn.onclick = () => {
        const i = order[at];
        const good = bins[b] === data[i].bin;
        if (good) score += 1;
        cards[i].classList.add('answered', good ? 'right' : 'wrong');
        binEls.forEach((x, n) => {
          x.disabled = true;
          if (bins[n] === data[i].bin) x.classList.add('right');
          else if (n === b) x.classList.add('wrong');
        });
        next.disabled = false;
      };
    });
    next.onclick = () => {
      if (at >= order.length) { start(); return; }
      at += 1;
      paint();
    };
    start();
  });
});
