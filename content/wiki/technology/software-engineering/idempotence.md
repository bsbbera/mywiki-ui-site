---
title: Idempotence
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Idempotence
  - Idempotent
category: Computer Science
tags:
  - DataEngineering
  - Patterns
  - Reliability
banner:
publish: true
---

> "The best mind-altering drug is the truth."
> <cite>— Lily Tomlin</cite>

---

**Idempotence** in data engineering means that **executing a data pipeline multiple times with the same input produces the same output**. The result of running an operation N times is identical to running it once (source: Concepts/Software Engineering/Idempotence.md).

```
f(f(x)) = f(x)
```

## Why it matters

Distributed systems **fail mid-operation** all the time:

- A pipeline crashes after writing some rows but before commit.
- A retry produces duplicate rows.
- A network partition causes a message to be delivered twice.
- An operator manually re-runs yesterday's job.

If the pipeline is **idempotent**, none of these cause data corruption — every run converges to the same state.

## Advantages

- **Safe retries** — fail-and-retry doesn't break data.
- **Duplicate-free** — at-least-once message delivery becomes safe.
- **Removes stale data** — re-running re-builds correct state.
- **Saves storage + cost** — no orphaned partial outputs.
- **Backfills work** — re-process any past period without fear.

## Patterns to achieve idempotence

### 1. UPSERT / MERGE

```sql
MERGE INTO target USING source ON (target.id = source.id)
  WHEN MATCHED THEN UPDATE SET ...
  WHEN NOT MATCHED THEN INSERT ...;
```

### 2. Delete + insert (truncate-and-load)

For partition-scoped writes — delete the partition, write the new data.

```sql
DELETE FROM target WHERE date = '2026-04-29';
INSERT INTO target ...;
```

### 3. Hash / fingerprint deduplication

Compute a deterministic ID for each row; insert only if not exists.

```sql
INSERT INTO target
SELECT * FROM source
WHERE NOT EXISTS (SELECT 1 FROM target WHERE id = source.id);
```

### 4. Deterministic file paths

Write to `s3://bucket/data/2026-04-29/output.parquet` — re-runs **overwrite** rather than create duplicates.

### 5. Functional / stateless transforms

Pure functions: `f(input) = output` always. Easy to retry.

## Anti-patterns (NOT idempotent)

- **Plain `INSERT`** without dedup → duplicates on retry.
- **Append-only writes with auto-increment IDs** → ambiguous on retry.
- **Side-effect APIs** (charge a credit card, send email) → require idempotency keys.

## Idempotency keys

For external side-effecting calls, pass an **idempotency key** (UUID per logical operation). The server stores recent keys and rejects duplicates.

Stripe's API and many cloud services support this natively.

## In streaming

- **Exactly-once semantics** in modern stream engines (Flink, Beam, Kafka Streams) provide effective idempotence — at-least-once + idempotent sinks = effectively exactly-once.
- See [[../data-engineering/data-processing/stream-data-processing|Stream Processing]].

## Interview Questions

1. **Idempotence** in plain English. Give an example pipeline.
2. **At-least-once + idempotent sink** = effectively exactly-once. Walk through.
3. Patterns to make a pipeline idempotent.
4. Why is plain `INSERT` non-idempotent?
5. **Idempotency keys** — when use?

## Related pages

> [!multi-column]
>
>> [!card] Reliability patterns
>> [[fan-out|Fan-out]], [[publisher-subscriber-pattern|Pub/Sub Pattern]], [[claim-check-pattern|Claim Check Pattern]], [[data-unit-test|Data Unit Test]]
>
>
>> [!card] Processing
>> [[../data-engineering/data-processing/stream-data-processing|Stream Processing]], [[../data-engineering/data-ingestion/delta-load|Delta Load]]
>
>
>> [!card] Guides
>> [[../guides/data-pipeline-best-practices|Pipeline Best Practices]], [[../guides/testing-data-pipeline|Testing Data Pipeline]]

