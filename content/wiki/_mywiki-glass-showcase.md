---
cssclass: wide-page
tags:
  - index
date modified: Sunday, June 14th 2026, 10:17:13 pm
publish: true
---
 
# MyWiki Glass — UI showcase

> [!info] Dev/test note
> Theme test harness for *MyWiki Glass* — not wiki content. Open in **reading** + **live preview**,
> **light** + **dark**. Pick element styles in *Settings → Style Settings → MyWiki Glass*.

A short paragraph with **bold**, *italic* (note the teal), ~~strike~~, `inline code`, a [[wikilink]] and an
[external link](https://obsidian.md). The card / column / utility syntax is **identical** to the companion
*Anthropic Touch* theme — only the skin (frosted glass + blue + Segoe UI) changes.

## Tags

#Cloud #DataEngineering #Storage #person #python #Architecture

---

# Text formatting

## Headings adapt to the theme

# H1 — From zero to *merged*
## H2 — Painters of *the local scene*
### H3 — The *discipline* of the studio
#### H4 — a quieter heading
##### H5 — quieter still
###### H6 — THE SMALL LABEL

Body text sits in crisp Segoe UI with comfortable line-height. A paragraph with
**bold**, *italic* (note the teal), ~~strikethrough~~, `inline code`, ==highlight==, a
[[wikilink]] and an [external link](https://obsidian.md). Italic *words* and *phrases* carry the
teal accent that defines the theme.

## Reusable text classes

Drop these on any text with inline HTML — they restyle with the palette automatically:

<span class="at-kicker">THE SKILL</span>

<span class="at-badge">01 · ALL-TIME CONTRIBUTOR</span>  <span class="at-badge ghost">DRAFT</span>

<span class="at-display">From zero to <em>merged</em>, in an afternoon.</span>

<p class="at-lead">A larger, calmer lead paragraph for introductions — muted, roomy, and unmistakably on-theme.</p>

<span class="at-stat">37</span> commits · <span class="at-stat">#01</span> external rank · you can write <span class="at-mark">a soft blue highlight</span> anywhere.

**Gradient text** — `at-gradient` is an Apple-style multi-stop gradient in **Glass**, a single accent colour in **Anthropic Touch**:
<span class="at-gradient at-2xl">*Apple Intelligence.*</span> · override the ramp per use: <span class="at-gradient at-xl" style="--grad: linear-gradient(100deg,#3d8fe6,#ff8a3d)">custom ramp</span>.

**Inline font size** — resize any run of text in place:
normal, <span class="at-xs">at-xs</span>, <span class="at-sm">at-sm</span>, <span class="at-lg">at-lg</span>, <span class="at-xl">at-xl</span>, <span class="at-2xl">at-2xl</span>, <span class="at-3xl">at-3xl</span>. Or an exact size: <span class="at-fs" style="--fs: 30px">30px</span>.

**Composition** — utility classes keep all theme styling. Resized text still gets teal *italic*,
**bold**, [links](https://obsidian.md) and `code`:
<span class="at-2xl">Big text with *teal italic* and **bold** inside</span>.

## Lists

**Unordered**
- First item with a themed marker
- Second item
    - Nested item
    - Another nested item
- Third item

**Ordered**
1. Hand the line to the agent
2. Wake the skill
3. Watch it ship

**Tasks**
- [ ] An open task
- [x] A done task

## Standard callouts (themed icons + labels)

> [!note] Note
> A standard note callout — recolored to the theme with a mono small-caps title.

> [!tip] Tip
> Tips and success take the green-leaning accent.

> [!warning] Warning
> Warnings use the amber accent.

> [!question] Question
> Questions/help in a calm hue.

> [!danger] Danger
> Failure/danger/bug in deep red.

> [!quote] Quote
> Quote/cite styled to match the blockquote treatment.

---
### List

- UL 1
- UL 2
- UL 3

1. OL 1
2. OL 2
3. OL 3

# The card system

**Layout:** wrap cards in `> [!grid]` — they flow into as many columns as fit (resize the pane to see
it reflow). Lock columns with `|cols2`/`|cols3`/`|cols4`; let a card span with `|span2`/`|spanfull`.
**Style:** `> [!card|<style>]` — `skill · section · step · profile · honor · channels · hero`.
**Surface:** add `dark` or `accent`.

> [!warning] Nesting syntax matters
> Child cards use **`>>`** and must be separated by a **blank `>` line**. Miss the separator and
> Obsidian merges them into one card. (Same rule as the `[!multi-column]` snippet.)

## Flexible grid — any number of cards, auto-flow

> [!grid]
>
>> [!card] <font color="#ff0000">First</font>
>> A plain card. Add as many as you like; the grid wraps them into rows automatically.
>
>> [!card] Second
>> Resize the window — columns reflow like a web page.
>
>> [!card] Third
>> Min card width is set in Style Settings (*Card grid — min card width*).
>
>> [!card] Fourth
>> The fourth wraps to the next row when space runs out.

## Card width distribution — `wN` ratios

Just like multi-column notes, cards can be distributed by ratio. Add `w1…w10` to each card in a
`> [!grid]`; the row switches to ratio mode and every card takes its share.

> [!grid]
>
>> [!card|w3]
>> ###### W3
>> ### 30%
>> A narrow sidebar card.
>
>> [!card|w7]
>> ###### W7
>> ### 70%
>> A wider main card taking the rest — distribute cards by ratio exactly like multi-column notes.

> [!grid]
>
>> [!card|w2]
>> ###### W2
>> ### 50%
>> Half the row.
>
>> [!card|w1]
>> ###### W1
>> ### 25%
>> A quarter.
>
>> [!card|w1]
>> ###### W1
>> ### 25%
>> A quarter.

## skill

> [!card|skill] Let the *agent* ship for you.
> ###### THE SKILL
> For makers who'd rather not touch the code. The whole contribution lives in a single skill.
> ```bash
> curl -sSL https://raw.githubusercontent.com/example/install.sh
> ```
> 1. **Hand the line to the agent** — paste the command above into the agent. It installs itself.
> 2. **Wake the skill** — type `/od-contribute`, or tell the agent to run what you installed.
> 3. **Half a minute to the gallery** — your piece is bound for the repo in about thirty seconds.

## section — 3 columns in a grid

> [!grid|cols3]
>
>> [!card|section]
>> ###### I · VOCATION
>> ### Painters of *the local scene*.
>> Designers, developers, organizers: the kind who already gather others.
>> - **Local Atelier Host:** keep a recurring meetup alive.
>> - **Online community lead:** Discord, WeChat, Telegram.
>
>> [!card|section]
>> ###### II · PATRONAGE
>> ### What the *atelier* extends.
>> Not a volunteer badge. A working bond, with budget and access.
>> - **A page on the site:** portrait, city, biography.
>> - **First sight:** beta features, roadmap previews.
>
>> [!card|section]
>> ###### III · COVENANT
>> ### The *discipline* of the studio.
>> A modest commitment, but binding.
>> - **Convene** at least one event per month.
>> - **Welcome the new hand.** Usher newcomers.


## profile — frosted and dark

> [!grid|cols3]
>
>> [!card|profile]
>> ![avatar](https://avatars.githubusercontent.com/u/9919?s=200)
>> ###### MAINTAINER
>> ### Nagendra
>> A data engineer's instinct for production truth: find the failure, fix it properly.
>> [github](https://github.com/)
>
>> [!card|profile dark]
>> ![avatar](https://avatars.githubusercontent.com/u/9919?s=200)
>> ###### FROM THE STUDIO
>> ### Koki
>> From the founding team. Wave at any time, on any question.
>
>> [!card|profile dark]
>> ![avatar](https://avatars.githubusercontent.com/u/9919?s=200)
>> ###### STEWARD OF THE ROOM
>> ### Victor
>> Keeps the room warm, the doors open, the conversation flowing.

## honor + channels

> [!grid|cols2]
>
>> [!card|honor]
>> ###### 01 · ALL-TIME CONTRIBUTOR
>> ![avatar](https://avatars.githubusercontent.com/u/9919?s=200)
>> ## bulai0408
>> > The long tail matters: design systems, docs fixes and small repairs are how an open design language becomes dependable.
>>
>> ---
>> **37** commits  ·  **#01** external rank
>
>> [!card|channels]
>> | Channel | Label |
>> | --- | --- |
>> | showcase | work shipped |
>> | plugin | builders |
>> | beta-test | early feedback |
>> | help | unstuck |

## step tiles — named icons

Step/stat tiles can carry an **intent-named icon**: add `icon-search`, `icon-file`, `icon-chat`,
`icon-list`, `icon-book`, `icon-cloud`, `icon-database` or `icon-layers` next to `step`.

> [!grid|cols4]
>
>> [!card|step icon-search]
>> ###### NOTES
>> ### 480+
>> interlinked & evergreen
>
>> [!card|step icon-layers]
>> ###### FIELDS
>> ### 10
>> tech · ML · cloud · books · science
>
>> [!card|step icon-cloud]
>> ###### CLOUD
>> ### 4
>> GCP · AWS · Azure · Databricks
>
>> [!card|step icon-book]
>> ###### BOOKS
>> ### 12
>> reference texts, fully noted

## hero — four-step CTA (dark header + step tiles)

> [!grid|cols5]
>
>> [!card|hero dark spanfull]
>> ###### FOUR STEPS · ANY SKILL LEVEL
>> # From zero to *merged*, in an afternoon.
>> Whether you're a designer, a writer, or an engineer, there's a contribution shape for you.
>>
>> **[Read the contributing guide →](https://obsidian.md)**
>
>> [!card|step]
>> ###### Step 01
>> ### Find a *spark*.
>> Browse the good-first-issues list, or open a new issue.
>
>> [!card|step]
>> ###### Step 02
>> ### Open a *draft* PR.
>> Fork, branch, push. Mark it draft.
>
>> [!card|step]
>> ###### Step 03
>> ### Review with *a human*.
>> A maintainer reviews within 24h. Never gatekept.
>
>> [!card|step]
>> ###### Step 04
>> ### Merge → *card*.
>> The bot mints your honor card the moment you're merged.
>
>>[!card|step]
>> ###### Step 05
>> ### Merge → *card*.
>> The bot mints your honor card the moment you're merged.

## hero — accent (blue) with nested profiles + channels

> [!card|hero accent spanfull split]
> ###### Where contributors hang out
>
>> [!grid|cols2]
>>
>>> [!card|profile dark]
>>> ![Koki](https://cdn.discordapp.com/avatars/1433334626641907803/659cec9ed75df0156957ff23e81e27f1.webp?size=256)
>>> ###### From the studio
>>> ### Koki
>>> From the founding team. Hopes the Discord stays a good place to be. Wave at any time, on any question.
>>
>>> [!card|profile dark]
>>> ![Victor](https://cdn.discordapp.com/avatars/1174739309509759008/60d038042d7246391a6c982d6508892e.webp?size=256)
>>> ###### Steward of the room
>>> ### Victor
>>> A practiced hand at Discord and community-tending. Keeps the room warm, the doors open, the conversation flowing.
>>
>>> [!card|channels dark spanfull]
>>> | Channel | Label |
>>> | --- | --- |
>>> | showcase | work shipped |
>>> | plugin | builders |
>>> | beta-test | early feedback |
>>> | help | unstuck |
>
> # Talk to the people who'll *review your PR*.
>
> The front line of the agent-design era opens here. Step in. Bring what you're making.
>
> **[Join the Discord](https://discord.gg/3C6EWXbdQQ)** [GitHub Discussions](https://github.com/)

---

## Infobox — right-floated, text wraps beside

> [!infobox|right] Cloud Storage
> ## Amazon S3
> *Durable object store for the web.*
>
> | Field | Value |
> | --- | --- |
> | Type | Object store |
> | Vendor | AWS |
> | Released | 2006 |
> | Durability | 11 nines |

A plain **text** infobox — title becomes the accent tag, a name + description, then key/value fields.

> "I am Subhadip."
> <cite>Subhadip</cite>

It floats **right** and the body wraps beside it. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus
auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.

## Infobox — left-floated, with a dark footer caption

> [!infobox|left] Spark · Engine
> ## Apache Spark
> *In-memory distributed compute.*
>
> | Field | Value |
> | --- | --- |
> | Paradigm | Batch · stream |
> | Language | Scala |
> | First release | 2014 |
>
> **Maintained by the ASF**
> Open source · Apache 2.0

Floats **left**, text wraps to the right. The last **bold** line plus the line after it fuse into a dark
caption footer at the bottom of the card — fully optional. Hover the card to see the lift and the tag
straighten. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.

## Infobox — centered (no wrap)

> [!infobox|center] Giotto Tier
> ## Top 99.9%
> *Reserved for the long-tail heroes.*
>
> | Field | Value |
> | --- | --- |
> | Points | 31 |
> | PRs | 1 |
> | Rank | #01 |

A centered infobox sits in the middle of the column with text above and below (no wrap).

---

# Multi-column notes (plain content, any ratio)

Wrap columns in `> [!columns]`, each column is `>> [!col]`. Mix weights `w1…w10` for any
ratio. Columns hold normal note content (headings, lists, callouts) — no card styling.

## Two columns — 3 : 7

> [!columns]
>
>> [!col|w3]
>> ### Narrow
>> - point one
>> - point two
>
>> [!col|w7]
>> ### Wide
>> This column is roughly 70% of the width. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
>> Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

## Three columns — 3 : 3 : 4

> [!columns]
>
>> [!col|w3]
>> ### One
>> First third-ish.
>
>> [!col|w3]
>> ### Two
>> Second third-ish.
>
>> [!col|w4]
>> ### Three
>> The widest of the three.

## Two columns — 7 : 3, with a divider

> [!columns|ruled]
>
>> [!col|w7]
>> ### Main
>> The bulk of the content lives here. A `ruled` columns block draws a hairline between columns.
>> <span class="at-fs" style="--fs: 30px">exactly *30px*</span>
>
>> [!col|w3]
>> ### Aside
>> A slim sidebar.

## Equal columns (no weights)

> [!columns|ruled]
>
>> [!col]
>> ### A
>> Equal width.
>
>> [!col]
>> ### B
>> Equal width.
>
>> [!col]
>> ### C
>> Equal width.


### Code *Block*

All code blocks share one frosted surface, line-number gutter and copy button. With the **code-emitter**
plugin a runnable block (e.g. `python`) gets a ▶ run button; its output renders **inside** the same
surface — and the runnable block's background is matched to the other code blocks.

```text
I am Subhadip
```

```python
print("Hello")
```

```sql
SELECT *
```
