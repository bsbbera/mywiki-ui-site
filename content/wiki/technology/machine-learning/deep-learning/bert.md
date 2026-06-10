---
title: BERT
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - BERT
  - Bidirectional Encoder Representations from Transformers
  - BERT Base
  - BERT Large
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NLP
  - Transformers
  - BERT
banner: https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # BERT
> ###### Language Model
> | | |
> | --- | --- |
> | **Developer** | Google AI / Google Brain |
> | **Type** | Pre-trained language model |
> | **Domain** | NLP / Deep Learning |
> | **Initial release** | October 2018 |
> | **Written in** | Python (TensorFlow / PyTorch) |
> | **License** | Apache 2.0 |
> | **Paper** | arxiv.org/abs/1810.04805 |

---

> "The essence of intelligence is the ability to predict."
> <cite>— Yann LeCun</cite>

---

<span class="at-kicker">Language Model · NLP</span>

# BERT

<p class="at-lead">
BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based language model developed by Google AI in 2018 whose key innovation is deep bidirectional context — it reads entire sequences of text in both directions simultaneously, allowing each word to be understood in the full context of every other word in the sentence. This made it a watershed moment for NLP, setting new state-of-the-art results on eleven natural language understanding tasks at launch.
</p>

<span class="at-stat">bidirectional</span> context &nbsp;·&nbsp; <span class="at-stat">masked LM</span> pre-training &nbsp;·&nbsp; <span class="at-stat">pre-train then fine-tune</span> &nbsp;·&nbsp; <span class="at-mark">the word "bank" in "river bank" is understood differently from "investment bank" — full sentence context at every layer</span>

<span class="at-kicker">How It Works</span>

## Overview

Before BERT, language models were either left-to-right (GPT) or shallowly bidirectional (ELMo). BERT uses a **masked language model objective** to train truly deep bidirectional representations — every transformer layer attends to both left and right context simultaneously.

BERT is built entirely on the **encoder stack** of the original Transformer architecture. It comes in two sizes:

| Variant | Layers | Hidden size | Attention heads | Parameters |
| --- | --- | --- | --- | --- |
| **BERT Base** | 12 | 768 | 12 | 110 M |
| **BERT Large** | 24 | 1024 | 16 | 340 M |

> BERT Base was designed to be roughly comparable in size to OpenAI's GPT for fair comparison. BERT Large pushes scale for maximum accuracy.

<span class="at-kicker">Pre-training Objectives</span>

## Pre-training objectives

BERT is pre-trained on two unsupervised tasks simultaneously:

> [!grid|cols2]
>
>> [!card|section]
>> ###### OBJECTIVE 1
>> ### Masked *Language Model* (MLM)
>> 15% of input tokens are randomly masked, and the model predicts the original vocabulary id. This forces the model to learn bidirectional context because it must attend to both left and right context to fill the gap. The key innovation that enables true bidirectionality.
>
>> [!card|section]
>> ###### OBJECTIVE 2
>> ### Next *Sentence Prediction* (NSP)
>> Given two sentences (A, B), predict whether B is the actual next sentence that follows A in the corpus. Teaches the model to understand sentence-level relationships, critical for tasks like question answering and natural language inference.

> [!tip] NSP was later questioned
> Follow-up work (RoBERTa, ALBERT) found that NSP contributes little to downstream performance. Modern descendants often drop it entirely and train longer on larger text corpora.

<span class="at-kicker">Fine-tuning</span>

## Fine-tuning for downstream tasks

Pre-trained BERT can be fine-tuned with a single additional output layer for a wide range of tasks:

| Task | Input format | Output layer |
| --- | --- | --- |
| **Text classification** | `[CLS] The movie was great` | Linear on `[CLS]` token |
| **Question answering** | `[CLS] Question [SEP] Paragraph [SEP]` | Start/end span logits |
| **Named entity recognition** | `[CLS] John lives in Paris` | Token-wise linear |
| **Sentence similarity** | `[CLS] Sentence A [SEP] Sentence B` | Classification on `[CLS]` |
| **Multi-choice QA** | `[CLS] Question [SEP] Option [SEP]` ... | Classification over options |

The `[CLS]` token is a special classification token added at the start of every input. Its final hidden state is used as an aggregate sequence representation for classification tasks.

> [!example] Fine-tuning BERT for classification
> ```python
> from transformers import BertForSequenceClassification
> import torch.optim as optim
>
> model = BertForSequenceClassification.from_pretrained(
>     'bert-base-uncased', num_labels=2
> )
> optimizer = optim.AdamW(model.parameters(), lr=2e-5, weight_decay=0.01)
> ```
> Learning rate **2e-5 to 5e-5** is the standard range. Higher values destroy pre-trained knowledge via catastrophic forgetting.

<span class="at-kicker">Key Innovations</span>

## Key innovations

> [!grid|cols2]
>
>> [!card|section]
>> ###### INNOVATION 1
>> ### True *Bidirectionality*
>> Masked LM enables deep left+right context fusion at every layer. Unlike ELMo (shallow concatenation) or GPT (left-to-right only), BERT's bidirectional attention is applied at every transformer layer — 12 or 24 deep.
>
>> [!card|section]
>> ###### INNOVATION 2
>> ### *Pre-train* then Fine-tune
>> One large general model adapts to many tasks with minimal task-specific architecture changes — just a new output layer. This paradigm reduced the cost of NLP research dramatically: one large pre-training run, many fine-tuning runs.
>
>> [!card|section]
>> ###### INNOVATION 3
>> ### *Contextual* Embeddings
>> The same word gets different vector representations depending on surrounding words, unlike static embeddings like Word2Vec. "Bank" in "river bank" and "bank account" have completely different BERT representations.
>
>> [!card|section]
>> ###### INNOVATION 4
>> ### *Transfer* Learning for NLP
>> Demonstrated that language representation learning transfers powerfully across tasks, sparking the modern NLP revolution. Every major NLP model today (GPT, T5, LLaMA, Claude) follows the same pre-train-then-fine-tune paradigm.

<span class="at-kicker">BERT Family</span>

## Descendants and variants

BERT spawned an entire family of improved models:

| Model | Key change | Result |
| --- | --- | --- |
| **RoBERTa** | More data, longer training, no NSP, dynamic masking | Stronger than BERT Large with same architecture |
| **ALBERT** | Factorised embeddings + cross-layer parameter sharing | 18× fewer parameters, near-BERT accuracy |
| **DistilBERT** | Knowledge distillation to 6 layers | 40% smaller, 60% faster, retains 97% accuracy |
| **SpanBERT** | Mask contiguous spans instead of tokens | Better for span extraction tasks (QA, coreference) |
| **ELECTRA** | Replaced-token detection instead of MLM | More sample-efficient training, stronger at same compute |
| **DeBERTa** | Disentangled attention + enhanced mask decoder | Superhuman performance on SuperGLUE benchmark |

> [!grid|cols3]
>
>> [!card|section]
>> ###### EFFICIENCY
>> ### *DistilBERT* — Distilled
>> Knowledge distillation compresses BERT Base into 6 layers. 40% smaller, 60% faster, retains 97% of BERT's performance. Ideal for production deployments where latency matters.
>
>> [!card|section]
>> ###### ROBUSTNESS
>> ### *RoBERTa* — Robustly Optimised
>> Same architecture as BERT; just trained longer, on more data, with dynamic masking and no NSP. Sets new state-of-the-art on multiple benchmarks without any architectural change.
>
>> [!card|section]
>> ###### PERFORMANCE
>> ### *DeBERTa* — Disentangled
>> Disentangled attention separates content and position into distinct attention matrices. Enhanced mask decoder improves MLM. Achieves superhuman performance on SuperGLUE with v3 variant.

<span class="at-kicker">Limitations</span>

## Limitations

> [!warning] Where BERT falls short
> - **Quadratic attention cost** — Self-attention scales as O(n²), limiting input length to typically 512 tokens.
> - **No generation** — As an encoder-only model, BERT cannot generate text autoregressively; decoder models (GPT, T5) handle generation.
> - **Static at inference** — Each word's representation is computed in one pass; there's no iterative refinement.
> - **NSP is weak** — Next Sentence Prediction was found to be a noisy pre-training signal; RoBERTa removes it entirely.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### BERT IN PRACTICE
>> # From *pre-trained weights* to *production NLP*.
>> Fine-tune BERT for classification, NER, and QA with a few hundred to a few thousand labelled examples.
>
>> [!card|step]
>> ###### Step 01
>> ### *Load* pre-trained BERT.
>> Choose the right variant: `bert-base-uncased` for English text (case-insensitive), `bert-base-multilingual-cased` for multilingual, `bert-large-uncased` when accuracy is paramount. Load via HuggingFace `transformers`.
>
>> [!card|step]
>> ###### Step 02
>> ### *Tokenise* your data.
>> Use `BertTokenizer` or `AutoTokenizer`. Set `max_length=512`, `padding=True`, `truncation=True`. The tokeniser adds `[CLS]`, `[SEP]`, and handles WordPiece subword tokenisation automatically.
>
>> [!card|step]
>> ###### Step 03
>> ### *Fine-tune* carefully.
>> Use `AdamW` with `lr=2e-5` to `5e-5`. Add linear warmup for the first 10% of training steps. Train for 2–4 epochs — BERT converges quickly. Monitor validation F1/accuracy to avoid overfitting.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is the key innovation that makes BERT bidirectional, and how does it differ from GPT?
2. Explain the Masked Language Model pre-training objective. Why does it enable bidirectionality?
3. What does the `[CLS]` token represent, and how is it used for classification?
4. Why do BERT fine-tuning runs use learning rates as small as 2e-5?
5. What is catastrophic forgetting, and how does it relate to BERT fine-tuning?
6. Compare DistilBERT and RoBERTa — what trade-offs does each make?
7. Why can't BERT generate text, and what models can?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Transformer family
>> [[transformers|Transformers]], [[neural-networks|Neural Networks]]
>
>> [!card] BERT descendants
>> [[../nlp/roberta|RoBERTa]], [[../nlp/distilbert|DistilBERT]], [[../nlp/electra|ELECTRA]], [[../nlp/deberta|DeBERTa]]
>
>> [!card] NLP tasks
>> [[../nlp/named-entity-recognition|NER]], [[../nlp/question-answering|Question Answering]], [[../nlp/sentiment-analysis|Sentiment Analysis]], [[../nlp/text-classification|Text Classification]]
>
>> [!card] Training concepts
>> [[transfer-learning|Transfer Learning]], [[regularisation-training|Regularisation]], [[optimisation-algorithms|Optimisation Algorithms]]
