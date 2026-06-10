---
title: Vertex AI
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 6:00:00 pm
aliases:
  - Vertex AI Platform
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Vertex AI
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | PaaS |
> | **Category** | AI & ML |
> | **Launched** | 2021 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/vertex-ai |

---

> "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."
> <cite>— Sundar Pichai, CEO of Google</cite>

---

<span class="at-kicker">AI/ML Platform · Google Cloud</span>

# Vertex AI

<p class="at-lead">
Google Cloud's unified machine learning platform for building, deploying, and scaling ML models — from AutoML experiments to production pipelines serving billions of predictions.
</p>

<span class="at-stat">2021</span> launched at Google I/O &nbsp;·&nbsp; <span class="at-stat">150+</span> models in Model Garden &nbsp;·&nbsp; <span class="at-stat">99.9%</span> availability SLA &nbsp;·&nbsp; <span class="at-mark">one platform for the entire MLOps lifecycle</span>

Vertex AI is Google Cloud's unified, end-to-end machine learning platform that consolidates all GCP ML tools and services under a single umbrella. Originally launched at Google I/O 2021 as a rebrand and unification of AI Platform, AutoML, and related services, Vertex AI gives data scientists, ML engineers, and developers a single environment to build, deploy, manage, and monitor ML models at any scale — from a quick AutoML experiment to a production pipeline serving billions of predictions per day.

<span class="at-kicker">How It Works</span>

## Overview

Vertex AI addresses the full MLOps lifecycle: data preparation, model training (custom or AutoML), hyperparameter tuning, serving, monitoring, and governance. Its deep integration with the rest of Google Cloud — BigQuery, Cloud Storage, Dataflow, Pub/Sub — means teams can move data seamlessly across the pipeline without complex handoffs. Vertex AI also provides access to Google's foundation models, including the Gemini family, through Model Garden and the Vertex AI API, enabling organizations to ground generative AI applications in enterprise data with RAG (Retrieval-Augmented Generation) workflows.

The platform is designed around the concept of an MLOps maturity model, supporting teams at every stage from ad-hoc experimentation to fully automated, continuous training and deployment pipelines.

<span class="at-kicker">Platform Capabilities</span>

## Key Features

- **AutoML**: Train high-quality models for tabular, image, text, and video data with minimal code; Google handles architecture search and hyperparameter tuning automatically.
- **Custom Training**: Run training jobs on any framework — TensorFlow, PyTorch, scikit-learn, XGBoost — using managed compute including GPUs and Cloud TPUs.
- **Vertex AI Pipelines**: Orchestrate ML workflows as portable, reusable DAGs using KFP (Kubeflow Pipelines) or TFX, with native scheduling and artifact tracking.
- **Feature Store**: A centralized, managed repository for ML features that ensures consistency between training and serving, with online (low-latency) and offline (batch) access.
- **Model Registry**: Version-control and lifecycle-manage every model artifact; track lineage from dataset to deployment.
- **Model Monitoring**: Detect training-serving skew and prediction drift in production with configurable alerting thresholds.
- **Vertex AI Experiments**: Track hyperparameters, metrics, and artifacts across runs using TensorBoard integration.
- **Vertex AI Workbench**: Managed JupyterLab environments co-located with GCP data services for interactive development.
- **Generative AI on Vertex AI**: Access Gemini, PaLM 2, Imagen, Codey, and third-party foundation models; fine-tune, prompt-engineer, and deploy them via a unified API.
- **Vertex AI Agent Builder**: Build grounded, multi-turn conversational agents and search experiences backed by enterprise data stores.
- **Explainable AI**: Get feature attributions and explanations for any deployed model to support compliance, debugging, and trust.
- **Model Garden**: A curated catalog of 150+ foundation models — Google, open-source, and partner — deployable with one click.

<span class="at-kicker">Common Applications</span>

## Use Cases

- **Enterprise MLOps**: Organizations standardizing their ML development and deployment lifecycle across multiple teams use Vertex AI Pipelines, Feature Store, and Model Registry to enforce consistency and enable continuous training.
- **Generative AI Applications**: Building RAG chatbots, document summarization tools, and code assistants by grounding Gemini models on proprietary enterprise data via Vertex AI Search and Embeddings.
- **AutoML for Structured Data**: Business analysts and domain experts building churn prediction, demand forecasting, or fraud detection models without deep ML expertise using AutoML Tables.
- **Computer Vision at Scale**: Training and deploying custom image classification, object detection, and segmentation models using AutoML Vision or custom training, serving them behind Vertex AI Prediction endpoints.
- **Healthcare AI**: Fine-tuning specialized models for medical imaging, clinical NLP, or patient risk stratification with compliance-grade infrastructure.
- **Recommendation Systems**: Using Vertex AI Feature Store and online serving endpoints to power real-time personalization engines at sub-millisecond latency.
- **Batch Prediction Pipelines**: Running nightly batch inference jobs over millions of records stored in BigQuery or Cloud Storage, with results written back for downstream BI consumption.

<span class="at-kicker">Cost Model</span>

## Pricing

Vertex AI uses a consumption-based pricing model with multiple dimensions:

- **Training**: Charged per compute hour based on machine type (n1, a2 GPU nodes, Cloud TPU), with custom training and AutoML training billed separately.
- **Prediction**: Online prediction charged per compute-node hour for dedicated endpoints; batch prediction charged per compute hour.
- **Feature Store**: Charged for storage (per GB/month) and online serving reads (per read operation).
- **Pipelines**: Charged per pipeline run step.
- **Generative AI**: Foundation model API calls (Gemini, etc.) are billed per 1,000 characters (input/output) or per token depending on the model.
- **Model Monitoring**: Charged per monitored model hour.
- **Free Tier**: Limited free usage available for AutoML training, online predictions, and certain generative AI APIs.

Google offers committed use discounts (CUDs) for sustained prediction endpoint usage, and pricing varies significantly by region.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[gemini]], [[model-garden]], [[vertex-ai-workbench]], [[colab-enterprise]], [[vector-search]], [[cloud-tpu]]
>
>> [!card] GCP Data & Analytics
>> [[bigquery]], [[pubsub]], [[cloud-storage]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
