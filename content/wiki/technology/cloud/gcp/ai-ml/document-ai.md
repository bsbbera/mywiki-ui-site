---
title: Document AI
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Document AI
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Document AI
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | API |
> | **Category** | AI & ML |
> | **Launched** | 2020 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/document-ai |

---

> "The vast majority of enterprise data is still locked in unstructured documents — PDFs, forms, and images that machines cannot easily read. Document AI changes that."
> <cite>— Google Cloud Documentation</cite>

---

<span class="at-kicker">Document Processing · Google Cloud</span>

# Document AI

<p class="at-lead">
Google Cloud's managed platform for extracting structured information from unstructured documents combines OCR, natural language understanding, and computer vision into a unified service that parses scanned PDFs, photographs of forms, invoices, contracts, and more — returning clean, structured JSON. It turns paper-based processes into digital data pipelines without building or maintaining complex extraction infrastructure.
</p>

<span class="at-stat">30+</span> specialized processors &nbsp;·&nbsp; <span class="at-stat">OCR</span> + <span class="at-stat">form</span> + entity extraction &nbsp;·&nbsp; <span class="at-mark">turns unstructured paper into structured data</span>

<span class="at-kicker">OVERVIEW</span>

## Overview

Document AI provides multiple tiers of capability. At the foundation is the **Document OCR** processor, which delivers Google-grade optical character recognition on arbitrary documents, including handwritten text, rotated pages, tables, checkboxes, and multi-column layouts. Built on top of this are **specialized parsers** — pre-trained, task-specific models for common document types that go beyond OCR to semantically understand document structure and extract named fields. For documents without a specialized parser, the **Custom Document Extractor** (formerly Custom Document Parser) allows teams to train their own extraction model using as few as 10-50 labeled example documents, leveraging Google's foundation models via few-shot learning.

All Document AI processors are exposed via a consistent REST/gRPC API, with client libraries for Python, Java, Node.js, Go, and .NET, and can be integrated into serverless workflows using Cloud Functions, Workflows, or Dataflow.

<span class="at-kicker">KEY FEATURES</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### FOUNDATION LAYER
>> ### *Document OCR* Processor
>> Enterprise-grade OCR supporting printed and handwritten text, tables, form fields, checkboxes, signatures, barcodes, and QR codes across 200+ languages. Returns bounding-box coordinates for every detected element — the foundational layer on which all specialised parsers are built.
>
>> [!card|section]
>> ###### GENERIC FORMS
>> ### *Form* Parser
>> Generic form field extraction that identifies key-value pairs — "Date of Birth: 01/15/1990" — from any structured or semi-structured form without model training. Handles diverse layouts out of the box, making it the right starting point before reaching for a specialised processor.
>
>> [!card|section]
>> ###### DOMAIN SPECIALISTS
>> ### *Pre-Trained* Parsers
>> 30+ ready-to-use, high-accuracy processors for specific document categories: Invoice Parser (vendor, line items, totals), Contract Parser (parties, clauses, dates), Identity Document Parser (passports, licences), Bank Statement Parser, Pay Stub Parser, Lending Parsers (W-2, 1099, 1003), and Healthcare Parsers for EOBs and intake forms.
>
>> [!card|section]
>> ###### CUSTOM MODELS
>> ### *Custom Document* Extractor
>> Train a custom extraction model using labelled examples in Document AI's web labelling console; leverages Google's foundation models for few-shot generalisation from as few as 10-50 example documents. Ideal for proprietary document types with no matching pre-built parser.
>
>> [!card|section]
>> ###### DOCUMENT ROUTING
>> ### *Splitter* & Classifier
>> Automatically split multi-document PDFs into individual documents and classify each document type — separating a packet containing a W-2, 1099, and bank statement into distinct labelled items. Eliminates a common manual pre-processing step in document intake workflows.
>
>> [!card|section]
>> ###### HUMAN-IN-THE-LOOP
>> ### *Human Review* (HITL)
>> Integrate human review workflows where low-confidence predictions are routed to human reviewers via the Document AI Human-in-the-Loop console before downstream processing. Sets a configurable confidence threshold so only genuinely uncertain extractions incur review cost.

> [!grid|cols3]
>
>> [!card|section]
>> ###### ASYNC SCALE
>> ### *Batch* Processing
>> Submit thousands of documents in a single batch job with results written to Cloud Storage as structured JSON. Designed for high-volume nightly runs or bulk digitisation projects where turnaround time is measured in minutes to hours, not milliseconds.
>
>> [!card|section]
>> ###### REAL-TIME
>> ### *Online* Processing
>> Synchronous API for real-time, single-document extraction with sub-second to few-second response times. Appropriate for interactive workflows — web forms, mobile document capture, or customer-facing portals — where users expect an immediate extraction result.
>
>> [!card|section]
>> ###### DOCUMENT REPOSITORY
>> ### *Document AI* Warehouse
>> Store, search, and manage processed documents and their extracted metadata in a unified document repository with full-text search and schema-based organisation. Provides a governed, searchable layer above raw Cloud Storage for enterprises with ongoing document retention requirements.

<span class="at-kicker">USE CASES</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### FINANCE
>> ### *Accounts Payable* Automation
>> Automatically extract invoice fields — vendor, amount, due date, line items — from thousands of vendor invoices per day, validate against ERP records, and route exceptions for human review, reducing manual data entry by 80-90% and accelerating payment cycles.
>
>> [!card|section]
>> ###### LENDING
>> ### *Mortgage* Processing
>> Parse loan application packets containing W-2s, pay stubs, bank statements, and 1003 forms automatically to populate loan origination systems, dramatically reducing underwriter workloads and cutting time-to-decision from days to hours.
>
>> [!card|section]
>> ###### INSURANCE
>> ### *Claims* Processing
>> Extract claim details, policy numbers, and incident information from claim forms and supporting documentation to automate initial claims triage and data entry — enabling straight-through processing for low-complexity claims.
>
>> [!card|section]
>> ###### LEGAL & COMPLIANCE
>> ### *Contract* Analytics
>> Bulk-process contract repositories to extract key metadata — parties, governing law, renewal dates, payment terms — for contract lifecycle management systems or M&A due diligence, turning weeks of manual review into an overnight batch job.

<span class="at-kicker">PRICING</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Document OCR** | Per page; lower rates at high-volume usage tiers |
| **Form Parser** | Per page; slightly higher than OCR-only |
| **Specialized Processors** | Higher per-page rate per processor category (Invoice, Contract, Identity, etc.) |
| **Custom Document Extractor** | Per page for inference; training charged separately by training document count |
| **Document AI Warehouse** | Per document stored per month plus per search query |
| **Human Review (HITL)** | Per document reviewed in the HITL console |
| **Free Tier** | 1,000 pages/month free for most processor types for evaluation |
| **Volume Discounts** | Significant tiered discounts at 1M+ pages/month for enterprise customers |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · DOCUMENT AI
>> # From *paper* to *structured data*.
>> Extract, classify and validate documents in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Choose *processor type*.
>> Select the processor that matches your document domain — Document OCR for generic text extraction, a pre-trained specialized parser for invoices, contracts, or identity documents, or the Custom Document Extractor for proprietary formats. Processor choice is the single biggest driver of extraction accuracy.
>
>> [!card|step]
>> ###### Step 02
>> ### Submit *document for processing*.
>> Call the `processDocument` endpoint (online) or `batchProcessDocuments` (batch) with the document as base64-encoded bytes or a Cloud Storage URI. Set the processor version, configure any HITL routing thresholds, and specify the output destination for batch results.
>
>> [!card|step]
>> ###### Step 03
>> ### Extract *entities & fields*.
>> Parse the structured JSON response — each extracted entity includes its field name, value, normalised value, confidence score, and bounding-box provenance. Route high-confidence results directly to your ERP or database; send low-confidence predictions to the HITL review queue.

<span class="at-kicker">RELATED PAGES</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[vertex-ai]], [[gemini]], [[cloud-vision-api]], [[cloud-natural-language]], [[cloud-translation]]
>
>> [!card] GCP Data & Storage
>> [[cloud-storage]], [[bigquery]], [[pubsub]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
