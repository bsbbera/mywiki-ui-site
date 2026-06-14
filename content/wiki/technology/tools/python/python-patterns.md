---
title: Python Language Patterns
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Python Patterns
  - Python Closures
  - Python Decorators
  - Python Context Managers
  - Python Inheritance
category: Technology
tags:
  - Python
  - Programming
  - LanguagePatterns
  - Tools
banner: https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Python's simplicity is not an accident — it is the result of 30 years of deliberate design."
> <cite>— Guido van Rossum</cite>

---

<span class="at-kicker">Tools · Python</span>

# Python Language Patterns

<p class="at-lead">
Python's power lies not in its syntax but in its patterns: closures that capture state,
decorators that transform behaviour, context managers that guarantee cleanup, and inheritance
mechanisms that compose functionality. Mastering these patterns separates fluent Python from
merely working Python — and they appear everywhere in data-science and MLOps codebases.
</p>

<span class="at-stat">closures</span> &nbsp;·&nbsp; <span class="at-stat">decorators</span> &nbsp;·&nbsp; <span class="at-stat">context managers</span> &nbsp;·&nbsp; <span class="at-mark">elegant power</span>

<span class="at-kicker">Closures</span>

## Functions That Remember Their Environment

A **closure** is a function that remembers the values in its enclosing scope, even when that
scope no longer exists.

```python
def make_multiplier(factor):
    """Returns a closure that multiplies by factor."""
    def multiplier(x):
        return x * factor      # factor is captured from enclosing scope
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
```

> [!info] How closures work
> When `make_multiplier` is called, a new scope is created with `factor` bound to a value.
> The inner `multiplier` function retains a reference to that scope. When `double` is called
> later, it looks up `factor` in the captured scope — not the current global scope.

### Late-binding gotcha

Closures in loops capture the *variable*, not the *value*:

```python
# BUG: All functions return 9
functions = [lambda x: i * x for i in range(10)]

# FIX: Default argument captures value at definition time
functions = [lambda x, i=i: i * x for i in range(10)]
```

---

<span class="at-kicker">Decorators</span>

## Transforming Functions Without Changing Them

A **decorator** is a function that takes another function as input and extends its behaviour
without permanently modifying it.

```python
import functools
import time

def timer(func):
    @functools.wraps(func)    # preserve original function metadata
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function(n):
    time.sleep(n)
    return n * 2
```

> [!tip] `functools.wraps`
> Without `@functools.wraps`, `slow_function.__name__` would be `"wrapper"` and its docstring
> would be lost. Always use `wraps` when writing decorators.

### Decorators with arguments

To accept arguments, add a third layer:

```python
def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet():
    print("Hello")
```

### Class decorators

Decorators work on classes too:

```python
def singleton(cls):
    """Ensures only one instance of a class exists."""
    instance = None
    @functools.wraps(cls)
    def wrapper(*args, **kwargs):
        nonlocal instance
        if instance is None:
            instance = cls(*args, **kwargs)
        return instance
    return wrapper

@singleton
class DatabaseConnection:
    pass
```

---

<span class="at-kicker">Context Managers</span>

## Guaranteed Cleanup with `with`

The `with` statement ensures that setup and teardown code always runs, even if exceptions occur.

```python
# File handling
with open('data.csv', 'r') as f:
    contents = f.read()        # f is automatically closed

# Locking
with threading.Lock():
    update_shared_state()        # lock released even if update() raises
```

### Writing a context manager

Using the `contextlib` decorator:

```python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Acquiring {name}")
    resource = acquire(name)
    try:
        yield resource
    finally:
        print(f"Releasing {name}")
        release(resource)

with managed_resource("database") as db:
    db.query("SELECT * FROM users")
# "Releasing database" prints automatically
```

> [!info] Context managers in ML
> Use context managers for:
> - GPU memory allocation / deallocation
> - Experiment tracking (start / end runs in MLflow)
> - Distributed training locks
> - Temporary file/directory cleanup

---

<span class="at-kicker">Inheritance</span>

## `super()` and Method Resolution

`super()` provides access to methods and properties of a parent (or sibling) class in a
multiple-inheritance hierarchy.

```python
class BaseModel:
    def __init__(self, name):
        self.name = name

class TrainableModel(BaseModel):
    def __init__(self, name, epochs):
        super().__init__(name)          # delegate to parent
        self.epochs = epochs

model = TrainableModel("resnet", 100)
```

### Cooperative multiple inheritance

`super()` follows the **method resolution order (MRO)**, which is linearised via the
**C3 algorithm**:

```python
class A:
    def greet(self):
        print("A")

class B(A):
    def greet(self):
        print("B")
        super().greet()

class C(A):
    def greet(self):
        print("C")
        super().greet()

class D(B, C):
    def greet(self):
        print("D")
        super().greet()

D().greet()   # D → B → C → A (MRO: D, B, C, A)
```

> [!warning] Diamond problem
> In multiple inheritance, `super()` ensures each parent method is called exactly once,
> avoiding the diamond problem that plagues languages without MRO linearisation.

---

<span class="at-kicker">Copying</span>

## Deep vs. Shallow Copy

| | Shallow copy | Deep copy |
|---|--------------|-----------|
| **Mechanism** | Creates new container; references same inner objects | Recursively copies all nested objects |
| **Module** | `copy.copy()` | `copy.deepcopy()` |
| **Effect on nested objects** | Changes affect original | Changes are isolated |
| **Speed** | Fast | Slower (recursive) |
| **Memory** | Shared | Duplicated |

```python
import copy

original = [[1, 2, 3], [4, 5, 6]]

shallow = copy.copy(original)
shallow[0][0] = 99
print(original[0][0])   # 99 — mutated!

deep = copy.deepcopy(original)
deep[0][0] = 100
print(original[0][0])   # 99 — unchanged
```

> [!tip] When to use each
> - **Shallow**: Immutable nested objects (tuples of strings, frozensets), or when you
>   intentionally want shared references.
> - **Deep**: Mutable nested structures that must be fully independent (model configs,
>   nested feature dictionaries).

---

<span class="at-kicker">NamedTuple</span>

## Lightweight Structured Data

`NamedTuple` creates tuple-like objects with named fields — readable, immutable, and lightweight.

```python
from typing import NamedTuple

class Colour(NamedTuple):
    red: int
    green: int
    blue: int

white = Colour(255, 255, 255)
print(white.red)        # 255
print(white[0])         # 255 — still indexable as tuple

# Unpacking
r, g, b = white
```

> [!info] NamedTuple vs dataclass
> | | NamedTuple | `@dataclass` |
> |---|-----------|------------|
> | Immutable | Yes (always) | Optional (`frozen=True`) |
> | Memory | Small (tuple overhead) | Larger (class overhead) |
> | Methods | Can add methods | Full class features |
> | Inheritance | Limited | Full |
>
> Use NamedTuple for simple, immutable data carriers. Use dataclass for mutable objects or
> when you need full class behaviour.

### Modern syntax (Python 3.6+)

```python
from typing import NamedTuple

class Point(NamedTuple):
    x: float
    y: float
    z: float = 0.0          # default values supported
```

## Interview questions

1. What is a closure, and what problem does it solve? Give a practical example.
2. Why should you use `functools.wraps` when writing decorators?
3. Explain the difference between deep copy and shallow copy with an example.
4. How does `super()` work in multiple inheritance? What is the MRO?
5. When would you prefer a `NamedTuple` over a `@dataclass`?
6. Write a context manager that measures and logs the execution time of a block of code.

## Related pages

> [!grid]
>
>> [!card] Python Ecosystem
>> [[pandas-patterns|Pandas Patterns]] · [[../../machine-learning/ml-fundamentals/feature-engineering|Feature Engineering]]
>
>> [!card] Tools
>> [[../Tools Home|Tools Home]] · [[docker|Docker]] · [[kubernetes|Kubernetes]]
>
>> [!card] Software Engineering
>> [[../../software-engineering/Software Engineering Home|Software Engineering]] · [[../../software-engineering/rest-api|REST API]]
>
>> [!card] Data Processing
>> [[../../machine-learning/deep-learning/keras|Keras]] · [[../../machine-learning/ml-fundamentals/data-cleaning|Data Cleaning]]
