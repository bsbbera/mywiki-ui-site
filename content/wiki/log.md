---
title: Operations Log
Created:
  - 2026-04-27
date modified: 2026-05-10
aliases:
  - Log
category: Log
tags:
  - log
banner:
dg-publish: true
publish: true
---
---

Append-only log of all wiki operations. Newest entries at the top.

---

## 2026-04-29 (sixth pass) — People + Books folders + Related-pages refactor

**Operator**: Cascade
**Trigger**: User updated `windsurf.md` with two new ingest rules:

1. **Step 5** — create `people/`, `books/`, optional `art/`, `science/` folders for notable connections; stub pages only (no body content); for books, fetch cover images.
2. **Step 11** — "Related pages" sections must use **topic-grouped callout blocks**, not flat lists.

User asked to **execute both retroactively across all pages**.

### New folders + stub pages

Created `wiki/people/` (17 stub pages) + `wiki/books/` (5 stub pages with cover image URLs from O'Reilly + Amazon).

**People** (sorted by impact):

- Edgar F. Codd, Ralph Kimball, Bill Inmon, Dan Linstedt, Zhamak Dehghani, Martin Kleppmann, Eric Brewer, Seth Gilbert + Nancy Lynch, Jay Kreps, Jeff Dean + Sanjay Ghemawat, Joe Reis + Matt Housley, Daniel Abadi, Greg Young, Martin Fowler, Andrej Karpathy, Doug Cutting, Matei Zaharia.

**Books**:

- *Designing Data-Intensive Applications* (Kleppmann)
- *The Data Warehouse Toolkit* (Kimball + Ross)
- *Fundamentals of Data Engineering* (Reis + Housley)
- *Building a Scalable Data Warehouse with Data Vault 2.0* (Linstedt + Olschimke)
- *Building the Data Warehouse* (Inmon)

Each stub follows the windsurf rule: minimal bio (people) / cover + 1-line description (books) + topic-grouped Related pages section. **No content beyond what's needed for navigation.**

### Related-pages refactor (~71 newly created pages)

Refactored every page created in pass 5 to convert flat bullet lists → topic-grouped callout blocks. Pattern:

```markdown
## Related pages

> [!multi-column]
>
>> [!card] Topic 1
>> [[link1|Label]], [[link2|Label]]
>
>
>> [!card] Topic 2
>> [[link3|Label]]


## 2026-04-29 (fifth pass) — Massive Data Engineering build-out (~71 new pages, ~150 sources)

**Operator**: Cascade
**Trigger**: User dropped a comprehensive `raw/` tree containing the full **data-engineering-wiki.com** content (Concepts/, Guides/, FAQ/, Tools/) plus opened request to ingest all of it. Per `windsurf.md` rule 4, all material organized under `wiki/data-engineering/` since that is the single subject.

### Source coverage

- **Concepts** (49 sources): Data Architecture (8), Data Ingestion (4), Data Management (5), Data Modeling (8), Data Processing (7), Data Storage (10), Software Engineering (11), top-level (3 — Pipeline, Sargable, Ethics).
- **Guides** (8 sources): Getting Started, SQL, Pipeline best practices, Testing, Governance, Cost, Messaging, Cloud Services Map.
- **FAQ** (10 sources, **collapsed into 1 page** per windsurf rule on consolidating small atomic pages).
- **Tools** (~80 sources, **aggregated into 9 catalog pages**) — categorized by purpose rather than per-tool sprawl.

### Folder structure created

```
wiki/data-engineering/
├── data-engineering.md          ← discipline overview
├── data-pipeline.md
├── sargable-expressions.md
├── data-ethics.md
├── faq.md                        ← all FAQ collapsed
├── concepts/
│   ├── data-architecture/        ← 8 pages
│   ├── data-ingestion/           ← 4 pages
│   ├── data-management/          ← 5 pages
│   ├── data-modeling/            ← 8 pages
│   ├── data-processing/          ← 7 pages
│   ├── data-storage/             ← 10 pages
│   └── software-engineering/     ← 11 pages
├── guides/                       ← 8 pages
└── tools/                        ← 9 catalog pages
```

### New top-level folders

- `wiki/aws/` — `aws/aws.md` overview page (cross-references existing GCP + Databricks).
- `wiki/azure/` — `azure/azure.md` overview page (cross-references Synapse, Power BI, Cosmos DB, ADLS).

### Naming convention

- All filenames in **kebab-case** (e.g. `data-warehouse.md`, `cap-theorem.md`).
- Aliases preserve original capitalized titles for Obsidian/Linkable lookups.

### Aggregation strategy (windsurf rule on small pages)

Where source had many tiny tool pages (e.g. 16 separate one-liner files under `Tools/Databases/`), they were merged into single catalog pages:

- `tools/databases-overview.md` — all 16 DB tool pages.
- `tools/orchestrators-overview.md` — all orchestrator pages.
- `tools/ingestion-tools.md` — Airbyte, Fivetran, Debezium, etc.
- `tools/processing-tools.md` — Spark, dbt, Beam, Flink, EMR, etc.
- `tools/quality-tools.md` — Great Expectations, Monte Carlo, dbt tests, Soda.
- `tools/analytics-tools.md` — Looker, Tableau, Power BI, Superset, etc.
- `tools/file-formats.md` — Parquet, ORC, Avro, Delta, Iceberg, Arrow.
- `tools/programming-languages.md` — SQL, Python, Java, Scala, Rust, T-SQL.
- `tools/object-storage.md` — S3, GCS, Blob, MinIO.
- `faq.md` — collapses 10 FAQ source files.

### Cross-linking strategy

Every new page connects to:

1. **Sibling concepts** in the same category.
2. **Cross-category** related pages (e.g. Data Storage ↔ Data Processing).
3. **GCP product pages** (BigQuery, Dataflow, Pub/Sub, Cloud SQL, Spanner, Bigtable, Memorystore, Datastore, GCS).
4. **DBMS theory** (ACID, Normalization).
5. **AWS / Azure / Databricks** overviews where parallels exist.
6. **Guides + Tools** for practical follow-up reading.

### Modernizations baked in (not in raw)

- **Medallion architecture** + lakehouse patterns (Delta / Iceberg / Hudi).
- **CDC via log-based** (Debezium, Datastream, DynamoDB Streams) as primary recommendation.
- **HTAP** (Hybrid Transactional-Analytical Processing) — coverage of TiDB, SingleStore, AlloyDB, BigQuery + Spanner federated queries.
- **PACELC** as refinement to **CAP**.
- **dbt + ELT** as the modern baseline, replacing legacy ETL.
- **Workflow orchestration** evolution: Airflow → Dagster (asset-first) / Prefect (hybrid) / Mage / Flyte.
- **Data Mesh** (Zhamak Dehghani's four principles).
- **Activity Schema** (Narrator's stream-of-events modeling).
- **Crypto-shredding** for GDPR right-to-erase in event-sourced systems.
- **Generated columns** + **expression indexes** for sargability workarounds.
- **dbt Semantic Layer / MetricFlow / Cube** as the modern metrics-layer stack.
- **OpenLineage** for portable lineage emission.
- **Apache AGE** Postgres graph extension; **TimescaleDB** as TS-on-Postgres.
- **Spot / Preemptible** instances + **CUD** discounts for cost optimization.
- **GenAI surface mentions** (Vertex AI, Azure OpenAI Service, Bedrock) where relevant.

### Updated

- `index.md` — full rebuild of folder map, expanded data-engineering section with sub-categories, AWS + Azure entries, statistics.
- `log.md` — this entry.

### Statistics

- **New pages**: ~71
- **Total wiki pages now**: ~112 + index + log
- **Top-level folders**: 6 (was 4)

---

## 2026-04-27 (fourth pass) — DBMS + Data Engineering fundamentals (3 sources)

**Operator**: Cascade
**Trigger**: User dropped 3 CS-fundamentals sources into `raw/`. Per updated `windsurf.md` rule 4 ("Like GCP, Data Engineering, Cloud, Machine Learning, Generative AI, etc."), these required new top-level subject folders.

### New folders

- `wiki/dbms/` — Database Management System theory.
- `wiki/data-engineering/` — Data engineering practitioner concepts.

### Sources ingested

1. `ACID Properties in DBMS.md` → `dbms/acid-properties.md`
2. `Introduction to Database Normalization.md` → `dbms/database-normalization.md`
3. `Data Warehousing.md` → `data-engineering/data-warehousing.md`

### New pages created (3)

- **`dbms/acid-properties.md`** — full coverage of A/C/I/D + responsibility matrix + isolation levels + how each GCP database (Cloud SQL, Spanner, Datastore, Bigtable, Memorystore, BigQuery) maps onto the ACID spectrum + ACID vs BASE.
- **`dbms/database-normalization.md`** — anomalies (insert/update/delete/redundancy), 1NF → 5NF + BCNF, when to denormalize, ties to OLAP star schemas.
- **`data-engineering/data-warehousing.md`** — OLTP vs OLAP, ETL/ELT, star vs snowflake, data marts, types of warehouses, building challenges, real-world examples, lakehouse evolution, deep cross-links to BigQuery / Dataflow / Datafusion / Pub/Sub / Data Catalog / Databricks.

### Cross-linking strategy

Each new page deliberately links into the existing `gcp/` concept pages so the **theory** and the **products** reinforce each other:

- ACID → Cloud SQL (full ACID single-instance), Spanner (global ACID via TrueTime), Datastore (entity-group ACID), Bigtable (row-level only), BigQuery (per-statement).
- Normalization → counterpoint to star/snowflake schemas in BigQuery; explanation for why Datastore embeds and Bigtable abandons relational entirely.
- Data Warehousing → BigQuery as the canonical cloud DWH; Dataflow/Datafusion as ETL engines; Data Catalog as metadata; Databricks as lakehouse alternative.

### Modernizations baked in (not in raw)

- Standard SQL **isolation levels** (READ UNCOMMITTED → SERIALIZABLE) + snapshot isolation + Spanner's external consistency.
- **ELT** vs ETL distinction (dbt-driven warehouse-side transforms).
- **Lakehouse** pattern with Delta Lake / Iceberg / Hudi; BigLake on GCP.
- **3-tier warehouse architecture** (Inmon vs Kimball debate).
- ACID vs **BASE** tradeoff for NoSQL.
- **Slowly Changing Dimensions** (SCD Type 1/2/6) — flagged as interview territory.

### Updated

- `index.md` — added "DBMS" and "Data Engineering" sections to TOC; updated folder map and statistics.
- `log.md` — this entry.

### Notes

- These pages are **subject-agnostic theory** that applies to any cloud DB / warehouse, but they cross-link heavily into the GCP product pages so the wiki stays interconnected.
- Future ingests of CS-theory sources (operating systems, distributed systems, ML theory, etc.) should follow the same pattern: top-level folder named after the subject.

---

## 2026-04-27 (third pass) — Subject-based restructure + analytics ingest (16 sources) + Databricks

**Operator**: Cascade
**Trigger**: User noticed the previous folder structure didn't follow `windsurf.md` rule 4 ("create folder named after the main subject of the source"). Since all GCP sources should sit under a single `gcp/` parent, plus updated rule (now removed) deprecating standalone source-summary pages.

### Phase A — Restructure

- Created `wiki/gcp/` parent.
- Moved 5 existing folders (`foundations/`, `compute/`, `storage/`, `databases/`, `certifications/`) → under `wiki/gcp/`.
- **Deleted 22 source-summary pages** that were created in the prior two passes (concept pages already cite their raw sources inline via `(source: filename.md)`):
  - `foundations/`: features-of-gcp.md, google-cloud-platform-source.md
  - `compute/`: cloud-functions-in-gcp.md, cloud-functions-with-python.md, cloud-run-with-python.md, compute-engine-vm-howto.md, compute-engine-vs-app-engine-source.md, gcp-compute-services-source.md, google-app-engine.md, google-kubernetes-engine.md, intro-to-compute-engine.md
  - `storage/`: cloud-storage-in-gcp.md, gcp-cloud-storage-source.md, persistent-disk-filestore-source.md, firebase-cloud-storage-source.md, gfs-source.md
  - `databases/`: google-cloud-sql-source.md, cloud-spanner-source.md, cloud-bigtable-source.md, cloud-datastore-source.md, memorystore-source.md
  - `certifications/`: pde-certificate-guidelines.md
- Stripped dangling `[[<source>-source]]` links from concept pages and `index.md`.
- Wiki-link relative paths (`[[../foundations/...]]`) still resolve correctly because both source and target moved into the same parent (`gcp/`).

### Phase B — Analytics ingest (16 sources)

**Sources** (all GeeksforGeeks GCP articles unless noted):

1. `Google Cloud Platform - Introduction to BigQuery.md`
2. `Google Cloud Platform- BigQuery(Running Queries, advantage and disadvantage).md`
3. `Google Cloud Platform - Introduction to BigQuery Sandbox.md`
4. `Google Cloud Platform - Tables in BigQuery.md`
5. `Google Cloud Platform - Loading Data to BigQuery.md`
6. `Google Cloud Platform - Working with External Data in BigQuery.md`
7. `Google Cloud Platform - User Defined Functions in BigQuery.md`
8. `Google Cloud Platform - Implementing Authorized View in BigQuery.md`
9. `Google Cloud Platform - Managing Access using IAM in BigQuery.md`
10. `Google Cloud Platform - Data Visualization in BigQuery.md`
11. `Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md`
12. `Building Data Pipelines with Google Cloud Dataflow ETL Processing.md`
13. `Datafusion in Google Cloud Platform (GCP).md`
14. `Google Cloud Platform - A High level Overview of Data Catalog Service.md`
15. `How To Create a PubSub Topic on GCP.md`
16. `Introduction to Databricks.md` (multi-cloud — placed under `databricks/`, not `gcp/`)

### New pages created (15)

**`gcp/analytics/` (14 new)**:

- `bigquery.md` — main BigQuery concept page
- `bigquery-sandbox.md`
- `bigquery-tables.md`
- `bigquery-loading-data.md`
- `bigquery-external-data.md`
- `bigquery-iam.md`
- `bigquery-udfs.md`
- `bigquery-authorized-views.md`
- `bigquery-visualization.md`
- `bigquery-query-management.md`
- `dataflow.md`
- `datafusion.md`
- `data-catalog.md`
- `pubsub.md`

**`databricks/` (1 new)**:

- `databricks.md` — Spark + Delta Lake + MLflow platform overview, cross-cloud rationale

### Modernizations baked into pages

- **Data Studio → Looker Studio** (October 2022 rename) — flagged in `bigquery-visualization.md`.
- **Data Catalog → Dataplex Catalog** (2023 consolidation) — flagged in `data-catalog.md`.
- **BigQuery Editions** (Standard / Enterprise / Enterprise Plus, 2023) — flagged in `bigquery.md`.
- **Pub/Sub Lite** + **Schema Registry** + **BigQuery subscription** added to `pubsub.md`.
- **BigLake** for multi-cloud federated tables — flagged in `bigquery-external-data.md`.
- **Storage Write API** (replaces legacy `tabledata.insertAll`) — `bigquery-loading-data.md`.
- **Datastream**, **Scheduled Queries**, **Stored Procedures**, **BigQuery Studio**, **Materialized Views** all noted where relevant.

### Updated

- `index.md` — fully rewritten with `gcp/` + `databricks/` structure, decision matrices for databases / storage / analytics, expanded stub-topics list.
- `log.md` — this entry.

### Notes for the future

- BigQuery's 9 sources naturally split into a main concept page + 9 sub-pages. Per windsurf "10–15 wiki pages per source family is normal", this is in spec.
- The Databricks page is the first **non-GCP** entry; it lives at `wiki/databricks/` rather than under `gcp/` because Databricks is multi-cloud.
- Future ingests of Snowflake, AWS, Azure, etc. should follow the same pattern: top-level folder named after the platform.
- Skipped repeating source-summary pages permanently — the concept pages handle citation inline via `(source: filename.md)` markers.

---

## 2026-04-27 (later) — GCP storage + databases ingest (9 sources) + folder reorganization

**Operator**: Cascade
**Trigger**: User updated `windsurf.md` step 6 ("If no folders created yet, based on index using filesystem create a folder and move existing file") and dropped 9 new sources into `raw/`.

### Folder reorganization

Moved all 28 existing wiki pages into 5 topic folders matching the index structure:

- `foundations/` — 4 concepts + 2 source summaries
- `compute/` — 7 concepts + 9 source summaries
- `storage/` — 3 concepts + 1 source summary (pre-ingest)
- `certifications/` — 1 concept + 1 source summary
- (`databases/` created for the new ingest)

`index.md` and `log.md` remain at the wiki/ root.

### New sources ingested

1. `Google Cloud Platform - Cloud Storage.md` — enriches existing [[storage/cloud-storage]].
2. `Google Persistent Disk & Google Filestore Services.md` — enriches [[storage/persistent-disk]] and [[storage/filestore]].
3. `Google Cloud Platform - Introduction to Cloud Spanner.md` — new [[databases/cloud-spanner]].
4. `Google Cloud Platform - MemoryStore.md` — new [[databases/memorystore]].
5. `Google Cloud SQL.md` — new [[databases/cloud-sql]].
6. `Google File System.md` — new [[storage/google-file-system]].
7. `Introduction to Firebase Cloud Storage.md` — new [[storage/firebase-cloud-storage]].
8. `Introduction to Google Cloud Bigtable.md` — new [[databases/cloud-bigtable]].
9. `Use Cloud Datastore For NoSQL Database On GCP.md` — new [[databases/cloud-datastore]].

### New pages created (16)

**Concept pages (7)**:
- `databases/cloud-sql.md`
- `databases/cloud-spanner.md`
- `databases/cloud-bigtable.md`
- `databases/cloud-datastore.md`
- `databases/memorystore.md`
- `storage/firebase-cloud-storage.md`
- `storage/google-file-system.md`

**Source summaries (9)**:
- `databases/google-cloud-sql-source.md`
- `databases/cloud-spanner-source.md`
- `databases/cloud-bigtable-source.md`
- `databases/cloud-datastore-source.md`
- `databases/memorystore-source.md`
- `storage/gcp-cloud-storage-source.md`
- `storage/persistent-disk-filestore-source.md`
- `storage/firebase-cloud-storage-source.md`
- `storage/gfs-source.md`

### Existing pages enriched (3)

- `storage/cloud-storage.md` — added object-immutability rules, bucket design principles, Firebase layer note, Colossus backend lineage, cross-links.
- `storage/persistent-disk.md` — added pricing table per disk type, Hyperdisk tier, regional variants, cost specifics.
- `storage/filestore.md` — expanded tier table with capacity + IOPS + pricing, 99.99% SLA on Enterprise.

### Web enrichment via brave-search

- **Cloud Datastore → Firestore in Datastore mode rename** (2018) — `cloud.google.com/datastore/docs`.
- **Memorystore for Valkey GA (2024)** + Memcached deprecation path — `cloud.google.com/blog/products/databases/announcing-general-availability-of-memorystore-for-valkey`.
- **GFS → Colossus (2010) succession** — `cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system`.

### Outdated facts flagged in source summaries

- `cloud-datastore-source.md` — raw uses old "Cloud Datastore" name; correct name is "Firestore in Datastore mode".
- `memorystore-source.md` — raw misses Valkey engine (added 2024 GA).

### Updated

- `index.md` — fully rewritten with folder paths, new pages, decision matrix, stub-topic list.
- `log.md` — this entry.

### Notes

- Wiki-links use relative paths with alias (`[[../foundations/google-cloud-platform|Google Cloud Platform]]`) across folders; Obsidian still resolves `[[page-name]]` shortcuts within the same folder.
- **AlloyDB** added to stub-topic list (modern successor to Cloud SQL Postgres for higher-performance use cases).
- **Colossus** added as an important but non-customer-facing stub — it underlies all GCP storage and is the direct descendant of [[storage/google-file-system]].

---

## 2026-04-27 — Initial GCP ingest (13 sources)

**Operator**: Cascade
**Action**: Bulk ingest of all 13 sources currently in `raw/`.
**Sources**:
1. `Google Cloud Platform (GCP).md`
2. `Features of GCP.md`
3. `Google Cloud Platform - Compute Services.md`
4. `Difference Between Google Cloud Compute Engine and App Engine.md`
5. `Introduction to Google Compute Engine.md`
6. `How To Use Compute Engine To Launch And Manage Virtual Machines.md`
7. `Google App Engine (GAE).md`
8. `Google Kubernetes Engine.md`
9. `Google Cloud Run - Working with Python.md`
10. `Cloud Functions in GCP.md`
11. `How to Use Google Cloud Function with Python.md`
12. `Cloud Storage in GCP.md`
13. `PDE Certificates Guidelines.md`

**Pages created** (28):

*Concept pages (14)*:
- `google-cloud-platform.md`
- `regions-and-zones.md`
- `service-models.md`
- `gcp-pricing-and-discounts.md`
- `gcp-compute-services.md`
- `compute-engine.md`
- `app-engine.md`
- `kubernetes-engine.md`
- `cloud-run.md`
- `cloud-functions.md`
- `compute-engine-vs-app-engine.md`
- `cloud-storage.md`
- `persistent-disk.md`
- `filestore.md`
- `professional-data-engineer.md`

*Source summaries (13)*:
- `google-cloud-platform-source.md`
- `features-of-gcp.md`
- `gcp-compute-services-source.md`
- `compute-engine-vs-app-engine-source.md`
- `intro-to-compute-engine.md`
- `compute-engine-vm-howto.md`
- `google-app-engine.md`
- `google-kubernetes-engine.md`
- `cloud-run-with-python.md`
- `cloud-functions-in-gcp.md`
- `cloud-functions-with-python.md`
- `cloud-storage-in-gcp.md`
- `pde-certificate-guidelines.md`

*Other*:
- `index.md` — master TOC
- `log.md` — this file

**Web enrichment via brave-search**:
- Current GCP scale: 43 regions / 130 zones (vs raw's "15") — `cloud.google.com/about/locations`.
- Cloud Functions Gen 1 vs Gen 2 — `firebase.google.com/docs/functions/version-comparison`.
- Current App Engine runtimes (raw lists Python 2.7 / Java 7 — outdated) — `cloud.google.com/appengine/docs/standard/python3/runtime`.
- GKE Autopilot vs Standard — `cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison`.
- Cloud Run free tier (2 M req / 360k GiB-s / 180k vCPU-s / mo) — `cloud.google.com/run/pricing`.
- PDE exam structure — multiple secondary sources (Medium, Reddit).

**Outdated facts flagged in source pages**:
- `features-of-gcp.md` — Cloud Debugger deprecated (May 2023).
- `google-app-engine.md` — Python 2.7 / Java 7 runtimes deprecated; preview features list obsolete.
- `cloud-functions-in-gcp.md` — predates Gen 2.
- `gcp-compute-services-source.md` — outdated Cloud Run free tier figure.
- `google-kubernetes-engine.md` — doesn't cover Autopilot mode.
- `google-cloud-platform-source.md` — outdated region count.

**Cross-link density**: each concept page averages 5–8 wiki-links; source pages link back to their concept and to closely related concepts.

**Notes**:
- Several frequently-referenced services (BigQuery, Dataflow, Pub/Sub, Composer, Dataplex, Spanner, etc.) are mentioned but not yet ingested. Listed under "Stub topics" in `index.md` for future raw/ additions.
- All citations follow `(source: filename.md)` format per `windsurf.md` rules.
- Frontmatter uses literal values (not Templater syntax) so pages render correctly outside Obsidian Templater context.


## 2026-05-10 � Vault restructure: fields-of-knowledge top level

**Trigger:** User feedback that the top-level folders (`gcp/`, `aws/`, `azure/`, `databricks/`, `dbms/`, `data-engineering/`, `people/`, `books/`) mixed *technology subdomains* with *cross-cutting metadata*. The mental model should instead be: top level = **fields of knowledge** (`technology/`, future `philosophy/`, `art/`, `science/`) + **cross-cutting metadata** (`people/`, `books/`).

### Filesystem moves (~120 files)

- Created `wiki/technology/` and `wiki/technology/cloud/`.
- Moved `wiki/gcp/` ? `wiki/technology/cloud/gcp/`.
- Moved `wiki/aws/` ? `wiki/technology/cloud/aws/`.
- Moved `wiki/azure/` ? `wiki/technology/cloud/azure/`.
- Moved `wiki/databricks/` ? `wiki/technology/cloud/databricks/`.
- Moved `wiki/data-engineering/` ? `wiki/technology/data-engineering/`.
- **Dropped redundant `concepts/` layer**: `wiki/technology/data-engineering/concepts/<X>/` ? `wiki/technology/data-engineering/<X>/` (data-architecture, data-ingestion, data-management, data-modeling, data-processing, data-storage).
- **Promoted `software-engineering/` out of DE** to top tech level: `wiki/technology/data-engineering/concepts/software-engineering/` ? `wiki/technology/software-engineering/` (CAP, sharding, idempotence, indexing, scaling, patterns � these are general SE/distributed-systems concepts, not DE-only).
- **Promoted `tools/` and `guides/` out of DE** to top tech level: `wiki/technology/data-engineering/{tools,guides}/` ? `wiki/technology/{tools,guides}/` (they were vault-wide reference material trapped inside one domain).
- **Renamed `dbms/` ? `databases/`** (clearer term): `wiki/dbms/` ? `wiki/technology/databases/`. `DBMS Home.md` renamed to `Databases Home.md`.
- `people/` and `books/` unchanged at top level (correctly identified as cross-cutting metadata).

### Wikilink rewrite (vault-wide)

Stripped folder-prefix from wikilinks pointing into the migrated tree, since Obsidian resolves bare filenames automatically. Disambiguated the only filename collision (`data-catalog.md` exists in both `technology/cloud/gcp/analytics/` and `technology/data-engineering/data-management/`) by keeping a path-qualified link for the GCP one.

- 14 files updated by the bulk regex pass.
- Replaced `[[DBMS Home]]` ? `[[Databases Home]]`.
- Replaced `"wiki/<old-folder>"` Dataview path strings ? `"wiki/technology/<new-path>"` in 5 Home pages.

### New Home pages

Created 4 new sub-hubs to match the new hierarchy:

- `wiki/technology/Technology Home.md` � sub-hub for the technology field.
- `wiki/technology/cloud/Cloud Home.md` � sub-hub for cloud platforms.
- `wiki/technology/software-engineering/Software Engineering Home.md`.
- `wiki/technology/tools/Tools Home.md`.
- `wiki/technology/guides/Guides Home.md`.

### Home pages updated (nav strips + Dataview paths)

- `Master Home.md` � completely rewritten. Top-level cards now reflect 3 fields (Technology, Books, People) with reserved cards for Philosophy/Art/Science.
- `GCP Home.md`, `AWS Home.md`, `Azure Home.md`, `Databricks Home.md` � nav strips updated to "Master ? Technology ? Cloud ? <Platform>" hierarchy.
- `Databases Home.md` � nav strip updated to "Master ? Technology ? Databases".
- `Books Home.md`, `People Home.md` � nav strips updated to "Master ? Technology ? Books/People".
- `data-engineering.md` � added Vault Navigation strip with new hierarchy.

### `windsurf.md` rewrite

Rewrote the Folder structure and Ingest workflow sections to reflect the new contract:

- Made the **3 ingest responsibilities** explicit (Categorize ? Interlink ? Record).
- Added a **categorization decision tree** under Phase 2 so future ingests route correctly to `technology/<sub>/...`, `people/`, `books/`, or future fields.
- Added a hard rule against creating new top-level folders without user approval (top level should remain fields-of-knowledge + cross-cutting metadata only).
- Documented the wikilink convention: prefer bare filenames; use folder-qualified paths only for collisions.

### `index.md` rewrite

- Updated folder map to new tree.
- Reorganized sections: `## Technology` umbrella with sub-sections for Data Engineering, Software Engineering, Databases, Cloud (with GCP/AWS/Azure/Databricks nested), Tools, Guides.
- Added "Reserved fields" section for `philosophy/`, `art/`, `science/`.
- Statistics block updated.

### Files affected

- **Moved**: ~120 markdown pages.
- **Created**: 5 new Home pages, 1 rewritten Master Home, 1 rewritten `windsurf.md`, 1 rewritten `index.md`.
- **Updated**: 14 pages by wikilink regex + 8 Home pages with new nav strips.
- **Renamed**: `DBMS Home.md` ? `Databases Home.md`, `dbms/` folder ? `databases/`.

### Verification

- `grep -r "\[\[(gcp|aws|azure|databricks|dbms|data-engineering)/"` returns **zero matches**.
- `grep -r "\[\[concepts/"` returns **zero matches**.
- One filename collision identified (`data-catalog.md`) and disambiguated.
- All Dataview path strings in Home pages updated to new paths.

### Why this matters

The vault now has an architecture that scales beyond technology. When the user later ingests sources about philosophy, art, or science, the agent will create those top-level folders and they will sit as **peers** of `technology/`, not buried within it or jumbled at the same level as Cloud or DBMS. The categorization decision tree in `windsurf.md` ensures every future raw drop routes deterministically.
