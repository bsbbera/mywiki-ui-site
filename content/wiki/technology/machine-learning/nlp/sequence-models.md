---
title: Sequence Models
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Sequence Modeling
  - Sequential Models
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - DeepLearning
  - SequenceModels
  - RNN
  - LSTM
  - Transformers
banner: https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "The order of words matters as much as the words themselves."
> <cite>— Linguistic principle of sequentiality</cite>

---

<span class="at-kicker">NLP · Deep Learning</span>

# Sequence Models

<p class="at-lead">
Sequence models are neural architectures designed to process ordered data — where the position and
context of each element carries meaning. They power machine translation, speech recognition,
text generation, and time-series forecasting by maintaining memory of past inputs as they predict
future outputs.
</p>

<span class="at-stat">variable-length</span> &nbsp;·&nbsp; <span class="at-stat">order-aware</span> &nbsp;·&nbsp; <span class="at-stat">parameter-sharing</span> &nbsp;·&nbsp; <span class="at-mark">context is everything</span>

<span class="at-kicker">Core Requirements</span>

## What Makes a Sequence Model

Any model that processes sequential data must satisfy four design criteria:

| Criterion | Challenge | Why It Matters |
|-----------|-----------|--------------|
| **Variable-length input** | Sentences have different numbers of words | A model must accept arbitrary sequence lengths without fixed-size input layers |
| **Long-term dependencies** | "The cat, which was chased by the dog, **sat** on the mat" | Subject-verb agreement may span dozens of tokens |
| **Order preservation** | "Dog bites man" ≠ "Man bites dog" | Permuting a sequence changes its meaning entirely |
| **Parameter sharing** | Same word may appear at position 3 or 33 | Applying the same weights at every timestep keeps model size constant regardless of sequence length |

> [!tip] Parameter sharing
> In recurrent networks, the same weight matrix is applied at every timestep. This is what makes
> RNNs and their variants scalable to long sequences — unlike feedforward nets, which would need
> a separate set of weights for each position.

---

<span class="at-kicker">Architecture Evolution</span>

## From Recurrence to Attention

### Recurrent Neural Networks (RNNs)

RNNs maintain a **hidden state** that acts as memory, updated at each timestep:

$$h_t = f(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$$

$$\hat{y}_t = g(W_{hy} h_t + b_y)$$

Where $h_t$ is the hidden state at time $t$, $x_t$ is the input, and $f$ is typically $\tanh$ or ReLU.

**Limitation**: The hidden state must compress all past information into a fixed-size vector.
As sequences grow, early signals are diluted — the **vanishing gradient problem**.

### Long Short-Term Memory (LSTM)

LSTMs solve vanishing gradients with a **cell state** (long-term memory) plus three gating mechanisms:

```
forget gate  → what to discard from cell state
input gate   → what new information to store
output gate  → what to output based on cell state
```

> [!info] Gating intuition
> Think of the cell state as a conveyor belt that runs through the entire chain. The gates are
> like valves that add or remove information at each station, while the belt itself changes very
> little — allowing gradients to flow uninterrupted.

See [[rnn-lstm-gru|RNNs, LSTMs & GRUs]] for a deeper treatment of recurrent architectures.

### Transformers & Self-Attention

Modern sequence modeling is dominated by the **Transformer**, which replaces recurrence with
**self-attention** — every position can directly attend to every other position in parallel.

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

**Advantages over RNNs/LSTMs**:
- **Parallelism**: All positions processed simultaneously (no sequential dependency)
- **Long-range dependencies**: Direct connection between any two positions, regardless of distance
- **Scalability**: GPU-friendly matrix operations

See [[transformers|Transformers]] for the full architecture breakdown.

---

<span class="at-kicker">Applications</span>

## Machine Translation

**Machine Translation (MT)** is the task of automatically converting text from one language to
another while preserving meaning, style, and grammatical correctness.

### Encoder–Decoder Architecture

```mermaid
graph LR
    A[Source sentence<br/>"The cat sat"] --> B[Encoder<br/>RNN / LSTM / Transformer]
    B --> C[Context vector<br/>fixed-length representation]
    C --> D[Decoder<br/>RNN / LSTM / Transformer]
    D --> E[Target sentence<br/>"Le chat s'est assis"]
```

1. **Encoder** reads the source sequence and compresses it into a context vector.
2. **Decoder** generates the target sequence one token at a time, conditioned on the context.

### Attention in Translation

Attention allows the decoder to focus on relevant source words when generating each target word:

$$\text{align}(y_t, x_s) = \frac{\exp(\text{score}(s_t, h_s))}{\sum_{s'} \exp(\text{score}(s_t, h_{s'}))}$$

Where $s_t$ is the decoder hidden state and $h_s$ is the encoder hidden state at position $s$.

> [!example] Visualising alignment
> When translating "The cat sat on the mat" → "Le chat s'est assis sur le tapis",
> the decoder aligns "Le" → "The", "chat" → "cat", etc. Attention weights reveal
> these soft correspondences explicitly.

### Modern MT Systems

| Era | Approach | Example |
|-----|----------|---------|
| Statistical MT | Phrase tables, alignment models | IBM Models, Moses |
| Neural MT (seq2seq) | Encoder–decoder LSTMs | Google Translate (2016) |
| Transformer MT | Self-attention, multi-head | Google Translate (current), DeepL |
| Large language models | In-context learning, zero-shot | GPT-4, Claude |

---

<span class="at-kicker">Beyond Text</span>

## Other Sequence Modelling Domains

Sequence models are not limited to NLP:

| Domain | Sequence | Example Task |
|--------|----------|--------------|
| **Speech** | Audio frames → phonemes → words | Automatic Speech Recognition (ASR) |
| **Music** | Notes/chords over time | Melody generation, accompaniment |
| **Time series** | Stock prices, sensor readings | Forecasting, anomaly detection |
| **Bioinformatics** | DNA/RNA/protein sequences | Gene prediction, protein folding |
| **Video** | Frame sequences | Action recognition, video captioning |

---

<span class="at-kicker">Trade-offs</span>

## Choosing a Sequence Architecture

| Model | Strength | Weakness | Best For |
|-------|----------|----------|----------|
| Vanilla RNN | Simple, small | Vanishing gradients, slow | Educational, tiny datasets |
| LSTM / GRU | Captures medium-range dependencies | Sequential, slow to train | Speech, handwriting |
| Transformer | Parallel, long-range, SOTA | Quadratic memory in sequence length | NLP, most modern tasks |
| Causal / Linear attention | Sub-quadratic complexity | Slightly lower quality | Very long sequences |

> [!warning] Sequence length scaling
> Transformers have $O(n^2)$ self-attention cost. For very long sequences (e.g. DNA, long documents),
> consider sparse attention (Longformer), linear attention (RWKV), or sliding-window variants.

## Interesting facts

- The original 2017 Transformer paper, *"Attention Is All You Need"*, was just 8 pages long
  but redefined the entire field.
- Google's Neural Machine Translation system (GNMT) reduced translation errors by 55–85%
  compared to their previous phrase-based system.
- LSTMs were invented in 1997 by Hochreiter & Schmidhuber, but only became practical in the
  2010s thanks to GPU acceleration.

## Interview questions

1. Why do RNNs suffer from vanishing gradients, and how do LSTM gates mitigate this?
2. What is the computational complexity of Transformer self-attention? How do modern variants
   address this for long sequences?
3. Explain how attention differs from recurrence in modelling long-range dependencies.
4. In encoder–decoder translation, why might a fixed-length context vector be a bottleneck?
5. How would you handle out-of-vocabulary words in a neural MT system?

## Related pages

> [!grid]
>
>> [!card] Architectures
>> [[transformers|Transformers]], [[rnn-lstm-gru|RNNs, LSTMs & GRUs]], [[language-models|Language Models]]
>
>> [!card] NLP Fundamentals
>> [[nlp-fundamentals|NLP Fundamentals]], [[word2vec|Word2Vec]], [[bert|BERT]]
>
>> [!card] Deep Learning Concepts
>> [[neural-networks|Neural Networks]], [[deep-learning|Deep Learning]], [[optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Applications
>> [[machine-translation|Machine Translation]] · [[speech-to-text|Speech-to-Text]] · [[machine-learning-fundamentals|ML Fundamentals]]
