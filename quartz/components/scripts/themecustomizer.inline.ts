const DEFAULT_FAMILY = "glass"
const FAMILY_KEY = "theme-family"
const CUSTOM_KEY = "theme-custom"
const NOANIM_KEY = "theme-no-anim"
const FONTSIZE_KEY = "theme-fontsize"
const DEFAULT_FONTSIZE = "0.9rem"
const HEX6 = /^#[0-9a-fA-F]{6}$/

type Overrides = Record<string, Record<string, string>>

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

// Remove every custom prop we might have set, then apply the active family's.
function applyOverrides(family: string) {
  const all = readOverrides()
  const root = document.documentElement
  for (const fam of Object.keys(all)) {
    for (const varName of Object.keys(all[fam] ?? {})) {
      root.style.removeProperty(varName)
    }
  }
  for (const [varName, value] of Object.entries(all[family] ?? {})) {
    root.style.setProperty(varName, value)
  }
}

function applyAnimations() {
  const off = localStorage.getItem(NOANIM_KEY) === "1"
  document.documentElement.classList.toggle("no-anim", off)
}

function applyFontSize() {
  const size = localStorage.getItem(FONTSIZE_KEY) ?? DEFAULT_FONTSIZE
  document.documentElement.style.setProperty("--mwg-content-size", size)
}

// ---- run before paint: restore persisted look ----------------------------
applyAnimations()
applyFontSize()
applyOverrides(currentFamily())

function emitCustomChange(family: string) {
  const event: CustomEventMap["themecustomchange"] = new CustomEvent("themecustomchange", {
    detail: { family },
  })
  document.dispatchEvent(event)
}

function syncControls(panel: HTMLElement, family: string) {
  // show only the active family's group
  for (const group of panel.querySelectorAll<HTMLElement>(".tc-group")) {
    group.style.display = group.dataset.family === family ? "" : "none"
  }
  const nameEl = panel.querySelector<HTMLElement>(".tc-family-name")
  const label = panel.querySelector<HTMLElement>(`.tc-group[data-family="${family}"]`)?.dataset
    .label
  if (nameEl && label) nameEl.textContent = label

  const overrides = readOverrides()[family] ?? {}
  for (const input of panel.querySelectorAll<HTMLInputElement>(".tc-color")) {
    const varName = input.dataset.var!
    const stored = overrides[varName]
    const value =
      stored ?? getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
    if (HEX6.test(value)) input.value = value
  }

  const anim = panel.querySelector<HTMLInputElement>(".tc-anim")
  if (anim) anim.checked = localStorage.getItem(NOANIM_KEY) !== "1"

  const fontsize = panel.querySelector<HTMLSelectElement>(".tc-fontsize")
  if (fontsize) fontsize.value = localStorage.getItem(FONTSIZE_KEY) ?? DEFAULT_FONTSIZE
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

  // colour pickers
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

  // text size
  const fontsize = panel.querySelector<HTMLSelectElement>(".tc-fontsize")
  if (fontsize) {
    const onSize = () => {
      localStorage.setItem(FONTSIZE_KEY, fontsize.value)
      applyFontSize()
    }
    fontsize.addEventListener("change", onSize)
    window.addCleanup(() => fontsize.removeEventListener("change", onSize))
  }

  // reset active family
  const reset = panel.querySelector<HTMLButtonElement>(".tc-reset")
  if (reset) {
    const onReset = () => {
      const family = currentFamily()
      const overrides = readOverrides()
      delete overrides[family]
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
