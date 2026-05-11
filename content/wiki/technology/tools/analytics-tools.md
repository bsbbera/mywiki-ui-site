---
title: Analytics + BI Tools
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Analytics Tools
  - BI Tools
category: Computer Science
tags:
  - DataEngineering
  - Analytics
  - BI
  - Tools
banner:
dg-publish: true
publish: true
---
---

Catalog of analytics, BI, dashboarding, and metrics-layer tools (source: Tools/Data Analytics/*.md).

## Dashboarding / BI

### Looker Studio (formerly Data Studio)

Google's free BI tool. See [[../../gcp/analytics/bigquery-visualization|BigQuery Visualization]] for the full treatment. Drag-and-drop, free, integrates with BigQuery + 100s of connectors. Looker Studio Pro adds team workspaces, scheduled reports.

### Looker

Google-owned BI platform with **LookML** — code-based [[../concepts/data-management/semantic-layer|semantic layer]]. Different from Looker Studio.

### Power BI

Microsoft's BI tool — dominant in Microsoft-heavy enterprises. Premium tier offers paginated reports, AI features, large semantic models.

### Tableau

Salesforce-owned BI; visualization-first; broad connector library.

### Superset

[Apache Superset](https://superset.apache.org/) — open-source BI from Airbnb. Self-hosted; SQL-driven.

### Metabase

Open-source / commercial BI. Easier learning curve than Superset; strong "ask a question" UX.

### Mode

Notebook + BI hybrid; analyst-friendly.

### Hex

Modern data workspace combining notebooks, SQL, dashboards.

## Metrics + semantic layer

### Cube.js

Open-source [[../concepts/data-management/metrics-layer|metrics layer]]; framework-agnostic; embedded BI ready.

### MetricFlow / dbt Semantic Layer

dbt Labs' metrics layer (via Transform acquisition). Defines metrics next to dbt models.

### Metriql

Open-source layer over dbt metrics.

### Lightdash

Open-source BI built on dbt — auto-generated visualizations from dbt YAML.

## Real-time / sub-second analytics

### Rill Data

Real-time dashboards for operational analytics. Self-hosted or cloud.

### Apache Druid

Sub-second OLAP at high concurrency. Used by Netflix, Walmart, Confluent.

### Apache Pinot

LinkedIn-born; real-time + batch ingestion; sub-second queries at scale.

### ClickHouse

OLAP DB used as a real-time analytics layer.

## Notebook / data science

### Jupyter / JupyterLab

The canonical Python notebook.

### Google Colab / Vertex AI Workbench / Colab Enterprise

GCP managed Jupyter.

### Databricks Notebooks

Multi-language notebooks (Python, SQL, R, Scala) on Spark.

### Hex / Deepnote / Mode

Collaborative notebook + dashboard hybrids.

## Decision matrix

| Need | Pick |
| --- | --- |
| **Free + GCP-native** | **Looker Studio** |
| **Enterprise BI on Microsoft stack** | **Power BI** |
| **Visualization quality** | **Tableau** |
| **Code-based semantic layer** | **Looker (LookML)** |
| **Open-source self-hosted BI** | **Superset / Metabase** |
| **Embedded BI** | **Cube** |
| **Headless metrics layer** | **dbt Semantic Layer / Cube** |
| **Real-time dashboards** | **Druid / Pinot / ClickHouse / Rill** |
| **Notebook + collaboration** | **Hex / Deepnote / Databricks Notebooks** |

## Modern trends

- **Decoupled BI** — semantic/metrics layer + thin BI clients.
- **Reverse ETL** — push warehouse data to operational tools (Hightouch, Census).
- **AI-assisted analytics** — natural-language → SQL (most BI tools now have this).
- **Embedded analytics** — analytics inside SaaS products (Cube, Looker Embedded).

## Related pages

> [!multi-column]
>
>> [!card] Data Management
>> [[../concepts/data-management/semantic-layer|Semantic Layer]], [[../concepts/data-management/metrics-layer|Metrics Layer]], [[../concepts/data-management/data-catalog|Data Catalog]]
>
>
>> [!card] Sister catalogs
>> [[databases-overview|Databases Overview]], [[processing-tools|Processing Tools (dbt)]]
>
>
>> [!card] Products
>> [[../../gcp/analytics/bigquery-visualization|BigQuery Visualization (Looker Studio)]], [[../../gcp/analytics/bigquery|BigQuery]]

