import './style.css';
import { Game } from './game.js';

/* ── Aetherfall bootstrap ───────────────────────────────────────
   The renderer is created inside Game. If WebGL is unavailable we
   replace the viewport with a readable notice instead of showing a
   permanently blank canvas. */
try {
  const game = new Game();
  window.aetherfall = game;

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      game.audio?.dispose?.();
      game.renderer?.dispose?.();
    });
  }
} catch (error) {
  console.error('Aetherfall failed to start:', error);
  const viewport = document.getElementById('viewport');
  const creator = document.getElementById('creator');
  if (creator) creator.classList.add('hidden');
  if (viewport) {
    viewport.innerHTML = `
      <div style="position:absolute;inset:0;display:grid;place-items:center;padding:2rem;background:#081018;color:#e8ddc4;font-family:monospace;text-align:center;">
        <div>
          <p style="font-size:14px;letter-spacing:.18em;color:#d8b26a;">AETHERFALL COULD NOT OPEN</p>
          <p style="max-width:46ch;line-height:1.6;font-size:13px;">This browser could not create a WebGL renderer. Enable hardware acceleration or try a recent Chrome, Edge, Firefox, or Safari release.</p>
          <pre style="max-width:70ch;white-space:pre-wrap;opacity:.6;font-size:11px;text-align:left;">${String(error?.message || error)}</pre>
        </div>
      </div>`;
  }
}
