---
title: Named Entity Recognition
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Named Entity Recognition
  - NER
  - Entity Extraction
  - Entity Recognition
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - InformationExtraction
  - SequenceLabelling
  - Transformers
banner:
publish: true
---

> [!quote]
> *Entities are the things that text is about — names, places, dates, and organisations. Recognising them transforms unstructured text into structured knowledge.*
> — NLP Practitioner's Guide

# Named Entity Recognition

<p class="at-lead">
Named Entity Recognition (NER) is the task of identifying and classifying named entities in text into predefined categories such as person, organisation, location, date, and product. It is a cornerstone of information extraction pipelines, powering search engines, knowledge graph construction, and intelligent document processing.
</p>

## Overview

Modern NER systems use sequence labelling with BIO (Begin-Inside-Outside) tagging, typically implemented with BiLSTMs, CRFs, or pre-trained Transformers fine-tuned for token classification. State-of-the-art multilingual models like spaCy, Stanza, and Hugging Face transformers achieve high precision and recall across dozens of entity types and languages.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[text-classification]], [[question-answering]], [[coreference-resolution]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[sequence-models]], [[transformers]]
