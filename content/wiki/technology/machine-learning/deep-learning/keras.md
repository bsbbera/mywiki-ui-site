---
title: Keras
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Keras
  - TensorFlow Keras
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - Keras
  - TensorFlow
  - NeuralNetworks
banner: https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Keras is an API designed for human beings, not machines."
> <cite>— François Chollet, Keras creator</cite>

---

<span class="at-kicker">Deep Learning · Framework</span>

# Keras

<p class="at-lead">
Keras is the high-level API for TensorFlow (and formerly Theano, CNTK) that makes building,
training, and deploying neural networks accessible. Its design philosophy prioritises developer
speed and clarity: simple models are one-line compositions, complex models are directed
acyclic graphs, and everything from callbacks to distributed training is explicit and
inspectable. Since TensorFlow 2.0, Keras is the official frontend for Google's deep-learning
framework.
</p>

<span class="at-stat">sequential</span> &nbsp;·&nbsp; <span class="at-stat">functional</span> &nbsp;·&nbsp; <span class="at-stat">subclassing</span> &nbsp;·&nbsp; <span class="at-mark">three APIs, one framework</span>

<span class="at-kicker">Sequential API</span>

## Stacks of Layers

The simplest way to build a model — a linear stack of layers:

```python
import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Flatten(input_shape=[28, 28]),
    keras.layers.Dense(300, activation='relu'),
    keras.layers.Dense(100, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    loss='sparse_categorical_crossentropy',
    optimizer='sgd',
    metrics=['accuracy']
)

history = model.fit(X_train, y_train, epochs=30,
                    validation_data=(X_valid, y_valid))
```

> [!info] When to use Sequential
> Use when your model is a single-input, single-output stack with no shared layers, branching,
> or residual connections. It is the fastest API to write and the easiest to debug.

---

<span class="at-kicker">Functional API</span>

## Multi-Input, Multi-Output, and Shared Layers

The Functional API treats layers as functions — you call them on tensors to build arbitrary
DAGs:

```python
input_a = keras.layers.Input(shape=[5], name="wide_input")
input_b = keras.layers.Input(shape=[6], name="deep_input")

hidden1 = keras.layers.Dense(30, activation="relu")(input_b)
hidden2 = keras.layers.Dense(30, activation="relu")(hidden1)
concat = keras.layers.concatenate([input_a, hidden2])
output = keras.layers.Dense(1, name="output")(concat)

model = keras.Model(inputs=[input_a, input_b], outputs=[output])
model.compile(loss="mse", optimizer=keras.optimizers.SGD(learning_rate=1e-3))
```

> [!tip] Wide & Deep architectures
> The functional API makes it trivial to implement wide-linear + deep-neural models, multi-task
> learning with shared encoders, and attention mechanisms — all impossible in pure Sequential.

---

<span class="at-kicker">Subclassing API</span>

## Full Control with Python Classes

For dynamic models — where the architecture depends on runtime data — subclass `keras.Model`:

```python
class WideAndDeepModel(keras.Model):
    def __init__(self, units=30, activation="relu", **kwargs):
        super().__init__(**kwargs)
        self.hidden1 = keras.layers.Dense(units, activation=activation)
        self.hidden2 = keras.layers.Dense(units, activation=activation)
        self.main_output = keras.layers.Dense(1)
        self.aux_output = keras.layers.Dense(1)

    def call(self, inputs):
        input_a, input_b = inputs
        hidden1 = self.hidden1(input_b)
        hidden2 = self.hidden2(hidden1)
        concat = keras.layers.concatenate([input_a, hidden2])
        return self.main_output(concat), self.aux_output(hidden2)

model = WideAndDeepModel(30, activation="relu")
```

> [!warning] Subclassing trade-offs
> Full flexibility, but you lose static graph optimisation, cannot easily save/restore by
> architecture, and debugging is harder. Use only when the Functional API is insufficient.

---

<span class="at-kicker">Training Workflow</span>

## Compilation, Fitting, and Evaluation

### Compilation

| Argument | Purpose | Common choices |
|----------|---------|----------------|
| `loss` | Objective to minimise | `mse`, `binary_crossentropy`, `sparse_categorical_crossentropy` |
| `optimizer` | Update rule | `sgd`, `adam`, `rmsprop`, `adamw` |
| `metrics` | Additional tracking | `accuracy`, `precision`, `recall`, `mae` |

### Callbacks

```python
checkpoint_cb = keras.callbacks.ModelCheckpoint(
    "best_model.h5", save_best_only=True
)

early_stopping_cb = keras.callbacks.EarlyStopping(
    patience=10, restore_best_weights=True
)

tensorboard_cb = keras.callbacks.TensorBoard(
    log_dir="./logs", histogram_freq=1
)

history = model.fit(
    X_train, y_train,
    epochs=100,
    validation_data=(X_valid, y_valid),
    callbacks=[checkpoint_cb, early_stopping_cb, tensorboard_cb]
)
```

> [!tip] Callback order matters
> EarlyStopping with `restore_best_weights=True` is usually the last callback — it reverts
> weights after training ends. ModelCheckpoint saves during training. TensorBoard logs metrics
> every epoch.

---

<span class="at-kicker">Saving & Loading</span>

## Persistence Strategies

| Format | Scope | Best For |
|--------|-------|----------|
| `.h5` / `.keras` | Full model (architecture + weights + compile config) | Deployment, sharing |
| `SavedModel` (default) | Full model + custom objects | TensorFlow Serving |
| Weights only | `.weights.h5` | Transfer learning, fine-tuning |

```python
# Save full model
model.save("model.keras")
loaded_model = keras.models.load_model("model.keras")

# Save weights only
model.save_weights("weights.weights.h5")
model.load_weights("weights.weights.h5")

# Architecture-only (JSON / YAML)
json_config = model.to_json()
new_model = keras.models.model_from_json(json_config)
```

---

<span class="at-kicker">Custom Components</span>

## Extending Keras

### Custom layer

```python
class ResidualBlock(keras.layers.Layer):
    def __init__(self, units, activation="relu", **kwargs):
        super().__init__(**kwargs)
        self.dense = keras.layers.Dense(units, activation=activation)
        self.bn = keras.layers.BatchNormalization()

    def call(self, inputs):
        return self.bn(self.dense(inputs)) + inputs   # residual connection
```

### Custom loss / metric

```python
def root_mean_squared_error(y_true, y_pred):
    return tf.sqrt(tf.reduce_mean(tf.square(y_pred - y_true)))

model.compile(optimizer="adam", loss=root_mean_squared_error)
```

> [!info] Three APIs, choose wisely
> | API | Use when | Flexibility | Debuggability |
> |-----|----------|-------------|---------------|
> | Sequential | Single input/output stack | Low | High |
> | Functional | Multi-input, shared layers, DAGs | Medium | Medium |
> | Subclassing | Dynamic loops, conditional branches | High | Low |

## Interesting facts

- Keras was originally a standalone library (2015) supporting TensorFlow, Theano, and CNTK
  backends. It merged into TensorFlow in 2017 and became the official high-level API in 2019.
- François Chollet designed Keras after finding existing frameworks (Caffe, Torch 7) too
  verbose for rapid experimentation. The name comes from the Greek word for "horn"
  (κέρας), evoking the idea of a gateway or interface.
- The `tf.keras` implementation handles over 1,500 GitHub issues per release cycle — testament
> to both its popularity and the complexity of maintaining a universal deep-learning API.

## Interview questions

1. What are the three Keras APIs, and when would you use each?
2. How do you implement a model with two inputs and two outputs in Keras?
3. What is the difference between `save()` and `save_weights()`? When would you use each?
4. Explain how EarlyStopping with `restore_best_weights=True` works.
5. How would you create a custom loss function in Keras?
6. What are the trade-offs of the Subclassing API compared to the Functional API?

## Related pages

> [!grid]
>
>> [!card] Deep Learning
>> [[neural-networks|Neural Networks]] · [[deep-learning|Deep Learning]] · [[optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Architectures
>> [[transformers|Transformers]] · [[cnn|CNN]] · [[rnn-lstm-gru|RNNs & LSTMs]] · [[autoencoders-gans|Autoencoders & GANs]]
>
>> [!card] Python & Tools
>> [[../../tools/python/python-patterns|Python Patterns]] · [[../../tools/python/pandas-patterns|Pandas Patterns]]
>
>> [!card] MLOps
>> [[../../mlops/mlops|MLOps]] · [[../../mlops/deployment-patterns|Deployment Patterns]] · [[../../mlops/ml-pipeline|ML Pipelines]]
