---
title: Microsoft Azure
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 5:58:05 pm
aliases:
  - Azure
  - Microsoft Azure
category: Cloud
tags:
  - Azure
  - Cloud
  - Microsoft
  - DataEngineering
banner:
dg-publish: true
publish: true
---
---

[Microsoft Azure](https://azure.microsoft.com/) is Microsoft's cloud computing platform with **200+ products and services**. It is especially popular among **businesses already using Microsoft data products** (e.g. SQL Server) as they move to a hybrid model — on-prem servers + Azure (source: Tools/Cloud Providers/Microsoft Azure.md).

## Why Azure for data engineering

- **Strong fit for Microsoft shops** — SQL Server, Power BI, Active Directory integration is seamless.
- **Hybrid cloud** — best-in-class for organizations with significant on-prem investment.
- **Enterprise integration** — Office 365, Microsoft 365, Dynamics integrate natively.
- **Strong AI/ML** — Azure OpenAI Service is a market differentiator (since 2023).

## Key Azure services for data engineers

### Databases

- **Azure SQL Database** — managed SQL Server.
- **Azure SQL Managed Instance** — near-100% SQL Server compatibility.
- **Azure Cosmos DB** — multi-model NoSQL (document, KV, graph, column-family, table API).
- **Azure Database for PostgreSQL** — managed Postgres (incl. Hyperscale via Citus).
- **Azure Database for MySQL** — managed MySQL.
- **Azure Cache for Redis** — managed Redis.

### Analytics

- **Azure Synapse Analytics** — unified analytics: warehouse, data lake, Spark, pipelines.
- **Azure Data Explorer (Kusto)** — log + telemetry analytics.
- **Power BI** — BI tool with massive enterprise penetration.

### Storage

- **Azure Blob Storage** — object storage.
- **ADLS Gen2** — Blob Storage with hierarchical namespace optimized for analytics.
- **Azure Files** — managed SMB / NFS.
- **Azure Disk Storage** — block storage for VMs.

### Compute

- **Azure Virtual Machines** — IaaS.
- **Azure Container Instances** — fast container starts.
- **Azure Kubernetes Service (AKS)** — managed K8s.
- **Azure Functions** — FaaS.
- **Azure Batch** — managed batch processing.

### Data integration / ingestion

- **Azure Data Factory (ADF)** — visual + code ETL/ELT.
- **Azure Database Migration Service** — DB migration.
- **Synapse Pipelines** — ADF inside Synapse.

### Streaming + Messaging

- **Azure Event Hubs** — Kafka-compatible event streaming.
- **Azure Event Grid** — pub/sub event routing.
- **Azure Service Bus** — enterprise messaging (queues, topics).

### Orchestration

- **Azure Data Factory** — visual pipelines.
- **Logic Apps** — workflow automation.
- **Azure Synapse Pipelines** — ADF in Synapse.

### Governance + Security

- **Microsoft Purview** — unified data governance + catalog.
- **Microsoft Entra ID** (formerly Azure AD) — identity.
- **Azure Key Vault** — secrets + keys.
- **Azure Policy** — governance rules.

### AI + ML

- **Azure Machine Learning** — managed ML platform.
- **Azure OpenAI Service** — managed OpenAI models.
- **Cognitive Services** — pre-built AI APIs.

## Common Azure data architectures

### Modern data warehouse

```
[ Sources ] → [ ADF ] → [ ADLS Gen2 ] → [ Synapse SQL Pool ] → [ Power BI ]
                              │
                    [ Synapse Spark + Notebooks ]
                              │
                          [ Purview ]
```

### Lakehouse

```
[ Sources ] → [ ADF ] → [ ADLS Gen2 ] → [ Synapse Spark + Delta Lake ] → [ Power BI ]
```

### Real-time

```
[ Apps ] → [ Event Hubs ] → [ Stream Analytics ] → [ Synapse / Cosmos DB ] → [ Power BI ]
```

## Synapse Analytics — the centerpiece

Azure's flagship data platform. Combines:

- **SQL pools** (warehouse).
- **Spark pools** (big data).
- **Data integration** (ADF embedded).
- **Data lake** (ADLS Gen2).
- **Power BI** integration.

For Microsoft-stack orgs, Synapse is one-stop-shopping. For multi-cloud or non-Microsoft shops, individual services or competitors (Databricks, Snowflake, BigQuery) are usually preferred.

## Comparison with AWS and GCP

See [[../data-engineering/guides/cloud-services-map|Cloud Services Map]] for full side-by-side.

| Need | [[../aws/aws\|AWS]] | [[../gcp/foundations/google-cloud-platform\|GCP]] | Azure |
| --- | --- | --- | --- |
| Object storage | S3 | Cloud Storage | Blob / ADLS Gen2 |
| Warehouse | Redshift | BigQuery | Synapse SQL |
| Streaming | Kinesis | Pub/Sub | Event Hubs |
| BI | QuickSight | Looker Studio | **Power BI** |

## Strengths

- **Microsoft integration** — best-in-class for SQL Server, AD, Power BI, M365 environments.
- **Hybrid cloud** — Azure Arc extends to on-prem and other clouds.
- **Enterprise sales** — strong relationships with large orgs.
- **Power BI** — extremely popular BI; included in many M365 plans.
- **Azure OpenAI Service** — competitive advantage in GenAI (2024+).

## Weaknesses

- **Service overlap + naming confusion** — many services with similar capabilities.
- **Console UX** less polished than GCP's.
- **Lock-in** — Microsoft-specific patterns are pervasive.
- **Documentation** quality varies.

## Certifications

- **Azure Data Engineer Associate** (DP-203).
- **Azure Solutions Architect Expert**.
- **Azure Database Administrator Associate**.
- **Azure AI Engineer Associate**.

## Interview Questions

1. **Synapse** vs **Databricks on Azure** — choose-time considerations.
2. **Cosmos DB** APIs (SQL / MongoDB / Cassandra / Gremlin / Table) — when each.
3. **ADF** vs **Synapse Pipelines** — distinguish.
4. **Event Hubs** vs **Service Bus** — pros/cons.

## Related pages


> [!multi-column]
>
>> [!card] Sister cloud platforms
>> [[../aws/aws|AWS]], [[../gcp/foundations/google-cloud-platform|GCP]], [[../databricks/databricks|Databricks]]
>
>
>> [!card] Cross-cloud guides
>> [[../data-engineering/guides/cloud-services-map|Cloud Services Map]], [[../data-engineering/guides/cost-optimization-cloud|Cost Optimization]], [[../data-engineering/guides/messaging-service-guide|Messaging Service Guide]]
>
>
>> [!card] Tool catalogs
>> [[../data-engineering/tools/databases-overview|Databases Overview]], [[../data-engineering/tools/object-storage|Object Storage]], [[../data-engineering/tools/analytics-tools|Analytics + BI Tools (Power BI)]]

