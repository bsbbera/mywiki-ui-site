---
date modified: Monday, May 11th 2026, 6:39:29 pm
publish: true
---
# LLM Wiki

A personal second-brain maintained by Cascade (Windsurf agent).
Inspired by Andrej Karpathy's LLM Wiki pattern.

## Purpose

A structured, interlinked, **life-long** knowledge base. Today its depth is
in **technology** (data engineering, cloud, software engineering, databases),
but the architecture is designed to grow into philosophy, art, science, and
any other field of knowledge over time.

The agent (Cascade) maintains the wiki. The human curates raw sources, asks
questions, and guides direction.

## Top-level folder structure

`wiki/` contains exactly two kinds of top-level folders.

### 1. Fields of knowledge — a discipline that groups related sub-topics

- `technology/`  → engineering, computer science, cloud platforms, tooling
- `philosophy/`  → reserved for future (ethics, metaphysics, epistemology…)
- `art/`         → reserved for future (photography, painting, music, cinema…)
- `science/`     → reserved for future (physics, cosmology, medicine, biology…)

Can be more based on topic.

### 2. Cross-cutting metadata — referenced from every field

- `people/`  → biographical stub pages for any person mentioned anywhere
- `books/`   → stub pages with cover image for any book mentioned anywhere

### Operational files (never delete, never move)

- `wiki/Master Home.md`         — human-facing global dashboard
- `wiki/index.md`               — agent-facing catalog (machine-readable index of every page; consulted before every ingest)
- `wiki/log.md`                 — append-only record of all ingest operations
- `wiki/technology/Technology Home.md` — sub-hub for the technology field
- `wiki/technology/cloud/Cloud Home.md` — sub-hub for cloud platforms
- Each domain has its own `<Domain> Home.md` (e.g. `Databases Home.md`, `GCP Home.md`)

### Inside `technology/`

```
technology/
├── Technology Home.md
├── data-engineering/         (DE concepts, sub-divided by discipline)
│   ├── data-engineering.md   (the DE hub — content + nav)
│   ├── data-architecture/
│   ├── data-ingestion/
│   ├── data-management/
│   ├── data-modeling/
│   ├── data-processing/
│   ├── data-storage/
│   └── (data-pipeline.md, data-warehousing.md, data-ethics.md, faq.md, …)
├── software-engineering/     (CAP, idempotence, sharding, patterns…)
│   └── Software Engineering Home.md
├── databases/                (ACID, normalization, theory, specific systems)
│   └── Databases Home.md
├── cloud/                    (all cloud platforms grouped)
│   ├── Cloud Home.md
│   ├── gcp/   (foundations / compute / storage / databases / analytics / certifications)
│   ├── aws/
│   ├── azure/
│   └── databricks/
├── tools/                    (vault-wide tooling reference)
│   └── Tools Home.md
└── guides/                   (vault-wide practitioner playbooks)
    └── Guides Home.md
```

## Ingest workflow

When the user drops a new source into `raw/` and asks for ingest, the
agent's job has **three responsibilities** in this order:

1. **Categorize** — place every new note in the correct folder. categorize it based on topic.
2. **Interlink** — wikilink to existing pages + add grouped Related-pages callouts. add correct properties like category and correct tag to better search for future.
3. **Record** — update `wiki/index.md` and append to `wiki/log.md`.

### Phase 1 — Understand

1. Read the full source document. it can be .pdf, .md, .doc anything.
2. Use `brave-search` and `puppeteer` MCPs to enrich with web context.
3. Read `wiki/index.md` to discover what pages already exist.
4. Discuss key takeaways with the user before writing anything.

### Phase 2 — Categorize (route every new note correctly)

For each entity / concept extracted, route by this decision tree:

- Is it a **person**? → `wiki/people/<kebab-case-name>.md`
- Is it a **book**?   → `wiki/books/<kebab-case-title>.md` (extract cover image from the web)
	- If books then which field or topic. Based on that interlinked, update/create.
	- For example if the RAW is a Book on GCP put the author in People, put the Book details in Book and GCP details in various notes in Technology/ Science.
	- Same things apply to All kind of RAW.
- **Person**/**Book** properly tag to identify the Field/topic.
- Otherwise it belongs to a **field of knowledge**:
  - **Technology** → `wiki/technology/<sub>/...`
    - Cloud platform-specific (BigQuery, S3, ADLS, Delta Lake…) → `technology/cloud/<gcp|aws|azure|databricks>/<category>/`
    - Data-engineering concept (modeling, ingestion, storage, processing, architecture, management) → `technology/data-engineering/<sub-discipline>/`
    - Software-engineering / distributed-systems concept (CAP, sharding, idempotence, patterns) → `technology/software-engineering/`
    - Database theory (ACID, normalization) or a specific RDBMS/NoSQL system → `technology/databases/`
    - Cross-cutting tool catalog page (file formats, languages, orchestrators…) → `technology/tools/`
    - Cross-cutting practitioner guide (SQL, testing, governance, cost…) → `technology/guides/`
  - **Philosophy / Art / Science / …** → create the top-level folder if it doesn't exist, with sub-categorization (e.g. `art/photography/`, `science/cosmology/`, `philosophy/ethics/`).
- If the correct field is genuinely unclear, **ask the user** before creating any folder.

### Phase 3 — Write & interlink

5. Create or update **one page per major concept** (one concept = one file). Do not create a summary page named after the source if a concept page already exists; if a stale source-summary page exists, delete it and reroute its inbound links.
6. For every person / book / cross-domain entity mentioned, create the corresponding stub in `people/` or `books/`. Stubs carry only frontmatter, a one-line description, and a `Related pages` block.
7. Add `[[wikilinks]]` inline through the prose to connect concepts. Prefer **bare filenames** (`[[bigquery]]`) over folder-qualified paths — Obsidian resolves them automatically. Use a folder-qualified path only when filenames collide (e.g. `[[technology/cloud/gcp/analytics/data-catalog]]` vs `[[data-catalog]]` for the DE concept).
8. Set frontmatter: `title`, `Created`, `date modified`, `aliases`, `category`, `tags`, `banner`, `dg-publish`.
8a. **Pick the right template** from `_my_template/` by note type (see [[#Infobox standard]]): `Person Note`, `Book Note`, `Tool Note`, `Cloud Service Note`, or `Concept Note`. Every note keeps the **daily-quote block** from the base template.
8b. **Add an infobox only to named entities** (people, books, tools/software, cloud services, platforms, certifications — and future art/science entities). **Concepts, theory, patterns, guides, overview/feature pages get NO infobox.** Fill every infobox field **from the internet** (use `brave-search` / `puppeteer`); leave a field blank only if it genuinely has no public value.
9. End every page with a grouped `## Related pages` block — **use `[!grid]` with `[!card]` per topical group, never a flat bullet list**:

   ```markdown
   ## Related pages

   > [!grid]
   >
   >> [!card] Sister concepts
   >> [[concept-a]], [[concept-b]]
   >
   >> [!card] Products
   >> [[bigquery]], [[redshift]]
   >
   >> [!card] People & books
   >> [[edgar-codd]], [[the-data-warehouse-toolkit]]
   ```

### Phase 4 — Record (always do both)

10. Update `wiki/index.md` — add every new page with a one-line description in the correct domain section. **This is what future ingest runs read first** to discover existing pages, so it must stay exhaustive and accurate.
11. Append to `wiki/log.md` — date, source filename, list of files created / modified / deleted, and a one-paragraph summary of what changed.

A single source may touch 10–15 pages. That is normal.

## Page format

Every wiki page follows this structure:

```markdown
---
title: <% tp.file.title %>
Created:
  - <% tp.file.creation_date("YYYY-MM-DD") %>
date modified: <auto>
aliases:
category:
tags:
banner:
publish: true
---

> [!infobox|right]              <- ENTITIES ONLY (omit for concepts)
> # <Title>
> ###### <Type>
> | | |
> | --- | --- |
> | **Field** | value (from the internet) |

---
<daily-quote block from the base template>

---

Main content. Use clear headings and informative paragraphs.
Link related concepts inline using [[wikilinks]].
Use codeblocks, examples, excalidraw diagrams where useful.

## Interesting facts (if any)

## Interview questions

## Related pages
> [!note] Topic group 1
> - [[related-concept-1]]
> - [[related-concept-2]]

> [!example] Topic group 2
> - [[related-concept-3]]
```

The infobox sits **at the top of the body, directly after the frontmatter** so it floats to the right. The float renders in **Reading view** and **Live Preview** with the Anthropic Touch theme.

## Infobox standard

Infoboxes use the Anthropic Touch callout `> [!infobox|right]`. Rules:

- **Only named entities get an infobox.** Concepts / theory / patterns / guides / overview & feature pages do **not**.
- **All values come from the internet** — verify with `brave-search` / `puppeteer` at ingest time.
- Inside table cells, escape wikilink pipes: `[[note\|Label]]`.
- One template per type lives in `_my_template/`.

| Note type | Template | Infobox? | Fields |
| --- | --- | --- | --- |
| Person | `Person Note.md` | Yes | Born, Died, Nationality, Domain, Known for, Notable works, Institution |
| Book | `Book Note.md` | Yes | cover, Author(s), Publisher, Published, Domain, Pages, ISBN |
| Tool / software | `Tool Note.md` | Yes | Developer, Type, Domain, Initial release, Written in, License, Website |
| Cloud service | `Cloud Service Note.md` | Yes | Provider, Type, Category, Launched, Interface, Website |
| Certification | `Tool Note.md` (adapt) | Yes | Provider, Type, Level, Format, Validity |
| Concept / theory / pattern / guide / overview | `Concept Note.md` | **No** | — (prose only) |
| Artwork *(future)* | `Artwork Note.md` | Yes | Artist, Art style, Year, Medium, Dimensions, Location |
| Artist *(future)* | `Artist Note.md` | Yes | Born, Died, Nationality, Movement, Medium, Notable works |

When a **new domain** appears (art, science, philosophy…), create its `<Type> Note.md` template in `_my_template/` following this pattern, document its schema in the table above, then use it.

## Citation rules

- Every factual claim should reference its source file: `(source: filename.pdf)`.
- If two sources disagree, note the contradiction explicitly.
- If a claim has no source, mark it as needing verification.

## Question answering

When the user asks a question:

1. Read `wiki/index.md` to discover relevant pages.
2. Read those pages and synthesize an answer.
3. Cite specific wiki pages in the response.
4. If the answer is not in the wiki, say so clearly.
5. If the answer is valuable, offer to save it as a new page.

Good answers get filed back into the wiki so they compound over time.

## Lint

When asked to lint or audit the wiki:

- Check for contradictions between pages.
- Find orphan pages (no inbound links).
- Identify concepts mentioned but lacking their own page.
- Flag claims that may be outdated.
- Check page-format compliance (frontmatter, grouped Related-pages block).
- Report findings as a numbered list with suggested fixes.

## Hard rules

- **Never** modify anything in `raw/` — sources are immutable.
- **Never** delete `wiki/index.md`, `wiki/Master Home.md`, or `wiki/log.md`.
- **Always** update `wiki/index.md` and `wiki/log.md` after any ingest or restructure.
- **Never** create a new top-level folder under `wiki/` without explicit user approval — this changes the vault's organizing principle. The only valid top-level folders are fields of knowledge (`technology/`, `philosophy/`, `art/`, `science/`, …) and cross-cutting metadata (`people/`, `books/`).
- Page filenames are **lowercase-with-hyphens** (e.g. `machine-learning.md`). Home pages are the only exception: `<Domain> Home.md` (Title Case + space).
- When uncertain about categorization, **ask the user** before writing.
- Write in plain, clear language.
