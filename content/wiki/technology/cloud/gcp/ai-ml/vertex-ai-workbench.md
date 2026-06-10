---
title: Vertex AI Workbench
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 6:00:00 pm
aliases:
  - Workbench Notebooks
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: 
publish: true
---

> [!infobox|right]
> # Vertex AI Workbench
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | PaaS |
> | **Category** | AI & ML |
> | **Launched** | 2021 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/vertex-ai/docs/workbench/introduction |

---

> "The notebook is the lab bench of the data scientist — where hypotheses are formed, tested, and refined before being handed to production."
> <cite>— Data Science Community Wisdom</cite>

---

Vertex AI Workbench is Google Cloud's managed, enterprise-ready JupyterLab environment designed specifically for machine learning development on GCP. It provides data scientists and ML engineers with a pre-configured, cloud-native notebook experience that is deeply integrated with the Vertex AI ecosystem, Google Cloud data services, and enterprise security controls. Rather than spending time on infrastructure management — installing drivers, configuring networking, managing package dependencies — teams can provision a Workbench instance in minutes and focus entirely on building and iterating on ML models.

## Overview

Vertex AI Workbench comes in two primary modes: **Instances** (formerly User-Managed Notebooks) and the newer **Managed Notebooks** experience. Instances give teams full control over the underlying Compute Engine VM, including the ability to install arbitrary packages, attach GPU accelerators, and customize the software environment. The platform manages the JupyterLab interface, GCP authentication, and lifecycle operations (start/stop/upgrade), while users retain OS-level access via SSH.

Workbench instances are pre-loaded with the Google Cloud SDK, common ML frameworks (TensorFlow, PyTorch, JAX, scikit-learn, XGBoost), data connectors (BigQuery, Cloud Storage, Dataflow), and Vertex AI SDK for Python — making the environment immediately productive. The integration with Vertex AI Training means notebooks can seamlessly submit long-running training jobs to managed compute clusters without leaving the notebook interface, avoiding the "my laptop can't run this" problem for large-scale experimentation.

For teams building generative AI applications, Workbench is the canonical environment for prompt engineering, embedding generation, fine-tuning experiments, and RAG pipeline development with Vertex AI's Gemini APIs.

## Key Features

- **Managed JupyterLab**: A fully managed JupyterLab 3.x environment hosted on Google Cloud, accessible via browser with no VPN required (for public instances) or via Private Service Connect for VPC-only deployments.
- **GPU & TPU Support**: Attach NVIDIA A100, L4, T4, or V100 GPUs to Workbench instances for interactive GPU-accelerated training and experimentation; supports multi-GPU configurations.
- **Deep GCP Integration**: Native connectors for BigQuery (query results directly into pandas DataFrames), Cloud Storage (mount buckets as local filesystems), and Dataproc (submit Spark jobs from notebooks).
- **Vertex AI SDK Integration**: Pre-installed `google-cloud-aiplatform` Python SDK for submitting Vertex AI Training jobs, deploying models, managing Feature Store, and calling Gemini APIs directly from notebooks.
- **Environment Customization**: Choose from Google-maintained base container images (with GPU drivers, CUDA, ML frameworks) or bring your own Docker container image for fully reproducible environments.
- **IAM Integration**: Instance access is controlled via Google Cloud IAM; no shared passwords or separate user management required.
- **Idle Shutdown**: Configurable idle-timeout policies automatically stop instances after a period of inactivity, preventing runaway compute costs.
- **Scheduled Execution**: Execute notebooks on a schedule as parameterized jobs using Vertex AI Pipelines or Cloud Scheduler, enabling automated reporting and recurring experiments.
- **Git Integration**: Built-in JupyterLab Git extension for committing, branching, and pushing notebooks to Cloud Source Repositories, GitHub, or GitLab.
- **Persistent Disk Storage**: Notebooks and data are stored on persistent disks that survive instance restarts; snapshots and disk resizing supported.
- **Data Labeling Integration**: Seamlessly connect to Vertex AI Data Labeling to create labeling tasks, review annotations, and feed labeled datasets back into training pipelines.
- **Executor**: Run notebooks as one-off or scheduled execution jobs without keeping an interactive instance running, reducing costs for batch notebook workflows.

## Use Cases

- **Interactive ML Development**: Data scientists iterating on feature engineering, model architectures, and evaluation metrics with immediate feedback loops in a GPU-accelerated environment connected to BigQuery training data.
- **Generative AI Prototyping**: Building and testing RAG pipelines, prompt chains, and LLM fine-tuning experiments using the Vertex AI Gemini API with access to enterprise data stored in Cloud Storage.
- **Training Job Submission**: Packaging notebook-proven code into containerized Vertex AI Training jobs for distributed, large-scale training without managing Kubernetes or cluster orchestration.
- **Data Exploration and EDA**: Connecting to BigQuery datasets via the BigQuery Magic (`%%bigquery`) to run SQL queries and visualize results with matplotlib, seaborn, or Plotly directly in notebook cells.
- **Model Evaluation and Comparison**: Running evaluation harnesses across multiple model checkpoints stored in GCS, logging metrics to Vertex AI Experiments and comparing results in TensorBoard.
- **MLOps Onboarding**: Team standardization on a single, version-controlled notebook environment reduces "works on my machine" issues and ensures all engineers have the same GCP-authenticated, pre-configured environment.
- **Research Collaboration**: Sharing notebooks with consistent environments across geographically distributed teams via GCP projects, with version control through Git.

## Pricing

Vertex AI Workbench is priced based on the underlying Compute Engine resources:

- **Instance Cost**: Charged per hour for the Compute Engine VM (e.g., n1-standard-4, n1-highmem-8) while the instance is running. Prices vary by machine type and region.
- **GPU Accelerators**: Additional per-hour charge for attached GPUs (T4, L4, A100); GPU pricing is a significant portion of total cost for deep learning workloads.
- **Persistent Disk**: Charged per GB/month for the boot disk and any additional attached persistent disks (SSD or standard).
- **No Management Fee**: There is no additional charge for the Workbench management layer on top of Compute Engine pricing.
- **Executor Jobs**: Notebook execution jobs are billed as Vertex AI custom training jobs.
- **Cost Optimization**: Use idle-shutdown policies, preemptible/spot VMs for interruptible workloads, and right-sizing to manage costs effectively.

## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[vertex-ai]], [[gemini]], [[colab-enterprise]], [[model-garden]], [[cloud-tpu]]
>
>> [!card] GCP Data & Analytics
>> [[bigquery]], [[cloud-storage]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
