---
title: Cloud Debugger
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Debugger
  - Stackdriver Debugger
  - Cloud Debugger (Snapshot Debugger)
category: GCP
tags:
  - gcp
  - cloud
  - operations
  - debugging
  - observability
banner: https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Debugger
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Production debugging service |
> | **Category** | Operations & Observability |
> | **Launched** | 2016 |
> | **Interface** | Console, IDE Plugins, API |
> | **Website** | https://cloud.google.com/debugger |

---

> "Debugging production is a necessary evil in distributed systems. The ability to inspect running applications without stopping them changes the game—no more 'works on my machine' when you can see what actually happens at scale."
> <cite>— Kelsey Hightower, Developer Advocate at Google</cite>

---

<span class="at-kicker">Live Debugging · Google Cloud</span>

# Cloud Debugger

<p class="at-lead">Cloud Debugger is Google Cloud's production debugging tool that captures application state at specific code locations in real time—without halting execution, redeploying, or impacting user traffic.</p>

<span class="at-stat">production</span> debugging &nbsp;·&nbsp; <span class="at-stat">no restarts</span> &nbsp;·&nbsp; <span class="at-stat">snapshot</span>-based inspection &nbsp;·&nbsp; <span class="at-mark">inspect production state without stopping or redeploying</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Debugger works by installing lightweight debug agent libraries into applications running on App Engine, Google Kubernetes Engine (GKE), Compute Engine, or Cloud Run. These agents communicate with the Cloud Debugger backend to receive configuration commands and transmit captured data. Developers set "snapshots" (similar to non-blocking breakpoints) at specific lines of code in the source repository, and when any application instance executes that line, the agent captures the local variables, call stack, and object state at that moment. "Logpoints" enable injecting custom log statements into running code without redeployment, capturing variable values and expression results directly to Cloud Logging. The service integrates with source code repositories including Cloud Source Repositories, GitHub, Bitbucket, and GitLab to display source context and line-by-line navigation during debugging sessions. Cloud Debugger capabilities are now accessed through Cloud Trace as the Snapshot Debugger, combining distributed tracing with production debugging in a unified observability experience.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Snapshots (Non-Breaking Breakpoints)
>> Set inspection points at specific source lines that capture the complete application state—local variables, function parameters, object fields, and call stack—when executed. Multiple snapshots can be active simultaneously across different code locations without affecting application throughput.
>
>> [!card|section]
>> ##### Conditional Snapshots
>> Apply conditions to snapshots using expression evaluation, ensuring state capture only occurs when specific variables meet criteria (e.g., `user.id == 12345` or `amount > 1000`). This targeted approach reduces noise when investigating issues affecting specific users or data patterns.
>
>> [!card|section]
>> ##### Logpoints
>> Inject dynamic logging statements into production code without modifying source or redeploying applications. Logpoints support complex expressions and variable interpolation, writing output directly to Cloud Logging with full integration into log-based metrics and alerting.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Source Context Integration
>> Deep linking with Cloud Source Repositories, GitHub, GitLab, and Bitbucket enables automatic source code mapping. The debugger displays actual source files with syntax highlighting and line numbers synchronized to deployed application versions.
>
>> [!card|section]
>> ##### Multi-Language Support
>> Debug agents available for Java (including Kotlin), Python, Go, Node.js, and Ruby. Each agent is optimized for its runtime's debugging capabilities and production safety constraints, with negligible overhead during normal execution.
>
>> [!card|section]
>> ##### IDE Integration & Cloud Trace
>> Plugins for IntelliJ IDEA, Visual Studio Code, and Eclipse enable setting snapshots and viewing results within development environments. Following product consolidation, Snapshot Debugger is now part of Cloud Trace, combining distributed tracing with production debugging.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Production Issue Investigation & Race Conditions
>> Diagnose elusive bugs that only manifest under production load, with real user data and actual service dependencies. Capture intermittent state inconsistencies by setting conditional snapshots triggered by specific timing or data patterns that cannot be reproduced in development.
>
>> [!card|section]
>> ##### Verification Without Deployment
>> Add logpoints to investigate issues immediately rather than waiting for code changes to pass through CI/CD pipelines. Inject custom log statements that capture variable state directly to Cloud Logging without any application restart or redeployment required.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Hot Path Analysis
>> Identify performance bottlenecks by snapshotting within suspected slow code sections and analyzing variable state and object sizes. Combine with Cloud Profiler flame graphs to correlate snapshot data with CPU and heap consumption profiles.
>
>> [!card|section]
>> ##### Security Incident Response
>> Inspect suspicious request handling and data flows without alerting potential attackers through application downtime or response changes. Capture authentication state, request parameters, and internal data transformations at specific code paths during active investigation.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Service cost** | Free for all GCP customers |
| **Snapshot capture** | No charge per snapshot execution |
| **Logpoint output** | Log data written to Cloud Logging at standard Cloud Logging ingestion rates |
| **API access** | No charge for debug API usage |
| **Repository integration** | Free connection to Cloud Source Repositories, GitHub, GitLab, and Bitbucket |
| **Agent deployment** | No cost for debug agent execution within compute resources |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD DEBUGGER
>> # From *mystery bug* to *production snapshot*.
>> Add the agent, set logpoints and snapshots in the console or IDE, then inspect live variables without any restart.
>
>> [!card|step]
>> ###### Step 01
>> ### *Add* Cloud Debugger agent.
>> Include the language-specific debug agent library in your application (Java, Python, Go, Node.js, or Ruby) and deploy to App Engine, GKE, Compute Engine, or Cloud Run. The agent connects automatically using Application Default Credentials.
>
>> [!card|step]
>> ###### Step 02
>> ### *Set* logpoints & snapshots.
>> In the Cloud Console, IDE plugin, or Cloud Trace (Snapshot Debugger), select the source file and line where you want to capture state. Add optional conditions (e.g., `userId == 42`) and set logpoints to inject log output without redeployment.
>
>> [!card|step]
>> ###### Step 03
>> ### *Inspect* live variables.
>> When the specified code line executes in production, the snapshot captures the full call stack and variable state. Browse local variables, object fields, and method parameters in the console, or navigate to correlated Cloud Logging entries from logpoints.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP Operations
>> [[cloud-trace]], [[cloud-logging]], [[cloud-monitoring]], [[cloud-profiler]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
