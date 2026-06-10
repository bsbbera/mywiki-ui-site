---
title: Wiki Index
Created:
  - 2026-04-27
date modified: Thursday, June 11th 2026, 12:00:00 pm
aliases:
  - TOC
  - Table of Contents
category: Index
tags:
  - index
banner:
publish: true
---

---

> [!warning] Agent-facing catalog — DO NOT DELETE
> This file is the **machine-readable index** consulted by the ingestion agent (Cascade) before processing any new RAW content. Per `windsurf.md`, every new page must be cross-linked to existing ones; this file is how the agent discovers what already exists without grep-ing the whole vault.
>
> **For human navigation**, use `[[Master Home]]` instead — it is the visual dashboard with banners, cards, and live Dataview feeds. This file is intentionally flat + exhaustive for agent consumption.

Master table of contents. Top-level folders are organized as **fields of knowledge** (`technology/`, plus reserved `philosophy/` `art/` `science/`) and **cross-cutting metadata** (`people/`, `books/`). Under `technology/`, sub-domains group every existing tech page.

## Folder map

```
wiki/
├── Master Home.md            ← human-facing global dashboard
├── index.md                  ← this file (agent-facing catalog)
├── log.md                    ← operations log
│
├── technology/               ← 🛠️ field of knowledge
│   ├── Technology Home.md
│   ├── data-engineering/     ← DE concepts, sub-divided by discipline
│   │   ├── data-engineering.md   (the DE hub)
│   │   ├── data-architecture/    ← warehouse, lake, mart, mesh, lambda, kappa, medallion
│   │   ├── data-ingestion/       ← full / delta / CDC
│   │   ├── data-management/      ← catalog, governance, semantic + metrics layers
│   │   ├── data-modeling/        ← relational, dimensional, vault, OBT, activity
│   │   ├── data-processing/      ← batch, stream, OLTP, OLAP, HTAP, orchestration
│   │   ├── data-storage/         ← relational, NoSQL, doc, KV, graph, columnar, in-mem, TS
│   │   └── (data-pipeline.md, data-warehousing.md, sargable-expressions.md, data-ethics.md, faq.md)
│   ├── software-engineering/ ← CAP, sharding, scaling, indexing, idempotence, patterns
│   │   └── Software Engineering Home.md
│   ├── databases/            ← ACID, normalization (theory + specific systems)
│   │   └── Databases Home.md
│   ├── cloud/                ← all cloud platforms grouped
│   │   ├── Cloud Home.md
│   │   ├── gcp/   (foundations / compute / storage / databases / analytics / certifications)
│   │   ├── aws/
│   │   ├── azure/
│   │   └── databricks/
│   ├── tools/                ← vault-wide tooling reference
│   │   └── Tools Home.md
│   └── guides/               ← vault-wide practitioner playbooks
│       └── Guides Home.md
│
├── people/                   ← 👥 cross-cutting metadata
├── books/                    ← 📚 cross-cutting metadata
└── paradoxes/                ← 🧩 paradoxes field (activated 2026-06-11)
```

## Technology — `technology/`

### Data Engineering — `technology/data-engineering/`

#### Top-level

- [[data-engineering|Data Engineering]] — discipline overview + skill ladder.
- [[data-pipeline|Data Pipeline]] — architecture + ETL/ELT/CDC patterns.
- [[data-warehousing|Data Warehousing]] — OLAP vs OLTP, ETL/ELT, star schemas, data marts, lakehouse.
- [[sargable-expressions|Sargable Expressions]] — index-friendly SQL.
- [[data-ethics|Data Ethics]] — privacy, bias, GDPR.
- [[faq|FAQ]] — career questions, transitions, certifications.
- [[hadoop|Hadoop Ecosystem]] — HDFS, MapReduce, YARN, Hive, Pig, HBase; architecture, execution model, ecosystem comparison table. (Merges 7 raw files.)

#### Data Architecture — `technology/data-engineering/data-architecture/`

- [[data-architecture|Data Architecture]] — top-level taxonomy.
- [[data-warehouse|Data Warehouse]] · [[data-lake|Data Lake]] · [[data-mart|Data Mart]] · [[data-mesh|Data Mesh]] · [[lambda-architecture|Lambda]] · [[kappa-architecture|Kappa]] · [[medallion-architecture|Medallion]].

#### Data Ingestion — `technology/data-engineering/data-ingestion/`

- [[data-ingestion|Data Ingestion]] · [[full-load|Full Load]] · [[delta-load|Delta Load]] · [[change-data-capture|CDC]].

#### Data Management — `technology/data-engineering/data-management/`

- [[data-management|Data Management]] · [[technology/data-engineering/data-management/data-catalog|Data Catalog]] · [[data-governance|Data Governance]] · [[semantic-layer|Semantic Layer]] · [[metrics-layer|Metrics Layer]].

#### Data Modeling — `technology/data-engineering/data-modeling/`

- [[data-modeling|Data Modeling]] · [[relational-modeling|Relational]] · [[dimensional-modeling|Dimensional]] · [[data-vault-modeling|Data Vault]] · [[one-big-table|One Big Table]] · [[activity-schema|Activity Schema]] · [[cardinality|Cardinality]] · [[normalization|Normalization]] · [[denormalization|Denormalization]].

#### Data Processing — `technology/data-engineering/data-processing/`

- [[data-processing|Data Processing]] · [[batch-data-processing|Batch]] · [[stream-data-processing|Stream]] · [[online-transaction-processing|OLTP]] · [[online-analytical-processing|OLAP]] · [[hybrid-transactional-analytical-processing|HTAP]] · [[workflow-orchestration|Workflow Orchestration]].

##### Apache Spark / PySpark — `technology/data-engineering/data-processing/spark/`

- [[apache-spark|Apache Spark]] (engine hub) · [[pyspark|PySpark]] (Python API) · [[spark-architecture|Architecture]] (driver/executor, jobs/stages/tasks, deploy modes) · [[rdd|RDDs]] (transformations/actions, lineage, lazy eval) · [[spark-dataframe|DataFrames]] (schema, StructType, RDD vs DF vs Dataset) · [[spark-sql|Spark SQL]] (Catalyst, temp views, UDFs) · [[spark-performance|Performance]] (shuffle, partitioning, caching, broadcast, AQE, skew) · [[spark-streaming|Streaming]] (DStreams, checkpointing, receivers) · [[spark-mllib|MLlib]] (distributed ML summary).

#### Data Storage — `technology/data-engineering/data-storage/`

- [[data-storage|Data Storage]] · [[database|Database]] · [[relational-database|Relational]] · [[non-relational-database|NoSQL]] · [[document-database|Document]] · [[key-value-database|Key-Value]] · [[graph-database|Graph]] · [[wide-column-database|Wide-column]] · [[column-oriented-database|Columnar]] · [[in-memory-database|In-memory]] · [[timeseries-database|Time-series]].

### Software Engineering — `technology/software-engineering/`

Distributed-systems theory and design patterns shared across DE and backend.

- [[cap-theorem|CAP Theorem]] · [[database-sharding|Sharding]] · [[horizontal-scaling|Horizontal Scaling]] · [[vertical-scaling|Vertical Scaling]] · [[indexing|Indexing]] · [[idempotence|Idempotence]] · [[data-unit-test|Data Unit Test]] · [[publisher-subscriber-pattern|Pub/Sub Pattern]] · [[fan-out|Fan-out]] · [[claim-check-pattern|Claim Check]] · [[event-sourcing-pattern|Event Sourcing]] · [[latency-throughput|Latency vs Throughput]] · [[algorithms|Algorithms]].

#### Containers & Orchestration

- [[docker|Docker]] — container images, Dockerfile anatomy, docker-compose, volumes, networks, registries.
- [[kubernetes|Kubernetes]] — cluster architecture (nodes/pods), deployments, services, ConfigMaps/Secrets, Ingress, HPA, namespaces.

#### DevOps & SRE

- [[devops-sre|DevOps & SRE]] — DevOps culture, SLI/SLO/SLA, error budgets, blameless postmortems, CI/CD pipeline, microservices, 12-Factor App.
- [[terraform|Terraform]] — HCL syntax, providers, state management (local/remote), init→plan→apply workflow, modules, workspaces.

#### API Design

- [[rest-api|REST API & SDK]] — REST constraints, CRUD-to-HTTP mapping, status codes, auth patterns (API key/Bearer/Basic), versioning, rate limiting, REST vs GraphQL/gRPC.

### Guides — `technology/guides/`

- [[sql-patterns|SQL Patterns]] — logical execution order, window functions (OVER/PARTITION BY/frame spec), ranking functions (ROW_NUMBER, RANK, DENSE_RANK), conditional aggregation pivots, SQL optimisation checklist. (Merges 6 raw files.)

### Databases — `technology/databases/`

CS-theory foundations relevant to every database (replaces the old `databases/` folder).

- [[acid-properties|ACID Properties]] — atomicity, consistency, isolation, durability; transaction guarantees.
- [[database-normalization|Database Normalization]] — 1NF → 5NF + BCNF; eliminating redundancy and anomalies.

### Cloud — `technology/cloud/`

#### AWS — `technology/cloud/aws/`

- [[sagemaker|AWS SageMaker]] — end-to-end ML platform; Studio IDE, Ground Truth labelling, Processing jobs, Autopilot/built-in/BYOC training, Spot Instance training (60–70% cost saving), real-time endpoints, Batch Transform, Model Registry, Pipelines, Feature Store, Model Monitor.

#### GCP — `technology/cloud/gcp/`

##### Foundations — `technology/cloud/gcp/foundations/`
- [[google-cloud-platform|Google Cloud Platform]] — overview, history, pillars, competitors.
- [[regions-and-zones|Regions and Zones]] — multi-region ⊃ region ⊃ zone.
- [[service-models|Service Models]] — IaaS / PaaS / SaaS / FaaS with GCP examples.
- [[gcp-pricing-and-discounts|GCP Pricing and Discounts]] — per-second billing, SUD, CUD, preemptible/spot.

##### Compute — `technology/cloud/gcp/compute/`
- [[gcp-compute-services|GCP Compute Services]] — taxonomy across IaaS-to-FaaS.
- [[compute-engine|Compute Engine]] — IaaS VMs.
- [[app-engine|App Engine]] — PaaS managed runtime.
- [[kubernetes-engine|Kubernetes Engine]] — managed Kubernetes (Autopilot vs Standard).
- [[cloud-run|Cloud Run]] — serverless stateless containers.
- [[cloud-functions|Cloud Functions]] — FaaS (Gen 1 vs Gen 2).
- [[compute-engine-vs-app-engine|Compute Engine vs App Engine]] — decision guide.

##### Storage — `technology/cloud/gcp/storage/`
- [[Cloud Storage|Cloud Storage]] — object storage (Standard, Nearline, Coldline, Archive).
- [[persistent-disk|Persistent Disk]] — block storage for VMs.
- [[hyperdisk|Hyperdisk]] — next-gen block storage with independently scalable IOPS/throughput; up to 2.4M IOPS per VM.
- [[filestore|Filestore]] — managed NFS.
- [[firebase-cloud-storage|Firebase Cloud Storage]] — mobile/web layer on GCS.
- [[google-file-system|Google File System]] — the 2003 distributed FS (Colossus predecessor).
- [[storage-transfer-service|Storage Transfer Service]] — managed data transfer from AWS S3 / Azure Blob / on-prem to GCS.
- [[backup-and-dr|Google Cloud Backup and DR]] — centralized backup management with immutable vaults for GCE, databases, VMware.

##### Databases — `technology/cloud/gcp/databases/`
- [[cloud-sql|Cloud SQL]] — managed MySQL / Postgres / SQL Server.
- [[cloud-spanner|Cloud Spanner]] — globally distributed relational.
- [[cloud-bigtable|Cloud Bigtable]] — wide-column NoSQL at PB scale.
- [[cloud-datastore|Cloud Datastore]] — document NoSQL (Firestore in Datastore mode).
- [[firestore|Firestore]] — serverless document database with real-time sync, offline support, and 1M+ concurrent connections.
- [[alloydb|AlloyDB for PostgreSQL]] — fully managed PostgreSQL-compatible DB; 4x faster queries, 100x faster analytics.
- [[memorystore|Memorystore]] — managed Redis / Memcached / Valkey.
- [[database-migration-service|Database Migration Service]] — serverless CDC-based migrations to Cloud SQL / AlloyDB / Spanner; free service.

##### Analytics — `technology/cloud/gcp/analytics/`
- [[bigquery|BigQuery]] — serverless petabyte-scale data warehouse.
  - [[bigquery-sandbox|BigQuery Sandbox]] — free tier for learning.
  - [[bigquery-tables|BigQuery Tables]] — temporary, permanent, views.
  - [[bigquery-loading-data|Loading Data to BigQuery]] — batch + streaming ingestion.
  - [[bigquery-external-data|BigQuery External Data]] — federated queries / external tables.
  - [[bigquery-iam|BigQuery IAM]] — roles, members, policies.
  - [[bigquery-udfs|BigQuery UDFs]] — SQL + JavaScript user-defined functions.
  - [[bigquery-authorized-views|BigQuery Authorized Views]] — share filtered data.
  - [[bigquery-visualization|BigQuery Data Visualization]] — Looker Studio + Connected Sheets.
  - [[bigquery-query-management|BigQuery Query Management]] — history, saved, shared queries.
- [[dataflow|Cloud Dataflow]] — code-first ETL (Apache Beam, Java/Python).
- [[datafusion|Cloud Data Fusion]] — visual / low-code ETL.
- [[technology/cloud/gcp/analytics/data-catalog|Data Catalog]] — metadata + discovery (now part of Dataplex). *(Path-qualified to disambiguate from the DE concept page `[[technology/data-engineering/data-management/data-catalog]]`.)*
- [[pubsub|Pub/Sub]] — managed messaging spine.

##### AI & ML — `technology/cloud/gcp/ai-ml/`
- [[vertex-ai|Vertex AI]] — unified ML platform: training, serving, pipelines, Feature Store, Model Registry.
- [[gemini|Gemini]] — Google's multimodal LLM family (1.5 Pro/Flash, Ultra); integrated into Vertex AI.
- [[model-garden|Model Garden]] — curated catalog of Google, open-source, and third-party foundation models.
- [[vertex-ai-workbench|Vertex AI Workbench]] — managed Jupyter notebooks for ML development on GCP.
- [[colab-enterprise|Colab Enterprise]] — managed Google Colab with VPC support and enterprise security.
- [[cloud-tpu|Cloud TPU]] — purpose-built ML accelerators (v4 / v5p / v5e); used for LLM training and serving.
- [[document-ai|Document AI]] — ML-based document processing: OCR, form parsing, invoice/contract extractors.
- [[cloud-vision-api|Cloud Vision API]] — image analysis: label detection, OCR, face detection, landmark recognition.
- [[video-intelligence-api|Video Intelligence API]] — video analysis: shot detection, label detection, object tracking.
- [[speech-to-text|Speech-to-Text]] — ASR supporting 125+ languages; streaming + batch; Medical Speech model.
- [[text-to-speech|Text-to-Speech]] — neural TTS with WaveNet / Neural2 / Studio voices; SSML; 40+ languages.
- [[cloud-natural-language|Cloud Natural Language API]] — entity recognition, sentiment analysis, syntax parsing, content classification.
- [[cloud-translation|Cloud Translation API]] — neural machine translation; 100+ languages; Basic and Advanced tiers.
- [[dialogflow-cx|Dialogflow CX]] — enterprise conversational AI platform; state machine flows; multi-channel.
- [[vector-search|Vector Search]] — billion-scale ANN search; used for RAG and recommendations (formerly Matching Engine).

##### Networking — `technology/cloud/gcp/networking/`
- [[vpc|Virtual Private Cloud (VPC)]] — GCP's global virtual network; subnets, firewall rules, shared VPC, peering.
- [[cloud-load-balancing|Cloud Load Balancing]] — global/regional load balancers; HTTP(S)/TCP/SSL/UDP; anycast IP.
- [[cloud-cdn|Cloud CDN]] — content delivery on Google's edge PoPs; cache modes; signed URLs/cookies.
- [[cloud-dns|Cloud DNS]] — managed authoritative DNS; 100% SLA; DNSSEC; public/private zones.
- [[cloud-nat|Cloud NAT]] — managed NAT; outbound internet for private VMs without public IPs.
- [[cloud-armor|Cloud Armor]] — DDoS protection and WAF; OWASP Top 10 rules; adaptive protection; rate limiting.
- [[cloud-interconnect|Cloud Interconnect]] — dedicated/partner interconnect for hybrid connectivity (10/100 Gbps).
- [[cloud-vpn|Cloud VPN]] — IPsec VPN tunnels; HA VPN with 99.99% SLA; dynamic routing with Cloud Router.
- [[cloud-router|Cloud Router]] — managed BGP routing; works with Cloud VPN and Cloud Interconnect.
- [[network-intelligence-center|Network Intelligence Center]] — network monitoring suite: Connectivity Tests, Topology, Firewall Insights.

##### Security — `technology/cloud/gcp/security/`
- [[iam|IAM]] — resource-level permissions; principals, roles (primitive/predefined/custom); deny policies; Workload Identity.
- [[secret-manager|Secret Manager]] — versioned secrets storage with rotation, CMEK, and audit logging.
- [[cloud-kms|Cloud KMS]] — managed encryption keys (AES-256/RSA/EC); key rings; CMEK; HSM option.
- [[security-command-center|Security Command Center]] — centralized security posture; threat detection; vulnerability findings; compliance.
- [[cloud-identity|Cloud Identity]] — IDaaS; user/device/app management; SSO (SAML 2.0/OIDC); MFA; context-aware access.
- [[certificate-authority-service|Certificate Authority Service]] — managed private CA; issue/revoke X.509 certs; DevOps and Enterprise tiers.
- [[binary-authorization|Binary Authorization]] — deploy-time signed-image enforcement for GKE, Cloud Run, Cloud Build.
- [[vpc-service-controls|VPC Service Controls]] — API security perimeters to prevent data exfiltration from GCP services.

##### DevOps — `technology/cloud/gcp/devops/`
- [[cloud-build|Cloud Build]] — fully managed CI/CD; YAML build configs; triggers; Artifact Registry integration.
- [[artifact-registry|Artifact Registry]] — universal artifact repo: Docker, Maven, npm, Python, Helm; vulnerability scanning.
- [[cloud-deploy|Cloud Deploy]] — managed CD to GKE / Cloud Run / Anthos; canary/blue-green; approval gates.
- [[cloud-shell|Cloud Shell]] — browser-based shell with 5 GB persistent disk; pre-installed gcloud, kubectl, Terraform.
- [[cloud-workstations|Cloud Workstations]] — managed cloud developer workstations; container-based; VPC-connected.
- [[apigee|Apigee]] — full lifecycle API management; proxy, rate limiting, OAuth, analytics, developer portal.
- [[cloud-endpoints|Cloud Endpoints]] — API management for gRPC/REST; OpenAPI spec; JWT/API key auth; ESPv2 proxy.
- [[eventarc|Eventarc]] — managed eventing; routes events from GCP / SaaS / custom sources to Cloud Run / GKE / Workflows.
- [[workflows|Workflows]] — serverless workflow orchestration; YAML/JSON; parallel steps; error handling; connectors.
- [[cloud-scheduler|Cloud Scheduler]] — fully managed cron; HTTP/Pub/Sub/App Engine targets; timezone and retry config.

##### Operations — `technology/cloud/gcp/operations/`
- [[cloud-monitoring|Cloud Monitoring]] — metrics for GCP, AWS, on-prem; dashboards; alerting; SLO monitoring; Prometheus.
- [[cloud-logging|Cloud Logging]] — managed log management; structured logs; sinks to GCS/BigQuery/Pub/Sub; Log Analytics.
- [[cloud-trace|Cloud Trace]] — distributed tracing; latency analysis; OpenTelemetry compatible; Zipkin/Jaeger support.
- [[cloud-profiler|Cloud Profiler]] — continuous CPU/memory profiling in production; flame graphs; Go/Java/Node/Python.
- [[error-reporting|Error Reporting]] — real-time exception monitoring; auto-groups by stack trace; email/mobile alerts.
- [[cloud-debugger|Cloud Debugger]] — inspect production app state via snapshots and logpoints (now part of Cloud Trace).
- [[cloud-ids|Cloud IDS]] — network intrusion detection; Palo Alto threat signatures; east-west + north-south traffic.

##### Certifications — `technology/cloud/gcp/certifications/`
- [[Professional Data Engineer|Professional Data Engineer]] — PDE exam guide.

#### AWS — `technology/cloud/aws/`
- [[AWS|Amazon Web Services]] — service catalog, data engineering services, comparison.

#### Azure — `technology/cloud/azure/`
- [[azure|Microsoft Azure]] — service catalog, data engineering services, comparison.

#### Databricks — `technology/cloud/databricks/`
- [[databricks|Databricks]] — Spark + Delta Lake + MLflow lakehouse platform (cross-cloud).

### Tools — `technology/tools/`

Cross-cutting tool catalogs consumed by every tech sub-domain.

- [[databases-overview|Databases]] — Postgres, MySQL, MongoDB, Cassandra, ClickHouse, DuckDB, etc.
- [[orchestrators-overview|Orchestrators]] — Airflow, Dagster, Prefect, Step Functions, Mage.
- [[ingestion-tools|Ingestion]] — Airbyte, Fivetran, Debezium, dlt, Datastream, DMS.
- [[processing-tools|Processing]] — Spark, Beam, Flink, dbt, EMR, Dataflow.
- [[quality-tools|Data Quality]] — Great Expectations, dbt tests, Soda, Monte Carlo.
- [[analytics-tools|Analytics + BI]] — Looker, Power BI, Tableau, Superset, Cube, Druid.
- [[file-formats|File Formats]] — Parquet, ORC, Avro, Delta, Iceberg, Arrow.
- [[programming-languages|Programming Languages]] — SQL, Python, Java, Scala, Rust.
- [[object-storage|Object Storage]] — S3, GCS, Blob, MinIO.
- [[shell-toolkit|Shell Toolkit]] — grep, cut, tr, xargs, regex, pipes, Unix philosophy, network diagnostics.
- [[ssh|SSH & Tunneling]] — key-based auth, local/remote/dynamic port forwarding, ProxyJump, agent forwarding.
- [[tmux|Tmux]] — terminal multiplexer; sessions, windows, panes; persistence, configuration.
- [[python/python-patterns|Python Language Patterns]] — closures, decorators, context managers, super(), deep/shallow copy, NamedTuple.
- [[python/pandas-patterns|Pandas Patterns]] — vectorisation, method chaining, apply strategies, memory optimisation, chunked reading, Polars.

### Guides — `technology/guides/`

Cross-cutting practitioner playbooks.

- [[getting-started|Getting Started With DE]]
- [[sql-guide|SQL Guide]] — beginner → advanced (window functions, CTEs)
- [[data-pipeline-best-practices|Pipeline Best Practices]]
- [[testing-data-pipeline|Testing Your Data Pipeline]]
- [[data-governance-guide|Data Governance Guide]]
- [[cost-optimization-cloud|Cost Optimization in the Cloud]]
- [[messaging-service-guide|Choosing Your Messaging Service]]
- [[cloud-services-map|Cloud Services Map]] — AWS / Azure / GCP

### Machine Learning — `technology/machine-learning/`

ML domain hub and sub-domains. Source: `DataScienceNotes-master` (ingested 2026-06-08).

- [[machine-learning|Machine Learning]] — domain hub: types of learning, ML lifecycle, sub-domain map.

#### Statistics — `technology/machine-learning/statistics/`

- [[statistics|Statistics]] — sub-domain hub.
- [[hypothesis-testing|Hypothesis Testing]] — null/alt hypothesis, Z-test, Chi-squared, p-value, CLT, Law of Large Numbers.
- [[ab-testing|A/B Testing]] — experimental design, OEC, significance vs. practical significance.
- [[probability-distributions|Probability Distributions]] — random variables, PDF/PMF/CDF, Expected Value, LOTUS; Normal, Binomial, Poisson, Exponential, Gamma, Beta distributions.
- [[descriptive-statistics|Descriptive Statistics]] — variance, std dev, standard error, CV, correlation, covariance, collinearity, VIF, univariate/bivariate/multivariate analysis.
- [[sampling|Sampling]] — simple random, systematic, stratified, cluster, convenience, snowball; stratified K-Fold.
- [[bias-variance-tradeoff|Bias–Variance Tradeoff]] — bias, variance, irreducible error; underfitting vs. overfitting; practical levers.
- [[entropy-information-theory|Entropy & Information Theory]] — Shannon entropy, Information Gain, Gini Impurity, cross-entropy loss, KL divergence.
- [[vector-norms|Vector Norms]] — L0, L1 (Manhattan), L2 (Euclidean), Lp, L∞ (Chebyshev); regularisation link.
- [[monte-carlo-simulation|Monte Carlo Simulation]] — direct/importance/rejection sampling; Gibbs sampling; MCMC.
- [[cosine-similarity|Cosine Similarity]] — cosine similarity formula, cosine distance, document and word-vector applications.
- [[benfords-law|Benford's Law & Zipf's Law]] — first-digit law; fraud detection; word-frequency power law.
- [[mathematical-foundations-for-ml|Mathematical Foundations for ML]] — Euler's number e, derivatives, integrals, log rules, expectation/variance identities, series, Taylor/Maclaurin series, permutations/combinations.
- [[central-limit-theorem|Central Limit Theorem & LLN]] — CLT, Law of Large Numbers, sampling distributions, confidence intervals, foundations of statistical inference.
- [[time-series|Time Series Analysis]] — decomposition (trend, seasonality, noise), ARIMA, ACF/PACF, exponential smoothing, LSTM/Transformer forecasting.
- [[multi-armed-bandits|Multi-Armed Bandits]] — exploration-exploitation tradeoff, ε-Greedy, UCB, Thompson Sampling, contextual bandits.
- [[random-variables|Random Variables & Expected Value]] — discrete vs continuous, PMF/PDF/CDF, expected value, LOTUS, variance, moments, moment generating functions.
- [[law-of-large-numbers|Law of Large Numbers]] — WLLN and SLLN, standard error, confidence intervals, Gambler's Fallacy, regression to the mean.
- [[survivorship-bias|Survivorship Bias]] — selection bias, invisible failures, Wald's bomber problem, mitigation strategies.

#### ML Fundamentals — `technology/machine-learning/ml-fundamentals/`

- [[machine-learning-fundamentals|Machine Learning Fundamentals]] — sub-domain hub.
- [[supervised-learning|Supervised Learning]] — regression & classification algorithms overview.
- [[unsupervised-learning|Unsupervised Learning]] — clustering, anomaly detection, density estimation.
- [[feature-engineering|Feature Engineering]] — scaling, encoding, binning, feature crosses, dimensionality reduction.
- [[feature-selection|Feature Selection]] — filter, wrapper, embedded methods; PPS; variance threshold.
- [[evaluation-metrics|Evaluation Metrics]] — classification & regression metrics; confusion matrix, ROC-AUC, log loss, MAE, MSE, RMSE, R², adjusted R².
- [[cross-validation|Cross Validation]] — K-fold, stratified K-fold, model selection, leaky validation prevention.
- [[imbalanced-classification|Imbalanced Classification]] — class weights, SMOTE, undersampling, threshold tuning.
- [[outlier-detection|Outlier Detection]] — Z-score, IQR, Isolation Forest, DBSCAN, LOF, Elliptic Envelope.
- [[data-cleaning|Data Cleaning]] — imputation (simple, KNN, MICE), data leakage prevention, train-test split, Pipeline.
- [[data-leakage|Data Leakage]] — leaky predictors, leaky validation strategies, detection checklist, prevention via Pipeline + temporal splits.
- [[experiment-tracking|Experiment Tracking]] — MLflow, W&B, TensorBoard, DVC; tracking code/data/hyperparameters/metrics/artifacts; model registry.
- [[model-monitoring|Model Monitoring]] — concept drift, data drift, model degradation, champion–challenger, training-serving skew.
- [[ml-explainability|ML Explainability]] — LIME, SHAP, partial dependence plots, permutation importance, feature importance.
- [[active-learning|Active Learning]] — intelligent sampling, semi-supervised labelling, weak supervision, label consistency.
- [[concept-drift|Concept Drift & Data Drift]] — statistical property shifts in targets/features over time; PSI, KS test, Page-Hinkley detection; monitoring strategies.
- [[business-metrics-ml|Business Metrics for ML]] — churn analysis, Customer Lifetime Value (CLV), uplift modelling, market response models.
- [[data-labeling|Data Labeling]] — process feedback, human labeling, semi-supervised learning, active learning, weak supervision, label consistency.
- [[classification-types|Classification Types]] — binary, multiclass, multi-label, multi-output; architecture patterns, evaluation metrics, loss functions.

#### ML Algorithms — `technology/machine-learning/ml-algorithms/`

- [[ml-algorithms|ML Algorithms]] — sub-domain hub; decision trees, ensembles, linear models, SVM, clustering, dimensionality reduction.
- [[decision-trees|Decision Trees]] — ID3, C4.5, CART, CHAID, MARS; Gini vs. entropy; Information Gain; pruning; regression trees.
- [[ensemble-learning|Ensemble Learning]] — bagging, boosting, stacking, blending; voting (hard/soft); OOB evaluation.
- [[random-forest|Random Forest]] — bootstrap samples, random feature subsets, hyperparameters, Extra Trees, feature importance.
- [[gradient-boosting|Gradient Boosting]] — GBM, AdaBoost, XGBoost (regularisation, leaf-wise pruning, similarity score, early stopping), LightGBM (leaf-wise), CatBoost (native categorical).
- [[linear-models|Linear Models]] — linear regression, logistic regression (sigmoid, cross-entropy loss, coefficient interpretation), Ridge/Lasso/Elastic Net, perceptron, L1/L2 loss.
- [[svm|SVM]] — linear, soft-margin, kernel trick (RBF, polynomial, sigmoid), SVR, One-Class SVM; feature scaling requirement.
- [[naive-bayes|Naive Bayes]] — Bayes theorem, GaussianNB, MultinomialNB, BernoulliNB, independence assumption, Laplace smoothing.
- [[knn|KNN]] — lazy learning, distance metrics (Euclidean, Manhattan, Minkowski), choosing K, feature scaling, weighted KNN.
- [[k-means|K-Means]] — Lloyd's algorithm, K-Means++, silhouette score, elbow method, hierarchical clustering (agglomerative/divisive, linkage criteria).
- [[pca|PCA]] — standardisation, covariance matrix, eigen-decomposition, variance explained; LDA (class separability); t-SNE (non-linear embedding, perplexity).
- [[association-rules|Association Rules]] — Apriori, support, confidence, lift, conviction; market basket analysis.
- [[hyperparameter-tuning|Hyperparameter Tuning]] — grid search, randomised search, Bayesian optimisation (Optuna), early stopping.
- [[reinforcement-learning|Reinforcement Learning]] — MDP, Bellman equations, Q-Learning, DQN, policy gradients, actor-critic, exploration-exploitation.

#### Deep Learning — `technology/machine-learning/deep-learning/`

- [[deep-learning|Deep Learning]] — sub-domain hub; neural network fundamentals, workflow, PyTorch examples.
- [[neural-networks|Neural Networks]] — perceptron, MLP, activation functions (sigmoid, tanh, ReLU, Leaky ReLU, ELU, Swish), backpropagation, weight initialisation (Xavier, He), forward/backward pass.
- [[optimisation-algorithms|Optimisation Algorithms]] — SGD, Momentum, RMSprop, Adam, AdamW; learning rate schedulers (step, cosine, plateau, one-cycle, warmup); gradient clipping; complete training loop.
- [[cnn|CNN]] — convolution operation, kernel arithmetic, pooling, LeNet, AlexNet, VGG, ResNet (skip connections), DenseNet, EfficientNet; transfer learning with pre-trained CNNs; PyTorch implementations.
- [[rnn-lstm-gru|RNN, LSTM & GRU]] — vanilla RNN, vanishing/exploding gradients, LSTM gates (forget/input/output), GRU (reset/update), bidirectional RNNs, encoder-decoder with attention.
- [[regularisation-training|Regularisation & Training]] — dropout, batch normalisation, weight decay, early stopping, data augmentation, label smoothing, mixup, cutout, gradient clipping.
- [[transfer-learning|Transfer Learning]] — feature extraction, fine-tuning, progressive unfreezing, discriminative learning rates; NLP transfer (Word2Vec, GloVe, BERT); domain adaptation.
- [[transformers|Transformers]] — self-attention, scaled dot-product attention, multi-head attention, positional encoding, feed-forward layers, layer norm, residual connections; BERT vs. GPT; complete PyTorch implementation.
- [[autoencoders-gans|Autoencoders & GANs]] — autoencoder, denoising AE, VAE (reparameterisation trick); GANs (generator/discriminator), DCGAN, WGAN-GP; comparison table.
- [[language-models|Language Models]] — N-gram, neural and statistical LMs, sequence-to-sequence, machine translation, modern pre-training paradigms.
- [[bert|BERT]] — bidirectional encoder representations; masked language model (MLM); next sentence prediction (NSP); BERT Base/Large; fine-tuning for classification, QA, NER; descendant models (RoBERTa, DistilBERT, ELECTRA, DeBERTa).
- [[keras|Keras]] — TensorFlow high-level API; Sequential, Functional, and Subclassing APIs; callbacks (EarlyStopping, ModelCheckpoint, TensorBoard); custom layers, losses, and metrics.

#### MLOps — `technology/machine-learning/mlops/`

- [[mlops|MLOps]] — ML lifecycle management (scoping, data, modelling, deployment, monitoring), data-centric vs model-centric, maturity model.
- [[deployment-patterns|ML Deployment Patterns]] — Blue-Green, Canary, Shadow, Champion-Challenger, and Rolling deployment with comparison tables.
- [[ci-cd-ml|CI/CD for ML]] — 6-stage ML pipeline automation, data validation, model deployment stages, tooling.
- [[model-lifecycle|Model Lifecycle]] — model degradation (slow/fast), scaling strategies, retirement criteria.
- [[kubeflow|Kubeflow]] — Kubernetes-native MLOps platform; KFP pipelines, training operators, model serving.

#### NLP — `technology/machine-learning/nlp/`

- [[nlp-fundamentals|NLP Fundamentals]] — text preprocessing pipeline (tokenisation, stemming, lemmatisation, stopwords), TF-IDF, word embeddings, information retrieval, topic modelling.
- [[word2vec|Word2Vec]] — CBOW vs Skip-Gram architectures, negative sampling, distributed representations, vector arithmetic.
- [[sequence-models|Sequence Models]] — RNN, LSTM, GRU, Transformers, attention, encoder-decoder architecture, machine translation.
- [[n-gram-model|N-Gram Model]] — n-gram language models, Markov assumption, smoothing (Laplace, Kneser-Ney), Zipf's Law.

## Finance — `finance/`

### Hub
- [[Finance Home|Finance Home]] — top-level finance knowledge hub; overview, sub-sections, essential formulas, three-statement connection.

### Financial Statements — `finance/financial-statements/`
- [[financial-statements|Financial Statements]] — hub; the three core statements, annual report structure, P&L-to-Balance-Sheet connection.
- [[income-statement|Income Statement]] — revenue, COGS, gross profit, SG&A, R&D, interest expense, EBITDA, operating income, PBT, PAT/Net Income.
- [[balance-sheet|Balance Sheet]] — assets (current/non-current), liabilities (current/long-term), shareholders’ equity, accounting equation.
- [[cash-flow-statement|Cash Flow Statement]] — operating/investing/financing activities, free cash flow, OCF quality checks.

### Financial Ratios — `finance/financial-ratios/`
- [[financial-ratios|Financial Ratios]] — hub; all 4 families, master reference table (23 ratios), screening thresholds.
- [[profitability-ratios|Profitability Ratios]] — Gross margin, EBITDA margin, PAT margin, ROE (DuPont decomposition), ROA, ROCE.
- [[leverage-ratios|Leverage Ratios]] — Debt/Equity, Debt/Assets, Financial Leverage Ratio, Interest Coverage Ratio, Current Ratio.
- [[operating-ratios|Operating Ratios]] — Inventory Turnover, Inventory Days, AR Turnover, DSO, Total Asset Turnover, Working Capital Turnover.

### Investing & Valuation — `finance/investing/`
- [[investing|Investing]] — fundamental analysis framework, core/satellite allocation, risk parity, Sharpe ratio, CAPE/Shiller PE, shares outstanding, stock splits.
- [[valuation-ratios|Valuation Ratios]] — EPS, P/E, PEG, P/B, P/S, EV/EBITDA, Dividend Yield; when each applies, screening workflow.
- [[dcf-valuation|DCF Valuation]] — time value of money, intrinsic value, FCF, owner’s earnings, DCF Method 1 & 2 (full worked example), terminal value, NPV, margin of safety.
- [[stock-analysis|Stock Analysis]] — 4-stage methodology, ratio screening, 18-question business checklist, Piotroski Score (9 criteria), value trap warning signs.

## Science — `science/`

Newly activated field (2026-06-08) — mathematics and statistics foundations for machine learning.

### Mathematics — `science/mathematics/`
- [[calculus|Calculus]] — derivatives, integrals, chain/product/quotient rules, exponential growth/decay, Euler's number e, Newton's method, numerical solving.
- [[series|Series & Sequences]] — finite summations, geometric series, Taylor and Maclaurin series, convergence tests, applications in ML (activation approximations, Newton's method).
- [[combinatorics|Combinatorics]] — permutations, combinations, binomial theorem, Catalan numbers, Stirling numbers; applications in feature selection, ensemble methods, graph counting.
- [[linear-algebra|Linear Algebra]] — vectors, dot products, norms, eigenvalues and eigenvectors; geometric intuition; applications in PCA, spectral clustering, PageRank.

## Career — `career/`

Newly activated field (2026-06-08) — interview techniques, negotiation, and technical preparation.

- [[career|Career]] — field hub; professional development, communication, strategic positioning.
- [[interview-techniques|Interview Techniques]] — STAR format, behavioural questions, salary negotiation, body language, 30-60-90 day plans.
- [[technical-interviews|Technical Interviews]] — SQL (window functions, CTEs, optimisation), Python coding, probability puzzles, system design for ML.

## Paradoxes — paradoxes/

Newly activated field (2026-06-11) — ~300 paradoxes across 17 thematic notes + hub + curated Top 100.

### Hub & curated list
- [[Paradoxes Home|Paradoxes Home]] — field hub; definition (veridical / falsidical / antinomy), map of all notes, link to Top 100.
- [[top-100-paradoxes|Top 100 Paradoxes]] — curated ranking of the most important paradoxes from the full ~297 collection.

### Thematic notes
- [[logical-paradoxes|Logical Paradoxes]] — Logic + Self-reference + Vagueness.
- [[mathematical-paradoxes|Mathematical Paradoxes]] — Mathematics + Infinity & infinitesimals + Geometry & topology.
- [[statistical-paradoxes|Statistical Paradoxes]] — Statistics (promoted for vault relevance).
- [[probability-paradoxes|Probability Paradoxes]] — Probability (promoted for vault relevance).
- [[decision-theory-paradoxes|Decision Theory Paradoxes]] — Decision theory + game theory.
- [[physics-paradoxes|Physics Paradoxes]] — Physics + Astrophysics + Classical mechanics + Cosmology + Fluid mechanics + Electromagnetism + Quantum mechanics + Relativity + Thermodynamics.
- [[biological-paradoxes|Biological Paradoxes]] — Biology + Health & nutrition.
- [[chemical-paradoxes|Chemical Paradoxes]] — Chemistry.
- [[time-travel-paradoxes|Time Travel Paradoxes]] — Time travel + causal loops.
- [[linguistic-ai-paradoxes|Linguistic & AI Paradoxes]] — Linguistics & artificial intelligence.
- [[philosophical-paradoxes|Philosophical Paradoxes]] — Philosophy + ethics + metaphysics.
- [[mystical-paradoxes|Mystical Paradoxes]] — Mysticism + Kabbalah + Zen.
- [[economic-paradoxes|Economic Paradoxes]] — Economics + competition + market paradoxes.
- [[perceptual-paradoxes|Perceptual Paradoxes]] — Perception + optical illusions.
- [[political-paradoxes|Political Paradoxes]] — Politics + voting systems + social choice.
- [[psychological-paradoxes|Psychological Paradoxes]] — Psychology & sociology + cognitive biases.
- [[miscellaneous-paradoxes|Miscellaneous Paradoxes]] — Outliers and curiosities.

## People — `people/`

Stub pages (frontmatter + minimal bio + related-page links) for individuals referenced across the wiki.

- [[edgar-f-codd|Edgar F. Codd]] — invented the relational model.
- [[ralph-kimball|Ralph Kimball]] — dimensional modeling pioneer.
- [[bill-inmon|Bill Inmon]] — "Father of the Data Warehouse".
- [[dan-linstedt|Dan Linstedt]] — created Data Vault.
- [[zhamak-dehghani|Zhamak Dehghani]] — coined Data Mesh.
- [[martin-kleppmann|Martin Kleppmann]] — author of DDIA.
- [[eric-brewer|Eric Brewer]] — proposed CAP theorem.
- [[seth-gilbert-nancy-lynch|Seth Gilbert + Nancy Lynch]] — proved CAP.
- [[jay-kreps|Jay Kreps]] — co-creator of Apache Kafka.
- [[jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]] — Google's GFS / MapReduce / BigTable / Spanner papers.
- [[joe-reis-matt-housley|Joe Reis + Matt Housley]] — *Fundamentals of Data Engineering*.
- [[daniel-abadi|Daniel Abadi]] — proposed PACELC; co-creator of C-Store / Vertica.
- [[greg-young|Greg Young]] — coined CQRS + modern Event Sourcing.
- [[martin-fowler|Martin Fowler]] — software architecture, refactoring, EAA patterns.
- [[andrej-karpathy|Andrej Karpathy]] — LLM Wiki pattern this knowledge base follows.
- [[doug-cutting|Doug Cutting]] — created Apache Hadoop / Lucene.
- [[matei-zaharia|Matei Zaharia]] — created Apache Spark; co-founded Databricks.
- [[wenqiang-feng|Wenqiang Feng]] — author of *Learning Apache Spark with Python*.
- [[warren-buffett|Warren Buffett]] — chairman of Berkshire Hathaway; “Oracle of Omaha”; greatest capital allocator in history.
- [[benjamin-graham|Benjamin Graham]] — “father of value investing”; *Security Analysis* (1934); *The Intelligent Investor* (1949); mentor to Buffett.
- [[peter-lynch|Peter Lynch]] — manager of the Magellan Fund (1977–1990); 29.2% average annual return; *One Up on Wall Street*.
- [[joseph-piotroski|Joseph Piotroski]] — Stanford accounting professor; creator of the Piotroski F-Score (2000).
- [[solomon-hykes|Solomon Hykes]] — creator of Docker (2013); founder of dotCloud and Dagger.
- [[mitchell-hashimoto|Mitchell Hashimoto]] — co-founder of HashiCorp; creator of Terraform, Vagrant, Vault, Consul, Nomad.
- [[gene-kim|Gene Kim]] — author of *The Phoenix Project* and *Accelerate*; DevOps researcher; founder of Tripwire.
- [[jez-humble|Jez Humble]] — co-author of *Continuous Delivery* and *Accelerate*; DORA metrics contributor.

## Books — `books/`

Stub pages for influential books with cover images.

- [[designing-data-intensive-applications|Designing Data-Intensive Applications]] — Martin Kleppmann.
- [[the-data-warehouse-toolkit|The Data Warehouse Toolkit]] — Ralph Kimball + Margy Ross.
- [[fundamentals-of-data-engineering|Fundamentals of Data Engineering]] — Joe Reis + Matt Housley.
- [[building-a-scalable-data-warehouse-with-data-vault-2|Building a Scalable Data Warehouse with Data Vault 2.0]] — Dan Linstedt.
- [[building-the-data-warehouse|Building the Data Warehouse]] — Bill Inmon.
- [[learning-apache-spark-with-python|Learning Apache Spark with Python]] — Wenqiang Feng (free PySpark + MLlib tutorial).
- [[the-intelligent-investor|The Intelligent Investor]] — Benjamin Graham; the definitive book on value investing; Mr. Market & Margin of Safety.
- [[security-analysis|Security Analysis]] — Benjamin Graham & David Dodd (1934); founding text of fundamental analysis.
- [[the-phoenix-project|The Phoenix Project]] — Gene Kim, Kevin Behr, George Spafford; DevOps business novel; The Three Ways.
- [[accelerate|Accelerate]] — Nicole Forsgren, Jez Humble, Gene Kim; evidence-based DevOps research; DORA metrics.
- [[site-reliability-engineering|Site Reliability Engineering]] — Betsy Beyer et al. (Google); canonical SRE reference; SLOs, error budgets, blameless postmortems.

## Reserved fields (not yet ingested)

- `philosophy/`  → ethics, metaphysics, epistemology
- `art/`         → photography, painting, music, cinema
- `science/`     → activated 2026-06-08; mathematics and statistics sub-fields.

These folders do not exist yet. They will be created on the first ingest of relevant content per `windsurf.md` rule "Phase 2 — Categorize".

*Notes:*
- `science/` was activated on 2026-06-08 with mathematics and statistics sub-fields.
- `finance/` was activated on 2026-06-08 and is now a live field of knowledge.
- `career/` was activated on 2026-06-08 with interview techniques and technical prep sub-fields.

## GCP service decision matrix

### Databases
| Need | Pick |
| --- | --- |
| OLTP relational, regional | [[cloud-sql|Cloud SQL]] |
| OLTP relational, global ACID | [[cloud-spanner|Cloud Spanner]] |
| Wide-column / time-series / IoT | [[cloud-bigtable|Cloud Bigtable]] |
| Document NoSQL | [[cloud-datastore|Datastore / Firestore]] |
| Cache (in-memory) | [[memorystore|Memorystore]] |

### Storage
| Need | Pick |
| --- | --- |
| Object blobs | [[cloud-storage|Cloud Storage]] |
| Block storage for VMs | [[persistent-disk|Persistent Disk]] |
| Shared filesystem (NFS) | [[filestore|Filestore]] |
| Mobile/web uploads | [[firebase-cloud-storage|Firebase Cloud Storage]] |

### Analytics
| Need                            | Pick                                          |
| ------------------------------- | --------------------------------------------- |
| SQL warehouse                   | [[bigquery                                    |
| Code-first ETL                  | [[dataflow                                    |
| Visual ETL                      | [[datafusion                                  |
| Messaging / streaming bus       | [[pubsub                                      |
| Metadata + discovery            | [[technology/cloud/gcp/analytics/data-catalog |
| Spark / lakehouse / ML platform | [[databricks                                  |

## Stub topics (referenced but not yet ingested)

- BigQuery ML, BigLake, BI Engine, **Analytics Hub**
- **Dataproc** (managed Hadoop / Spark)
- **Cloud Composer** (managed Airflow), **Cloud Workflows**
- **Dataplex** (consolidated governance), Dataplex Catalog (= Data Catalog)
- **Datastream** (CDC)
- **AlloyDB** (PostgreSQL-compatible Cloud SQL successor)
- **Firestore in Native mode** (real-time client SDKs)
- **Vertex AI**, AutoML, Feature Store
- VPC, Cloud Load Balancing, Cloud CDN
- IAM (general), Cloud KMS, Cloud DLP
- **Colossus** — successor to [[google-file-system|GFS]]; underlies GCS, Bigtable, Spanner, BigQuery
- **Pub/Sub Lite**, Pub/Sub Schema Registry

## Statistics

- **Top-level folders**: 5 active (`technology/`, `people/`, `books/`, `science/`, `career/`) + 2 reserved (`philosophy/`, `art/`).
- **Sub-domains under `technology/`**: 7 (`data-engineering/`, `software-engineering/`, `databases/`, `cloud/`, `tools/`, `guides/`, `machine-learning/`); `tools/python/` added 2026-06-08.
- **Cloud platforms under `technology/cloud/`**: 4 (`gcp/`, `aws/`, `azure/`, `databricks/`).
- **People stubs**: 35.
- **Book stubs**: 11.
- **Concept pages**: ~240 (incl. 9 Apache Spark / PySpark pages; +14 ML/statistics +15 ML/fundamentals +12 ML/algorithms +10 ML/deep-learning pages; +16 new ML/MLOps/NLP notes 2026-06-09; +8 tech notes 2026-06-09: docker, kubernetes, hadoop, devops-sre, sagemaker, rest-api, terraform, sql-patterns; +13 finance notes 2026-06-09: Finance Home, financial-statements, income-statement, balance-sheet, cash-flow-statement, financial-ratios, profitability-ratios, leverage-ratios, operating-ratios, investing, valuation-ratios, dcf-valuation, stock-analysis).
- **Source-summary pages**: 0 (concept pages cite raw sources inline).
- **Related-pages format**: topic-grouped callouts (per `windsurf.md`).
- **Infoboxes**: `> [!infobox|right]` on all named-entity notes (18 people + 6 books + 31 tools/cloud-services/platforms + 1 certification = 56); placed above the daily-quote block. Abstract concept/theory/pattern/guide pages intentionally have **no infobox**.
- **Total wiki pages**: ~290 + index + log + 9 Home dashboards (new: science/mathematics/, career/ 2026-06-08).

## See also

- [[log|Operations Log]]
- `../windsurf.md` — wiki rules and ingest workflow
