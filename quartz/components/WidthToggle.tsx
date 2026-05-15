// WidthToggle: 4-preset reading-width control (narrow, normal, wide, full).
// The control auto-tracks the viewport on load + resize. Clicking a button is
// a momentary override that lasts until the next resize event.
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { JSX } from "preact"

type Preset = {
  key: string
  label: string
  icon: JSX.Element
}

function widthIcon(rectX: number, rectW: number) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
    >
      <rect x="0.7" y="0.7" width="22.6" height="12.6" rx="1.5" />
      <rect x={rectX} y="3" width={rectW} height="8" fill="currentColor" stroke="none" />
    </svg>
  )
}

const PRESETS: Preset[] = [
  { key: "narrow", label: "Narrow column", icon: widthIcon(9, 6) },
  { key: "normal", label: "Normal width", icon: widthIcon(6, 12) },
  { key: "wide", label: "Wide column", icon: widthIcon(3, 18) },
  { key: "full", label: "Full width (top menu bar)", icon: widthIcon(1, 22) },
]

const WidthToggle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div
      class={classNames(displayClass, "width-toggle")}
      role="group"
      aria-label="Reading width"
    >
      {PRESETS.map((p) => (
        <button
          class="width-btn"
          data-width={p.key}
          title={p.label}
          aria-label={p.label}
        >
          {p.icon}
        </button>
      ))}
    </div>
  )
}

WidthToggle.afterDOMLoaded = `
(function () {
  const VALID = ['narrow', 'normal', 'wide', 'full'];

  // Pick the largest preset that fits without stowing the right sidebar.
  // 'full' is opt-in only — it can never be auto-selected.
  function autoPick() {
    const w = window.innerWidth;
    if (w < 900) return 'narrow';
    if (w < 1300) return 'normal';
    return 'wide';
  }

  function apply(preset) {
    if (!VALID.includes(preset)) preset = autoPick();
    document.documentElement.setAttribute('data-reading-width', preset);
    document.querySelectorAll('.width-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.width === preset);
      b.setAttribute('aria-pressed', String(b.dataset.width === preset));
    });
  }

  let resizeTimer = null;
  function onResize() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // On resize, snap back to auto-tracking. Manual click is momentary.
      apply(autoPick());
    }, 100);
  }

  function ensureNavToggle() {
    const sidebar = document.querySelector('.sidebar.left');
    if (!sidebar || sidebar.querySelector('.nav-toggle')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Browse navigation');
    btn.setAttribute('title', 'Browse');
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M2 4h12 M2 8h12 M2 12h12"/></svg>' +
      '<span>Browse</span>';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      sidebar.classList.toggle('nav-open');
    });
    if (!document.__tgNavOutsideBound) {
      document.__tgNavOutsideBound = true;
      document.addEventListener('click', function (e) {
        if (sidebar.classList.contains('nav-open') && !sidebar.contains(e.target)) {
          sidebar.classList.remove('nav-open');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') sidebar.classList.remove('nav-open');
      });
    }
    // Insert right after the search/darkmode flex group so it sits between
    // search and the page content (visually grouped with the toolbar items).
    const after = sidebar.querySelector('.flex-component') || sidebar.querySelector('.page-title');
    if (after && after.parentNode === sidebar) {
      sidebar.insertBefore(btn, after.nextSibling);
    } else {
      sidebar.appendChild(btn);
    }
  }

  function init() {
    ensureNavToggle();
    apply(autoPick());
    document.querySelectorAll('.width-btn').forEach(function (b) {
      if (b.dataset.tgBound === '1') return;
      b.dataset.tgBound = '1';
      b.addEventListener('click', function () {
        apply(b.dataset.width);
      });
    });
  }

  if (!window.__tgWidthResizeBound) {
    window.__tgWidthResizeBound = true;
    window.addEventListener('resize', onResize);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('nav', init);
})();
`

export default (() => WidthToggle) satisfies QuartzComponentConstructor
