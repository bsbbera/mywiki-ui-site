---
title: ML Explainability
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - ML Explainability
  - Model Explainability
  - LIME
  - SHAP
  - Permutation Importance
  - Partial Dependence Plot
  - Feature Importance
category: Machine Learning
tags:
  - MachineLearning
  - Explainability
  - XAI
  - DataScience
banner: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "If you can't explain it simply, you don't understand it well enough."
> <cite>— Albert Einstein</cite>

---

<span class="at-kicker">XAI · Machine Learning</span>

# ML Explainability

<p class="at-lead">
Machine learning explainability (XAI) is the study of understanding why a model makes a specific prediction. In high-stakes domains — healthcare, finance, criminal justice — predictions cannot be acted upon blindly; stakeholders need to trust and understand the reasoning behind automated decisions.
</p>

<span class="at-stat">LIME</span> · <span class="at-stat">SHAP</span> · <span class="at-stat">permutation importance</span> · <span class="at-mark">trust through transparency</span>

<span class="at-kicker">Why It Matters</span>

## Overview

| Driver | Why explainability is critical |
| --- | --- |
| **Regulatory compliance** | GDPR requires the right to explanation for automated decisions affecting individuals |
| **Trust and adoption** | Users and executives won't act on predictions they don't understand |
| **Debugging** | Understanding *why* a model fails helps fix it faster than hunting hyperparameters alone |
| **Fairness** | Exposing which features drive predictions enables detection and correction of discriminatory patterns |

<span class="at-kicker">Techniques</span>

## Explainability Methods

> [!grid|cols3]
>
>> [!card|section]
>> ###### FEATURE IMPORTANCE
>> ### *Feature* Importance
>> Indicates which variables most affect predictions. Tree-based models provide built-in importance scores (Gini impurity reduction or split frequency) via `model.feature_importances_`.
>>
>> > [!info] What vs. how
>> > Feature importance shows *what* matters globally — not *how* a feature affects the prediction (positive/negative) or any individual prediction.
>
>> [!card|section]
>> ###### PERMUTATION IMPORTANCE
>> ### *Permutation* Importance
>> Model-agnostic technique measuring the drop in score when a single feature is randomly shuffled.
>>
>> ```python
>> from sklearn.inspection import permutation_importance
>> result = permutation_importance(model, X_val, y_val, n_repeats=10)
>> ```
>>
>> **Pros:** Fast; widely understood; model-agnostic. **Cons:** Correlated features can have misleadingly low importance.
>
>> [!card|section]
>> ###### PDP
>> ### Partial Dependence *Plots*
>> Shows **how** a single feature affects the model's average prediction, holding all other features at their observed values.
>>
>> > [!warning] Independence assumption
>> > PDPs assume features are independent — in practice, features are often correlated (e.g., age and income). Use ICE plots or SHAP dependence plots as alternatives.

> [!grid|cols2]
>
>> [!card|section]
>> ###### LIME
>> ### *LIME* — Local Interpretable Model-Agnostic Explanations
>> Explains a single prediction by fitting a simple, interpretable model (e.g., linear regression) in the **local neighbourhood** of that prediction.
>>
>> - **Model-agnostic** — works with any model (neural networks, random forests, SVMs)
>> - **Local** — explains one prediction at a time, not global behaviour
>> - Perturbs input, gets predictions on perturbed samples, fits weighted linear model
>>
>> > [!tip] LIME for stakeholders
>> > Excellent for explaining a single prediction: "This loan was denied mainly because the debt-to-income ratio was 0.45 (+0.32 impact) and credit history was only 1 year (+0.18 impact)." Directly actionable.
>
>> [!card|section]
>> ###### SHAP
>> ### *SHAP* — SHapley Additive exPlanations
>> Based on **game theory** (Shapley values). Each feature is a "player"; the prediction is the "payout". SHAP distributes the payout fairly according to each feature's marginal contribution across all possible feature coalitions.
>>
>> > [!info] The Shapley intuition
>> > Shapley value = weighted average marginal contribution of a feature across all subsets of other features. Answers: "How much did this feature contribute to *this* prediction relative to the average?"
>>
>> ```python
>> import shap
>> explainer = shap.TreeExplainer(model)
>> shap_values = explainer.shap_values(X)
>> shap.summary_plot(shap_values, X)
>> ```
>>
>> > [!note] SHAP performance
>> > For tree models, `TreeExplainer` is fast (polynomial in tree depth). For other models, use `KernelExplainer` (model-agnostic but slower). XGBoost has optimised SHAP: `model.predict(X, pred_contribs=True)`.

<span class="at-kicker">Method Comparison</span>

## Choosing the Right Technique

| Technique | Scope | Model-agnostic? | Speed | Best for |
| --- | --- | --- | --- | --- |
| Feature importance | Global | No | Fast | Quick sanity check (tree models) |
| Permutation importance | Global | Yes | Medium | Validating importance robustly |
| Partial dependence plots | Global | Yes | Medium | Understanding marginal effects |
| LIME | Local | Yes | Medium | Explaining single predictions to users |
| SHAP | Local + global | Yes (TreeExplainer optimised) | Slow | Deep, principled explanations |

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the difference between global and local explainability?
2. How does permutation importance differ from built-in feature importance?
3. What is the main limitation of partial dependence plots?
4. Explain SHAP in terms of game theory.
5. When would you use LIME over SHAP?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Model Evaluation
>> [[evaluation-metrics|Evaluation Metrics]] · [[cross-validation|Cross Validation]]
>
>> [!card] Feature Work
>> [[feature-engineering|Feature Engineering]] · [[feature-selection|Feature Selection]]
>
>> [!card] Algorithms
>> [[../ml-algorithms/decision-trees|Decision Trees]] · [[../ml-algorithms/random-forest|Random Forest]] · [[../ml-algorithms/xgboost|XGBoost]]
