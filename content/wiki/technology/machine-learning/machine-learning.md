---
title: Machine Learning
Created:
  - 2026-06-08
date modified: Sunday, June 8th 2026, 11:34:00 am
aliases:
  - Machine Learning
  - ML
  - Data Science
category: Machine Learning
tags:
  - MachineLearning
  - DataScience
  - AI
banner:
publish: true
maturity: budding
---

> "A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E."
> <cite>— Tom Mitchell</cite>

---

*📄 156 notes in this field · ⏱ 3 min read · 🕘 updated Jun 12, 2026* <span class="mw-maturity is-budding">🌿 Budding</span>

**Machine Learning** is a sub-field of artificial intelligence that enables computers to learn from data without being explicitly programmed. ML algorithms build models from training examples, identify patterns, and make predictions or decisions on new, unseen data (source: DataScienceNotes-master).

## Types of learning

- **Supervised learning** — labelled training data; the algorithm learns a mapping from inputs to outputs. Examples: regression, classification.
- **Unsupervised learning** — unlabelled data; the algorithm discovers hidden structure. Examples: clustering, dimensionality reduction.
- **Semi-supervised learning** — small labelled set + large unlabelled set.
- **Reinforcement learning** — agent learns by interacting with an environment and receiving rewards or penalties.

## The ML lifecycle

1. **Data collection & labelling** — sourcing and annotating raw data.
2. **Feature engineering** — transforming raw data into model-ready features.
3. **Model selection & training** — choosing an algorithm; fitting to training data.
4. **Evaluation** — assessing performance on a held-out set using appropriate metrics.
5. **Deployment** — serving predictions in production.
6. **Monitoring** — detecting drift, degradation, and triggering retraining.

## Sub-domains in this vault

> [!grid]
>
>> [!card] Foundations & Math
>> [[statistics/statistics|Statistics]] — probability, inference, information theory
>> [[ml-fundamentals/machine-learning-fundamentals|ML Fundamentals]] — supervised/unsupervised learning, evaluation, feature engineering
>
>> [!card] Algorithms
>> [[ml-algorithms/ml-algorithms|ML Algorithms]] — decision trees, ensemble methods, linear models, clustering, dimensionality reduction
>
>> [!card] Deep Learning
>> [[deep-learning/deep-learning|Deep Learning]] — neural networks, CNN, RNN, LSTM, optimisers
>
>> [!card] NLP
>> [[nlp/nlp|Natural Language Processing]] — tokenisation, embeddings, transformers, BERT, LDA
>
>> [!card] Paradoxes in AI
>> [[../../paradoxes/linguistic-ai-paradoxes|Moravec's Paradox]] — reasoning is easy, perception is hard
>
>> [!card] MLOps
>> [[mlops/mlops|MLOps]] — lifecycle, deployment patterns, monitoring, concept drift, KubeFlow

## Related pages

> [!grid]
>
>> [!card] Data Engineering
>> [[../data-engineering/data-engineering|Data Engineering]], [[spark-mllib|Spark MLlib]]
>
>> [!card] Cloud ML
>> [[../cloud/gcp/ai-ml/vertex-ai|Vertex AI]], [[../cloud/databricks/databricks|Databricks]]
>
>> [!card] Tools
>> [[../tools/programming-languages|Python / Scikit-learn]], [[../cloud/databricks/databricks|MLflow]]
