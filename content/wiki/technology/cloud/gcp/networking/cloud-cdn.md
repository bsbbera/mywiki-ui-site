---
title: Cloud CDN
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - CDN
category: GCP
tags:
  - gcp
  - cloud
  - networking
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud CDN
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2015 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/cdn |

---

> "The internet is becoming the town square for the global village of tomorrow."
> <cite>— Bill Gates</cite>

---

<span class="at-kicker">Content Delivery · Google Cloud</span>
# Cloud CDN
<p class="at-lead">Cloud CDN is Google Cloud's globally distributed caching and content delivery service, built on Google's edge network of 130+ Points of Presence. It accelerates web content, APIs, and media by caching responses close to end users.</p>
<span class="at-stat">130+</span> PoPs · <span class="at-stat">cache hit rates</span> 90%+ · <span class="at-stat">signed URLs</span> + <span class="at-stat">cookies</span> &nbsp;·&nbsp; <span class="at-mark">serve content from the edge closest to every user on earth</span>

<span class="at-kicker">How It Works</span>
## Overview

Cloud CDN works by intercepting cacheable HTTP(S) responses from backends attached to an external Application Load Balancer. When a user makes a request, it is first handled by the nearest Google edge PoP. If the requested content is already cached there, it is served directly from the edge without reaching the origin — a **cache hit**. If not, the request is forwarded to the origin backend — a **cache miss** — and the response is cached for future requests.

Cloud CDN is not a standalone product; it is enabled per backend service or backend bucket on a [[cloud-load-balancing|Cloud Load Balancing]] backend service. This tight integration means there is no separate CDN endpoint to manage — the same anycast IP and URL map used for load balancing also serves cached content.

Google also offers **Media CDN**, a separate product optimized specifically for high-throughput video streaming and large file downloads at massive scale, built on the same infrastructure that delivers YouTube globally.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Cache Modes**
>> CACHE_ALL_STATIC (default), USE_ORIGIN_HEADERS, or FORCE_CACHE_ALL. Control caching behavior for different content types.
>
>> [!card|section]
>> **Cache Keys**
>> Customize cache keys with query parameters, headers, or cookies. Control when requests share cached responses.
>
>> [!card|section]
>> **Signed URLs & Cookies**
>> Time-limited, cryptographically signed access for protected content. Grant temporary access without changing ACLs.
>
>> [!card|section]
>> **Cache Invalidation**
>> Purge cached content via Console, CLI, or API. Propagates to all edge nodes within seconds.
>
>> [!card|section]
>> **Negative Caching**
>> Cache 404s and redirects to reduce origin load. Configurable TTLs for negative responses.
>
>> [!card|section]
>> **Load Balancer Integration**
>> No separate endpoint — enable on existing backend services. Unified configuration with Cloud Load Balancing.

## Media CDN vs Classic Cloud CDN

| Feature | Cloud CDN | Media CDN |
|---|---|---|
| Best for | Web content, APIs, images | Video streaming, large files |
| Protocol | HTTP/S | HTTP/S, QUIC |
| Scale | High | Extremely high (YouTube-scale) |
| Pricing model | Per request + egress | Per egress + requests |
| Routing | Google global PoPs | Google global PoPs + extended |

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Website Acceleration**
>> Cache static assets (images, CSS, JavaScript, fonts) globally to reduce page load times for users worldwide.
>
>> [!card|section]
>> **API Response Caching**
>> Cache expensive API responses that don't change per-user. Reduce backend load and improve API response times.
>
>> [!card|section]
>> **Video on Demand**
>> Cache video segment files at edge for smooth, low-latency streaming. Use Media CDN for very large scale.
>
>> [!card|section]
>> **Software Distribution**
>> Serve software packages, container images, or large file downloads from edge nodes close to users.
>
>> [!card|section]
>> **E-commerce Product Images**
>> Cache product catalog images globally to handle traffic spikes during sales events.
>
>> [!card|section]
>> **Game Asset Delivery**
>> Deliver game patches, updates, and assets quickly to players worldwide.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Cache Egress** | Per GB delivered from cache to users (varies by region) |
| **Cache Fill** | Per GB transferred from origin to CDN cache nodes |
| **HTTP/HTTPS Requests** | Per 10,000 cache lookup requests (hits and misses) |
| **Cache Invalidation** | First 1,000/month free; per-invalidation charge after |

Data transferred from backends to CDN cache fill is subject to standard load balancer data processing charges on top of CDN fill charges.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD CDN
>> # From *origin server* to *edge-cached content*.
>> Enable Cloud CDN on your load balancer, configure cache keys for your content, and invalidate cache on deployment.
>
>> [!card|step]
>> ###### Step 01
>> ### *Enable* Cloud CDN on load balancer.
>> Enable CDN on your backend service or bucket. No separate endpoint — works with existing load balancer configuration.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* cache keys.
>> Define what makes requests unique (URL, query params, headers, cookies). Exclude parameters that don't affect response content.
>
>> [!card|step]
>> ###### Step 03
>> ### *Invalidate* cache on deploy.
>> Purge specific paths or wildcards when deploying new versions. Propagates globally within seconds.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-load-balancing]], [[cloud-armor]], [[cloud-dns]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[cloud-run]], [[cloud-storage]], [[google-cloud-platform]], [[GCP Home]]
