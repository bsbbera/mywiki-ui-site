---
title: Deep Learning
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Deep Learning
  - Neural Networks
  - Deep Neural Networks
  - DNN
  - Representation Learning
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NeuralNetworks
  - DataScience
banner: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Deep learning is an algorithm which has no theoretical limitations of what it can learn; the more data you give and the more computational time you provide, the better it gets."
> <cite>— Geoffrey Hinton</cite>

---

<span class="at-kicker">Sub-field · Machine Learning</span>

# Deep Learning

<p class="at-lead">
Deep Learning is a sub-field of machine learning that uses multi-layered neural networks to automatically learn hierarchical representations from raw data — discovering features directly from pixels, waveforms, text, and tabular data through successive layers of abstraction. The breakthrough enabling modern deep learning was the combination of large datasets, GPU-accelerated computation, and key architectural innovations like ReLU activations, batch normalisation, and residual connections.
</p>

<span class="at-stat">hierarchical representations</span> &nbsp;·&nbsp; <span class="at-stat">GPU-accelerated</span> training &nbsp;·&nbsp; <span class="at-stat">Universal Approximation</span> theorem &nbsp;·&nbsp; <span class="at-mark">learns features automatically from raw data — no hand-engineering required</span>

<span class="at-kicker">How It Works</span>

## Overview

**Deep Learning** uses **multi-layered neural networks** (DNNs) to learn hierarchical representations from raw data. Unlike classical ML, which requires hand-crafted features, deep learning discovers features directly from data through successive layers of abstraction.

A neural network with a single hidden layer can approximate any continuous function — the **Universal Approximation Theorem**. Deep networks — with many hidden layers — learn *compositional* representations that generalise far better on complex, high-dimensional data.

The enabling breakthroughs were three-fold: **large datasets** (ImageNet, Common Crawl), **GPU computation** (parallel matrix operations), and **architectural innovations** (ReLU, batch norm, skip connections) that allowed training dozens or hundreds of layers reliably.

> [!info] Key insight
> A neural network with a single hidden layer can approximate any continuous function (Universal Approximation Theorem). Deep networks learn *compositional* representations — each layer builds abstractions on the layer below — that generalise far better on complex, high-dimensional data.

<span class="at-kicker">Classical ML vs Deep Learning</span>

## What makes deep learning "deep"?

| Classical ML | Deep Learning |
| --- | --- |
| Hand-engineered features | Learns features automatically |
| Shallow models (1–2 layers) | Many hidden layers (10–1000+) |
| Works well on small, structured data | Excels on large, unstructured data (images, text, audio) |
| Often requires domain expertise | Needs large compute and data |

> [!example] Real-world impact
> - **ImageNet 2012**: AlexNet (8 layers) crushed traditional computer vision by learning hierarchical filters directly from pixels.
> - **GPT-4**: A transformer with ~1.8 trillion parameters trained on internet-scale text, demonstrating emergent reasoning capabilities.
> - **AlphaFold**: Deep learning predicts protein 3D structures from amino acid sequences — a 50-year-old biology problem solved.

<span class="at-kicker">Sub-domain Map</span>

## Core concepts in this sub-domain

> [!grid|cols3]
>
>> [!card|section]
>> ###### FOUNDATIONS
>> ### *Neural* Networks
>> The building block of all deep learning — perceptron, MLP, activation functions, backpropagation, and weight initialisation. [[neural-networks|Neural Networks →]]
>
>> [!card|section]
>> ###### OPTIMISATION
>> ### *Optimisation* Algorithms
>> How networks learn — SGD, Momentum, RMSprop, Adam, AdamW, and learning rate schedulers. [[optimisation-algorithms|Optimisation Algorithms →]]
>
>> [!card|section]
>> ###### COMPUTER VISION
>> ### *Convolutional* Networks
>> Spatial feature learning — convolution, pooling, ResNet, and modern vision architectures. [[cnn|CNN →]]
>
>> [!card|section]
>> ###### SEQUENCES
>> ### *Recurrent* Networks
>> Sequential modelling — RNN, LSTM, GRU, vanishing gradients, bidirectional RNNs. [[rnn-lstm-gru|RNN, LSTM & GRU →]]
>
>> [!card|section]
>> ###### TRAINING
>> ### *Regularisation* & Training
>> Generalisation techniques — dropout, batch normalisation, weight decay, data augmentation. [[regularisation-training|Regularisation & Training →]]
>
>> [!card|section]
>> ###### REUSE
>> ### *Transfer* Learning
>> Leveraging pre-trained knowledge — fine-tuning, feature extraction, domain adaptation. [[transfer-learning|Transfer Learning →]]
>
>> [!card|section]
>> ###### ATTENTION
>> ### *Transformers*
>> The dominant architecture — self-attention, multi-head attention, BERT, GPT, positional encoding. [[transformers|Transformers →]]
>
>> [!card|section]
>> ###### GENERATIVE
>> ### *Autoencoders* & GANs
>> Generative modelling — denoising AE, VAE, GAN training dynamics. [[autoencoders-gans|Autoencoders & GANs →]]
>
>> [!card|section]
>> ###### NLP MODEL
>> ### *BERT*
>> Bidirectional Encoder Representations from Transformers — pre-training, fine-tuning, variants. [[bert|BERT →]]

<span class="at-kicker">Network Anatomy</span>

## Anatomy of a deep network

A minimal but complete deep network in PyTorch illustrates the four essential components of any DNN: linear layers, non-linear activations, regularisation, and structured initialisation.

> [!example] Simple DNN anatomy
> ```python
> class SimpleDNN(nn.Module):
>     def __init__(self, input_dim, hidden_dim, num_classes):
>         super().__init__()
>         self.net = nn.Sequential(
>             nn.Linear(input_dim, hidden_dim), nn.ReLU(), nn.Dropout(0.3),
>             nn.Linear(hidden_dim, hidden_dim), nn.ReLU(),
>             nn.Linear(hidden_dim, num_classes)
>         )
>     def forward(self, x): return self.net(x)
> ```
> Initialise all `Linear` layers with Xavier uniform weights:
> ```python
> model.apply(lambda m: nn.init.xavier_uniform_(m.weight)
>             if isinstance(m, nn.Linear) else None)
> ```
> For `input_dim=784, hidden_dim=256, num_classes=10`, this model has ~**203,530 parameters** — tiny but sufficient for MNIST.

<span class="at-kicker">Standard Workflow</span>

## The deep learning workflow

> [!grid|cols2]
>
>> [!card|section]
>> ###### STEP 1
>> ### Data *Preparation*
>> Load, split, and augment your data. Apply normalisation (e.g., ImageNet mean/std). Use `DataLoader` with `shuffle=True` for training. Data augmentation (random crops, flips, colour jitter) is one of the highest-ROI investments for preventing overfitting.
>
>> [!card|section]
>> ###### STEP 2
>> ### Model + *Optimiser*
>> Choose an architecture appropriate to the data modality (CNN for images, Transformer for text, MLP for tabular). Select an optimiser — **AdamW** with cosine LR annealing is a strong default. Set weight decay (`1e-4` to `0.01`).
>
>> [!card|section]
>> ###### STEP 3
>> ### *Training* Loop
>> Each epoch: set `model.train()`, iterate batches, zero gradients, forward pass, compute loss, `loss.backward()`, clip gradients if needed, `optimizer.step()`, `scheduler.step()`. Track running loss and log to TensorBoard or W&B.
>
>> [!card|section]
>> ###### STEP 4
>> ### Evaluation & *Iteration*
>> Set `model.eval()` and use `torch.no_grad()`. Monitor train vs. validation loss curves — diverging curves indicate overfitting; both curves high and flat indicates underfitting. Adjust regularisation or capacity accordingly.

> [!tip] Diagnosing training
> Plot training and validation loss together over epochs. A good training run shows both curves decreasing together, with validation slightly above training. The gap between the two curves is the **generalisation gap** — reduce it with dropout, weight decay, data augmentation, or early stopping.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 4 STAGES · DEEP LEARNING WORKFLOW
>> # From *raw data* to *deployed model*.
>> Build, train, evaluate, and iterate deep networks with a systematic workflow that catches overfitting early and converges reliably.
>
>> [!card|step]
>> ###### Step 01
>> ### *Prepare* your data.
>> Split into train/val/test. Apply normalisation and data augmentation. Wrap in `DataLoader` with appropriate batch size. Ensure no data leakage across splits.
>
>> [!card|step]
>> ###### Step 02
>> ### *Design* your model.
>> Select architecture for your data modality. Choose loss function matching your task. Initialise weights with Xavier or He initialisation. Configure AdamW optimiser.
>
>> [!card|step]
>> ###### Step 03
>> ### *Train* and monitor.
>> Run training loop with gradient clipping. Log metrics to TensorBoard. Save checkpoints at best validation loss. Use LR scheduling for smooth convergence.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is the Universal Approximation Theorem, and why does depth matter beyond it?
2. Why does deep learning require more data and compute than classical ML?
3. What is the difference between a parameter and a hyperparameter in a neural network?
4. When would you prefer a CNN over an MLP for image data?
5. Why are transformers replacing RNNs for sequence tasks?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Algorithms
>> [[../ml-algorithms/ml-algorithms|ML Algorithms]], [[../ml-algorithms/linear-models|Linear Models]], [[../ml-algorithms/decision-trees|Decision Trees]]
>
>> [!card] Fundamentals
>> [[../ml-fundamentals/machine-learning-fundamentals|ML Fundamentals]], [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
>
>> [!card] NLP
>> [[../nlp/nlp|NLP]], [[../nlp/embeddings|Embeddings]], [[../nlp/bert|BERT]]
>
>> [!card] MLOps
>> [[../mlops/mlops|MLOps]], [[../mlops/model-deployment|Model Deployment]]
