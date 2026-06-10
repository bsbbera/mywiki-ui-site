---
title: Cloud Translation API
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 9:32:05 pm
aliases:
  - Cloud Translation
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Translation API
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2016 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/translate |

---

> "Language should never be a barrier to information, opportunity, or human connection."
> <cite>— Google Translate Team</cite>

---

<span class="at-kicker">Translation · Google Cloud</span>

# Cloud Translation API

<p class="at-lead">
Programmatic access to Google's state-of-the-art neural machine translation engine — the same technology powering Google Translate for over 500 million daily users across 133 languages. Two API tiers span the full range from real-time app localization to enterprise document pipelines processing millions of words per day.
</p>

<span class="at-stat">100+</span> languages &nbsp;·&nbsp; <span class="at-stat">AutoML</span> support &nbsp;·&nbsp; <span class="at-stat">&lt;200ms</span> latency &nbsp;·&nbsp; <span class="at-mark">same neural MT that powers Google Translate</span>

## Overview

The Basic tier provides a simple, stateless translation API: submit text, specify a target language, get back translated text. It's designed for real-time translation of dynamic content (chat messages, user-generated content, product reviews, support tickets) where speed and simplicity matter most. The Advanced tier (Translation API v3) adds critical enterprise capabilities: glossaries for enforcing consistent terminology, batch translation for large document sets, AutoML Translation for domain-specific custom models, translation of HTML and MIME-type documents, and project-level usage management.

Google's translation engine uses a Transformer-based neural architecture continuously refined through Google Brain and Google Research publications. The Zero-Shot Translation capability allows the model to translate between language pairs it has never been explicitly trained on — routing through intermediate representations to enable high-quality coverage of 100+ language pairs, including less-common combinations.

<span class="at-kicker">Key Features</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### LANGUAGE COVERAGE
>> ### 100+ *Languages*
>> Comprehensive coverage of major world languages — Spanish, French, German, Japanese, Mandarin, Arabic, Hindi, Russian, Portuguese, Korean — plus many less-common languages. Auto-detection identifies the input language without caller specification, simplifying integration.
>
>> [!card|section]
>> ###### CORE ENGINE
>> ### Neural Machine *Translation*
>> Transformer-based architecture produces contextually aware, fluent translations that preserve meaning, tone, and sentence structure — far superior to older phrase-based statistical MT systems. Zero-Shot Translation handles language pairs never explicitly trained on.
>
>> [!card|section]
>> ###### DETECTION
>> ### Language *Detection*
>> Automatically identify the language of input text without translating it — ideal for routing, classification, and analytics workflows that need to know what language content is in before deciding what to do with it.

> [!grid|cols3]
>
>> [!card|section]
>> ###### ENTERPRISE (ADVANCED)
>> ### Batch *Translation*
>> Submit large volumes of documents (plain text, HTML, MIME types) stored in Cloud Storage for asynchronous batch translation, with results written back to GCS. Handles millions of segments in a single job — no per-request throughput limits.
>
>> [!card|section]
>> ###### TERMINOLOGY
>> ### *Glossaries*
>> Define term dictionaries — customer-specific names, brand terms, technical jargon, and "do not translate" lists — enforced during translation to ensure consistency in product names, UI strings, and specialized vocabulary across every document.
>
>> [!card|section]
>> ###### CUSTOMIZATION
>> ### AutoML *Custom Models*
>> Train domain-specific translation models on your own parallel corpus (source + reference translations) using AutoML. Produces models tuned to legal, medical, or technical domains with significantly better terminology accuracy than the general model.

> [!grid|cols3]
>
>> [!card|section]
>> ###### WEB
>> ### HTML *Translation*
>> Translates HTML content while preserving tag structure, attributes, and markup — ideal for localizing web pages and email templates without building text-extraction and re-insertion pipelines around your CMS.
>
>> [!card|section]
>> ###### DOCUMENTS
>> ### Document *Translation*
>> Translate DOCX, PPTX, PDF, and XLSX files while preserving formatting, layout, fonts, and embedded images. No manual reformatting after translation — the output document is structurally identical to the source.
>
>> [!card|section]
>> ###### ADVANCED
>> ### Adaptive *Translation*
>> Provide example sentence pairs as context at request time to guide the model toward a specific style, domain, or terminology — without training a full custom model. Romanization converts non-Latin scripts to phonetic Latin equivalents for interfaces that cannot render native scripts.

<span class="at-kicker">Use Cases</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### RETAIL
>> ### E-Commerce *Localization*
>> Real-time translation of product titles, descriptions, and customer reviews into local languages for international marketplaces — enabling a single catalog to serve 100+ markets without manual translation teams for every product update.
>
>> [!card|section]
>> ###### SUPPORT
>> ### Multilingual *Customer Support*
>> Automatically translate incoming support tickets from any language into the support team's language, then translate agent responses back to the customer — enabling global support coverage without multilingual staffing.
>
>> [!card|section]
>> ###### CONTENT
>> ### Global Content *Management*
>> Integrate Cloud Translation into CMS platforms (Drupal, WordPress, Contentful, AEM) to automatically generate draft translations of new content, which human translators then review and publish — cutting translation cycle times from weeks to hours.
>
>> [!card|section]
>> ###### ANALYTICS
>> ### Social Media *Monitoring*
>> Translate social media posts, comments, and mentions from all languages into a single analysis language for sentiment analysis and brand monitoring pipelines — capturing signals from global audiences at machine speed.
>
>> [!card|section]
>> ###### LEGAL
>> ### Regulatory Document *Translation*
>> Use batch translation with specialized glossaries to produce working draft translations of regulatory filings, contracts, and compliance documents in multiple jurisdictions, ready for legal review and sign-off.
>
>> [!card|section]
>> ###### HEALTHCARE
>> ### Healthcare *Cross-Language Communication*
>> Translate patient intake forms, discharge instructions, and consent documents for non-English-speaking patients to improve healthcare equity and reduce dangerous communication errors at the point of care.

<span class="at-kicker">Pricing</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Translation (Basic / Advanced)** | Charged per 1 million characters translated (source text); no charge for whitespace characters |
| **Language Detection** | Charged per 1 million characters submitted for detection |
| **Batch Translation** | Same per-character rate as standard translation; no batch surcharge |
| **AutoML Custom Model Training** | Charged per hour of training compute plus per-character for inference (at a higher rate than the standard model) |
| **Glossaries** | No additional charge for using glossaries during translation; pay only for translation characters |
| **Document Translation** | Charged per page; pricing varies by document format (PDF, DOCX, etc.); formatted document translation priced higher than plain text |
| **Free Tier** | 500,000 characters/month free for the Basic tier; no free tier for Custom Models |
| **Volume Discounts** | Tiered pricing at 250M+ characters/month |

> [!grid|cols3]
>
>> [!card|hero dark spanfull]
>> ## From *text* to *translation*.
>> Go from raw multilingual content to production-quality translated output in 4 steps — detection, API call, glossary enforcement, and AutoML refinement.
>
>> [!card|step]
>> ### 01
>> Choose *API tier*
>> Select Basic (v2) for simple real-time translation or Advanced (v3) for glossaries, batch jobs, AutoML custom models, and enterprise document workflows.
>
>> [!card|step]
>> ### 02
>> Detect *language*
>> Submit text to the language detection endpoint — or let the translation API detect automatically — to identify source language before routing or translating content.
>
>> [!card|step]
>> ### 03
>> Translate *content*
>> Call the translate endpoint with source text, target language, and optional glossary ID. Get back fluent, neural-quality translation in under 200ms for real-time workloads.

> [!grid|cols3]
>
>> [!card|hero dark spanfull]
>> ## Scale from *prototype* to *production*.
>> AutoML and batch workflows unlock enterprise-grade throughput and domain accuracy.
>
>> [!card|step]
>> ### 04
>> Evaluate with *AutoML*
>> For domain-specific accuracy, upload your parallel corpus (source + reference translations) to AutoML Translation. Train a custom model, evaluate BLEU scores, and deploy for inference via the same API endpoint.
>
>> [!card|step]
>> ### 05
>> Enforce *glossaries*
>> Define brand terms, product names, and "do not translate" lists as a glossary. Attach the glossary ID to any translation request to guarantee consistent terminology across every document and channel.
>
>> [!card|step]
>> ### 06
>> Run *batch jobs*
>> Upload large document sets to Cloud Storage and submit a batch translation request. The API processes asynchronously and writes translated files back to GCS — no throughput limits, no timeouts.

<span class="at-kicker">Related Pages</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[cloud-natural-language]], [[dialogflow-cx]], [[speech-to-text]], [[document-ai]], [[vertex-ai]]
>
>> [!card] GCP Storage & Messaging
>> [[cloud-storage]], [[pubsub]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
