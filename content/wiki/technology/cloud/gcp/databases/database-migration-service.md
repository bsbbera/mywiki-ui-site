---
title: Database Migration Service
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - DMS
  - Google Cloud DMS
category: GCP
tags:
  - gcp
  - cloud
  - databases
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Database Migration Service
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed database migration service |
> | **Category** | Databases |
> | **Launched** | 2021 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/database-migration |

---

> "Migration should be a journey of improvement, not just a lift and shift."
> <cite>— Google Cloud Database Migration Team</cite>

---

<span class="at-kicker">Database Migration · Google Cloud</span>
# Database Migration Service
<p class="at-lead">Database Migration Service is Google's fully managed, serverless database migration solution that enables seamless migration of databases to Google Cloud with minimal downtime. CDC technology continuously replicates data changes, allowing applications to remain operational during migration.</p>
<span class="at-stat">minimal downtime</span> &nbsp;·&nbsp; <span class="at-stat">MySQL</span> + <span class="at-stat">PostgreSQL</span> + <span class="at-stat">SQL Server</span> + <span class="at-stat">Oracle</span> sources &nbsp;·&nbsp; <span class="at-mark">live migration with continuous replication — cut over with seconds of downtime</span>

<span class="at-kicker">How It Works</span>

## Overview

DMS supports migrations from heterogeneous source databases to multiple GCP destinations. The service handles schema conversion, data type mapping, and continuous replication automatically. Migration jobs can be configured for one-time migrations or continuous replication for ongoing hybrid cloud scenarios.

DMS is offered as a **free service** — users only pay for the underlying compute resources (Cloud SQL or AlloyDB instances) and network egress charges. This makes it a cost-effective alternative to third-party migration tools or manual export/import procedures.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Zero-Downtime Migration**
>> CDC-based replication keeps source and target synchronized. Cut over when ready with seconds, not hours, of downtime.
>
>> [!card|section]
>> **Heterogeneous Support**
>> Migrate from MySQL, PostgreSQL, SQL Server, and Oracle sources. Multiple destination options on GCP.
>
>> [!card|section]
>> **Multiple Destinations**
>> Cloud SQL, AlloyDB, Cloud Spanner, BigQuery — choose the right target for your workload.
>
>> [!card|section]
>> **Schema Conversion**
>> Automated DDL translation between database engines. Handles data type mapping and constraint translation.
>
>> [!card|section]
>> **Connection Profiles**
>> Reusable source database connection configurations. Simplify repeated migrations or multi-database projects.
>
>> [!card|section]
>> **Data Validation**
>> Built-in consistency checking between source and target. Verify data integrity before cutover.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Cloud SQL Adoption**
>> Migrate on-premises MySQL or PostgreSQL to managed Cloud SQL with minimal application changes.
>
>> [!card|section]
>> **Oracle to PostgreSQL**
>> Modernize legacy Oracle databases to open-source PostgreSQL on Cloud SQL or AlloyDB.
>
>> [!card|section]
>> **SQL Server Migration**
>> Move SQL Server workloads to Cloud SQL for SQL Server with continuous replication.
>
>> [!card|section]
>> **AlloyDB Upgrades**
>> Migrate standard PostgreSQL to high-performance AlloyDB for demanding enterprise workloads.
>
>> [!card|section]
>> **Spanner Modernization**
>> Transform MySQL/PostgreSQL to globally distributed Spanner for mission-critical scale.
>
>> [!card|section]
>> **Continuous Replication**
>> Maintain hybrid cloud DR or read replica scenarios with ongoing CDC replication.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| **Migration Service** | **Free** — no charges for DMS itself |
| **Destination Instances** | Pay for Cloud SQL, AlloyDB, Spanner, or BigQuery resources |
| **Network Egress** | Standard GCP egress charges if applicable |
| **Storage** | Pay for storage consumed by migrated data on destination |
| **vs. Third-Party** | Significantly lower cost than licensed migration tools |

This pricing model significantly reduces migration costs compared to licensed third-party tools.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · DATABASE MIGRATION SERVICE
>> # From *on-premises DB* to *Cloud SQL*.
>> Live migration with continuous replication — cut over with seconds of downtime.
>
>> [!card|step]
>> ###### Step 01
>> ### Create *migration job*.
>> Define source database type, destination service, and migration mode (one-time or continuous). DMS provisions replication infrastructure.
>
>> [!card|step]
>> ###### Step 02
>> ### Configure *source & destination*.
>> Set up connection profiles with credentials and network access. DMS validates connectivity and begins initial data load.
>
>> [!card|step]
>> ###### Step 03
>> ### Promote *replica to primary*.
>> Once replication lag is minimal, stop writes to source, verify data consistency, and promote Cloud SQL to primary. Cutover complete in seconds.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP Databases
>> [[cloud-sql]], [[cloud-spanner]], [[alloydb]], [[cloud-bigtable]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
