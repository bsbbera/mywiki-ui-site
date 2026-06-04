// @ts-ignore
import themeSelectorScript from "./scripts/themeselector.inline"
import styles from "./styles/themeselector.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Source of truth for selectable theme families. Add a new entry here (and a
// matching quartz/styles/themes/_<value>.scss) to expose a new theme.
export const THEMES: { value: string; label: string }[] = [
  { value: "glass", label: "MyWiki Glass" },
  { value: "atelier", label: "Atelier" },
]

const ThemeSelector: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <select
      class={classNames(displayClass, "theme-selector")}
      aria-label="Select site theme"
      title="Select site theme"
    >
      {THEMES.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
}

ThemeSelector.beforeDOMLoaded = themeSelectorScript
ThemeSelector.css = styles

export default (() => ThemeSelector) satisfies QuartzComponentConstructor
