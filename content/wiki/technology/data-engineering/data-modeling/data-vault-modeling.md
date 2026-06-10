---
title: Data Vault Modeling
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Vault
  - Data Vault Modeling
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - Warehouse
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind."
> <cite>— Ayn Rand</cite>

---

<span class="at-kicker">Data Modeling · Enterprise Pattern</span>

# Data Vault Modeling

<p class="at-lead">
Data Vault modeling is a technique developed by Dan Linstedt that aims to be the most flexible modeling approach — adapting easily to change and new datasets while storing all historical data by default. Built around three core table types: hubs, links, and satellites.
</p>

<span class="at-stat">3</span> table types &nbsp;·&nbsp; <span class="at-stat">Insert-only</span> loading &nbsp;·&nbsp; <span class="at-mark">hubs, links, satellites — audit-ready modeling for enterprise DWH</span>

> [!tip] When to Use Data Vault
> Choose Data Vault for highly regulated industries (finance, healthcare, insurance) where audit trails are non-negotiable. Ideal for frequently-changing source systems and multi-source consolidation at enterprise scale where schema evolution is constant.

<span class="at-kicker">Core Components</span>

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

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Full History
> > Tracks all historical changes by default — perfect for **auditing / tracing**.
>
> > [!card|section] Change Resilient
> > Adding a new attribute = adding a new satellite, no schema migration.
>
> > [!card|section] Parallel Loading
> > Hubs, links, satellites can load independently.
>
> > [!card|section] Insert-only
> > Simpler write model; no destructive updates.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Advanced Complexity
> > Steeper learning curve; requires experienced data engineers.
>
> > [!card|section] Complex Queries
> > Many joins; usually downstream consumers query a [[dimensional-modeling|dimensional]] mart built on top.
>
> > [!card|section] High Row Count
> > Every change adds rows; storage/cost concerns.
>
> > [!card|section] Tooling Immaturity
> > Fewer auto-generators than dimensional modeling.

<span class="at-kicker">Architecture</span>

## Layered architecture

Most Data Vault implementations have **three layers**:

> [!grid|cols3]
>
> > [!card|section] 1. Raw Vault
> > Pure hub/link/satellite of source data.
>
> > [!card|section] 2. Business Vault
> > Derived calculations, business rules applied.
>
> > [!card|section] 3. Information Marts
> > Dimensional models built for consumers.

Engineers love the vault layer; analysts love the mart layer.

## Modern tooling

> [!grid|cols2]
>
> > [!card|section] Open Source
> > **dbtvault** / **AutomateDV** — dbt packages for Data Vault.
>
> > [!card|section] Commercial
> > **VaultSpeed**, **WhereScape** — Data Vault automation tools.
>
> > [!card|section] Cloud Platforms
> > **Snowflake**, [[../../cloud/gcp/analytics/bigquery|BigQuery]] — popular substrates.

<span class="at-kicker">Context</span>

## Interesting Facts

- **Data Vault 2.0** (2013) added hashing keys, big-data integration, agile patterns.
- Linstedt has run **Data Vault World Forum** annually since the early 2000s.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Hub** vs **link** vs **satellite** — describe each.
2. Vault vs dimensional — when prefer each?
3. How does vault handle **schema evolution** more gracefully than dimensional?
4. Walk through ingesting a new source attribute into an existing vault.

<span class="at-kicker">Continue Reading</span>

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
