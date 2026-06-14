---
title: Recommender Systems
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Recommender Systems
  - Recommendation Engines
  - Collaborative Filtering
  - Content-Based Filtering
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - Recommendation
  - Personalization
banner:
publish: true
---

> [!quote]
> *If you liked this, you might also like... — the algorithm that powers the modern internet.*
> — Recommender Systems Community

# Recommender Systems

<p class="at-lead">
Recommender Systems are algorithms that predict user preferences to suggest relevant items — products, movies, articles, or connections. They power Netflix recommendations, Amazon product suggestions, Spotify playlists, and social media feeds.
</p>

## Overview

The two classic paradigms are **collaborative filtering** (infer preferences from user-item interaction patterns) and **content-based filtering** (recommend items similar to those a user liked before). Modern systems blend both (**hybrid recommenders**) and augment them with deep learning, graph neural networks, and sequential models.

Key challenges include the **cold-start problem** (new users or items with no history), **scalability** (millions of users and items), **diversity** (avoiding filter bubbles), and **evaluation** (offline metrics vs online A/B tests). Matrix factorisation, two-tower neural networks, and approximate nearest neighbour search are standard production techniques.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> collaborative filtering, [[matrix-factorisation|Matrix Factorisation]], [[embeddings|Embeddings]]
>
>> [!card] Parent topic
>> [[deep-learning|Deep Learning]]
>
>> [!card] See also
>> [[neural-networks|Neural Networks]], [[information-retrieval|Information Retrieval]], [[ab-testing|A/B Testing]]