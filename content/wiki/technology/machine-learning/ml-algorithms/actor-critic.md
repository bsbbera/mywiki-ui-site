---
title: Actor-Critic Methods
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Actor-Critic
  - A2C
  - A3C
  - Advantage Actor-Critic
category: Machine Learning
tags:
  - MachineLearning
  - ReinforcementLearning
  - ActorCritic
  - DeepLearning
  - PolicyGradients
banner:
publish: true
---

> [!quote]
> *The actor decides what to do; the critic tells the actor how good its decisions were.*
> — Reinforcement Learning: An Introduction

# Actor-Critic Methods

<p class="at-lead">
Actor-critic methods combine the strengths of policy gradient and value-based reinforcement learning. The actor learns a policy for selecting actions, while the critic evaluates the policy by estimating value functions, reducing variance and enabling stable, sample-efficient learning in complex environments.
</p>

## Overview

By using the critic's value estimate as a baseline, actor-critic algorithms achieve lower gradient variance than pure policy gradients. Synchronous and asynchronous variants (A2C, A3C) enable parallel training, while modern implementations like PPO and SAC incorporate actor-critic ideas with clipped objectives and entropy bonuses for robust, scalable deep reinforcement learning.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[policy-gradients]], [[q-learning]], [[dqn]]
>
>> [!card] Parent topic
>> [[reinforcement-learning]]
>
>> [!card] See also
>> [[exploration-exploitation]], [[neural-networks]]
