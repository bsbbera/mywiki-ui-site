---
title: Data Vault Modeling
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Vault
  - Data Vault Modeling
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - Warehouse
banner:
publish: true
---

> "An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind."
> <cite>— Ayn Rand</cite>

---

**Data Vault modeling** is a technique developed by **[Dan Linstedt](https://en.wikipedia.org/wiki/Dan_Linstedt)** that aims to be the **most flexible** modeling approach — adapting easily to **change + new datasets** while **storing all historical data by default** (source: Concepts/Data Modeling/Data Vault Modeling.md).

It is built around three core table types.

## The three table types

### 1. Hubs

Tables that contain a list of **unique business keys** (natural keys), surrogate keys, and metadata describing the data source.

```sql
CREATE TABLE hub_customer (
  customer_hk        BINARY(16),       -- hash key (surrogate)
  customer_id        VARCHAR(50),      -- business key
  load_date          TIMESTAMP,
  record_source      VARCHAR(100)
);
```

### 2. Links

Tables that **associate** hubs together via business keys — the relationship layer.

```sql
CREATE TABLE link_customer_order (
  link_hk            BINARY(16),
  customer_hk        BINARY(16),
  order_hk           BINARY(16),
  load_date          TIMESTAMP,
  record_source      VARCHAR(100)
);
```

### 3. Satellites

Tables that hold **descriptive data** about entities, with **start + end date** columns to track historical changes.

```sql
CREATE TABLE sat_customer_demographics (
  customer_hk        BINARY(16),
  load_date          TIMESTAMP,
  load_end_date      TIMESTAMP,
  hash_diff          BINARY(16),
  full_name          VARCHAR(255),
  age                INT,
  email              VARCHAR(255)
);
```

(source: Concepts/Data Modeling/Data Vault Modeling.md)

## Advantages

- **Tracks all historical changes** by default — perfect for **auditing / tracing**.
- **Resilient to change** — adding a new attribute = adding a new satellite, no schema migration.
- **Parallel loading** — hubs, links, satellites can load independently.
- **Insert-only** — simpler write model; no destructive updates.

## Disadvantages

- **Advanced** — steeper learning curve; requires experienced data engineers.
- **Querying is complex** — many joins; usually downstream consumers query a [[dimensional-modeling|dimensional]] mart built on top.
- **High row count** — every change adds rows; storage/cost concerns.
- **Tooling immaturity** — fewer auto-generators than dimensional modeling.

## When to use

- **Highly regulated industries** (finance, healthcare, insurance) where audit trail is non-negotiable.
- **Frequently-changing** source systems where schema evolution is constant.
- **Multi-source consolidation** at enterprise scale — vault is excellent at integrating heterogeneous sources.

## Layered architecture

Most Data Vault implementations have **three layers**:

1. **Raw Vault** — pure hub/link/satellite of source data.
2. **Business Vault** — derived calculations, business rules.
3. **Information Marts** — dimensional models built for consumers.

Engineers love the vault layer; analysts love the mart layer.

## Modern tooling

- **dbtvault** / **AutomateDV** — open-source dbt packages for Data Vault.
- **VaultSpeed**, **WhereScape** — commercial Data Vault automation.
- **Snowflake**, [[../../cloud/gcp/analytics/bigquery|BigQuery]] — popular substrates.

## Interesting Facts

- **Data Vault 2.0** (2013) added hashing keys, big-data integration, agile patterns.
- Linstedt has run **Data Vault World Forum** annually since the early 2000s.

## Interview Questions

1. **Hub** vs **link** vs **satellite** — describe each.
2. Vault vs dimensional — when prefer each?
3. How does vault handle **schema evolution** more gracefully than dimensional?
4. Walk through ingesting a new source attribute into an existing vault.

## Related pages

> [!grid]
>
>> [!card] Sister modeling techniques
>> [[data-modeling|Data Modeling]], [[dimensional-modeling|Dimensional Modeling]], [[normalization|Normalization]]
>
>
>> [!card] Architecture
>> [[../data-architecture/data-warehouse|Data Warehouse]], [[../data-warehousing|Data Warehousing]]
>
>
>> [!card] People
>> [[../../../people/dan-linstedt|Dan Linstedt]], [[../../../people/bill-inmon|Bill Inmon]]
>
>
>> [!card] Books
>> [[../../../books/building-a-scalable-data-warehouse-with-data-vault-2|Building a Scalable Data Warehouse with Data Vault 2.0]]

