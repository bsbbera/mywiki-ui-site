---
title: Model Garden
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 6:00:00 pm
aliases:
  - Vertex AI Model Garden
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: 
publish: true
---

> [!infobox|right]
> # Model Garden
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | PaaS |
> | **Category** | AI & ML |
> | **Launched** | 2023 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/vertex-ai/generative-ai/docs/model-garden/explore-models |

---

> "The best model is the one that fits your task, your data, and your constraints — not necessarily the largest one."
> <cite>— ML Engineering Principle</cite>

---

Vertex AI Model Garden is Google Cloud's curated marketplace and deployment hub for foundation models, offering a single, unified interface to discover, evaluate, customize, and deploy a diverse ecosystem of AI models. Rather than being locked into a single vendor's model lineup, Model Garden brings together Google's own first-party models (Gemini, Imagen, Codey, Chirp), open-source community models (Llama, Mistral, Gemma, Falcon), and third-party partner models (Anthropic Claude, AI21, Cohere) — all deployable directly into Vertex AI endpoints within a customer's own GCP project and VPC.

## Overview

Model Garden solves one of the core challenges in enterprise AI adoption: model selection and deployment complexity. ML engineers and application developers can browse a catalog of 150+ models, read detailed model cards (describing architecture, training data, licensing, benchmark scores, and intended use), and launch interactive prompting sessions directly in Vertex AI's Generative AI Studio before committing to a deployment. Once a model is selected, Model Garden provides one-click deployment to a Vertex AI Prediction endpoint, with all the enterprise scaffolding (autoscaling, logging, IAM, monitoring) inherited automatically.

Model Garden is tightly integrated with Vertex AI's fine-tuning, evaluation, and pipeline infrastructure, meaning any model sourced from the Garden can be fine-tuned with customer data, evaluated against custom benchmarks, and incorporated into Vertex AI Pipelines for automated retraining.

## Key Features

- **Multi-Source Catalog**: Access Google first-party models (Gemini 1.5 Pro/Flash, Gemma 2, Imagen 3, Codey, Chirp 2), open-source models (Llama 3, Mistral 7B/8x7B, Falcon 40B, Stable Diffusion), and partner models (Anthropic Claude 3, Cohere Command, AI21 Jamba) in one place.
- **Model Cards**: Each model has a detailed card with architecture description, parameter count, supported tasks, training data provenance, licensing terms, benchmark results, and known limitations.
- **One-Click Deployment**: Deploy any supported model to a managed Vertex AI endpoint with configurable compute (GPU/TPU), autoscaling settings, and traffic splitting for A/B testing.
- **Generative AI Studio Integration**: Test and iterate on prompts against any Model Garden model in a web UI before writing any code.
- **Fine-Tuning Support**: Adapt open-source and select Google models using supervised fine-tuning (SFT) or parameter-efficient fine-tuning (LoRA/QLoRA) on customer data.
- **Model Evaluation**: Run standardized or custom evaluation pipelines against Model Garden models using Vertex AI's evaluation framework, comparing multiple models head-to-head on your own datasets.
- **Notebook Samples**: Every model entry includes sample Colab Enterprise or Vertex AI Workbench notebooks demonstrating inference, fine-tuning, and integration patterns.
- **Gemma Open Models**: Google's Gemma family (Gemma 2B, 7B, Gemma 2 9B/27B) is available with open weights and permissive licensing for on-premise or GCP deployment.
- **Partner Model Integrations**: Third-party models like Anthropic Claude run on Google Cloud infrastructure, with the same data governance guarantees (no training on customer data, CMEK, VPC-SC) as first-party models.
- **Container-Ready**: Models are packaged as Docker containers compatible with Vertex AI Prediction, allowing deployment to GKE clusters for teams that need more infrastructure control.

## Use Cases

- **Model Selection for Enterprise Pilots**: ML teams evaluating multiple LLMs for a specific task (e.g., legal document summarization) can run side-by-side benchmarks in Model Garden without provisioning separate infrastructure for each model.
- **Open-Source Model Deployment**: Organizations that need to run Llama 3 or Mistral on Google Cloud infrastructure (for data sovereignty, cost, or latency reasons) can deploy them through Model Garden without managing container registries or Kubernetes YAML.
- **Domain-Specific Fine-Tuning**: Healthcare or legal teams fine-tuning Gemma or Llama on proprietary datasets to create specialized models with better performance on narrow tasks than general-purpose APIs.
- **Image Generation Pipelines**: Deploying Imagen 3 or Stable Diffusion XL via Model Garden for creative content generation, product visualization, or synthetic data creation workflows.
- **Code Intelligence**: Using Codey (code-bison, code-gecko) for IDE plugins, code review automation, or developer productivity tools that require lower latency than Gemini Pro.
- **Multi-Model Routing**: Building LLM router architectures that send simple requests to small, cheap models (Gemma 2B) and complex requests to larger models (Gemini 1.5 Pro) based on task difficulty classification.

## Pricing

Model Garden itself has no additional access fee — you pay for the underlying compute resources consumed:

- **Managed API Models** (Gemini, Claude via Vertex): Billed per token/character as per the respective model's Vertex AI pricing.
- **Self-Deployed Open-Source Models**: Billed for the Vertex AI Prediction endpoint compute hours (GPU machine type × hours), with no per-token licensing fee.
- **Fine-Tuning Jobs**: Billed as Vertex AI custom training jobs (per compute hour on the chosen accelerator).
- **Model Evaluation**: Billed per evaluation pipeline run.
- **Storage**: Model artifacts stored in Cloud Storage are billed at standard GCS rates.

For open-source models like Llama 3, the model weights themselves are free; only GCP infrastructure costs apply. Partner models (Anthropic, etc.) have their own pricing tiers negotiated through Google Cloud Marketplace.

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[vertex-ai]], [[gemini]], [[vertex-ai-workbench]], [[colab-enterprise]], [[cloud-tpu]], [[vector-search]]
>
>> [!card] GCP Storage
>> [[cloud-storage]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
