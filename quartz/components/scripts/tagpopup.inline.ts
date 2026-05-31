type TagEntry = { slug: string; title: string; tags: string[] }

function tagFromEl(el: HTMLAnchorElement): string | null {
  if (el.dataset.tag) return el.dataset.tag
  const href = el.getAttribute("href") ?? ""
  const m = href.match(/tags\/(.+?)(?:\/index)?(?:\.html)?$/)
  if (m) return decodeURIComponent(m[1])
  const txt = el.textContent?.trim().replace(/^#/, "")
  return txt && txt.length > 0 ? txt : null
}

document.addEventListener("nav", async () => {
  const popup = document.querySelector<HTMLElement>(".tag-popup")
  if (!popup) return
  const titleEl = popup.querySelector<HTMLElement>(".tag-popup-title")!
  const listEl = popup.querySelector<HTMLElement>(".tag-popup-list")!
  const closeBtn = popup.querySelector<HTMLButtonElement>(".tag-popup-close")!
  const backdrop = popup.querySelector<HTMLElement>(".tag-popup-backdrop")!

  const close = () => popup.classList.remove("open")
  const onEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") close()
  }
  closeBtn.addEventListener("click", close)
  backdrop.addEventListener("click", close)
  document.addEventListener("keydown", onEsc)
  window.addCleanup(() => {
    closeBtn.removeEventListener("click", close)
    backdrop.removeEventListener("click", close)
    document.removeEventListener("keydown", onEsc)
  })

  const data = (await fetchData) as unknown as Record<string, TagEntry>

  const openForTag = (tag: string) => {
    const norm = tag.toLowerCase()
    const matches = Object.values(data)
      .filter((d) => Array.isArray(d.tags) && d.tags.some((t) => String(t).toLowerCase() === norm))
      .sort((a, b) => a.title.localeCompare(b.title))

    titleEl.textContent = `#${tag}`
    listEl.replaceChildren()

    if (matches.length === 0) {
      const li = document.createElement("li")
      li.className = "tag-popup-empty"
      li.textContent = "No notes with this tag."
      listEl.appendChild(li)
    } else {
      for (const m of matches) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = `/${m.slug}`
        a.className = "internal"
        a.textContent = m.title || m.slug
        a.addEventListener("click", close)
        li.appendChild(a)
        listEl.appendChild(li)
      }
    }
    popup.classList.add("open")
  }

  for (const el of document.querySelectorAll<HTMLAnchorElement>("a.tag-link")) {
    const handler = (e: MouseEvent) => {
      const tag = tagFromEl(el)
      if (!tag) return
      e.preventDefault()
      e.stopPropagation()
      openForTag(tag)
    }
    el.addEventListener("click", handler)
    window.addCleanup(() => el.removeEventListener("click", handler))
  }
})

export {}
