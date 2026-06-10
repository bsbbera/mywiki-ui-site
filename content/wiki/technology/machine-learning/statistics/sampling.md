---
title: Sampling
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Sampling
  - Probability Sampling
  - Stratified Sampling
category: Statistics
tags:
  - Statistics
  - Mathematics
  - DataScience
banner: https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "All models are wrong, but some are useful."
> <cite>— George E. P. Box</cite>

---

<span class="at-kicker">Statistics · Sampling Theory</span>

# Sampling

<p class="at-lead">
Sampling is the process of selecting a subset of individuals from a population to draw valid conclusions about the whole. When studying a population it is rarely possible — or necessary — to collect data from every data point. The right sampling method determines whether inferences are valid.
</p>

<span class="at-stat">probability sampling</span> &nbsp;·&nbsp; <span class="at-stat">stratified · cluster</span> &nbsp;·&nbsp; <span class="at-stat">non-probability methods</span> &nbsp;·&nbsp; <span class="at-mark">stratified K-fold is essential for class-imbalanced datasets</span>

| Term | Definition |
| --- | --- |
| **Population** | The entire group you want to draw conclusions about |
| **Sample** | The specific group of individuals from which data is collected |

<span class="at-kicker">Probability Sampling</span>

## Probability sampling

Every member of the population has a known, non-zero chance of selection. Produces **representative** samples suitable for statistical inference.

> [!grid|cols2]
>
>> [!card|section]
>> ###### SIMPLE RANDOM
>> ### *Simple Random* Sample
>> Every member has an equal probability of being selected. The gold standard — no pattern or bias. The basis for nearly all classical statistical inference.
>
>> [!card|section]
>> ###### SYSTEMATIC
>> ### *Systematic* Sampling
>> Similar to simple random sampling but with a pattern: select every k-th element from an ordered list (e.g., every 5th record). Easy to implement on ordered datasets.
>
>> [!card|section]
>> ###### STRATIFIED
>> ### *Stratified* Sampling
>> Ensures the sample contains equal representation of all sub-groups in the population. Essential when the population has mixed characteristics (e.g., class imbalance in classification).
>
>> [!card|section]
>> ###### CLUSTER
>> ### *Cluster* Sampling
>> The population is divided into clusters that reflect the whole. Entire clusters are selected rather than individual elements. Cost-effective for geographically dispersed populations.

### Stratified K-Fold

Preferred over standard K-Fold on **large or imbalanced datasets** — each fold preserves the class distribution of the full set.

> [!tip] Stratified sampling in ML
> Use `StratifiedShuffleSplit` from scikit-learn to preserve class distribution in train/test splits. This is critical when classes are imbalanced — random sampling might by chance exclude minority classes from a fold.

> [!info] When to use cluster sampling
> Use when the population is geographically dispersed and it's cheaper to sample clusters than individuals (e.g., surveying all students in 10 randomly selected schools rather than 1000 random students across all schools).

---

<span class="at-kicker">Non-Probability Sampling</span>

## Non-probability sampling

Selection is not random; not every member has a known chance of being selected. Results may not be representative.

| Method | Description | Risk |
| --- | --- | --- |
| **Convenience** | Easiest-to-reach members | High risk of bias |
| **Voluntary response** | Self-selected respondents | Biased toward strong opinions |
| **Purposive** | Judgement-based selection for a specific purpose | Researcher's subjective bias |
| **Snowball** | Existing participants recruit further participants | Network bias; hard to reach populations |

> [!warning] Beware non-probability sampling
> These methods are faster and cheaper but introduce systematic bias. They are unsuitable for statistical inference — you cannot calculate confidence intervals or p-values reliably.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between probability and non-probability sampling?
2. When would you use stratified over simple random sampling?
3. What is cluster sampling and when is it appropriate?
4. Why does convenience sampling introduce bias?
5. How does stratified K-Fold differ from regular K-Fold cross-validation?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[hypothesis-testing|Hypothesis Testing]], [[ab-testing|A/B Testing]], [[probability-distributions|Probability Distributions]]
>
>> [!card] Model Evaluation
>> [[../ml-fundamentals/cross-validation|Cross Validation]], [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
>
>> [!card] Imbalanced Data
>> [[../ml-fundamentals/imbalanced-classification|Imbalanced Classification]]
