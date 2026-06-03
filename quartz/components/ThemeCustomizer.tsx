// @ts-ignore
import themeCustomizerScript from "./scripts/themecustomizer.inline"
import styles from "./styles/themecustomizer.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Per-family editable tokens. Only plain 6-digit-hex tokens are exposed
// (an <input type="color"> can't represent gradients / hsl()).
const FAMILY_TOKENS: { family: string; label: string; tokens: { var: string; label: string }[] }[] =
  [
    {
      family: "glass",
      label: "MyWiki Glass",
      tokens: [
        { var: "--mwg-accent", label: "Accent" },
        { var: "--mwg-accent-2", label: "Accent 2" },
        { var: "--mwg-bg-0", label: "Background" },
        { var: "--mwg-text", label: "Body text" },
        { var: "--mwg-text-strong", label: "Headings" },
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
        { var: "--at-bg-0", label: "Background" },
        { var: "--at-text", label: "Body text" },
        { var: "--at-text-strong", label: "Headings" },
        { var: "--at-code-fg", label: "Code" },
        { var: "--at-italic-color", label: "Italic" },
      ],
    },
    {
      family: "tg",
      label: "Tolkien Gateway",
      tokens: [
        { var: "--tg-gold", label: "Gold" },
        { var: "--tg-gold-hover", label: "Gold hover" },
        { var: "--tg-surface-0", label: "Surface" },
        { var: "--tg-text", label: "Text" },
      ],
    },
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

        <label class="tc-row tc-size-row">
          <span>Text size</span>
          <select class="tc-fontsize">
            <option value="0.9rem">Small</option>
            <option value="1rem">Medium</option>
            <option value="1.1rem">Large</option>
          </select>
        </label>

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
