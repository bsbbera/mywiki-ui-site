---
title: Firestore
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Firestore
  - Firestore Native Mode
category: GCP
tags:
  - gcp
  - cloud
  - databases
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Firestore
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Serverless NoSQL document database |
> | **Category** | Databases |
> | **Launched** | 2017 (GA 2019) |
> | **Interface** | Console, Firebase SDKs, REST API, gcloud CLI |
> | **Website** | https://cloud.google.com/firestore |

---

> "Real-time data synchronization should be effortless for developers."
> <cite>— Firebase Engineering Team</cite>

---

<span class="at-kicker">Document Database · Google Cloud</span>
# Firestore
<p class="at-lead">Firestore is Google's serverless NoSQL document database designed for modern application development. Offers real-time synchronization, offline support, and ACID transactions with over 1 million concurrent connections per database.</p>
<span class="at-stat">real-time</span> sync &nbsp;·&nbsp; <span class="at-stat">offline</span> support &nbsp;·&nbsp; <span class="at-mark">the document database built for mobile, web and serverless apps</span>

<span class="at-kicker">How It Works</span>

## Overview

Firestore organizes data into **collections** containing **documents**, where documents can hold both scalar fields and nested subcollections. This hierarchical structure naturally maps to object-oriented application code while supporting flexible, schema-less evolution. Documents are limited to 1 MB in size, encouraging efficient data modeling.

Firestore operates in two modes: **Native Mode** (the modern successor to the original Realtime Database) with advanced querying and strong consistency guarantees, and **Datastore Mode** for legacy compatibility. Native Mode provides ACID transactions, powerful compound queries, and automatic multi-region replication without configuration complexity.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Real-Time Sync**
>> Live data updates propagate to all connected clients instantly via web sockets. Build collaborative experiences effortlessly.
>
>> [!card|section]
>> **Offline Persistence**
>> Mobile and web SDKs cache data locally, enabling offline functionality with automatic synchronization when connectivity returns.
>
>> [!card|section]
>> **Strong Consistency**
>> Single-document reads and writes are strongly consistent. No eventual consistency headaches for individual operations.
>
>> [!card|section]
>> **ACID Transactions**
>> Multi-document atomic operations across collections. Transactional integrity for complex business operations.
>
>> [!card|section]
>> **Composite Indexes**
>> Automatic index creation for complex queries. Range filters, sorting, and multi-field queries without manual index tuning.
>
>> [!card|section]
>> **Multi-Region**
>> Data automatically replicated across regions for 99.999% availability. No configuration required for global distribution.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Collaborative Applications**
>> Google Docs-style real-time collaboration with conflict resolution. Multiple users editing simultaneously with instant sync.
>
>> [!card|section]
>> **Gaming**
>> Player profiles, leaderboards, and live game state synchronization. Over 1 million concurrent connections supported.
>
>> [!card|section]
>> **IoT Data Ingestion**
>> High-volume time-series data from connected devices with real-time dashboards and alerting capabilities.
>
>> [!card|section]
>> **E-commerce Carts**
>> Real-time shopping cart updates across devices. Instant inventory visibility and order tracking.
>
>> [!card|section]
>> **Chat Applications**
>> Instant message delivery with offline message queuing. Presence indicators and typing notifications.
>
>> [!card|section]
>> **Live Dashboards**
>> Real-time analytics and monitoring dashboards feeding from Firestore listeners for instant updates.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| **Document Reads** | Charged per 100K documents read |
| **Document Writes** | Charged per 100K documents written |
| **Document Deletes** | Charged per 100K documents deleted |
| **Stored Data** | Per GiB-month of stored data |
| **Network Egress** | Standard GCP egress pricing |
| **Free Tier** | Generous daily allowances for development and small applications |

Firestore uses consumption-based pricing. The free tier provides generous daily allowances for development and small applications.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · FIRESTORE
>> # From *app events* to *real-time synced data*.
>> The document database built for mobile, web and serverless apps.
>
>> [!card|step]
>> ###### Step 01
>> ### Design *collections & documents*.
>> Model data hierarchically with collections containing documents up to 1MB. Nest subcollections for complex relationships.
>
>> [!card|step]
>> ###### Step 02
>> ### Write *security rules*.
>> Define granular access control with Firestore Security Rules. Validate data and authorize requests at the database level.
>
>> [!card|step]
>> ###### Step 03
>> ### Subscribe *to real-time listeners*.
>> Client SDKs automatically sync data changes across all connected devices. Offline support built-in for mobile and web.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP Databases
>> [[cloud-sql]], [[cloud-spanner]], [[cloud-bigtable]], [[cloud-datastore]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
