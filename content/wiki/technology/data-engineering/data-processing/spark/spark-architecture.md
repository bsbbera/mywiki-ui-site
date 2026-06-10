---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Spark Architecture
Created:
  - 2026-05-28
aliases:
  - Spark Architecture
  - Driver and Executors
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - Architecture
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Spark</span>

# Spark Architecture

<p class="at-lead">
A Spark application follows a driver / executor model. The driver is the brain that plans the work; executors are JVM processes on cluster machines that do the work. A cluster manager allocates the executors. Understanding this architecture is essential for tuning, debugging, and scaling Spark applications.
</p>

<span class="at-stat">3</span> key components &nbsp;·&nbsp; <span class="at-stat">2</span> deploy modes &nbsp;·&nbsp; <span class="at-mark">Driver plans, executors execute, cluster manager allocates</span>

> [!tip] The Spark Mental Model
> Think of the **driver** as the project manager and **executors** as the workers. The driver breaks work into tasks (jobs → stages → tasks), schedules them on executors, and tracks progress. Executors do the actual computation and store results. If the driver fails, the entire application fails.

<span class="at-kicker">Core Components</span>

## The pieces

### Driver

The **heart of the Spark application**. It:

1. Manages the information and state of the executors.
2. **Analyses, distributes, and schedules** work onto executors.
3. Hosts the **[[spark-sql|SparkSession]] / SparkContext** — the entry point and the connection to the cluster, used to create [[rdd|RDDs]], accumulators, and broadcast variables.

The driver translates user code into jobs through several internal components:

- **SparkContext** — the connection to the cluster.
- **DAGScheduler** — computes a [[rdd|DAG]] of stages per job and submits them to the TaskScheduler, choosing preferred task locations from cache / shuffle-file locations.
- **TaskScheduler** — sends tasks to the cluster, retries failures, mitigates stragglers.
- **SchedulerBackend** — pluggable backend per cluster type (Standalone / YARN / Mesos / local).
- **BlockManager** — puts and retrieves blocks across memory, disk, and off-heap.

### Executors

JVM processes running on cluster machines. They:

1. **Execute the code** (tasks) scheduled by the driver.
2. **Report execution status** back to the driver.
3. Store computation results in memory, on disk, or off-heap, and interact with storage systems.

Executors host **cores**; each core runs **one task at a time**.

<span class="at-kicker">Execution Hierarchy</span>

## Job → Stage → Task

Spark decomposes work into a hierarchy:

| Unit | Meaning |
| --- | --- |
| **Job** | Code that reads input, computes, and writes output — triggered by an **action**. |
| **Stage** | A job is split into stages at **shuffle boundaries** (like map / reduce phases). |
| **Task** | One unit of work **per partition**, executed by one core on one executor. |

Key invariants:

- Each **task works on exactly one [[rdd|partition]]** at a time.
- Tasks run **in parallel** across cores/executors.
- A **shuffle / exchange divides a job into stages** — see [[spark-performance|Spark Performance]].

<span class="at-kicker">Deploy Modes</span>

## Deploy modes: client vs cluster

Where the **driver** runs:

| Mode | Driver location | Use when |
| --- | --- | --- |
| **Client** | On the submitting machine | The machine is **inside / near** the cluster — low latency, easy debugging. If it goes offline, the whole job is lost. |
| **Cluster** | On a cluster node | The client is **remote** — avoids network latency between driver and executors; survives client disconnects. |

<span class="at-kicker">Sizing</span>

## Sizing executors

A rule-of-thumb worked example:

- **Cores per executor ≈ 5** is a good balance (more cores per executor hurts HDFS throughput).
- Given 10 nodes × 15 cores × 61 GB: executors per node = 15 / 5 = **3**; total = 10 × 3 = **30 executors**.
- **Executor memory** = the heap size of each executor JVM, set via `spark.executor.memory` / `--executor-memory`.

`spark-submit` is the command that launches an application on a cluster; in production these are usually scheduled or triggered. For standalone clusters, `--num-executors` may not work — control parallelism with `--executor-cores` (`spark.executor.cores`) and `--total-executor-cores` (`spark.cores.max`) instead; `--num-executors` is a **YARN** parameter.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Describe the **driver / executor** model and what each does.
2. **Job vs stage vs task** — what creates a new stage?
3. **Client vs cluster** deploy mode — when each?
4. How would you **calculate the number of executors** for a given cluster?
5. What is **executor memory** and how do you set it?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[rdd|RDDs]], [[spark-performance|Performance]], [[spark-sql|Spark SQL]]
>
>
>> [!card] Python API
>> [[pyspark|PySpark]]
>
>
>> [!card] Concepts
>> [[batch-data-processing|Batch Processing]], [[data-processing|Data Processing]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]
