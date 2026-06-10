---
title: Transformers
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Transformers
  - Self-Attention
  - Multi-Head Attention
  - BERT
  - GPT
  - Positional Encoding
  - Attention Is All You Need
  - Transformer Architecture
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - Transformers
  - NLP
  - Attention
banner: https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
maturity: budding
---

---

> "Attention is all you need."
> <cite>— Vaswani et al., NeurIPS 2017</cite>

---

<span class="at-kicker">Attention · Deep Learning</span>

# Transformers

<p class="at-lead">
Transformers revolutionised deep learning by replacing recurrence with self-attention, enabling parallel processing of entire sequences and capturing long-range dependencies in O(1) sequential steps. First introduced for machine translation in 2017, they now dominate NLP (BERT, GPT), vision (ViT), audio, and multimodal AI — the key insight being that every token in a sequence can attend to every other token simultaneously, with no sequential bottleneck and no vanishing gradients across time steps.
</p>

<span class="at-stat">self-attention</span> &nbsp;·&nbsp; <span class="at-stat">multi-head attention</span> &nbsp;·&nbsp; <span class="at-stat">positional encoding</span> &nbsp;·&nbsp; <span class="at-mark">transformers process all tokens simultaneously — 100× faster than RNNs on modern hardware</span>

<span class="at-kicker">How It Works</span>

## Overview

RNNs process sequences one token at a time — inherently sequential and slow. For a 512-token sentence, an RNN needs 512 sequential steps. A transformer processes all 512 tokens **simultaneously** via matrix operations, making training dramatically faster on modern hardware.

The original "Attention Is All You Need" architecture has two sides:

```
┌─────────────────────┐     ┌─────────────────────┐
│     ENCODER         │     │     DECODER         │
│  (6 identical layers)│     │  (6 identical layers)│
│                     │     │                     │
│  Input Embedding     │     │  Output Embedding    │
│  + Positional Encoding│     │  + Positional Encoding│
│        ↓            │     │        ↓            │
│  ┌─────────────┐    │     │  ┌─────────────┐    │
│  │ Multi-Head  │    │     │  │ Masked Multi│    │
│  │ Self-Attn  │    │     │  │ -Head Self  │    │
│  │   + Add&Norm│    │     │  │ -Attn       │    │
│  └──────┬──────┘    │     │  └──────┬──────┘    │
│  ┌──────┴──────┐    │     │  ┌──────┴──────┐    │
│  │ Feed-Forward │    │     │  │ Encoder-Dec │    │
│  │   + Add&Norm │    │     │  │  Cross-Attn │    │
│  └─────────────┘    │     │  │   + Add&Norm│    │
│                     │     │  └──────┬──────┘    │
│        ↓            │     │  ┌──────┴──────┐    │
│  (repeat ×6)       │     │  │ Feed-Forward │    │
│                     │     │  │   + Add&Norm │    │
│  Final hidden states ────────→│             │    │
│                     │     │        ↓            │
│                     │     │  (repeat ×6)       │
│                     │     │        ↓            │
│                     │     │  Linear + Softmax   │
└─────────────────────┘     └─────────────────────┘
```

> [!example] Encoder-only vs. Decoder-only vs. Encoder-decoder
> - **Encoder-only** (BERT, RoBERTa): bidirectional attention; understanding tasks (classification, NER).
> - **Decoder-only** (GPT, LLaMA): causal (left-to-right) attention; generation tasks.
> - **Encoder-decoder** (T5, BART): full encoder + autoregressive decoder; translation, summarisation.

<span class="at-kicker">Core Mechanism</span>

## Self-attention mechanism

Self-attention computes a weighted sum of all positions in the sequence, where weights are determined by how relevant each position is to the current one.

### Scaled dot-product attention

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

| Component | Meaning | Dimension |
| --- | --- | --- |
| **Q (Query)** | "What am I looking for?" | $(seq, d_k)$ |
| **K (Key)** | "What do I contain?" | $(seq, d_k)$ |
| **V (Value)** | "What information do I have?" | $(seq, d_v)$ |
| **$d_k$** | Key/query dimension | Typically 64 |

> The scaling factor $\frac{1}{\sqrt{d_k}}$ prevents softmax from entering regions with extremely small gradients when $d_k$ is large.

```python
def scaled_dot_product_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    return torch.matmul(torch.softmax(scores, dim=-1), V)
```

> [!tip] Reading the attention map
> `weights[i, j, k]` tells you how much position $j$ attended to position $k$. In a translation model, you can visualise which source word each target word focused on. Plotting these attention heatmaps often reveals interpretable patterns: verbs attending to their subject, pronouns attending to their antecedents.

## Multi-head attention

Instead of a single attention computation, run $h$ attention heads in parallel with different learned projections, then concatenate and project:

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) W^O$$
$$\text{head}_i = \text{Attention}(Q W_i^Q, K W_i^K, V W_i^V)$$

> [!info] Why multiple heads?
> Different heads can learn different types of relationships simultaneously. One head might track syntactic dependencies; another might track coreference; another might attend to nearby words. The final projection fuses all these perspectives into a single representation.

> [!example] Multi-head attention shapes
> With `d_model=512` and `num_heads=8`, each head operates on `d_k = 512/8 = 64` dimensions. Input `(batch=2, seq=10, d_model=512)` is projected to 8 parallel Q/K/V matrices of size `(2, 8, 10, 64)`. After attention and concatenation, the output is projected back to `(2, 10, 512)` — same shape as the input.

<span class="at-kicker">Position & Structure</span>

## Positional encoding

Transformers have no inherent sense of word order — attention is permutation-invariant. Positional encodings inject position information by adding sinusoidal signals to the token embeddings:

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$
$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$

> [!note] Why sinusoids?
> Sine and cosine functions with geometrically spaced frequencies create a unique "fingerprint" for each position that the network can learn to decode. Crucially, the relative position between any two tokens can be expressed as a linear transformation of their absolute encodings — a property that helps with generalisation to unseen sequence lengths.

## Feed-forward network

Each transformer layer ends with a position-wise feed-forward network:

$$\text{FFN}(x) = \max(0, xW_1 + b_1)W_2 + b_2$$

`d_ff` is typically 4× `d_model` (e.g., 2048 for `d_model=512`). This expansion-then-contraction structure allows the network to reason about each position in a higher-dimensional space before projecting back.

## Layer normalisation & residual connections

Every sub-layer (attention, feed-forward) in a transformer layer uses the **Add & Norm** pattern:

$$\text{output} = \text{LayerNorm}(x + \text{SubLayer}(x))$$

> [!warning] Pre-norm vs. Post-norm
> Original transformer uses **post-norm** (attention → add → norm). Modern variants (GPT, LLaMA) often use **pre-norm** (norm → attention → add) for training stability at extreme depth — pre-norm gradients are more consistent in magnitude across layers.

<span class="at-kicker">Implementation</span>

## Complete transformer encoder

```python
class TransformerEncoder(nn.Module):
    def __init__(self, vocab_size, d_model=512, num_heads=8,
                 num_layers=6, d_ff=2048, dropout=0.1):
        super().__init__()
        self.embedding   = nn.Embedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model)
        self.layers      = nn.ModuleList([
            TransformerLayer(d_model, num_heads, d_ff, dropout)
            for _ in range(num_layers)
        ])
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, mask=None):
        x = self.dropout(self.pos_encoding(self.embedding(x)))
        for layer in self.layers:
            x = layer(x, mask)
        return x   # (batch, seq, d_model)
```

<span class="at-kicker">BERT vs. GPT</span>

## BERT vs. GPT: the great divide

| | BERT | GPT |
| --- | --- | --- |
| **Architecture** | Encoder-only | Decoder-only |
| **Attention** | Bidirectional (see all words) | Causal / masked (see only past words) |
| **Training** | Masked language modelling + NSP | Autoregressive next-token prediction |
| **Best for** | Understanding (classification, NER, QA) | Generation (text completion, chat, code) |
| **Typical size** | 110M (base), 340M (large) | 124M (GPT-2 small) to 175B (GPT-3) |
| **Example use** | "Is this review positive?" | "Write a poem about transformers" |

> [!grid|cols3]
>
>> [!card|section]
>> ###### ENCODER-ONLY
>> ### *BERT* Family
>> Bidirectional attention sees full context. Excellent for understanding tasks — classification, NER, QA. Pre-trained with masked language modelling. Fine-tune with task-specific head. **RoBERTa**, DeBERTa, ALBERT are descendants.
>
>> [!card|section]
>> ###### DECODER-ONLY
>> ### *GPT* Family
>> Causal (left-to-right) attention for autoregressive generation. Trained on next-token prediction at scale. Emergent few-shot capabilities at large scale. Powers ChatGPT, Claude, LLaMA, Mistral.
>
>> [!card|section]
>> ###### ENCODER-DECODER
>> ### *T5* / *BART* Family
>> Full encoder for understanding, autoregressive decoder for generation. Ideal for translation, summarisation, and tasks requiring both comprehension and generation. T5 treats every task as text-to-text.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### TRANSFORMER WORKFLOW
>> # From *raw tokens* to *contextual representations*.
>> Build transformer models that capture long-range dependencies and scale to billions of parameters.
>
>> [!card|step]
>> ###### Step 01
>> ### *Tokenise* the input.
>> Convert text to token IDs using a tokeniser (WordPiece, BPE, SentencePiece). Add special tokens `[CLS]`, `[SEP]`. Pad or truncate to max sequence length. Create attention masks for padding.
>
>> [!card|step]
>> ###### Step 02
>> ### *Embed* + *position*.
>> Look up token embeddings from the embedding matrix. Add sinusoidal or learned positional encodings. Apply dropout. The result is the input to the first transformer layer.
>
>> [!card|step]
>> ###### Step 03
>> ### *Attend* + *classify*.
>> Pass through N transformer layers (self-attention → FFN → add&norm). For classification: take `[CLS]` token representation and pass through a linear classifier. For generation: apply causal mask and decode autoregressively.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is the computational complexity of self-attention? How does it compare to RNNs?
2. Why is the scaling factor $\sqrt{d_k}$ necessary in attention?
3. What would happen if you removed positional encoding from a transformer?
4. Explain the difference between encoder-only, decoder-only, and encoder-decoder transformers.
5. Why does GPT use causal masking but BERT does not?
6. What is the advantage of multi-head attention over single-head attention?
7. How do transformers handle sequences longer than they were trained on?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] NLP
>> [[bert|BERT]], [[../nlp/gpt|GPT]], [[../nlp/nlp|NLP Fundamentals]]
>
>> [!card] Architectures
>> [[rnn-lstm-gru|RNN, LSTM & GRU]], [[neural-networks|Neural Networks]]
>
>> [!card] Training
>> [[optimisation-algorithms|Optimisation]], [[regularisation-training|Regularisation]]
>
>> [!card] Vision
>> [[../nlp/vision-transformer|Vision Transformer (ViT)]]
