---
title: Cloud Vision API
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Vision API
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Vision API
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2016 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/vision |

---

> "Seeing is understanding — and with Cloud Vision API, machines can finally understand the visual world at scale."
> <cite>— Google Cloud AI Team</cite>

---

<span class="at-kicker">Computer Vision · Google Cloud</span>

# Cloud Vision API

<p class="at-lead">
Google Cloud's pre-trained image analysis service extracts rich semantic information — objects, text, faces, landmarks, logos, and safety signals — from any image via a single REST or gRPC call, with no model training required. Powered by the same computer vision models behind Google Photos, Lens, and Search, it processes millions of images daily across retail, media, healthcare, and security.
</p>

<span class="at-stat">10+</span> detection types &nbsp;·&nbsp; <span class="at-stat">&lt;1s</span> per image &nbsp;·&nbsp; <span class="at-mark">trained on Google Image Search's index</span>

<span class="at-kicker">OVERVIEW</span>

## Overview

Cloud Vision API operates as a stateless REST/gRPC service: submit an image (as base64-encoded bytes, a Cloud Storage URI, or a public HTTP URL) along with a list of requested feature types, and receive a structured JSON response containing all detected entities, bounding boxes, confidence scores, and metadata. Multiple feature types can be requested in a single API call, making it efficient to extract labels, OCR text, and safe-search ratings in one round trip.

For workloads requiring custom classification categories not covered by the general-purpose label detection, Cloud Vision API works alongside Vertex AI's AutoML Vision, which trains custom image models that can be deployed as managed endpoints or exported for on-device inference. The Vision API is also deeply integrated with Document AI for document-specific OCR workflows.

<span class="at-kicker">KEY FEATURES</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### SCENE UNDERSTANDING
>> ### *Label* Detection
>> Identifies thousands of objects, scenes, activities, and concepts within an image — "mountain", "beach", "dog", "vehicle" — using Google's vast label taxonomy. Returns labels with confidence scores, enabling automatic tagging and content-based organisation of large image libraries without any manual annotation.
>
>> [!card|section]
>> ###### SPATIAL ANALYSIS
>> ### *Object* Localization
>> Detects and localises multiple distinct objects in a single image, returning bounding box coordinates for each instance. Goes beyond labelling to enable counting, spatial analysis, region-of-interest cropping, and downstream processing of specific image regions.
>
>> [!card|section]
>> ###### TEXT EXTRACTION
>> ### Text Detection *(OCR)*
>> Extracts all printed and handwritten text from images in 50+ languages, returning both raw detected text and structured document text with paragraph, word, and symbol-level bounding boxes. DOCUMENT_TEXT_DETECTION mode is optimised for dense-text documents with multi-column layouts, tables, and small fonts.
>
>> [!card|section]
>> ###### BIOMETRIC SIGNALS
>> ### *Face* Detection
>> Detects faces in images and returns bounding boxes, facial landmark locations (eyes, nose, mouth), head pose estimation (roll, pan, tilt), and likelihood scores for emotions (joy, sorrow, anger, surprise) plus image quality issues such as blur and underexposure — without performing identity matching.
>
>> [!card|section]
>> ###### GEO INTELLIGENCE
>> ### *Landmark* Detection
>> Recognises thousands of well-known geographic landmarks — Eiffel Tower, Golden Gate Bridge, Colosseum — returning the landmark name, geographic coordinates (latitude/longitude), and bounding polygon. Enables automatic geo-tagging and location-aware content experiences.
>
>> [!card|section]
>> ###### BRAND RECOGNITION
>> ### *Logo* Detection
>> Identifies commercial logos and brand marks in images, returning the logo name and bounding polygon. Powers brand monitoring across social media imagery, ad verification workflows, and compliance checks for sponsorship agreements.

> [!grid|cols3]
>
>> [!card|section]
>> ###### CONTENT SAFETY
>> ### *Safe Search* Detection
>> Classifies image content for adult (explicit/racy), violence, medical, and spoof content across five likelihood levels (VERY_UNLIKELY to VERY_LIKELY). Enables automated content moderation pipelines that route only borderline images to human reviewers, dramatically reducing review queue volume.
>
>> [!card|section]
>> ###### VISUAL PROPERTIES
>> ### *Image* Properties
>> Analyses the dominant colours in an image, returning a palette of up to 10 dominant colours with RGB values, pixel fraction (how much of the image each colour covers), and a score. Used for colour-aware product search, design tooling, and visual brand consistency checks.
>
>> [!card|section]
>> ###### REVERSE IMAGE
>> ### *Web* Detection
>> Finds web pages and images that contain or are visually similar to the input image, returning matching image URLs, page URLs, and web entity labels. Enables reverse image search, copyright tracking, and detecting whether proprietary imagery is being used without authorisation.

<span class="at-kicker">USE CASES</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### PLATFORM TRUST
>> ### *Content Moderation* at Scale
>> Social media platforms, UGC sites, and marketplace applications use Safe Search to automatically filter explicit, violent, or policy-violating images before they appear in feeds — processing millions of uploads per day without proportional growth in human review headcount.
>
>> [!card|section]
>> ###### E-COMMERCE
>> ### *Visual* Product Search
>> Enable shoppers to search a product catalogue by uploading a photo using Vision API's Product Search feature, matching the query image against a custom indexed product inventory and returning visually similar items with direct links.
>
>> [!card|section]
>> ###### DIGITAL ASSET MANAGEMENT
>> ### *Media Asset* Tagging
>> Automatically tag and organise large libraries of digital assets — photos, marketing imagery — with labels, dominant colours, and detected objects, making archives searchable by content rather than manually entered metadata.
>
>> [!card|section]
>> ###### RETAIL OPERATIONS
>> ### *Shelf Analytics* & Quality Control
>> Analyse in-store shelf images captured by cameras or field representatives to detect product placement, share of shelf, and out-of-stock conditions. Extend the same pipeline to manufacturing quality control, inspecting product images for defects using object detection.

<span class="at-kicker">PRICING</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Label Detection** | Tiered pricing per 1,000 images; first 1,000 images/month free |
| **Object Localization** | Per 1,000 images |
| **Text Detection / OCR** | Per 1,000 images; DOCUMENT_TEXT_DETECTION priced the same |
| **Face Detection** | Per 1,000 images |
| **Landmark / Logo Detection** | Per 1,000 images |
| **Safe Search Detection** | Per 1,000 images |
| **Image Properties** | Per 1,000 images |
| **Web Detection** | Per 1,000 images |
| **Product Search** | Per product image indexed (per month) plus per query |
| **Free Tier** | 1,000 units/month free per feature type for most features |
| **Volume Discounts** | Tiered pricing reduces per-image rates significantly at 5M+ images/month |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD VISION API
>> # From *image* to *intelligence*.
>> Analyse any image in a single REST call.
>
>> [!card|step]
>> ###### Step 01
>> ### Encode *image as base64*.
>> Convert your image to a base64 string, or reference it via a Cloud Storage URI (`gs://…`) or a public HTTPS URL. Base64 is convenient for small images in a single request; GCS URIs are preferred for batch workloads and images up to the 10 MB limit.
>
>> [!card|step]
>> ###### Step 02
>> ### Specify *feature types*.
>> Build a `features` array in your request body listing the detection types you need — LABEL_DETECTION, TEXT_DETECTION, FACE_DETECTION, SAFE_SEARCH_DETECTION, etc. Multiple features can be requested in one call; each is billed independently per 1,000 images.
>
>> [!card|step]
>> ###### Step 03
>> ### Parse *annotations response*.
>> Deserialise the structured JSON response — each requested feature returns its own annotations block with entity names, bounding boxes, confidence scores, and metadata. Feed the output into your DAM system, moderation queue, or search index.

<span class="at-kicker">RELATED PAGES</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[vertex-ai]], [[document-ai]], [[video-intelligence-api]], [[cloud-natural-language]], [[gemini]]
>
>> [!card] GCP Storage & Data
>> [[cloud-storage]], [[bigquery]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
