---
title: Matei Zaharia
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Matei Zaharia
category: People
tags:
  - person
  - profile
  - data_engineering
  - spark
  - databricks
banner: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!tip]
> "Most of us live our lives by accident - we live as it happens. Fulfilment comes when we live our lives on purpose."
> <cite>— Simon Sinek</cite>

---

<span class="at-kicker">Profile · Distributed Systems · Computer Scientist & Entrepreneur</span>

# Matei Zaharia

<p class="at-lead">
Romanian-Canadian computer scientist who started Apache Spark in his first year of PhD at Berkeley, then co-founded Databricks and co-created Delta Lake — bringing ACID transactions to cheap object storage and making "Lakehouse Architecture" a real architectural category, not just a marketing term.
</p>

<span class="at-stat">2009</span> Spark creation &nbsp;·&nbsp; <span class="at-mark">Databricks</span> CTO &nbsp;·&nbsp; <span class="at-mark">Lakehouse</span> pioneer

---

<span class="at-kicker">Biography</span>

## Background

Romanian-Canadian computer scientist, co-founder and **CTO of Databricks**, and **Associate Professor of EECS at UC Berkeley**. Born in Romania and raised largely in Canada, earned his **BSc in Computer Science from the University of Waterloo** and his **PhD from UC Berkeley (2013)** at the **AMPLab** under **Ion Stoica** and **Scott Shenker**. Won a **gold medal at the ACM International Collegiate Programming Contest (ICPC) in 2005**.

Started the **Apache Spark** project in **2009** during his PhD to address the core limitation of Hadoop MapReduce — its inability to efficiently handle iterative algorithms (critical for machine learning) and interactive queries, because it materialized results to disk after every step. Spark's **in-memory processing model** made it 10–100× faster than MapReduce for ML workloads. Also co-started **Apache Mesos** (datacenter resource manager) during the same PhD. Won the **2014 ACM SIGOPS Dennis M. Ritchie Thesis Award** for this work.

Co-founded **Databricks** (2013) with fellow Berkeley AMPLab researchers. At Databricks, co-created **Delta Lake** (ACID transactions + schema enforcement on cloud object stores, enabling the lakehouse pattern), **MLflow** (open-source ML lifecycle management: tracking, packaging, deployment), **Dolly** (open-source instruction-tuned LLM), and **ColBERT** (efficient neural information retrieval). Databricks is valued at over **$43 billion** (2024). Forbes ranked Zaharia and **Ion Stoica** as the **3rd richest Romanians** (combined net worth ~$1.6 billion, 2022).

---

<span class="at-kicker">Key Contributions</span>

## Key contributions

> [!grid|cols2]
>
>> [!card|section]
>> ### Apache Spark (2009)
>> **In-memory distributed computing** — 10–100× faster than MapReduce for iterative ML. Started in his first year of PhD, became the industry standard for big data processing. The project that defined the post-Hadoop era.
>
>> [!card|section]
>> ### Apache Mesos
>> **Datacenter resource management** and cluster scheduling — the two-level scheduler that enabled efficient multi-tenant clusters, later adopted by Twitter, Apple, and others for massive-scale infrastructure.
>
>> [!card|section]
>> ### Delta Lake
>> **ACID transactions on data lakes** — the foundation of the Databricks Lakehouse. Brought database-style reliability to cheap object storage (S3, ADLS, GCS), enabling a new architectural category.
>
>> [!card|section]
>> ### MLflow
>> **Open-source ML lifecycle management** — tracking, model registry, and deployment. The standard open platform for managing the machine learning lifecycle at scale.
>
>> [!card|section]
>> ### Databricks
>> The company that brought Spark, Delta Lake, and Lakehouse to the enterprise — now valued at over $43 billion and defining the modern data stack alongside Snowflake.

---

<span class="at-kicker">Interesting Facts</span>

## Interesting facts

> [!grid|cols2]
>
>> [!card|section]
>> ### PhD Year One, Industry Standard
>> Zaharia started Spark during his **first year of PhD** — not in his thesis year — which is exceptionally early for a project that would become an industry standard. Most PhD projects mature in year 4-5.
>
>> [!card|section]
>> ### Delta Lake Made Lakehouse Real
>> **Delta Lake** is what made "Lakehouse Architecture" a real architectural category, not just a marketing term — it brought ACID semantics to cheap object storage (S3, ADLS, GCS), fundamentally changing how enterprises build data platforms.
>
>> [!card|section]
>> ### Databricks vs Snowflake
>> The **Databricks vs Snowflake** rivalry is one of the defining technology competitions of the 2020s data stack — both trace back to academic research from Zaharia's era at Berkeley, but approach the problem from different directions (lakehouse vs cloud warehouse).

---

<span class="at-kicker">Continue Reading</span>

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
