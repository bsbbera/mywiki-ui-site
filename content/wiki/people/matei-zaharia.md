---
title: Matei Zaharia
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 5:10:00 pm
aliases:
  - Matei Zaharia
category: People
tags:
  - person
  - data_engineering
  - spark
  - databricks
banner:
publish: true
---

> "Most of us live our lives by accident - we live as it happens. Fulfilment comes when we live our lives on purpose."
> <cite>— Simon Sinek</cite>

---

> [!infobox|right]
> # Matei Zaharia
> ###### Computer Scientist & Entrepreneur
> | | |
> | --- | --- |
> | **Born** | 1984/1985, Romania (raised in Canada) |
> | **Nationality** | Romanian-Canadian |
> | **Domain** | Distributed systems, big data, AI/ML infrastructure |
> | **Known for** | Creator of Apache Spark; Delta Lake; MLflow; Apache Mesos |
> | **Awards** | ACM ICPC Gold Medal (2005); 2014 ACM SIGOPS Dennis Ritchie Thesis Award |
> | **Institution** | Databricks (co-founder & CTO); UC Berkeley (Associate Professor, EECS) |
> | **Education** | BSc Computer Science, University of Waterloo; PhD Computer Science, UC Berkeley (2013) |

Romanian-Canadian computer scientist, co-founder and **CTO of Databricks**, and **Associate Professor of EECS at UC Berkeley**. Born in Romania and raised largely in Canada, earned his **BSc in Computer Science from the University of Waterloo** and his **PhD from UC Berkeley (2013)** at the **AMPLab** under **Ion Stoica** and **Scott Shenker**. Won a **gold medal at the ACM International Collegiate Programming Contest (ICPC) in 2005**.

Started the **Apache Spark** project in **2009** during his PhD to address the core limitation of Hadoop MapReduce — its inability to efficiently handle iterative algorithms (critical for machine learning) and interactive queries, because it materialized results to disk after every step. Spark's **in-memory processing model** made it 10–100× faster than MapReduce for ML workloads. Also co-started **Apache Mesos** (datacenter resource manager) during the same PhD. Won the **2014 ACM SIGOPS Dennis M. Ritchie Thesis Award** for this work.

Co-founded **Databricks** (2013) with fellow Berkeley AMPLab researchers. At Databricks, co-created **Delta Lake** (ACID transactions + schema enforcement on cloud object stores, enabling the lakehouse pattern), **MLflow** (open-source ML lifecycle management: tracking, packaging, deployment), **Dolly** (open-source instruction-tuned LLM), and **ColBERT** (efficient neural information retrieval). Databricks is valued at over **$43 billion** (2024). Forbes ranked Zaharia and **Ion Stoica** as the **3rd richest Romanians** (combined net worth ~$1.6 billion, 2022).

## Key contributions

- **Apache Spark** (2009): in-memory distributed computing — 10–100× faster than MapReduce for iterative ML
- **Apache Mesos**: datacenter resource management and cluster scheduling
- **Delta Lake**: ACID transactions on data lakes — the foundation of the Databricks Lakehouse
- **MLflow**: open-source ML lifecycle management (tracking, registry, deployment)
- **Databricks**: the company that brought Spark, Delta Lake, and Lakehouse to the enterprise

## Interesting facts

- Zaharia started Spark during his **first year of PhD** — not in his thesis year — which is exceptionally early for a project that would become an industry standard
- **Delta Lake** is what made "Lakehouse Architecture" a real architectural category, not just a marketing term — it brought ACID semantics to cheap object storage (S3, ADLS, GCS)
- The **Databricks vs Snowflake** rivalry is one of the defining technology competitions of the 2020s data stack — both trace back to academic research from Zaharia's era at Berkeley

## Related pages

> [!grid]
>
>> [!card] Spark
>> [[apache-spark|Apache Spark]], [[pyspark|PySpark]], [[rdd|RDDs]], [[spark-mllib|MLlib]]
>
>
>> [!card] Tools
>> [[processing-tools|Processing Tools (Spark)]], [[file-formats|File Formats (Delta)]]
>
>
>> [!card] Data Architecture
>> [[medallion-architecture|Medallion Architecture]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]

