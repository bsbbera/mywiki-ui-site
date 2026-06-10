---
title: Regularisation & Training
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Regularisation
  - Dropout
  - Batch Normalization
  - Data Augmentation
  - Weight Decay
  - Early Stopping
  - L2 Regularization
  - Overfitting
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - Regularisation
  - Training
  - Overfitting
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The art of doing mathematics consists in finding that special case which contains all the germs of generality."
> <cite>— David Hilbert</cite>

---

<span class="at-kicker">Generalisation · Deep Learning</span>

# Regularisation & Training

<p class="at-lead">
Regularisation is any technique that reduces a model's generalisation error without necessarily reducing training error — forcing powerful deep networks to learn patterns rather than memorise training examples. Combined with proper training procedures (data augmentation, normalisation, early stopping), regularisation is the key to building models that perform well on unseen data, not just the training set.
</p>

<span class="at-stat">dropout</span> &nbsp;·&nbsp; <span class="at-stat">batch norm</span> &nbsp;·&nbsp; <span class="at-stat">weight decay</span> &nbsp;·&nbsp; <span class="at-mark">deep networks are powerful memorisation machines — regularisation prevents memorisation, forcing generalisation</span>

<span class="at-kicker">The Core Problem</span>

## Overview

A deep network with millions of parameters can memorise every training example (achieving ~0% training error) yet perform terribly on test data. Regularisation adds constraints, noise, or penalties that prevent this and push the model toward simpler, more transferable solutions.

The **bias-variance tradeoff** sits at the heart of this problem:
- **High variance** (overfitting) — model memorises training data; train loss ≪ val loss.
- **High bias** (underfitting) — model is too simple; both train and val loss are high.
- **Goal** — minimise the generalisation gap while keeping both losses low.

> [!grid|cols3]
>
>> [!card|section]
>> ###### TECHNIQUE 1
>> ### *Dropout* — Random Neuron Masking
>> Randomly zero out neurons during training, forcing every neuron to learn independently. Prevents co-adaptation. Acts as ensemble training of exponentially many sub-networks. No cost at inference.
>
>> [!card|section]
>> ###### TECHNIQUE 2
>> ### *Batch Normalisation*
>> Normalise layer inputs to zero mean and unit variance across the mini-batch. Stabilises training, allows higher learning rates, reduces sensitivity to initialisation. Learned scale/shift parameters restore expressiveness.
>
>> [!card|section]
>> ###### TECHNIQUE 3
>> ### *Weight Decay* (L2)
>> Penalise large weights by adding $\lambda \|w\|^2$ to the loss. Encourages smoother functions, reduces overfitting. Use **AdamW** for proper decoupled weight decay with Adam-based optimisers.
>
>> [!card|section]
>> ###### TECHNIQUE 4
>> ### *Early Stopping*
>> Monitor validation loss and stop training when it stops improving. Restore best checkpoint. Prevents the later epochs where training loss keeps dropping but validation loss starts rising.
>
>> [!card|section]
>> ###### TECHNIQUE 5
>> ### *Data Augmentation*
>> Artificially expand training data with random, realistic transformations. The model never sees the exact same sample twice — strongly prevents memorisation. Highest-ROI regularisation for computer vision.
>
>> [!card|section]
>> ###### TECHNIQUE 6
>> ### *Advanced Methods*
>> Label smoothing, Mixup, CutMix, stochastic depth, gradient clipping, layer normalisation. Each targets specific failure modes or architecture types with tailored regularisation.

<span class="at-kicker">Dropout</span>

## 1. Dropout

During training, randomly **set a fraction of neurons to zero** at each forward pass. This prevents co-adaptation — neurons learning to depend too heavily on specific other neurons.

At each training step:
1. Sample a binary mask $r \sim \text{Bernoulli}(p)$ for each neuron.
2. Multiply activations by the mask: $\tilde{h} = r \odot h$.
3. Scale remaining activations by $\frac{1}{1-p}$ (inverted dropout) so the expected value is preserved.

At test time: **no dropout**; use all neurons with full weights.

> [!example] Dropout in a network
> With `p=0.5` applied to a hidden layer of 256 neurons, ~128 neurons are zeroed at each step. Two forward passes with the same input produce different outputs during training (random masks differ), but identical outputs at inference (no dropout applied). In PyTorch: `model.train()` activates dropout; `model.eval()` deactivates it.

```python
self.dropout = nn.Dropout(p=0.5)   # zero 50% of neurons during training
x = self.dropout(torch.relu(self.fc1(x)))
```

> [!tip] Typical dropout rates
> - Input layer: 0.2–0.3
> - Hidden layers: 0.3–0.5
> - CNNs: often lower (0.2–0.3) due to spatial redundancy
> - Too high (>0.7): underfitting; Too low (<0.2): insufficient regularisation

> [!warning] Co-adaptation
> Without dropout, some neurons become "lazy" — they learn to rely on other, more active neurons. Over time, only a subset of the network does real work. Dropout forces every neuron to be independently useful.

<span class="at-kicker">Batch Normalisation</span>

## 2. Batch Normalisation

Normalise layer inputs to have **zero mean and unit variance** across the mini-batch. This stabilises training and allows higher learning rates.

$$\hat{x} = \frac{x - \mu_B}{\sqrt{\sigma_B^2 + \epsilon}}$$
$$y = \gamma \hat{x} + \beta$$

Where $\gamma$ and $\beta$ are learned per-channel scale and shift parameters that allow the network to undo the normalisation if needed.

| Effect | Explanation |
| --- | --- |
| **Reduces internal covariate shift** | Each layer sees stable distributions |
| **Higher learning rates** | Less risk of exploding/vanishing activations |
| **Regularisation** | Normalisation noise acts like mild dropout |
| **Less sensitive to initialisation** | Network trains reliably from wider initial weight ranges |

> [!warning] Placement rule
> Apply batch norm **before** the activation function (`conv → bn → relu`), not after. At test time, batch norm uses running statistics (accumulated during training) rather than the current batch's statistics — so it behaves identically in `model.eval()` mode.

<span class="at-kicker">Weight Decay</span>

## 3. Weight decay (L2 regularisation)

Penalise large weights by adding $\frac{\lambda}{2} \|w\|^2$ to the loss:

$$L_{\text{total}} = L_{\text{data}} + \frac{\lambda}{2} \sum w_i^2$$

```python
# L2 via weight_decay in the optimiser
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, weight_decay=1e-4)

# AdamW: decoupled weight decay (recommended for Adam-based training)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=0.01)
```

> [!warning] L2 in Adam vs. AdamW
> Standard Adam incorporates L2 through the gradient, where it gets divided by the adaptive rate denominator — weakening its effect. **AdamW** applies weight decay directly to the parameters, independently of the gradient. Always use AdamW when you want proper regularisation with Adam.

<span class="at-kicker">Early Stopping</span>

## 4. Early stopping

Monitor validation loss during training. When it stops improving for $N$ consecutive epochs (patience), stop training and restore the best weights.

> [!example] Early stopping logic
> Track the best validation loss seen so far. At each epoch: if `val_loss < best_loss - min_delta`, update best and reset counter; otherwise increment counter. When `counter >= patience`, restore the checkpoint and halt. This prevents the model from overfitting in the later epochs while keeping the weights from the generalisation sweet spot.

> [!tip] Patience rule of thumb
> - Small datasets: patience = 10–20
> - Large datasets: patience = 5–10
> - With LR scheduling: patience = scheduler patience / 2

<span class="at-kicker">Data Augmentation</span>

## 5. Data augmentation

Artificially expand the training set by applying random, realistic transformations. The model never sees the exact same image twice, which strongly prevents memorisation.

| Domain | Transformations | Library |
| --- | --- | --- |
| **Images** | Rotation, flip, crop, colour jitter, noise, cutout | `torchvision.transforms`, `albumentations` |
| **Text** | Synonym replacement, back-translation, random insertion/deletion | `nlpaug`, `textattack` |
| **Audio** | Time stretching, pitch shifting, noise injection | `audiomentations` |
| **Tabular** | SMOTE, Gaussian noise, mixup | `imbalanced-learn` |

```python
train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224, scale=(0.8, 1.0)),
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.RandomRotation(15),
    transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])
```

> [!tip] Test-time augmentation (TTA)
> At inference, apply multiple augmentations to each image and average the predictions. This often improves accuracy by 0.5–2% at the cost of extra inference time.

<span class="at-kicker">Advanced Techniques</span>

## 6. Advanced regularisation techniques

| Technique | How it works | Best for |
| --- | --- | --- |
| **Label smoothing** | Replace hard 0/1 targets with 0.1/0.9 | Prevents overconfident predictions; improves generalisation |
| **Mixup** | Linear interpolation of pairs of images and labels | Image classification; creates robust decision boundaries |
| **CutMix** | Cut and paste patches between images | More effective than Mixup for local feature learning |
| **Stochastic depth** | Randomly skip residual blocks during training | Very deep ResNets |
| **Gradient clipping** | Cap gradient norm | RNNs; prevents exploding gradients |
| **Layer normalisation** | Normalise across features (not batch) | Transformers; small batch sizes |

> [!info] Label smoothing
> Instead of a target vector with probability 1.0 on the correct class, label smoothing assigns probability $(1 - \varepsilon)$ to the correct class and $\varepsilon / (K-1)$ to all others. Prevents overconfidence and improves calibration. In PyTorch: `nn.CrossEntropyLoss(label_smoothing=0.1)`.

<span class="at-kicker">Practical Checklist</span>

## Regularisation checklist

> [!grid|cols2]
>
>> [!card|section]
>> ###### ARCHITECTURE
>> ### Network *Design* Checklist
>> ✅ Dropout in FC layers (p=0.3–0.5) · ✅ Batch normalisation after conv/linear (before activation) · ✅ Weight decay via AdamW · ✅ Xavier or He initialisation
>
>> [!card|section]
>> ###### TRAINING
>> ### Training *Process* Checklist
>> ✅ Early stopping with patience 5–20 · ✅ Data augmentation for images/text · ✅ Gradient clipping for RNNs · ✅ Monitor train vs. val loss curves every epoch

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### TRAINING STRATEGY
>> # From *overfitting* to *generalisation*.
>> Combine multiple regularisation techniques — no single method is sufficient for deep networks.
>
>> [!card|step]
>> ###### Step 01
>> ### *Detect* the problem.
>> Plot train and val loss. Diverging curves = overfitting. Both curves plateau high = underfitting. The generalisation gap tells you how much regularisation to add.
>
>> [!card|step]
>> ###### Step 02
>> ### *Apply* regularisation.
>> Add dropout to FC layers. Use AdamW for weight decay. Apply data augmentation. Add batch norm after conv layers. Start with light regularisation and increase as needed.
>
>> [!card|step]
>> ###### Step 03
>> ### *Validate* convergence.
>> Use early stopping to save the best checkpoint. Monitor validation metrics, not just loss. Use `model.eval()` and `torch.no_grad()` during validation to get accurate estimates.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is overfitting, and what are three ways to detect it during training?
2. How does dropout act as a regulariser? What happens to dropout at test time, and why?
3. Why does batch normalisation help training, and where should it be placed relative to activations?
4. What is the difference between L2 regularisation and AdamW's weight decay?
5. When would you use label smoothing, and what problem does it solve?
6. What is data augmentation, and why is it often the highest-ROI regularisation technique for vision?
7. What is the bias-variance tradeoff, and how do dropout and weight decay address it?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Deep Learning
>> [[deep-learning|Deep Learning]], [[neural-networks|Neural Networks]], [[optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Architectures
>> [[cnn|CNN]], [[transformers|Transformers]], [[rnn-lstm-gru|RNN, LSTM & GRU]]
>
>> [!card] Evaluation
>> [[../ml-fundamentals/cross-validation|Cross Validation]], [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
