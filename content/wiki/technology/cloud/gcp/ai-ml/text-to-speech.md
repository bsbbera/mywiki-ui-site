---
title: Text-to-Speech
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Text-to-Speech
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Text-to-Speech
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2018 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/text-to-speech |

---

> "The human voice is one of the most expressive communication channels we have — neural TTS brings us closer than ever to synthetic voices that feel genuinely natural."
> <cite>— Google Research, WaveNet Paper</cite>

---

<span class="at-kicker">Speech Synthesis · Google Cloud</span>

# Text-to-Speech

<p class="at-lead">
Google Cloud's neural speech synthesis service converts written text into natural-sounding spoken audio using deep learning — drawing on WaveNet (DeepMind), Neural2, and Studio voice technologies to produce speech dramatically more natural than traditional TTS. With 380+ voices across 50+ languages, it powers IVR systems, voice assistants, audiobooks, accessibility tools, and any application that needs to speak to users programmatically.
</p>

<span class="at-stat">380+</span> voices &nbsp;·&nbsp; <span class="at-stat">50+</span> languages &nbsp;·&nbsp; <span class="at-stat">3</span> voice families &nbsp;·&nbsp; <span class="at-mark">WaveNet — DeepMind's breakthrough neural audio</span>

## Overview

Text-to-Speech accepts plain text or Speech Synthesis Markup Language (SSML) as input, with fine-grained control over pronunciation, prosody, pitch, speaking rate, and volume. The API returns audio in multiple formats (LINEAR16 WAV, MP3, OGG Opus, MULAW for telephony) at configurable sample rates. Requests can be made synchronously for real-time applications or used in batch workflows to pre-generate large audio libraries.

Google offers four distinct voice technology tiers:

1. **Standard voices**: Fast, economical synthesis suitable for most applications.
2. **WaveNet voices**: DeepMind's deep generative model producing highly natural audio; larger model means slightly higher latency and cost.
3. **Neural2 voices**: Google's next-generation synthesis technology using a smaller but equally natural model trained on human voice data; lower latency than WaveNet with comparable or better naturalness.
4. **Studio voices** (select languages): The highest quality, most expressive voices designed for professional audio production; suitable for podcasts, audiobooks, and premium brand voice applications.
5. **Polyglot voices**: Multi-language voices that can synthesize speech in multiple languages using a single voice identity, maintaining consistent character across languages.

<span class="at-kicker">Key Features</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### VOICE CATALOG
>> ### 380+ Voices, *50+ Languages*
>> Extensive voice catalog covering English (US, UK, AU, IN), Spanish, French, German, Japanese, Mandarin, Hindi, Arabic, Portuguese, Korean, Italian, Polish, Dutch, and many more — with multiple voice options per language for gender and character variety.
>
>> [!card|section]
>> ###### NEURAL AUDIO
>> ### *WaveNet* Voices
>> DeepMind's generative audio model samples at the raw waveform level, producing speech with natural prosody variation, breathing patterns, and intonation that closely mimics human speech. The gold standard for naturalness where latency is not the primary constraint.
>
>> [!card|section]
>> ###### NEXT-GEN
>> ### *Neural2* Voices
>> Google's updated neural synthesis backbone with lower latency than WaveNet; trained on authentic human voice recordings rather than older synthesis techniques. Recommended for all new applications — comparable or better naturalness than WaveNet at lower cost and latency.

> [!grid|cols3]
>
>> [!card|section]
>> ###### PREMIUM
>> ### *Studio* Voices
>> Ultra-high-quality, professionally produced voices for premium content creation. Available in select languages (US English and others); optimized for long-form narration — podcasts, audiobooks, and branded audio experiences where quality is non-negotiable.
>
>> [!card|section]
>> ###### MARKUP
>> ### *SSML* Support
>> Full Speech Synthesis Markup Language support: `<break>` for timed pauses, `<emphasis>` for word stress, `<prosody>` for pitch/rate/volume control, `<say-as>` for numbers/dates/currencies, `<phoneme>` for IPA or x-SAMPA custom pronunciation, `<sub>` for acronym expansion, and `<audio>` for inserting pre-recorded clips inline.
>
>> [!card|section]
>> ###### AUDIO CONTROL
>> ### Prosody *& Format*
>> Speaking rate adjustable from 0.25× to 4.0× for accessibility or efficiency. Pitch adjustment in semitones for character differentiation. Volume gain in dB. Output formats: MP3 (streaming), LINEAR16 WAV (lossless), OGG Opus (VoIP), ALAW/MULAW (telephony at 8kHz).

> [!grid|cols3]
>
>> [!card|section]
>> ###### BRAND
>> ### Custom *Voice Builder*
>> Train a custom, brand-specific voice on 30+ minutes of recorded speech from a consenting voice talent, creating a proprietary synthetic voice unique to the organization — delivering a consistent, recognizable audio identity across every customer touchpoint.
>
>> [!card|section]
>> ###### LONG FORM
>> ### Long Audio *Synthesis API*
>> For content longer than the standard 5,000-byte limit, the Long Audio API handles synthesis of full articles, documents, or books asynchronously, writing audio files directly to Cloud Storage — no chunking or stitching required.
>
>> [!card|section]
>> ###### SYNCHRONIZATION
>> ### *Timepoint* API
>> Returns timestamps for specific SSML elements (word or sentence boundaries), enabling synchronized captions, karaoke-style word highlighting, or animated avatar lip-sync — perfectly aligned audio and visual experiences.

<span class="at-kicker">Use Cases</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### CONTACT CENTER
>> ### IVR and *Telephony*
>> Contact center interactive voice response systems using MULAW/ALAW audio and telephony-optimized voices for natural-sounding automated phone menus and outbound notifications — indistinguishable from professionally recorded prompts.
>
>> [!card|section]
>> ###### ACCESSIBILITY
>> ### Screen *Reading*
>> Convert web page content, documents, and app interfaces to audio for visually impaired users. SSML ensures proper pronunciation of technical terms, abbreviations, and domain-specific vocabulary that naive TTS would mangle.
>
>> [!card|section]
>> ###### VOICE AI
>> ### Voice Assistant *Responses*
>> Add voice output to chatbots, virtual assistants, and smart home applications so users receive audio responses naturally — pairing with Dialogflow CX or custom NLU for a complete conversational AI voice stack.
>
>> [!card|section]
>> ###### CONTENT
>> ### Audiobook & *Podcast Generation*
>> Use Studio voices and the Long Audio API to convert written articles, ebooks, newsletters, and blog posts into professional-quality audio automatically — scaling audio-first content distribution without voiceover artist scheduling.
>
>> [!card|section]
>> ###### LEARNING
>> ### E-Learning *& Training*
>> Narrate e-learning modules, slide decks, and training materials in multiple languages with consistent neural voice quality — eliminating dependency on voiceover artists for routine content updates and localization into 50+ markets.
>
>> [!card|section]
>> ###### BRAND VOICE
>> ### Custom *Brand Voice*
>> Build a recognizable, proprietary synthetic voice identity for a brand (bank, airline, retailer) using Custom Voice Builder — delivering a consistent, legally owned audio experience across IVR, app, and web touchpoints simultaneously.

<span class="at-kicker">Pricing</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Standard Voices** | Lowest cost per million characters; suitable for high-volume, cost-sensitive workloads |
| **WaveNet Voices** | ~4× more expensive per character than Standard; justified by significantly higher naturalness |
| **Neural2 Voices** | Similar pricing to WaveNet; recommended over WaveNet for all new workloads |
| **Studio Voices** | Premium pricing tier; significantly more expensive than Neural2; for professional audio production |
| **Custom Voice** | Setup/training fee plus per-character synthesis pricing at a premium rate |
| **Long Audio API** | Same voice pricing plus a small per-character surcharge for long-form synthesis |
| **Free Tier** | 1 million characters/month free for Standard voices; 1 million characters/month free for WaveNet voices (separate quota) |
| **Volume Discounts** | Per-character pricing decreases at 1B+ characters/month |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ## From *text* to *natural speech*.
>> Go from a string of text to production audio in 4 steps — voice selection, SSML markup, API call, and streamed output.
>
>> [!card|step]
>> ### 01
>> Pick *voice & language*
>> Choose from 380+ voices across Standard, WaveNet, Neural2, Studio, and Polyglot tiers. Select language, locale, and gender — or use Custom Voice for a proprietary brand identity.
>
>> [!card|step]
>> ### 02
>> Write *SSML markup*
>> Wrap your text in SSML to control pauses, emphasis, prosody, and pronunciation. Use `<say-as>` for numbers and dates, `<phoneme>` for custom pronunciation, and `<audio>` to insert pre-recorded clips inline.
>
>> [!card|step]
>> ### 03
>> Call *the API*
>> Submit the synthesis request synchronously (real-time) or via the Long Audio API for documents over 5,000 bytes. Specify output format — MP3, LINEAR16, OGG Opus, or MULAW — and sample rate for your target playback environment.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ## Deliver audio *everywhere*.
>> Stream to browsers, write to Cloud Storage, or pipe directly into telephony — one API, every channel.
>
>> [!card|step]
>> ### 04
>> Stream *audio output*
>> Receive base64-encoded audio in the API response for real-time playback, or let the Long Audio API write MP3/WAV files directly to Cloud Storage for async workflows, audiobook pipelines, and pre-generated prompt libraries.
>
>> [!card|step]
>> ### 05
>> Sync *with Timepoint*
>> Use the Timepoint API to receive word- and sentence-level timestamps from SSML markers — drive synchronized captions, karaoke-style highlighting, or animated avatar lip-sync perfectly aligned to the audio.
>
>> [!card|step]
>> ### 06
>> Monitor *& optimize*
>> Track character consumption by voice tier in the Cloud Console. Optimize cost by using Neural2 over WaveNet where appropriate, applying volume discounts at scale, and pre-generating static prompts rather than synthesizing on every request.

<span class="at-kicker">Related Pages</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[speech-to-text]], [[dialogflow-cx]], [[cloud-natural-language]], [[cloud-translation]], [[vertex-ai]]
>
>> [!card] GCP Storage
>> [[cloud-storage]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
