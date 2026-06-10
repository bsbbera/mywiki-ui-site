---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Engineering FAQ
Created:
  - 2026-05-30
aliases:
  - Data Engineering FAQ
  - DE FAQ
category: Computer Science
tags:
  - data-engineering
  - faq
  - reference
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Reference</span>

# Data Engineering FAQ

<p class="at-lead">
Common questions and quick answers for data engineering concepts, tools, and best practices. A reference guide for interviews, troubleshooting, and quick lookups.
</p>

<span class="at-stat">Common</span> questions &nbsp;·&nbsp; <span class="at-stat">Quick</span> answers &nbsp;·&nbsp; <span class="at-mark">A reference guide for interviews and troubleshooting</span>

<span class="at-kicker">Concepts</span>

## Concepts

> [!grid|cols2]
>
> > [!card|section] ETL vs ELT
> > ETL: Transform before load. ELT: Load raw first, transform in warehouse. ELT is modern; cheaper storage and powerful warehouse compute.
>
> > [!card|section] Data Lake vs Warehouse
> > Lake: cheap raw storage (GCS/S3), schema-on-read. Warehouse: structured, optimized for queries (BigQuery, Snowflake). Lakehouse combines both.
>
> > [!card|section] ACID vs BASE
> > ACID (Atomicity, Consistency, Isolation, Durability) = transactions. BASE (Basically Available, Soft state, Eventually consistent) = NoSQL trade-offs.
>
> > [!card|section] OLAP vs OLTP
> > OLTP: transactions, fast writes, normalized. OLAP: analytics, aggregations, denormalized. See [[data-warehousing|Data Warehousing]].

<span class="at-kicker">Tools</span>

## Tools

> [!grid|cols2]
>
> > [!card|section] dbt
> > Data build tool. Transforms data in warehouses using SQL + Jinja. Version-controlled, tested, documented.
>
> > [!card|section] Airflow
> > Workflow orchestrator. DAGs (directed acyclic graphs) for pipeline scheduling, retries, dependencies.
>
> > [!card|section] Spark
> > Distributed compute engine. In-memory processing, 100× faster than MapReduce. Batch + streaming.
>
> > [!card|section] Kafka
> > Distributed event streaming. High throughput, fault-tolerant. Pub/sub for real-time pipelines.

<span class="at-kicker">Performance</span>

## Performance

> [!grid|cols2]
>
> > [!card|section] Partitioning
> > Split data by column (date, region). Improves query performance. Avoid high-cardinality columns (unique IDs).
>
> > [!card|section] Clustering
> > Co-locate related data within partitions. BigQuery clustering, Delta Z-ordering.
>
> > [!card|section] Materialized Views
> > Pre-computed query results. Faster reads, trade-off: storage + refresh latency.
>
> > [!card|section] Sargable
> > Query that can use indexes efficiently. Avoids functions on indexed columns. See [[sargable-expressions|Sargable Expressions]].

<span class="at-kicker">Best Practices</span>

## Best Practices

> [!grid|cols2]
>
> > [!card|section] Idempotence
> > Running same job twice produces same result. Enables safe retries. See [[idempotence|Idempotence]].
>
> > [!card|section] Data Quality
> > Tests for freshness, completeness, validity. Tools: Great Expectations, Soda, dbt tests.
>
> > [!card|section] Version Control
> > Git for code + dbt models. CI/CD for deployment. Infrastructure as Code (Terraform).
>
> > [!card|section] Documentation
> > Data dictionaries, lineage, catalog. Tools: Alation, Atlan, Dataplex Catalog.

<span class="at-kicker">GCP</span>

## GCP Specific

> [!grid|cols2]
>
> > [!card|section] BigQuery
> > Serverless data warehouse. Pay-per-query (on-demand) or flat-rate (capacity). See [[../cloud/gcp/analytics/bigquery|BigQuery]].
>
> > [!card|section] Dataflow
> > Managed Apache Beam. Batch + streaming pipelines. Autoscaling.
>
> > [!card|section] Pub/Sub
> > Managed Kafka-like. Global, durable message queue. See [[../cloud/gcp/analytics/pubsub|Pub/Sub]].
>
> > [!card|section] Cloud Composer
> > Managed Airflow. Orchestrates workflows across GCP services.

<span class="at-kicker">Interview Prep</span>

## Common Interview Questions

1. **Star vs Snowflake schema** — when each?
2. **Data skew** — what causes it, how to fix?
3. **Watermark** — purpose in streaming?
4. **CDC** — how does it work?
5. **Partition pruning** — what is it?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Core concepts
>> [[data-warehousing|Data Warehousing]], [[data-pipeline|Data Pipeline]], [[data-architecture/data-architecture|Data Architecture]]
>
>
>> [!card] GCP products
>> [[../cloud/gcp/analytics/bigquery|BigQuery]], [[../cloud/gcp/analytics/dataflow|Dataflow]], [[../cloud/gcp/analytics/pubsub|Pub/Sub]]
>
>
>> [!card] Tools
>> [[../../tools/processing-tools|Processing Tools]], [[../../tools/analytics-tools|Analytics Tools]]
>
>
>> [!card] Guides
>> [[../guides/data-pipeline-best-practices|Pipeline Best Practices]], [[../guides/testing-data-pipeline|Testing Pipelines]]
