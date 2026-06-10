---
title: Speech-to-Text
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Speech-to-Text
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Speech-to-Text
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2017 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/speech-to-text |

---

> "The ability to convert spoken language into text with high accuracy is one of the most democratizing technologies in AI — it removes the keyboard as a barrier to human-computer interaction."
> <cite>— Google AI Research</cite>

---

<span class="at-kicker">Speech Recognition · Google Cloud</span>

# Speech-to-Text

<p class="at-lead">
Google Cloud's automatic speech recognition service converts spoken audio into written text using battle-tested deep learning models that power Google Assistant, Meet, and YouTube captioning. With support for 125+ languages, multiple audio domains, real-time streaming, and specialist models including Chirp and Medical Speech, it handles everything from voice commands to call-centre analytics at any scale.
</p>

<span class="at-stat">125+</span> languages &nbsp;·&nbsp; <span class="at-stat">&lt;300ms</span> streaming latency &nbsp;·&nbsp; <span class="at-mark">same ASR powering Google Assistant & Meet</span>

<span class="at-kicker">OVERVIEW</span>

## Overview

Speech-to-Text v2, the current API version, introduces a new resource model with **Recognizer** objects that encapsulate configuration (language, model, features) for reuse across requests, reducing per-request overhead and enabling consistent configuration management. It also introduces **batch recognition** for processing large volumes of audio files asynchronously. The service offers multiple model types optimized for different audio domains, including telephony (8kHz phone audio), video (broadband, multi-speaker), medical conversations, and a default model for general-purpose use. The latest **Chirp** model — Google's universal speech model trained on millions of hours of audio across 100+ languages — delivers state-of-the-art accuracy, particularly for rare languages and noisy conditions.

<span class="at-kicker">KEY FEATURES</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### LANGUAGE SUPPORT
>> ### *125+* Languages
>> Comprehensive coverage of major world languages, regional dialects, and language variants — en-US, en-GB, en-AU, es-ES, es-MX, fr-FR, fr-CA and many more. The Chirp universal speech model extends this further, delivering state-of-the-art accuracy even for rare languages and heavily accented speech.
>
>> [!card|section]
>> ###### UNIVERSAL MODEL
>> ### Chirp *Speech Model*
>> Google's latest large-scale ASR model trained on 28 billion audio tokens. Delivers significantly improved accuracy over previous models, especially for rare languages, accented speech, and noisy audio conditions where general-purpose models struggle.
>
>> [!card|section]
>> ###### REAL-TIME API
>> ### *Streaming* Recognition
>> Bidirectional gRPC streaming API that returns partial transcription results in real time as audio is being spoken. Enables live captioning, voice assistants, and real-time analytics with sub-300ms latency — audio processed as it arrives, not after.
>
>> [!card|section]
>> ###### BATCH PIPELINE
>> ### *Asynchronous* Long Audio
>> For audio files ranging from 1 minute to several hours, submit a job referencing a Cloud Storage URI and poll for completion or receive Pub/Sub notifications. The v2 Batch Recognition endpoint handles hundreds or thousands of files in a single parallel job, results written directly to Cloud Storage.
>
>> [!card|section]
>> ###### SPEAKER ANALYSIS
>> ### Speaker *Diarization*
>> Automatically identifies and labels different speakers in a multi-speaker recording — "Speaker 1:", "Speaker 2:" — making it essential for meeting transcription, interview analysis, and call-centre recordings. Included in base pricing at no additional charge.
>
>> [!card|section]
>> ###### ACCURACY TUNING
>> ### Speech *Adaptation*
>> Provide custom vocabulary lists — product names, technical terminology, proper nouns, domain jargon — as phrase hints to boost recognition accuracy for specialised content. Custom Classes let you define named categories (e.g. `$PRODUCT_NAMES`) the ASR model actively elevates during decoding.

> [!grid|cols3]
>
>> [!card|section]
>> ###### TIMING & CONFIDENCE
>> ### *Word-Level* Timestamps
>> Returns precise start and end timestamps for every recognised word, enabling audio alignment, searchable audio indexing, and synchronised caption generation. Per-word confidence scores allow downstream systems to flag low-confidence words for human review.
>
>> [!card|section]
>> ###### TEXT ENRICHMENT
>> ### *Automatic* Punctuation
>> Inserts commas, periods, and question marks based on acoustic and language model signals — no manual punctuation needed for most use cases. Spoken punctuation commands ("comma", "period") and spoken numerals ("twenty-three" → 23) are also recognised natively.
>
>> [!card|section]
>> ###### CLINICAL DOMAIN
>> ### *Medical* Speech Model
>> Specialist model trained on medical conversation data for clinical documentation. Handles medical terminology, drug names, and clinical phrases with materially higher accuracy than general models, targeting the ambient dictation workflow used by physicians during patient encounters.

<span class="at-kicker">USE CASES</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### ENTERPRISE
>> ### *Call Centre* Analytics
>> Transcribe all customer service calls at scale using asynchronous batch processing, then feed transcripts into NLP pipelines to detect sentiment, extract intent, identify compliance violations, and measure agent performance — without human reviewers listening to every call.
>
>> [!card|section]
>> ###### ACCESSIBILITY
>> ### *Real-Time* Captioning
>> Live-caption video conferences (Google Meet), broadcasts, lectures, and events using the streaming API to produce closed captions with sub-second latency, improving accessibility for deaf and hard-of-hearing audiences globally.
>
>> [!card|section]
>> ###### HEALTHCARE
>> ### *Medical* Dictation
>> Physicians use ambient microphones or handheld recorders to dictate clinical notes during or after patient encounters; the Medical Speech model transcribes specialised terminology accurately, reducing documentation burden and freeing up consultation time.
>
>> [!card|section]
>> ###### MEDIA
>> ### *Meeting* Intelligence
>> Transcribe recorded meetings with speaker diarization to produce searchable, speaker-attributed meeting minutes. Word timestamps enable precise action-item extraction and clip linking within collaboration tools.

<span class="at-kicker">PRICING</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Standard Models** | Lower per-minute rate for general-purpose recognition |
| **Chirp Model** | Higher per-minute rate reflecting improved accuracy |
| **Medical Model** | Premium pricing for medical speech recognition |
| **Data Logging Discount** | Reduced rates available if customers opt in to data logging for model improvement (opt-in, not default) |
| **Streaming vs. Batch** | Same base pricing regardless of mode — streaming, synchronous, or asynchronous |
| **Speaker Diarization & Timestamps** | Included in base pricing; no additional charge |
| **Free Tier** | 60 minutes/month free for standard models (non-data-logging tier) |
| **Volume Tiers** | Pricing decreases significantly at 1M+ minutes/month |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · SPEECH-TO-TEXT
>> # From *audio* to *text*.
>> Transcribe streaming or batch audio in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Choose *recognition model*.
>> Select from Chirp (universal, 100+ languages), Telephony (8kHz phone audio), Video (broadband, multi-speaker), or Medical — matching the model to your audio domain gives the largest single accuracy gain before any other tuning.
>
>> [!card|step]
>> ###### Step 02
>> ### Configure *audio encoding*.
>> Specify sample rate, encoding format (LINEAR16, FLAC, MP3, OGG_OPUS, etc.), channel count, and language code in a Recognizer resource or inline request config. Correct encoding metadata is essential; mismatches are the most common source of degraded accuracy.
>
>> [!card|step]
>> ###### Step 03
>> ### Stream or *batch transcribe*.
>> For live audio open a bidirectional gRPC stream and send audio chunks as they arrive; for stored files submit a `longRunningRecognize` or Batch Recognition job referencing a Cloud Storage URI and poll the returned operation for the structured transcript.

<span class="at-kicker">RELATED PAGES</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[text-to-speech]], [[dialogflow-cx]], [[video-intelligence-api]], [[cloud-natural-language]], [[vertex-ai]]
>
>> [!card] GCP Messaging & Storage
>> [[pubsub]], [[cloud-storage]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
