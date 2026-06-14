---
title: Load Balancing
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Load Balancing
  - Traffic Distribution
  - Request Routing
  - Server Load Distribution
category: Software Engineering
tags:
  - SoftwareEngineering
  - DistributedSystems
  - Networking
  - Scalability
  - Reliability
banner:
publish: true
---

> [!quote]
> *Load balancing is the invisible hand that keeps services available under pressure — distributing work so no single node bears too much.*
> — Systems Engineering

# Load Balancing

<p class="at-lead">
Load Balancing distributes incoming network traffic across multiple servers or services to prevent any single resource from becoming a bottleneck. It is essential for achieving high availability, fault tolerance, and horizontal scalability in modern distributed systems.
</p>

## Overview

Load balancers operate at multiple layers: DNS (geographic), transport (L4), and application (L7). Algorithms range from simple round-robin and least-connections to sophisticated approaches that consider server health, latency, and session affinity. Cloud-native load balancers like NGINX, HAProxy, Envoy, and managed solutions like GCP Cloud Load Balancing integrate with auto-scaling groups to handle traffic spikes without manual intervention.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[horizontal-scaling]], [[caching]], [[kubernetes]]
>
>> [!card] Parent topic
>> [[devops-sre]]
>
>> [!card] See also
>> [[cloud-load-balancing]], [[latency-throughput]]
