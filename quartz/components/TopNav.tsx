import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TopNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const base = pathToRoot(fileData.slug!)
  const tagsHref = base === "." ? "tags/" : `${base}/tags/`
  const homeHref = base === "." ? "./" : base
  return (
    <nav class={classNames(displayClass, "tg-topnav")}>
      <ul>
        <li>
          <a href={homeHref}>Main Page</a>
        </li>
        <li>
          <a href={tagsHref}>Tags</a>
        </li>
        <li>
          <a href="#" data-tg-random>
            Random
          </a>
        </li>
      </ul>
    </nav>
  )
}

TopNav.afterDOMLoaded = `
document.querySelectorAll('[data-tg-random]').forEach((el) => {
  el.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/sitemap.xml');
      if (!res.ok) return;
      const text = await res.text();
      const matches = [...text.matchAll(/<loc>([^<]+)<\\/loc>/g)].map((m) => m[1]);
      if (matches.length === 0) return;
      const target = matches[Math.floor(Math.random() * matches.length)];
      window.location.href = target;
    } catch (err) {
      console.warn('TG random navigation failed', err);
    }
  });
});
`

export default (() => TopNav) satisfies QuartzComponentConstructor
