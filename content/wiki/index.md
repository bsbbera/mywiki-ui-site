---
title: Wiki Index
Created:
  - 2026-04-27
date modified: Thursday, May 14th 2026, 11:25:57 am
aliases:
  - TOC
  - Table of Contents
category: Index
tags:
  - index
banner:
publish: true
---

---

> [!warning] Agent-facing catalog — DO NOT DELETE
> This file is the **machine-readable index** consulted by the ingestion agent (Cascade) before processing any new RAW content. Per `windsurf.md`, every new page must be cross-linked to existing ones; this file is how the agent discovers what already exists without grep-ing the whole vault.
>
> **For human navigation**, use `[[Master Home]]` instead — it is the visual dashboard with banners, cards, and live Dataview feeds. This file is intentionally flat + exhaustive for agent consumption.

Master table of contents. Top-level folders are organized as **fields of knowledge** (`technology/`, plus reserved `philosophy/` `art/` `science/`) and **cross-cutting metadata** (`people/`, `books/`). Under `technology/`, sub-domains group every existing tech page.

## Folder map

```
wiki/
├── Master Home.md            ← human-facing global dashboard
├── index.md                  ← this file (agent-facing catalog)
├── log.md                    ← operations log
│
├── technology/               ← 🛠️ field of knowledge
│   ├── Technology Home.md
│   ├── data-engineering/     ← DE concepts, sub-divided by discipline
│   │   ├── data-engineering.md   (the DE hub)
│   │   ├── data-architecture/    ← warehouse, lake, mart, mesh, lambda, kappa, medallion
│   │   ├── data-ingestion/       ← full / delta / CDC
│   │   ├── data-management/      ← catalog, governance, semantic + metrics layers
│   │   ├── data-modeling/        ← relational, dimensional, vault, OBT, activity
│   │   ├── data-processing/      ← batch, stream, OLTP, OLAP, HTAP, orchestration
│   │   ├── data-storage/         ← relational, NoSQL, doc, KV, graph, columnar, in-mem, TS
│   │   └── (data-pipeline.md, data-warehousing.md, sargable-expressions.md, data-ethics.md, faq.md)
│   ├── software-engineering/ ← CAP, sharding, scaling, indexing, idempotence, patterns
│   │   └── Software Engineering Home.md
│   ├── databases/            ← ACID, normalization (theory + specific systems)
│   │   └── Databases Home.md
│   ├── cloud/                ← all cloud platforms grouped
│   │   ├── Cloud Home.md
│   │   ├── gcp/   (foundations / compute / storage / databases / analytics / certifications)
│   │   ├── aws/
│   │   ├── azure/
│   │   └── databricks/
│   ├── tools/                ← vault-wide tooling reference
│   │   └── Tools Home.md
│   └── guides/               ← vault-wide practitioner playbooks
│       └── Guides Home.md
│
├── people/                   ← 👥 cross-cutting metadata
└── books/                    ← 📚 cross-cutting metadata
```

## Technology — `technology/`

### Data Engineering — `technology/data-engineering/`

#### Top-level

- [[data-engineering|Data Engineering]] — discipline overview + skill ladder.
- [[data-pipeline|Data Pipeline]] — architecture + ETL/ELT/CDC patterns.
- [[data-warehousing|Data Warehousing]] — OLAP vs OLTP, ETL/ELT, star schemas, data marts, lakehouse.
- [[sargable-expressions|Sargable Expressions]] — index-friendly SQL.
- [[data-ethics|Data Ethics]] — privacy, bias, GDPR.
- [[faq|FAQ]] — career questions, transitions, certifications.

#### Data Architecture — `technology/data-engineering/data-architecture/`

- [[data-architecture|Data Architecture]] — top-level taxonomy.
- [[data-warehouse|Data Warehouse]] · [[data-lake|Data Lake]] · [[data-mart|Data Mart]] · [[data-mesh|Data Mesh]] · [[lambda-architecture|Lambda]] · [[kappa-architecture|Kappa]] · [[medallion-architecture|Medallion]].

#### Data Ingestion — `technology/data-engineering/data-ingestion/`

- [[data-ingestion|Data Ingestion]] · [[full-load|Full Load]] · [[delta-load|Delta Load]] · [[change-data-capture|CDC]].

#### Data Management — `technology/data-engineering/data-management/`

- [[data-management|Data Management]] · [[technology/data-engineering/data-management/data-catalog|Data Catalog]] · [[data-governance|Data Governance]] · [[semantic-layer|Semantic Layer]] · [[metrics-layer|Metrics Layer]].

#### Data Modeling — `technology/data-engineering/data-modeling/`

- [[data-modeling|Data Modeling]] · [[relational-modeling|Relational]] · [[dimensional-modeling|Dimensional]] · [[data-vault-modeling|Data Vault]] · [[one-big-table|One Big Table]] · [[activity-schema|Activity Schema]] · [[cardinality|Cardinality]] · [[normalization|Normalization]] · [[denormalization|Denormalization]].

#### Data Processing — `technology/data-engineering/data-processing/`

- [[data-processing|Data Processing]] · [[batch-data-processing|Batch]] · [[stream-data-processing|Stream]] · [[online-transaction-processing|OLTP]] · [[online-analytical-processing|OLAP]] · [[hybrid-transactional-analytical-processing|HTAP]] · [[workflow-orchestration|Workflow Orchestration]].

##### Apache Spark / PySpark — `technology/data-engineering/data-processing/spark/`

- [[apache-spark|Apache Spark]] (engine hub) · [[pyspark|PySpark]] (Python API) · [[spark-architecture|Architecture]] (driver/executor, jobs/stages/tasks, deploy modes) · [[rdd|RDDs]] (transformations/actions, lineage, lazy eval) · [[spark-dataframe|DataFrames]] (schema, StructType, RDD vs DF vs Dataset) · [[spark-sql|Spark SQL]] (Catalyst, temp views, UDFs) · [[spark-performance|Performance]] (shuffle, partitioning, caching, broadcast, AQE, skew) · [[spark-streaming|Streaming]] (DStreams, checkpointing, receivers) · [[spark-mllib|MLlib]] (distributed ML summary).

#### Data Storage — `technology/data-engineering/data-storage/`

- [[data-storage|Data Storage]] · [[database|Database]] · [[relational-database|Relational]] · [[non-relational-database|NoSQL]] · [[document-database|Document]] · [[key-value-database|Key-Value]] · [[graph-database|Graph]] · [[wide-column-database|Wide-column]] · [[column-oriented-database|Columnar]] · [[in-memory-database|In-memory]] · [[timeseries-database|Time-series]].

### Software Engineering — `technology/software-engineering/`

Distributed-systems theory and design patterns shared across DE and backend.

- [[cap-theorem|CAP Theorem]] · [[database-sharding|Sharding]] · [[horizontal-scaling|Horizontal Scaling]] · [[vertical-scaling|Vertical Scaling]] · [[indexing|Indexing]] · [[idempotence|Idempotence]] · [[data-unit-test|Data Unit Test]] · [[publisher-subscriber-pattern|Pub/Sub Pattern]] · [[fan-out|Fan-out]] · [[claim-check-pattern|Claim Check]] · [[event-sourcing-pattern|Event Sourcing]].

### Databases — `technology/databases/`

CS-theory foundations relevant to every database (replaces the old `databases/` folder).

- [[acid-properties|ACID Properties]] — atomicity, consistency, isolation, durability; transaction guarantees.
- [[database-normalization|Database Normalization]] — 1NF → 5NF + BCNF; eliminating redundancy and anomalies.

### Cloud — `technology/cloud/`

#### GCP — `technology/cloud/gcp/`

##### Foundations — `technology/cloud/gcp/foundations/`
- [[google-cloud-platform|Google Cloud Platform]] — overview, history, pillars, competitors.
- [[regions-and-zones|Regions and Zones]] — multi-region ⊃ region ⊃ zone.
- [[service-models|Service Models]] — IaaS / PaaS / SaaS / FaaS with GCP examples.
- [[gcp-pricing-and-discounts|GCP Pricing and Discounts]] — per-second billing, SUD, CUD, preemptible/spot.

##### Compute — `technology/cloud/gcp/compute/`
- [[gcp-compute-services|GCP Compute Services]] — taxonomy across IaaS-to-FaaS.
- [[compute-engine|Compute Engine]] — IaaS VMs.
- [[app-engine|App Engine]] — PaaS managed runtime.
- [[kubernetes-engine|Kubernetes Engine]] — managed Kubernetes (Autopilot vs Standard).
- [[cloud-run|Cloud Run]] — serverless stateless containers.
- [[cloud-functions|Cloud Functions]] — FaaS (Gen 1 vs Gen 2).
- [[compute-engine-vs-app-engine|Compute Engine vs App Engine]] — decision guide.

##### Storage — `technology/cloud/gcp/storage/`
- [[Cloud Storage|Cloud Storage]] — object storage (Standard, Nearline, Coldline, Archive).
- [[persistent-disk|Persistent Disk]] — block storage for VMs.
- [[filestore|Filestore]] — managed NFS.
- [[firebase-cloud-storage|Firebase Cloud Storage]] — mobile/web layer on GCS.
- [[google-file-system|Google File System]] — the 2003 distributed FS (Colossus predecessor).

##### Databases — `technology/cloud/gcp/databases/`
- [[cloud-sql|Cloud SQL]] — managed MySQL / Postgres / SQL Server.
- [[cloud-spanner|Cloud Spanner]] — globally distributed relational.
- [[cloud-bigtable|Cloud Bigtable]] — wide-column NoSQL at PB scale.
- [[cloud-datastore|Cloud Datastore]] — document NoSQL (Firestore in Datastore mode).
- [[memorystore|Memorystore]] — managed Redis / Memcached / Valkey.

##### Analytics — `technology/cloud/gcp/analytics/`
- [[bigquery|BigQuery]] — serverless petabyte-scale data warehouse.
  - [[bigquery-sandbox|BigQuery Sandbox]] — free tier for learning.
  - [[bigquery-tables|BigQuery Tables]] — temporary, permanent, views.
  - [[bigquery-loading-data|Loading Data to BigQuery]] — batch + streaming ingestion.
  - [[bigquery-external-data|BigQuery External Data]] — federated queries / external tables.
  - [[bigquery-iam|BigQuery IAM]] — roles, members, policies.
  - [[bigquery-udfs|BigQuery UDFs]] — SQL + JavaScript user-defined functions.
  - [[bigquery-authorized-views|BigQuery Authorized Views]] — share filtered data.
  - [[bigquery-visualization|BigQuery Data Visualization]] — Looker Studio + Connected Sheets.
  - [[bigquery-query-management|BigQuery Query Management]] — history, saved, shared queries.
- [[dataflow|Cloud Dataflow]] — code-first ETL (Apache Beam, Java/Python).
- [[datafusion|Cloud Data Fusion]] — visual / low-code ETL.
- [[technology/cloud/gcp/analytics/data-catalog|Data Catalog]] — metadata + discovery (now part of Dataplex). *(Path-qualified to disambiguate from the DE concept page `[[technology/data-engineering/data-management/data-catalog]]`.)*
- [[pubsub|Pub/Sub]] — managed messaging spine.

##### Certifications — `technology/cloud/gcp/certifications/`
- [[Professional Data Engineer|Professional Data Engineer]] — PDE exam guide.

#### AWS — `technology/cloud/aws/`
- [[AWS|Amazon Web Services]] — service catalog, data engineering services, comparison.

#### Azure — `technology/cloud/azure/`
- [[azure|Microsoft Azure]] — service catalog, data engineering services, comparison.

#### Databricks — `technology/cloud/databricks/`
- [[databricks|Databricks]] — Spark + Delta Lake + MLflow lakehouse platform (cross-cloud).

### Tools — `technology/tools/`

Cross-cutting tool catalogs consumed by every tech sub-domain.

- [[databases-overview|Databases]] — Postgres, MySQL, MongoDB, Cassandra, ClickHouse, DuckDB, etc.
- [[orchestrators-overview|Orchestrators]] — Airflow, Dagster, Prefect, Step Functions, Mage.
- [[ingestion-tools|Ingestion]] — Airbyte, Fivetran, Debezium, dlt, Datastream, DMS.
- [[processing-tools|Processing]] — Spark, Beam, Flink, dbt, EMR, Dataflow.
- [[quality-tools|Data Quality]] — Great Expectations, dbt tests, Soda, Monte Carlo.
- [[analytics-tools|Analytics + BI]] — Looker, Power BI, Tableau, Superset, Cube, Druid.
- [[file-formats|File Formats]] — Parquet, ORC, Avro, Delta, Iceberg, Arrow.
- [[programming-languages|Programming Languages]] — SQL, Python, Java, Scala, Rust.
- [[object-storage|Object Storage]] — S3, GCS, Blob, MinIO.

### Guides — `technology/guides/`

Cross-cutting practitioner playbooks.

- [[getting-started|Getting Started With DE]]
- [[sql-guide|SQL Guide]] — beginner → advanced (window functions, CTEs)
- [[data-pipeline-best-practices|Pipeline Best Practices]]
- [[testing-data-pipeline|Testing Your Data Pipeline]]
- [[data-governance-guide|Data Governance Guide]]
- [[cost-optimization-cloud|Cost Optimization in the Cloud]]
- [[messaging-service-guide|Choosing Your Messaging Service]]
- [[cloud-services-map|Cloud Services Map]] — AWS / Azure / GCP

## People — `people/`

Stub pages (frontmatter + minimal bio + related-page links) for individuals referenced across the wiki.

- [[edgar-f-codd|Edgar F. Codd]] — invented the relational model.
- [[ralph-kimball|Ralph Kimball]] — dimensional modeling pioneer.
- [[bill-inmon|Bill Inmon]] — "Father of the Data Warehouse".
- [[dan-linstedt|Dan Linstedt]] — created Data Vault.
- [[zhamak-dehghani|Zhamak Dehghani]] — coined Data Mesh.
- [[martin-kleppmann|Martin Kleppmann]] — author of DDIA.
- [[eric-brewer|Eric Brewer]] — proposed CAP theorem.
- [[seth-gilbert-nancy-lynch|Seth Gilbert + Nancy Lynch]] — proved CAP.
- [[jay-kreps|Jay Kreps]] — co-creator of Apache Kafka.
- [[jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]] — Google's GFS / MapReduce / BigTable / Spanner papers.
- [[joe-reis-matt-housley|Joe Reis + Matt Housley]] — *Fundamentals of Data Engineering*.
- [[daniel-abadi|Daniel Abadi]] — proposed PACELC; co-creator of C-Store / Vertica.
- [[greg-young|Greg Young]] — coined CQRS + modern Event Sourcing.
- [[martin-fowler|Martin Fowler]] — software architecture, refactoring, EAA patterns.
- [[andrej-karpathy|Andrej Karpathy]] — LLM Wiki pattern this knowledge base follows.
- [[doug-cutting|Doug Cutting]] — created Apache Hadoop / Lucene.
- [[matei-zaharia|Matei Zaharia]] — created Apache Spark; co-founded Databricks.
- [[wenqiang-feng|Wenqiang Feng]] — author of *Learning Apache Spark with Python*.

## Books — `books/`

Stub pages for influential books with cover images.

- [[designing-data-intensive-applications|Designing Data-Intensive Applications]] — Martin Kleppmann.
- [[the-data-warehouse-toolkit|The Data Warehouse Toolkit]] — Ralph Kimball + Margy Ross.
- [[fundamentals-of-data-engineering|Fundamentals of Data Engineering]] — Joe Reis + Matt Housley.
- [[building-a-scalable-data-warehouse-with-data-vault-2|Building a Scalable Data Warehouse with Data Vault 2.0]] — Dan Linstedt.
- [[building-the-data-warehouse|Building the Data Warehouse]] — Bill Inmon.
- [[learning-apache-spark-with-python|Learning Apache Spark with Python]] — Wenqiang Feng (free PySpark + MLlib tutorial).

## Reserved fields (not yet ingested)

- `philosophy/`  → ethics, metaphysics, epistemology
- `art/`         → photography, painting, music, cinema
- `science/`     → physics, cosmology, medicine, biology

These folders do not exist yet. They will be created on the first ingest of relevant content per `windsurf.md` rule "Phase 2 — Categorize".

## GCP service decision matrix

### Databases
| Need | Pick |
| --- | --- |
| OLTP relational, regional | [[cloud-sql|Cloud SQL]] |
| OLTP relational, global ACID | [[cloud-spanner|Cloud Spanner]] |
| Wide-column / time-series / IoT | [[cloud-bigtable|Cloud Bigtable]] |
| Document NoSQL | [[cloud-datastore|Datastore / Firestore]] |
| Cache (in-memory) | [[memorystore|Memorystore]] |

### Storage
| Need | Pick |
| --- | --- |
| Object blobs | [[cloud-storage|Cloud Storage]] |
| Block storage for VMs | [[persistent-disk|Persistent Disk]] |
| Shared filesystem (NFS) | [[filestore|Filestore]] |
| Mobile/web uploads | [[firebase-cloud-storage|Firebase Cloud Storage]] |

### Analytics
| Need                            | Pick                                          |
| ------------------------------- | --------------------------------------------- |
| SQL warehouse                   | [[bigquery                                    |
| Code-first ETL                  | [[dataflow                                    |
| Visual ETL                      | [[datafusion                                  |
| Messaging / streaming bus       | [[pubsub                                      |
| Metadata + discovery            | [[technology/cloud/gcp/analytics/data-catalog |
| Spark / lakehouse / ML platform | [[databricks                                  |

## Stub topics (referenced but not yet ingested)

- BigQuery ML, BigLake, BI Engine, **Analytics Hub**
- **Dataproc** (managed Hadoop / Spark)
- **Cloud Composer** (managed Airflow), **Cloud Workflows**
- **Dataplex** (consolidated governance), Dataplex Catalog (= Data Catalog)
- **Datastream** (CDC)
- **AlloyDB** (PostgreSQL-compatible Cloud SQL successor)
- **Firestore in Native mode** (real-time client SDKs)
- **Vertex AI**, AutoML, Feature Store
- VPC, Cloud Load Balancing, Cloud CDN
- IAM (general), Cloud KMS, Cloud DLP
- **Colossus** — successor to [[google-file-system|GFS]]; underlies GCS, Bigtable, Spanner, BigQuery
- **Pub/Sub Lite**, Pub/Sub Schema Registry

## Statistics

- **Top-level folders**: 3 active (`technology/`, `people/`, `books/`) + 3 reserved (`philosophy/`, `art/`, `science/`).
- **Sub-domains under `technology/`**: 6 (`data-engineering/`, `software-engineering/`, `databases/`, `cloud/`, `tools/`, `guides/`).
- **Cloud platforms under `technology/cloud/`**: 4 (`gcp/`, `aws/`, `azure/`, `databricks/`).
- **People stubs**: 18.
- **Book stubs**: 6.
- **Concept pages**: ~119 (incl. 9 Apache Spark / PySpark pages).
- **Source-summary pages**: 0 (concept pages cite raw sources inline).
- **Related-pages format**: topic-grouped callouts (per `windsurf.md`).
- **Infoboxes**: `> [!infobox|wikipedia]` on all named-entity notes (18 people + 6 books + 27 tools/cloud-services/platforms + 1 certification = 51); placed above the daily-quote block. Abstract concept/theory/pattern/guide pages intentionally have **no infobox**.
- **Total wiki pages**: ~156 + index + log + 7 Home dashboards.

## See also

- [[log|Operations Log]]
- `../windsurf.md` — wiki rules and ingest workflow
