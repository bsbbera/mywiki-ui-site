---
title: Vector Search
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Vertex AI Vector Search
  - Matching Engine
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Vector Search
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | PaaS |
> | **Category** | AI & ML |
> | **Launched** | 2021 |
> | **Formerly** | Matching Engine |
> | **Interface** | Console, API, SDK |
> | **Website** | [cloud.google.com](https://cloud.google.com/vertex-ai/docs/vector-search/overview) |

---

> "Nearest-neighbor search is a fundamental problem — find what is most *similar*, not just what is exact."
> <cite>— ScaNN: Scalable Nearest Neighbors, Google Research 2020</cite>

---

<span class="at-kicker">Vertex AI · AI & ML · Google Cloud</span>

# Vector Search

<p class="at-lead">
Billion-scale approximate nearest-neighbor search — the vector database layer powering every RAG pipeline, recommendation engine, and semantic search application on Google Cloud. Built on Google's own ScaNN algorithm, the same technology that runs search and recommendations at Google scale.
</p>

<span class="at-stat">1B+</span> vectors per index &nbsp;·&nbsp; <span class="at-stat">&lt;10ms</span> query latency &nbsp;·&nbsp; <span class="at-stat">∞</span> streaming upserts &nbsp;·&nbsp; <span class="at-mark">powers RAG, recommendations & semantic search</span>

---

<span class="at-kicker">How It Works</span>

## Overview

Vector Search operates on **approximate nearest neighbor (ANN) search** — given a query vector (a numerical embedding of a document, image, audio clip, or user profile), find the K most similar vectors in a massive index as fast as possible.

The engine is built on **ScaNN** (Scalable Nearest Neighbors), Google's proprietary ANN algorithm published in 2020. ScaNN uses *anisotropic vector quantization* and tree-based space partitioning to achieve recall rates that rival exact search — at orders-of-magnitude faster speeds over billion-scale indexes.

> [!note] Why "Approximate"?
> "Approximate" means results aren't guaranteed to be the mathematically exact nearest neighbors. In practice ScaNN's recall is extremely high (~95–99%) while being 10–100× faster than brute-force exact search at scale.

The canonical workflow has four stages:

1. **Embed** — encode your corpus with an embedding model (`text-embedding-004`, Gemini Embeddings, or a custom model)
2. **Index** — upload vectors to Vector Search to build a `tree-AH` or `brute-force` index
3. **Query** — at runtime, embed the query and call the online endpoint to retrieve top-K neighbours
4. **Fetch** — use returned item IDs to pull full content from a primary database (Cloud SQL, Firestore, BigQuery)

---

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### ALGORITHM
>> ### ScaNN *at Scale*
>> Google's proprietary ANN algorithm — anisotropic vector quantization + tree partitioning. Sub-millisecond search over billion-scale indexes with ~95–99% recall.
>
>> [!card|section]
>> ###### LIVE UPDATES
>> ### Streaming *Upserts*
>> Add, update, or delete individual vectors from a live index without downtime or full re-indexing. Critical for real-time recommendation systems.
>
>> [!card|section]
>> ###### QUERY MODES
>> ### Online *& Batch*
>> **Online** — deployed endpoint for real-time <10ms search. **Batch** — offline similarity over large query sets. Use batch to cut costs on non-real-time workloads.

> [!grid|cols3]
>
>> [!card|section]
>> ###### FILTERING
>> ### Metadata *Filters*
>> Apply pre- or post-filter conditions on vector metadata — return neighbours only from `category="electronics"` or `in_stock=true` without extra post-processing.
>
>> [!card|section]
>> ###### HYBRID SEARCH
>> ### Dense *+ Sparse*
>> Combine dense vector similarity with sparse keyword matching for enterprise search — the strengths of semantic similarity and exact term matching in one query.
>
>> [!card|section]
>> ###### MULTI-TENANCY
>> ### Namespace *Isolation*
>> Partition a single index into named namespaces. Each tenant's vectors are isolated and searched independently — no separate index per tenant needed.

> [!tip] VPC-native Deployment
> Deploy indexes to **private endpoints** via Private Service Connect — low-latency, secure access from [[kubernetes-engine]], [[cloud-run]], or [[compute-engine]] with zero public internet exposure.

---

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### PRIMARY USE CASE
>> ### Retrieval-Augmented *Generation*
>> Embed enterprise documents — PDFs, knowledge bases, wikis, customer data — and retrieve the most relevant chunks at query time to ground [[gemini]] responses in accurate, up-to-date knowledge. Vector Search is the vector store in Google Cloud's canonical RAG architecture.
>
>> [!card|section]
>> ###### ENTERPRISE SEARCH
>> ### Semantic *Search*
>> Replace keyword-based search with meaning-based retrieval. Finds the right document even when the query shares zero exact words with it — understands synonyms, paraphrases, and conceptual relationships.

> [!grid|cols2]
>
>> [!card|section]
>> ###### E-COMMERCE & MEDIA
>> ### Product *Recommendations*
>> Store item and user preference vectors. Return K most relevant products, articles, or tracks in real time — at checkout, on home feeds, or in email personalisation campaigns.
>
>> [!card|section]
>> ###### VISUAL AI
>> ### Image *Similarity*
>> Encode product images with [[cloud-vision-api]] multimodal embeddings. Customers upload a photo — Vector Search returns the most visually similar products in the catalog instantly.

> [!grid|cols2]
>
>> [!card|section]
>> ###### SECURITY & OPS
>> ### Anomaly *Detection*
>> Embed system logs, transaction records, or network events. Events with *no close neighbours* in the index are anomalies — unsupervised detection without labelled training data.
>
>> [!card|section]
>> ###### CONTENT OPS
>> ### Duplicate *Detection*
>> Identify near-duplicate content across document repositories, news archives, or support ticket queues. Deduplicate, merge, or cross-reference at corpus scale automatically.

---

<span class="at-kicker">Distance Metrics</span>

## Choosing the Right Metric

| Metric | When to use |
| --- | --- |
| `DOT_PRODUCT_DISTANCE` | Normalised vectors (cosine similarity); most embedding models |
| `COSINE_DISTANCE` | Non-normalised vectors; explicit cosine similarity |
| `SQUARED_L2_DISTANCE` | Euclidean geometry; image embeddings, spatial data |

---

<span class="at-kicker">Cost Model</span>

## Pricing

> [!warning] No Free Tier
> Vector Search requires at least **one serving node** running at all times. Even idle, this incurs cost. Use **batch matching** for dev/test to minimise spend.

| Dimension | Billed on |
| --- | --- |
| Index node hours | Per node/hour (standard vs. high-memory) |
| Online queries | Per 1,000 requests above base capacity |
| Streaming upserts | Per 1,000 upsert/delete operations |
| Batch matching | Per 1,000 batch requests |
| Index build | One-time compute charge per build/rebuild |

<span class="at-badge">Cost tip</span> Right-size node types to query throughput. For non-real-time similarity workloads, batch matching is significantly cheaper than a persistent online endpoint.

---

<span class="at-kicker">From Embedding to Answer</span>

## How to Build a RAG Pipeline

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 4 STEPS · VECTOR SEARCH + GEMINI
>> # From *documents* to *grounded answers*.
>> Embed your knowledge base, index it in Vector Search, retrieve at query time, and feed the context to Gemini — the canonical RAG pattern on Google Cloud.
>
>> [!card|step]
>> ###### Step 01
>> ### *Embed* the corpus.
>> Run your documents through `text-embedding-004` via the [[vertex-ai]] Embeddings API. Each chunk becomes a 768-dimensional dense vector.
>
>> [!card|step]
>> ###### Step 02
>> ### *Index* the vectors.
>> Upload embeddings as a JSONL file to Cloud Storage, then create a `tree-AH` Vector Search index. Google handles sharding and replication automatically.
>
>> [!card|step]
>> ###### Step 03
>> ### *Retrieve* top-K.
>> At query time, embed the user's question and call the deployed online endpoint. Get back the K most semantically similar document chunk IDs in <10ms.
>
>> [!card|step]
>> ###### Step 04
>> ### *Generate* with context.
>> Fetch the full chunk text from [[bigquery]] or [[firestore]], inject into the [[gemini]] prompt as context. The model answers grounded in your private knowledge — not hallucinations.

---

<span class="at-kicker">Continue Reading</span>

## Related Pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[vertex-ai]], [[gemini]], [[model-garden]], [[document-ai]], [[cloud-natural-language]], [[cloud-vision-api]]
>
>> [!card] Data & Storage
>> [[bigquery]], [[firestore]], [[cloud-storage]], [[pubsub]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
