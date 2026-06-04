const DEFAULT_FAMILY = "glass"
const FAMILY_KEY = "theme-family"
const CUSTOM_KEY = "theme-custom"
const NOANIM_KEY = "theme-no-anim"
const GLOBAL = "_global" // fonts + sizes apply to every family
const HEX6 = /^#[0-9a-fA-F]{6}$/

type Overrides = Record<string, Record<string, string>>

// Web fonts (subset of the font menus) lazy-loaded from Google Fonts on use.
const GOOGLE_FONTS: Record<string, string> = {
  Inter: "Inter:wght@400;500;600;700",
  Roboto: "Roboto:wght@400;500;700",
  "Open Sans": "Open+Sans:wght@400;600;700",
  Lato: "Lato:wght@400;700",
  Montserrat: "Montserrat:wght@400;500;600;700",
  Poppins: "Poppins:wght@400;500;600",
  Nunito: "Nunito:wght@400;600;700",
  "Source Sans 3": "Source+Sans+3:wght@400;600;700",
  "Work Sans": "Work+Sans:wght@400;500;600",
  "Fira Sans": "Fira+Sans:wght@400;500;700",
  Ubuntu: "Ubuntu:wght@400;500;700",
  "Noto Sans": "Noto+Sans:wght@400;600;700",
  Newsreader:
    "Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500",
  "Source Serif 4": "Source+Serif+4:wght@400;600;700",
  Merriweather: "Merriweather:wght@400;700",
  Lora: "Lora:wght@400;500;600",
  "Playfair Display": "Playfair+Display:wght@400;600;700",
  "JetBrains Mono": "JetBrains+Mono:wght@400;500;600",
  "Fira Code": "Fira+Code:wght@400;500",
  "Source Code Pro": "Source+Code+Pro:wght@400;500",
  "IBM Plex Mono": "IBM+Plex+Mono:wght@400;500",
  "Roboto Mono": "Roboto+Mono:wght@400;500",
}

function primaryFamily(value: string): string {
  const m = value.match(/^\s*['"]?([^'",]+)/)
  return m ? m[1].trim() : ""
}

function ensureFont(value: string) {
  const name = primaryFamily(value)
  const spec = GOOGLE_FONTS[name]
  if (!spec) return
  const id = `tc-font-${name.replace(/\s+/g, "-")}`
  if (document.getElementById(id)) return
  const link = document.createElement("link")
  link.id = id
  link.rel = "stylesheet"
  link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`
  document.head.appendChild(link)
}

function readOverrides(): Overrides {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_KEY) ?? "{}") as Overrides
  } catch {
    return {}
  }
}

function writeOverrides(o: Overrides) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(o))
}

function currentFamily(): string {
  return (
    document.documentElement.getAttribute("data-theme") ??
    localStorage.getItem(FAMILY_KEY) ??
    DEFAULT_FAMILY
  )
}

// Clear every custom prop we might have set, then re-apply globals + active family.
function applyOverrides(family: string) {
  const all = readOverrides()
  const root = document.documentElement
  for (const fam of Object.keys(all)) {
    for (const varName of Object.keys(all[fam] ?? {})) {
      root.style.removeProperty(varName)
    }
  }
  const apply = (group?: Record<string, string>) => {
    for (const [varName, value] of Object.entries(group ?? {})) {
      root.style.setProperty(varName, value)
      if (varName.endsWith("Font")) ensureFont(value)
    }
  }
  apply(all[GLOBAL]) // fonts + sizes first (theme-agnostic)
  apply(all[family]) // then the active family's colors
}

function applyAnimations() {
  const off = localStorage.getItem(NOANIM_KEY) === "1"
  document.documentElement.classList.toggle("no-anim", off)
}

// ---- run before paint: restore persisted look ----------------------------
applyAnimations()
applyOverrides(currentFamily())

function emitCustomChange(family: string) {
  const event: CustomEventMap["themecustomchange"] = new CustomEvent("themecustomchange", {
    detail: { family },
  })
  document.dispatchEvent(event)
}

function setGlobal(varName: string, value: string) {
  const o = readOverrides()
  o[GLOBAL] = { ...(o[GLOBAL] ?? {}), [varName]: value }
  writeOverrides(o)
  document.documentElement.style.setProperty(varName, value)
}

function syncControls(panel: HTMLElement, family: string) {
  // show only the active family's color group
  for (const group of panel.querySelectorAll<HTMLElement>(".tc-group")) {
    group.style.display = group.dataset.family === family ? "" : "none"
  }
  const nameEl = panel.querySelector<HTMLElement>(".tc-family-name")
  const label = panel.querySelector<HTMLElement>(`.tc-group[data-family="${family}"]`)?.dataset
    .label
  if (nameEl && label) nameEl.textContent = label

  const overrides = readOverrides()
  const famColors = overrides[family] ?? {}
  const globals = overrides[GLOBAL] ?? {}
  const computed = getComputedStyle(document.documentElement)

  for (const input of panel.querySelectorAll<HTMLInputElement>(".tc-color")) {
    const varName = input.dataset.var!
    const value = famColors[varName] ?? computed.getPropertyValue(varName).trim()
    if (HEX6.test(value)) input.value = value
  }

  for (const sel of panel.querySelectorAll<HTMLSelectElement>(".tc-font")) {
    const varName = sel.dataset.var!
    const override = globals[varName]?.trim()
    if (override) {
      // An explicit user override — reflect it (fall back to "Theme default" if the
      // stored value isn't one of the menu options).
      const match = [...sel.options].find((o) => o.value.trim() === override)
      sel.value = match ? match.value : ""
    } else {
      // No override → "Theme default" (value=""), so the theme's own font is shown
      // instead of mis-matching to "System default".
      sel.value = ""
    }
  }

  for (const slider of panel.querySelectorAll<HTMLInputElement>(".tc-slider")) {
    const varName = slider.dataset.var!
    const unit = slider.dataset.unit ?? ""
    const raw = (globals[varName] ?? computed.getPropertyValue(varName).trim()).trim()
    const num = parseFloat(raw)
    if (!Number.isNaN(num)) slider.value = String(num)
    const valEl = slider.parentElement?.querySelector<HTMLElement>(".tc-slider-val")
    if (valEl) valEl.textContent = `${slider.value}${unit}`
  }

  const anim = panel.querySelector<HTMLInputElement>(".tc-anim")
  if (anim) anim.checked = localStorage.getItem(NOANIM_KEY) !== "1"
}

document.addEventListener("nav", () => {
  const wrapper = document.querySelector<HTMLElement>(".theme-customizer")
  if (!wrapper) return
  const panel = wrapper.querySelector<HTMLElement>(".theme-customizer-panel")!
  const toggle = wrapper.querySelector<HTMLButtonElement>(".theme-customizer-toggle")!

  syncControls(panel, currentFamily())

  // open / close
  const onToggle = () => wrapper.classList.toggle("open")
  toggle.addEventListener("click", onToggle)
  window.addCleanup(() => toggle.removeEventListener("click", onToggle))

  // close on outside click
  const onDocClick = (e: MouseEvent) => {
    if (wrapper.classList.contains("open") && !wrapper.contains(e.target as Node)) {
      wrapper.classList.remove("open")
    }
  }
  document.addEventListener("click", onDocClick)
  window.addCleanup(() => document.removeEventListener("click", onDocClick))

  // colour pickers (per-family)
  for (const input of panel.querySelectorAll<HTMLInputElement>(".tc-color")) {
    const onInput = () => {
      const family = currentFamily()
      const varName = input.dataset.var!
      const overrides = readOverrides()
      overrides[family] = { ...(overrides[family] ?? {}), [varName]: input.value }
      writeOverrides(overrides)
      document.documentElement.style.setProperty(varName, input.value)
      emitCustomChange(family)
    }
    input.addEventListener("input", onInput)
    window.addCleanup(() => input.removeEventListener("input", onInput))
  }

  // font pickers (global)
  for (const sel of panel.querySelectorAll<HTMLSelectElement>(".tc-font")) {
    const onChange = () => {
      const varName = sel.dataset.var!
      if (sel.value === "") {
        // "Theme default" → drop the override so the theme's own font wins.
        const o = readOverrides()
        if (o[GLOBAL]) {
          delete o[GLOBAL][varName]
          writeOverrides(o)
        }
        document.documentElement.style.removeProperty(varName)
      } else {
        ensureFont(sel.value)
        setGlobal(varName, sel.value)
      }
      emitCustomChange(currentFamily())
    }
    sel.addEventListener("change", onChange)
    window.addCleanup(() => sel.removeEventListener("change", onChange))
  }

  // size sliders (global)
  for (const slider of panel.querySelectorAll<HTMLInputElement>(".tc-slider")) {
    const onInput = () => {
      const varName = slider.dataset.var!
      const unit = slider.dataset.unit ?? ""
      const value = `${slider.value}${unit}`
      setGlobal(varName, value)
      const valEl = slider.parentElement?.querySelector<HTMLElement>(".tc-slider-val")
      if (valEl) valEl.textContent = value
    }
    slider.addEventListener("input", onInput)
    window.addCleanup(() => slider.removeEventListener("input", onInput))
  }

  // animations toggle
  const anim = panel.querySelector<HTMLInputElement>(".tc-anim")
  if (anim) {
    const onAnim = () => {
      localStorage.setItem(NOANIM_KEY, anim.checked ? "0" : "1")
      applyAnimations()
    }
    anim.addEventListener("change", onAnim)
    window.addCleanup(() => anim.removeEventListener("change", onAnim))
  }

  // reset active family colors + the shared font/size globals
  const reset = panel.querySelector<HTMLButtonElement>(".tc-reset")
  if (reset) {
    const onReset = () => {
      const family = currentFamily()
      const overrides = readOverrides()
      const root = document.documentElement
      // Remove the inline props FIRST — once deleted from storage, applyOverrides
      // can no longer find them to clear, so they'd otherwise stick.
      for (const k of Object.keys(overrides[family] ?? {})) root.style.removeProperty(k)
      for (const k of Object.keys(overrides[GLOBAL] ?? {})) root.style.removeProperty(k)
      delete overrides[family]
      delete overrides[GLOBAL]
      writeOverrides(overrides)
      applyOverrides(family)
      syncControls(panel, family)
      emitCustomChange(family)
    }
    reset.addEventListener("click", onReset)
    window.addCleanup(() => reset.removeEventListener("click", onReset))
  }

  // react to a family switch from the ThemeSelector
  const onFamilyChange = () => {
    const family = currentFamily()
    applyOverrides(family)
    syncControls(panel, family)
  }
  document.addEventListener("themefamilychange", onFamilyChange)
  window.addCleanup(() => document.removeEventListener("themefamilychange", onFamilyChange))
})

export {}
