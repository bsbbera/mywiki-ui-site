---
title: Databricks
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - Databricks Lakehouse
category: Cloud
tags:
  - Databricks
  - DataEngineering
  - Spark
  - DeltaLake
  - Lakehouse
  - MachineLearning
banner:
dg-publish: true
publish: true
---

---

Databricks is a **cloud-based data and AI platform** built around **Apache Spark**, with a **unified workspace** for data engineers, data scientists, and analysts to collaborate on data-driven applications (source: Introduction to Databricks.md).

It is **multi-cloud** — runs on **AWS, Azure, and GCP** — which is why it lives outside the `gcp/` folder in this wiki.

## What Databricks is — in one paragraph

A managed Spark service plus a notebook IDE plus a **lakehouse** storage layer (Delta Lake) plus a managed ML / MLOps platform — all glued together with a unified data catalog (Unity Catalog) and access control. The big idea: **one platform for SQL analytics, data engineering, data science, and ML**, on top of object storage in your own cloud account.

## Why teams choose Databricks

(source: Introduction to Databricks.md)

1. **Unified workspace** — engineers, scientists, analysts collaborate in shared notebooks.
2. **Scalability and flexibility** — handles batch + streaming + ML at any scale.
3. **Integrated tools** — pre-built integrations with TensorFlow, PyTorch, Keras, MLflow, sklearn, dbt, Power BI, Tableau, etc.
4. **Security and compliance** — encryption, RBAC, auditing, integration with cloud-native security tools.
5. **Cross-cloud portability** — same workspace experience on AWS / Azure / GCP.

## Use cases

(source: Introduction to Databricks.md)

| Use case | What Databricks brings |
| --- | --- |
| **Data warehousing** | Databricks SQL on Delta Lake — competitive with BigQuery / Snowflake |
| **Data preparation** | Spark + Delta Live Tables + Wrangler |
| **Data analysis** | Notebooks + SQL editor + dashboards |
| **Machine learning** | MLflow tracking, AutoML, feature store, model serving |
| **Real-time processing** | Structured Streaming on Spark |

## Core terminology

(source: Introduction to Databricks.md)

| Term | Meaning |
| --- | --- |
| **Cluster** | Compute resources (VMs / containers) running Spark |
| **Notebook** | Web-based REPL/IDE — Python, SQL, R, Scala |
| **Job** | Scheduled or triggered notebook / code run |
| **Workspace** | Web app for organizing projects, notebooks, jobs |
| **Library** | Pre-packaged code imported into notebooks/jobs |
| **Autoscaling** | Cluster scales workers up/down with workload |
| **Spark** | Underlying distributed processing engine |
| **Delta Lake** | Open-source ACID storage layer on top of object storage (S3/ADLS/GCS) |

## Delta Lake — the secret weapon

Delta Lake is the **storage layer** that turns a data lake (object storage) into a **lakehouse** (source: Introduction to Databricks.md):

- **ACID transactions** on object-store data — no more "is this Parquet folder consistent?".
- **Schema enforcement + evolution**.
- **Time travel** — query the table as of any prior version.
- **Upserts and deletes** — `MERGE INTO` against object-store-backed tables.
- **Unified batch + streaming** — same table feeds both.

Delta Lake is **open-source** (Linux Foundation) and works with vanilla Spark, but Databricks builds the most polished experience on top.

## Architecture (cross-cloud)

```
                ┌──────────── Databricks Control Plane ────────────┐
                │  Web UI · Workspaces · Jobs · Unity Catalog     │
                └──────────────────────┬───────────────────────────┘
                                       │
   ┌───────────────────────────────────┼───────────────────────────────────┐
   │                                   │                                   │
[ AWS account ]              [ Azure subscription ]              [ GCP project ]
  · EC2 clusters                · VMSS clusters                    · GCE clusters
  · S3 (Delta tables)           · ADLS Gen2                        · GCS
  · IAM                          · Azure AD                         · IAM
```

The **control plane** (UI, metadata) is Databricks-managed. The **data plane** (compute + storage) runs in **your cloud account** — your data never leaves it.

## Databricks on GCP

When deployed on GCP, Databricks integrates with:

- **GCS** — Delta tables.
- **GKE** — clusters run on Google Kubernetes Engine.
- **BigQuery** — bidirectional connector.
- **Pub/Sub** — streaming source.
- **Cloud IAM** for identity.

So you can mix Databricks with [[../wiki/gcp/analytics/bigquery|BigQuery]] in the same architecture — Databricks for Spark/ML workloads, BigQuery for warehouse-style analytics.

## Databricks vs GCP-native alternatives

| Need | Databricks | GCP-native |
| --- | --- | --- |
| Data warehouse | **Databricks SQL** + Delta Lake | **[[../gcp/analytics/bigquery|BigQuery]]** |
| Code-first ETL | **PySpark / Spark SQL** notebooks | **[[../gcp/analytics/dataflow|Dataflow]]** (Beam) |
| Visual ETL | Workflows + DLT | **[[../gcp/analytics/datafusion|Data Fusion]]** |
| Streaming | **Structured Streaming** | **[[../gcp/analytics/pubsub|Pub/Sub]] + Dataflow** |
| ML | **MLflow + AutoML + Feature Store** | **Vertex AI** (stub) |
| Notebooks | Native | **Vertex AI Workbench / Colab Enterprise** |

The two stacks **overlap heavily**; many enterprises use **both** — Databricks for Spark+ML where teams already know Spark, BigQuery for SQL analytics and BI.

## When Databricks shines

- Existing Spark / Hadoop / Hive workloads to migrate.
- Heavy **ML / MLOps** — MLflow tracking, Feature Store, model serving.
- **Multi-cloud** mandate — same platform across AWS / Azure / GCP.
- **Data science notebook** culture; teams want collaborative Jupyter-style workflows.
- Need **time travel + ACID** on a data lake.

## When GCP-native is better

- **All-in on GCP** with strong SQL focus → BigQuery is simpler and cheaper.
- Want **fully serverless** with no cluster sizing → Dataflow / BigQuery beat Databricks clusters.
- Tight **cost discipline** for moderate workloads — Dataflow autoscales to zero, Databricks clusters cost more idle.

## Best practices

- Pair Databricks with **dbt** for SQL transformations.
- Use **Delta Live Tables (DLT)** for declarative streaming pipelines.
- Centralize governance in **Unity Catalog** (cross-workspace tables, lineage, access).
- Tag clusters and jobs for **cost attribution**; auto-terminate idle clusters.
- For ML, log experiments and models with **MLflow**.

## Interesting Facts

- Databricks was **founded by the original creators of Apache Spark** at UC Berkeley AMPLab (2013).
- The term **"lakehouse"** was popularized by Databricks — a system that combines the cheap, flexible storage of a **data lake** with the **transactional / SQL** power of a **warehouse**.
- Databricks is one of the most-funded private tech companies of all time and a frequent IPO contender.
- **Delta Lake**, **MLflow**, and **Spark** are all open-source projects originally from Databricks (or its founders).

## Interview Questions can be asked

1. Databricks vs **[[../gcp/analytics/bigquery|BigQuery]]** — when prefer which?
2. What is a **lakehouse** and how is it different from a data lake or a warehouse?
3. Walk through **Delta Lake** ACID guarantees — how does it work on top of object storage?
4. **Spark** vs **Apache Beam** programming models.
5. What does **Unity Catalog** govern, and how does it differ from Hive Metastore?
6. How would you implement CDC from Postgres into a Databricks lakehouse?

## Related pages

- [[../gcp/analytics/bigquery|BigQuery]]
- [[../gcp/analytics/dataflow|Dataflow]]
- [[../gcp/analytics/datafusion|Data Fusion]]
- [[../gcp/analytics/pubsub|Pub/Sub]]
- [[../gcp/storage/cloud-storage|Cloud Storage]]
