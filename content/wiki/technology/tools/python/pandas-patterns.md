---
title: Pandas Patterns
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Pandas
  - Pandas Patterns
  - Data Manipulation
category: Technology
tags:
  - Python
  - Pandas
  - DataProcessing
  - Tools
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Pandas is the workhorse of data manipulation — when you know its patterns, you stop fighting
> the library and start harnessing it."
> <cite>— Data engineering aphorism</cite>

---

<span class="at-kicker">Tools · Python · Data Processing</span>

# Pandas Patterns

<p class="at-lead">
Pandas is the dominant library for tabular data manipulation in Python. Beyond the basics of
filtering and grouping, productive data scientists rely on vectorised operations, method
chaining, memory-efficient types, and apply/map strategies that keep computation in C rather
than Python. These patterns separate exploratory data analysis that finishes in seconds from
scripts that run overnight.
</p>

<span class="at-stat">vectorised</span> &nbsp;·&nbsp; <span class="at-stat">method chaining</span> &nbsp;·&nbsp; <span class="at-stat">memory efficient</span> &nbsp;·&nbsp; <span class="at-mark">stay in C</span>

<span class="at-kicker">Vectorisation</span>

## Prefer Native Operations Over Loops

Pandas Series and DataFrames are backed by NumPy arrays. Vectorised operations execute in
compiled C — orders of magnitude faster than Python `for` loops or `.iterrows()`.

| Pattern | Anti-pattern | Speedup |
|---------|-----------|---------|
| `df['a'] + df['b']` | `[row.a + row.b for _, row in df.iterrows()]` | 50–200x |
| `df['col'].str.lower()` | `[x.lower() for x in df['col']]` | 20–50x |
| `df.query('a > 0')` | `df[df.apply(lambda r: r.a > 0, axis=1)]` | 5–10x |
| `df.groupby('cat').agg({'val': 'sum'})` | Manual dictionary accumulation | 20–100x |

> [!tip] The vectorisation rule
> If you can express it as a DataFrame/Series method or NumPy ufunc, do so. If you need
> element-wise logic, use `.apply()` (still faster than loops). Reserve Python loops only
> for complex stateful logic.

---

<span class="at-kicker">Method Chaining</span>

## Readable Pipelines

Modern Pandas supports method chaining with `.pipe()`, `.assign()`, and `.query()` for
readable, reproducible data pipelines:

```python
result = (
    df
    .query("age >= 18 and country == 'US'")
    .assign(income_log=lambda x: np.log1p(x.income))
    .groupby("state")
    .agg(
        mean_income=("income_log", "mean"),
        median_age=("age", "median"),
        count=("user_id", "nunique")
    )
    .sort_values("mean_income", ascending=False)
    .reset_index()
    .pipe(lambda d: d[d["count"] >= 100])   # filter small groups
)
```

> [!info] Why chain?
> - Intermediate DataFrames are never named — no pollution of the namespace
> - Each line is a single, testable transformation
> - The pipeline reads top-to-bottom, like a Unix pipe

---

<span class="at-kicker">Apply & Map</span>

## Row-Wise and Element-Wise Operations

When vectorisation is impossible, use the right apply variant:

```python
# Apply a function to one column (element-wise)
df['category'] = df['score'].apply(lambda x: 'high' if x > 90 else 'low')

# Apply to multiple columns (row-wise)
df['combined'] = df.apply(lambda row: f"{row['first']}_{row['last']}", axis=1)

# Apply to multiple columns, unpack result
df[['feature_a', 'feature_b']] = df.apply(
    lambda row: extract_features(row['text']), axis=1, result_type='expand'
)

# Vectorised alternative for simple cases
df['category'] = np.where(df['score'] > 90, 'high', 'low')
```

> [!warning] `axis=1` is slow
> `df.apply(..., axis=1)` crosses the Python-C boundary for every row. For simple logic,
> use `np.select`, `np.where`, or boolean indexing instead.

---

<span class="at-kicker">Memory Efficiency</span>

## Shrinking DataFrames

Large datasets often waste memory on suboptimal types:

| Default type | Optimised type | Savings | Condition |
|------------|---------------|---------|-----------|
| `int64` | `int32` / `int16` / `int8` | 50–87% | Values fit in smaller range |
| `float64` | `float32` | 50% | Precision tolerance |
| `object` (strings) | `category` | 70–90% | Low cardinality strings |
| `object` (strings) | `string[pyarrow]` | 30–50% | Large text data |
| `bool` | `bool` | — | Already minimal |

```python
# Downcast numerics automatically
df = df.convert_dtypes()          # infer nullable types

# Categorise low-cardinality columns
for col in df.select_dtypes(include='object'):
    if df[col].nunique() / len(df) < 0.5:
        df[col] = df[col].astype('category')

# Read CSV with optimised types
df = pd.read_csv('data.csv', dtype={
    'user_id': 'int32',
    'category': 'category',
    'score': 'float32'
})
```

> [!tip] Memory before speed
> A DataFrame that fits in RAM is faster than one that triggers swap. Optimise memory first,
> then profile for computational bottlenecks.

---

<span class="at-kicker">Advanced Patterns</span>

## Merge, Pivot, and Window

### Merging on ranges

```python
# As-of merge: match each transaction to the most recent price before it
df = pd.merge_asof(
    transactions.sort_values('timestamp'),
    prices.sort_values('timestamp'),
    on='timestamp',
    direction='backward'
)
```

### Pivot tables

```python
pivot = df.pivot_table(
    values='sales',
    index='region',
    columns='quarter',
    aggfunc='sum',
    fill_value=0
)
```

### Rolling and expanding windows

```python
df['rolling_mean'] = df['value'].rolling(window=7, min_periods=1).mean()
df['expanding_max'] = df['value'].expanding().max()
```

### MultiIndex for hierarchical data

```python
df.set_index(['country', 'city', 'date'], inplace=True)
df.loc[('US', 'NYC')]           # select all NYC rows
```

---

<span class="at-kicker">Performance</span>

## Scaling to Larger Data

| Strategy | When to use |
|----------|-------------|
| **Chunked reading** | `pd.read_csv(..., chunksize=100000)` | File exceeds RAM |
| **Dask** | `dask.dataframe` | Out-of-core / distributed processing |
| **Polars** | Rust-based DataFrame library | 10–50x speedup on large data |
| **PyArrow** | `pd.read_csv(..., engine='pyarrow')` | Faster parsing, better strings |
| **Query pushdown** | SQL → `pd.read_sql(...)` | Let the database do the work |

> [!example] Polars as a drop-in accelerator
> ```python
> import polars as pl
> df = pl.read_csv('large_file.csv')
> result = df.filter(pl.col('score') > 90).group_by('category').agg(pl.col('value').mean())
> ```
> Polars uses lazy evaluation and a query optimiser — expressions are fused and executed
> in a single pass over the data.

## Interview questions

1. When is `.apply()` preferred over vectorised operations? When should you avoid it?
2. How would you reduce the memory footprint of a DataFrame with mixed categorical and
   numerical columns?
3. Explain the difference between `.apply(axis=0)` and `.apply(axis=1)`. Which is faster?
4. How would you merge two time-series DataFrames where timestamps do not align exactly?
5. What are the trade-offs between Pandas, Dask, and Polars for large datasets?
6. Write a method-chained pipeline that filters, creates a derived column, groups, and sorts.

## Related pages

> [!grid]
>
>> [!card] Python
>> [[python-patterns|Python Language Patterns]] · [[../../machine-learning/ml-fundamentals/feature-engineering|Feature Engineering]]
>
>> [!card] Data Processing
>> [[../../machine-learning/deep-learning/keras|Keras]] · [[../../machine-learning/ml-fundamentals/data-cleaning|Data Cleaning]]
>
>> [!card] Scale
>> [[apache-spark|Apache Spark]] · [[pyspark|PySpark]]
>
>> [!card] Storage
>> [[../../databases/Databases Home|Databases]] · [[../../data-engineering/data-storage/relational-database|Relational Databases]]
