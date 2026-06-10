---
title: RNN, LSTM & GRU
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - RNN
  - LSTM
  - GRU
  - Sequence Models
  - Long Short-Term Memory
  - Gated Recurrent Unit
  - Vanishing Gradients
  - Bidirectional RNN
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - RNN
  - LSTM
  - Sequences
  - NLP
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Language is a process of free creation; its laws and principles are fixed, but the manner in which the principles of generation are used is free and infinitely varied."
> <cite>— Noam Chomsky</cite>

---

<span class="at-kicker">Sequence Modelling · Deep Learning</span>

# RNN, LSTM & GRU

<p class="at-lead">
Recurrent Neural Networks process sequential data by maintaining a hidden state that captures information from previous time steps — sharing parameters across the sequence, making them natural fits for time series, text, audio, and any data with temporal structure. The plain RNN struggles with long sequences due to vanishing gradients, motivating the LSTM and GRU architectures which use gating mechanisms to selectively remember and forget information over hundreds of steps.
</p>

<span class="at-stat">hidden state</span> &nbsp;·&nbsp; <span class="at-stat">gating mechanisms</span> &nbsp;·&nbsp; <span class="at-stat">BPTT</span> &nbsp;·&nbsp; <span class="at-mark">LSTMs solve vanishing gradients via a cell state conveyor belt that flows unchanged through time</span>

<span class="at-kicker">The Sequential Problem</span>

## Overview

Classical ML treats each input independently. But in language, the word "bank" means something different after "river" vs. after "investment." RNNs model this temporal dependency by passing a hidden state from one time step to the next.

The three architectures in this family follow a progression of sophistication:

> [!grid|cols3]
>
>> [!card|section]
>> ###### SIMPLE
>> ### *Vanilla* RNN
>> Updates hidden state $h_t = \tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$ at each step. Same weights used everywhere — parameter-efficient but vulnerable to vanishing gradients over long sequences.
>
>> [!card|section]
>> ###### ADVANCED
>> ### *LSTM* — Long Short-Term Memory
>> Adds a **cell state** $c_t$ (long-term memory) alongside the hidden state $h_t$. Three gates (forget, input, output) regulate information flow. Solves vanishing gradients for sequences of hundreds of steps.
>
>> [!card|section]
>> ###### EFFICIENT
>> ### *GRU* — Gated Recurrent Unit
>> Simplifies LSTM by merging cell and hidden state into one, using only two gates (reset, update). Fewer parameters, faster training, often comparable performance to LSTM on smaller datasets.

<span class="at-kicker">Vanilla RNN</span>

## Vanilla RNN

At each time step $t$, the network updates its hidden state using the current input and the previous hidden state:

$$h_t = \tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$$
$$\hat{y}_t = W_{hy} h_t + b_y$$

The same weight matrices $W_{hh}$ and $W_{xh}$ are used at every time step — parameter-sharing that makes RNNs efficient but also the root of the vanishing gradient problem.

> [!example] Character-level RNN (numpy)
> A vanilla RNN with `hidden_size=128` is initialised with small random weights. Given the one-hot encoded sequence `[a, b, c]` (vocab size 27), the forward pass runs through 3 time steps, updating $h$ at each step:
> ```python
> h = np.zeros((hidden_size, 1))
> for x in inputs:          # x is a one-hot column vector
>     h = np.tanh(Wxh @ x + Whh @ h + bh)
> y = Why @ h + by          # predict next character
> ```
> The output has shape `(27, 1)` — a score for each vocabulary item.

<span class="at-kicker">Gradient Problem</span>

## The vanishing & exploding gradient problems

During backpropagation through time (BPTT), gradients are multiplied by the weight matrix $W_{hh}$ at every time step:

$$\frac{\partial L}{\partial h_0} = \frac{\partial L}{\partial h_T} \cdot (W_{hh}^T)^T \cdots (W_{hh}^T)$$

If the largest eigenvalue of $W_{hh}$ is > 1 → **exploding gradients** (weights become NaN).
If it's < 1 → **vanishing gradients** (early time steps learn nothing).

> [!warning] Why this matters
> In a 100-word sentence, the first word's gradient passes through 100 matrix multiplications. Even slightly < 1 eigenvalues compound to near-zero. The network "forgets" the beginning of long sequences.

| Problem | Solution | How it works |
| --- | --- | --- |
| **Exploding** | Gradient clipping | Cap gradients at a maximum norm |
| **Vanishing** | ReLU activation | Derivative = 1 for positive inputs |
| **Vanishing** | Better initialisation | Identity matrix for $W_{hh}$; zero biases |
| **Vanishing** | Skip connections | Shortcut paths through time |
| **Vanishing** | **LSTM / GRU** | Gated mechanisms control information flow |

```python
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=5.0)
```

<span class="at-kicker">LSTM Architecture</span>

## LSTM — Long Short-Term Memory

LSTM solves vanishing gradients through a **cell state** $c_t$ (long-term memory) and three gating mechanisms that regulate information flow.

### The gates

| Gate | Formula | Role |
| --- | --- | --- |
| **Forget gate** | $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$ | What to discard from cell state |
| **Input gate** | $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$ | What new information to store |
| **Candidate** | $\tilde{c}_t = \tanh(W_c \cdot [h_{t-1}, x_t] + b_c)$ | New candidate values |
| **Output gate** | $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$ | What to output |

### State updates

$$c_t = f_t \odot c_{t-1} + i_t \odot \tilde{c}_t$$
$$h_t = o_t \odot \tanh(c_t)$$

> [!info] The cell state conveyor belt
> The **cell state** acts like a conveyor belt — information flows through with minimal changes (only element-wise multiplications and additions). The forget gate decides what to erase, the input gate decides what to write, and the output gate decides what to expose as the hidden state.

```python
lstm = nn.LSTM(
    input_size=100,    # embedding dimension
    hidden_size=256,   # hidden state dimension
    num_layers=2,      # stacked LSTMs
    batch_first=True,  # input shape: (batch, seq, feature)
    dropout=0.3,       # between layers
    bidirectional=True
)
# Input: (batch=32, seq=50, features=100)
output, (hidden, cell) = lstm(x)
# output: (32, 50, 512)  — 256*2 for bidirectional
# hidden: (4, 32, 256)   — 2 layers × 2 directions
```

<span class="at-kicker">GRU Architecture</span>

## GRU — Gated Recurrent Unit

GRU simplifies LSTM by merging the cell state and hidden state into one, using only two gates:

| Gate | Formula | Role |
| --- | --- | --- |
| **Reset gate** | $r_t = \sigma(W_r \cdot [h_{t-1}, x_t])$ | How much past to forget |
| **Update gate** | $z_t = \sigma(W_z \cdot [h_{t-1}, x_t])$ | How much to update vs. preserve |

$$\tilde{h}_t = \tanh(W \cdot [r_t \odot h_{t-1}, x_t])$$
$$h_t = (1 - z_t) \odot h_{t-1} + z_t \odot \tilde{h}_t$$

> [!tip] GRU vs LSTM choice
> GRU has fewer parameters than LSTM and often trains faster with comparable performance. When in doubt, try both and compare on your validation set. GRU tends to win on smaller datasets; LSTM on larger ones where the extra cell state capacity pays off.

<span class="at-kicker">Architecture Comparison</span>

## LSTM vs. GRU comparison

| | LSTM | GRU |
| --- | --- | --- |
| Gates | 3 (forget, input, output) | 2 (reset, update) |
| State | Separate cell + hidden | Single hidden state |
| Parameters | More (~4× input size × hidden size) | Fewer (~3×) |
| Training speed | Slower | Faster |
| Performance | Often slightly better on large data | Often comparable; better on smaller data |
| When to choose | Long sequences; need fine control | Faster iteration; smaller datasets |

<span class="at-kicker">Bidirectional & Seq2Seq</span>

## Bidirectional RNNs

Process the sequence in **both directions** — forward and backward — then concatenate hidden states. This gives the network access to both past and future context at every time step.

> [!example] When bidirectional helps
> In sentiment analysis, "not bad" means "good" — but only if "not" and "bad" are seen together. A unidirectional left-to-right RNN might process "not" before "bad" arrives, but a bidirectional RNN sees both simultaneously through the backward pass.

```python
birnn = nn.LSTM(input_size=100, hidden_size=128,
                num_layers=2, bidirectional=True, batch_first=True)
output, (hidden, cell) = birnn(x)
# Extract last layer's forward and backward final states
forward  = hidden[-2, :, :]          # (batch, 128)
backward = hidden[-1, :, :]          # (batch, 128)
combined = torch.cat((forward, backward), dim=1)   # (batch, 256)
```

## Sequence-to-sequence with attention

Modern sequence modelling often uses **encoder-decoder** architectures with **attention**. The encoder compresses the input into context vectors; the decoder generates outputs token by token, using attention to look back at all encoder outputs rather than relying on a single fixed context vector.

> [!info] Why attention helps seq2seq
> Without attention, the encoder must compress an entire sentence into a single vector — a bottleneck that hurts long sequences. Attention lets the decoder query all encoder hidden states at each step, learning which source positions are relevant for each target position. This is the direct precursor to the transformer's self-attention mechanism.

<span class="at-kicker">Decision Guide</span>

## When to use what

| Task | Architecture | Why |
| --- | --- | --- |
| Short sequences (<20) | Vanilla RNN | Simple, fast enough |
| Medium sequences (20–100) | LSTM or GRU | Captures medium-term dependencies |
| Long sequences (100+) | LSTM or Transformer | LSTM with gradient clipping; Transformer for very long |
| Bidirectional context needed | Bi-LSTM / Bi-GRU | Both directions simultaneously |
| Speed priority | GRU | Fewer parameters, faster training |
| State-of-the-art NLP | Transformer | Replaces RNNs for most NLP tasks |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### SEQUENCE MODELLING PIPELINE
>> # From *input tokens* to *sequence representations*.
>> Choose the right recurrent architecture for your sequence length and compute budget.
>
>> [!card|step]
>> ###### Step 01
>> ### *Embed* the sequence.
>> Convert tokens to dense vectors with `nn.Embedding`. Use pre-trained embeddings (GloVe, FastText) or learn from scratch. Set `padding_idx=0` to mask padding tokens in variable-length batches.
>
>> [!card|step]
>> ###### Step 02
>> ### *Encode* with RNN.
>> Pass embedded sequence through LSTM or GRU. Use `batch_first=True` for shape `(batch, seq, features)`. Add `bidirectional=True` when full context matters. Stack 2–3 layers for complex tasks.
>
>> [!card|step]
>> ###### Step 03
>> ### *Decode* or classify.
>> For classification: take the final hidden state or mean-pool over all outputs. For seq2seq: use encoder output as context for decoder. Apply dropout between layers for regularisation.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. Why does a vanilla RNN suffer from the vanishing gradient problem?
2. How does the LSTM cell state solve the vanishing gradient problem that plain RNNs cannot?
3. Explain the role of each gate in an LSTM: forget, input, and output.
4. What are the differences between LSTM and GRU, and when would you prefer one over the other?
5. What is bidirectional processing, and for which tasks does it help?
6. Why did transformers replace RNNs for most NLP tasks despite RNNs being simpler?
7. What is gradient clipping, and why is it particularly important for RNNs?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Deep Learning
>> [[deep-learning|Deep Learning]], [[neural-networks|Neural Networks]], [[transformers|Transformers]]
>
>> [!card] Training
>> [[regularisation-training|Regularisation & Training]]
>
>> [!card] Time Series
>> [[../ml-algorithms/time-series|Time Series Forecasting]]
