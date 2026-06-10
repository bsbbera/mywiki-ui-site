---
title: Transfer Learning
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Transfer Learning
  - Fine Tuning
  - Feature Extraction
  - Pretrained Models
  - ImageNet
  - Domain Adaptation
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - TransferLearning
  - ComputerVision
  - NLP
banner: https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "If I have seen further, it is by standing on the shoulders of giants."
> <cite>— Isaac Newton</cite>

---

<span class="at-kicker">Model Reuse · Deep Learning</span>

# Transfer Learning

<p class="at-lead">
Transfer learning leverages knowledge learned from one task — usually on a massive dataset — and applies it to a different but related task. Instead of training a model from scratch on limited data, you start with a model that already understands general features (edges, textures, shapes in vision; syntax, semantics, grammar in NLP) and adapt it to your specific problem, routinely achieving better accuracy with less data, less compute, and less training time.
</p>

<span class="at-stat">pre-trained backbone</span> &nbsp;·&nbsp; <span class="at-stat">fine-tuning</span> &nbsp;·&nbsp; <span class="at-stat">feature extraction</span> &nbsp;·&nbsp; <span class="at-mark">early layers are universal; late layers are specific — freeze early, retrain late</span>

<span class="at-kicker">Why It Works</span>

## Overview

Training ResNet-50 on ImageNet (1.2M images, 1000 classes) takes days on 8 GPUs. Fine-tuning it on your 5,000-image dataset takes minutes on a single GPU and typically achieves **better accuracy** than training a custom model from scratch.

The key is that neural networks learn **hierarchical features** — and the lower-level features (edges, colours, textures) are universal across visual domains. You only need to retrain the task-specific upper layers.

### The intuition: hierarchical features

| Layer depth | What it learns | Transferability |
| --- | --- | --- |
| **Early (1–3)** | Edges, colours, simple textures | **Very high** — universal across images |
| **Middle (4–8)** | Shapes, patterns, object parts | **High** — general across visual domains |
| **Late (9–12+)** | Object-specific, class-specific | **Low** — specific to source dataset |
| **Classifier** | Class logits | **None** — must be replaced |

> [!tip] Core principle
> Early layers are universal; late layers are specific. Transfer learning keeps early layers frozen and retrains late layers. The more different your target domain is from the source, the more layers you should retrain.

<span class="at-kicker">Three Strategies</span>

## Transfer learning strategies

> [!grid|cols3]
>
>> [!card|section]
>> ###### STRATEGY 1
>> ### *Feature* Extraction
>> Freeze the entire backbone. Only train a new classifier head on top. Best when dataset is very small (<1,000 images per class). The backbone is used as a fixed feature extractor — extracting rich representations without updating weights.
>
>> [!card|section]
>> ###### STRATEGY 2
>> ### *Fine-tuning* (Partial)
>> Unfreeze the last few convolutional blocks. Use differential learning rates — smaller for frozen early layers, larger for new head. Best when dataset is medium-sized (1,000–10,000 images) and similar to source domain.
>
>> [!card|section]
>> ###### STRATEGY 3
>> ### *Full* Fine-tuning
>> Unfreeze the entire network and train with a very small global LR. Requires large, domain-similar dataset; otherwise risks catastrophic forgetting. Best when you have >10,000 images per class.

### 1. Feature extraction (freeze backbone)

```python
resnet = models.resnet50(pretrained=True)
for param in resnet.parameters():
    param.requires_grad = False           # freeze ALL backbone layers

resnet.fc = nn.Linear(resnet.fc.in_features, num_classes)
optimizer = optim.Adam(resnet.fc.parameters(), lr=1e-3)
# Only ~20K parameters are trainable out of 25.5M total (0.08%)
```

### 2. Fine-tuning (unfreeze last layers)

Unfreeze the last few convolutional blocks and train with a small learning rate. Use **differential learning rates** — smaller for early layers (preserve what's already learned), larger for later layers.

```python
for param in resnet.layer4.parameters():
    param.requires_grad = True

optimizer = optim.Adam([
    {'params': resnet.layer4.parameters(), 'lr': 1e-5},  # fine-tune slowly
    {'params': resnet.fc.parameters(),     'lr': 1e-3}   # train from scratch
])
```

### 3. Full fine-tuning

Train the entire network with a very small learning rate. Requires a large, domain-similar dataset; otherwise risks catastrophic forgetting.

> [!tip] Learning rate for full fine-tuning
> Use a very small global LR (e.g., `1e-5`) to avoid destroying pre-trained weights, combined with a warmup schedule. The one-cycle LR policy works exceptionally well here.

<span class="at-kicker">Learning Rate Strategies</span>

## Learning rate strategies for fine-tuning

> [!example] One-cycle LR for fine-tuning
> The one-cycle policy first ramps the learning rate from a small value up to `max_lr` (warmup), then decays it back down — all within a single training run. For fine-tuning with two parameter groups, set different `max_lr` values: a smaller one for the backbone and a larger one for the classifier head.
> ```python
> scheduler = OneCycleLR(
>     optimizer,
>     max_lr=[1e-4, 1e-3],       # backbone vs. head
>     steps_per_epoch=len(train_loader),
>     epochs=10, pct_start=0.3   # 30% warmup
> )
> ```
> Step the scheduler **per batch** (not per epoch) for OneCycleLR.

<span class="at-kicker">Transfer Learning for NLP</span>

## Transfer learning in NLP

### Word embeddings (static)

Pre-trained word vectors (Word2Vec, GloVe, FastText) provide dense semantic representations that can be loaded as frozen embedding layers:

```python
embedding = nn.Embedding.from_pretrained(glove_weights, freeze=True)
```

Words semantically similar in the source corpus (e.g., "king" and "queen") are close in embedding space, giving downstream models a useful initialisation even without any task-specific training.

### Contextual embeddings (dynamic)

Modern transformers (BERT, RoBERTa, GPT) produce context-dependent embeddings — the same word gets different representations depending on surrounding words. Fine-tuning them on downstream tasks is the dominant NLP paradigm:

```python
model = BertForSequenceClassification.from_pretrained(
    'bert-base-uncased', num_labels=2
)
optimizer = optim.AdamW(model.parameters(), lr=2e-5)   # very small LR for BERT
```

> [!warning] BERT learning rates
> BERT is sensitive to learning rate. Typical range: **2e-5 to 5e-5**. Higher values destroy pre-trained knowledge (catastrophic forgetting).

<span class="at-kicker">Model Selection</span>

## Choosing a pre-trained model

| Domain | Popular models | Size | Best for |
| --- | --- | --- | --- |
| **Vision** | ResNet-50, EfficientNet-B0, ViT-Base | 25M–86M | General image classification |
| **Vision (mobile)** | MobileNet-V3, EfficientNet-Lite | 5M–15M | Edge/mobile deployment |
| **NLP (English)** | BERT, RoBERTa, DeBERTa | 110M–340M | Classification, NER, QA |
| **NLP (multilingual)** | XLM-RoBERTa, mBERT | 270M | Cross-lingual tasks |
| **NLP (generative)** | GPT-2/3/4, LLaMA, Mistral | 125M–70B+ | Text generation, chat |
| **Audio** | Wav2Vec 2.0, HuBERT | 95M–315M | Speech recognition |

<span class="at-kicker">Domain Adaptation</span>

## Domain adaptation

When source and target domains differ significantly (e.g., ImageNet photos → medical X-rays):

| Technique | How it works |
| --- | --- |
| **More frozen layers** | Keep earlier layers frozen; domain-specific features are deeper |
| **Progressive unfreezing** | Unfreeze one block at a time, starting from top |
| **Adversarial adaptation** | Train a discriminator to confuse source/target domains |
| **Pseudolabelling** | Use source model to label target data; train on combined set |

> [!example] Progressive unfreezing
> Start by training only the classifier for a few epochs. Then unfreeze the top convolutional block and continue with a smaller LR for that block. Finally, unfreeze all layers with a very small global LR. This staged approach prevents the catastrophic forgetting that can occur if all weights are unfrozen immediately with a large learning rate.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### TRANSFER LEARNING WORKFLOW
>> # From *pre-trained model* to *task-specific performance*.
>> Systematically adapt powerful pre-trained representations to your domain with minimal data and compute.
>
>> [!card|step]
>> ###### Step 01
>> ### *Load* the backbone.
>> Choose a pre-trained model matching your modality. Load with `pretrained=True`. Replace the final classification layer with a new head matching your number of classes.
>
>> [!card|step]
>> ###### Step 02
>> ### *Freeze* and warm up.
>> Freeze the backbone. Train only the new head for 3–5 epochs with `lr=1e-3`. This prevents the untrained head from corrupting pre-trained backbone weights with large gradient updates.
>
>> [!card|step]
>> ###### Step 03
>> ### *Unfreeze* and fine-tune.
>> Optionally unfreeze last blocks with differential LRs (`1e-5` backbone, `1e-3` head). Apply cosine LR decay or OneCycleLR. Monitor val accuracy closely — stop if plateaus or degrades.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. Why does transfer learning work? What makes early layers transferable?
2. When should you freeze the backbone vs. fine-tune it?
3. Why use different learning rates for different layers during fine-tuning?
4. What is the risk of using too high a learning rate when fine-tuning BERT?
5. How does domain adaptation differ from standard transfer learning?
6. Why is progressive unfreezing effective?
7. What is catastrophic forgetting, and how do you prevent it when fine-tuning?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Architectures
>> [[cnn|CNN]], [[transformers|Transformers]], [[rnn-lstm-gru|RNN, LSTM & GRU]]
>
>> [!card] NLP
>> [[bert|BERT]], [[../nlp/gpt|GPT]], [[../nlp/word2vec|Word2Vec]]
>
>> [!card] Training
>> [[regularisation-training|Regularisation & Training]], [[optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Vision
>> [[cnn|CNN]], [[../nlp/computer-vision|Computer Vision]]
