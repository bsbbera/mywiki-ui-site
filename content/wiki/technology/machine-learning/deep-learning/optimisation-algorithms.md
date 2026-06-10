---
title: Optimisation Algorithms
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Optimisation Algorithms
  - SGD
  - Momentum
  - RMSprop
  - Adam
  - AdamW
  - Learning Rate Scheduler
  - Gradient Descent
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - Optimisation
  - NeuralNetworks
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The goal is to turn data into information, and information into insight."
> <cite>— Carly Fiorina</cite>

---

<span class="at-kicker">Training · Deep Learning</span>

# Optimisation Algorithms

<p class="at-lead">
Optimisation algorithms determine how neural network weights are updated during training — the choice of optimiser, learning rate, and scheduling strategy can be the difference between a model that converges in hours versus one that never converges at all. Every modern optimiser is a refinement of the core idea: follow the negative gradient, but do it more cleverly.
</p>

<span class="at-stat">SGD</span> → <span class="at-stat">Momentum</span> → <span class="at-stat">Adam</span> → <span class="at-stat">AdamW</span> &nbsp;·&nbsp; <span class="at-mark">AdamW with cosine LR annealing is the modern default for deep learning</span>

<span class="at-kicker">The Problem</span>

## The loss landscape

Deep networks have millions of parameters and highly **non-convex loss landscapes**. Plain gradient descent often oscillates, gets stuck in saddle points, or converges painfully slowly. Modern optimisers add momentum, adaptive learning rates, and regularisation to navigate these landscapes efficiently.

Imagine the loss function as a rugged terrain:

> [!grid|cols2]
>
>> [!card|section]
>> ###### TRAPS
>> ### Loss *Landscape* Hazards
>> **Local minima** — valleys that aren't the deepest. **Saddle points** — flat regions where gradients are near zero (very common in high dimensions). **Plateaus** — long flat regions that slow convergence.
>
>> [!card|section]
>> ###### CHALLENGES
>> ### *Narrow* Canyons
>> Steep in one direction, flat in another — causes oscillation in plain SGD. Momentum smooths this out. Adam adapts step sizes per dimension, effectively rescaling each direction independently.

> [!tip] Visualising the loss surface
> The **Rosenbrock function** — $(1-x)^2 + 100(y - x^2)^2$ — is a classic 2D benchmark with a narrow, parabolic valley and a global minimum at $(1, 1)$. Plotting its contours reveals exactly why plain SGD struggles: it zigzags across the canyon walls instead of following the valley floor. Momentum smooths this out; Adam adapts step sizes per dimension.

<span class="at-kicker">Core Algorithms</span>

## Optimiser progression

> [!grid|cols3]
>
>> [!card|section]
>> ###### BASELINE
>> ### *SGD* — Stochastic Gradient Descent
>> The simplest update: $\theta \leftarrow \theta - \alpha \nabla J$. Uses one sample or mini-batch per step. Noisy but fast per iteration; noise helps escape sharp minima. Strong baseline for large-batch CV training.
>
>> [!card|section]
>> ###### SMOOTHING
>> ### *Momentum* SGD
>> Accumulates a velocity vector: $v_t = \beta v_{t-1} + \nabla J$, then $\theta \leftarrow \theta - \alpha v_t$. With $\beta=0.9$, ~90% of previous direction is preserved. Smooths zigzag; accelerates in consistent directions.
>
>> [!card|section]
>> ###### ADAPTIVE
>> ### *RMSprop*
>> Divides the learning rate by a running average of recent gradient magnitudes. Large-gradient parameters get smaller effective rates; small-gradient parameters get larger ones. Crucial for RNNs with non-uniform loss surfaces.
>
>> [!card|section]
>> ###### GOLD STANDARD
>> ### *Adam* — Adaptive Moment Estimation
>> Combines momentum (first moment) with RMSprop (second moment), plus bias correction for zero-initialised moments. Most widely used optimiser in deep learning. Default choice for most tasks.
>
>> [!card|section]
>> ###### MODERN DEFAULT
>> ### *AdamW* — Decoupled Weight Decay
>> Fixes Adam's broken L2 regularisation by applying weight decay directly to parameters, not through the gradient. **Default for transformer training**. Use `AdamW` unless you have a specific reason not to.
>
>> [!card|section]
>> ###### SCHEDULING
>> ### *Learning Rate* Schedulers
>> Fixed LR is rarely optimal. Cosine annealing, warmup + decay, OneCycleLR, and ReduceLROnPlateau all improve convergence. Transformers require warmup to prevent early instability.

## 1. Stochastic Gradient Descent (SGD)

$$\theta_{t+1} = \theta_t - \alpha \nabla_\theta J(\theta_t; x^{(i)}, y^{(i)})$$

Where $\alpha$ is the learning rate. SGD uses **one sample at a time** (or a mini-batch), making it noisy but fast per iteration.

> [!example] SGD update
> Given weights $\theta = [1.0, 2.0]$ and gradients $g = [0.5, -0.3]$ with $\alpha = 0.1$:
> $$\theta \leftarrow [1.0 - 0.1 \times 0.5,\ 2.0 - 0.1 \times (-0.3)] = [0.95,\ 2.03]$$
> In PyTorch: `torch.optim.SGD(model.parameters(), lr=0.1)`

| Variant | Update frequency | Noise | Typical use |
| --- | --- | --- | --- |
| **Batch GD** | All data | None | Small datasets |
| **Mini-batch** | B batches (e.g., 32–256) | Moderate | **Standard** |
| **Stochastic** | 1 sample | High | Rarely used alone |

## 2. SGD with Momentum

Momentum accelerates SGD in the relevant direction and dampens oscillation by accumulating a velocity vector.

$$v_t = \beta v_{t-1} + (1-\beta) \nabla_\theta J(\theta_t)$$
$$\theta_{t+1} = \theta_t - \alpha v_t$$

```python
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
```

> [!info] The ball analogy
> Think of a ball rolling down a hill: momentum keeps it moving through small bumps (local minima) and accelerates in consistent directions. With $\beta = 0.9$, approximately 90% of the previous velocity is preserved at each step.

## 3. RMSprop

RMSprop adapts the learning rate **per parameter** by dividing by a running average of recent gradient magnitudes.

$$S_t = \beta S_{t-1} + (1-\beta) (\nabla J)^2$$
$$\theta_{t+1} = \theta_t - \alpha \frac{\nabla J}{\sqrt{S_t} + \epsilon}$$

```python
optimizer = torch.optim.RMSprop(model.parameters(), lr=0.001, alpha=0.9)
```

## 4. Adam — Adaptive Moment Estimation

Adam combines **momentum** (first moment) with **RMSprop-style adaptive rates** (second moment), plus bias correction.

$$m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t \quad \text{(momentum)}$$
$$v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2 \quad \text{(adaptive rate)}$$
$$\hat{m}_t = \frac{m_t}{1-\beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1-\beta_2^t} \quad \text{(bias correction)}$$
$$\theta_{t+1} = \theta_t - \alpha \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

```python
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3, betas=(0.9, 0.999))
```

> [!info] Default Adam hyperparameters
> - $\beta_1 = 0.9$ (momentum decay)
> - $\beta_2 = 0.999$ (adaptive rate decay)
> - $\epsilon = 10^{-8}$ (numerical stability)
> - $\alpha = 0.001$ (learning rate)

> [!note] Why bias correction?
> At step $t=1$, both $m_t$ and $v_t$ are heavily biased toward zero because they were initialised at zero. Dividing by $(1 - \beta^t)$ corrects this warm-up bias and makes early steps correctly sized.

## 5. AdamW — decoupled weight decay

Standard Adam applies L2 regularisation inside the adaptive rate denominator, which weakens its effect. **AdamW** decouples weight decay from the gradient update:

$$\theta_{t+1} = \theta_t - \alpha \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon} - \alpha \lambda \theta_t$$

```python
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=0.01)
```

> [!tip] Modern best practice
> **AdamW with weight decay** has largely replaced vanilla Adam as the default for transformer training. Use it unless you have a specific reason not to.

<span class="at-kicker">Learning Rate Scheduling</span>

## 6. Learning rate scheduling

A fixed learning rate is rarely optimal. Schedulers adjust $\alpha$ during training.

| Scheduler | Mechanism | When to use |
| --- | --- | --- |
| **Step decay** | Multiply by $\gamma$ every $N$ epochs | Simple, reliable baselines |
| **Exponential decay** | $\alpha = \alpha_0 \cdot e^{-kt}$ | Smooth, continuous reduction |
| **Cosine annealing** | $\alpha$ follows cosine curve to near-zero | Modern favourite; warm restarts possible |
| **ReduceLROnPlateau** | Reduce when metric stops improving | When convergence stalls |
| **One-cycle** | Ramp up then down in one cycle | Fast convergence; super-convergence |
| **Warmup + decay** | Small LR initially, then decay | Transformers; prevents early instability |

```python
from torch.optim.lr_scheduler import StepLR, CosineAnnealingLR, ReduceLROnPlateau

scheduler = StepLR(optimizer, step_size=10, gamma=0.5)          # halve every 10 epochs
scheduler = CosineAnnealingLR(optimizer, T_max=100, eta_min=1e-6)
scheduler = ReduceLROnPlateau(optimizer, mode='min', patience=5)
```

> [!tip] Scheduler usage pattern
> Most schedulers call `scheduler.step()` once per epoch (after the training loop). `OneCycleLR` is the exception — it steps once per batch. `ReduceLROnPlateau` requires the metric value: `scheduler.step(val_loss)`.

<span class="at-kicker">Comparison Guide</span>

## Optimiser comparison

| Optimiser | Adaptivity | Momentum | Weight decay | Best for |
| --- | --- | --- | --- | --- |
| **SGD** | No | Optional | L2 | Large batch training; final fine-tuning |
| **Momentum** | No | Yes | L2 | General deep learning |
| **RMSprop** | Per-param | No | L2 | RNNs; non-stationary objectives |
| **Adam** | Per-param | Yes | Coupled L2 | General; NLP; fast convergence |
| **AdamW** | Per-param | Yes | **Decoupled** | **Transformers; recommended default** |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · OPTIMISER SETUP
>> # From *random weights* to *converged model*.
>> Choose the right optimiser, learning rate, and scheduler for reliable, efficient training.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* your optimiser.
>> Start with **AdamW** (`lr=1e-3`, `weight_decay=0.01`) for transformers and general use. Use **SGD with momentum** (`lr=0.01`, `momentum=0.9`) for large-batch computer vision training.
>
>> [!card|step]
>> ###### Step 02
>> ### *Set* learning rate.
>> Use a learning rate finder or start with `1e-3` for Adam/AdamW. For fine-tuning pre-trained models, use `1e-5` to `5e-5`. Add linear warmup for transformers (first 5–10% of training steps).
>
>> [!card|step]
>> ###### Step 03
>> ### *Schedule* the decay.
>> Apply cosine annealing (`CosineAnnealingLR`) as a default. Use `ReduceLROnPlateau` when you don't know the total number of epochs. Always monitor both train and validation loss.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is the difference between batch gradient descent, mini-batch gradient descent, and stochastic gradient descent?
2. Why does momentum help SGD navigate narrow loss landscape canyons?
3. How does Adam combine momentum and RMSprop? What does bias correction do?
4. Why does AdamW fix a problem in standard Adam's L2 regularisation?
5. What is learning rate warmup, and why is it important for transformer training?
6. What is the cosine annealing scheduler, and why is it preferred over step decay?
7. How would you choose between SGD with momentum and Adam for a computer vision task?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Deep Learning
>> [[deep-learning|Deep Learning]], [[neural-networks|Neural Networks]], [[regularisation-training|Regularisation & Training]]
>
>> [!card] Architectures
>> [[transformers|Transformers]], [[rnn-lstm-gru|RNN, LSTM & GRU]], [[cnn|CNN]]
>
>> [!card] Mathematics
>> [[../statistics/mathematical-foundations-for-ml|Math Foundations]], [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
