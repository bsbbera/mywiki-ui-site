---
title: Spark MLlib
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026
aliases:
  - Spark MLlib
  - MLlib
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - MachineLearning
banner:
publish: true
---

> "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become."
> <cite>— Paramahansa Yogananda</cite>

---

**MLlib** is [[apache-spark|Spark]]'s distributed machine-learning library. It brings the same in-memory, partitioned, fault-tolerant execution model to model training and data mining, so the same [[spark-dataframe|DataFrame]] you use for ETL can feed an ML pipeline. This page summarizes the machine-learning half of *[[learning-apache-spark-with-python|Learning Apache Spark with Python]]* (source: Pyspark -Book.pdf); the wiki's focus is data engineering, so each algorithm is listed rather than given its own page.

## What the source covers

| Area | Techniques (from the book) |
| --- | --- |
| **Data exploration** | Univariate + multivariate analysis, summary statistics |
| **Regression** | Linear, generalized linear, decision-tree, random-forest, gradient-boosted-tree |
| **Regularization** | Ridge, LASSO, elastic net |
| **Classification** | Logistic regression, decision tree, random forest, gradient-boosted tree, Naive Bayes |
| **Clustering** | K-Means |
| **Recommendation** | **ALS** (Alternating Least Squares) — e.g. stock-portfolio recommendations |
| **Text mining** | Collection, preprocessing, classification, sentiment analysis, n-grams, **LDA** topic modeling |
| **Graph / network** | Co-occurrence + correlation networks (via GraphX) |
| **Simulation** | Monte Carlo, Markov Chain Monte Carlo |
| **Deep learning** | Feedforward neural network |

## How it fits the engine

- ML jobs are still [[rdd|RDD]]/DataFrame computations under the hood, so [[spark-performance|caching, partitioning, and shuffle]] tuning apply directly — iterative algorithms benefit hugely from Spark's **in-memory** model versus disk-based MapReduce.
- The book runs its demos on **[[databricks|Databricks]] Community Cloud**, the free managed Spark environment (source: Pyspark -Book.pdf).
- **Recommendation (ALS)** and **clustering (K-Means)** are the most commonly referenced DE-adjacent use cases (segmentation, RFM analysis, recommendations).

> The book uses the older `MLlib` naming; modern Spark splits into **`spark.mllib`** (legacy RDD-based) and **`spark.ml`** (the current DataFrame-based ML Pipelines API). Prefer `spark.ml` for new work.

## Interview questions

1. What ML capabilities does **MLlib** provide?
2. Why is Spark well-suited to **iterative** ML algorithms versus MapReduce?
3. What is **ALS** used for?
4. Difference between **`spark.mllib`** and **`spark.ml`**?

## Related pages

> [!multi-column]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[spark-dataframe|DataFrames]], [[rdd|RDDs]], [[spark-performance|Performance]]
>
>
>> [!card] Python API
>> [[pyspark|PySpark]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]
>
>
>> [!card] People & books
>> [[matei-zaharia|Matei Zaharia]], [[wenqiang-feng|Wenqiang Feng]], [[learning-apache-spark-with-python|Learning Apache Spark with Python]]
