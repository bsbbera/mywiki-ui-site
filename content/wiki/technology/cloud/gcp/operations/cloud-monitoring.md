---
title: Cloud Monitoring
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 6:00:00 pm
aliases:
  - Stackdriver Monitoring
  - Google Cloud Monitoring
category: GCP
tags:
  - gcp
  - cloud
  - operations
  - monitoring
  - observability
banner: 
publish: true
---

> [!infobox|right]
> # Cloud Monitoring
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed monitoring service |
> | **Category** | Operations & Observability |
> | **Launched** | 2014 (as Stackdriver) |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/monitoring |

---

> "You can't improve what you don't measure. Observability is not just about collecting metrics—it's about understanding the behavior of your systems in production."
> <cite>— Charity Majors, CTO at Honeycomb</cite>

---

Cloud Monitoring is Google Cloud's comprehensive observability platform that collects metrics, events, and metadata from Google Cloud services, AWS, hybrid cloud deployments, and on-premises infrastructure. Originally launched as Stackdriver in 2014 and acquired by Google in 2016, it provides a unified view of your entire technology stack's health and performance through customizable dashboards, sophisticated alerting mechanisms, and powerful analytics capabilities.

## Overview

Cloud Monitoring serves as the central nervous system for observability across multi-cloud and hybrid environments. It automatically ingests metrics from over 150 Google Cloud services including [[cloud-run]], [[cloud-functions]], [[bigquery]], and [[pubsub]], as well as AWS services through cross-cloud integration. The platform supports custom metrics via the Cloud Monitoring API, OpenCensus, and OpenTelemetry, allowing organizations to instrument their applications regardless of where they run. The Metrics Explorer provides an ad-hoc querying interface for investigating anomalies, while pre-built dashboards offer immediate visibility into service health.

## Key Features

**Metrics Collection and Management**: Cloud Monitoring captures built-in metrics from GCP services at 1-minute granularity, with retention periods of 6 weeks for granular data and 6 years for aggregated metrics. It supports custom metrics through the REST API and client libraries for Go, Java, Node.js, Python, and Ruby.

**Alerting Policies**: The platform enables sophisticated alerting based on metric thresholds, rate of change, absence of data, and forecasted violations. Notifications integrate with PagerDuty, Slack, email, SMS, and webhooks. Multi-condition alerting allows complex logic combining multiple signals.

**Uptime Checks**: Synthetic monitoring capabilities probe endpoints from multiple global locations (Virginia, Oregon, Singapore, etc.) using HTTP/HTTPS/TCP protocols with configurable frequency from 1 to 60 minutes. Checks can validate response content, SSL certificates, and latency thresholds.

**SLO Monitoring**: Service Level Objective (SLO) management enables defining reliability targets based on availability and latency metrics. Cloud Monitoring calculates burn rates, error budgets, and provides fast-burn alert policies when SLOs are at risk.

**Prometheus Integration**: Native support for Prometheus metrics ingestion through the Managed Service for Prometheus, allowing Kubernetes workloads to scrape and store Prometheus-compatible metrics without self-managing the storage backend.

## Use Cases

- **Infrastructure Monitoring**: Track CPU, memory, disk, and network utilization across Compute Engine VMs, GKE clusters, and autoscaling groups
- **Application Performance Monitoring**: Correlate custom application metrics with infrastructure health to identify bottlenecks
- **Multi-Cloud Observability**: Monitor AWS resources alongside GCP services using the cross-cloud dashboard capabilities
- **SRE Practices**: Implement SLO-based alerting and error budget policies to align engineering priorities with business reliability needs
- **Capacity Planning**: Analyze historical metrics trends to forecast resource requirements and optimize costs

## Pricing

Cloud Monitoring pricing is based on:
- **Metrics ingestion**: $0.258 per GiB of metrics data ingested (first 150 MiB per billing account per month free)
- **API calls**: $0.01 per 1,000 API read calls (first 1 million calls per billing account per month free)
- **Uptime checks**: $0.10 per 1,000 executions
- **Alerting notifications**: Varies by channel (email free, SMS charged at standard rates)
- **Managed Service for Prometheus**: Additional charges for scraped samples storage

## Related pages

> [!grid]
>
>> [!card] GCP Operations
>> [[cloud-logging]], [[cloud-trace]], [[cloud-profiler]], [[error-reporting]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
