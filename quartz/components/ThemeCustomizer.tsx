// @ts-ignore
import themeCustomizerScript from "./scripts/themecustomizer.inline"
import styles from "./styles/themecustomizer.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Per-family editable COLOR tokens. Only plain 6-digit-hex tokens are exposed
// (an <input type="color"> can't represent gradients / hsl()).
const FAMILY_TOKENS: { family: string; label: string; tokens: { var: string; label: string }[] }[] =
  [
    {
      family: "glass",
      label: "MyWiki Glass",
      tokens: [
        { var: "--mwg-accent", label: "Accent" },
        { var: "--mwg-accent-2", label: "Accent 2" },
        { var: "--mwg-gold", label: "Gold" },
        { var: "--mwg-danger", label: "Danger" },
        { var: "--mwg-bg-0", label: "Background" },
        { var: "--mwg-pane", label: "Surface" },
        { var: "--mwg-pane-2", label: "Card" },
        { var: "--mwg-dark-surface", label: "Dark card" },
        { var: "--mwg-text", label: "Body text" },
        { var: "--mwg-text-strong", label: "Headings" },
        { var: "--mwg-muted", label: "Muted text" },
        { var: "--mwg-code-fg", label: "Code" },
        { var: "--mwg-italic-color", label: "Italic" },
        { var: "--mwg-grad-1", label: "Gradient 1" },
        { var: "--mwg-grad-2", label: "Gradient 2" },
        { var: "--mwg-grad-3", label: "Gradient 3" },
        { var: "--mwg-grad-4", label: "Gradient 4" },
      ],
    },
    {
      family: "atelier",
      label: "Atelier",
      tokens: [
        { var: "--at-accent", label: "Accent" },
        { var: "--at-accent-2", label: "Accent 2" },
        { var: "--at-gold", label: "Gold" },
        { var: "--at-danger", label: "Danger" },
        { var: "--at-bg-0", label: "Background" },
        { var: "--at-pane", label: "Surface" },
        { var: "--at-card-surface", label: "Card" },
        { var: "--at-dark-surface", label: "Dark card" },
        { var: "--at-text", label: "Body text" },
        { var: "--at-text-strong", label: "Headings" },
        { var: "--at-muted", label: "Muted text" },
        { var: "--at-code-fg", label: "Code" },
        { var: "--at-code-surface", label: "Code background" },
        { var: "--at-italic-color", label: "Italic" },
      ],
    },
  ]

// Shared font menus (ported from the Obsidian "Anthropic Touch" Style Settings).
// Web fonts among these are lazy-loaded from Google Fonts on selection by the
// inline script; the rest are system fonts and need no network request.
const FONTS_SANS: { label: string; value: string }[] = [
  { label: "System default (sans)", value: "system-ui, -apple-system, 'Segoe UI', sans-serif" },
  { label: "Segoe UI", value: "'Segoe UI', system-ui, sans-serif" },
  { label: "Inter", value: "'Inter', system-ui, sans-serif" },
  { label: "Roboto", value: "'Roboto', system-ui, sans-serif" },
  { label: "Open Sans", value: "'Open Sans', system-ui, sans-serif" },
  { label: "Lato", value: "'Lato', system-ui, sans-serif" },
  { label: "Montserrat", value: "'Montserrat', system-ui, sans-serif" },
  { label: "Poppins", value: "'Poppins', system-ui, sans-serif" },
  { label: "Nunito", value: "'Nunito', system-ui, sans-serif" },
  { label: "Source Sans", value: "'Source Sans 3', 'Source Sans Pro', system-ui, sans-serif" },
  { label: "Work Sans", value: "'Work Sans', system-ui, sans-serif" },
  { label: "Fira Sans", value: "'Fira Sans', system-ui, sans-serif" },
  { label: "Ubuntu", value: "'Ubuntu', system-ui, sans-serif" },
  { label: "Noto Sans", value: "'Noto Sans', system-ui, sans-serif" },
  { label: "Helvetica Neue", value: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  { label: "Arial", value: "Arial, Helvetica, sans-serif" },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
  { label: "Trebuchet MS", value: "'Trebuchet MS', Tahoma, sans-serif" },
  { label: "Georgia (serif)", value: "Georgia, 'Times New Roman', serif" },
  { label: "Times New Roman (serif)", value: "'Times New Roman', Times, serif" },
  { label: "Garamond (serif)", value: "Garamond, 'EB Garamond', Georgia, serif" },
  { label: "Palatino (serif)", value: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" },
  { label: "Newsreader (serif)", value: "'Newsreader', Georgia, serif" },
  { label: "Source Serif (serif)", value: "'Source Serif 4', Georgia, serif" },
  { label: "Merriweather (serif)", value: "'Merriweather', Georgia, serif" },
  { label: "Lora (serif)", value: "'Lora', Georgia, serif" },
  { label: "Playfair Display (serif)", value: "'Playfair Display', Georgia, serif" },
]

const FONTS_MONO: { label: string; value: string }[] = [
  { label: "JetBrains Mono", value: "'JetBrains Mono', ui-monospace, monospace" },
  { label: "Cascadia Code", value: "'Cascadia Code', ui-monospace, monospace" },
  { label: "Consolas", value: "Consolas, ui-monospace, monospace" },
  { label: "SF Mono / system", value: "ui-monospace, SFMono-Regular, Menlo, monospace" },
  { label: "Fira Code", value: "'Fira Code', ui-monospace, monospace" },
  { label: "Source Code Pro", value: "'Source Code Pro', ui-monospace, monospace" },
  { label: "IBM Plex Mono", value: "'IBM Plex Mono', ui-monospace, monospace" },
  { label: "Roboto Mono", value: "'Roboto Mono', ui-monospace, monospace" },
  { label: "Courier New", value: "'Courier New', Courier, monospace" },
]

// Global typography sliders (apply to every theme). Defaults match _shared.scss.
const SLIDERS: {
  var: string
  label: string
  min: number
  max: number
  step: number
  unit: string
}[] = [
  { var: "--mwg-content-size", label: "Body size", min: 0.8, max: 1.3, step: 0.05, unit: "rem" },
  { var: "--mwg-line-height", label: "Line height", min: 1.3, max: 2.2, step: 0.05, unit: "" },
  { var: "--mwg-h1-size", label: "H1 size", min: 1.2, max: 3, step: 0.05, unit: "rem" },
  { var: "--mwg-h2-size", label: "H2 size", min: 1.1, max: 2.5, step: 0.05, unit: "rem" },
  { var: "--mwg-h3-size", label: "H3 size", min: 1, max: 2, step: 0.05, unit: "rem" },
]

const FONT_SELECTS: { var: string; label: string; options: { label: string; value: string }[] }[] =
  [
    { var: "--bodyFont", label: "Body font", options: FONTS_SANS },
    { var: "--headerFont", label: "Heading font", options: FONTS_SANS },
    { var: "--codeFont", label: "Mono font", options: FONTS_MONO },
  ]

const ThemeCustomizer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "theme-customizer")}>
      <button class="theme-customizer-toggle" aria-label="Customize theme" title="Customize theme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      <div class="theme-customizer-panel">
        <div class="tc-header">
          Customize <span class="tc-family-name"></span>
        </div>

        <div class="tc-section-label">Colors</div>
        {FAMILY_TOKENS.map((group) => (
          <div class="tc-group" data-family={group.family} data-label={group.label}>
            {group.tokens.map((t) => (
              <label class="tc-row">
                <span>{t.label}</span>
                <input type="color" class="tc-color" data-var={t.var} />
              </label>
            ))}
          </div>
        ))}

        <div class="tc-section-label">Fonts</div>
        {FONT_SELECTS.map((f) => (
          <label class="tc-row">
            <span>{f.label}</span>
            <select class="tc-font" data-var={f.var}>
              {/* Empty value = no override → the active theme's own font wins. This
                  is what shows out of the box (e.g. Atelier → Inter / Newsreader),
                  instead of mis-reporting "System default". */}
              <option value="">Theme default</option>
              {f.options.map((o) => (
                <option value={o.value}>{o.label}</option>
              ))}
            </select>
          </label>
        ))}

        <div class="tc-section-label">Sizes</div>
        {SLIDERS.map((s) => (
          <label class="tc-row tc-slider-row">
            <span>{s.label}</span>
            <span class="tc-slider-wrap">
              <input
                type="range"
                class="tc-slider"
                data-var={s.var}
                data-unit={s.unit}
                min={s.min}
                max={s.max}
                step={s.step}
              />
              <span class="tc-slider-val"></span>
            </span>
          </label>
        ))}

        <div class="tc-section-label">Motion</div>
        <label class="tc-row tc-anim-row">
          <span>Animations</span>
          <input type="checkbox" class="tc-anim" checked />
        </label>

        <button class="tc-reset">Reset to theme defaults</button>
      </div>
    </div>
  )
}

ThemeCustomizer.beforeDOMLoaded = themeCustomizerScript
ThemeCustomizer.css = styles

export default (() => ThemeCustomizer) satisfies QuartzComponentConstructor
