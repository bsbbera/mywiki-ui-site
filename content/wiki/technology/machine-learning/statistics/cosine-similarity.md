---
title: Cosine Similarity
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Cosine Similarity
  - Cosine Distance
category: Statistics
tags:
  - Statistics
  - NLP
  - MachineLearning
  - SimilarityMeasure
banner: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The distance between two people is not measured in miles, but in the understanding between them."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Statistics · Similarity Measures</span>

# Cosine Similarity

<p class="at-lead">
Cosine similarity measures the cosine of the angle between two vectors in a multi-dimensional space. It captures directional similarity, not magnitude — making it particularly effective for comparing text documents and word embeddings where length should not affect similarity.
</p>

<span class="at-stat">direction not magnitude</span> &nbsp;·&nbsp; <span class="at-stat">range [-1, 1]</span> &nbsp;·&nbsp; <span class="at-stat">text & embeddings</span> &nbsp;·&nbsp; <span class="at-mark">cosine similarity is Euclidean distance applied to L2-normalised vectors</span>

<span class="at-kicker">Formula</span>

## Formula

$$\text{Cosine Similarity} = \cos(\theta) = \frac{A \cdot B}{\|A\| \cdot \|B\|}$$

Range: **[-1, 1]**

| Value | Meaning |
| --- | --- |
| 1 | Identical direction (perfectly similar) |
| 0 | Orthogonal (no similarity) |
| -1 | Opposite direction (perfectly dissimilar) |

**Cosine Distance** (for use in distance-based algorithms):

$$\text{Cosine Distance} = 1 - \text{Cosine Similarity}$$

Cosine distance is *inversely proportional* to cosine similarity.

---

<span class="at-kicker">Document Similarity</span>

## Use in document similarity

When comparing documents, A and B are the [[../nlp/tf-idf|TF-IDF]] (or word count) vectors of the documents:

$$\text{Cosine Similarity} = \frac{\vec{A}_{\text{tfidf}} \cdot \vec{B}_{\text{tfidf}}}{\|\vec{A}_{\text{tfidf}}\| \cdot \|\vec{B}_{\text{tfidf}}\|}$$

> [!tip] Why cosine for text?
> Two documents with the same topic but different lengths should have high similarity. Cosine handles this correctly because it ignores vector length (magnitude), measuring only the angle between vectors.

---

<span class="at-kicker">Applications</span>

## Key applications

> [!grid|cols2]
>
>> [!card|section]
>> ###### RECOMMENDATION
>> ### *Recommendation* Systems
>> Find items similar to one a user liked based on vector similarity. Powers collaborative and content-based filtering when items are represented as feature vectors.
>
>> [!card|section]
>> ###### DOCUMENT RETRIEVAL
>> ### Document *Retrieval*
>> Rank documents by similarity to a query. Standard approach in information retrieval using TF-IDF or BM25 vectors.
>
>> [!card|section]
>> ###### WORD EMBEDDINGS
>> ### Word *Embeddings*
>> Identify semantically similar words in Word2Vec or BERT space. "King" − "Man" + "Woman" ≈ "Queen" works because of directional similarity.
>
>> [!card|section]
>> ###### DUPLICATE DETECTION
>> ### *Duplicate* Detection
>> Find near-duplicate texts in large corpora. Cosine similarity on TF-IDF vectors efficiently surfaces plagiarism and near-copies.

| Application | How cosine similarity helps |
| --- | --- |
| **Recommendation systems** | Find items similar to one a user liked |
| **Document retrieval / search** | Rank documents by similarity to a query |
| **Word embeddings** | Identify semantically similar words in Word2Vec or BERT space |
| **Duplicate detection** | Find near-duplicate texts |

---

<span class="at-kicker">Cosine vs. Euclidean</span>

## Cosine vs. Euclidean distance

| | Cosine Distance | Euclidean Distance |
| --- | --- | --- |
| **Sensitive to magnitude?** | No | Yes |
| **Best for** | Text / sparse high-dim vectors | Dense, low-dim feature vectors |
| **Range** | [0, 2] (as distance) | [0, ∞) |

> [!info] When to use which
> For text, use cosine. For physical measurements or dense feature vectors, Euclidean often works better. Cosine similarity is essentially Euclidean distance applied to L2-normalised vectors.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Why is cosine similarity preferred over Euclidean distance for text comparison?
2. What does a cosine similarity of 0 mean? Of -1?
3. How do you convert cosine similarity to a distance metric?
4. When would you use cosine similarity in a recommendation system?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[vector-norms|Vector Norms]], [[descriptive-statistics|Descriptive Statistics]]
>
>> [!card] NLP
>> [[../nlp/tf-idf|TF-IDF]], [[../nlp/word2vec|Word2Vec]], [[../nlp/bert|BERT]]
>
>> [!card] Algorithms
>> [[../ml-algorithms/knn|KNN]]
