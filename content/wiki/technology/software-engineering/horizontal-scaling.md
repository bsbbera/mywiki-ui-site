---
title: Horizontal Scaling
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Horizontal Scaling
  - Scaling Out
category: Computer Science
tags:
  - DataEngineering
  - Scaling
  - DistributedSystems
banner:
publish: true
---

---

A **horizontally scalable system** is one that increases capacity by **adding more machines** to the system — also known as **scaling out** (source: Concepts/Software Engineering/Horizontal Scaling.md).

```
Before:           After:
[Computer 1]   →   [Computer 1] [Computer 2] [Computer 3]
```

## Advantages

- **Parallel execution** of workloads.
- **Increased fault tolerance** — losing one node ≠ losing the system.
- **Cheaper at scale** than [[vertical-scaling|vertical scaling]] — many commodity machines vs one giant one.
- **Effectively unlimited** — you can keep adding nodes (subject to coordination overhead).

## Disadvantages

- **Decreased consistency** — distributed systems suffer the [[cap-theorem|CAP]] trade-off.
- **Joining data between nodes** is slow (network).
- **Operational complexity** — load balancing, service discovery, failure detection.
- **Coordination overhead** — distributed consensus (Paxos/Raft) is hard.

## Where it shines

Almost every modern cloud-scale workload:

- **Stateless services** — horizontal-scale-friendly by default.
- **NoSQL databases** — Cassandra, DynamoDB, MongoDB, [[../../../gcp/databases/cloud-bigtable|Bigtable]].
- **Object storage** — S3, GCS, Blob.
- **Stream processing** — Flink, Beam/Dataflow, Spark Streaming.
- **MPP analytics** — [[../../../gcp/analytics/bigquery|BigQuery]], Snowflake, Redshift.

## Implementation techniques

- **Load balancing** — distribute requests across nodes.
- **Sharding** — split data across nodes; see [[database-sharding]].
- **Replication** — copy data for read scaling + fault tolerance.
- **Service discovery** — Consul, etcd, Kubernetes DNS.
- **Auto-scaling** — add/remove nodes based on load.

## Stateless vs stateful

- **Stateless** services scale **horizontally** trivially. Just add more replicas behind a load balancer.
- **Stateful** services need careful design — sharding, replication, leader election.

## On GCP

- **GKE** auto-scales pods + nodes.
- [[../../../gcp/compute/cloud-run|Cloud Run]] auto-scales containers from 0 → many.
- [[../../../gcp/databases/cloud-spanner|Spanner]] auto-shards transparently.
- [[../../../gcp/analytics/dataflow|Dataflow]] auto-scales workers.

## Interview Questions

1. **Horizontal** vs **vertical** scaling — when each.
2. Why are **stateless** services easier to scale?
3. **CAP** trade-off in horizontally scaled systems.
4. Walk through scaling a Postgres OLTP DB beyond a single primary.

## Related pages

> [!multi-column]
>
>> [!card] Sister scaling concepts
>> [[vertical-scaling|Vertical Scaling]], [[database-sharding|Sharding]], [[cap-theorem|CAP Theorem]]
>
>
>> [!card] Storage
>> [[../data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] Books
>> [[../../../books/designing-data-intensive-applications|DDIA]]

