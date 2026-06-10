---
title: Latency vs Throughput
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Latency
  - Throughput
  - Performance
  - Scalability
category: Technology
tags:
  - SoftwareEngineering
  - SystemDesign
  - Performance
  - Latency
  - Throughput
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Latency is the time it takes for a single request. Throughput is how many requests you can
> serve in that time. They are related, but they are not the same — and optimising for one
> can harm the other."
> <cite>— Systems design aphorism</cite>

---

<span class="at-kicker">Software Engineering · System Design</span>

# Latency vs Throughput

<p class="at-lead">
Latency and throughput are the two fundamental metrics of system performance. Latency measures
how long a single operation takes; throughput measures how many operations the system can
complete per unit of time. A system can have low latency but poor throughput, or high
throughput but unacceptable latency. Understanding their relationship — and their trade-offs
— is the foundation of scalable system design.
</p>

<span class="at-stat">latency</span> &nbsp;·&nbsp; <span class="at-stat">throughput</span> &nbsp;·&nbsp; <span class="at-stat">scalability</span> &nbsp;·&nbsp; <span class="at-mark">speed vs capacity</span>

<span class="at-kicker">Definitions</span>

## The Two Metrics

| Metric | Definition | Question it answers |
|--------|-----------|-------------------|
| **Latency** | Time to complete a single action | "How long does one request take?" |
| **Throughput** | Actions completed per unit time | "How many requests per second?" |

> [!info] The relationship
> Throughput is the inverse of average latency multiplied by concurrency:
> $$\text{Throughput} = \frac{\text{Concurrency}}{\text{Average Latency}}$$
> If latency is 10 ms and you have 100 parallel workers, throughput is 10,000 requests/sec.

---

<span class="at-kicker">Latency</span>

## Sources of Delay

Latency is the sum of every step a request travels through:

```mermaid
graph LR
    A[Client] -->|Network| B[Load Balancer]
    B -->|Network| C[Application Server]
    C -->|Compute| D[Business Logic]
    D -->|Network| E[Database]
    E -->|Disk I/O| F[Storage]
    F --> E --> D --> C --> B --> A
```

| Component | Typical latency |
|-----------|-----------------|
| **L1 cache reference** | 0.5 ns |
| **L2 cache reference** | 7 ns |
| **Main memory (RAM)** | 100 ns |
| **SSD read** | 50–150 μs |
| **HDD read** | 1–10 ms |
| **Same-datacenter network** | 0.5 ms |
| **Cross-continent network** | 150 ms |
| **Database query (simple)** | 1–10 ms |
| **Database query (complex)** | 100 ms–1 s |

> [!tip] The numbers every programmer should know
> Jeff Dean's famous latency numbers (circa 2010, updated since) are essential mental models.
> The key insight: memory is slow, disk is very slow, and network is glacial compared to CPU.

### Types of latency

| Type | Description | Example |
|------|-------------|---------|
| **Network latency** | Packet travel time | Round-trip time to server |
| **Processing latency** | Computation time | Model inference, query execution |
| **Queueing latency** | Time waiting for resources | Thread pool backlog, disk queue |
| **Serialization latency** | Encoding/decoding time | JSON marshalling, protobuf parsing |

---

<span class="at-kicker">Throughput</span>

## Maximising Capacity

Throughput is constrained by the **bottleneck resource** — the slowest component in the pipeline.

### Little's Law

$$L = \lambda \cdot W$$

Where $L$ = average number of items in the system, $\lambda$ = arrival rate (throughput),
and $W$ = average time in the system (latency). This deceptively simple law applies to any
stable system: queues, thread pools, databases, networks.

> [!example] Thread pool sizing
> If a request takes 100 ms (W) and you want to handle 1,000 req/s ($\lambda$), Little's Law
> says you need $L = 1{,}000 \times 0.1 = 100$ concurrent threads. Fewer threads = queueing;
> more threads = context-switch overhead.

---

<span class="at-kicker">Performance vs Scalability</span>

## Diagnosing the Problem

| Symptom | Diagnosis | Fix |
|---------|-----------|-----|
| Slow for one user | **Performance problem** | Optimise code, cache, reduce I/O |
| Fast for one user, slow for many | **Scalability problem** | Add resources, shard, distribute load |

> [!info] Performance vs scalability
> - **Performance**: How fast is one request? (latency)
> - **Scalability**: How does throughput grow with resources? (horizontal/vertical scaling)
>
> A system can be high-performance (fast per request) but unscalable (collapses under load).
> Conversely, a system can be scalable (handles load by adding machines) but have poor
> performance (each request is slow).

---

<span class="at-kicker">Trade-offs</span>

## You Cannot Optimise Both

| Optimisation | Effect on latency | Effect on throughput | When to use |
|-------------|-------------------|---------------------|-------------|
| **Batching** | Increases (wait for batch) | Increases (fewer round trips) | High-volume data pipelines |
| **Caching** | Decreases (cache hit) | Increases | Read-heavy workloads |
| **Async processing** | Decreases (ack early) | Neutral | Event-driven systems |
| **Connection pooling** | Decreases (reuse) | Increases | Database-heavy applications |
| **Compression** | Increases (CPU cost) | Increases (less bandwidth) | Network-bound transfers |
| **Pipelining** | Neutral per request | Increases (parallel in-flight) | HTTP/2, Redis |

> [!warning] The batching trap
> Batching improves throughput but increases latency for individual items — you must wait for
the batch to fill. For real-time systems (trading, gaming), batching may be unacceptable.

---

<span class="at-kicker">Measurement</span>

## Benchmarking Correctly

| Metric | What it captures | Tool |
|--------|-----------------|------|
| **p50 (median)** | Typical experience | Most APM tools |
| **p99** | Worst-case tail latency | Datadog, New Relic |
| **p99.9** | Extreme outliers | Custom tracing |
| **RPS / QPS** | Raw throughput | Load testing (k6, Locust) |
| **Saturation** | Resource exhaustion | Prometheus, Grafana |

> [!tip] Always measure tails
> Average latency hides outliers. A system with 10 ms average but 2 s p99 is unreliable.
> Users remember the slowest requests, not the average.

## Interesting facts

- The speed of light limits latency: a packet from New York to Sydney (16,000 km) takes at
  least 53 ms one way in fibre — and that is before routers, queues, or processing.
- Google found that increasing search result latency from 100 ms to 400 ms reduced searches
  per user by 0.2–0.6% — a measurable revenue impact at their scale.
- Amazon reported that every 100 ms of latency cost 1% in sales. Latency is not just a
  technical metric — it is a business metric.

## Interview questions

1. What is the difference between latency and throughput? Can a system have high throughput
   but high latency?
2. State Little's Law. How would you use it to size a thread pool?
3. A system is fast for one user but slow under load. Is this a performance or scalability
   problem? How would you fix it?
4. Why does batching improve throughput but increase latency?
5. What is tail latency, and why is the p99 metric more important than the average?
6. A database query takes 10 ms. How many queries per second can a single thread handle?
   What if you have 50 threads?

## Related pages

> [!grid]
>
>> [!card] System Design
>> [[horizontal-scaling|Horizontal Scaling]] · [[vertical-scaling|Vertical Scaling]] · [[load-balancing|Load Balancing]] · [[caching|Caching]]
>
>> [!card] Databases
>> [[../databases/indexing|Indexing]] · [[../databases/database-sharding|Sharding]] · [[../databases/acid-properties|ACID]]
>
>> [!card] Cloud
>> [[../cloud/gcp/networking/cloud-load-balancing|Cloud Load Balancing]] · [[../cloud/gcp/compute/compute-engine|Compute Engine]]
>
>> [!card] DevOps
>> [[devops-sre|DevOps & SRE]] · [[microservices|Microservices]] · [[kubernetes|Kubernetes]]
