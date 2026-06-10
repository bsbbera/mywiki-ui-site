---
title: Video Intelligence API
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Video Intelligence
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1536240478700-b869ad10e128?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Video Intelligence API
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2017 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/video-intelligence |

---

> "Video is the richest and most challenging medium for AI — understanding it requires reasoning across time, motion, audio, and visual content simultaneously."
> <cite>— Google Cloud AI Research</cite>

---

<span class="at-kicker">Video Analysis · Google Cloud</span>

# Video Intelligence API

<p class="at-lead">
Google Cloud's pre-trained video analysis service applies machine learning to automatically extract structured, searchable metadata — labels, objects, text, faces, logos, and speech — from any video file or live stream. Built on the same models powering YouTube's content analysis at billion-video scale, it turns raw footage into time-coded intelligence via a single asynchronous API call.
</p>

<span class="at-stat">7</span> annotation features &nbsp;·&nbsp; <span class="at-stat">60fps</span> analysis &nbsp;·&nbsp; <span class="at-mark">pre-trained on YouTube's billion-hour corpus</span>

<span class="at-kicker">OVERVIEW</span>

## Overview

Video Intelligence API processes videos stored in Cloud Storage or provided as inline bytes via the API. Because video analysis is computationally intensive, most operations are asynchronous: a request returns an operation ID, and the caller polls for completion or uses Pub/Sub notifications when results are ready. Results are returned as structured JSON containing time-coded annotations — every detected label, tracked object, detected text, or speech segment includes precise start and end timestamps at segment, shot, or frame granularity.

The API is built on top of Google's deep research in video understanding, leveraging the same models that power YouTube's content analysis, recommendation signals, and content policy enforcement at massive scale. For organizations needing custom video classification or object detection beyond the pre-trained models, Vertex AI AutoML Video provides a path to train custom video models on domain-specific datasets.

<span class="at-kicker">KEY FEATURES</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### SCENE UNDERSTANDING
>> ### *Label* Detection
>> Identifies 20,000+ entities, objects, scenes, activities, and concepts in video content. Labels can be detected at three granularity levels: video-level (present anywhere in the video), segment-level (user-defined time ranges), or shot-level (automatically detected scene boundaries) — giving fine-grained temporal context for every tag.
>
>> [!card|section]
>> ###### TEMPORAL STRUCTURE
>> ### Shot *Change Detection*
>> Automatically detects scene cuts and transitions, segmenting a video into individual shots with precise start/end timestamps. This is the foundational feature for video indexing, chapter navigation, and building downstream pipelines that process one shot at a time.
>
>> [!card|section]
>> ###### MOTION TRACKING
>> ### *Object* Tracking
>> Detects and tracks specific objects (person, car, animal, etc.) frame-by-frame across the video, returning bounding box trajectories and time ranges for each tracked instance. Supports 300+ object categories, enabling analytics such as dwell time, path analysis, and crowd counting.
>
>> [!card|section]
>> ###### ON-SCREEN TEXT
>> ### *Text Detection* (OCR)
>> Detects and recognises on-screen text — titles, captions, lower thirds, chyrons, scoreboard text, signage — with frame-level timestamps and bounding box coordinates. Enables full-text search over video archives and automated metadata extraction from broadcast content.
>
>> [!card|section]
>> ###### CONTENT SAFETY
>> ### *Explicit Content* Detection
>> Classifies video frames for adult/explicit content across multiple likelihood levels, enabling automated content moderation for video platforms. Reduces the volume of content requiring human review by automatically routing only borderline or flagged clips for manual inspection.
>
>> [!card|section]
>> ###### AUDIO LAYER
>> ### *Speech* Transcription
>> Transcribes spoken dialogue in video using the same models as Cloud Speech-to-Text, returning word-level timestamps synchronised with the video timeline. Supports multiple languages and speaker diarization, making video archives fully searchable by spoken content.

> [!grid|cols3]
>
>> [!card|section]
>> ###### BRAND INTELLIGENCE
>> ### *Logo* Recognition
>> Detects brand logos appearing in video frames with timestamps and bounding boxes — enabling brand monitoring in broadcast content, sports footage, and social media video. Returns logo name, bounding polygon, and frame-level confidence scores for every appearance.
>
>> [!card|section]
>> ###### PEOPLE & FACES
>> ### *Face & People* Detection
>> Detects faces with tracking across frames (no identity matching in the standard API) and detects the presence of people with body bounding boxes — useful for crowd analytics, occupancy monitoring, and safety applications without individual biometric identification.
>
>> [!card|section]
>> ###### LIVE STREAMS
>> ### *Streaming* Video Intelligence
>> Analyse live video streams in near real-time using the streaming API, enabling applications such as real-time content moderation, live broadcast analysis, and video surveillance. Billed at a higher per-minute rate than batch processing to reflect the real-time compute allocation.

<span class="at-kicker">USE CASES</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### MEDIA & PUBLISHING
>> ### *Archive* Search & Indexing
>> Broadcast networks, stock footage libraries, and news archives automatically index thousands of hours of video by generating searchable metadata — labels, transcripts, OCR text — for every asset, enabling clip search by content rather than manual tags.
>
>> [!card|section]
>> ###### PLATFORM TRUST
>> ### *Video* Content Moderation
>> Video sharing platforms use explicit content detection and label analysis to automatically review user-uploaded videos before publication, flagging policy violations for human review without watching every frame manually.
>
>> [!card|section]
>> ###### BRAND MONITORING
>> ### *Brand Intelligence* & Ad Monitoring
>> Agencies and brands monitor logo appearances, product placements, and brand mentions in broadcast content, YouTube videos, and influencer content to measure earned media value and verify advertising placements.
>
>> [!card|section]
>> ###### SECURITY
>> ### *Surveillance* Analytics
>> Analyse CCTV footage for people counting, object detection (abandoned packages, restricted zone intrusions), and activity recognition without continuous human monitoring — alerts surface only when anomalies are detected.

<span class="at-kicker">PRICING</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Label Detection** | Per minute of video analysed |
| **Shot Change Detection** | Per minute of video |
| **Object Tracking** | Per minute of video |
| **Text Detection** | Per minute of video |
| **Explicit Content Detection** | Per minute of video |
| **Speech Transcription** | Billed at Cloud Speech-to-Text rates (per 15-second audio increment) |
| **Logo Recognition** | Per minute of video |
| **Face / People Detection** | Per minute of video |
| **Streaming Analysis** | Per minute of streaming video at a higher rate than batch |
| **Free Tier** | First 1,000 minutes/month free per feature type |
| **Volume Discounts** | Tiered pricing reduces per-minute rates at 1,000+ hours/month |
| **Multi-Feature Cost** | Each enabled feature billed separately per API request |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · VIDEO INTELLIGENCE API
>> # From *video* to *insight*.
>> Annotate any video in 3 API calls.
>
>> [!card|step]
>> ###### Step 01
>> ### Upload to *Cloud Storage*.
>> Store your video file in a Cloud Storage bucket accessible to the API. For inline payloads under a few MB the API accepts base64-encoded bytes directly, but GCS URIs are recommended for any production volume to avoid request-size limits and enable result storage.
>
>> [!card|step]
>> ###### Step 02
>> ### Request *annotation features*.
>> Submit an `annotateVideo` request specifying the GCS input URI, the features you want (LABEL_DETECTION, OBJECT_TRACKING, TEXT_DETECTION, SPEECH_TRANSCRIPTION, etc.), and optional segment or time-offset constraints. Each feature is billed independently.
>
>> [!card|step]
>> ###### Step 03
>> ### Parse *operation results*.
>> Poll the returned long-running operation ID (or receive a Pub/Sub notification on completion) and deserialise the structured JSON response — time-coded annotations, bounding boxes, confidence scores, and transcript segments — ready for indexing in BigQuery or your own data store.

<span class="at-kicker">RELATED PAGES</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[cloud-vision-api]], [[speech-to-text]], [[cloud-natural-language]], [[document-ai]], [[vertex-ai]]
>
>> [!card] GCP Messaging & Storage
>> [[pubsub]], [[cloud-storage]], [[bigquery]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
