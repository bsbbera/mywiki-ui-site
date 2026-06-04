const DEFAULT_FAMILY = "glass"
const FAMILY_KEY = "theme-family"

// Selectable theme families. Anything else (e.g. a removed theme still stored in a
// returning visitor's localStorage, like the retired "tg") falls back to the default.
const VALID_FAMILIES = new Set(["glass", "atelier"])
const normalizeFamily = (family: string | null): string =>
  family && VALID_FAMILIES.has(family) ? family : DEFAULT_FAMILY

// Fonts required by themes that need web fonts. A CSS @import inside the SCSS
// bundle would be emitted mid-file and ignored, so we inject a <link> instead.
const FONT_HREFS: Record<string, string> = {
  // Glass now uses Segoe UI (system) for UI/headings; only the code face is a web font.
  glass: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap",
  // Atelier: Newsreader serif display + Inter body + JetBrains Mono code.
  atelier:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap",
}

function ensureThemeFonts(family: string) {
  const href = FONT_HREFS[family]
  if (!href) return
  const id = `theme-font-${family}`
  if (document.getElementById(id)) return
  const link = document.createElement("link")
  link.id = id
  link.rel = "stylesheet"
  link.href = href
  document.head.appendChild(link)
}

function applyFamily(family: string) {
  document.documentElement.setAttribute("data-theme", family)
  ensureThemeFonts(family)
}

// Run before paint to avoid a flash of the wrong theme.
const savedFamily = normalizeFamily(localStorage.getItem(FAMILY_KEY))
applyFamily(savedFamily)
// Heal a stale/removed value so the rest of the app reads a valid family.
if (localStorage.getItem(FAMILY_KEY) !== savedFamily) {
  localStorage.setItem(FAMILY_KEY, savedFamily)
}

const emitFamilyChangeEvent = (family: string) => {
  const event: CustomEventMap["themefamilychange"] = new CustomEvent("themefamilychange", {
    detail: { family },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const current = normalizeFamily(document.documentElement.getAttribute("data-theme"))

  for (const el of document.getElementsByClassName("theme-selector")) {
    const select = el as HTMLSelectElement
    // reflect the active family in the control
    select.value = current

    const onChange = () => {
      const family = select.value
      applyFamily(family)
      localStorage.setItem(FAMILY_KEY, family)
      emitFamilyChangeEvent(family)
    }

    select.addEventListener("change", onChange)
    window.addCleanup(() => select.removeEventListener("change", onChange))
  }
})

export {}
