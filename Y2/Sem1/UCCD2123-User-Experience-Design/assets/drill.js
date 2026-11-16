// Closed-book drill: shuffles the questions on every load, so the order itself never gets memorised.
// <div class="drill" data-drill>
//   <div class="drill-item" data-drill-item>...question, textarea, details.reveal...</div>
// </div>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-drill]').forEach((drill) => {
    const items = Array.from(drill.querySelectorAll('[data-drill-item]'));
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach((item) => drill.appendChild(item));
  });
});
