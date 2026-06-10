---
title: Neural Networks
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Neural Networks
  - MLP
  - Multi-Layer Perceptron
  - Activation Functions
  - Backpropagation
  - Weight Initialization
  - Forward Propagation
  - Universal Approximation Theorem
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NeuralNetworks
  - Backpropagation
banner: https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The brain is a monstrous, beautiful mess."
> <cite>— Jeff Hawkins</cite>

---

<span class="at-kicker">Foundations · Deep Learning</span>

# Neural Networks

<p class="at-lead">
A neural network is a computational model inspired by biological neurons — layers of interconnected nodes that transform inputs through weighted connections and non-linear activation functions. A Multi-Layer Perceptron with even a single hidden layer can approximate any continuous function (the Universal Approximation Theorem), but the real power of depth lies in learning compositional representations where each layer builds on the abstractions of the layer below.
</p>

<span class="at-stat">perceptron</span> → <span class="at-stat">MLP</span> → <span class="at-stat">backpropagation</span> &nbsp;·&nbsp; <span class="at-mark">neural networks learn by adjusting weights to minimise loss via the chain rule</span>

<span class="at-kicker">How It Works</span>

## Overview

Neural networks learn by adjusting connection weights to minimise the difference between predicted and actual outputs. This adjustment happens via **backpropagation** — an efficient application of the chain rule from calculus.

The progression from single neuron to modern deep network follows a clear path: the **perceptron** (1957) → **MLP** (multiple layers, breaks linearity) → **deep networks** (many layers, hierarchical features) → **specialised architectures** (CNN, RNN, Transformer).

<span class="at-kicker">Core Building Blocks</span>

## From perceptron to MLP

### The perceptron (1957)

The simplest neural unit: a weighted sum of inputs passed through a step function.

$$\hat{y} = \sigma\left(\sum_{i=1}^n w_i x_i + b\right)$$

The perceptron update rule adjusts each weight proportionally to the prediction error: $w_i \leftarrow w_i + \alpha \cdot (y - \hat{y}) \cdot x_i$. Given a linearly separable dataset (e.g., the AND gate), it converges to a correct solution in a finite number of steps.

> [!example] AND gate learned by a perceptron
> Starting with zero weights, after a few training passes on the four input combinations `[0,0], [0,1], [1,0], [1,1]` with target labels `0, 0, 0, 1`, the perceptron correctly outputs `1` only when both inputs are `1`. The decision boundary is a straight line dividing the input plane.

> [!warning] Limitation
> A single perceptron can only learn **linearly separable** functions. It cannot learn XOR — this limitation motivated multi-layer networks.

### Multi-Layer Perceptron (MLP)

An MLP adds one or more **hidden layers** between the input and output, each applying a learned linear transformation followed by a non-linear activation. This breaks the linearity constraint and allows the network to carve out arbitrarily complex decision boundaries.

> [!grid|cols3]
>
>> [!card|section]
>> ###### LAYER 1
>> ### *Input* Layer
>> Receives raw features — pixel values, embeddings, or tabular features. No transformation; just passes data into the network. Dimension equals the number of input features.
>
>> [!card|section]
>> ###### LAYER 2
>> ### *Hidden* Layer(s)
>> Learns intermediate representations. Each neuron applies a linear transformation followed by a non-linear activation. Multiple hidden layers enable hierarchical feature learning.
>
>> [!card|section]
>> ###### LAYER 3
>> ### *Output* Layer
>> Produces predictions. Uses softmax for multi-class, sigmoid for binary, or linear for regression. No activation is applied inside — the loss function handles the final transformation.

> [!example] MLP structure in PyTorch
> A three-layer MLP for 10-class classification can be expressed concisely:
> ```python
> class MLP(nn.Module):
>     def __init__(self, input_size, hidden_size, num_classes):
>         super().__init__()
>         self.net = nn.Sequential(
>             nn.Linear(input_size, hidden_size), nn.ReLU(),
>             nn.Linear(hidden_size, hidden_size), nn.ReLU(),
>             nn.Linear(hidden_size, num_classes)
>         )
>     def forward(self, x): return self.net(x)
> ```
> Each `nn.Linear` layer learns a weight matrix $W$ and bias $b$; `nn.ReLU` introduces non-linearity. The final layer has no activation — `CrossEntropyLoss` applies softmax internally.

> [!tip] Training step
> Each iteration: (1) forward pass to compute loss, (2) zero the gradient buffer, (3) backward pass to compute gradients, (4) optimiser step to update weights.
> ```python
> loss = criterion(model(X), y)
> optimizer.zero_grad(); loss.backward(); optimizer.step()
> ```

<span class="at-kicker">Non-linearity</span>

## Activation functions

Activation functions introduce **non-linearity**, allowing the network to learn complex patterns. Without them, any stack of linear layers collapses to a single linear transformation.

| Function | Formula | Range | Pros | Cons |
| --- | --- | --- | --- | --- |
| **Sigmoid** | $\sigma(x) = \frac{1}{1+e^{-x}}$ | (0, 1) | Smooth gradient; probabilistic output | Vanishing gradient; not zero-centred |
| **Tanh** | $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$ | (-1, 1) | Zero-centred; stronger gradients than sigmoid | Still suffers vanishing gradient |
| **ReLU** | $\max(0, x)$ | [0, ∞) | Fast; no vanishing gradient for x > 0 | "Dying ReLU" — neurons can permanently deactivate |
| **Leaky ReLU** | $\max(\alpha x, x)$ | (-∞, ∞) | Fixes dying ReLU | $\alpha$ is a hyperparameter |
| **ELU** | $x$ if $x>0$ else $\alpha(e^x - 1)$ | (-α, ∞) | Smooth negative region; robust to noise | Slower than ReLU |
| **Softmax** | $\frac{e^{z_j}}{\sum_k e^{z_k}}$ | (0, 1) | Outputs valid probability distribution | Only for output layer |
| **Swish** | $x \cdot \sigma(x)$ | (-∞, ∞) | Smooth; often outperforms ReLU in deep nets | Slightly more expensive |

> [!grid|cols3]
>
>> [!card|section]
>> ###### SATURATING
>> ### *Sigmoid* & Tanh
>> Both saturate (flat gradients) outside a small central region. Sigmoid is non-zero-centred; tanh is zero-centred and generally preferred for hidden layers. Both suffer vanishing gradients in very deep networks.
>
>> [!card|section]
>> ###### DEFAULT CHOICE
>> ### *ReLU* Family
>> ReLU is strictly linear for positive inputs — no saturation. Leaky ReLU and ELU introduce a small slope or smooth curve for negatives to keep gradients alive. **He initialisation** pairs with ReLU.
>
>> [!card|section]
>> ###### ADVANCED
>> ### *Swish* & GELU
>> Non-monotonic activations with slight dips near zero. Often outperform ReLU in very deep networks. GELU (Gaussian Error Linear Unit) is the default in modern transformers (BERT, GPT).

> [!warning] Sigmoid vs. Softmax
> Use **sigmoid** when each class is independent (multi-label: a photo can contain both "cat" and "dog"). Use **softmax** when classes are mutually exclusive (single-label: the photo is either a cat OR a dog).

<span class="at-kicker">Learning Algorithm</span>

## Backpropagation

Backpropagation computes gradients of the loss with respect to each weight by applying the **chain rule** backward through the network.

### Walkthrough: a simple 2-layer network

Given:
- Input: $x$
- Hidden: $h = \text{ReLU}(W_1 x + b_1)$
- Output: $\hat{y} = \text{softmax}(W_2 h + b_2)$
- Loss: $L = -\sum y \ln(\hat{y})$

**Step 1 — Forward pass:** compute pre-activations $z_1 = W_1 x + b_1$, apply ReLU to get $h$, compute $z_2 = W_2 h + b_2$, then softmax and cross-entropy loss.

**Step 2 — Backward pass (pseudo-code):**
```
dL/dz2 = y_hat - y                    # derivative of softmax + cross-entropy
dL/dW2 = dL/dz2 @ h.T                # chain rule
dL/db2 = sum(dL/dz2, axis=0)

dL/dh  = W2.T @ dL/dz2
dL/dz1 = dL/dh * relu'(z1)           # element-wise multiply
dL/dW1 = dL/dz1 @ x.T
dL/db1 = sum(dL/dz1, axis=0)
```

**Step 3 — Weight update:** $W \leftarrow W - \alpha \cdot \frac{\partial L}{\partial W}$ for each parameter.

> [!info] Efficiency of backprop
> Backpropagation reuses intermediate results from the forward pass, making gradient computation for all layers $O(\text{network size})$ — the same complexity as a single forward pass. PyTorch's `loss.backward()` does all of this automatically via its autograd engine.

> [!note] Forward vs. backward pass in PyTorch
> During the forward pass, PyTorch builds a computation graph. `loss.backward()` traverses this graph in reverse, accumulating gradients into `.grad` attributes. Calling `optimizer.zero_grad()` before each step clears stale gradients from the previous iteration — forgetting this is a common bug.

<span class="at-kicker">Initialisation Strategy</span>

## Weight initialisation

Poor initialisation can cause vanishing or exploding gradients before training even begins.

| Initialisation | When to use | Formula |
| --- | --- | --- |
| **Xavier / Glorot** | Tanh, sigmoid, softmax | $W \sim U\left[-\sqrt{\frac{6}{n_{in}+n_{out}}}, \sqrt{\frac{6}{n_{in}+n_{out}}}\right]$ |
| **He** | ReLU, Leaky ReLU | $W \sim N\left(0, \sqrt{\frac{2}{n_{in}}}\right)$ |
| **Uniform** | General | $W \sim U[-a, a]$ |
| **Orthogonal** | RNNs, deep nets | Initialise with orthogonal matrices |

```python
nn.init.xavier_uniform_(layer.weight)                              # tanh/sigmoid
nn.init.kaiming_normal_(layer.weight, nonlinearity='relu')         # ReLU family
nn.init.orthogonal_(layer.weight)                                  # RNN/LSTM
```

> [!tip] Rule of thumb
> - Use **Xavier** for symmetric activations (tanh, sigmoid).
> - Use **He** for ReLU-family activations.
> - Initialise **biases to zero** (or small positive values for ReLU to avoid dying neurons).

<span class="at-kicker">Architecture Evolution</span>

## Common architectures by depth

| Architecture | Year | Depth | Innovation |
| --- | --- | --- | --- |
| **LeNet** | 1998 | 5 layers | First successful CNN (handwritten digits) |
| **AlexNet** | 2012 | 8 layers | ReLU + dropout + GPU training; won ImageNet |
| **VGGNet** | 2014 | 16–19 layers | Deep, uniform 3×3 convolutions |
| **ResNet** | 2015 | 50–152 layers | Skip connections enable 100+ layer training |
| **Transformer** | 2017 | 6–96+ layers | Self-attention replaces recurrence |
| **GPT-3** | 2020 | 96 layers | 175B parameters; few-shot learning |

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is the Universal Approximation Theorem, and why does it not mean one hidden layer is always sufficient?
2. Why does depth matter — what can a deep network learn that a shallow one cannot?
3. What is the vanishing gradient problem, and how does ReLU help address it?
4. Explain backpropagation step by step using the chain rule.
5. Why is Xavier initialisation better than random uniform initialisation for tanh activations?
6. What is the difference between sigmoid and softmax, and when should each be used?
7. Why must you call `optimizer.zero_grad()` before `loss.backward()`?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Deep Learning
>> [[deep-learning|Deep Learning]], [[optimisation-algorithms|Optimisation Algorithms]], [[regularisation-training|Regularisation & Training]]
>
>> [!card] Architectures
>> [[cnn|CNN]], [[rnn-lstm-gru|RNN, LSTM & GRU]], [[transformers|Transformers]]
>
>> [!card] Fundamentals
>> [[../ml-fundamentals/machine-learning-fundamentals|ML Fundamentals]], [[../ml-algorithms/linear-models|Linear Models]]
>
>> [!card] Statistics
>> [[../statistics/mathematical-foundations-for-ml|Math Foundations]]
