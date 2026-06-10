---
title: Autoencoders & GANs
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Autoencoders
  - GANs
  - VAE
  - Generative Adversarial Networks
  - Denoising Autoencoder
  - Variational Autoencoder
  - Generator
  - Discriminator
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - GenerativeModels
  - Autoencoders
  - GANs
banner: https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The question of whether a machine can think is about as relevant as the question of whether a submarine can swim."
> <cite>— Edsger Dijkstra</cite>

---

<span class="at-kicker">Generative Models · Deep Learning</span>

# Autoencoders & GANs

<p class="at-lead">
Generative models learn the underlying distribution of data and can produce new, realistic samples — powering image synthesis, drug discovery, data augmentation, and the latent spaces behind modern AI art tools. Autoencoders learn efficient compressed representations for denoising, anomaly detection, and pre-training; GANs pit two networks against each other in an adversarial game that produces remarkably realistic outputs; VAEs bridge both worlds with a smooth, probabilistic latent space.
</p>

<span class="at-stat">encoder-decoder</span> &nbsp;·&nbsp; <span class="at-stat">latent space</span> &nbsp;·&nbsp; <span class="at-stat">adversarial training</span> &nbsp;·&nbsp; <span class="at-mark">generative models do more than classify — they create</span>

<span class="at-kicker">Generative Model Family</span>

## Overview

> [!grid|cols3]
>
>> [!card|section]
>> ###### COMPRESSION
>> ### *Autoencoder*
>> Learns to compress data into a low-dimensional latent space and reconstruct it. The bottleneck forces learning of meaningful representations. Used for denoising, anomaly detection, and pre-training. Deterministic latent space.
>
>> [!card|section]
>> ###### PROBABILISTIC
>> ### *VAE* — Variational Autoencoder
>> Learns a **probabilistic** latent space — encodes to a distribution $\mathcal{N}(\mu, \sigma^2)$ rather than a point. Smooth, structured latent space enables interpolation and controllable generation. Trained with reconstruction loss + KL divergence.
>
>> [!card|section]
>> ###### ADVERSARIAL
>> ### *GAN* — Generative Adversarial Network
>> Pits a generator (creates fakes) against a discriminator (detects fakes) in a minimax game. Produces the sharpest, highest-fidelity synthetic images. Training is notoriously unstable but powerful when it works.

<span class="at-kicker">Autoencoders</span>

## Autoencoders

An autoencoder learns to compress data into a low-dimensional **latent space** and then reconstruct it.

```
Input (784-dim)          Latent (32-dim)         Reconstructed (784-dim)
     │                        │                        │
     ▼                        ▼                        ▼
┌─────────┐              ┌─────────┐              ┌─────────┐
│ Encoder │──────────────→│  Code   │──────────────→│ Decoder │
│ (784→512│              │ (bottl- │              │ (32→784)│
│ →256→32)│              │ eneck)  │              │         │
└─────────┘              └─────────┘              └─────────┘
```

> [!info] The bottleneck
> The **bottleneck** forces the network to learn a compressed, meaningful representation. If the bottleneck is too wide, the network copies inputs; too narrow, and it loses too much information. The bottleneck size is a hyperparameter that trades off compression vs. reconstruction quality.

> [!example] Autoencoder architecture
> A symmetric encoder-decoder for 784-dim inputs (e.g., flattened MNIST images) with a 32-dim bottleneck:
> ```python
> self.encoder = nn.Sequential(
>     nn.Linear(784, 512), nn.ReLU(),
>     nn.Linear(512, 256), nn.ReLU(),
>     nn.Linear(256, 32)
> )
> self.decoder = nn.Sequential(
>     nn.Linear(32, 256),  nn.ReLU(),
>     nn.Linear(256, 512), nn.ReLU(),
>     nn.Linear(512, 784), nn.Sigmoid()   # pixel values in [0, 1]
> )
> ```
> Trained with MSE loss: `loss = F.mse_loss(reconstructed, original)`. The 32-dim bottleneck gives a 24.5:1 compression ratio.

### Denoising autoencoder

Train the autoencoder to reconstruct **clean** images from **noisy** inputs:

```python
noise_factor = 0.3
x_noisy = torch.clamp(x + noise_factor * torch.randn_like(x), 0., 1.)
recon, _ = model(x_noisy)
loss = F.mse_loss(recon, x)   # target is the CLEAN image
```

> [!example] Applications of denoising autoencoders
> - **Image restoration** — remove noise, scratches, or compression artifacts.
> - **Anomaly detection** — normal data reconstructs well; anomalies have high reconstruction error.
> - **Pre-training** — learn useful representations before supervised fine-tuning.

<span class="at-kicker">Variational Autoencoders</span>

## Variational Autoencoder (VAE)

VAEs learn a **probabilistic latent space** rather than a deterministic one. Instead of encoding to a point, they encode to a distribution — specifically, the parameters of a Gaussian.

The encoder outputs $\mu$ and $\log\sigma^2$; the decoder samples from $\mathcal{N}(\mu, \sigma^2)$ via the **reparameterisation trick**:

$$z = \mu + \sigma \cdot \epsilon, \quad \epsilon \sim \mathcal{N}(0, I)$$

> [!info] The reparameterisation trick
> Sampling is non-differentiable. By writing $z = \mu + \sigma \cdot \epsilon$ where $\epsilon \sim N(0, I)$, the randomness is external and gradients flow through $\mu$ and $\sigma$. This is what allows the VAE to be trained end-to-end.

The **VAE loss** has two components:
1. **Reconstruction loss** — how well does the decoder reconstruct the input?
2. **KL divergence** — how close is the learned posterior $q(z|x)$ to the prior $\mathcal{N}(0, I)$?

$$\mathcal{L} = \underbrace{\mathbb{E}[\log p(x|z)]}_{\text{reconstruction}} - \underbrace{\text{KL}(q(z|x) \| p(z))}_{\text{regularisation}}$$

> [!example] Generating new samples with a VAE
> Once trained, sample $z \sim \mathcal{N}(0, I)$ and pass it through the decoder: `generated = vae.decode(torch.randn(1, latent_dim))`. Because the KL term forces the latent space to be smooth and continuous, interpolating between two points in $z$-space produces smooth semantic transitions in the output.

<span class="at-kicker">Generative Adversarial Networks</span>

## Generative Adversarial Networks (GANs)

GANs consist of two adversaries:
- **Generator** $G(z)$ — creates fake samples from random noise.
- **Discriminator** $D(x)$ — classifies real vs. fake.

They play a minimax game:

$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}}[\ln D(x)] + \mathbb{E}_{z \sim p_z}[\ln(1 - D(G(z)))]$$

> [!example] The forger and the detective
> Imagine a forger (generator) trying to create counterfeit paintings, and a detective (discriminator) trying to spot fakes. Over time, the forger gets so good that the detective can't tell the difference. The Nash equilibrium is reached when $D(x) = 0.5$ for all inputs — the discriminator is no better than random chance.

### DCGAN architecture

> [!example] DCGAN generator
> The generator progressively upsamples from a noise vector $z \in \mathbb{R}^{100}$ to a full image using transposed convolutions:
> - `ConvTranspose2d(100 → 512, 4×4)` — `(4×4)`
> - `ConvTranspose2d(512 → 256, 4×4, stride=2)` — `(8×8)`
> - `ConvTranspose2d(256 → 128, 4×4, stride=2)` — `(16×16)`
> - `ConvTranspose2d(128 → 3, 4×4, stride=2)` + `Tanh` — `(32×32)` RGB
>
> The discriminator mirrors this with standard strided convolutions and no sigmoid in the final layer (for WGAN variants).

### GAN training loop

> [!example] Alternating adversarial training
> Each iteration updates the discriminator and generator separately:
> 1. **Train D**: forward real images → compute `d_loss_real`; forward fake images (detached from G) → compute `d_loss_fake`; backprop `(d_loss_real + d_loss_fake) / 2`.
> 2. **Train G**: forward fake images through D → compute `g_loss` (G wants D to output 1 for fakes); backprop through G only.
>
> Key detail: use `.detach()` on fake images when training D to avoid backpropagating through G unnecessarily.

<span class="at-kicker">GAN Training Challenges</span>

## GAN training challenges

| Problem | Symptom | Solution |
| --- | --- | --- |
| **Mode collapse** | Generator produces same output for all inputs | Mini-batch discrimination; WGAN; unrolled GAN |
| **Vanishing gradients** | Discriminator gets too good; generator stops learning | Use Wasserstein loss; label smoothing; spectral normalisation |
| **Training instability** | Loss oscillates; samples never improve | Learning rate tuning; gradient penalty; progressive growing |
| **Checkerboard artifacts** | Repeating patterns in generated images | Use resize-convolution instead of transposed conv |

### WGAN-GP: Wasserstein GAN with Gradient Penalty

Replaces the adversarial loss with the Wasserstein distance and adds a gradient penalty to enforce the Lipschitz constraint:

$$\mathcal{L}_D = \mathbb{E}[\hat{x}] - \mathbb{E}[x] + \lambda \mathbb{E}[(\|\nabla_{\hat{x}} D(\hat{x})\|_2 - 1)^2]$$

> [!warning] WGAN-GP implementation notes
> - The critic should **not** use batch normalisation — it interferes with the gradient penalty.
> - Remove the sigmoid from the final critic layer.
> - Train the critic more steps per generator step (e.g., 5:1 ratio).

<span class="at-kicker">Side-by-Side Comparison</span>

## Comparison: autoencoders vs. GANs vs. VAEs

| | Autoencoder | VAE | GAN |
| --- | --- | --- | --- |
| **Objective** | Reconstruct input | Reconstruct + match prior | Fool discriminator |
| **Latent space** | No explicit structure | Probabilistic; structured | Implicit; less structured |
| **Generation quality** | Blurry reconstructions | Slightly blurry | Sharp; high fidelity |
| **Training stability** | Very stable | Stable | Often unstable |
| **Latent interpolation** | Poor | Smooth | Varies |
| **Use cases** | Denoising, compression, anomaly detection | Generation, representation learning | High-quality image synthesis |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### GENERATIVE MODELLING PIPELINE
>> # From *noise* to *realistic samples*.
>> Train generative models that learn the data distribution and synthesise new, high-quality outputs.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* your model.
>> Use **Autoencoder** for anomaly detection and compression. Use **VAE** when you need smooth generation and latent space interpolation. Use **GAN** (DCGAN/WGAN-GP) for highest-fidelity image synthesis.
>
>> [!card|step]
>> ###### Step 02
>> ### *Design* the architecture.
>> Encoder + bottleneck + decoder for AE/VAE. Generator + discriminator for GAN. Use batch norm in generator (not discriminator for WGAN-GP). Start with small latent dim (32–128) and expand.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* training.
>> For VAE: track both reconstruction and KL loss separately. For GAN: watch discriminator accuracy — if it hits 100%, use label smoothing or reduce learning rate. Sample outputs every epoch to detect mode collapse early.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. What is the role of the bottleneck in an autoencoder?
2. How does a denoising autoencoder learn to remove noise?
3. What is the reparameterisation trick in VAEs, and why is it necessary?
4. Explain the minimax game in GANs. What are the optimal strategies for G and D?
5. What is mode collapse, and how can it be addressed?
6. Why does the Wasserstein loss improve GAN training stability?
7. When would you choose a VAE over a GAN?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Architectures
>> [[neural-networks|Neural Networks]], [[cnn|CNN]], [[transformers|Transformers]]
>
>> [!card] Training
>> [[optimisation-algorithms|Optimisation]], [[regularisation-training|Regularisation]]
>
>> [!card] Applications
>> [[../nlp/nlp|NLP]], [[../nlp/computer-vision|Computer Vision]], [[../nlp/image-generation|Image Generation]]
>
>> [!card] Transfer
>> [[transfer-learning|Transfer Learning]]
