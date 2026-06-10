---
title: Cloud SQL
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud SQL
  - Managed SQL
category: Cloud
tags:
  - GCP
  - Database
  - Relational
  - DataEngineering
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud SQL
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed relational database (MySQL, PostgreSQL, SQL Server) |
> | **Category** | Database |
> | **Launched** | 2011 (GA Feb 2014) |
> | **Interface** | SQL, gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/sql |

---

> "The road to success and the road to failure are almost exactly the same."
> <cite>— Colin R. Davis</cite>

---

<span class="at-kicker">Managed SQL · Google Cloud</span>
# Cloud SQL
<p class="at-lead">Cloud SQL is GCP's fully managed relational database service. It runs MySQL, PostgreSQL, or SQL Server on Google's infrastructure, handling patching, backups, replication, failover, and scaling so you focus on the schema and queries.</p>
<span class="at-stat">MySQL</span> + <span class="at-stat">PostgreSQL</span> + <span class="at-stat">SQL Server</span> &nbsp;·&nbsp; <span class="at-stat">99.95%</span> SLA &nbsp;·&nbsp; <span class="at-mark">fully managed relational DB — patches, backups, HA handled for you</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud SQL is the **default OLTP relational choice** for workloads that fit in a single region and don't need global strong consistency — for those you want [[cloud-spanner]].

## Supported engines

- **MySQL** — 5.7, 8.0+
- **PostgreSQL** — 10, 11, 12, 13, 14, 15, 16+
- **SQL Server** — 2017, 2019, 2022 Standard / Enterprise / Web / Express

Each runs the genuine upstream engine, so your existing connectors and tooling work unchanged.

## Core concepts

| Term | Meaning |
| --- | --- |
| **Instance** | A VM-backed DB server belonging to your project |
| **Database** | A logical DB inside an instance |
| **Table / Field / Row** | Standard relational model |
| **Primary Key** | Unique, non-null identifier per row |
| **Replication** | Read replicas or HA failover replicas |
| **Backup** | Automated daily + on-demand for restore |

## Creating and connecting

Create via **Console → SQL → Create Instance**, pick engine, instance ID, password, region, tier. Then:

```bash
gcloud sql connect myinstance --user=root
```

Then standard SQL:

```sql
CREATE DATABASE guestbook;
USE guestbook;
CREATE TABLE entries (
  guestName VARCHAR(255),
  content   VARCHAR(255),
  entryID   INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(entryID)
);
INSERT INTO entries (guestName, content) VALUES ('first guest', 'I got here!');
SELECT * FROM entries;
```

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Fully Managed**
>> Google handles provisioning, patching, upgrades, HA failover. Focus on your application, not database operations.
>
>> [!card|section]
>> **High Availability**
>> Optional regional configuration with automatic failover in seconds. 99.95% SLA for HA instances.
>
>> [!card|section]
>> **Automated Backups**
>> Daily snapshots with 7-day default retention. Point-in-time recovery (PITR) via binary/transaction logs.
>
>> [!card|section]
>> **Read Replicas**
>> Scale read traffic with replicas in same region or cross-region. Asynchronous replication for performance.
>
>> [!card|section]
>> **Cloud SQL Auth Proxy**
>> Secure connectivity without managing SSL certs or network paths. IAM-based authentication support.
>
>> [!card|section]
>> **Private & Public IP**
>> VPC peering for private connectivity or public IP with SSL/TLS encryption. Flexible access patterns.

## Managing instances

- **Edit** — most settings apply immediately; instance size change triggers restart.
- **Restart** — drains connections; restarts on next connection.
- **Delete** — **destroys data permanently**; back up first.
- **SSL** — enable post-creation; download certs via Console.
- **IAM** — add project members for instance management.

## API capabilities

Cloud SQL Admin API exposes:

- List instances / tiers / SSL certs in a project
- Create / delete / restart instances
- Query backup runs
- Export DB to Cloud Storage (`.sql.gz` / CSV)
- Import from Cloud Storage into an instance
- Restore from backup

## Advantages

- **Fully managed** — no DBAs needed for routine ops.
- **Scalability** — vertical (resize instance) + horizontal (read replicas).
- **HA** — automatic failover in seconds on regional instances.
- **Integration** — Cloud Run, GKE, App Engine, Cloud Functions auth via Cloud SQL Auth Proxy.
- **Familiar** — exact upstream MySQL/Postgres/SQL Server; no learning curve.

## Limitations

- **Engine choice limited** — no Oracle, MariaDB, MongoDB, CockroachDB. For Postgres with higher scale/HA, consider **AlloyDB**.
- **Regional scope** — not globally distributed (use [[cloud-spanner]] for that).
- **Vendor lock-in** — migrating off GCP means `pg_dump` / `mysqldump` + import.
- **Cost at scale** — large dedicated instances get pricey; Spot/preemptible don't apply.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| **Compute** | Per-vCPU-hour based on instance tier |
| **Storage** | Per-GB-month for provisioned disk (automatic or SSD) |
| **Network** | Ingress free, egress charged at standard rates |
| **Backups** | Storage for backups billed separately |
| **HA Premium** | Higher cost for regional failover configuration |

<span class="at-kicker">Real-World Applications</span>

## Cloud SQL vs the rest of GCP databases

| Need | Pick |
| --- | --- |
| OLTP, < 64 vCPU / 512 GB RAM, single region | **Cloud SQL** |
| OLTP, Postgres-compat, higher QPS/HA | **AlloyDB** |
| OLTP, global strong consistency | [[cloud-spanner]] |
| Wide-column, TB–PB, time-series, IoT | [[cloud-bigtable]] |
| Document NoSQL, serverless, mobile | [[cloud-datastore]] / Firestore |
| Key/value cache, sub-ms | [[memorystore]] |
| Analytics / warehouse | BigQuery |

## Interesting Facts

- Cloud SQL instances are **backed by Compute Engine VMs** internally, which is why instance-type resizes trigger a brief restart.
- The **Cloud SQL Auth Proxy** lets your app authenticate via IAM without managing network paths or SSL certs — a commonly missed ops simplifier.

## Interview Questions can be asked

1. Cloud SQL vs AlloyDB vs [[cloud-spanner]] — when pick which?
2. How does Cloud SQL achieve high availability?
3. Walk through the Cloud SQL backup + PITR model.
4. How would you connect a Cloud Run service to a private-IP Cloud SQL instance?
5. Why is Cloud SQL unsuitable for globally distributed, write-heavy workloads?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD SQL
>> # From *self-managed DB* to *managed Cloud SQL*.
>> Fully managed relational DB — patches, backups, HA handled for you.
>
>> [!card|step]
>> ###### Step 01
>> ### Create *instance & database*.
>> Choose MySQL, PostgreSQL, or SQL Server. Select region, tier, and storage type. Google provisions within minutes.
>
>> [!card|step]
>> ###### Step 02
>> ### Configure *HA & backups*.
>> Enable high availability for automatic failover. Set backup windows and point-in-time recovery retention.
>
>> [!card|step]
>> ###### Step 03
>> ### Connect *via Cloud SQL Auth Proxy*.
>> Secure connectivity from App Engine, Cloud Run, GKE without managing SSL certificates or firewall rules.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP databases
>> [[cloud-spanner|Cloud Spanner]], [[cloud-bigtable|Cloud Bigtable]], [[cloud-datastore|Cloud Datastore]], [[memorystore|Memorystore]]
>
>
>> [!card] Data Storage
>> [[../../../data-engineering/data-storage/relational-database|Relational Database]]
>
>
>> [!card] Data Processing
>> [[../../../data-engineering/data-processing/online-transaction-processing|OLTP]]
>
>
>> [!card] DBMS Theory
>> [[../../../databases/acid-properties|ACID Properties]]
>
>
>> [!card] Foundations + certs
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[Professional Data Engineer|PDE Certification]]
>
>
>> [!card] People
>> [[../../../../people/edgar-f-codd|Edgar F. Codd]]
