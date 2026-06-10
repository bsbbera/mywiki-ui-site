---
title: Building a Scalable Data Warehouse with Data Vault 2.0
Created:
  - 2026-04-29
date modified: Friday, June 5th 2026, 6:12:21 pm
aliases:
  - Data Vault 2.0 Book
category: Books
tags:
  - book
  - data_engineering
  - data_modeling
banner:
cssclass: wide-page
publish: true
---

> "The first man gets the oyster, the second man gets the shell."
> <cite>— Andrew Carnegie</cite>


> [!infobox|right]
> # Building a Scalable Data Warehouse with Data Vault 2.0
> ![cover](https://m.media-amazon.com/images/I/81HlVuYpCWL._SL1500_.jpg)
> ###### Book
> | | |
> | --- | --- |
> | **Authors** | [[../people/dan-linstedt\|Dan Linstedt]], Michael Olschimke |
> | **Publisher** | Morgan Kaufmann |
> | **Published** | 2015 |
> | **Domain** | Data Vault 2.0, data modeling |
> | **Pages** | ~684 |
> | **ISBN** | 978-0128025109 |

---

<span class="at-kicker">Data Vault · Dan Linstedt & Michael Olschimke</span>

<span class="at-gradient at-fs" style="--fs: 30px"><span class="at-gradient">Building Scalable Data Warehouse </span></span>
<p class="at-lead">
The definitive reference for Data Vault 2.0 — a modeling methodology designed from the ground up for auditability, parallelism, and schema agility in enterprise-scale data warehouses. Linstedt formalises the Hub-Link-Satellite structure and extends it with NoSQL patterns, automation, and a full delivery framework.
</p>

<span class="at-stat">2016</span> published &nbsp;·&nbsp; <span class="at-stat">Data Vault 2.0</span> methodology &nbsp;·&nbsp; <span class="at-mark">the definitive reference for Data Vault 2.0 implementation</span>

---







## Key Concepts

> [!grid|cols3]
>
>> [!card|section] Hubs
>> The core entity tables of Data Vault — they store the unique business keys of a business concept (customer ID, order number, product code) with no descriptive attributes. Hubs are the stable, insert-only anchor of the model; they never change once loaded.
>
>> [!card|section] Links
>> Relationship tables that connect two or more Hubs. A Link records that a relationship *existed* between business keys at a point in time, without embedding any descriptive data. Links are also insert-only and support many-to-many relationships natively.
>
>> [!card|section] Satellites
>> Descriptive attribute tables that hang off Hubs or Links. They store the context — names, addresses, statuses, amounts — along with a load timestamp and record source, enabling full history tracking. Multiple Satellites can describe the same Hub from different source systems.
>
>> [!card|section] Data Vault 2.0 vs 1.0
>> Version 2.0 extends the original methodology with: NoSQL and Big Data integration patterns, SEI CMMI-based process maturity, pattern-based automation and code generation, and a unified approach to agile delivery. It is a full methodology, not just a modeling technique.
>
>> [!card|section] Raw Vault & Business Vault
>> The Raw Vault is a faithful, non-interpreted load of source data into Hub/Link/Satellite structures. The Business Vault layer applies business rules, derived attributes, and calculated fields on top — separating raw auditability from business interpretation.
>
>> [!card|section] Point-in-Time (PIT) Tables
>> Snapshot tables that join the current state of multiple Satellites for a given Hub at any arbitrary timestamp. PITs are a performance optimisation — they pre-compute the "as-of" join logic so the Information Mart layer can query efficiently.
>
>> [!card|section] Bridge Tables
>> Pre-joined views across multiple Links and Hubs, materialised for query performance. Bridge tables flatten the highly normalised Raw Vault structure into grain-specific result sets, making it practical to serve dimensional data marts on top of Data Vault.
>
>> [!card|section] Hash Keys
>> Data Vault 2.0 uses MD5 or SHA hash keys derived from business keys as surrogate keys, rather than sequences. This enables parallel loading from multiple systems without sequence coordination, making the load architecture scalable across distributed environments.
>
>> [!card|section] Pattern-Based Automation
>> One of the major practical advantages of Data Vault 2.0 is that the strict structural patterns of Hubs, Links, and Satellites lend themselves to code generation. Templates can automate 70–80% of ETL/ELT code, dramatically reducing manual development effort.

---

<span class="at-kicker">Why It Matters</span>

## Takeaways

> [!grid|cols2]
>
>> [!card|section] Auditability is built in, not bolted on
>> Every row in a Data Vault table carries a load timestamp, record source, and (optionally) a hash diff. This means you always know *when* data arrived, *where* it came from, and *what changed* — without retrofitting audit columns after the fact.
>
>> [!card|section] Agility without losing history
>> Adding a new source system or new attribute never requires modifying existing tables — you simply add a new Satellite. This insert-only, append-only approach is why Data Vault handles schema evolution far more gracefully than 3NF or star schemas.
>
>> [!card|section] Designed for parallel loading
>> Hash-keyed Hubs, Links, and Satellites have no inter-table dependencies at load time (except the Hub must exist before its Satellites). This independence enables fully parallel ETL/ELT pipelines at enterprise scale with predictable performance.
>
>> [!card|section] A synthesis of Inmon and Kimball
>> Data Vault sits architecturally between the normalised EDW (Inmon) and the dimensional mart (Kimball). The Raw Vault provides Inmon-style enterprise integration; the Information Mart layer delivers Kimball-style dimensional structures for BI consumption.

---

> [!tip] Best read alongside
> Essential context: read **[[building-the-data-warehouse|Building the Data Warehouse]]** (Inmon) and **[[the-data-warehouse-toolkit|The Data Warehouse Toolkit]]** (Kimball) first to understand the two schools of thought that Data Vault 2.0 synthesises. Particularly relevant for teams building on modern cloud platforms (Snowflake, BigQuery, Databricks) where parallel loading and schema flexibility are first-class requirements.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] People
>> [[../people/dan-linstedt|Dan Linstedt]]
>
>
>> [!card] Data Modeling
>> [[../technology/data-engineering/data-modeling/data-vault-modeling|Data Vault]], [[../technology/data-engineering/data-modeling/data-modeling|Data Modeling]]
