---
title: Datastream
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Datastream
  - Cloud Datastream
  - Change Data Capture
  - CDC Streaming
category: Cloud
tags:
  - Cloud
  - GCP
  - Analytics
  - CDC
  - DataIngestion
banner:
publish: true
---

> [!quote]
> *Datastream turns your relational databases into real-time event streams — no batch windows, no stale data.*
> — GCP Data Engineering

# Datastream

<p class="at-lead">
Datastream is a serverless change data capture (CDC) and replication service on Google Cloud Platform. It captures ongoing changes from source databases and delivers them to destinations like Cloud Storage, BigQuery, and Cloud SQL with minimal latency and no performance impact on source systems.
</p>

## Overview

Datastream supports Oracle and MySQL sources with PostgreSQL and SQL Server on the roadmap. It handles schema changes, transactional ordering, and exactly-once delivery guarantees. By streaming changes rather than polling, Datastream enables real-time analytics, zero-ETL ingestion into BigQuery, and low-latency data replication for migration and disaster recovery scenarios.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[change-data-capture]], [[pubsub]], [[bigquery]]
>
>> [!card] Parent topic
>> [[gcp-analytics]]
>
>> [!card] See also
>> [[dataflow]], [[database-migration-service]], [[cloud-sql]]
