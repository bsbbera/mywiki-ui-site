---
title: Active Learning
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Active Learning
  - Semi-Supervised Learning
  - Weak Supervision
  - Data Labeling
  - Label Propagation
category: Machine Learning
tags:
  - MachineLearning
  - ActiveLearning
  - DataScience
  - Labeling
banner: https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The art of progress is to preserve order amid change and to preserve change amid order."
> <cite>— Alfred North Whitehead</cite>

---

<span class="at-kicker">Labeling Strategy · Machine Learning</span>

# Active Learning

<p class="at-lead">
Active learning intelligently selects which unlabelled data points to annotate, maximising the value of each labelling effort. It is essential when labelling is expensive, datasets are imbalanced, or standard sampling strategies fail to improve target metrics — making the labelling budget go further.
</p>

<span class="at-stat">margin sampling</span> · <span class="at-stat">query by committee</span> · <span class="at-stat">weak supervision</span> · <span class="at-mark">maximum learning per label</span>

<span class="at-kicker">Why It Matters</span>

## Overview

> [!info] Why active learning matters
> Most ML is supervised — and supervision requires labels. Labelling is often the bottleneck: expensive, slow, and requiring domain expertise. Active learning addresses this by asking: "Given a fixed budget of N labels, which N points should we ask a human to label?"

### When Active Learning Shines

| Scenario | Why active learning helps |
| --- | --- |
| **Constrained budget** | Can only afford to label a few points |
| **Imbalanced data** | Helps select rare-class examples for training |
| **Target metrics plateau** | Baseline sampling no longer improves selected metrics |
| **Expert annotators are scarce** | Prioritise the most informative examples for human review |

<span class="at-kicker">Sampling Strategies</span>

## Selection Methods

> [!grid|cols2]
>
>> [!card|section]
>> ###### MARGIN SAMPLING
>> ### *Margin* Sampling
>> Label points the current model is **least confident** in — typically those with prediction probabilities closest to 0.5 (binary) or where the gap between top-2 class probabilities is smallest (multiclass).
>>
>> > [!tip] Uncertainty as selection criterion
>> > The model learns most from examples it currently finds most ambiguous. By iteratively labelling its most uncertain predictions, each new label maximally reduces model uncertainty.
>
>> [!card|section]
>> ###### CLUSTER-BASED SAMPLING
>> ### *Cluster-Based* Sampling
>> Sample from well-formed clusters to ensure the labelled set **covers the entire input space** — avoids over-representing dense regions where the model already has sufficient signal.
>>
>> > [!example] In practice
>> > Run K-Means or DBSCAN on the unlabelled pool. Select one representative per cluster (nearest to centroid). Useful early in training when the model is unreliable.

> [!grid|cols2]
>
>> [!card|section]
>> ###### QUERY BY COMMITTEE
>> ### *Query* by Committee
>> Train an **ensemble** of diverse models and sample points where the models **disagree** most. High disagreement signals high information content — these points are genuinely hard.
>
>> [!card|section]
>> ###### REGION-BASED SAMPLING
>> ### *Region-Based* Sampling
>> Run several active learning algorithms in different partitions of the feature space. Useful when data has distinct sub-populations with different characteristics.

<span class="at-kicker">Related Paradigms</span>

## Semi-Supervised & Weak Supervision

When labelling is expensive, these techniques can bootstrap supervised learning:

> [!grid|cols2]
>
>> [!card|section]
>> ###### LABEL PROPAGATION
>> ### *Label* Propagation
>> Graph-based semi-supervised algorithm. Unlabelled examples are assigned labels based on their neighbours' labels and the "community structure" of the data — labels flow from labelled nodes to unlabelled neighbours.
>>
>> ```python
>> from sklearn.semi_supervised import LabelPropagation
>> model = LabelPropagation()
>> model.fit(X, y_partial)  # y_partial has -1 for unlabelled points
>> ```
>>
>> Inspect `transduction_` for inferred labels on unlabelled samples.
>
>> [!card|section]
>> ###### WEAK SUPERVISION
>> ### *Weak* Supervision
>> Uses **heuristics** to apply noisy labels to unlabelled examples at scale. **Snorkel** is a popular framework — users write *labelling functions* that each vote on unlabelled data.
>>
>> The noisy votes are then denoised by a generative model and used to train a discriminative downstream model.
>>
>> > [!note] The weak supervision tradeoff
>> > Weak supervision trades label quality for quantity. A model trained on 100,000 weakly labelled examples can outperform one on 1,000 perfectly labelled examples — provided labelling functions are diverse and reasonably accurate.

> [!note] The labelling spectrum
> In practice, most real projects fall somewhere between fully supervised and fully unsupervised. Semi-supervised, weakly supervised, and active learning represent different points on that spectrum — each trading label quality for label quantity or cost.

<span class="at-kicker">Quality Control</span>

## Label Consistency

Inconsistent labels are a silent killer of model performance — a well-tuned model trained on noisy labels will memorise the noise.

### Sources of Inconsistency

| Source | Description |
| --- | --- |
| **Labeler disagreement** | Different annotators apply different criteria |
| **Ambiguous instructions** | Unclear guidelines allow subjective interpretation |
| **Outliers in big data** | Rare cases that don't fit standard categories |
| **Small-data noise** | Every mislabel matters more when training sets are tiny |

### Mitigation Strategies

| Strategy | How it works |
| --- | --- |
| **Multiple labelers + voting** | Reduce variance via consensus |
| **Borderline labels** | Explicitly mark ambiguous cases |
| **Standardise labels** | Merge equivalent labels; split distinct ones |
| **Discuss disagreements** | ML engineer + domain expert alignment sessions |
| **Merge similar classes** | When two classes are nearly identical, combine them |

> [!tip] Inter-annotator agreement
> Measure **Cohen's κ** (kappa) between annotators before scaling labelling. κ < 0.6 indicates substantial disagreement — fix the guidelines before generating thousands of inconsistent labels.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the core idea behind active learning?
2. How does margin sampling select which points to label?
3. What is the difference between active learning and semi-supervised learning?
4. How does weak supervision differ from manual labelling?
5. What are the risks of label inconsistency, and how do you mitigate them?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Data Prep
>> [[data-cleaning|Data Cleaning]] · [[feature-engineering|Feature Engineering]]
>
>> [!card] Model Evaluation
>> [[evaluation-metrics|Evaluation Metrics]] · [[imbalanced-classification|Imbalanced Classification]]
>
>> [!card] Unsupervised
>> [[unsupervised-learning|Unsupervised Learning]]
