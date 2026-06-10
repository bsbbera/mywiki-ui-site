---
title: Google File System
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GFS
  - Google FS
category: Computer Science
tags:
  - GCP
  - Storage
  - DistributedSystems
  - ComputerScience
  - History
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Google File System
> ###### Tool / Software
> | | |
> | --- | --- |
> | **Developer** | Google |
> | **Type** | Distributed file system |
> | **Domain** | Distributed storage |
> | **Initial release** | 2003 (SOSP paper) |
> | **Authors** | Sanjay Ghemawat, Howard Gobioff, Shun-Tak Leung |
> | **Written in** | C++ |
> | **License** | Proprietary (internal Google) |

---

> "No one has ever become poor by giving."
> <cite>— Anne Frank</cite>

---

<span class="at-kicker">Distributed Systems · Google Research</span>
# Google File System
<p class="at-lead">The Google File System (GFS) is a scalable, fault-tolerant distributed file system developed by Google and described in the seminal 2003 SOSP paper. It was engineered to store and process massive datasets on clusters of commodity Linux servers.</p>
<span class="at-stat">2003</span> paper · <span class="at-stat">chunk</span>-based · <span class="at-stat">master</span> + <span class="at-stat">chunkserver</span> architecture &nbsp;·&nbsp; <span class="at-mark">the 2003 paper that inspired HDFS and modern distributed storage</span>

<span class="at-kicker">How It Works</span>
## Overview

GFS is the **intellectual ancestor** of almost all modern distributed storage:

- Inspired **HDFS** (Hadoop's file system).
- Succeeded internally by **Colossus (2010)** — which now powers [[Cloud Storage]], [[cloud-spanner]], [[cloud-bigtable]], BigQuery, and more ([cloud.google.com blog](https://cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system)).

## Design goals

- Handle **terabytes-to-petabytes** on cheap commodity machines.
- Treat **hardware failures as normal**, not exceptional.
- Optimize for **sequential reads** and **append-heavy** workloads.
- Minimize dependence on expensive specialized hardware.

(source: Google File System.md)

## Architecture overview

A GFS cluster has three types of components, all running on commodity Linux boxes on a high-speed network:

| Component | Role |
| --- | --- |
| **Master** | Centralized metadata + coordination (one active per cluster) |
| **Chunk servers** | Store actual data as 64 MB **chunks** on local disks |
| **Clients** | Applications that read/write files via GFS library |

Control plane (metadata) and data plane (bytes) are **separated** — a pattern that persists in Colossus, [[cloud-bigtable]], and modern cloud storage systems.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Centralized Namespace**
>> Fine-grained locking for file and directory operations. Single master maintains the entire filesystem hierarchy in memory for fast access.
>
>> [!card|section]
>> **Automatic Replication**
>> 3 replicas by default, on different servers and racks. Data loss protection without specialized RAID hardware.
>
>> [!card|section]
>> **High Availability Design**
>> Master failure recovery from operation log; shadow masters for read-only access. Fault tolerance as a core design principle.
>
>> [!card|section]
>> **Automatic Data Recovery**
>> Checksums detect corruption; corrupted chunks replaced from good replicas. Self-healing storage without administrator intervention.
>
>> [!card|section]
>> **Append-Heavy Optimization**
>> Designed for Google's workloads: log processing, search index building. Sequential append is fast; random writes are second-class.
>
>> [!card|section]
>> **64 MB Chunks**
>> Reduces metadata size and enables efficient sequential reads. Trade-off: poor fit for many small files.

## Master server

### Responsibilities

- File namespace (directories).
- Access control.
- File → chunk mapping.
- Chunk → replica locations.
- Chunk version numbers.
- Lease management for writes.
- Garbage collection.

### Metadata storage

- Held **in memory** for speed.
- Mutations logged to an **operation log**, replicated off-box.
- Periodic **checkpoints** speed recovery.

### Master communication

- Periodic **heartbeats** to chunk servers.
- Issues replication + rebalancing instructions.
- Grants **leases** for write coordination.

The master **never carries file bytes**, so it is not a throughput bottleneck.

(source: Google File System.md)

## Chunk servers

- Files split into fixed-size **64 MB chunks**, each with a globally unique handle.
- Each chunk stored as a **Linux file** on local disk.
- **3 replicas** by default, on different servers and **different racks** for fault tolerance.
- **Checksums** verify data integrity on every read; corruption auto-detected + repaired from healthy replicas.

## Clients

- Talk to the master **only** for metadata.
- Talk to chunk servers **directly** for bulk data — the master is off the critical path.
- Clients **cache metadata** to reduce master load.

## Fault tolerance

- **Master failure** — recover from operation log; shadow masters may exist for read-only access.
- **Chunk server failure** — detected via missed heartbeats; lost replicas recreated automatically; clients redirected.
- **Data corruption** — detected via checksums; corrupted chunks replaced from good replicas.

## Data flow

### Read

1. Client asks master for file metadata.
2. Master returns chunk handle + replica locations.
3. Client picks closest replica.
4. Client reads bytes **directly from chunk server**.

### Write (primary-replica / lease model)

1. Client asks master for chunk metadata.
2. Master designates one replica as the **primary** (by granting a time-bound **lease**).
3. Client pushes data to **all** replicas (pipelined for bandwidth).
4. Primary decides serialization order and forwards mutation to secondaries.
5. All replicas apply the mutation in that order.
6. Client receives acknowledgement.

Leases guarantee a **single mutation order per chunk**, providing consistency.

(source: Google File System.md)

## Why 64 MB chunks?

- **Reduces metadata size** (fewer chunk entries for the master to track).
- Enables **efficient sequential reads** at high throughput.
- **Minimizes master interaction** per byte transferred.

Trade-off: **poor fit for many small files** — each tiny file still occupies a 64 MB chunk's metadata slot.

## Rack awareness

- Replicas spread across **multiple racks**.
- Cross-rack traffic minimized.
- An entire rack can fail without data loss.

## Scalability characteristics

A GFS cluster may scale to:

- **1,000+ nodes**
- **Hundreds of TB** of storage
- **Hundreds of concurrent clients**

Scaling is achieved by adding chunk servers — but the **single master** eventually becomes a constraint (addressed by Colossus, which distributed the metadata plane).

## Architectural limitations (addressed by Colossus)

- **Single-master** → scalability ceiling.
- **Not optimized for small files**.
- **Poor support for random writes** (optimized for append).
- Write performance bounded by slowest replica in the pipeline.

<span class="at-kicker">Real-World Applications</span>
## Legacy

GFS → **Colossus** (2010) which is what actually backs modern GCP services:

- [[Cloud Storage]] (object storage) — Colossus + metadata services.
- [[cloud-bigtable]] — stores all tablets in Colossus.
- [[cloud-spanner]] — storage layer is Colossus.
- BigQuery — Colossus-backed columnar storage (Capacitor).

Colossus solved GFS's single-master bottleneck by distributing metadata, supports smaller files, and has far stronger small-object performance.

## Interesting Facts

- The 2003 **GFS paper** is one of the most-cited systems papers in history — it ignited the Hadoop era.
- GFS assumed failures are **normal, not exceptional** — this philosophy became the defining principle of cloud-native system design.
- **HDFS** (Apache Hadoop's file system) is a near-direct open-source clone of GFS.
- GFS has been **retired internally** since 2010, replaced by **Colossus**, but its architectural DNA runs through every GCP storage service today.

## Interview Questions can be asked

1. Why did GFS pick a **single-master** design, and what are its trade-offs?
2. Explain the **lease + primary-replica** write path.
3. Why 64 MB chunks? When is that a bad choice?
4. Compare GFS and HDFS.
5. How did **Colossus** address GFS's scalability limits?
6. What makes GFS unsuitable for many small files?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · GOOGLE FILE SYSTEM
>> # From *single server* to *distributed file system*.
>> Understand the master node's role, trace the read and write paths, and apply lessons to modern distributed systems.
>
>> [!card|step]
>> ###### Step 01
>> ### *Understand* master node role.
>> The master maintains all metadata in memory: namespace, chunk mappings, and replica locations. It never touches actual file data.
>
>> [!card|step]
>> ###### Step 02
>> ### *Trace* read/write path.
>> Clients talk to master only for metadata, then directly to chunk servers for data. Writes use leases to ensure consistent ordering.
>
>> [!card|step]
>> ###### Step 03
>> ### *Apply* lessons to modern systems.
>> Separation of control and data planes, treating failures as normal, and commodity hardware — principles that power today's cloud storage.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister storage products
>> [[Cloud Storage|Cloud Storage]], [[persistent-disk|Persistent Disk]], [[filestore|Filestore]]
>
>
>> [!card] Built on GFS / Colossus
>> [[../databases/cloud-bigtable|Cloud Bigtable]], [[../databases/cloud-spanner|Cloud Spanner]], [[../analytics/bigquery|BigQuery]]
>
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]]
>
>
>> [!card] People
>> [[../../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]], [[../../../../people/doug-cutting|Doug Cutting]]
