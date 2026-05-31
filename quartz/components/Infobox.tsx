import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { JSX } from "preact"

type FieldValue = string | number | boolean | null | undefined | Array<string | number>

function fmtScalar(v: FieldValue): string | null {
  if (v === null || v === undefined) return null
  if (Array.isArray(v)) {
    const items = v.filter((x) => x !== null && x !== undefined).map((x) => String(x).trim())
    return items.length === 0 ? null : items.join(", ")
  }
  const s = String(v).trim()
  return s.length === 0 ? null : s
}

// Explicit tag → colour mapping (matches the Obsidian setup); unknown tags fall
// back to a stable hash so a given tag is always the same colour.
// Buckets: c0 blue · c1 green · c2 amber · c3 rose · c4 neutral/grey.
const TAG_COLORS: Record<string, string> = {
  gcp: "tag-c4",
  aws: "tag-c2",
  azure: "tag-c0",
  databricks: "tag-c2",
  dataengineering: "tag-c1",
  data: "tag-c1",
  analytics: "tag-c1",
  exam: "tag-c2",
  certification: "tag-c3",
  sql: "tag-c0",
  datawarehouse: "tag-c4",
  index: "tag-c4",
}
function tagColorClass(tag: string): string {
  const key = tag.toLowerCase()
  if (TAG_COLORS[key]) return TAG_COLORS[key]
  let h = 0
  for (let i = 0; i < tag.length; i++) h = (h * 31 + tag.charCodeAt(i)) >>> 0
  return `tag-c${h % 4}`
}

function tagList(raw: FieldValue): string[] | null {
  if (!Array.isArray(raw)) return null
  const tags = raw
    .filter((x) => x !== null && x !== undefined)
    .map((x) => String(x).trim())
    .filter((x) => x.length > 0)
  return tags.length === 0 ? null : tags
}

const Infobox: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter as Record<string, FieldValue> | undefined
  if (!fm) return null

  const pairs: Array<[string, JSX.Element | string]> = []
  const pushScalar = (label: string, raw: FieldValue) => {
    const v = fmtScalar(raw)
    if (v !== null) pairs.push([label, v])
  }
  const pushTags = (label: string, raw: FieldValue) => {
    const tags = tagList(raw)
    if (!tags) return
    pairs.push([
      label,
      <span class="tg-infobox-tags">
        {tags.map((tag) => {
          const href = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <a class={`internal tag-link ${tagColorClass(tag)}`} href={href} data-tag={tag}>
              #{tag}
            </a>
          )
        })}
      </span>,
    ])
  }

  pushScalar("Aliases", fm.aliases)
  pushScalar("Category", fm.category)
  pushTags("Tags", fm.tags)
  pushScalar("Created", fm.Created ?? fm.created)
  pushScalar("Modified", fm["date modified"] ?? fm.modified)
  pushScalar("Status", fm.status)

  if (pairs.length === 0) return null

  return (
    <aside class={classNames(displayClass, "tg-infobox tg-infobox-top")}>
      <header>Properties</header>
      <div class="tg-infobox-grid">
        {pairs.map(([k, v]) => (
          <div class="tg-infobox-row">
            <span class="tg-infobox-key">{k}</span>
            <span class="tg-infobox-val">{v}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default (() => Infobox) satisfies QuartzComponentConstructor
