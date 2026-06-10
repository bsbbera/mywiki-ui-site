---
title: Cloud Scheduler
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Scheduler
category: GCP
tags:
  - gcp
  - cloud
  - devops
banner: https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Scheduler
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service / Serverless |
> | **Category** | DevOps / Job Scheduling |
> | **Launched** | 2018 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/scheduler |

---

> "A reliable cron job is the unglamorous backbone of half the world's automated systems."
> <cite>— Systems engineering wisdom</cite>

---

<span class="at-kicker">Job Scheduling · Google Cloud</span>

# Cloud Scheduler

<p class="at-lead">
Cloud Scheduler is Google Cloud's fully managed cron job service that allows you to schedule virtually any job using standard Unix-cron format. It supports HTTP/HTTPS endpoints, Pub/Sub topics, and App Engine HTTP targets with built-in retry logic, timezone support, and pause/resume controls — eliminating the need to maintain dedicated cron servers.
</p>

<span class="at-stat">100%</span> managed &nbsp;·&nbsp; <span class="at-stat">cron</span> syntax &nbsp;·&nbsp; <span class="at-stat">HTTP</span> + <span class="at-stat">Pub/Sub</span> + <span class="at-stat">App Engine</span> targets &nbsp;·&nbsp; <span class="at-mark">fully managed cron — no servers, no crontab</span>

<span class="at-kicker">How It Works</span>

## Overview

A **job** in Cloud Scheduler consists of three parts: a **schedule** (standard 5-field Unix cron expression), a **target** (what to invoke), and a **configuration** (timezone, retry settings, description). Jobs are created per project and per region, and each job fires at most once per minute (the minimum cron interval). Cloud Scheduler guarantees **at-least-once delivery** — jobs will execute; rare duplicate firings are possible in failure scenarios and consumers should be designed to be idempotent.

**Target types** define what happens when the schedule fires:

- **HTTP/HTTPS** — sends an HTTP request (any method: GET, POST, PUT, DELETE, PATCH, HEAD) to any publicly reachable URL, with configurable headers and body; supports OIDC and OAuth2 bearer token authentication for calling GCP-hosted services securely
- **Pub/Sub** — publishes a message (with configurable body and attributes) to a specified Pub/Sub topic; the message is then consumed by any Pub/Sub subscriber (Cloud Run, Cloud Functions, Dataflow, custom consumers)
- **App Engine HTTP** — sends an HTTP request to a specific App Engine service and version within the same project, without requiring a public URL (uses the internal App Engine routing)

Cloud Scheduler runs on Google's Borg infrastructure with a global SLA, meaning it does not rely on any single VM or zone. The service handles zone failures transparently, ensuring jobs continue firing even during GCP infrastructure maintenance events.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Unix cron syntax**
>> Standard 5-field cron expression plus a `seconds` field for sub-minute scheduling; supports shortcuts like `@hourly`, `@daily`, `@weekly`.
>
>> [!card|section]
>> **Timezone support**
>> Configure jobs with any IANA timezone (e.g., `America/New_York`, `Asia/Kolkata`), allowing business-logic-aligned scheduling without UTC offset calculations.
>
>> [!card|section]
>> **HTTP target with auth**
>> HTTP jobs support OIDC token injection for authenticating against Cloud Run, Cloud Functions, GKE Ingress, and any Google API endpoint.
>
>> [!card|section]
>> **Pub/Sub target**
>> Native Pub/Sub integration enables decoupled scheduling: the scheduler fires, Pub/Sub delivers, and any number of consumers react without downstream coupling.
>
>> [!card|section]
>> **Retry configuration**
>> Configurable retry policies specify max attempts, min/max backoff intervals, and max retry duration; failed HTTP calls are automatically retried.
>
>> [!card|section]
>> **Pause and resume**
>> Individual jobs can be paused (preventing future firings without deleting configuration) and resumed without any definition changes.

> [!grid|cols3]
>
>> [!card|section]
>> **Manual trigger (Run Now)**
>> Jobs can be triggered immediately from the Console or via `gcloud scheduler jobs run` for testing, debugging, or ad-hoc execution.
>
>> [!card|section]
>> **Cloud Tasks integration**
>> Cloud Scheduler can push tasks into Cloud Tasks queues via HTTP target, combining scheduling with rate limiting and deduplication.
>
>> [!card|section]
>> **Attempt history**
>> Console and API expose status and response of the last five job execution attempts, aiding debugging of failed scheduled jobs.
>
>> [!card|section]
>> **IAM access control**
>> Job creation, modification, and deletion are controlled via standard GCP IAM roles; the service account attached generates OIDC/OAuth2 tokens.
>
>> [!card|section]
>> **High job limits**
>> Each project supports up to 3,000 Cloud Scheduler jobs (quota-adjustable), covering large-scale deployments with many scheduled tasks.
>
>> [!card|section]
>> **Region selection**
>> Jobs are created in specific GCP regions; the App Engine application in the project's home region backs state storage.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Scheduled batch data processing**
>> A Cloud Scheduler job fires daily at 02:00 UTC, publishing to a Pub/Sub topic that triggers a Dataflow batch pipeline to aggregate clickstream data into BigQuery.
>
>> [!card|section]
>> **Periodic Cloud Run invocation**
>> A nightly report generation Cloud Run service is invoked by Cloud Scheduler via authenticated HTTP POST; the service generates PDF reports and uploads to Cloud Storage without a persistent server.
>
>> [!card|section]
>> **Database cleanup and maintenance**
>> Cloud Scheduler triggers a Cloud Function every Sunday at midnight to purge soft-deleted records older than 90 days, rotate log files, and update materialized views in Cloud SQL.
>
>> [!card|section]
>> **Automated infrastructure cost control**
>> A weeknight job stops non-production GKE node pools at 8 PM and a morning job restarts them at 8 AM, reducing compute costs for environments that don't need 24/7 uptime.
>
>> [!card|section]
>> **Cache warming**
>> A Cloud Scheduler job fires 5 minutes before business hours, sending HTTP requests to pre-warm application caches and database connection pools for fast morning response times.
>
>> [!card|section]
>> **SaaS subscription renewal processing**
>> A Cloud Scheduler job runs hourly and publishes to Pub/Sub; a Cloud Run consumer checks for subscriptions expiring in the next 24 hours and initiates renewal workflow.
>
>> [!card|section]
>> **Health check with alerting**
>> Cloud Scheduler polls an external API health endpoint every 5 minutes via HTTP; non-2xx responses trigger Cloud Monitoring alerts via log-based metrics.
>
>> [!card|section]
>> **Workflows orchestration trigger**
>> Cloud Scheduler calls the Workflows API to start a complex multi-step workflow on a schedule, acting as the entry point for orchestrated batch processes requiring branching and error handling.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Free tier** | First 3 jobs per month are free (across all jobs in the project) |
| **Standard pricing** | Approximately $0.10 per job per month for every job beyond the 3 free jobs |
| **Example** | 10 jobs = 7 paid jobs × $0.10 = $0.70/month; 100 jobs costs ~$9.70/month |
| **Job executions** | No per-execution charge; you pay for defined jobs regardless of how often they fire |
| **Target costs** | Cloud Run invocations, Pub/Sub deliveries, and Cloud Functions executions triggered by Cloud Scheduler are billed by their respective services |
| **No infrastructure cost** | Fully serverless; no VMs, no idle compute charges |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD SCHEDULER
>> # From *schedule* to *execution*.
>> Configure and trigger any job in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### *Define* the cron schedule.
>> Create a job with a standard Unix cron expression to specify when it should run — from every minute to once a year, with IANA timezone support for business-hour alignment.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* the target & payload.
>> Select HTTP/HTTPS, Pub/Sub, or App Engine HTTP as your target; configure headers, body, authentication tokens, and retry policies for reliable delivery.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* execution history.
>> View the last five execution attempts in the Console with timestamps, HTTP status codes, and response bodies; set up Cloud Monitoring alerts for failed jobs.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[workflows]], [[eventarc]], [[cloud-build]], [[cloud-deploy]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[cloud-functions]], [[app-engine]]
>
>> [!card] GCP Messaging & Data
>> [[pubsub]], [[cloud-tasks]], [[google-cloud-platform]]
