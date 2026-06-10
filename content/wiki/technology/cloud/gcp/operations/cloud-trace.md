---
title: Cloud Trace
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 6:00:00 pm
aliases:
  - Google Cloud Trace
  - Stackdriver Trace
category: GCP
tags:
  - gcp
  - cloud
  - operations
  - tracing
  - distributed-tracing
  - observability
banner: 
publish: true
---

> [!infobox|right]
> # Cloud Trace
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Distributed tracing service |
> | **Category** | Operations & Observability |
> | **Launched** | 2014 |
> | **Interface** | Console, API, Client Libraries |
> | **Website** | https://cloud.google.com/trace |

---

> "Distributed tracing is the GPS for your microservices. When requests flow through dozens of services, tracing shows you exactly where time is being spent and where things go wrong."
> <cite>— Ben Sigelman, Creator of Dapper and Co-founder of Lightstep</cite>

---

Cloud Trace is Google Cloud's distributed tracing system that collects latency data from applications and provides powerful visualization tools to analyze request flows across microservices architectures. Built on the same foundational concepts as Google's internal Dapper system, Cloud Trace enables developers to understand the end-to-end latency of requests as they propagate through complex, distributed systems. The service automatically captures traces from supported GCP services and provides client libraries for custom instrumentation, making it an essential tool for performance optimization and root cause analysis in modern cloud-native applications.

## Overview

Cloud Trace collects timing data from various points in your application using spans—individual units of work with start times, durations, and metadata. These spans are assembled into traces representing complete request journeys from initial client calls through multiple service hops. The Trace List view provides a waterfall visualization showing span hierarchies, while the Trace Detail view offers in-depth analysis of individual request paths including timing breakdowns, cross-service dependencies, and latency contributions from RPC calls, database queries, and external API invocations. The service supports automatic tracing for [[app-engine]], [[cloud-run]], Cloud Functions, and GKE workloads with minimal configuration, while also offering flexible instrumentation options for applications running anywhere.

## Key Features

**OpenTelemetry Integration**: Cloud Trace fully supports OpenTelemetry, the CNCF-backed observability standard, allowing applications to export traces using OTLP (OpenTelemetry Protocol) or through language-specific exporters. This enables vendor-neutral instrumentation that works across multiple observability backends.

**Zipkin and Jaeger Compatibility**: The service provides Zipkin-compatible endpoints, enabling existing Zipkin-instrumented applications to report traces without code changes. Jaeger users can similarly configure their agents to export to Cloud Trace.

**Automatic Instrumentation**: Built-in tracing for Google's load balancers, [[app-engine]] Standard and Flexible environments, [[cloud-run]] services, and Cloud Functions captures request details without requiring application code modifications. Automatic sampling ensures representative trace collection without overwhelming storage.

**Analysis Tools**: The Trace Overview dashboard displays latency distributions, highlighting percentiles (p50, p95, p99) and comparing recent performance against historical baselines. The Analysis Reports feature automatically identifies latency regression patterns and generates comparison reports between time periods or application versions.

**Cloud Debugger Integration**: Cloud Trace now incorporates Cloud Debugger capabilities (formerly a separate product), enabling snapshot capture and logpoint injection during active trace analysis for deeper debugging without stopping production applications.

**Custom Span Creation**: Client libraries for Java, Go, Python, Node.js, Ruby, PHP, and .NET enable manual span creation for custom application logic, allowing fine-grained visibility into internal processing steps, database transactions, and business logic execution.

## Use Cases

- **Latency Optimization**: Identify slow RPC calls, database queries, or external API dependencies causing end-to-end request delays; optimize critical path operations
- **Microservices Debugging**: Trace requests across service mesh architectures to pinpoint failure points, understand retry behavior, and analyze circuit breaker impacts
- **Performance Regression Detection**: Compare latency distributions across deployments to detect performance degradation and validate optimization efforts
- **SLA Compliance Monitoring**: Establish latency-based service level indicators (SLIs) and track performance against customer commitments
- **Capacity Planning**: Analyze trace-derived latency patterns to identify resource constraints and guide scaling decisions

## Pricing

Cloud Trace pricing is based on:
- **Spans ingested**: $0.20 per million spans ingested (first 2.5 million spans per billing account per month free)
- **Heavy spans**: Spans containing large amounts of metadata charged at equivalent multiple of base span pricing
- **Trace storage**: No separate storage charge; span data retained for 30 days at no additional cost
- **API calls**: Standard Cloud Trace API pricing for programmatic trace retrieval

## Related pages

> [!grid]
>
>> [!card] GCP Operations
>> [[cloud-monitoring]], [[cloud-logging]], [[cloud-profiler]], [[error-reporting]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
