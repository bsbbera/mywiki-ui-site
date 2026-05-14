import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

type FieldValue = string | number | boolean | null | undefined | Array<string | number>

function fmt(v: FieldValue): string | null {
  if (v === null || v === undefined) return null
  if (Array.isArray(v)) {
    const items = v.filter((x) => x !== null && x !== undefined).map((x) => String(x).trim())
    return items.length === 0 ? null : items.join(", ")
  }
  const s = String(v).trim()
  return s.length === 0 ? null : s
}

const Infobox: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter as Record<string, FieldValue> | undefined
  if (!fm) return null

  const pairs: Array<[string, string]> = []
  const push = (label: string, raw: FieldValue) => {
    const v = fmt(raw)
    if (v !== null) pairs.push([label, v])
  }

  push("Aliases", fm.aliases)
  push("Category", fm.category)
  push("Tags", fm.tags)
  push("Created", fm.Created ?? fm.created)
  push("Modified", fm["date modified"] ?? fm.modified)
  push("Status", fm.status)

  if (pairs.length === 0) return null

  const title = fmt(fm.title) ?? fileData.slug ?? "Note"

  return (
    <aside class={classNames(displayClass, "tg-infobox")}>
      <header>{title}</header>
      <dl>
        {pairs.map(([k, v]) => (
          <>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </>
        ))}
      </dl>
    </aside>
  )
}

export default (() => Infobox) satisfies QuartzComponentConstructor
