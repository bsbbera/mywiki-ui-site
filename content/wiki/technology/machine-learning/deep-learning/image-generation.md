---
title: Image Generation
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Image Generation
  - Generative Image Models
  - Image Synthesis
  - Text-to-Image
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - ComputerVision
  - GenerativeModels
  - GANs
banner:
publish: true
---

> [!quote]
> *The ability to generate photorealistic images from noise or text represents one of the most visible triumphs of deep generative modelling.*
> — Deep Learning Researcher

# Image Generation

<p class="at-lead">
Image Generation is the task of synthesising new images from noise, text, sketches, or other conditioning inputs. Powered by GANs, VAEs, autoregressive models, and diffusion models, it has progressed from blurry digits to photorealistic artwork and scientific imagery.
</p>

## Overview

**GANs** (Generative Adversarial Networks) pit a generator against a discriminator in a minimax game, producing sharp images but suffering from training instability. **VAEs** (Variational Autoencoders) learn a latent distribution and decode samples, offering better stability but sometimes blurrier outputs. **Diffusion models** iteratively denoise random noise, achieving state-of-the-art fidelity and diversity — powering DALL-E, Midjourney, and Stable Diffusion.

Conditional generation extends these to **text-to-image**, **image-to-image translation**, **inpainting**, and **super-resolution**. Key challenges include mode collapse, evaluation (FID, IS, CLIP scores), bias and fairness, and computational cost.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[autoencoders|Autoencoders]], [[gan|GANs]], [[diffusion-models|Diffusion Models]], [[computer-vision|Computer Vision]]
>
>> [!card] Parent topic
>> [[deep-learning|Deep Learning]]
>
>> [!card] See also
>> [[neural-networks|Neural Networks]], [[transfer-learning|Transfer Learning]], [[transformers|Transformers]]