---
title: Professional Data Engineer
Created:
  - 2026-04-27
date modified: Wednesday, June 3rd 2026, 12:22:27 am
aliases:
  - PDE
  - GCP PDE
  - Data Engineer Certificate
category: Certification
tags:
  - GCP
  - DataEngineering
  - Exam
status: studying
banner:
publish: true
---

> [!infobox|right] Certification
> # Professional Data Engineer
>
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Professional-level certification |
> | **Domain** | Data Engineering |
> | **Format** | ~2 hours, 50–60 multiple-choice/multiple-select |
> | **Validity** | 2 years |
> | **Website** | cloud.google.com/certification/data-engineer |

---



> "The meaning of life is to find your gift. The purpose of life is to give it away."
> <cite>Pablo Picasso</cite>



The **Google Cloud Professional Data Engineer (PDE)** certification validates the ability to design, build, operationalize, secure, and monitor data-processing systems on GCP. It is one of GCP's most popular professional-level exams.

## Exam format

- **Duration**: 2 hours
- **Question type**: multiple choice + multiple select
- **Languages**: English, Japanese
- **Validity**: 2 years
- **Recommended experience**: 3+ years industry, 1+ year GCP

> [!quote] 
> "The only way to do great work is to love what you do."
> — Steve Jobs


(general format â€” confirm at [cloud.google.com/learn/certification/data-engineer](https://cloud.google.com/learn/certification/data-engineer))

## Domains and weighting

The current exam has **5 sections** (source: PDE Certificates Guidelines.md):

| Â§ | Domain | Weight |
| --- | --- | --- |
| 1 | Designing data processing systems | ~22% |
| 2 | Ingesting and processing the data | ~25% |
| 3 | Storing the data | ~20% |
| 4 | Preparing and using data for analysis | ~15% |
| 5 | Maintaining and automating data workloads | ~18% |

## Section 1 â€” Designing data processing systems (~22%)

**Security & compliance**: IAM, organization policies, encryption + key management, PII handling, data sovereignty, regulatory compliance, project/dataset/table architecture, dev-vs-prod separation.

**Reliability & fidelity**: Dataform, Dataflow, Cloud Data Fusion, LLM-prompted query generation, pipeline monitoring/orchestration, disaster recovery, ACID decisions, data validation.

**Flexibility & portability**: mapping business â†’ architecture, multi-cloud, data residency, data staging/cataloging/profiling/discovery (data governance).

**Migrations**: stakeholder analysis, BigQuery Data Transfer Service, Database Migration Service, Transfer Appliance, DataStream, networking.

(source: PDE Certificates Guidelines.md)

## Section 2 â€” Ingesting and processing data (~25%)

**Planning**: sources/sinks, transformation/orchestration logic, networking fundamentals, encryption.

**Building**: data cleansing, choosing services (Dataflow, Apache Beam, Dataproc, Cloud Data Fusion, BigQuery, Pub/Sub, Apache Spark, Hadoop, Apache Kafka), batch + streaming transforms (windowing, late-arriving data), AI data enrichment, data acquisition/import.

**Deploying & operationalizing**: Cloud Composer, Workflows, CI/CD.

(source: PDE Certificates Guidelines.md)

## Section 3 â€” Storing data (~20%)

**Storage selection**: BigQuery, BigLake, AlloyDB, Bigtable, Spanner, Cloud SQL, [[Cloud Storage]], Firestore, Memorystore â€” based on access patterns, cost, performance, lifecycle.

**Data warehouse**: data modeling, normalization decisions, mapping requirements, access-pattern architecture.

**Data lake**: configuring discovery/access/cost controls, processing, monitoring.

**Data platform**: Dataplex, Dataplex Catalog, BigQuery, Cloud Storage; federated governance for distributed systems.

(source: PDE Certificates Guidelines.md)

## Section 4 â€” Preparing and using data for analysis (~15%)

**Visualization**: connecting tools, precalculating fields, troubleshooting slow queries, BI Engine, materialized views, IAM + Cloud DLP for security/masking.

**AI/ML**: BigQuery ML feature engineering and serving, embeddings + RAG for unstructured data.

**Sharing**: rules, dataset publishing, reports, BigQuery sharing via **Analytics Hub**.

(source: PDE Certificates Guidelines.md)

## Section 5 â€” Maintaining and automating workloads (~18%)

**Optimization**: cost minimization, ensuring critical-process resources, persistent vs job-based Dataproc clusters.

**Automation/repeatability**: Cloud Composer DAGs, repeatable scheduling/orchestration.

**Workload organization**: BigQuery Editions and reservations, interactive vs batch jobs.

**Monitoring/troubleshooting**: Cloud Monitoring, Cloud Logging, BigQuery admin panel, error/billing/quota troubleshooting.

**Failure mitigation**: fault tolerance + restart design, multi-region/zone deployment, data corruption + missing data prep, replication + failover (Cloud SQL, Redis clusters).

(source: PDE Certificates Guidelines.md)

## Core services to master

Compute & orchestration: Cloud Composer, Workflows, Dataflow, Dataproc, Cloud Run, [[cloud-functions]].

Storage & warehouse: **BigQuery** (heavy weight), BigLake, AlloyDB, Bigtable, Spanner, Cloud SQL, [[Cloud Storage]], Firestore, Memorystore.

Streaming & messaging: Pub/Sub, Dataflow streaming, Apache Beam.

Governance: Dataplex, Dataplex Catalog, IAM, Cloud DLP, KMS.

ML & AI: BigQuery ML, Vertex AI, embeddings/RAG.

## Study tips

1. Spend ~50% of time on **Section 1 + 2 (~47%)** â€” system design and ingestion dominate the exam.
2. Master **BigQuery** end-to-end: partitioning, clustering, materialized views, BI Engine, reservations.
3. Practice **picking the right storage** (Bigtable vs Spanner vs Firestore vs BigQuery) for given workload patterns.
4. Know **Dataflow windowing** (fixed, sliding, session) and late-data handling.
5. Build a real **Cloud Composer DAG** to cement orchestration concepts.

## Interesting Facts

- Section 1 + Section 2 together cover **~47% of the exam** â€” design and ingestion dominate.
- The PDE was rewritten in 2024 to add LLM-related items (LLM-assisted query generation, embeddings + RAG) â€” older study guides will miss this.

## Interview Questions can be asked

1. Pick a storage service for: 100 TB time-series sensor data, 10 ms read latency, multi-region.
2. Walk through a streaming pipeline: Pub/Sub â†’ Dataflow â†’ BigQuery, with late-arriving data handling.
3. Compare BigQuery on-demand vs flat-rate / Editions pricing.
4. How would you implement column-level masking for PII in BigQuery?
5. How would you orchestrate a daily multi-step ETL? Composer vs Workflows trade-offs.

## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/regions-and-zones|Regions and Zones]], [[../foundations/gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Core data services
>> [[../analytics/bigquery|BigQuery]], [[../analytics/dataflow|Dataflow]], [[../analytics/pubsub|Pub/Sub]], [[../databases/cloud-sql|Cloud SQL]], [[../databases/cloud-spanner|Cloud Spanner]], [[../databases/cloud-bigtable|Cloud Bigtable]], [[Cloud Storage|Cloud Storage]], [[../compute/gcp-compute-services|GCP Compute Services]]
>
>
>> [!card] Discipline
>> [[../../../data-engineering/data-engineering|Data Engineering]], [[../../../data-engineering/faq|FAQ — Certifications]], [[../../../guides/getting-started|Getting Started]]
>
>
>> [!card] Books
>> [[../../../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]], [[../../../../books/designing-data-intensive-applications|DDIA]], [[../../../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]

