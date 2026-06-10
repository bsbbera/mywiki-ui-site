---
title: Association Rules
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Association Rules
  - Apriori
  - Market Basket Analysis
  - Support
  - Confidence
  - Lift
category: Machine Learning
tags:
  - MachineLearning
  - UnsupervisedLearning
  - DataMining
  - RetailAnalytics
banner: https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Shopping is a woman thing. It's a contact sport like football."
> <cite>— Erma Bombeck</cite>

---

<span class="at-kicker">Unsupervised Learning · Data Mining</span>

# Association Rules

<p class="at-lead">
Association rule mining uncovers relationships between items in large transaction datasets. The classic application is market basket analysis — discovering which products are frequently purchased together, enabling smarter product placement, cross-selling promotions, and recommendation systems.
</p>

<span class="at-stat">support · confidence · lift</span> &nbsp;·&nbsp; <span class="at-stat">Apriori algorithm</span> &nbsp;·&nbsp; <span class="at-stat">no target variable</span> &nbsp;·&nbsp; <span class="at-mark">entirely co-occurrence driven — no labels required</span>

<span class="at-kicker">Rule Notation & Metrics</span>

## Rule notation

$$A \rightarrow B$$

- **Antecedent (A)** — the "if" part.
- **Consequent (B)** — the "then" part.
- Interpretation: customers who buy A are likely to also buy B.

---

## Key metrics

### Support

How frequently the itemset appears in the dataset:

$$\text{Support}(A \rightarrow B) = \frac{\text{freq}(A \cup B)}{N}$$

> [!info] Support measures popularity
> Low-support rules are often discarded as statistical noise — they may be technically valid but are irrelevant in practice because they apply to too few transactions.

### Confidence

The conditional probability of B given A:

$$\text{Confidence}(A \rightarrow B) = \frac{\text{Support}(A \cup B)}{\text{Support}(A)}$$

> [!warning] Confidence can be misleading
> High confidence does not imply a meaningful association. If B is purchased in 90% of all transactions, then any rule ending in B will have high confidence — even if A and B are completely independent. Always check **lift** alongside confidence.

### Lift

The strength of a rule, normalised by the expected probability if A and B were independent:

$$\text{Lift}(A \rightarrow B) = \frac{\text{Support}(A \cup B)}{\text{Support}(A) \cdot \text{Support}(B)}$$

| Lift | Interpretation |
| --- | --- |
| **> 1** | A positively influences B (correlated) |
| **= 1** | A and B are statistically independent |
| **< 1** | A negatively influences B (anti-correlated) |

### Conviction

Measures the degree of implication of a rule:

$$\text{Conviction}(A \rightarrow B) = \frac{1 - \text{Support}(B)}{1 - \text{Confidence}(A \rightarrow B)}$$

> [!info] Conviction vs. Lift
> Conviction is infinite for a perfect rule (100% confidence) and handles the case of complete independence well. Unlike lift, it is **directional** — $\text{Conviction}(A \rightarrow B) \neq \text{Conviction}(B \rightarrow A)$, making it more suitable when rule direction matters.

---

<span class="at-kicker">Apriori Algorithm</span>

## Apriori algorithm

The most common algorithm for mining frequent itemsets and generating association rules.

### Core principle

> [!info] The Apriori property (anti-monotonicity)
> **If an itemset is frequent, all of its subsets must also be frequent.** Conversely, if a subset is infrequent, all supersets must be infrequent. This property allows the algorithm to prune the search space exponentially — it never needs to evaluate a superset of a known-infrequent itemset.

### Steps

1. Count the frequency of individual items.
2. Remove items below the **minimum support threshold**.
3. Generate candidate itemsets of size 2, 3, … and count their frequencies.
4. Keep only those above the threshold (prune infrequent candidates early).
5. Generate rules from the surviving frequent itemsets and filter by minimum confidence and lift.

> [!example] Mining association rules with mlxtend
> ```python
> from mlxtend.frequent_patterns import apriori, association_rules
>
> # Input: binary-encoded transaction DataFrame (rows = transactions, cols = items)
> frequent_itemsets = apriori(basket_df, min_support=0.07, use_colnames=True)
>
> rules = association_rules(frequent_itemsets, metric='lift', min_threshold=1.0)
>
> # Filter to high-quality rules
> strong_rules = rules[(rules['confidence'] > 0.5) & (rules['lift'] > 1.5)]
> strong_rules.sort_values('lift', ascending=False).head(10)
> ```
> The input `basket_df` must be one-hot encoded (True/False or 1/0 per item per transaction). Sort by lift descending to surface the most interesting rules first.

---

<span class="at-kicker">Applications</span>

## Applications

> [!grid|cols2]
>
>> [!card|section]
>> ###### RETAIL
>> ### Market *Basket* Analysis
>> Discover which products are frequently purchased together. Optimise store layout, power cross-selling promotions, and drive recommendation engines.
>
>> [!card|section]
>> ###### HEALTHCARE
>> ### Co-occurring *Conditions*
>> Identify co-occurring symptoms, drug interactions, and treatment patterns from patient records. Supports clinical decision support systems.
>
>> [!card|section]
>> ###### WEB ANALYTICS
>> ### Page *Co-Visits*
>> Discover pages frequently visited together in web sessions. Improve site navigation, content recommendations, and UX flow.
>
>> [!card|section]
>> ###### BIOINFORMATICS
>> ### Sequence *Patterns*
>> Identify protein sequence patterns and gene co-expression. Discover regulatory associations in large biological datasets.

| Domain | Use case |
| --- | --- |
| **Retail** | Market basket analysis, cross-selling, store layout |
| **Healthcare** | Co-occurring symptoms, drug interactions |
| **Web analytics** | Pages frequently visited together |
| **Bioinformatics** | Protein sequence patterns |
| **Census data** | Co-occurring demographic attributes |

---

<span class="at-kicker">Pros & Cons</span>

## Pros and cons

| Pros | Cons |
| --- | --- |
| Easy to understand and interpret | Computationally expensive for large item sets |
| Actionable business insights | Can generate an overwhelming number of rules |
| No target variable needed | Many discovered rules may be trivial or already known |

> [!tip] Taming rule explosion
> Start with a relatively high `min_support` (e.g., 0.05–0.10) and raise `min_threshold` for lift (e.g., ≥ 1.5) to constrain output volume. Then progressively lower support to discover rarer but potentially valuable rules.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between support and confidence?
2. Why is lift a better metric than confidence alone?
3. State the Apriori principle.
4. What does a lift of 2.5 mean in practice?
5. When would you use conviction instead of lift?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Unsupervised
>> [[k-means|K-Means]], [[../ml-fundamentals/unsupervised-learning|Unsupervised Learning]]
>
>> [!card] Retail & Recommenders
>> [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]], [[../nlp/recommendation-systems|Recommendation Systems]]
