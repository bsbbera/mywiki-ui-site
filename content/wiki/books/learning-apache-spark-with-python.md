---
title: Learning Apache Spark with Python
Created:
  - 2026-05-28
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Learning Apache Spark with Python
category: Books
tags:
  - book
  - data_engineering
  - spark
  - python
banner: "https://runawayhorse001.github.io/LearningApacheSpark/_static/logo.png"
cssclass: wide-page
publish: true
---

> "Forgive yourself for your faults and your mistakes and move on."
> <cite>— Les Brown</cite>

---

> [!infobox|right]
> # Learning Apache Spark with Python
> ###### Online Tutorial
> | | |
> | --- | --- |
> | **Author** | [[wenqiang-feng\|Wenqiang Feng]] |
> | **Format** | Free online document (Sphinx) |
> | **First posted** | 2017 (ongoing) |
> | **Domain** | Apache Spark, PySpark |
> | **Website** | runawayhorse001.github.io/LearningApacheSpark |

<span class="at-kicker">Big Data Processing · Wenqiang Feng</span>

# Learning Apache Spark with Python

<p class="at-lead">
A free, self-teaching tutorial that walks from Spark environment setup and core RDD/DataFrame fundamentals through a comprehensive applied machine learning section using MLlib — written by Wenqiang Feng during his IMA Data Science Fellowship and continuously updated since 2017.
</p>

<span class="at-stat">Apache Spark</span> &nbsp;·&nbsp; <span class="at-stat">PySpark</span> &nbsp;·&nbsp; <span class="at-mark">hands-on PySpark from data loading to ML pipelines</span>

Official document: <https://runawayhorse001.github.io/LearningApacheSpark/> *(Distributed as a living PDF / HTML doc — no conventional book cover.)*

---

<span class="at-kicker">Core Concepts</span>

## Key Concepts

> [!grid|cols3]
>
>> [!card|section] Apache Spark & PySpark Setup
>> Covers installing and configuring a local Spark environment and connecting to Databricks Community Cloud. Explains the Spark architecture (driver, executors, cluster manager) and how PySpark exposes the Spark engine through a Python API.
>
>> [!card|section] RDDs (Resilient Distributed Datasets)
>> The foundational data abstraction in Spark — an immutable, distributed collection of objects that can be processed in parallel. The tutorial covers RDD creation, transformations (map, filter, flatMap), actions (collect, count, reduce), and when to use RDDs vs. DataFrames.
>
>> [!card|section] DataFrames & SparkSQL
>> Higher-level structured data abstraction built on RDDs. Covers reading/writing CSV, JSON, and Parquet; schema inference and enforcement; SQL queries via `spark.sql()`; and the full DataFrame API for filtering, grouping, joining, and aggregating.
>
>> [!card|section] Regression with MLlib
>> Applied section covering linear regression, generalised linear models, and decision tree regression using `spark.ml`. Includes feature engineering with VectorAssembler, train/test splitting, pipeline construction, and model evaluation metrics (RMSE, R²).
>
>> [!card|section] Classification with MLlib
>> Binary and multiclass classification using logistic regression, random forest, gradient boosted trees, and naïve Bayes. Covers the ML Pipeline API, cross-validation, hyperparameter tuning with ParamGridBuilder, and ROC/AUC evaluation.
>
>> [!card|section] Clustering
>> Unsupervised learning section covering K-Means and Bisecting K-Means clustering in MLlib. Demonstrates feature preparation, elbow-method cluster selection, and interpreting cluster centres for exploratory data analysis.
>
>> [!card|section] Text Mining & NLP
>> Covers tokenisation, stop-word removal, TF-IDF feature extraction, and topic modelling with LDA (Latent Dirichlet Allocation) using Spark's `ml.feature` and `ml.clustering` modules on document corpora.
>
>> [!card|section] Collaborative Filtering (ALS)
>> Recommendation engine section using Alternating Least Squares (ALS) from MLlib. Covers the explicit vs. implicit feedback model, rating matrix factorisation, cold-start strategies, and evaluating recommendations with RMSE.
>
>> [!card|section] Monte Carlo & Neural Networks
>> Advanced applied sections: Monte Carlo simulation implemented in PySpark for parallel stochastic modelling, and a neural network section bridging MLlib's MLP classifier with deep learning frameworks accessible from a Spark cluster.

---

<span class="at-kicker">Why It Matters</span>

## Takeaways

> [!grid|cols2]
>
>> [!card|section] A complete journey from zero to ML pipelines
>> Unlike narrowly scoped tutorials, this resource walks the full path — environment, data loading, transformation, and a wide survey of ML algorithms — making it a genuine end-to-end PySpark learning resource rather than a reference snippet collection.
>
>> [!card|section] The ML Pipeline API is the right abstraction
>> The tutorial consistently uses `spark.ml` Pipelines rather than raw algorithm calls, which reflects production best practice. Understanding Transformers, Estimators, and Pipelines is the mental model that transfers to real-world Spark ML work.
>
>> [!card|section] Free and continuously maintained
>> Distributed as a living Sphinx document since 2017, the tutorial is updated to track Spark API changes. The free PDF/HTML format and open notebook examples lower the barrier to entry for practitioners without O'Reilly access.
>
>> [!card|section] Databricks Community Cloud as the sandbox
>> All demos run on Databricks Community Cloud, which is free and requires no local cluster setup. This makes the tutorial immediately actionable — readers can run every example within minutes of starting, reinforcing concepts through direct experimentation.

---

> [!tip] Who should read this
> **Data engineers and data scientists moving from pandas/scikit-learn to distributed computing** with PySpark. Particularly valuable for practitioners who need to scale ML workflows beyond single-machine memory limits. Best explored with a free Databricks Community Cloud account open alongside the document, running each notebook interactively as you read.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] People
>> [[wenqiang-feng|Wenqiang Feng]], [[matei-zaharia|Matei Zaharia]]
>
>
>> [!card] Spark
>> [[apache-spark|Apache Spark]], [[pyspark|PySpark]], [[rdd|RDDs]], [[spark-dataframe|DataFrames]], [[spark-mllib|MLlib]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]
