// @ts-ignore
import tagPopupScript from "./scripts/tagpopup.inline"
import styles from "./styles/tagpopup.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const TagPopup: QuartzComponent = () => {
  return (
    <div class="tag-popup" aria-hidden="true">
      <div class="tag-popup-backdrop"></div>
      <div class="tag-popup-panel" role="dialog" aria-modal="true" aria-label="Notes with tag">
        <div class="tag-popup-header">
          <span class="tag-popup-title"></span>
          <button class="tag-popup-close" aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul class="tag-popup-list"></ul>
      </div>
    </div>
  )
}

TagPopup.afterDOMLoaded = tagPopupScript
TagPopup.css = styles

export default (() => TagPopup) satisfies QuartzComponentConstructor
