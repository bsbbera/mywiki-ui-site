---
title: Evaluation Metrics
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Evaluation Metrics
  - Model Evaluation
  - Classification Metrics
  - Regression Metrics
  - Confusion Matrix
  - ROC AUC
  - F1 Score
  - Precision
  - Recall
category: Machine Learning
tags:
  - MachineLearning
  - ModelEvaluation
  - DataScience
  - Metrics
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Not everything that counts can be counted, and not everything that can be counted counts."
> <cite>— William Bruce Cameron</cite>

---

<span class="at-kicker">Model Evaluation · Machine Learning</span>

# Evaluation Metrics

<p class="at-lead">
Evaluation metrics quantify how well a model performs. Choosing the right metric is critical — a model that optimises the wrong metric will fail in production even if it scores well on paper. The loss function guides training; the evaluation metric measures real-world usefulness.
</p>

<span class="at-stat">classification</span> · <span class="at-stat">regression</span> · <span class="at-stat">ranking</span> · <span class="at-mark">what gets measured gets managed</span>

<span class="at-kicker">Key Distinction</span>

## Loss vs. Evaluation

> [!info] Loss function vs. evaluation metric
> A **loss function** measures the magnitude of error during training. An **evaluation metric** measures how useful the model is for the business problem. These often differ: cross-entropy loss is minimised during training, but F1 Score or AUC is reported to stakeholders.

<span class="at-kicker">Classification Metrics</span>

## Classification Evaluation

> [!grid|cols3]
>
>> [!card|section]
>> ###### ACCURACY
>> ### *Accuracy*
>> $$\text{Accuracy} = \frac{\text{Correct}}{\text{Total}}$$
>> Use only when classes are balanced. On imbalanced data, accuracy can be misleading to the point of uselessness.
>>
>> > [!warning] The accuracy trap
>> > A fraud model predicting "not fraud" 100% of the time scores 99.9% accuracy on 0.1% fraud data while being completely useless. Always check the confusion matrix first.
>
>> [!card|section]
>> ###### PRECISION & RECALL
>> ### *Precision* & Recall
>> $$\text{Precision} = \frac{TP}{TP + FP}$$
>> $$\text{Recall} = \frac{TP}{TP + FN}$$
>> Precision focuses (minimise false positives). Recall focuses (minimise false negatives). The tradeoff is fundamental.
>
>> [!card|section]
>> ###### F1 SCORE
>> ### *F1* Score
>> $$F_1 = 2 \cdot \frac{P \cdot R}{P + R}$$
>> Harmonic mean of precision and recall. Use for imbalanced datasets — it balances both error types. Preferred over accuracy when classes are skewed.

### Confusion Matrix

|  | Predicted Negative | Predicted Positive |
| --- | --- | --- |
| **Actual Negative** | True Negative (TN) | False Positive (FP) |
| **Actual Positive** | False Negative (FN) | True Positive (TP) |

> [!example] Concrete confusion matrix walkthrough
> A medical test on 1,000 patients — 100 actually have the disease, 900 are healthy.
>
> - 80 sick patients correctly identified → **TP = 80**
> - 20 sick patients missed → **FN = 20**
> - 45 healthy patients wrongly flagged → **FP = 45**
> - 855 healthy patients correctly cleared → **TN = 855**
>
> **Precision** = 80/(80+45) = **64%** — of flagged cases, 64% are actually sick
> **Recall** = 80/(80+20) = **80%** — of actual cases, 80% are caught
> Whether to tighten precision or recall depends on the clinical cost of each error type.

### ROC and AUC

- **ROC** (Receiver Operating Characteristic) — plot of TPR (Recall) vs. FPR at every classification threshold
- **AUC** (Area Under Curve) — probability that model ranks a random positive higher than a random negative

| AUC | Interpretation |
| --- | --- |
| 1.0 | Perfect classifier |
| 0.5 | No class separation (random) |
| 0.0 | Perfectly wrong classifier |

> [!info] Sensitivity–Specificity tradeoff
> Sensitivity (Recall/TPR) and Specificity are inversely proportional — raising the decision threshold increases Specificity but decreases Sensitivity. The ROC curve traces this tradeoff.

> [!tip] Imbalanced data: prefer PR-AUC over ROC-AUC
> On severely imbalanced datasets, ROC-AUC can be optimistically high because TN dominates FPR. The Precision-Recall curve is a better indicator of minority class performance.

### Multi-class Metrics

| Metric | How it works |
| --- | --- |
| **Macro-averaged** | Compute per-class, then average (treats all classes equally) |
| **Micro-averaged** | Aggregate TP/FP/FN globally, then compute |
| **Weighted** | Macro average weighted by class support |

<span class="at-kicker">Regression Metrics</span>

## Regression Evaluation

> [!grid|cols3]
>
>> [!card|section]
>> ###### MAE
>> ### Mean Absolute *Error*
>> $$MAE = \frac{1}{N} \sum |y_j - \hat{y}_j|$$
>> Most intuitive measure of average error magnitude. Better than MSE when outliers are present — less sensitive to large errors.
>
>> [!card|section]
>> ###### MSE / RMSE
>> ### Mean Squared *Error*
>> $$MSE = \frac{1}{N} \sum (y_j - \hat{y}_j)^2$$
>> $$RMSE = \sqrt{MSE}$$
>> MSE useful for gradients (differentiable). RMSE in same units as target. Larger errors penalised disproportionately.
>
>> [!card|section]
>> ###### R²
>> ### Coefficient of *Determination*
>> $$R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}$$
>> Proportion of variance explained by the model. 0 = model explains none; 1 = explains all. Can be **negative** if model is worse than predicting the mean.

### Additional Regression Metrics

| Metric | Formula | Use Case |
| --- | --- | --- |
| **MAPE** | $\frac{1}{N} \sum \frac{\|\hat{y} - y\|}{\|y\|}$ | Percentage error for stakeholder communication (breaks at y=0) |
| **MSLE/RMSLE** | $\frac{1}{N} \sum [\log(1+\hat{y}) - \log(1+y)]^2$ | When under-prediction is worse than over-prediction |
| **Adjusted R²** | $1 - \frac{(1-R^2)(n-1)}{n-k-1}$ | Penalises unnecessary predictors when comparing models |

> [!warning] R² alone is not enough
> A model can have high R² while still violating regression assumptions (non-linear residuals, heteroscedasticity). Always plot residuals alongside reporting R².

<span class="at-kicker">Statistical Concepts</span>

## Error Types & Log Loss

| Type | Name | Description |
| --- | --- | --- |
| **Type I** | False Positive | Rejecting a true null hypothesis |
| **Type II** | False Negative | Failing to reject a false null hypothesis |

### Logarithmic Loss (Log Loss)

$$\text{LogLoss} = -\frac{1}{N} \sum_{i=1}^N \sum_{j=1}^M y_{ij} \log(p_{ij})$$

Penalises confident wrong predictions heavily. Lower is better. Particularly useful for comparing probabilistic classifiers — rewards well-calibrated confidence, not just correct labels.

> [!tip] When to use Log loss
> Prefer Log loss when the output *probability* matters — e.g., a medical risk score. A model saying "99% chance" when healthy is far worse than one saying "55%", even if both predict the same class.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. Why is accuracy misleading on imbalanced datasets? What metrics should you use instead?
2. Explain the difference between Type I and Type II error. Which is more costly depends on what?
3. What does AUC measure, and why might PR-AUC be preferred for imbalanced data?
4. When would you use RMSE over MAE? What are the trade-offs?
5. How do macro, micro, and weighted averaging differ for multi-class problems?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Validation
>> [[cross-validation|Cross Validation]] · [[imbalanced-classification|Imbalanced Classification]]
>
>> [!card] Statistics
>> [[../statistics/descriptive-statistics|Descriptive Statistics]] · [[../statistics/hypothesis-testing|Hypothesis Testing]]
>
>> [!card] Production
>> [[model-monitoring|Model Monitoring]] · [[ml-explainability|ML Explainability]]
