---
title: Cloud TPU
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 9:40:11 pm
aliases:
  - Tensor Processing Unit
category: GCP
tags:
  - gcp
  - cloud
  - ai-ml
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud TPU
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | PaaS |
> | **Category** | AI & ML |
> | **Launched** | 2018 |
> | **Interface** | Console, API, SDK |
> | **Website** | https://cloud.google.com/tpu |

---

> "TPUs were designed from the ground up to accelerate matrix operations at the heart of neural networks — delivering an order of magnitude better performance per watt than general-purpose hardware."
> <cite>— Google Brain Research</cite>

---

<span class="at-kicker">ML Accelerators · Google Cloud</span>

# Cloud TPU

<p class="at-lead">
Google Cloud gives external customers on-demand access to the same custom Tensor Processing Units that trained Gemini, AlphaGo, and virtually every major Google ML model — purpose-built ASICs whose systolic array architecture makes transformer and CNN computation maximally efficient. Available as raw TPU VMs, GKE node pools, or managed Vertex AI training jobs, with JAX, PyTorch, and TensorFlow all supported.
</p>

<span class="at-stat">v5p</span> architecture &nbsp;·&nbsp; <span class="at-stat">100+ petaflops</span> per pod &nbsp;·&nbsp; <span class="at-mark">the hardware that trained Gemini</span>

<span class="at-kicker">OVERVIEW</span>

## Overview

Cloud TPU is available in multiple generations, each representing a significant leap in compute density and memory bandwidth:

- **TPU v4**: 275 teraFLOPS of bfloat16 performance per chip; deployed in 4096-chip "pods" for large-scale distributed training. Powers much of Google's internal LLM training.
- **TPU v5p** (Performance): Google's most powerful TPU for LLM training; 459 teraFLOPS per chip; connects into pods via high-bandwidth inter-chip interconnects (ICI). Targets pre-training and fine-tuning of models with hundreds of billions of parameters.
- **TPU v5e** (Efficiency): Optimized for cost efficiency in both training and inference; 197 teraFLOPS per chip; designed for production serving and medium-scale training workloads.

TPUs are accessible via Vertex AI Training (for managed training jobs), GKE (via TPU node pools), and raw TPU VMs (for full control). The programming model is primarily based on JAX (with XLA compilation), but TensorFlow and PyTorch (via PyTorch/XLA) are also supported.



## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### COMPUTE SCALE
>> ### *Massive* Throughput
>> TPU v5p pods deliver exaFLOP-scale compute by connecting thousands of chips via Google's custom high-speed inter-chip interconnect (ICI), enabling distributed training without the bottlenecks of conventional network-based communication — bandwidth between chips is orders of magnitude higher than Ethernet or InfiniBand.
>
>> [!card|section]
>> ###### MEMORY ARCHITECTURE
>> ### *High-Bandwidth* Memory
>> Each TPU chip includes large, high-bandwidth memory pools — up to 95 GB per v5p chip — critical for holding large model weights and activations in-chip during training. HBM capacity is the primary constraint for fitting large models on a single chip without model parallelism.
>
>> [!card|section]
>> ###### NUMERICAL FORMAT
>> ### *bfloat16* Native Precision
>> Hardware-native support for bfloat16 (Brain Floating Point) format, which offers the same dynamic range as float32 with half the memory footprint and double the throughput. Ideal for LLM training where dynamic range matters more than mantissa precision, enabling larger batches and faster iteration.
>
>> [!card|section]
>> ###### JAX ECOSYSTEM
>> ### JAX and *XLA* Integration
>> JAX's XLA (Accelerated Linear Algebra) compiler generates highly optimised TPU executables through JIT compilation. `jax.pmap` and `jax.experimental.mesh_utils` enable seamless multi-chip data and model parallelism with minimal boilerplate — the primary programming model for large-scale TPU workloads at Google.
>
>> [!card|section]
>> ###### PYTORCH ECOSYSTEM
>> ### *PyTorch/XLA* Support
>> PyTorch models can be compiled and executed on TPUs via the `torch_xla` library, expanding TPU accessibility to the PyTorch ecosystem without requiring a full JAX rewrite. Multislice training on v5p and v5e enables spanning single training jobs across multiple TPU pods via Google's datacenter network.
>
>> [!card|section]
>> ###### MANAGED TRAINING
>> ### *Vertex AI* Integration
>> Submit TPU training jobs through Vertex AI Custom Training with the same job management, artifact tracking, hyperparameter tuning, and monitoring as GPU jobs — no manual VM provisioning required. GKE TPU node pools offer Kubernetes-native scheduling for containerised training and serving workflows.

> [!grid|cols3]
>
>> [!card|section]
>> ###### DIRECT ACCESS
>> ### *TPU VMs* — Full Control
>> Direct SSH access to TPU host VMs for maximum flexibility — custom software stacks, multi-process training, direct debugging, and arbitrary Python environments. The raw VM interface is preferred by research teams that need deterministic reproducibility and full control over the software layer.
>
>> [!card|section]
>> ###### COST OPTIMISATION
>> ### *Spot* TPUs
>> Significantly discounted preemptible TPU capacity for fault-tolerant, checkpointing-enabled training workloads. Spot TPUs can be reclaimed by Google with 30 seconds' notice, making frequent checkpointing to Cloud Storage essential — but delivering 60-70% cost savings for workloads that can tolerate interruption.
>
>> [!card|section]
>> ###### ULTRA-SCALE
>> ### *Multislice* Training
>> TPU v5p and v5e support multislice training, where a single training job spans multiple TPU pods connected via Google's datacenter network, enabling model-parallel training at unprecedented scale — the same infrastructure used internally for Gemini pre-training.

<span class="at-kicker">USE CASES</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### RESEARCH
>> ### *LLM* Pre-Training
>> Organizations pre-training transformer models from scratch — GPT-style, T5-style, or custom architectures — at scale benefit from TPU pods' combination of compute density, HBM memory bandwidth, and ICI interconnects that eliminate inter-node communication as a bottleneck.
>
>> [!card|section]
>> ###### PRODUCTION ML
>> ### *Foundation Model* Fine-Tuning
>> Fine-tuning large models (70B+ parameters) on domain-specific datasets using tensor parallelism and pipeline parallelism across multiple TPU chips, leveraging HBM capacity for large model states and LoRA or full-parameter fine-tuning workflows.
>
>> [!card|section]
>> ###### INFERENCE SERVING
>> ### *High-Throughput* LLM Serving
>> Deploy production LLM inference on TPU v5e for cost-efficient, high-throughput serving. TPU v5e offers competitive inference economics versus high-end GPUs, particularly for autoregressive generation workloads where memory bandwidth — not raw FLOP count — is the binding constraint.
>
>> [!card|section]
>> ###### SCIENTIFIC ML
>> ### *Computer Vision* & Scientific Computing
>> Train large convolutional networks and vision transformers (ViT) on massive image datasets where TPU's matrix multiplication throughput delivers significantly faster epoch times. JAX-based scientific computing — physics, biology, climate modelling — maps naturally to TPU's matrix operation acceleration.

<span class="at-kicker">PRICING</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **TPU v5e (Training)** | Per chip-hour; available in 1, 4, and 8 chip configurations; spot pricing at ~60-70% discount |
| **TPU v5e (Inference)** | Separate, lower pricing tier for inference-optimised workloads |
| **TPU v5p** | Higher per chip-hour rate; primarily for large-scale pod reservations; spot available |
| **TPU v4** | Available in pod slices; per chip-hour billing |
| **Committed Use (CUD)** | Up to 40% discount via 1-year or 3-year committed use contracts |
| **Spot TPUs** | Significant discount; can be reclaimed by Google with 30 seconds' notice |
| **Network Egress** | Standard GCP network egress charges for data leaving the TPU host VM |

> [!grid|cols3]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD TPU
>> # From *model* to *trained weights*.
>> Train large models on TPU in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Prepare *TPU-compatible code*.
>> Ensure your training code runs on JAX with XLA, TensorFlow with `tf.distribute.TPUStrategy`, or PyTorch via `torch_xla`. Replace GPU-specific device placement with TPU device assignments and add periodic checkpointing to Cloud Storage — essential for spot TPU resilience and long training runs.
>
>> [!card|step]
>> ###### Step 02
>> ### Provision *TPU node or pod*.
>> Create a TPU VM or node pool via the Cloud Console, `gcloud`, or Vertex AI Custom Training. Select TPU version (v5p for maximum scale, v5e for cost efficiency), configure the chip count and topology, choose on-demand or spot pricing, and attach the appropriate service account for GCS access.
>
>> [!card|step]
>> ###### Step 03
>> ### Launch *training job*.
>> SSH into the TPU VM and run your training script, or submit a Vertex AI Custom Training job pointing at a containerised training image. Monitor loss curves and system metrics in Cloud Monitoring; checkpoints land in Cloud Storage automatically. On completion, export the final weights for serving or further fine-tuning.



## Related pages

> [!grid]
>
>> [!card] GCP AI & ML
>> [[vertex-ai]], [[gemini]], [[model-garden]], [[vertex-ai-workbench]], [[colab-enterprise]]
>
>> [!card] GCP Compute
>> [[compute-engine]], [[gke]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
