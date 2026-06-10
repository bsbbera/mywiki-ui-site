---
title: Cloud Logging
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Stackdriver Logging
  - Google Cloud Logging
category: GCP
tags:
  - gcp
  - cloud
  - operations
  - logging
  - observability
banner: https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Logging
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed log management service |
> | **Category** | Operations & Observability |
> | **Launched** | 2014 (as Stackdriver) |
> | **Interface** | Console, gcloud CLI, API, Logging Agent |
> | **Website** | https://cloud.google.com/logging |

---

> "Logs are the lifeblood of observability. Every event, every error, every transaction leaves a trace—and in those traces, we find the truth about our systems."
> <cite>— Cindy Sridharan, Author of "Distributed Systems Observability"</cite>

---

<span class="at-kicker">Log Management · Google Cloud</span>

# Cloud Logging

<p class="at-lead">Cloud Logging is Google Cloud's fully managed, real-time log management service that aggregates, stores, and analyzes logs from every GCP service, hybrid environment, and third-party application in one centralised, queryable repository.</p>

<span class="at-stat">800+ days</span> retention &nbsp;·&nbsp; <span class="at-stat">log-based metrics</span> &nbsp;·&nbsp; <span class="at-stat">real-time</span> log sinks &nbsp;·&nbsp; <span class="at-mark">every GCP service writes here by default — one place for all logs</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Logging automatically ingests logs from all GCP services including BigQuery, Pub/Sub, Cloud Run, GKE, and Cloud Functions without requiring additional configuration. The service organizes logs hierarchically using the Logs Explorer interface, supporting advanced filtering with the Logging Query Language (LQL)—a SQL-like syntax for precise log retrieval. Each GCP project receives two automatically created log buckets: the `_Required` bucket (retains Admin Activity, System Event, and Access Transparency logs for 400 days with no charge) and the `_Default` bucket (retains all other logs with configurable retention). Organizations can create custom log buckets with customized retention periods ranging from 1 day to 10 years.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Log Sinks & Routing
>> Export logs to Cloud Storage buckets for long-term archival (JSON/Avro formats), BigQuery datasets for SQL-based analysis, Pub/Sub topics for real-time SIEM streaming, or cross-project Logging buckets. Sink filters using LQL enable selective routing based on resource type, severity, or log content.
>
>> [!card|section]
>> ##### Log Analytics
>> Powered by BigQuery, Log Analytics enables SQL queries directly against log data without explicit export configuration. Join logs with other datasets, create visualizations in Looker Studio, and build custom dashboards for security auditing, cost analysis, and operational troubleshooting.
>
>> [!card|section]
>> ##### Log-Based Metrics
>> Create custom metrics from log content using counter metrics (event frequency) or distribution metrics (latency histograms). These metrics integrate seamlessly with Cloud Monitoring for alerting and dashboarding based on log-derived signals—turning log events into actionable SLIs.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Structured Logging
>> Native support for JSON payload parsing enables extracting and indexing fields automatically. The Cloud Logging Ops Agent supports structured logging from applications, parsing common formats like Apache, Nginx, MySQL, and custom application logs with configurable field extraction.
>
>> [!card|section]
>> ##### Flexible Retention & Custom Buckets
>> `_Required` bucket retains Admin Activity and Access Transparency logs for 400 days at no charge. Custom log buckets support retention from 1 day to 10 years, enabling compliance-driven retention policies for regulated industries without external archival infrastructure.
>
>> [!card|section]
>> ##### Error Reporting Integration
>> Tight integration with Error Reporting automatically captures exception logs and groups errors by stack trace for faster incident response. One-click navigation from error groups to surrounding log context enables complete incident investigation within a single console.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Security Auditing & Compliance
>> Retain Admin Activity logs for governance with 400-day free retention. Audit data access patterns, detect anomalous API calls, and export to SIEM systems via Pub/Sub log sinks. Log Analytics enables complex forensic queries across historical data during security incidents or compliance audits.
>
>> [!card|section]
>> ##### Application Debugging & Operational Intelligence
>> Trace request flows across microservices using correlation IDs, analyze application error patterns, and identify root causes of production issues. Build real-time dashboards showing system health, API usage patterns, and customer behavior analytics from log-derived metrics.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Cost Analysis & Attribution
>> Monitor resource usage logs to identify optimization opportunities and attribute costs to specific workloads or teams. Create log-based metrics for billing-relevant events and route them to Cloud Monitoring for budget alerting and Looker Studio dashboards.
>
>> [!card|section]
>> ##### Multi-Environment Centralization
>> Aggregate logs from GCP, AWS, on-premises, and hybrid environments using the Ops Agent and third-party integrations. Route logs to separate BigQuery datasets or Cloud Storage buckets per environment for access-controlled analysis by different teams.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Log ingestion** | $0.50 per GiB ingested; first 50 GiB per project per month free |
| **_Required bucket storage** | Free for 400 days (Admin Activity, System Event, Access Transparency logs) |
| **_Default & custom bucket storage** | $0.01 per GiB per month after retention limit |
| **Log Analytics queries** | Analyzed bytes charged at BigQuery on-demand pricing rates |
| **Excluded logs** | Logs routed to excluded sinks do not incur ingestion charges |
| **Ops Agent** | Free to deploy; compute resource costs apply for the VM running the agent |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD LOGGING
>> # From *scattered logs* to *centralised observability*.
>> Configure sinks to route logs where you need them, create log-based metrics for key signals, then alert on them in Cloud Monitoring.
>
>> [!card|step]
>> ###### Step 01
>> ### *Configure* log sinks.
>> Create log sinks to route logs to Cloud Storage for long-term archival, BigQuery for SQL analysis, or Pub/Sub for SIEM streaming. Apply LQL filters to route only relevant log types to each destination, minimizing storage and ingestion costs.
>
>> [!card|step]
>> ###### Step 02
>> ### *Create* log-based metrics.
>> Define counter or distribution metrics from log content—for example, counting HTTP 5xx errors from access logs or measuring request latency from structured fields. These metrics appear automatically in Cloud Monitoring for dashboarding and alerting.
>
>> [!card|step]
>> ###### Step 03
>> ### *Set* log-based alerts.
>> Configure alerting policies in Cloud Monitoring that trigger on log-based metric thresholds. Set up notification channels (Slack, PagerDuty, email) and route high-severity log entries directly to Pub/Sub for real-time SOAR playbook execution.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP Operations
>> [[cloud-monitoring]], [[cloud-trace]], [[cloud-profiler]], [[error-reporting]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
