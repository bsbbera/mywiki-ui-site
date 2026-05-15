import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CollapsibleHeadings: QuartzComponent = () => null

CollapsibleHeadings.afterDOMLoaded = `
(function () {
  const HEADING_RE = /^H([2-3])$/;

  function rankOf(el) {
    const m = el.tagName.match(HEADING_RE);
    return m ? parseInt(m[1], 10) : null;
  }

  function siblingsUntilNextHeading(start) {
    const startRank = rankOf(start);
    const out = [];
    let n = start.nextElementSibling;
    while (n) {
      const m = n.tagName.match(/^H([1-6])$/);
      if (m && parseInt(m[1], 10) <= startRank) break;
      out.push(n);
      n = n.nextElementSibling;
    }
    return out;
  }

  function attach() {
    const article = document.querySelector("article");
    if (!article) return;

    const headings = article.querySelectorAll(":scope > h2, :scope > h3");
    headings.forEach((h) => {
      if (h.dataset.tgCollapsible === "1") return;
      h.dataset.tgCollapsible = "1";
      h.classList.add("tg-collapsible");

      const chev = document.createElement("span");
      chev.className = "tg-chevron";
      chev.setAttribute("aria-hidden", "true");
      chev.textContent = "▾";
      h.prepend(chev);

      h.style.cursor = "pointer";
      h.setAttribute("role", "button");
      h.setAttribute("tabindex", "0");

      const toggle = () => {
        const collapsed = h.classList.toggle("tg-collapsed");
        const sibs = siblingsUntilNextHeading(h);
        sibs.forEach((s) => {
          if (collapsed) {
            s.dataset.tgPrevDisplay = s.style.display || "";
            s.style.display = "none";
          } else {
            s.style.display = s.dataset.tgPrevDisplay || "";
          }
        });
      };

      h.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "A") return;
        toggle();
      });
      h.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attach);
  } else {
    attach();
  }
  document.addEventListener("nav", attach);
})();
`

export default (() => CollapsibleHeadings) satisfies QuartzComponentConstructor
