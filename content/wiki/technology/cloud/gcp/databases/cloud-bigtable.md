---
title: Cloud Bigtable
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:05:00 pm
aliases:
  - Bigtable
  - Google Cloud Bigtable
category: Cloud
tags:
  - GCP
  - Database
  - NoSQL
  - WideColumn
  - DataEngineering
banner:
publish: true
---

> [!infobox|wikipedia]
> # Cloud Bigtable
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Wide-column NoSQL database |
> | **Category** | Database |
> | **Launched** | 2015 (GA Aug 2016) |
> | **Interface** | HBase API, gRPC, client libraries, CLI |
> | **Website** | cloud.google.com/bigtable |

---

> "Anyone who dreams of an uncommon life eventually discovers there is no choice but to seek an uncommon approach to living it."
> <cite>— Gary Keller</cite>

---

Cloud Bigtable is GCP's **wide-column, massively scalable NoSQL database**, designed for terabytes-to-petabytes of structured data with **low-latency, high-throughput key/value access** (source: Introduction to Google Cloud Bigtable.md).

It is a managed, productized version of the **Bigtable paper (2006)** â€” the same system that has powered Google Search, Analytics, Maps, and Gmail indexing for two decades. It is **HBase-API compatible**, which is why migrations from self-hosted Hadoop/HBase are relatively smooth.

## Best for

- High-throughput **key/value** access at massive scale.
- Values **â‰¤ 10 MB per cell** (larger values should use [[Cloud Storage|Cloud Storage]]).
- **Time-series** data (metrics, IoT telemetry).
- **Low-latency** (single-digit-ms) reads and writes.
- Analytics, streaming, and ML pipelines.

(source: Introduction to Google Cloud Bigtable.md)

## Data model

### Tables, rows, columns

A Bigtable table is a **sorted key/value map**:

- Rows are identified by a **row key** and stored in **lexicographic order**.
- Columns are grouped into **column families** (declared up front).
- **Column qualifiers** identify individual columns inside a family.

### Cells and timestamps

- Each row/column intersection can contain **multiple timestamped cells**.
- Old versions persist until garbage collection.
- Enables historical reads and time-travel queries.

### Sparse storage

- Empty columns consume **zero** storage.
- Rows can have completely different column sets.
- Ideal for highly irregular, schema-on-read data.

(source: Introduction to Google Cloud Bigtable.md)

## Architecture

Bigtable separates compute, metadata, and storage â€” a pattern now standard in modern distributed systems.

| Layer | Role |
| --- | --- |
| **Client libraries** | Language-specific SDKs; handle retries, connection pooling |
| **Frontend servers** | Auth (IAM), request routing, load isolation |
| **Instance** | Top-level container; 1+ clusters + tables + metadata |
| **Clusters** | Groups of nodes in a single zone; **multi-cluster replication** gives HA |
| **Nodes** | Stateless compute; serve reads/writes, cache, hold tablet pointers |
| **Tablets** | Row-range partitions; dynamically split/merged |
| **Colossus** | Persistent storage layer (GFS successor, see [[google-file-system]]) |

Because nodes are **stateless w.r.t. data** (data lives in Colossus):

- Node failures do **not lose data**.
- Recovery is fast â€” only metadata (tablet pointers) needs reassignment.
- Scaling is **linear**: add nodes â†’ more throughput.

(source: Introduction to Google Cloud Bigtable.md)

## Write path

1. Client â†’ Frontend (auth + route).
2. Node receives mutation.
3. Data written sequentially and persisted to **Colossus**.
4. Acknowledgement returned.

## Read path

1. Client â†’ Frontend â†’ correct node.
2. Node locates tablet.
3. Data fetched from Colossus or cache.
4. Returned to client.

Both paths are optimized for low latency and high throughput.

## Automatic rebalancing

Each zone has a master control process that:

- Monitors tablet sizes and traffic.
- **Splits hot / large tablets**.
- **Merges underutilized tablets**.
- Redistributes tablets across nodes.

Result: no manual sharding â€” Bigtable handles it transparently.

## Compression

- Bigtable compresses data internally.
- Works best on **repetitive / patterned** data stored adjacently.
- Pre-compress values > 1 MiB (internal compression disabled for large values).

## Disk/memory characteristics

- **Inactive columns**: zero space.
- **Column qualifiers** stored per row â†’ sparse-friendly.
- **Updates and deletes**: sequential writes; old values reclaimed by **compaction**.
- No manual compaction tuning.

## Advantages over self-managed HBase

1. **Linear scalability** â€” unlike HBase, which hits regionserver bottlenecks.
2. **Zero admin** â€” upgrades, restarts, replication all automated.
3. **Dynamic scaling** â€” add/remove nodes without downtime; automatic rebalancing.
4. **HBase-API compatibility** â€” existing Hadoop code works with minor changes.

(source: Introduction to Google Cloud Bigtable.md)

## Use cases

- **Time-series** â€” CPU/memory metrics, server telemetry.
- **Marketing** â€” user preferences, purchase history.
- **Financial** â€” stock prices, FX rates, transaction histories.
- **IoT** â€” energy meters, appliance telemetry.
- **Graph** â€” social network relationships, recommendations.

## Bigtable vs other GCP databases

| Dimension | Bigtable |
| --- | --- |
| Model | Wide-column key/value |
| Scale | TB â†’ PB |
| Latency | Single-digit ms |
| Consistency | Row-level strong, cross-row eventual |
| SQL | No (HBase / gRPC API; BigQuery can query via external tables) |
| Best size | Row value â‰¤ 10 MB |

Prefer [[cloud-spanner]] for relational SQL, [[cloud-datastore]] for documents, [[Cloud Storage|Cloud Storage]] for unstructured blobs.

## Interesting Facts

- The 2006 **Bigtable paper** spawned an entire industry: **HBase**, **Cassandra**, **Accumulo**, **ScyllaDB** are all descendants.
- Bigtable's **compute/storage separation** via Colossus pre-dated Snowflake's "decoupled" architecture by ~a decade.
- When you **add a node**, Bigtable doesn't copy any data â€” it just reassigns **tablet pointers**, making scale-out nearly instantaneous.

## Interview Questions can be asked

1. Compare Bigtable with [[cloud-spanner]] â€” when pick which?
2. Explain Bigtable's compute/storage separation and why it matters.
3. Why is row-key design so critical in Bigtable? What is a "hot tablet"?
4. How does Bigtable handle a node failure?
5. Walk through a write path from client to Colossus.

## Related pages

> [!multi-column]
>
>> [!card] Sister GCP databases
>> [[cloud-spanner|Cloud Spanner]], [[cloud-sql|Cloud SQL]], [[cloud-datastore|Cloud Datastore]], [[memorystore|Memorystore]]
>
>
>> [!card] Data Storage
>> [[../../../data-engineering/data-storage/wide-column-database|Wide-column Database]], [[../../../data-engineering/data-storage/timeseries-database|Time-series Database]], [[../../../data-engineering/data-storage/key-value-database|Key-Value Database]]
>
>
>> [!card] Foundations + certs
>> [[../storage/google-file-system|Google File System]], [[../foundations/google-cloud-platform|Google Cloud Platform]], [[Professional Data Engineer|PDE Certification]]
>
>
>> [!card] People
>> [[../../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]
>
>
>> [!card] Books
>> [[../../../../books/designing-data-intensive-applications|DDIA]]

