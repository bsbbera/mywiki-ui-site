---
title: Cloud Endpoints
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Endpoints
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
> # Cloud Endpoints
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | DevOps / API Management |
> | **Launched** | 2016 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/endpoints |

---

> "The sidecar proxy pattern lets you add cross-cutting concerns — auth, rate limiting, observability — without touching application code."
> <cite>— Cloud-native architecture principles</cite>

---

<span class="at-kicker">API Management · Google Cloud</span>

# Cloud Endpoints

<p class="at-lead">
Cloud Endpoints is Google Cloud's lightweight, open-source API management solution for securing and monitoring APIs hosted on Google Cloud. It deploys the Extensible Service Proxy (ESP/ESPv2) as a sidecar or standalone reverse proxy that enforces authentication, collects telemetry, and integrates with Cloud Trace — with minimal operational overhead and no additional infrastructure. It natively supports both gRPC and REST APIs.
</p>

<span class="at-stat">gRPC</span> + <span class="at-stat">REST</span> &nbsp;·&nbsp; <span class="at-stat">OpenAPI</span> spec &nbsp;·&nbsp; <span class="at-stat">ESP v2</span> proxy &nbsp;·&nbsp; <span class="at-mark">lightweight API gateway built on Nginx + Envoy</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Endpoints works by running the **ESP (Extensible Service Proxy)** or **ESPv2** alongside the backend API service. ESP is a high-performance, NGINX-based proxy; ESPv2 is the newer Envoy-based version that offers better performance, gRPC-Web support, and improved observability. The proxy intercepts all incoming requests, validates API keys or JWTs, reports call metrics to the **Service Management API**, and forwards valid requests to the backend.

The API surface is described using an **OpenAPI 2.0 specification** (for REST APIs) or a **gRPC service configuration** (for gRPC APIs). This configuration is deployed to the Service Management API using `gcloud endpoints services deploy`, which validates the spec and activates the service configuration. The ESP reads the deployed configuration at startup to know which endpoints exist, what authentication methods are required, and which quota limits apply.

Cloud Endpoints integrates with **Cloud Trace** to generate distributed traces for every API request, enabling end-to-end latency analysis across microservices. It also streams service metrics (request count, error count, latency) to **Cloud Monitoring** automatically, without any instrumentation changes to the backend service.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **ESP and ESPv2 proxies**
>> NGINX-based (ESP) and Envoy-based (ESPv2) sidecar proxies deployable as Docker containers alongside any backend; ESPv2 is recommended with full gRPC and HTTP/2 support.
>
>> [!card|section]
>> **OpenAPI spec deployment**
>> REST APIs described with OpenAPI 2.0 YAML/JSON; `gcloud endpoints services deploy` registers the spec with Service Management and returns versioned config ID.
>
>> [!card|section]
>> **gRPC support**
>> gRPC service definitions (`proto` files compiled to `service_config.json`) deployable as Cloud Endpoints configurations; ESPv2 supports gRPC transcoding and gRPC-Web.
>
>> [!card|section]
>> **API key authentication**
>> Proxy validates API keys passed in headers or query parameters against keys issued through GCP Console, providing coarse-grained access control.
>
>> [!card|section]
>> **JWT validation**
>> Proxy validates Firebase Authentication, Google identity, Auth0, or any standard OIDC JWT — verifying signature, issuer, audience, and expiry without backend token validation.
>
>> [!card|section]
>> **Cloud Trace integration**
>> Every request traced automatically; trace headers propagated to backend services; trace data visible in Cloud Trace for latency profiling and distributed debugging.

> [!grid|cols3]
>
>> [!card|section]
>> **Cloud Monitoring metrics**
>> ESP automatically emits `serviceruntime.googleapis.com` metrics (request count, error rate, backend latency) to Cloud Monitoring for alerting policies.
>
>> [!card|section]
>> **Quota and rate limiting**
>> Per-method quotas defined in service configuration (e.g., 1,000 calls/minute per API key); ESP enforces limits before forwarding to backend.
>
>> [!card|section]
>> **Service Management API**
>> Underlying API that stores service configurations, tracks service state, and exposes usage metrics; enables programmatic service lifecycle management.
>
>> [!card|section]
>> **Cloud Run support**
>> ESPv2 commonly deployed as second container (sidecar) in Cloud Run service or as separate Cloud Run service fronting a backend.
>
>> [!card|section]
>> **GKE sidecar deployment**
>> ESP/ESPv2 runs as sidecar container in Kubernetes pods, intercepting traffic at pod level with no service mesh required.
>
>> [!card|section]
>> **App Engine integration**
>> Cloud Endpoints ESP runs as service in App Engine Flexible environment alongside the main application.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Securing a gRPC microservice**
>> A gRPC backend running in GKE deploys ESPv2 as sidecar; proxy validates Firebase JWTs on every request, rejects unauthenticated calls before they reach the service, and emits per-method latency traces to Cloud Trace.
>
>> [!card|section]
>> **API key management for mobile apps**
>> A REST API backend uses Cloud Endpoints to issue API keys to registered mobile applications; ESPv2 validates keys on each request and enforces per-key daily quotas to prevent abuse.
>
>> [!card|section]
>> **REST façade for a gRPC service**
>> A gRPC service exposes Protobuf API internally; ESPv2 with gRPC-JSON transcoding makes the same service accessible as REST/JSON API to external consumers without duplicating backend logic.
>
>> [!card|section]
>> **Lightweight API gateway on Cloud Run**
>> Teams deploy ESPv2 as standalone Cloud Run service in front of backend Cloud Run service, gaining JWT validation, API key enforcement, and usage metrics without adopting full Apigee platform.
>
>> [!card|section]
>> **Developer portal with usage tracking**
>> Combined with GCP Console's Endpoints dashboard, product teams track which API consumers (by API key) make the most calls, which endpoints have highest error rates, and which are slowest — enabling data-driven API improvements.
>
>> [!card|section]
>> **Multi-tenant SaaS API**
>> A SaaS platform issues unique API keys to each tenant, uses Cloud Endpoints quota configs to enforce per-tenant rate limits, and uses Cloud Monitoring to build per-tenant usage dashboards for billing purposes.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Free tier** | First 2 million API calls per month per service are free |
| **Standard pricing** | Approximately $3.00 per million calls for calls 2M–1B/month |
| **High volume** | Reduced per-call rates above 1 billion calls/month (contact Google for negotiated pricing) |
| **ESP infrastructure** | The ESPv2 container runs on whatever compute hosts the backend (GKE, Cloud Run, Compute Engine); compute costs billed by those services |
| **Cloud Trace** | Trace data billed at standard Cloud Trace ingestion rates; first 2.5 million spans/month are free |
| **Cloud Monitoring** | Endpoints metrics billed at standard Cloud Monitoring rates after the free tier |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD ENDPOINTS
>> # From *API spec* to *managed endpoint*.
>> Deploy a managed API gateway in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### *Define* the OpenAPI or gRPC spec.
>> Create an OpenAPI 2.0 specification for REST APIs or compile gRPC proto files to service configuration; describe endpoints, authentication requirements, and quota limits in the spec.
>
>> [!card|step]
>> ###### Step 02
>> ### *Deploy* the ESP/ESPv2 proxy.
>> Deploy the service configuration to Service Management using `gcloud endpoints services deploy`; run ESPv2 as sidecar or standalone proxy alongside your backend service on Cloud Run, GKE, or App Engine.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* via Cloud Trace.
>> View distributed traces for every API request in Cloud Trace to analyze end-to-end latency; set up Cloud Monitoring alerts on request counts, error rates, and backend latency metrics automatically emitted by ESP.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[apigee]], [[cloud-build]], [[eventarc]], [[workflows]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[kubernetes-engine]], [[app-engine]]
>
>> [!card] GCP Observability
>> [[cloud-trace]], [[cloud-monitoring]], [[cloud-logging]]
