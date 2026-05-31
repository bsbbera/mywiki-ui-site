---
title: Data Ingestion Tools
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Ingestion Tools
category: Computer Science
tags:
  - DataEngineering
  - Ingestion
  - Tools
banner:
publish: true
---

> "The less you respond to negative people, the more positive your life will become."
> <cite>— Paulo Coelho</cite>

---

Catalog of data ingestion / replication tools (source: Tools/Data Ingestion/*.md).

> See [[../data-engineering/data-ingestion/data-ingestion|Data Ingestion]] for the conceptual treatment.

## Open-source / open-core

### Airbyte

[Airbyte](https://airbyte.com/) — open-core data ingestion with **300+ pre-built connectors**. Strong focus on **long-tail data sources** and customization. Built on the **singer protocol** for many connectors.

- **Strengths**: huge connector library, no-code/low-code custom builders, large community.
- **Weaknesses**: can be slow for large volumes; community-maintained connectors vary in quality.
- **Hosting**: self-host or Airbyte Cloud.

### Meltano

Open-source platform built on Singer + dbt + Airflow. CLI-driven. DataOps focus.

### dlt (data load tool)

Lightweight Python library for building custom ingestion pipelines. "**Stream-first**" — handles incremental loads, schema evolution, normalization automatically.

### Debezium

The de-facto **log-based [[../data-engineering/data-ingestion/change-data-capture|CDC]]** platform. Reads transaction logs from Postgres, MySQL, SQL Server, MongoDB, Oracle, DB2 → publishes change events to Kafka.

## Commercial / managed

### Fivetran

Managed ingestion with hundreds of connectors. **Pay per row**. Strong for SaaS sources (Salesforce, HubSpot, etc.).

- **Strengths**: zero-maintenance, reliable, comprehensive transformations layer.
- **Weaknesses**: pricey at scale; less customizable.

### Stitch Data

Talend-acquired (2018) ingestion platform. Singer-protocol-native. Simpler than Fivetran; lower cost; smaller connector library.

### Matillion Data Loader

Managed ETL/ELT with both visual and code interfaces.

### Confluent

Managed Kafka + Connect ecosystem. Most popular streaming-ingest platform.

## Cloud-native CDC

### Amazon DMS (Database Migration Service)

AWS's managed migration + ongoing replication. Supports homogeneous (Oracle→Oracle) and heterogeneous (Oracle→Aurora) migrations.

### GCP Datastream

GCP's managed CDC service. Supports Oracle, MySQL, Postgres, AlloyDB → BigQuery / GCS / Cloud SQL. Uses internal log readers (LogMiner for Oracle, etc.).

### Azure Data Factory + Synapse Link

Azure's CDC + ingestion offerings. Synapse Link enables near-real-time analytics on Cosmos DB and SQL Server.

## Decision matrix

| Need | Pick |
| --- | --- |
| Many SaaS sources, fully managed | **Fivetran** |
| Custom + open-source | **Airbyte** / **Meltano** / **dlt** |
| **CDC** from operational DBs | **Debezium** (self) / **Datastream** / **DMS** |
| **Streaming** from Kafka | **Confluent / MSK** |
| Lightweight custom Python pipelines | **dlt** |
| Cost-sensitive | **Stitch** / **Airbyte self-host** / **dlt** |

## Patterns

- **Full + incremental** — initial full load + ongoing delta. See [[../data-engineering/data-ingestion/full-load|Full]] / [[../data-engineering/data-ingestion/delta-load|Delta]].
- **Log-based CDC** for real-time. See [[../data-engineering/data-ingestion/change-data-capture|CDC]].
- **Schema evolution** — modern tools handle it automatically; legacy ones don't.
- **Idempotent** consumers — see [[../software-engineering/idempotence|Idempotence]].

## Related pages

> [!multi-column]
>
>> [!card] Ingestion concepts
>> [[../data-engineering/data-ingestion/data-ingestion|Data Ingestion]], [[../data-engineering/data-ingestion/change-data-capture|CDC]], [[../data-engineering/data-ingestion/full-load|Full Load]], [[../data-engineering/data-ingestion/delta-load|Delta Load]]
>
>
>> [!card] Sister catalogs
>> [[orchestrators-overview|Orchestrators]], [[processing-tools|Processing Tools]], [[databases-overview|Databases]]
>
>
>> [!card] People
>> [[../../people/martin-kleppmann|Martin Kleppmann]]

