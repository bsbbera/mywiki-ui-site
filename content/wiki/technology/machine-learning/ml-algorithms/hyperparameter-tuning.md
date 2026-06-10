---
title: Hyperparameter Tuning
Created:
  - 2026-06-08
date modified: Sunday, June 8th 2026, 12:03:00 pm
aliases:
  - Hyperparameter Tuning
  - Grid Search
  - Random Search
  - Bayesian Optimisation
  - Model Selection
category: Machine Learning
tags:
  - MachineLearning
  - Optimisation
  - ModelSelection
  - DataScience
banner:
publish: true
---

> "There are no solutions, only trade-offs."
> <cite>— Thomas Sowell</cite>

---

**Hyperparameters** are parameters whose values are set before learning begins — they control the learning process itself. Unlike model parameters (weights), hyperparameters are not learned from data and must be tuned manually or automatically. Proper tuning can make the difference between a mediocre and a state-of-the-art model (source: DataScienceNotes-master).

> Hyperparameters are not updated during training and are not "scalable" — you cannot simply add more data to find better values.

---

## Grid search

Exhaustively searches all combinations of hyperparameter values in a specified grid.

```python
from sklearn.model_selection import GridSearchCV

param_grid = [
    # 12 combinations (3 × 4)
    {'n_estimators': [3, 10, 30], 'max_features': [2, 4, 6, 8]},
    # 6 combinations (2 × 3) with bootstrap=False
    {'bootstrap': [False], 'n_estimators': [3, 10], 'max_features': [2, 3, 4]},
]

# Total: (12 + 6) × 5 folds = 90 training rounds
grid = GridSearchCV(
    RandomForestRegressor(random_state=42),
    param_grid,
    cv=5,
    scoring='neg_mean_squared_error',
    return_train_score=True,
    n_jobs=-1
)
grid.fit(X, y)
print(grid.best_params_)
print(grid.best_score_)
```

| Pros | Cons |
| --- | --- |
| Exhaustive — guaranteed to find best combination in grid | Computationally expensive; exponential growth with dimensions |
| Easy to understand and implement | Wastes time on unimportant hyperparameters |

---

## Randomised search

Samples a fixed number of random hyperparameter combinations from a distribution.

> In practice, random search often finds models nearly as good as grid search in a fraction of the time — most hyperparameters have little impact; only a few matter.

```python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

param_distribs = {
    'n_estimators': randint(low=1, high=200),
    'max_features': randint(low=1, high=8),
    'max_depth': randint(low=3, high=20),
    'min_samples_leaf': randint(low=1, high=20),
}

rnd_search = RandomizedSearchCV(
    RandomForestRegressor(random_state=42),
    param_distributions=param_distribs,
    n_iter=10,      # only 10 random combinations
    cv=5,
    scoring='neg_mean_squared_error',
    random_state=42,
    n_jobs=-1
)
rnd_search.fit(X, y)
```

| Pros | Cons |
| --- | --- |
| Much faster than grid search | Not exhaustive — may miss the absolute best combination |
| Explores a wider range of values | Results can vary between runs |

---

## Bayesian optimisation

A more intelligent approach that builds a **probabilistic model** of the objective function (e.g., validation score) and uses it to select the most promising hyperparameters to evaluate next.

### How it works

1. Evaluate a few random hyperparameter sets.
2. Fit a **surrogate model** (e.g., Gaussian Process) to the observed scores.
3. Use an **acquisition function** (e.g., Expected Improvement) to pick the next most promising point.
4. Evaluate and update the surrogate model.
5. Repeat until budget exhausted.

### Libraries

| Library | Framework | Notes |
| --- | --- | --- |
| **Optuna** | Any | State-of-the-art; pruning, multi-objective, distributed |
| **Hyperopt** | Any | Early pioneer; TPE algorithm |
| **Scikit-optimize** | sklearn | Built for sklearn models |
| **Ray Tune** | Any | Distributed; integrates with MLflow |

```python
import optuna

def objective(trial):
    n_estimators = trial.suggest_int('n_estimators', 50, 500)
    max_depth = trial.suggest_int('max_depth', 3, 20)
    min_samples_leaf = trial.suggest_int('min_samples_leaf', 1, 20)

    clf = RandomForestClassifier(
        n_estimators=n_estimators,
        max_depth=max_depth,
        min_samples_leaf=min_samples_leaf,
        random_state=42
    )
    score = cross_val_score(clf, X, y, cv=5, scoring='f1').mean()
    return score

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)
print(study.best_params)
```

---

## Early stopping

Halts training when validation performance stops improving, saving computation.

```python
import xgboost as xgb

xgb_reg = xgb.XGBRegressor(n_estimators=1000, learning_rate=0.05)
xgb_reg.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    early_stopping_rounds=50,
    verbose=False
)
# Training stops if validation error doesn't improve for 50 consecutive rounds
```

---

## Key hyperparameters by algorithm

| Algorithm | Most impactful hyperparameters |
| --- | --- |
| **Random Forest** | `n_estimators`, `max_depth`, `max_features`, `min_samples_leaf` |
| **XGBoost / LightGBM** | `learning_rate`, `max_depth`, `n_estimators`, `subsample`, `colsample_bytree`, `reg_alpha`, `reg_lambda` |
| **SVM** | `C`, `kernel`, `gamma` |
| **KNN** | `n_neighbors`, `weights`, `metric` |
| **Neural Networks** | `learning_rate`, `batch_size`, `hidden_layer_sizes`, `dropout`, `epochs` |

---

## Interview questions

1. What is the difference between a model parameter and a hyperparameter?
2. When is randomised search preferred over grid search?
3. How does Bayesian optimisation differ from grid and random search?
4. What is early stopping, and how does it prevent overfitting?
5. Why is 5-fold CV commonly used for hyperparameter evaluation?

## Related pages

> [!grid]
>
>> [!card] Cross Validation
>> [[../ml-fundamentals/cross-validation|Cross Validation]]
>
>> [!card] Ensembles
>> [[gradient-boosting|Gradient Boosting]], [[random-forest|Random Forest]]
>
>> [!card] Deep Learning
>> [[../deep-learning/optimisation-algorithms|Optimisation Algorithms]]
