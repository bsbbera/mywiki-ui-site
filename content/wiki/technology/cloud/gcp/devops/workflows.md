---
title: Workflows
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Workflows
category: GCP
tags:
  - gcp
  - cloud
  - devops
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Workflows
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service / Serverless |
> | **Category** | DevOps / Orchestration |
> | **Launched** | 2021 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/workflows |

---

> "Orchestration is the art of coordinating independent services into a coherent, reliable whole — with full visibility into every step."
> <cite>— Microservices architecture principles</cite>

---

<span class="at-kicker">Workflow Orchestration · Google Cloud</span>

# Workflows

<p class="at-lead">
Workflows is Google Cloud's fully managed, serverless workflow orchestration service that connects, sequences, and automates multi-step processes across Google Cloud APIs and HTTP endpoints. Defined using declarative YAML or JSON syntax, workflows run reliably with built-in error handling, retry logic, conditional branching, and parallel execution — without provisioning or managing any servers.
</p>

<span class="at-stat">serverless</span> &nbsp;·&nbsp; <span class="at-stat">YAML/JSON</span> syntax &nbsp;·&nbsp; <span class="at-stat">200+</span> connectors &nbsp;·&nbsp; <span class="at-mark">orchestrate APIs and services without infrastructure</span>

<span class="at-kicker">How It Works</span>

## Overview

A **workflow** in Cloud Workflows is a YAML (or JSON) document describing a sequence of **steps**. Each step can call a built-in **standard library** function, invoke a **GCP service connector**, make an arbitrary **HTTP request**, perform **variable assignments**, evaluate **conditional expressions**, execute **sub-workflows**, or run steps **in parallel**. The workflow execution engine is fully managed — Google handles scaling, durability, and infrastructure; users pay only per execution step.

**Executions** are the runtime instances of a workflow definition. Each execution maintains its own state, arguments, and variable scope. Executions can be started via the Workflows API, `gcloud workflows run`, Eventarc triggers, Cloud Scheduler, or any service that can call the Workflows REST API. Long-running workflows (up to one year) are supported, with the execution state durably persisted through each step.

A critical design principle is that Workflows is an **orchestrator, not a choreographer** — all coordination logic lives in the workflow definition, giving full visibility into execution state, step history, and variable values through the Console's execution detail view. This makes debugging and auditing substantially easier than choreography-based event chains.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **YAML/JSON syntax**
>> Human-readable, version-controllable workflow definitions; YAML is the primary authoring format with multi-document structures and YAML anchors.
>
>> [!card|section]
>> **GCP API connectors**
>> Growing library of pre-built connector steps for GCP services (BigQuery, Cloud Storage, Pub/Sub, Cloud Run, Compute Engine, Firestore, Secret Manager) handling authentication automatically.
>
>> [!card|section]
>> **HTTP call steps**
>> Workflows make authenticated or unauthenticated HTTP/HTTPS calls to any external endpoint; OIDC/OAuth2 tokens auto-attached for Google APIs.
>
>> [!card|section]
>> **Parallel steps (branches)**
>> The `parallel` step type allows multiple branches to execute concurrently; results collected and execution continues after all branches complete.
>
>> [!card|section]
>> **Parallel iteration (for-each)**
>> A `parallel` step with a `for` loop iterates over a list and executes iterations concurrently up to a configurable parallelism limit.
>
>> [!card|section]
>> **Error handling**
>> Each step defines `try/except` blocks to catch specific HTTP error codes or exception types; custom retry, fallback, or notification logic per step.

> [!grid|cols3]
>
>> [!card|section]
>> **Retry policies**
>> Built-in exponential backoff retry configuration applied to HTTP call steps, handling transient failures transparently without explicit retry logic.
>
>> [!card|section]
>> **Sub-workflows**
>> Reusable workflow fragments defined in the same file called as named sub-workflows with arguments and return values, enabling modular DRY design.
>
>> [!card|section]
>> **Variable system**
>> Workflows maintain mutable variable environment per execution; variables hold scalar values, lists, and maps; API call results captured for subsequent steps.
>
>> [!card|section]
>> **Expressions and conditions**
>> The `condition` step and inline expressions (`${}` syntax) support arithmetic, string operations, list operations, and comparison operators.
>
>> [!card|section]
>> **Callbacks (waitpoints)**
>> Workflows pause at callback steps, return unique callback URLs, and wait for external systems to POST before continuing — enabling human-in-the-loop approvals.
>
>> [!card|section]
>> **Eventarc & Scheduler integration**
>> Eventarc triggers start workflows directly passing CloudEvent input; Cloud Scheduler invokes workflows for scheduled batch jobs requiring multi-step logic.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Multi-service data pipeline orchestration**
>> A workflow chains BigQuery export, Cloud Storage file transformation via Cloud Run, data validation, and final BigQuery load — with error handling that sends Pub/Sub notifications on validation failure.
>
>> [!card|section]
>> **Human-in-the-loop approval workflows**
>> An expense approval workflow sends Slack notification via HTTP call, pauses at callback step waiting for approver response, then routes to appropriate downstream step.
>
>> [!card|section]
>> **Batch processing fan-out**
>> A workflow reads 500 objects from Cloud Storage and uses parallel iteration to invoke Cloud Run processing service concurrently for each object, then aggregates results to BigQuery.
>
>> [!card|section]
>> **Infrastructure provisioning orchestration**
>> A Terraform-free provisioning workflow calls Compute Engine APIs to create VMs, configures firewall rules, polls until resources are ready, then calls configuration management endpoint with rollback logic.
>
>> [!card|section]
>> **API aggregation (BFF pattern)**
>> A workflow acts as backend-for-frontend, calling three microservices in parallel, merging results, and returning combined payload — eliminating need for dedicated aggregation service.
>
>> [!card|section]
>> **Event-triggered order processing**
>> An Eventarc trigger on Firestore document creation starts a workflow that validates inventory via BigQuery, charges payment via Stripe HTTP call, updates order status in Firestore, and sends confirmation email via SendGrid.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Free tier** | First 5,000 internal steps per month are free |
| **Standard steps** | Approximately $0.01 per 1,000 internal steps after the free tier |
| **HTTP call steps (external)** | Steps that make external HTTP calls may be priced slightly differently; check current pricing documentation |
| **Connector steps** | GCP API connector steps count as internal steps |
| **Execution duration** | No separate charge for execution duration or idle wait time at callback steps; only steps that execute incur cost |
| **No infrastructure cost** | Fully serverless; no minimum charge, no idle cost, and no provisioned capacity to pay for |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · WORKFLOWS
>> # From *steps* to *orchestrated workflow*.
>> Build and deploy a serverless workflow in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### *Write* the workflow definition.
>> Create a YAML or JSON document describing your sequence of steps — include API connectors, HTTP calls, parallel branches, conditional logic, and error handling in human-readable syntax.
>
>> [!card|step]
>> ###### Step 02
>> ### *Deploy* to Workflows.
>> Use `gcloud workflows deploy` or the Console to upload your definition; the service validates syntax and makes the workflow available for execution with automatic versioning.
>
>> [!card|step]
>> ###### Step 03
>> ### *Execute* and monitor.
>> Trigger executions via API, Eventarc, or Scheduler; view complete execution timeline in Console with each step's status, duration, inputs, and outputs for debugging and auditing.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[eventarc]], [[cloud-scheduler]], [[cloud-build]], [[cloud-deploy]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[cloud-functions]], [[kubernetes-engine]]
>
>> [!card] GCP Messaging & Data
>> [[pubsub]], [[bigquery]], [[google-cloud-platform]]
