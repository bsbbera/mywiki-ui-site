const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id
    const tocEntryElements = document.querySelectorAll(`a[data-for="${slug}"]`)
    const windowHeight = entry.rootBounds?.height
    if (windowHeight && tocEntryElements.length > 0) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.add("in-view"))
      } else {
        tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.remove("in-view"))
      }
    }
  }
})

// Collapsing the TOC also folds the right rail and hands the width back to
// the article (the grid transition in the theme CSS animates the change).
function syncTocCollapsedState(collapsed: boolean) {
  document.documentElement.setAttribute("data-toc-collapsed", collapsed ? "true" : "false")
  localStorage.setItem("toc-collapsed", collapsed ? "true" : "false")
}

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
  syncTocCollapsedState(this.classList.contains("collapsed"))
}

function setupToc() {
  const stored = localStorage.getItem("toc-collapsed") === "true"
  document.documentElement.setAttribute("data-toc-collapsed", stored ? "true" : "false")
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    // restore the persisted state on every page load / SPA nav
    button.classList.toggle("collapsed", stored)
    button.setAttribute("aria-expanded", stored ? "false" : "true")
    content.classList.toggle("collapsed", stored)
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})
