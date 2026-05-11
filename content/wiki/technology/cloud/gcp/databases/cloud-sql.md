---
title: Cloud SQL
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:05:00 pm
aliases:
  - Google Cloud SQL
  - Managed SQL
category: Cloud
tags:
  - GCP
  - Database
  - Relational
  - DataEngineering
banner:
dg-publish: true
publish: true
---
---

Cloud SQL is GCP's **fully managed relational database** service. It runs MySQL, PostgreSQL, or SQL Server on Google's infrastructure, handling patching, backups, replication, failover, and scaling so you focus on the schema and queries (source: Google Cloud SQL.md).

Cloud SQL is the **default OLTP relational choice** for workloads that fit in a single region and don't need global strong consistency â€” for those you want [[cloud-spanner]].

## Supported engines

- **MySQL** â€” 5.7, 8.0+
- **PostgreSQL** â€” 10, 11, 12, 13, 14, 15, 16+
- **SQL Server** â€” 2017, 2019, 2022 Standard / Enterprise / Web / Express

Each runs the genuine upstream engine, so your existing connectors and tooling work unchanged (source: Google Cloud SQL.md).

## Core concepts

| Term | Meaning |
| --- | --- |
| **Instance** | A VM-backed DB server belonging to your project |
| **Database** | A logical DB inside an instance |
| **Table / Field / Row** | Standard relational model |
| **Primary Key** | Unique, non-null identifier per row |
| **Replication** | Read replicas or HA failover replicas |
| **Backup** | Automated daily + on-demand for restore |

(source: Google Cloud SQL.md)

## Creating and connecting

Create via **Console â†’ SQL â†’ Create Instance**, pick engine, instance ID, password, region, tier (source: Google Cloud SQL.md). Then:

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

## Key characteristics

- **Fully managed** â€” Google does provisioning, patching, upgrades, HA failover (source: Google Cloud SQL.md).
- **High availability** â€” optional regional (zonal failover) configuration.
- **Automated backups** â€” daily snapshots, 7-day default retention, point-in-time recovery (PITR) via binary/transaction logs.
- **Read replicas** â€” in same region or cross-region for read scaling.
- **Private IP (VPC)** or public IP with SSL / IAM database authentication.
- **Encryption** â€” Google-managed default; optional CMEK.

## Managing instances

- **Edit** â€” most settings apply immediately; instance size change triggers restart.
- **Restart** â€” drains connections; restarts on next connection.
- **Delete** â€” **destroys data permanently**; back up first.
- **SSL** â€” enable post-creation; download certs via Console.
- **IAM** â€” add project members for instance management.

(source: Google Cloud SQL.md)

## API capabilities

Cloud SQL Admin API exposes (source: Google Cloud SQL.md):

- List instances / tiers / SSL certs in a project
- Create / delete / restart instances
- Query backup runs
- Export DB to [[cloud-storage]] (`.sql.gz` / CSV)
- Import from [[cloud-storage]] into an instance
- Restore from backup

## Advantages

- **Fully managed** â€” no DBAs needed for routine ops.
- **Scalability** â€” vertical (resize instance) + horizontal (read replicas).
- **HA** â€” automatic failover in seconds on regional instances.
- **Integration** â€” Cloud Run, GKE, App Engine, Cloud Functions auth via Cloud SQL Auth Proxy.
- **Familiar** â€” exact upstream MySQL/Postgres/SQL Server; no learning curve.

## Limitations

- **Engine choice limited** â€” no Oracle, MariaDB, MongoDB, CockroachDB (source: Google Cloud SQL.md). For Postgres with higher scale/HA, consider **AlloyDB**.
- **Regional scope** â€” not globally distributed (use [[cloud-spanner]] for that).
- **Vendor lock-in** â€” migrating off GCP means `pg_dump` / `mysqldump` + import.
- **Cost at scale** â€” large dedicated instances get pricey; Spot/preemptible don't apply.

## Cloud SQL vs the rest of GCP databases

| Need | Pick |
| --- | --- |
| OLTP, < 64 vCPU / 512 GB RAM, single region | **Cloud SQL** |
| OLTP, Postgres-compat, higher QPS/HA | **AlloyDB** (stub) |
| OLTP, global strong consistency | [[cloud-spanner]] |
| Wide-column, TBâ€“PB, time-series, IoT | [[cloud-bigtable]] |
| Document NoSQL, serverless, mobile | [[cloud-datastore]] / Firestore |
| Key/value cache, sub-ms | [[memorystore]] |
| Analytics / warehouse | BigQuery (stub) |

## Interesting Facts

- Cloud SQL instances are **backed by Compute Engine VMs** internally, which is why instance-type resizes trigger a brief restart.
- The **Cloud SQL Auth Proxy** lets your app authenticate via IAM without managing network paths or SSL certs â€” a commonly missed ops simplifier.

## Interview Questions can be asked

1. Cloud SQL vs AlloyDB vs [[cloud-spanner]] â€” when pick which?
2. How does Cloud SQL achieve high availability?
3. Walk through the Cloud SQL backup + PITR model.
4. How would you connect a Cloud Run service to a private-IP Cloud SQL instance?
5. Why is Cloud SQL unsuitable for globally distributed, write-heavy workloads?

## Related pages

> [!multi-column]
>
>> [!card] Sister GCP databases
>> [[cloud-spanner|Cloud Spanner]], [[cloud-bigtable|Cloud Bigtable]], [[cloud-datastore|Cloud Datastore]], [[memorystore|Memorystore]]
>
>
>> [!card] Data Storage
>> [[../../data-engineering/concepts/data-storage/relational-database|Relational Database]]
>
>
>> [!card] Data Processing
>> [[../../data-engineering/concepts/data-processing/online-transaction-processing|OLTP]]
>
>
>> [!card] DBMS Theory
>> [[../../dbms/acid-properties|ACID Properties]]
>
>
>> [!card] Foundations + certs
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../certifications/professional-data-engineer|PDE Certification]]
>
>
>> [!card] People
>> [[../../people/edgar-f-codd|Edgar F. Codd]]

