---
title: Cloud Natural Language API
Created:
  - 2026-06-04
date modified: Friday, June 5th 2026, 11:55:28 am
aliases:
  - Natural Language API
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right] Cloud Service
> # Cloud Natural Language API
> ####
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2016 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/natural-language |

---

> "Language is the operating system of human thought — teaching machines to understand it is the foundation of intelligent automation."
> <cite>— Google Research, NLP Team</cite>

---

# Cloud Natural Language API

<p class="at-lead">
Google Cloud's pre-trained NLP service that derives rich, structured insights from unstructured text — entity recognition, sentiment analysis, syntactic parsing, entity-level sentiment, and content classification — all via a single REST or gRPC call. No model training required: process customer feedback, support tickets, social media, and documents at pipeline scale from day one.
</p>

<span class="at-stat">5</span> analysis types &nbsp;·&nbsp; <span class="at-stat">700+</span> content categories &nbsp;·&nbsp; <span class="at-stat">&lt;1s</span> inference &nbsp;·&nbsp; <span class="at-mark">same NLP powering Google Search</span>

## Overview

The Natural Language API takes raw text (or HTML) as input and returns rich linguistic analysis in structured JSON. A single `analyzeEntities` call can identify every named entity (person, organization, location, event, product, etc.) mentioned in a document, annotate each with its type, salience score (relative importance to the document), and metadata — including Wikipedia URLs for well-known entities like companies, cities, or public figures. The API is designed for integration into data pipelines: Cloud Functions, Dataflow, or BigQuery ML workflows can call it at scale to enrich millions of text records with structured NLP annotations.

The service is closely related to **Healthcare Natural Language API**, a HIPAA-compliant specialized NLP service for medical text that extracts clinical entities (medications, diagnoses, procedures, anatomical structures) from clinical notes, EHRs, and medical records.

<span class="at-kicker">Key Features</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### RECOGNITION
>> ### Entity *Analysis*
>> Identifies named entities and classifies them into types: `PERSON`, `ORGANIZATION`, `LOCATION`, `EVENT`, `WORK_OF_ART`, `CONSUMER_GOOD`, `PHONE_NUMBER`, `ADDRESS`, `DATE`, `NUMBER`, `PRICE`. Returns salience scores (0–1) for each entity's centrality to the document, plus Wikipedia knowledge graph URLs for recognized entities.
>
>> [!card|section]
>> ###### EMOTION
>> ### Sentiment *Analysis*
>> Determines the overall emotional tone of text by returning a `score` (–1.0 to 1.0) and `magnitude` (0 to ∞ reflecting overall sentiment strength regardless of positive/negative direction). Available at document level and sentence level for granular emotional profiling.
>
>> [!card|section]
>> ###### FINE-GRAINED
>> ### Entity Sentiment *Analysis*
>> Combines entity recognition with sentiment, returning per-entity sentiment scores — enabling nuanced analysis like "customers are happy about product quality but frustrated with shipping." Identifies which specific things drive positive or negative reactions.

> [!grid|cols3]
>
>> [!card|section]
>> ###### LINGUISTICS
>> ### Syntax *Analysis*
>> Parses grammatical structure into tokens, returning part-of-speech (POS) tags, dependency parse tree structure, lemma forms, and morphological features. Enables information extraction, grammar checking, linguistic research, and any task requiring deep structural understanding of text.
>
>> [!card|section]
>> ###### TAXONOMY
>> ### Content *Classification*
>> Categorizes text documents into 700+ predefined categories from the IAB-QAG taxonomy (e.g., `/Technology/Artificial Intelligence`, `/Sports/Soccer`, `/Health and Fitness/Nutrition`) — ideal for content routing, ad targeting, and media tagging at scale.
>
>> [!card|section]
>> ###### MODERATION
>> ### Text *Moderation* (v2)
>> Classifies text for moderation categories including toxic, insulting, derogatory, sexual, violent, and dangerous content, returning confidence scores per category. Enables text-based content moderation pipelines alongside image and video moderation for complete UGC safety.

> [!grid|cols3]
>
>> [!card|section]
>> ###### LANGUAGES
>> ### Multi-Language *Support*
>> Supports English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, Simplified Chinese, and more. Language auto-detection means callers don't need to specify the input language — the API identifies it automatically before analysis.
>
>> [!card|section]
>> ###### INPUT
>> ### HTML *Input*
>> The API accepts raw HTML input and automatically strips tags, analyzing only the text content. No preprocessing pipeline required — pass your web pages and email bodies directly without writing a custom text extractor.
>
>> [!card|section]
>> ###### EFFICIENCY
>> ### AnnotateText *Combined Analysis*
>> Request multiple analysis types (entities, sentiment, syntax, classification) in a single API call. Reduces latency and cost compared to making separate calls per feature — requesting 3 features in one call costs the sum of 3 individual feature prices but requires only one network round trip.

<span class="at-kicker">Use Cases</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### VOICE OF CUSTOMER
>> ### Customer Feedback *Analysis*
>> Analyze thousands of customer reviews, survey responses, and NPS comments at scale — extract sentiment, identify mentioned products and features, and quantify which entity-level issues drive the most negative feedback. Enables data-driven product roadmap decisions grounded in real customer language.
>
>> [!card|section]
>> ###### OPERATIONS
>> ### Support Ticket *Routing & Triage*
>> Automatically classify incoming support tickets by content category and extract key entities (product names, error codes, account identifiers) to route tickets to the right team and pre-populate CRM fields — reducing manual triage time to zero.
>
>> [!card|section]
>> ###### BRAND
>> ### Social Media *Intelligence*
>> Process millions of social media posts, mentions, and hashtags to track brand sentiment, detect emerging topics, and identify influential entities being discussed in relation to a brand — at a scale impossible with human analysts.
>
>> [!card|section]
>> ###### MEDIA
>> ### News & Media *Monitoring*
>> Extract entities and classify topics from news articles at scale for media intelligence platforms, investor relations monitoring, and reputation management — building a structured knowledge graph from an otherwise unstructured firehose of press coverage.
>
>> [!card|section]
>> ###### LEGAL
>> ### Legal & Compliance *Document Analysis*
>> Parse contracts, regulatory filings, and legal briefs to extract parties, dates, obligations, and legal entities for compliance workflows and contract management systems — accelerating review and reducing manual extraction effort.
>
>> [!card|section]
>> ###### HEALTHCARE
>> ### Healthcare *Documentation*
>> Via the Healthcare NLP API: extract structured clinical information from physician notes, discharge summaries, and pathology reports to populate structured EHR fields or support clinical decision support systems using HIPAA-eligible infrastructure.

<span class="at-kicker">Pricing</span>

## Pricing

| Dimension                           | Detail                                                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Entity Analysis**                 | Per 1,000 text units (each unit up to 1,000 UTF-8 characters)                                                   |
| **Sentiment Analysis**              | Per 1,000 text units                                                                                            |
| **Entity Sentiment Analysis**       | Per 1,000 text units                                                                                            |
| **Syntax Analysis**                 | Per 1,000 text units                                                                                            |
| **Content Classification**          | Per 1,000 text units                                                                                            |
| **Text Moderation (v2)**            | Per 1,000 text units                                                                                            |
| **Combined AnnotateText**           | Billed per feature requested, not per call — requesting 3 features costs the sum of 3 individual feature prices |
| **Healthcare Natural Language API** | Priced separately at a premium rate reflecting specialized medical model capabilities                           |
| **Free Tier**                       | First 5,000 text units/month free per feature type                                                              |
| **Volume Discounts**                | Tiered pricing at 1M+ units/month                                                                               |

> [!grid|cols3]
>
>> [!card|hero dark spanfull]
>> ## From *text* to *understanding*.
>> Turn raw, unstructured text into structured intelligence in 4 steps — entities, sentiment, classification, and integration.
>
>> [!card|step]
>> ### 01
>> Send *text or HTML*
>> Submit raw text or HTML to the API — no preprocessing required. Use `AnnotateText` to request multiple analysis types in a single call and minimize latency and cost.
>
>> [!card|step]
>> ### 02
>> Extract *entities & sentiment*
>> Receive named entity annotations with type, salience score, and Wikipedia metadata, plus document- and sentence-level sentiment scores with magnitude for emotional profiling.
>
>> [!card|step]
>> ### 03
>> Classify *content*
>> Get IAB-QAG taxonomy category labels across 700+ categories for content routing, ad targeting, and media tagging — or use entity sentiment to pinpoint exactly which product attributes customers love or hate.

> [!grid|cols3]
>
>> [!card|hero dark spanfull]
>> ## Enrich your *pipelines* at scale.
>> Plug structured NLP annotations directly into BigQuery, Dataflow, or Cloud Functions for downstream analytics.
>
>> [!card|step]
>> ### 04
>> Integrate *results*
>> Write structured JSON annotations to BigQuery for SQL-based analysis, push to Pub/Sub for stream processing, or use Cloud Functions to enrich records in real time as they arrive.
>
>> [!card|step]
>> ### 05
>> Moderate *content*
>> Apply the v2 Text Moderation classifier to user-generated content streams — score every piece of UGC for toxic, sexual, violent, and dangerous content and route flagged items to human review queues.
>
>> [!card|step]
>> ### 06
>> Scale *& monitor*
>> Monitor unit consumption in the Google Cloud Console; adjust free tier usage across feature types; enable volume discounts automatically as monthly unit counts exceed 1M.


## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[cloud-translation]], [[dialogflow-cx]], [[speech-to-text]], [[document-ai]], [[vertex-ai]], [[gemini]]
>
>> [!card] GCP Data & Analytics
>> [[bigquery]], [[pubsub]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
