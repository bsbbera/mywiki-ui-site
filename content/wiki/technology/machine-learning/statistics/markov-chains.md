---
title: Markov Chains
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Markov Chains
  - Markov Process
  - State Transitions
  - Stationary Distribution
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - Probability
  - SequenceModels
  - StochasticProcesses
banner:
publish: true
---

> [!quote]
> *Markov chains turn the messy problem of history into the clean problem of the present — because the future depends only on now.*
> — Stochastic Processes Literature

# Markov Chains

<p class="at-lead">
A Markov Chain is a stochastic process that transitions between states with probabilities that depend only on the current state, not on the full history. It underlies PageRank, reinforcement learning state transitions, n-gram language models, and MCMC sampling methods.
</p>

## Overview

Markov chains are defined by a state space and a transition matrix specifying the probability of moving from one state to another. Key properties include irreducibility (all states communicate), periodicity, and the existence of a stationary distribution. They provide elegant solutions to problems in queueing theory, genetics, economics, and probabilistic inference, and their extension to hidden states (HMMs) revolutionised speech recognition and bioinformatics.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[markov-models]], [[monte-carlo-simulation]], [[reinforcement-learning]]
>
>> [!card] Parent topic
>> [[statistics]]
>
>> [!card] See also
>> [[mdp]], [[probability-distributions]]
