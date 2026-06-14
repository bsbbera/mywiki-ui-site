---
title: Deep Q-Networks
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - DQN
  - Deep Q-Networks
  - Experience Replay
  - Target Network
category: Machine Learning
tags:
  - MachineLearning
  - ReinforcementLearning
  - DeepLearning
  - QLearning
  - DeepRL
banner:
publish: true
---

> [!quote]
> *We introduce the first deep learning model to successfully learn control policies directly from high-dimensional sensory input using reinforcement learning.*
> — Mnih et al., 2015

# Deep Q-Networks (DQN)

<p class="at-lead">
Deep Q-Networks combine Q-Learning with deep neural networks to approximate action-value functions in high-dimensional or continuous state spaces. DQN famously mastered dozens of Atari games directly from raw pixels, igniting the modern deep reinforcement learning revolution.
</p>

## Overview

DQN addresses the instability of combining non-linear function approximation with bootstrapped value updates through two key innovations: **experience replay**, which decorrelates training data by sampling random mini-batches from a stored transition buffer, and **target networks**, which use a separate, slowly-updated network to compute stable learning targets. These techniques remain foundational in virtually all modern deep RL algorithms.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[q-learning]], [[actor-critic]], [[policy-gradients]]
>
>> [!card] Parent topic
>> [[reinforcement-learning]]
>
>> [!card] See also
>> [[neural-networks]], [[optimisation-algorithms]]
