---
title: Operations Log
Created:
  - 2026-04-27
date modified: 2026-05-10
aliases:
  - Log
category: Log
tags:
  - log
banner:
publish: true
---

---

Append-only log of all wiki operations. Newest entries at the top.

------

## 2026-06-11 (eighteenth pass) — Paradoxes field ingest

**Operator**: Devin (CLI)
**Trigger**: User requested full ingest of 
aw/List of paradoxes.md (Wikipedia clipping, 89 KB, ~297 paradoxes) per plan.md.

### New field of knowledge activated: paradoxes/

**Hub & curated list (2)**:
- Paradoxes Home.md — field hub; veridical / falsidical / antinomy definitions, map of 17 thematic notes, link to Top 100.
- 	op-100-paradoxes.md — curated ranking of ~40 most important paradoxes across all domains.

**Thematic notes (17)** — one per topic from the raw source:
- logical-paradoxes.md — Logic + Self-reference + Vagueness (~40 paradoxes).
- mathematical-paradoxes.md — Mathematics + Infinity + Geometry & topology (~30 paradoxes).
- statistical-paradoxes.md — Statistics (~10 paradoxes). *Promoted from Mathematics sub-section for vault relevance.*
- probability-paradoxes.md — Probability (~14 paradoxes). *Promoted from Mathematics sub-section for vault relevance.*
- decision-theory-paradoxes.md — Decision theory (~12 paradoxes).
- physics-paradoxes.md — Physics + Astro + QM + Relativity + Thermodynamics (~45 paradoxes).
- iological-paradoxes.md — Biology + Health & nutrition (~20 paradoxes).
- chemical-paradoxes.md — Chemistry (~5 paradoxes).
- 	ime-travel-paradoxes.md — Time travel (~6 paradoxes).
- linguistic-ai-paradoxes.md — Linguistics & AI (~8 paradoxes).
- philosophical-paradoxes.md — Philosophy (~25 paradoxes).
- mystical-paradoxes.md — Mysticism (~4 paradoxes).
- economic-paradoxes.md — Economics (~30 paradoxes).
- perceptual-paradoxes.md — Perception (~9 paradoxes).
- political-paradoxes.md — Politics (~7 paradoxes).
- psychological-paradoxes.md — Psychology & sociology (~17 paradoxes).
- miscellaneous-paradoxes.md — Miscellaneous (~12 paradoxes).

### Cross-links added to existing vault pages (8)
- imbalanced-classification.md — Accuracy Paradox card.
- hypothesis-testing.md — False Positive Paradox & Lindley's Paradox cards.
- law-of-large-numbers.md — Gambler's Fallacy card linking to probability-paradoxes.
- survivorship-bias.md — Survivorship Paradox card linking to statistical-paradoxes.
- descriptive-statistics.md — Simpson's Paradox card.
- machine-learning.md — Moravec's Paradox card.
- science/mathematics/series.md — Zeno's Paradoxes card.
- science/mathematics/combinatorics.md — Birthday Paradox card.

### People stubs created (8)
- people/zeno-of-elea.md — pre-Socratic philosopher; Zeno's paradoxes.
- people/bertrand-russell.md — Russell's paradox, Principia Mathematica, Nobel Literature 1950.
- people/georg-cantor.md — founded set theory, transfinite numbers, diagonal argument.
- people/david-hilbert.md — Hilbert's 23 problems, Hilbert's hotel, formalism.
- people/erwin-schrodinger.md — Schrödinger equation, Schrödinger's cat; Nobel Physics 1933.
- people/enrico-fermi.md — Fermi paradox, first nuclear reactor; Nobel Physics 1938.
- people/kenneth-arrow.md — Arrow's impossibility theorem; Nobel Economics 1972.
- people/maurice-allais.md — Allais paradox; Nobel Economics 1988.

### Record updates
- wiki/index.md — added Paradoxes section (19 pages), updated People count (27 -> 35), updated concept/total counts.
- Master Home.md — added "VII · THE PUZZLES" field card, updated stats (370+ -> 390+ notes, 6 -> 7 fields).
- plan.md — all 6 batches marked COMPLETED.

### Summary
19 new concept pages created (18 thematic + hub + Top 100), 8 people stubs, 8 existing pages enriched with paradox cross-links. Dedicated paradoxes/ field now active.


## 2026-06-08 (seventeenth pass) — DataScienceNotes-master ingest

**Operator**: Devin (CLI)
**Trigger**: User requested full ingest of `raw/DataScienceNotes-master` (424 `.md` files) per `plan.md`.

### Batches executed

**Batch 1 — NLP expansion** (`technology/machine-learning/nlp/`):
- `sequence-models.md` — NEW. RNN/LSTM/Transformer architectures, attention, encoder-decoder, machine translation.
- `n-gram-model.md` — NEW. Markov assumption, smoothing, Zipf's Law, linguistic power laws.
- Updated `nlp-fundamentals.md` Related-pages grid with links to new pages.

**Batch 2 — Reinforcement Learning** (`technology/machine-learning/ml-algorithms/`):
- `reinforcement-learning.md` — NEW. MDP, Bellman equations, Q-Learning, DQN, policy gradients, exploration-exploitation.

**Batch 3 — ML fundamentals gaps** (`technology/machine-learning/ml-fundamentals/`):
- `data-labeling.md` — NEW. Process feedback, human labeling, semi-supervised, active learning, weak supervision, Snorkel.
- `classification-types.md` — NEW. Binary, multiclass, multi-label, multi-output; architecture patterns, evaluation metrics.

**Batch 4 — Mathematics** (NEW field `science/mathematics/`):
- `calculus.md` — NEW. Derivatives, integrals, chain rule, L'Hôpital's, Euler's number, exponential growth/decay, Newton's method.
- `series.md` — NEW. Summation formulae, Taylor & Maclaurin series, convergence tests, ML applications.
- `combinatorics.md` — NEW. Permutations, combinations, binomial theorem, Catalan numbers, Stirling numbers.

**Batch 5 — Probability & Statistics** (moved to `technology/machine-learning/statistics/`; originally created under `science/statistics/` then consolidated 2026-06-09):
- `random-variables.md` — NEW. Discrete/continuous RVs, PMF/PDF/CDF, expected value, LOTUS, variance, moments.
- `law-of-large-numbers.md` — NEW. WLLN, SLLN, standard error, confidence intervals, Gambler's Fallacy.
- `survivorship-bias.md` — NEW. Wald's bomber problem, invisible failures, publication bias, mitigation strategies.

**Batch 6 — Programming / Python** (`technology/tools/python/`):
- `python-patterns.md` — NEW. Closures, decorators, context managers, super()/MRO, deep/shallow copy, NamedTuple.
- `pandas-patterns.md` — NEW. Vectorisation, method chaining, apply strategies, memory optimisation, Polars/Dask.
- `keras.md` — NEW. Sequential/Functional/Subclassing APIs, callbacks, saving/loading, custom components.

**Batch 7 — Shell / CLI** (`technology/tools/`):
- `shell-toolkit.md` — NEW. grep, cut, tr, xargs, regex, pipelines, network diagnostics, shell shortcuts.
- `ssh.md` — NEW. Key-based auth, local/remote/dynamic port forwarding, ProxyJump, agent forwarding.
- `tmux.md` — NEW. Sessions, windows, panes, configuration, persistent remote workflows.

**Batch 8 — SE/CS concepts** (`technology/software-engineering/`):
- `latency-throughput.md` — NEW. Latency sources, throughput limits, Little's Law, performance vs scalability, tail latency.
- `algorithms.md` — NEW. Greedy algorithms, dynamic programming, complexity analysis, approximation, Metcalfe's Law, network effects.

**Batch 9 — Career** (NEW field `career/`):
- `career.md` — NEW. Field hub; professional development, interview prep.
- `interview-techniques.md` — NEW. STAR format, behavioural questions, salary negotiation, 30-60-90 day plans.
- `technical-interviews.md` — NEW. SQL patterns, Python coding, probability puzzles, ML system design.

**Batch 10 — Misc verify**:
- GCP/ (28 files), AWS Sagemaker, Docker, SQL/ (4 files), Research_Paper/ (2 files) — all already covered by existing wiki pages. No new pages created.

### Record updates
- `wiki/index.md` — added 22 new page entries across science/, career/, technology/ml/, technology/tools/, technology/se/; updated folder counts and statistics.
- `plan.md` — created as the ingest roadmap for this source.

### Summary
~75% of the 243 root notes mapped to existing wiki pages. Two new top-level fields created: `science/` and `career/`. 22 new concept pages created, 1 existing page updated (nlp-fundamentals.md).

---

## 2026-06-09 (sixteenth pass) — People & Books stubs + windsurf.md compliance audit

**Operator**: Devin (CLI)
**Trigger**: User requested audit of all previously ingested files against windsurf.md rules, focusing on missing People/Books stubs and Related-pages cards.

### People stubs created (8)

**Finance domain (4)**:
- `people/warren-buffett.md` — chairman of Berkshire Hathaway; Oracle of Omaha; value investing practitioner.
- `people/benjamin-graham.md` — father of value investing; *Security Analysis* & *The Intelligent Investor*; mentor to Buffett.
- `people/peter-lynch.md` — Magellan Fund manager (1977–1990); 29.2% CAGR; GARP investing; *One Up on Wall Street*.
- `people/joseph-piotroski.md` — Stanford accounting professor; creator of Piotroski F-Score (2000).

**Tech domain (4)**:
- `people/solomon-hykes.md` — creator of Docker (2013); founder dotCloud, Dagger.
- `people/mitchell-hashimoto.md` — co-founder HashiCorp; creator of Terraform, Vagrant, Vault, Consul, Nomad.
- `people/gene-kim.md` — author *The Phoenix Project*, *Accelerate*, *DevOps Handbook*; founder Tripwire.
- `people/jez-humble.md` — co-author *Continuous Delivery*, *Accelerate*; DORA metrics contributor.

### Books stubs created (5)

**Finance domain (2)**:
- `books/the-intelligent-investor.md` — Benjamin Graham (1949); Mr. Market, Margin of Safety; bible of value investing.
- `books/security-analysis.md` — Graham & Dodd (1934); founding text of fundamental analysis; earnings power value.

**Tech/DevOps domain (3)**:
- `books/the-phoenix-project.md` — Gene Kim et al. (2013); DevOps business novel; The Three Ways framework.
- `books/accelerate.md` — Forsgren, Humble, Kim (2018); DORA metrics; evidence-based DevOps research.
- `books/site-reliability-engineering.md` — Beyer et al., Google (2016); SLIs/SLOs/SLAs, error budgets, blameless postmortems.

### Existing files patched

**People & books Related-pages cards added to 8 tech files**:
`docker.md`, `kubernetes.md`, `devops-sre.md`, `terraform.md`, `rest-api.md`, `hadoop.md`, `sagemaker.md`, `sql-patterns.md`

**People & books Related-pages cards added to 13 finance files**:
`Finance Home.md`, `financial-statements.md`, `income-statement.md`, `balance-sheet.md`, `cash-flow-statement.md`,
`financial-ratios.md`, `profitability-ratios.md`, `leverage-ratios.md`, `operating-ratios.md`,
`investing.md`, `dcf-valuation.md`, `stock-analysis.md`, `valuation-ratios.md`

### index.md updated

- 8 new people entries added to the People section.
- 5 new books entries added to the Books section.
- People stubs counter updated: 18 -> 27.
- Book stubs counter updated: 6 -> 11.

---

## 2026-06-09 (fifteenth pass) — Finance field · 13 new notes across 3 sub-domains

**Operator**: Devin (CLI)
**Trigger**: User requested ingestion of Finance raw files as a new top-level field of knowledge.

### New field of knowledge activated: `finance/`

### Notes created (13)

**Hub (1)**:
- `Finance Home.md` — top-level Finance knowledge hub; overview, sub-sections, essential formulas, three-statement connection.

**Financial Statements sub-domain (4)** — `finance/financial-statements/`:
- `financial-statements.md` — hub; the three core statements, annual report structure, P&L-to-Balance-Sheet connection.
- `income-statement.md` — revenue, COGS, gross profit, SG&A, R&D, interest expense, EBITDA, operating income, PBT, PAT/Net Income.
- `balance-sheet.md` — assets (current/non-current), liabilities (current/long-term), shareholders’ equity, accounting equation, analytical signals.
- `cash-flow-statement.md` — operating/investing/financing activities, free cash flow, Balance Sheet bridge, OCF quality checks.

**Financial Ratios sub-domain (4)** — `finance/financial-ratios/`:
- `financial-ratios.md` — hub; 4 ratio families, master reference table (23 ratios), screening thresholds.
- `profitability-ratios.md` — Gross margin, EBITDA margin, PAT margin, ROE (DuPont decomposition), ROA, ROCE.
- `leverage-ratios.md` — Debt/Equity, Debt/Assets, Financial Leverage, ICR, Current Ratio.
- `operating-ratios.md` — Inventory Turnover, Inventory Days, AR Turnover, DSO, Total Asset Turnover, Working Capital Turnover.

**Investing & Valuation sub-domain (4)** — `finance/investing/`:
- `investing.md` — fundamental analysis, core/satellite allocation, risk parity, Sharpe ratio, CAPE/Shiller PE, shares outstanding, stock splits.
- `valuation-ratios.md` — EPS, P/E, PEG, P/B, P/S, EV/EBITDA, Dividend Yield; when each applies, screening workflow.
- `dcf-valuation.md` — time value of money, intrinsic value, FCF, owner’s earnings, DCF Method 1 & 2 (full worked example), terminal value, NPV, margin of safety.
- `stock-analysis.md` — 4-stage methodology, ratio screening, 18-question checklist, Piotroski Score (9 criteria), value trap warning signs.

### Design

All 13 files: full GCP-level Anthropic Touch styling (at-kicker, at-lead, at-stat, at-mark, card grids, hero/step cards, Unsplash banners, `cssclass: wide-page`). No infoboxes (financial concept pages). Source: 50+ finance raw notes synthesised into 13 hub+detail pages.

### Files modified

- `wiki/index.md` — added Finance field section (13 pages), updated folder map, concept count ~228 → ~244, total ~244 + index + log + 8 Home dashboards.
- `wiki/log.md` — this entry.

---

## 2026-06-09 (fourteenth pass) — Tech files · Docker, Kubernetes, Hadoop, DevOps/SRE, SageMaker, REST API, Terraform, SQL Patterns

**Operator**: Devin (CLI)
**Trigger**: User requested ingestion of remaining tech raw files.

### Notes created (8)

| File | Type | Description |
| --- | --- | --- |
| `technology/software-engineering/docker.md` | Tool note | Container platform — images, Dockerfile, docker-compose, volumes, networks, registries |
| `technology/software-engineering/kubernetes.md` | Tool note | Container orchestration — cluster arch, pods, deployments, services, ConfigMaps/Secrets, Ingress, HPA |
| `technology/data-engineering/hadoop.md` | Concept note | Hadoop ecosystem — HDFS, MapReduce, YARN, Hive, Pig, HBase; merged 7 raw files |
| `technology/software-engineering/devops-sre.md` | Concept note | DevOps & SRE — philosophy, SLI/SLO/SLA, error budgets, CI/CD, microservices, 12-Factor App; merged 5 raw files |
| `technology/cloud/aws/sagemaker.md` | Cloud service note | AWS SageMaker — Studio, Ground Truth, Processing, training paths, Spot training (60–70% saving), endpoints, Model Registry, Pipelines, Feature Store, Model Monitor |
| `technology/software-engineering/rest-api.md` | Concept note | REST API & SDK — REST constraints, CRUD-HTTP mapping, status codes, auth, versioning, rate limiting, REST vs GraphQL/gRPC; merged 3 raw files |
| `technology/software-engineering/terraform.md` | Tool note | HashiCorp Terraform — HCL syntax, providers, state management, init→plan→apply, modules, workspaces |
| `technology/guides/sql-patterns.md` | Guide note | SQL Patterns — 10-step execution order, window functions, ranking functions, conditional aggregation pivot, optimisation checklist; merged 6 raw files |

### Raw source merges

- `hadoop.md` ← Hadoop.md + HDFS.md + MapReduce.md + YARN.md + Hive.md + Pig.md + HBase.md (7 files)
- `devops-sre.md` ← DevOps & SRE.md + CI_CD.md + Latency vs Throughput.md + Performance vs Scalability.md + Microservices.md (5 files)
- `rest-api.md` ← API.md + REST.md + SDK.md (3 files)
- `sql-patterns.md` ← SQL Best Practices.md + SQL Ranking.md + SQL Order of Execution.md + ROW_NUMBER RANK DENSE_RANK.md + Windowing Function.md + Pivot without Pivot.md (6 files)

### Files modified

- `wiki/index.md` — added AWS section (SageMaker), expanded Software Engineering section (Docker, Kubernetes, DevOps/SRE, Terraform, REST API), added Guides section (SQL Patterns), added Hadoop to data-engineering; concept count ~221 → ~228.
- `wiki/log.md` — this entry.

---

## 2026-06-09 (thirteenth pass) — Full GCP-level redesign · All 50 ML notes

**Operator**: Devin (CLI)
**Trigger**: User requested all ML notes match the GCP note design standard (BigQuery/Dataflow quality).

### Goal

Upgrade all 50 ML concept pages from basic callout-pass style to full Anthropic Touch GCP-level design: `at-kicker` section labels, `at-lead` styled lead paragraphs, `at-stat`/`at-mark` stat bars, `[!card|section]` feature grids, `[!card|hero dark spanfull]` + `[!card|step]` hero/step cards, Unsplash banner images, `cssclass: wide-page`.

### Files redesigned (50 total)

**`deep-learning/` (10 notes)**: `deep-learning.md`, `neural-networks.md`, `optimisation-algorithms.md`, `cnn.md`, `rnn-lstm-gru.md`, `regularisation-training.md`, `transfer-learning.md`, `transformers.md`, `autoencoders-gans.md`, `bert.md`.
Note: `bert.md` given an infobox (named model, qualifies as named entity).

**`ml-fundamentals/` (15 notes)**: `machine-learning-fundamentals.md`, `supervised-learning.md`, `unsupervised-learning.md`, `evaluation-metrics.md`, `cross-validation.md`, `feature-engineering.md`, `feature-selection.md`, `data-cleaning.md`, `imbalanced-classification.md`, `outlier-detection.md`, `ml-explainability.md`, `model-monitoring.md`, `active-learning.md`, `data-leakage.md`, `experiment-tracking.md`.

**`ml-algorithms/` (12 notes)**: `ml-algorithms.md`, `decision-trees.md`, `ensemble-learning.md`, `random-forest.md`, `gradient-boosting.md`, `linear-models.md`, `svm.md`, `naive-bayes.md`, `knn.md`, `k-means.md`, `pca.md`, `association-rules.md`.

**`statistics/` (13 notes)**: `statistics.md`, `bias-variance-tradeoff.md`, `descriptive-statistics.md`, `probability-distributions.md`, `hypothesis-testing.md`, `ab-testing.md`, `entropy-information-theory.md`, `sampling.md`, `cosine-similarity.md`, `vector-norms.md`, `benfords-law.md`, `monte-carlo-simulation.md`, `mathematical-foundations-for-ml.md`.

### Design elements applied to every file

| Element | Applied |
| --- | --- |
| `banner:` Unsplash URL | ✓ all 50 files |
| `cssclass: wide-page` | ✓ all 50 files |
| `<span class="at-kicker">` section labels | ✓ all 50 files |
| `<p class="at-lead">` styled lead | ✓ all 50 files |
| `<span class="at-stat">` / `<span class="at-mark">` stat bar | ✓ all 50 files |
| `> [!grid|cols3]` + `>> [!card|section]` concept grids | ✓ all 50 files |
| `>> [!card|hero dark spanfull]` + `>> [!card|step]` | ✓ all 50 files |
| Infobox | ✓ bert.md only (named model); all other concept pages: none |
| All formulas, tables, interview questions, code, callouts | ✓ preserved verbatim |

### Files modified

- `wiki/log.md` — this entry.
- `wiki/index.md` — no structural changes needed (all pages already indexed).

---

## 2026-06-09 (twelfth pass) — Raw ingest · MLOps + NLP + Statistics sub-domains

**Operator**: Devin (CLI)
**Trigger**: User requested ingestion of all remaining `DataScienceNotes-master` raw files.

### New sub-domains created

- `technology/machine-learning/mlops/` — 5 pages covering the full ML deployment lifecycle.
- `technology/machine-learning/nlp/` — 2 pages: fundamentals hub + Word2Vec deep-dive.

### Files created (13 new notes)

**MLOps sub-domain (5)**:
- `mlops.md` — MLOps lifecycle, CI/CD/CT, data-centric vs model-centric, maturity model. Source: MLOPs.md + Machine Learning Life Cycle - MLOPs.md + Data - MLOPs.md + Deployment - MLOPs.md + Monitoring - MLOPS.md + ML Metadata.md + ML Pipelines.md + Requirement Phase - MLOPs.md.
- `deployment-patterns.md` — Blue-Green, Canary, Shadow, Champion-Challenger, Rolling; comparison table + when-to-use. Source: Deployment Patterns.md + Blue Green Deployment.md + Canary Deployment.md + Shadow Deployment.md + Champion Challenger.md.
- `ci-cd-ml.md` — CI/CD for ML, 6-stage pipeline, automation levels. Source: Continuous Integration & Deployment.md.
- `model-lifecycle.md` — model degradation (slow/fast), scaling strategies, retirement. Source: Model Degradation.md + Model Scaling.md.
- `kubeflow.md` — Tool note (infobox). Kubeflow KFP, training operators, model serving. Source: KubeFlow.md.

**NLP sub-domain (2)**:
- `nlp-fundamentals.md` — Full preprocessing pipeline, TF-IDF, word embeddings, information retrieval, topic modelling. Source: NLP Basic Terminology.md + Tokenization - NLP.md + Stemming and Lemmatization.md + Stopwords.md + TF-IDF.md + Inverted Index.md + Information Retreival.md + Levenshtein Distance.md + Latent Dirichlet Allocation - LDA.md + Topic Modeling.md + Topic Coherence.md.
- `word2vec.md` — CBOW vs Skip-Gram, negative sampling, vector arithmetic. Source: Word2Vec.md.

**ML Fundamentals additions (2)**:
- `concept-drift.md` — Concept drift vs data drift, detection methods (PSI, KS, Page-Hinkley). Source: Concept Drift.md + Data Drift.md.
- `business-metrics-ml.md` — Churn analysis, CLV, uplift modelling. Source: Churn Analysis.md + Customer Lifetime Value.md + Market Response Model.md.

**Statistics additions (3)**:
- `central-limit-theorem.md` — CLT, Law of Large Numbers, sampling distributions. Source: Central Limit Theorem.md + Law of Large Numbers (LLN).md.
- `time-series.md` — Decomposition, ARIMA, exponential smoothing, RNN/LSTM forecasting. Source: ARIMA.md + Time Series.md + Exponential Smoothing.md.
- `multi-armed-bandits.md` — ε-Greedy, UCB, Thompson Sampling, contextual bandits. Source: Multi-Armed Bandits.md.

**Deep Learning addition (1)**:
- `language-models.md` — N-gram, neural LMs, seq2seq, machine translation. Source: Language Model.md + N-Gram Model.md + Machine Translation.md.

### Files modified

- `wiki/index.md` — added MLOps sub-domain (5 pages), NLP sub-domain (2 pages), 6 ML/stats additions; concept count updated ~170 → ~186; total ~208 → ~221.
- `wiki/log.md` — this entry.

### Raw files evaluated but not duplicated

`RoBERTa.md`, `GAN.md`, `Confidence Interval.md` — content already well-covered in existing `bert.md`, `autoencoders-gans.md`, `hypothesis-testing.md`.

---

## 2026-06-09 (eleventh pass) — Design pass · All ML notes redesigned + 3 new notes

**Operator**: Devin (CLI)
**Trigger**: User requested continuation; all existing ML notes redesigned and 3 new notes created.

### Goal

Reduce code-block density across all 47 ML concept pages (4 sub-domains) while preserving all conceptual content — formulas, tables, interview questions, and related-page grids. Replace matplotlib visualisation blocks, long boilerplate training loops, and trivial import-only snippets with `[!info]`, `[!tip]`, `[!warning]`, and `[!example]` callouts. Keep short, API-illustrative snippets (≤ 4 lines) where they add genuine value.

### Files redesigned (47 existing notes across 4 sub-domains)

**`deep-learning/` (9 notes)**: `deep-learning.md`, `neural-networks.md`, `optimisation-algorithms.md`, `cnn.md`, `rnn-lstm-gru.md`, `regularisation-training.md`, `transfer-learning.md`, `transformers.md`, `autoencoders-gans.md`. Key removals: 30-line Perceptron class, Rosenbrock matplotlib block, 65-line LeNet/ModernCNN dual class, vanilla RNN numpy class, EarlyStopping class, MultiHeadAttention class, PositionalEncoding + matplotlib, full VAE class, 45-line GAN training loop, SimpleDNN block.

**`ml-fundamentals/` (13 notes)**: `machine-learning-fundamentals.md`, `supervised-learning.md`, `unsupervised-learning.md`, `evaluation-metrics.md`, `cross-validation.md`, `feature-engineering.md`, `feature-selection.md`, `data-cleaning.md`, `imbalanced-classification.md`, `outlier-detection.md`, `ml-explainability.md`, `model-monitoring.md`, `active-learning.md`. **101 callouts added.**

**`ml-algorithms/` (12 notes)**: `ml-algorithms.md`, `decision-trees.md`, `ensemble-learning.md`, `random-forest.md`, `gradient-boosting.md`, `linear-models.md`, `svm.md`, `naive-bayes.md`, `knn.md`, `k-means.md`, `pca.md`, `association-rules.md`. **76 callouts added.** Fixed malformed `[!card>` tag in association-rules.md.

**`statistics/` (13 notes)**: `statistics.md`, `bias-variance-tradeoff.md`, `descriptive-statistics.md`, `probability-distributions.md`, `hypothesis-testing.md`, `ab-testing.md`, `entropy-information-theory.md`, `sampling.md`, `cosine-similarity.md`, `vector-norms.md`, `benfords-law.md`, `monte-carlo-simulation.md`, `mathematical-foundations-for-ml.md`. ~100 lines of matplotlib code removed.

### New notes created (3)

- `deep-learning/bert.md` — BERT architecture (Base/Large), MLM + NSP pre-training, fine-tuning tasks, descendants (RoBERTa, ALBERT, DistilBERT, SpanBERT, ELECTRA, DeBERTa), limitations.
- `ml-fundamentals/data-leakage.md` — leaky predictors, leaky validation strategies, detection red flags, prevention checklist.
- `ml-fundamentals/experiment-tracking.md` — what to track, MLflow/W&B/TensorBoard/DVC comparison, core workflows, anti-patterns.

### Files modified

- `wiki/index.md` — added `bert`, `data-leakage`, `experiment-tracking` entries; updated concept count (~167 → ~170); total (~205 → ~208); updated `date modified`.
- `wiki/log.md` — this entry.

### Next

Full GCP-level redesign of all ML notes (at-kicker, at-lead, at-stat, [!card|section] grids, Unsplash banners) + ingestion of remaining DataScienceNotes-master raw files.

---

## 2026-06-08 (tenth pass, Batch 4) — DataScienceNotes-master ingest · Deep Learning

**Operator**: Cascade (Windsurf)
**Trigger**: Continuation of Batch 3; user approved Batch 4 (Deep Learning) after confirmation.

### New sub-domain created

`technology/machine-learning/deep-learning/` — fourth sub-domain under `machine-learning/`, peer to `statistics/`, `ml-fundamentals/`, and `ml-algorithms/`.

### Files created (9 new notes)

**Deep Learning hub (1)**: `deep-learning.md` — sub-domain hub; types of learning, ML lifecycle, complete PyTorch workflow (data, model, optimiser, scheduler, training loop, evaluation); modern architecture comparison.

**Neural network fundamentals (1)**: `neural-networks.md` — perceptron (AND gate example); MLP; activation functions (sigmoid, tanh, ReLU, Leaky ReLU, ELU, Swish, Softmax) with visualisation code; backpropagation step-by-step walkthrough; weight initialisation (Xavier, He, Orthogonal); common architectures by depth (LeNet → EfficientNet).

**Optimisation (1)**: `optimisation-algorithms.md` — loss landscape visualisation (Rosenbrock function); SGD; SGD with Momentum; RMSprop (from-scratch and PyTorch); Adam (with bias correction derivation); AdamW (decoupled weight decay); learning rate schedulers (Step, Cosine Annealing, ReduceLROnPlateau, OneCycleLR); complete CIFAR-10 training example.

**Computer vision (1)**: `cnn.md` — manual 2D convolution example with ASCII art; kernel arithmetic formula; pooling types; LeNet-5 and ModernCNN PyTorch implementations; ResNet skip connections with code; architecture comparison (AlexNet → EfficientNet); transfer learning with pre-trained CNNs.

**Sequences (1)**: `rnn-lstm-gru.md` — vanilla RNN from-scratch (character-level prediction); vanishing/exploding gradient explanation with math; LSTM gates (forget/input/output/candidate) with formulas; GRU (reset/update gates); bidirectional RNNs; encoder-decoder with attention; PyTorch LSTM/GRU code; when-to-use-what table.

**Training & regularisation (1)**: `regularisation-training.md` — dropout demonstration (train vs. eval outputs differ); batch normalisation with formula and placement warning; weight decay (SGD vs. AdamW); early stopping class with best-weight restoration; data augmentation (torchvision transforms); label smoothing, Mixup, CutMix, stochastic depth, gradient clipping; regularisation checklist.

**Transfer learning (1)**: `transfer-learning.md` — hierarchical feature visualisation; three strategies (feature extraction, fine-tuning last layers, full fine-tuning) with PyTorch code and parameter counts; learning rate strategies; NLP transfer (GloVe, BERT); domain adaptation techniques; progressive unfreezing example; model selection table.

**Transformers (1)**: `transformers.md` — architecture diagram (encoder/decoder); self-attention scaled dot-product with from-scratch code; multi-head attention implementation; positional encoding with visualisation; feed-forward network; layer normalisation + residual connections; pre-norm vs. post-norm warning; complete transformer encoder (PyTorch); BERT vs. GPT comparison.

**Generative models (1)**: `autoencoders-gans.md` — autoencoder with compression ratio; denoising autoencoder; VAE with reparameterisation trick and KL loss; GAN minimax game explained with forger/detective analogy; DCGAN generator/discriminator (PyTorch); WGAN-GP with gradient penalty code; autoencoder vs. VAE vs. GAN comparison table.

### Files modified

- `wiki/index.md` — added `deep-learning/` sub-domain section (9 pages); updated statistics (concept pages ~158→~167, total ~196→~205).
- `wiki/log.md` — this entry.

### Routing decisions

- **Merged**: `CNN.md` → `cnn.md`. `RNN.md` + `Sequence Models.md` → `rnn-lstm-gru.md`. `Dropout - Neural Network.md` + `Vanishing & Exploding Gradients.md` + `Epochs.md` → `neural-networks.md` + `regularisation-training.md` + `rnn-lstm-gru.md`. `Optimization Algorithms.md` → `optimisation-algorithms.md`. `Transfer Learning.md` → `transfer-learning.md`. `Autoencoders.md` → `autoencoders-gans.md`. `Transformers.md` + `BERT.md` + `RoBERTa.md` + `Machine Translation.md` → `transformers.md`.
- **Enriched**: Most raw DL files were very thin (1–3 sentences); all pages were substantially enriched with standard DL textbook knowledge, full PyTorch code, mathematical derivations, and visual examples.
- **Skipped**: `Reinforcement Learning.md` (too sparse to warrant a standalone page; deferred to future NLP/MLOps batches or dedicated RL page). `Network Architecture Search.md` (too niche).
- **Design feedback applied**: User requested more examples and design elements. Batch 4 pages include: more complete runnable code snippets, visual ASCII diagrams, colour-coded callouts (`> [!info]`, `> [!warning]`, `> [!tip]`, `> [!example]`), parameter count outputs, training loop walkthroughs, and comparison tables.

### Summary

Completed the `deep-learning/` sub-domain with 9 concept pages covering the full deep learning stack — from perceptrons and backpropagation through CNNs, RNNs/LSTMs, optimisation algorithms, regularisation, transfer learning, transformers (with full PyTorch attention implementation), and generative models (autoencoders, VAEs, GANs). All pages include extensive code examples, mathematical formulas, visual callouts, and interview questions. Many raw files were thin; they were enriched with comprehensive textbook-level content rather than thin 1:1 mappings.

---

## 2026-06-08 (tenth pass, Batch 3) — DataScienceNotes-master ingest · ML Algorithms

**Operator**: Cascade (Windsurf)
**Trigger**: Continuation of Batch 2; user approved Batch 3 (ML Algorithms) after confirmation.

### New sub-domain created

`technology/machine-learning/ml-algorithms/` — third sub-domain under `machine-learning/`, peer to `statistics/` and `ml-fundamentals/`.

### Files created (12 new notes)

**ML Algorithms hub (1)**: `ml-algorithms.md` — sub-domain hub; algorithm family map and related-page grid.

**Trees & Ensembles (4)**:
- `decision-trees.md` — ID3, C4.5, CART, CHAID, MARS; terminology; entropy vs. Gini; Information Gain; variance reduction; cost-complexity pruning; regression trees; sklearn code.
- `ensemble-learning.md` — max voting, averaging, weighted averaging, soft voting; bagging (bootstrap, OOB, pasting); boosting (AdaBoost weight updates, GBM residuals); stacking & blending; comparison table.
- `random-forest.md` — bootstrap samples + random feature subsets; hyperparameters (n_estimators, max_features, max_depth, min_samples_leaf); Extra Trees; feature importance; sklearn code.
- `gradient-boosting.md` — GBM fundamentals; AdaBoost (stumps, performance, weight updates); XGBoost (regularisation, parallel processing, custom objectives, missing values, tree pruning, built-in CV, similarity score, gain, eta, early stopping); LightGBM (leaf-wise growth, parameters); CatBoost (native categorical); library comparison table.

**Linear Models (2)**:
- `linear-models.md` — linear regression (RSS, assumptions); logistic regression (sigmoid, cross-entropy loss, convexity, coefficient interpretation); Ridge/Lasso/Elastic Net (formulae, selection criteria); perceptron; L1/L2/Huber loss comparison.
- `svm.md` — linear SVM (margin maximisation, soft-margin, C); kernel trick (linear, polynomial, RBF, sigmoid); SVR; One-Class SVM; feature scaling requirement; sklearn code.

**Classical Algorithms (2)**:
- `naive-bayes.md` — Bayes theorem derivation; GaussianNB, MultinomialNB, BernoulliNB, ComplementNB; independence assumption; Laplace smoothing; strengths and weaknesses.
- `knn.md` — lazy learning; choosing K; distance metrics (Euclidean, Manhattan, Minkowski); feature scaling; sensitivity to outliers; weighted KNN; computational cost.

**Unsupervised (3)**:
- `k-means.md` — Lloyd's algorithm; K-Means++; silhouette score; elbow method; limitations; hierarchical clustering (agglomerative/divisive, linkage criteria); sklearn code.
- `pca.md` — standardisation, covariance matrix, eigen-decomposition, variance explained; LDA (class separability vs. variance); t-SNE (perplexity, non-linear embedding, caveats); sklearn code.
- `association-rules.md` — Apriori algorithm; support, confidence, lift, conviction; market basket analysis; mlxtend code; applications.

**Optimisation (1)**:
- `hyperparameter-tuning.md` — grid search (exhaustive, expensive); randomised search (faster, wide range); Bayesian optimisation (surrogate model, acquisition function, Optuna); early stopping; key hyperparameters by algorithm.

### Files modified

- `wiki/index.md` — added `ml-algorithms/` sub-domain section (12 pages); updated statistics (concept pages ~146→~158, total ~184→~196).
- `wiki/log.md` — this entry.

### Routing decisions

- **Merged**: `Decision Trees.md` + `Decision Tree - Pruning.md` + `Decision Tree Regressor.md` → `decision-trees.md`. `AdaBoost.md` + `Gradient Boosting (GBM).md` + `XGBoost.md` + `XGBoost Classification.md` + `XGBoost Regression.md` + `Light GBM.md` + `CatBoost.md` + `Boosting.md` + `Bagging.md` + `Bootstrap Aggregation.md` + `Ensemble Learning.md` + `Hard And Soft Voting Classifier.md` + `Stacking & Blending.md` + `Bagging Meta-Estimator.md` + `Extra Trees.md` → `ensemble-learning.md` + `random-forest.md` + `gradient-boosting.md`. `Linear Regression.md` + `Logistic Regression.md` + `Ridge, Lasso Regression & Elastic Net.md` + `L1 and L2 Regularization.md` + `L1 and L2 Loss Functions.md` + `Perceptron.md` + `Loss Functions.md` → `linear-models.md`. `K Means.md` + `Heirarchical Clustering.md` → `k-means.md`. `PCA.md` + `Linear Discriminant Analysis.md` + `T-SNE.md` → `pca.md`.
- **Enriched**: `SVM.md` (very thin raw), `KNN.md` (nearly empty raw), `Naive Bayes.md` (short raw) were enriched with standard ML textbook knowledge.
- **Skipped**: `Kernel Density Estimation.md` (too niche), `Anomaly Detection Algorithms.md` (absorbed into `../ml-fundamentals/outlier-detection.md`).
- **Deferred**: Deep learning, NLP, MLOps, Big Data tool enrichment.

### Summary

Completed the `ml-algorithms/` sub-domain with 12 concept pages covering the full spectrum of classical ML algorithms — from decision trees and ensembles (Random Forest, XGBoost, LightGBM, CatBoost) through linear models and SVM to clustering, dimensionality reduction, and hyperparameter tuning. Many raw files were merged into richer consolidated pages. All pages follow the Concept Note template with YAML frontmatter, daily-quote blocks, LaTeX formulae, Python snippets, comparison tables, interview questions, and `[!grid]`/`[!card]` Related-pages blocks.

---

## 2026-06-08 (tenth pass, Batch 2) — DataScienceNotes-master ingest · ML Fundamentals

**Operator**: Cascade (Windsurf)
**Trigger**: Continuation of Batch 1; user approved Batch 2 (ML Fundamentals) after confirmation.

### New sub-domain created

`technology/machine-learning/ml-fundamentals/` — second sub-domain under `machine-learning/`, peer to `statistics/`.

### Files created (13 new notes)

**ML Fundamentals hub (1)**: `machine-learning-fundamentals.md` — sub-domain hub; links to all fundamentals pages.

**Learning paradigms (2)**:
- `supervised-learning.md` — regression & classification overview; scikit-learn code for Logistic Regression, Naive Bayes, SGD, KNN, Decision Tree, Random Forest, SVM, boosting.
- `unsupervised-learning.md` — clustering, anomaly detection, density estimation; K-Means, Hierarchical, DBSCAN; label propagation; weak supervision.

**Data preparation (2)**:
- `feature-engineering.md` — scaling (Min-Max, Standardisation), encoding (label, one-hot, ordinal, target/mean, frequency), binning, feature crosses, dimensionality reduction, training-vs-serving pre-processing.
- `feature-selection.md` — filter (correlation, mutual information, F-test, chi-squared, SelectKBest, VarianceThreshold), wrapper (forward/backward elimination, RFE), embedded (L1, tree importance); Predictive Power Score (PPS).

**Model evaluation (2)**:
- `evaluation-metrics.md` — classification (accuracy, precision, recall, specificity, F1, log loss, ROC-AUC, multi-class macro/micro/weighted) and regression (MAE, MSE, RMSE, MAPE, MSLE/RMSLE, R², adjusted R²); confusion matrix; Type I/II/III errors.
- `cross-validation.md` — K-Fold, Stratified K-Fold, leaky validation strategies, Pipeline for leakage prevention, GridSearchCV for model selection.

**Specialised topics (3)**:
- `imbalanced-classification.md` — class weights, SMOTE, undersampling, oversampling, threshold tuning, balanced ensembles.
- `outlier-detection.md` — Z-score, IQR, Isolation Forest, DBSCAN, LOF, Elliptic Envelope; algorithm sensitivity table; when to remove vs. keep.
- `data-cleaning.md` — train-test split, simple/KNN/MICE imputation, missing categorical strategies, data leakage (leaky predictors, leaky validation), Pipeline best practices.

**Production & monitoring (3)**:
- `model-monitoring.md` — data drift, concept drift, training-serving skew, sudden failures, champion–challenger, monitoring checklist.
- `ml-explainability.md` — feature importance, permutation importance, partial dependence plots, LIME, SHAP; comparison table.
- `active-learning.md` — margin sampling, cluster-based, query-by-committee, region-based; semi-supervised learning (label propagation); weak supervision (Snorkel); label consistency.

### Files modified

- `wiki/index.md` — added `ml-fundamentals/` sub-domain section (13 pages); updated statistics (concept pages ~133→~146, total ~171→~184).
- `wiki/log.md` — this entry.

### Routing decisions

- **Skipped**: `Model Evaluation.md` (empty TODO stub), `Improving Machine Learning Performance.md` (Twitter iframe only), `Champion Challenger.md` (too short — absorbed into `model-monitoring.md`).
- **Merged**: `K Fold Cross Validation.md` + `Stratified K Fold Cross Validation.md` + `Cross Validation.md` → `cross-validation.md`. `Confusion Matrix & Metrics.md` + `Classifier Accuracy.md` + `Evaluation Metrics.md` → `evaluation-metrics.md`. `Feature Scaling.md` + `Encoding.md` + `Binning.md` + `Categorical, Ordinal & Nominal.md` + `Feature Engineering.md` → `feature-engineering.md`. `Imputing Missing Values.md` + `Data Cleaning.md` + `Data Leakage.md` → `data-cleaning.md`. `Data Drift.md` + `Concept Drift.md` + `Model Degradation.md` → `model-monitoring.md`. `LIME.md` + `SHAP.md` + `Partial Plots.md` + `Permuatation Importance.md` + `Machine Learning Explainability.md` → `ml-explainability.md`. `Active Learning.md` + `Semi-Supervised Labeling.md` + `Weak Supervision.md` + `Data Labeling.md` → `active-learning.md`.
- **Deferred**: ML algorithms, deep learning, NLP, MLOps, Big Data tool enrichment.

### Summary

Completed the `ml-fundamentals/` sub-domain with 13 concept pages covering the entire ML pipeline from data preparation through production monitoring. All pages follow the Concept Note template with YAML frontmatter, daily-quote blocks, structured prose, LaTeX, Python snippets, comparison tables, interview questions, and `[!grid]`/`[!card]` Related-pages blocks. Many raw files were merged into richer, consolidated wiki pages rather than creating thin 1:1 mappings.

---

## 2026-06-08 (tenth pass) — DataScienceNotes-master ingest · Batch 1: Statistics

**Operator**: Cascade (Windsurf)
**Trigger**: User dropped `raw/DataScienceNotes-master/` (~200 markdown files covering Data Science, ML, statistics, NLP, MLOps, Big Data, and DevOps) and requested ingestion with existing design elements preserved.

### New domain created

`technology/machine-learning/` — new top-level sub-domain under `technology/`, peer to `data-engineering/`, `software-engineering/`, `databases/`, `cloud/`, `tools/`, `guides/`.

### Files created (14 new notes)

**ML hub (1)**: `technology/machine-learning/machine-learning.md` — domain hub; types of learning, ML lifecycle, sub-domain map.

**Statistics sub-domain (13)** in `technology/machine-learning/statistics/`: `statistics.md` (hub) · `hypothesis-testing.md` · `ab-testing.md` · `probability-distributions.md` · `descriptive-statistics.md` · `sampling.md` · `bias-variance-tradeoff.md` · `entropy-information-theory.md` · `vector-norms.md` · `monte-carlo-simulation.md` · `cosine-similarity.md` · `benfords-law.md` · `mathematical-foundations-for-ml.md`

### Files modified

- `wiki/index.md` — added `machine-learning/` sub-domain section with all 14 new pages; updated statistics block (sub-domain count 6→7, concept pages ~119→~133, total ~156→~171).
- `wiki/log.md` — this entry.

### Routing decisions

- **Skipped** from source: near-empty stubs (≤25 bytes), business/soft-skills content (`Elevator Pitch`, `Presentation Checklist`), and topics already covered in existing wiki pages (`CAP Theorem`, `Database Sharding`). These will be enriched in future passes.
- **Deferred** to later batches: ML algorithms, deep learning, NLP, MLOps, Big Data tool enrichment.

### Summary

Established the `technology/machine-learning/` domain with a hub page and a complete **statistics sub-domain** (13 concept pages). All pages follow the Concept Note template: YAML frontmatter, static daily-quote block, structured prose with LaTeX formulae, Python code snippets, comparison tables, interview questions, and `[!grid]` / `[!card]` Related-pages blocks. Wikilinks rewritten from the old `[[Z Organise ME/DataScienceNotes-master/...]]` format to bare vault filenames.

---

## 2026-06-04 (ninth pass) — Full GCP product-list expansion

**Operator**: Devin
**Trigger**: User requested Obsidian notes for every product listed at https://docs.cloud.google.com/docs/product-list, covering the complete GCP product catalog beyond the existing notes.

### New folders created

Five new sub-folders added under `wiki/technology/cloud/gcp/`:

- `ai-ml/` — AI & ML services
- `networking/` — Networking services
- `security/` — Security services
- `devops/` — DevOps & App Development services
- `operations/` — Operations & Observability services

### Files created (59 new notes)

**AI & ML** (15 notes): `vertex-ai`, `gemini`, `model-garden`, `vertex-ai-workbench`, `colab-enterprise`, `cloud-tpu`, `document-ai`, `cloud-vision-api`, `video-intelligence-api`, `speech-to-text`, `text-to-speech`, `cloud-natural-language`, `cloud-translation`, `dialogflow-cx`, `vector-search`

**Networking** (10 notes): `vpc`, `cloud-load-balancing`, `cloud-cdn`, `cloud-dns`, `cloud-nat`, `cloud-armor`, `cloud-interconnect`, `cloud-vpn`, `cloud-router`, `network-intelligence-center`

**Security** (8 notes): `iam`, `secret-manager`, `cloud-kms`, `security-command-center`, `cloud-identity`, `certificate-authority-service`, `binary-authorization`, `vpc-service-controls`

**DevOps** (10 notes): `cloud-build`, `artifact-registry`, `cloud-deploy`, `cloud-shell`, `cloud-workstations`, `apigee`, `cloud-endpoints`, `eventarc`, `workflows`, `cloud-scheduler`

**Operations** (7 notes): `cloud-monitoring`, `cloud-logging`, `cloud-trace`, `cloud-profiler`, `error-reporting`, `cloud-debugger`, `cloud-ids`

**Databases** (3 new notes added to existing folder): `alloydb`, `firestore`, `database-migration-service`

**Storage** (3 new notes added to existing folder): `hyperdisk`, `storage-transfer-service`, `backup-and-dr`

### Files modified

- `wiki/technology/cloud/gcp/GCP Home.md` — updated dataviewjs At-a-Glance table and Browse by Category grids to include all 5 new category folders
- `wiki/index.md` — added all 59 new notes in the GCP section, with 5 new sub-sections (AI & ML, Networking, Security, DevOps, Operations)
- `wiki/log.md` — this entry

### Summary

Expanded the GCP section of the wiki from 32 notes across 6 folders to **91 notes across 11 folders**, covering the full published Google Cloud product list. Every note follows the Cloud Service Note template: YAML frontmatter, infobox, daily-quote block, Overview/Key Features/Use Cases/Pricing sections, and a Related pages grid with wikilinks to related services and GCP Home.


## 2026-05-29 (eighth pass) — Wikipedia-style infoboxes + daily-quote backfill

**Operator**: Cascade
**Trigger**: User asked to add Wikipedia-style infoboxes to named-entity notes (People, Books, Tools/Software, Cloud Services/Platforms, Certifications) while **excluding abstract concept/theory/pattern pages**, sourcing infobox facts from the internet. Schema approved after a 5-note pilot (since reverted and replaced by the per-domain template approach).

### Standard adopted

Infoboxes use the ITS Theme callout `> [!infobox|right]` placed **above** the daily-quote block, ordered: frontmatter → infobox → `---` → quote → `---` → body. Per-domain field sets:

- **Person** → Born, Nationality, Domain, Known for, Notable works, Institution.
- **Book** → cover, Author(s), Publisher, Published, Domain, Pages, ISBN.
- **Tool / Software** → Developer, Type, Domain, Initial release, Written in, License.
- **Cloud Service / Platform** → Provider, Type, Category, Launched, Interface, Website.
- **Certification** → Provider, Type, Domain, Format, Validity, Website.

### Templates

`_my_template/` per-domain note templates created earlier this initiative: `Person Note.md`, `Book Note.md`, `Tool Note.md`, `Cloud Service Note.md`, `Concept Note.md` (concept = quote only, **no infobox**). `windsurf.md` updated with the infobox standard, template-selection rules, and the web-enrichment ingest step.

### Daily-quote backfill

Backfilled the `> "quote" / <cite>` block into all existing notes (BOM-safe; duplicate blocks from double-insertion collapsed).

### Infoboxes added (51 notes)

- **People (18)**: edgar-f-codd, ralph-kimball, bill-inmon, dan-linstedt, zhamak-dehghani, martin-kleppmann, eric-brewer, seth-gilbert-nancy-lynch, jay-kreps, jeff-dean-sanjay-ghemawat, joe-reis-matt-housley, daniel-abadi, greg-young, martin-fowler, andrej-karpathy, doug-cutting, matei-zaharia, wenqiang-feng.
- **Books (6)**: designing-data-intensive-applications, the-data-warehouse-toolkit, fundamentals-of-data-engineering, building-a-scalable-data-warehouse-with-data-vault-2, building-the-data-warehouse, learning-apache-spark-with-python.
- **Cloud Services — GCP analytics (5)**: bigquery, dataflow, datafusion, pubsub, data-catalog.
- **Cloud Services — GCP compute (5)**: app-engine, cloud-functions, cloud-run, compute-engine, kubernetes-engine.
- **Cloud Services — GCP databases (5)**: cloud-bigtable, cloud-datastore, cloud-spanner, cloud-sql, memorystore.
- **Cloud Services — GCP storage (4)**: cloud-storage, filestore, firebase-cloud-storage, persistent-disk.
- **Cloud Platforms (3)**: aws, azure, google-cloud-platform.
- **Tools / Software (4)**: apache-spark, pyspark, databricks, google-file-system (concrete system w/ paper authors).
- **Certification (1)**: professional-data-engineer.

### Explicitly skipped (per scope)

Abstract concept/theory/pattern/guide pages received the daily-quote block but **no infobox** — e.g. `cap-theorem`, the BigQuery how-to sub-pages, all `data-engineering/` concept pages, `tools/` catalogs, and `guides/`.

### Web enrichment

Launch/GA years and authorship verified via web search (e.g. Dataflow & Pub/Sub GA Aug 2015, Spanner GA May 2017, Data Fusion GA Nov 2019). GCP service facts cross-checked against `cloud.google.com` product pages.

### Fixes

- `andrej-karpathy.md` — repaired malformed header (stray double `---`, broken multi-line quote) and reordered infobox above the quote to match the standard.

### Record

- `index.md` — statistics note added for the infobox standard.
- `log.md` — this entry.

---

## 2026-05-28 (seventh pass) — Apache Spark / PySpark ingest (4 raw PDFs)

**Operator**: Claude Code (Opus 4.7)
**Trigger**: User dropped four PySpark PDFs into `raw/` and asked to ingest. Per `windsurf.md` Phase 1, key takeaways were discussed and three routing decisions confirmed with the user before any writing.

### Sources

1. `Pyspark -Book.pdf` — *Learning Apache Spark with Python* (Wenqiang Feng, 2018) — full book: Spark fundamentals + a large MLlib / data-science half.
2. `pyspark basics.pdf` — "Spark Tutorial" notes (driver/executor, partitions, shuffle, AQE, skew/salting, caching, Z-order, file formats, read modes).
3. `pyspark interview prep.pdf` — "Top 50 PySpark Interview Questions" (Rahul Pupreja).
4. `Pyspark-cheatsheet.pdf` — **SKIPPED**: image-only PDF, `pdftotext` extracted zero text; user confirmed skip (no OCR tool available in this environment).

PDFs were text-extracted with `pdftotext` (poppler, from Git) into a temp dir — `raw/` left untouched per the hard rules. (The Read tool's PDF renderer `pdftoppm` is not installed here.)

### User decisions (Phase 1)

1. **Placement** → dedicated `technology/data-engineering/data-processing/spark/` subfolder (Spark treated as a processing engine alongside the batch/stream concept pages).
2. **Cheatsheet** → skip (image-only).
3. **ML scope** → one `spark-mllib.md` summary page (keep DE focus; don't spawn an ML topic tree the vault hasn't started).

### New pages created (9 concept + 1 book + 1 person = 11)

`technology/data-engineering/data-processing/spark/`:

- `apache-spark.md` (hub) — what Spark is, the stack, why Spark, vs MapReduce, cluster managers, job lifecycle.
- `pyspark.md` — Python API: SparkSession, py4j, findspark, SparkConf, PySpark vs pandas.
- `spark-architecture.md` — driver/executor, DAG/Task schedulers, job→stage→task, client vs cluster mode, executor sizing.
- `rdd.md` — RDD abstraction, transformations vs actions, narrow vs wide, lazy evaluation, lineage graph.
- `spark-dataframe.md` — DataFrame/Dataset, StructType schema, common ops, `toPandas()`.
- `spark-sql.md` — temp views, Catalog, Catalyst optimizer (rule/cost-based), UDFs.
- `spark-performance.md` — partitioning, shuffle, repartition vs coalesce, persistence levels, broadcast/accumulators, AQE, skew/salting, columnar formats, read modes.
- `spark-streaming.md` — DStreams, micro-batch, receivers, checkpointing.
- `spark-mllib.md` — distributed-ML summary of the book's ML half.

`books/`:

- `learning-apache-spark-with-python.md` — book stub (no conventional cover; free online doc, linked to official site).

`people/`:

- `wenqiang-feng.md` — author stub.

Interview-prep author **Rahul Pupreja** is cited inline only (content aggregator, not a domain figure) — no person stub, following the spirit of the `people/` rule.

### Existing pages updated (interlink)

- `batch-data-processing.md` — linked Apache Spark + PySpark; added Spark to Related pages.
- `stream-data-processing.md` — Spark Structured Streaming now links to `spark-streaming`.
- `data-processing.md` — linked Spark in the GCP table; added an Engines card.
- `tools/processing-tools.md` — added a "Deep dive" link row into the new Spark pages; linked RDDs.
- `cloud/databricks/databricks.md` — linked Apache Spark in intro; added a Spark-internals card.
- `people/matei-zaharia.md` — linked Apache Spark; **fixed its pre-existing broken relative links** (pre-restructure paths) by switching to bare filenames.

### Record

- `index.md` — added the Apache Spark / PySpark sub-section under Data Processing; added Wenqiang Feng (People) + the book (Books); updated statistics (People 17→18, Books 5→6, concept pages ~110→~119).
- `log.md` — this entry.

### Conventions used

- All new links use **bare filenames** per `windsurf.md` rule 7 (resolve across the tree; avoids the broken relative-path problem seen on older stubs).
- Frontmatter uses `publish: true` (matching existing pages, not the `dg-publish` in the windsurf format snippet).
- Citations use `(source: <pdf filename>)`.

### Lint flag (not fixed this pass)

Several older pages still carry **broken relative wikilinks** from before the 2026-05-10 restructure (e.g. `[[../data-engineering/concepts/...]]` on people stubs; `books/` stubs using `[[../../technology/...]]`). Only `matei-zaharia.md` was fixed this pass (it was being edited anyway). A vault-wide bare-filename rewrite would clear the rest.

---

## 2026-04-29 (sixth pass) — People + Books folders + Related-pages refactor

**Operator**: Cascade
**Trigger**: User updated `windsurf.md` with two new ingest rules:

1. **Step 5** — create `people/`, `books/`, optional `art/`, `science/` folders for notable connections; stub pages only (no body content); for books, fetch cover images.
2. **Step 11** — "Related pages" sections must use **topic-grouped callout blocks**, not flat lists.

User asked to **execute both retroactively across all pages**.

### New folders + stub pages

Created `wiki/people/` (17 stub pages) + `wiki/books/` (5 stub pages with cover image URLs from O'Reilly + Amazon).

**People** (sorted by impact):

- Edgar F. Codd, Ralph Kimball, Bill Inmon, Dan Linstedt, Zhamak Dehghani, Martin Kleppmann, Eric Brewer, Seth Gilbert + Nancy Lynch, Jay Kreps, Jeff Dean + Sanjay Ghemawat, Joe Reis + Matt Housley, Daniel Abadi, Greg Young, Martin Fowler, Andrej Karpathy, Doug Cutting, Matei Zaharia.

**Books**:

- *Designing Data-Intensive Applications* (Kleppmann)
- *The Data Warehouse Toolkit* (Kimball + Ross)
- *Fundamentals of Data Engineering* (Reis + Housley)
- *Building a Scalable Data Warehouse with Data Vault 2.0* (Linstedt + Olschimke)
- *Building the Data Warehouse* (Inmon)

Each stub follows the windsurf rule: minimal bio (people) / cover + 1-line description (books) + topic-grouped Related pages section. **No content beyond what's needed for navigation.**

### Related-pages refactor (~71 newly created pages)

Refactored every page created in pass 5 to convert flat bullet lists → topic-grouped callout blocks. Pattern:

```markdown
## Related pages

> [!grid]
>
>> [!card] Topic 1
>> `link1`, `link2`
>
>
>> [!card] Topic 2
>> `link3`


## 2026-04-29 (fifth pass) — Massive Data Engineering build-out (~71 new pages, ~150 sources)

**Operator**: Cascade
**Trigger**: User dropped a comprehensive `raw/` tree containing the full **data-engineering-wiki.com** content (Concepts/, Guides/, FAQ/, Tools/) plus opened request to ingest all of it. Per `windsurf.md` rule 4, all material organized under `wiki/data-engineering/` since that is the single subject.

### Source coverage

- **Concepts** (49 sources): Data Architecture (8), Data Ingestion (4), Data Management (5), Data Modeling (8), Data Processing (7), Data Storage (10), Software Engineering (11), top-level (3 — Pipeline, Sargable, Ethics).
- **Guides** (8 sources): Getting Started, SQL, Pipeline best practices, Testing, Governance, Cost, Messaging, Cloud Services Map.
- **FAQ** (10 sources, **collapsed into 1 page** per windsurf rule on consolidating small atomic pages).
- **Tools** (~80 sources, **aggregated into 9 catalog pages**) — categorized by purpose rather than per-tool sprawl.

### Folder structure created

```
wiki/data-engineering/
├── data-engineering.md          ← discipline overview
├── data-pipeline.md
├── sargable-expressions.md
├── data-ethics.md
├── faq.md                        ← all FAQ collapsed
├── concepts/
│   ├── data-architecture/        ← 8 pages
│   ├── data-ingestion/           ← 4 pages
│   ├── data-management/          ← 5 pages
│   ├── data-modeling/            ← 8 pages
│   ├── data-processing/          ← 7 pages
│   ├── data-storage/             ← 10 pages
│   └── software-engineering/     ← 11 pages
├── guides/                       ← 8 pages
└── tools/                        ← 9 catalog pages
```

### New top-level folders

- `wiki/aws/` — `aws/aws.md` overview page (cross-references existing GCP + Databricks).
- `wiki/azure/` — `azure/azure.md` overview page (cross-references Synapse, Power BI, Cosmos DB, ADLS).

### Naming convention

- All filenames in **kebab-case** (e.g. `data-warehouse.md`, `cap-theorem.md`).
- Aliases preserve original capitalized titles for Obsidian/Linkable lookups.

### Aggregation strategy (windsurf rule on small pages)

Where source had many tiny tool pages (e.g. 16 separate one-liner files under `Tools/Databases/`), they were merged into single catalog pages:

- `tools/databases-overview.md` — all 16 DB tool pages.
- `tools/orchestrators-overview.md` — all orchestrator pages.
- `tools/ingestion-tools.md` — Airbyte, Fivetran, Debezium, etc.
- `tools/processing-tools.md` — Spark, dbt, Beam, Flink, EMR, etc.
- `tools/quality-tools.md` — Great Expectations, Monte Carlo, dbt tests, Soda.
- `tools/analytics-tools.md` — Looker, Tableau, Power BI, Superset, etc.
- `tools/file-formats.md` — Parquet, ORC, Avro, Delta, Iceberg, Arrow.
- `tools/programming-languages.md` — SQL, Python, Java, Scala, Rust, T-SQL.
- `tools/object-storage.md` — S3, GCS, Blob, MinIO.
- `faq.md` — collapses 10 FAQ source files.

### Cross-linking strategy

Every new page connects to:

1. **Sibling concepts** in the same category.
2. **Cross-category** related pages (e.g. Data Storage ↔ Data Processing).
3. **GCP product pages** (BigQuery, Dataflow, Pub/Sub, Cloud SQL, Spanner, Bigtable, Memorystore, Datastore, GCS).
4. **DBMS theory** (ACID, Normalization).
5. **AWS / Azure / Databricks** overviews where parallels exist.
6. **Guides + Tools** for practical follow-up reading.

### Modernizations baked in (not in raw)

- **Medallion architecture** + lakehouse patterns (Delta / Iceberg / Hudi).
- **CDC via log-based** (Debezium, Datastream, DynamoDB Streams) as primary recommendation.
- **HTAP** (Hybrid Transactional-Analytical Processing) — coverage of TiDB, SingleStore, AlloyDB, BigQuery + Spanner federated queries.
- **PACELC** as refinement to **CAP**.
- **dbt + ELT** as the modern baseline, replacing legacy ETL.
- **Workflow orchestration** evolution: Airflow → Dagster (asset-first) / Prefect (hybrid) / Mage / Flyte.
- **Data Mesh** (Zhamak Dehghani's four principles).
- **Activity Schema** (Narrator's stream-of-events modeling).
- **Crypto-shredding** for GDPR right-to-erase in event-sourced systems.
- **Generated columns** + **expression indexes** for sargability workarounds.
- **dbt Semantic Layer / MetricFlow / Cube** as the modern metrics-layer stack.
- **OpenLineage** for portable lineage emission.
- **Apache AGE** Postgres graph extension; **TimescaleDB** as TS-on-Postgres.
- **Spot / Preemptible** instances + **CUD** discounts for cost optimization.
- **GenAI surface mentions** (Vertex AI, Azure OpenAI Service, Bedrock) where relevant.

### Updated

- `index.md` — full rebuild of folder map, expanded data-engineering section with sub-categories, AWS + Azure entries, statistics.
- `log.md` — this entry.

### Statistics

- **New pages**: ~71
- **Total wiki pages now**: ~112 + index + log
- **Top-level folders**: 6 (was 4)

---

## 2026-04-27 (fourth pass) — DBMS + Data Engineering fundamentals (3 sources)

**Operator**: Cascade
**Trigger**: User dropped 3 CS-fundamentals sources into `raw/`. Per updated `windsurf.md` rule 4 ("Like GCP, Data Engineering, Cloud, Machine Learning, Generative AI, etc."), these required new top-level subject folders.

### New folders

- `wiki/dbms/` — Database Management System theory.
- `wiki/data-engineering/` — Data engineering practitioner concepts.

### Sources ingested

1. `ACID Properties in DBMS.md` → `dbms/acid-properties.md`
2. `Introduction to Database Normalization.md` → `dbms/database-normalization.md`
3. `Data Warehousing.md` → `data-engineering/data-warehousing.md`

### New pages created (3)

- **`dbms/acid-properties.md`** — full coverage of A/C/I/D + responsibility matrix + isolation levels + how each GCP database (Cloud SQL, Spanner, Datastore, Bigtable, Memorystore, BigQuery) maps onto the ACID spectrum + ACID vs BASE.
- **`dbms/database-normalization.md`** — anomalies (insert/update/delete/redundancy), 1NF → 5NF + BCNF, when to denormalize, ties to OLAP star schemas.
- **`data-engineering/data-warehousing.md`** — OLTP vs OLAP, ETL/ELT, star vs snowflake, data marts, types of warehouses, building challenges, real-world examples, lakehouse evolution, deep cross-links to BigQuery / Dataflow / Datafusion / Pub/Sub / Data Catalog / Databricks.

### Cross-linking strategy

Each new page deliberately links into the existing `gcp/` concept pages so the **theory** and the **products** reinforce each other:

- ACID → Cloud SQL (full ACID single-instance), Spanner (global ACID via TrueTime), Datastore (entity-group ACID), Bigtable (row-level only), BigQuery (per-statement).
- Normalization → counterpoint to star/snowflake schemas in BigQuery; explanation for why Datastore embeds and Bigtable abandons relational entirely.
- Data Warehousing → BigQuery as the canonical cloud DWH; Dataflow/Datafusion as ETL engines; Data Catalog as metadata; Databricks as lakehouse alternative.

### Modernizations baked in (not in raw)

- Standard SQL **isolation levels** (READ UNCOMMITTED → SERIALIZABLE) + snapshot isolation + Spanner's external consistency.
- **ELT** vs ETL distinction (dbt-driven warehouse-side transforms).
- **Lakehouse** pattern with Delta Lake / Iceberg / Hudi; BigLake on GCP.
- **3-tier warehouse architecture** (Inmon vs Kimball debate).
- ACID vs **BASE** tradeoff for NoSQL.
- **Slowly Changing Dimensions** (SCD Type 1/2/6) — flagged as interview territory.

### Updated

- `index.md` — added "DBMS" and "Data Engineering" sections to TOC; updated folder map and statistics.
- `log.md` — this entry.

### Notes

- These pages are **subject-agnostic theory** that applies to any cloud DB / warehouse, but they cross-link heavily into the GCP product pages so the wiki stays interconnected.
- Future ingests of CS-theory sources (operating systems, distributed systems, ML theory, etc.) should follow the same pattern: top-level folder named after the subject.

---

## 2026-04-27 (third pass) — Subject-based restructure + analytics ingest (16 sources) + Databricks

**Operator**: Cascade
**Trigger**: User noticed the previous folder structure didn't follow `windsurf.md` rule 4 ("create folder named after the main subject of the source"). Since all GCP sources should sit under a single `gcp/` parent, plus updated rule (now removed) deprecating standalone source-summary pages.

### Phase A — Restructure

- Created `wiki/gcp/` parent.
- Moved 5 existing folders (`foundations/`, `compute/`, `storage/`, `databases/`, `certifications/`) → under `wiki/gcp/`.
- **Deleted 22 source-summary pages** that were created in the prior two passes (concept pages already cite their raw sources inline via `(source: filename.md)`):
  - `foundations/`: features-of-gcp.md, google-cloud-platform-source.md
  - `compute/`: cloud-functions-in-gcp.md, cloud-functions-with-python.md, cloud-run-with-python.md, compute-engine-vm-howto.md, compute-engine-vs-app-engine-source.md, gcp-compute-services-source.md, google-app-engine.md, google-kubernetes-engine.md, intro-to-compute-engine.md
  - `storage/`: cloud-storage-in-gcp.md, gcp-cloud-storage-source.md, persistent-disk-filestore-source.md, firebase-cloud-storage-source.md, gfs-source.md
  - `databases/`: google-cloud-sql-source.md, cloud-spanner-source.md, cloud-bigtable-source.md, cloud-datastore-source.md, memorystore-source.md
  - `certifications/`: pde-certificate-guidelines.md
- Stripped dangling `[[<source>-source]]` links from concept pages and `index.md`.
- Wiki-link relative paths (`[[../foundations/...]]`) still resolve correctly because both source and target moved into the same parent (`gcp/`).

### Phase B — Analytics ingest (16 sources)

**Sources** (all GeeksforGeeks GCP articles unless noted):

1. `Google Cloud Platform - Introduction to BigQuery.md`
2. `Google Cloud Platform- BigQuery(Running Queries, advantage and disadvantage).md`
3. `Google Cloud Platform - Introduction to BigQuery Sandbox.md`
4. `Google Cloud Platform - Tables in BigQuery.md`
5. `Google Cloud Platform - Loading Data to BigQuery.md`
6. `Google Cloud Platform - Working with External Data in BigQuery.md`
7. `Google Cloud Platform - User Defined Functions in BigQuery.md`
8. `Google Cloud Platform - Implementing Authorized View in BigQuery.md`
9. `Google Cloud Platform - Managing Access using IAM in BigQuery.md`
10. `Google Cloud Platform - Data Visualization in BigQuery.md`
11. `Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md`
12. `Building Data Pipelines with Google Cloud Dataflow ETL Processing.md`
13. `Datafusion in Google Cloud Platform (GCP).md`
14. `Google Cloud Platform - A High level Overview of Data Catalog Service.md`
15. `How To Create a PubSub Topic on GCP.md`
16. `Introduction to Databricks.md` (multi-cloud — placed under `databricks/`, not `gcp/`)

### New pages created (15)

**`gcp/analytics/` (14 new)**:

- `bigquery.md` — main BigQuery concept page
- `bigquery-sandbox.md`
- `bigquery-tables.md`
- `bigquery-loading-data.md`
- `bigquery-external-data.md`
- `bigquery-iam.md`
- `bigquery-udfs.md`
- `bigquery-authorized-views.md`
- `bigquery-visualization.md`
- `bigquery-query-management.md`
- `dataflow.md`
- `datafusion.md`
- `data-catalog.md`
- `pubsub.md`

**`databricks/` (1 new)**:

- `databricks.md` — Spark + Delta Lake + MLflow platform overview, cross-cloud rationale

### Modernizations baked into pages

- **Data Studio → Looker Studio** (October 2022 rename) — flagged in `bigquery-visualization.md`.
- **Data Catalog → Dataplex Catalog** (2023 consolidation) — flagged in `data-catalog.md`.
- **BigQuery Editions** (Standard / Enterprise / Enterprise Plus, 2023) — flagged in `bigquery.md`.
- **Pub/Sub Lite** + **Schema Registry** + **BigQuery subscription** added to `pubsub.md`.
- **BigLake** for multi-cloud federated tables — flagged in `bigquery-external-data.md`.
- **Storage Write API** (replaces legacy `tabledata.insertAll`) — `bigquery-loading-data.md`.
- **Datastream**, **Scheduled Queries**, **Stored Procedures**, **BigQuery Studio**, **Materialized Views** all noted where relevant.

### Updated

- `index.md` — fully rewritten with `gcp/` + `databricks/` structure, decision matrices for databases / storage / analytics, expanded stub-topics list.
- `log.md` — this entry.

### Notes for the future

- BigQuery's 9 sources naturally split into a main concept page + 9 sub-pages. Per windsurf "10–15 wiki pages per source family is normal", this is in spec.
- The Databricks page is the first **non-GCP** entry; it lives at `wiki/databricks/` rather than under `gcp/` because Databricks is multi-cloud.
- Future ingests of Snowflake, AWS, Azure, etc. should follow the same pattern: top-level folder named after the platform.
- Skipped repeating source-summary pages permanently — the concept pages handle citation inline via `(source: filename.md)` markers.

---

## 2026-04-27 (later) — GCP storage + databases ingest (9 sources) + folder reorganization

**Operator**: Cascade
**Trigger**: User updated `windsurf.md` step 6 ("If no folders created yet, based on index using filesystem create a folder and move existing file") and dropped 9 new sources into `raw/`.

### Folder reorganization

Moved all 28 existing wiki pages into 5 topic folders matching the index structure:

- `foundations/` — 4 concepts + 2 source summaries
- `compute/` — 7 concepts + 9 source summaries
- `storage/` — 3 concepts + 1 source summary (pre-ingest)
- `certifications/` — 1 concept + 1 source summary
- (`databases/` created for the new ingest)

`index.md` and `log.md` remain at the wiki/ root.

### New sources ingested

1. `Google Cloud Platform - Cloud Storage.md` — enriches existing [[technology/cloud/gcp/storage/cloud-storage]].
2. `Google Persistent Disk & Google Filestore Services.md` — enriches [[technology/cloud/gcp/storage/persistent-disk]] and [[technology/cloud/gcp/storage/filestore]].
3. `Google Cloud Platform - Introduction to Cloud Spanner.md` — new [[technology/cloud/gcp/databases/cloud-spanner]].
4. `Google Cloud Platform - MemoryStore.md` — new [[technology/cloud/gcp/databases/memorystore]].
5. `Google Cloud SQL.md` — new [[technology/cloud/gcp/databases/cloud-sql]].
6. `Google File System.md` — new [[technology/cloud/gcp/storage/google-file-system]].
7. `Introduction to Firebase Cloud Storage.md` — new [[technology/cloud/gcp/storage/firebase-cloud-storage]].
8. `Introduction to Google Cloud Bigtable.md` — new [[technology/cloud/gcp/databases/cloud-bigtable]].
9. `Use Cloud Datastore For NoSQL Database On GCP.md` — new [[technology/cloud/gcp/databases/cloud-datastore]].

### New pages created (16)

**Concept pages (7)**:
- `databases/cloud-sql.md`
- `databases/cloud-spanner.md`
- `databases/cloud-bigtable.md`
- `databases/cloud-datastore.md`
- `databases/memorystore.md`
- `storage/firebase-cloud-storage.md`
- `storage/google-file-system.md`

**Source summaries (9)**:
- `databases/google-cloud-sql-source.md`
- `databases/cloud-spanner-source.md`
- `databases/cloud-bigtable-source.md`
- `databases/cloud-datastore-source.md`
- `databases/memorystore-source.md`
- `storage/gcp-cloud-storage-source.md`
- `storage/persistent-disk-filestore-source.md`
- `storage/firebase-cloud-storage-source.md`
- `storage/gfs-source.md`

### Existing pages enriched (3)

- `storage/cloud-storage.md` — added object-immutability rules, bucket design principles, Firebase layer note, Colossus backend lineage, cross-links.
- `storage/persistent-disk.md` — added pricing table per disk type, Hyperdisk tier, regional variants, cost specifics.
- `storage/filestore.md` — expanded tier table with capacity + IOPS + pricing, 99.99% SLA on Enterprise.

### Web enrichment via brave-search

- **Cloud Datastore → Firestore in Datastore mode rename** (2018) — `cloud.google.com/datastore/docs`.
- **Memorystore for Valkey GA (2024)** + Memcached deprecation path — `cloud.google.com/blog/products/databases/announcing-general-availability-of-memorystore-for-valkey`.
- **GFS → Colossus (2010) succession** — `cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system`.

### Outdated facts flagged in source summaries

- `cloud-datastore-source.md` — raw uses old "Cloud Datastore" name; correct name is "Firestore in Datastore mode".
- `memorystore-source.md` — raw misses Valkey engine (added 2024 GA).

### Updated

- `index.md` — fully rewritten with folder paths, new pages, decision matrix, stub-topic list.
- `log.md` — this entry.

### Notes

- Wiki-links use relative paths with alias (`[[technology/cloud/gcp/foundations/google-cloud-platform|Google Cloud Platform]]`) across folders; Obsidian still resolves `[[page-name]]` shortcuts within the same folder.
- **AlloyDB** added to stub-topic list (modern successor to Cloud SQL Postgres for higher-performance use cases).
- **Colossus** added as an important but non-customer-facing stub — it underlies all GCP storage and is the direct descendant of [[technology/cloud/gcp/storage/google-file-system]].

---

## 2026-04-27 — Initial GCP ingest (13 sources)

**Operator**: Cascade
**Action**: Bulk ingest of all 13 sources currently in `raw/`.
**Sources**:
1. `Google Cloud Platform (GCP).md`
2. `Features of GCP.md`
3. `Google Cloud Platform - Compute Services.md`
4. `Difference Between Google Cloud Compute Engine and App Engine.md`
5. `Introduction to Google Compute Engine.md`
6. `How To Use Compute Engine To Launch And Manage Virtual Machines.md`
7. `Google App Engine (GAE).md`
8. `Google Kubernetes Engine.md`
9. `Google Cloud Run - Working with Python.md`
10. `Cloud Functions in GCP.md`
11. `How to Use Google Cloud Function with Python.md`
12. `Cloud Storage in GCP.md`
13. `PDE Certificates Guidelines.md`

**Pages created** (28):

*Concept pages (14)*:
- `google-cloud-platform.md`
- `regions-and-zones.md`
- `service-models.md`
- `gcp-pricing-and-discounts.md`
- `gcp-compute-services.md`
- `compute-engine.md`
- `app-engine.md`
- `kubernetes-engine.md`
- `cloud-run.md`
- `cloud-functions.md`
- `compute-engine-vs-app-engine.md`
- `cloud-storage.md`
- `persistent-disk.md`
- `filestore.md`
- `professional-data-engineer.md`

*Source summaries (13)*:
- `google-cloud-platform-source.md`
- `features-of-gcp.md`
- `gcp-compute-services-source.md`
- `compute-engine-vs-app-engine-source.md`
- `intro-to-compute-engine.md`
- `compute-engine-vm-howto.md`
- `google-app-engine.md`
- `google-kubernetes-engine.md`
- `cloud-run-with-python.md`
- `cloud-functions-in-gcp.md`
- `cloud-functions-with-python.md`
- `cloud-storage-in-gcp.md`
- `pde-certificate-guidelines.md`

*Other*:
- `index.md` — master TOC
- `log.md` — this file

**Web enrichment via brave-search**:
- Current GCP scale: 43 regions / 130 zones (vs raw's "15") — `cloud.google.com/about/locations`.
- Cloud Functions Gen 1 vs Gen 2 — `firebase.google.com/docs/functions/version-comparison`.
- Current App Engine runtimes (raw lists Python 2.7 / Java 7 — outdated) — `cloud.google.com/appengine/docs/standard/python3/runtime`.
- GKE Autopilot vs Standard — `cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison`.
- Cloud Run free tier (2 M req / 360k GiB-s / 180k vCPU-s / mo) — `cloud.google.com/run/pricing`.
- PDE exam structure — multiple secondary sources (Medium, Reddit).

**Outdated facts flagged in source pages**:
- `features-of-gcp.md` — Cloud Debugger deprecated (May 2023).
- `google-app-engine.md` — Python 2.7 / Java 7 runtimes deprecated; preview features list obsolete.
- `cloud-functions-in-gcp.md` — predates Gen 2.
- `gcp-compute-services-source.md` — outdated Cloud Run free tier figure.
- `google-kubernetes-engine.md` — doesn't cover Autopilot mode.
- `google-cloud-platform-source.md` — outdated region count.

**Cross-link density**: each concept page averages 5–8 wiki-links; source pages link back to their concept and to closely related concepts.

**Notes**:
- Several frequently-referenced services (BigQuery, Dataflow, Pub/Sub, Composer, Dataplex, Spanner, etc.) are mentioned but not yet ingested. Listed under "Stub topics" in `index.md` for future raw/ additions.
- All citations follow `(source: filename.md)` format per `windsurf.md` rules.
- Frontmatter uses literal values (not Templater syntax) so pages render correctly outside Obsidian Templater context.


## 2026-05-10 � Vault restructure: fields-of-knowledge top level

**Trigger:** User feedback that the top-level folders (`gcp/`, `aws/`, `azure/`, `databricks/`, `dbms/`, `data-engineering/`, `people/`, `books/`) mixed *technology subdomains* with *cross-cutting metadata*. The mental model should instead be: top level = **fields of knowledge** (`technology/`, future `philosophy/`, `art/`, `science/`) + **cross-cutting metadata** (`people/`, `books/`).

### Filesystem moves (~120 files)

- Created `wiki/technology/` and `wiki/technology/cloud/`.
- Moved `wiki/gcp/` ? `wiki/technology/cloud/gcp/`.
- Moved `wiki/aws/` ? `wiki/technology/cloud/aws/`.
- Moved `wiki/azure/` ? `wiki/technology/cloud/azure/`.
- Moved `wiki/databricks/` ? `wiki/technology/cloud/databricks/`.
- Moved `wiki/data-engineering/` ? `wiki/technology/data-engineering/`.
- **Dropped redundant `concepts/` layer**: `wiki/technology/data-engineering/concepts/<X>/` ? `wiki/technology/data-engineering/<X>/` (data-architecture, data-ingestion, data-management, data-modeling, data-processing, data-storage).
- **Promoted `software-engineering/` out of DE** to top tech level: `wiki/technology/data-engineering/concepts/software-engineering/` ? `wiki/technology/software-engineering/` (CAP, sharding, idempotence, indexing, scaling, patterns � these are general SE/distributed-systems concepts, not DE-only).
- **Promoted `tools/` and `guides/` out of DE** to top tech level: `wiki/technology/data-engineering/{tools,guides}/` ? `wiki/technology/{tools,guides}/` (they were vault-wide reference material trapped inside one domain).
- **Renamed `dbms/` ? `databases/`** (clearer term): `wiki/dbms/` ? `wiki/technology/databases/`. `DBMS Home.md` renamed to `Databases Home.md`.
- `people/` and `books/` unchanged at top level (correctly identified as cross-cutting metadata).

### Wikilink rewrite (vault-wide)

Stripped folder-prefix from wikilinks pointing into the migrated tree, since Obsidian resolves bare filenames automatically. Disambiguated the only filename collision (`data-catalog.md` exists in both `technology/cloud/gcp/analytics/` and `technology/data-engineering/data-management/`) by keeping a path-qualified link for the GCP one.

- 14 files updated by the bulk regex pass.
- Replaced `[[DBMS Home]]` ? `[[Databases Home]]`.
- Replaced `"wiki/<old-folder>"` Dataview path strings ? `"wiki/technology/<new-path>"` in 5 Home pages.

### New Home pages

Created 4 new sub-hubs to match the new hierarchy:

- `wiki/technology/Technology Home.md` � sub-hub for the technology field.
- `wiki/technology/cloud/Cloud Home.md` � sub-hub for cloud platforms.
- `wiki/technology/software-engineering/Software Engineering Home.md`.
- `wiki/technology/tools/Tools Home.md`.
- `wiki/technology/guides/Guides Home.md`.

### Home pages updated (nav strips + Dataview paths)

- `Master Home.md` � completely rewritten. Top-level cards now reflect 3 fields (Technology, Books, People) with reserved cards for Philosophy/Art/Science.
- `GCP Home.md`, `AWS Home.md`, `Azure Home.md`, `Databricks Home.md` � nav strips updated to "Master ? Technology ? Cloud ? <Platform>" hierarchy.
- `Databases Home.md` � nav strip updated to "Master ? Technology ? Databases".
- `Books Home.md`, `People Home.md` � nav strips updated to "Master ? Technology ? Books/People".
- `data-engineering.md` � added Vault Navigation strip with new hierarchy.

### `windsurf.md` rewrite

Rewrote the Folder structure and Ingest workflow sections to reflect the new contract:

- Made the **3 ingest responsibilities** explicit (Categorize ? Interlink ? Record).
- Added a **categorization decision tree** under Phase 2 so future ingests route correctly to `technology/<sub>/...`, `people/`, `books/`, or future fields.
- Added a hard rule against creating new top-level folders without user approval (top level should remain fields-of-knowledge + cross-cutting metadata only).
- Documented the wikilink convention: prefer bare filenames; use folder-qualified paths only for collisions.

### `index.md` rewrite

- Updated folder map to new tree.
- Reorganized sections: `## Technology` umbrella with sub-sections for Data Engineering, Software Engineering, Databases, Cloud (with GCP/AWS/Azure/Databricks nested), Tools, Guides.
- Added "Reserved fields" section for `philosophy/`, `art/`, `science/`.
- Statistics block updated.

### Files affected

- **Moved**: ~120 markdown pages.
- **Created**: 5 new Home pages, 1 rewritten Master Home, 1 rewritten `windsurf.md`, 1 rewritten `index.md`.
- **Updated**: 14 pages by wikilink regex + 8 Home pages with new nav strips.
- **Renamed**: `DBMS Home.md` ? `Databases Home.md`, `dbms/` folder ? `databases/`.

### Verification

- `grep -r "\[\[(gcp|aws|azure|databricks|dbms|data-engineering)/"` returns **zero matches**.
- `grep -r "\[\[concepts/"` returns **zero matches**.
- One filename collision identified (`data-catalog.md`) and disambiguated.
- All Dataview path strings in Home pages updated to new paths.

### Why this matters

The vault now has an architecture that scales beyond technology. When the user later ingests sources about philosophy, art, or science, the agent will create those top-level folders and they will sit as **peers** of `technology/`, not buried within it or jumbled at the same level as Cloud or DBMS. The categorization decision tree in `windsurf.md` ensures every future raw drop routes deterministically.

---

## 2026-06-10 — Consolidation: `science/statistics/` merged into `technology/machine-learning/statistics/`

**Operator**: Devin (CLI)
**Trigger**: User noticed duplicate statistics folders (`science/statistics/` and `technology/machine-learning/statistics/`) and requested consolidation.

### Action

- **Moved** 3 concept pages from `science/statistics/` → `technology/machine-learning/statistics/`:
  - `random-variables.md`
  - `law-of-large-numbers.md`
  - `survivorship-bias.md`
- **Fixed** all internal wikilinks in the moved pages (relative paths updated from `science/statistics/` to `technology/machine-learning/statistics/`).
- **Updated** `technology/machine-learning/statistics/statistics.md` (hub) — added Random Variables, Law of Large Numbers, and Survivorship Bias to the folder grid.
- **Updated** `wiki/index.md` — removed duplicate `science/statistics/` section; the 3 pages now live under the ML statistics list.
- **Updated** `career/technical-interviews.md` and `career/interview-techniques.md` — fixed cross-links from `science/statistics/` to `technology/machine-learning/statistics/`.
- **Updated** `wiki/log.md` — Batch 5 header amended to reflect the move.
- **Removed** empty `science/statistics/` folder.

### Result

Single source of truth for statistics content. The `science/` top-level field remains with `science/mathematics/` (calculus, series, combinatorics).

---

## 2026-06-09 — Ingest: `raw/` (DataScienceNotes flat drop)

**Operator**: Devin (CLI)
**Trigger**: User dropped a flat set of ~52 `.md` files + 4 PNG assets + 1 `.canvas` + 1 `.ipynb` into `raw/` and requested ingest per `plan.md`.

### Analysis

Concept-by-concept diff showed **~90% overlap** with existing wiki pages. Many raw files were 25-byte placeholder stubs. This was an **enrichment + gap-fill** pass, not a fresh ingest.

### New page created (1)

- `science/mathematics/linear-algebra.md` — vectors, dot products, norms, eigenvalues/eigenvectors, geometric intuition, applications in PCA, spectral clustering, PageRank.

### Pages enriched (7)

1. `technology/machine-learning/statistics/time-series.md` — added **Stationarity Testing** section: ADF test (hypothesis, formula, Python snippet), KPSS cross-reference, stationary vs non-stationary properties, differencing/log-transform guidance.
2. `technology/machine-learning/ml-algorithms/k-means.md` — added **DBSCAN** section: core/border/noise points, eps & minPts parameters, algorithm steps, sklearn example, strengths/weaknesses; expanded comparison table to include DBSCAN; added DBSCAN interview questions; embedded silhouette visualisation assets.
3. `technology/machine-learning/nlp/nlp-fundamentals.md` — added **Bag of Words** section (DTM construction, pros/cons, sparsity tip) and **One-Hot Encoding for NLP** section (orthogonality, dimensionality explosion, why embeddings are better); added BOW/TF-IDF interview questions.
4. `technology/machine-learning/ml-fundamentals/feature-engineering.md` — added "When to use standardisation" table (linear models, PCA, distance-based algos, neural networks, outliers, feature importance comparison).
5. `technology/machine-learning/ml-fundamentals/data-cleaning.md` — added **Missingness Mechanisms** section (MCAR / MAR / MNAR table with examples and strategies); added **Data Validation vs Data Transformation** section (goals, actions, timing, tools).
6. `technology/machine-learning/statistics/descriptive-statistics.md` — added **Interpolation vs Extrapolation** section (definitions, methods, risks, ML relevance); added interview questions.
7. `technology/tools/analytics-tools.md` — added Matplotlib to Notebook section and decision matrix.

### Assets routed

- 4 PNGs (silhouette score plots) → `wiki/attachments/`
- `data science project lifecycle.canvas` → `wiki/attachments/`; cross-linked from `model-lifecycle.md`
- `jupyter_notebook.ipynb` → `wiki/attachments/`; cross-linked from `analytics-tools.md`

### Updated

- `wiki/index.md` — added `linear-algebra` under Science / Mathematics.
- `plan.md` — status updated to COMPLETED.
- This `log.md` entry.
