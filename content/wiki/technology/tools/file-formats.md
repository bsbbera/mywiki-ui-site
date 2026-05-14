---
title: File Formats
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - File Formats
  - Data Formats
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - Formats
  - Tools
banner:
publish: true
---

---

The file formats commonly used in data engineering pipelines (source: Tools/File Formats/*.md).

## Text formats (row-oriented, human-readable)

### CSV

Comma-separated values. Universally understood; **widely supported**, but:

- No schema; no types (everything is string).
- Brittle (commas, quotes, newlines in fields).
- No nesting.
- **Slow to parse**, large on disk.

Use for: small files, ad-hoc exports, human review. Avoid for big-data pipelines.

### JSON

Hierarchical text format. **Self-describing**, supports nesting and arrays. JSON Lines (`.jsonl` — one object per line) is the streaming-friendly variant.

- Verbose; large on disk.
- Slow to parse vs binary formats.

Use for: APIs, streaming events, semi-structured data.

## Binary, columnar, big-data

### Apache Parquet

[Parquet](https://parquet.apache.org/) — open-source **columnar** format designed for **column-oriented data in bulk**. Provides efficient compression + encoding with strong query performance. The de-facto **interchange format** for batch + interactive workloads (source: Tools/File Formats/Apache Parquet.md).

**Extension**: `.parquet`

**Strengths**:
- Reduces I/O — only relevant columns read.
- **Column compression** — type-specific encoding (RLE, dictionary, delta).
- Excellent for analytical queries.
- Supports nested data (STRUCT, ARRAY, MAP).
- Open standard; read by every major engine.

**Weaknesses**:
- **Not human-readable** (binary).
- More memory to read than row-based.
- **Slower to write** (metadata overhead).

### Apache ORC

Hortonworks columnar format. Hive-native. Similar capabilities to Parquet; less common outside Hadoop legacy.

### Apache Avro

Row-oriented binary with schema. **Schema-on-write** + **schema evolution** support. Common in **streaming** (Kafka).

- Strong **schema registry** support (Confluent Schema Registry).
- Good for **write-heavy** workloads where row-by-row writes happen.

### Apache Arrow

In-memory columnar format. **Not for storage** — for **fast cross-engine data exchange** in memory. Underlies pandas (pyarrow), DuckDB, ClickHouse, Spark, etc.

## Lakehouse formats (Parquet + metadata)

### Delta Lake

[Delta Lake](https://delta.io/) — open-source storage framework enabling a **Lakehouse architecture** with compute engines including Spark, PrestoDB, Flink, Trino, Hive. APIs for Scala, Java, Rust, Ruby, Python (source: Tools/File Formats/Delta Lake.md).

**Essentially a metadata layer on top of Parquet.**

**Advantages over plain Parquet**:

- **ACID transactions** with optimistic concurrency control.
- **Streaming I/O** (efficient).
- **Caching**.
- **Time travel** — query as of any prior version.
- **Z-ordering** — multi-dimensional clustering.
- **Schema enforcement + evolution**.
- **UPSERT + MERGE** statements.
- **Audit logging**.

**Disadvantages**: Same Parquet weaknesses; maintenance (`OPTIMIZE`, `VACUUM`); learning curve.

### Apache Iceberg

Netflix-born. Similar capabilities to Delta. Strong **engine-agnostic** support (BigQuery, Snowflake, Spark, Trino, Flink, Dremio). Excellent metadata-driven query planning.

### Apache Hudi

Uber-born. Strongest **upsert + incremental** processing model. Common in CDC + lakehouse stacks.

## Schemas + serialization

### Protocol Buffers (Protobuf)

Google's binary format. **Schema-required**, fast, compact. Used in gRPC, BigQuery Storage Write API, Kafka.

### Apache Thrift

Facebook-born; binary RPC + serialization. Less common today.

### MessagePack

Binary JSON-like; compact; fast. Used as a fast intermediate.

## Format choice cheat sheet

| Use case | Format |
| --- | --- |
| Ad-hoc exports, human review | **CSV** |
| API responses, streaming events | **JSON / JSON Lines** |
| Streaming with schema | **Avro** |
| Analytical batch + interactive | **Parquet** |
| Lakehouse (ACID + Parquet) | **Delta / Iceberg / Hudi** |
| In-memory exchange | **Arrow** |
| RPC / gRPC | **Protobuf** |
| Hive legacy | **ORC** |

## Compression

| Codec | Speed | Ratio | Use |
| --- | --- | --- | --- |
| **gzip** | Slow | High | Text files |
| **snappy** | Fast | Medium | Parquet default |
| **lz4** | Very fast | Lower | Streaming / hot data |
| **zstd** | Fast + tunable | High | Increasingly default |

## Related pages

> [!multi-column]
>
>> [!card] Data Storage
>> [[../concepts/data-storage/column-oriented-database|Column-oriented Database]]
>
>
>> [!card] Data Architecture
>> [[../concepts/data-architecture/data-lake|Data Lake]], [[../concepts/data-architecture/medallion-architecture|Medallion Architecture]]
>
>
>> [!card] Sister catalogs
>> [[object-storage|Object Storage]], [[processing-tools|Processing Tools]]
>
>
>> [!card] Products
>> [[../../databricks/databricks|Databricks]], [[../../gcp/analytics/bigquery|BigQuery]]
>
>
>> [!card] People
>> [[../../people/matei-zaharia|Matei Zaharia]]

