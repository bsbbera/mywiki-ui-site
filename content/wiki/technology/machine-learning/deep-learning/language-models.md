---
title: Language Models
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Language Models
  - N-Gram Model
  - Machine Translation
  - Statistical Language Model
  - Neural Language Model
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NLP
  - LanguageModels
  - Transformers
banner: https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Language is the mirror of the mind."

---

<span class="at-kicker">Deep Learning · NLP</span>

# Language Models

<p class="at-lead">
Language models predict the next word (or token) in a sequence, forming the foundation of modern NLP. From simple n-gram statistical models counting word co-occurrences to massive neural networks with billions of parameters, language models have evolved to capture syntax, semantics, and even reasoning. They power machine translation, text generation, question answering, and the conversational AI systems we interact with daily.
</p>

<span class="at-stat">n-gram</span> &nbsp;·&nbsp; <span class="at-stat">neural LM</span> &nbsp;·&nbsp; <span class="at-stat">transformer</span> &nbsp;·&nbsp; <span class="at-mark">predicting the next token</span>

<span class="at-kicker">Fundamentals</span>

## What is a Language Model?

A **language model** assigns a probability distribution over sequences of words. The core task is predicting the next word given the previous context:

$$P(w_1, w_2, ..., w_n) = \prod_{i=1}^{n} P(w_i | w_1, ..., w_{i-1})$$

> [!info] Why language models matter
> Language models are the foundation of:
> - Machine translation
> - Speech recognition
> - Text generation and completion
> - Sentiment analysis
> - Question answering

---

<span class="at-kicker">N-Gram Models</span>

## Statistical Language Models

An **n-gram** is a contiguous sequence of $n$ items from a given text sample. N-gram models approximate language by counting how often sequences occur in training data.

### N-gram types

| Type | $n$ | Example from "AGCTTCGA" |
|------|-----|-------------------------|
| **Unigram** | 1 | A, G, C, T, T, C, G, A |
| **Bigram** | 2 | AG, CT, TC, CG, GA |
| **Trigram** | 3 | AGC, GCT, CTT, TTG, TCG, CGA |

### N-gram language model

Simplify the full probability by assuming only the previous $n-1$ words matter:

$$P(w_i | w_1, ..., w_{i-1}) \approx P(w_i | w_{i-n+1}, ..., w_{i-1})$$

### Bigram example

```
P("the cat sat") ≈ P("the") × P("cat"|"the") × P("sat"|"cat")

Training corpus:
- "the" appears 1000 times
- "the cat" appears 50 times  
- "cat sat" appears 10 times

P("the cat sat") ≈ (1000/N) × (50/1000) × (10/count("cat"))
```

### Limitations of n-grams

> [!warning] N-gram problems
> - **Sparsity**: Most n-grams never seen in training
> - **Fixed context**: Can't capture long-range dependencies
> - **No semantic understanding**: "Paris" and "France" are unrelated to the model
> - **Storage**: Large n requires massive memory

---

<span class="at-kicker">Neural Language Models</span>

## From Counting to Learning

Neural language models learn distributed representations that capture semantic and syntactic relationships:

> [!grid|cols3]
>
>> [!card|section]
>> ###### RNNLM
>> ### *RNN* Language Model
>> Recurrent neural networks process sequences word-by-word, maintaining hidden state as memory. Limited by vanishing gradients for long contexts.
>
>> [!card|section]
>> ###### LSTMLM
>> ### *LSTM* Language Model
>> Long Short-Term Memory networks add gating mechanisms to preserve information over longer sequences. Better than vanilla RNNs but still sequential.
>
>> [!card|section]
>> ###### TRANSFORMER
>> ### *Transformer* LM
>> Self-attention enables parallel processing and unlimited context (in theory). The architecture behind GPT, BERT, and modern LLMs.

---

<span class="at-kicker">Machine Translation</span>

## Statistical to Neural MT

**Machine translation** is the process of translating languages using computers. The field has evolved dramatically:

### Evolution of MT

| Era | Approach | Key Technology |
|-----|----------|----------------|
| **1950s-1990s** | Rule-based | Linguistic rules, dictionaries |
| **1990s-2010s** | Statistical | IBM models, phrase-based SMT |
| **2014-present** | Neural | Encoder-decoder, attention, transformers |

### Statistical Machine Translation (SMT)

**Phrase-based SMT** broke sentences into phrases and learned translation probabilities:

$$\hat{e} = \arg\max_{e} P(e|f) = \arg\max_{e} P(f|e) \cdot P(e)$$

- $P(f|e)$: Translation model (phrase alignments)
- $P(e)$: Language model (fluency)

### Neural Machine Translation (NMT)

**Encoder-decoder** architecture with attention:

```
Source: "Le chat dort"  →  Encoder  →  Context Vector  →  Decoder  →  "The cat sleeps"
                              ↓
                        Attention mechanism
                        (focus on relevant source words)
```

### Transformer translation

Modern translation uses the transformer architecture:
- **Encoder**: Process source language
- **Decoder**: Generate target language autoregressively
- **Self-attention**: Captures dependencies regardless of distance

> [!example] Translation quality comparison
> - Rule-based: Word-by-word, often ungrammatical
> - Statistical: Better fluency, alignment errors
> - Neural: Near-human quality for many language pairs

---

<span class="at-kicker">Modern Paradigm</span>

## Pre-training and Transfer Learning

The modern approach to language modeling:

1. **Pre-train** on massive text corpora (predict next word)
2. **Fine-tune** on downstream tasks (classification, translation, QA)

### Key pre-trained models

| Model | Architecture | Pre-training Task | Size |
|-------|--------------|-------------------|------|
| **GPT** | Decoder-only | Next token prediction | 117M–175B |
| **BERT** | Encoder-only | Masked LM + NSP | 110M–340M |
| **T5** | Encoder-decoder | Span corruption | 60M–11B |
| **GPT-4** | Decoder-only | RLHF, next token | Undisclosed |

### Emergent capabilities

> [!info] Scaling laws
> As language models scale (parameters × data × compute), emergent capabilities appear:
> - In-context learning
> - Chain-of-thought reasoning
> - Code generation
> - Instruction following

---

<span class="at-kicker">Evaluation</span>

## Measuring Language Models

| Metric | What it measures | Range |
|--------|------------------|-------|
| **Perplexity** | How well model predicts held-out text | 1 (perfect) to ∞ |
| **BLEU** | N-gram overlap with references (MT) | 0 to 100 |
| **ROUGE** | Recall-oriented overlap (summarization) | 0 to 100 |
| **BERTScore** | Semantic similarity using BERT | 0 to 1 |

### Perplexity

$$PP(W) = P(w_1, w_2, ..., w_N)^{-1/N}$$

Lower is better. Can be interpreted as the effective vocabulary size — a perplexity of 100 means the model is as uncertain as choosing uniformly from 100 options.

---

<span class="at-kicker">Best Practices</span>

## Working with Language Models

> [!tip] Model selection
> - Encoder-only (BERT): Understanding tasks (classification, NER)
> - Decoder-only (GPT): Generation tasks (text completion, chat)
> - Encoder-decoder (T5): Translation, summarization

> [!tip] Generation strategies
> - **Greedy**: Always pick highest probability token — fast but repetitive
> - **Beam search**: Keep top-k partial sequences — better quality, slower
> - **Sampling**: Sample from distribution — diverse, risk of incoherence
> - **Top-p (nucleus)**: Sample from smallest set with cumulative prob > p — balance of quality and diversity

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. What is an n-gram and how does it simplify language modeling?
2. What are the limitations of n-gram models?
3. How did neural machine translation improve over statistical MT?
4. What is the role of attention in translation?
5. What is perplexity and how is it interpreted?
6. What is the difference between encoder-only and decoder-only LMs?
7. How does pre-training enable transfer learning in NLP?

---

## Related pages

> [!grid]
>
>> [!card] Transformer Architecture
>> [[transformers|Transformers]] · [[attention-mechanism|Attention Mechanism]] · [[positional-encoding|Positional Encoding]]
>
>> [!card] Language Models
>> [[bert|BERT]] · [[gpt|GPT]] · [[t5|T5]]
>
>> [!card] NLP Tasks
>> [[../nlp/nlp-fundamentals|NLP Fundamentals]] · [[machine-translation|Machine Translation]] · [[question-answering|Question Answering]]
>
>> [!card] Training
>> [[transfer-learning|Transfer Learning]] · [[fine-tuning|Fine-Tuning]] · [[masked-language-model|Masked LM]]
