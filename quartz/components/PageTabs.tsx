import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const GITHUB_REPO = "bsbbera/mywiki-ui-site"
const GITHUB_BRANCH = "main"

const PageTabs: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (slug === "index" || slug === "") {
    return null
  }
  const filePath = fileData.filePath ?? `content/${slug}.md`
  const sourceUrl = `https://github.com/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${filePath}`
  return (
    <nav class={classNames(displayClass, "tg-tabs")} aria-label="Page tabs">
      <a class="active" aria-current="page">
        Article
      </a>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        Source
      </a>
    </nav>
  )
}

export default (() => PageTabs) satisfies QuartzComponentConstructor
