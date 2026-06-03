---
title: Cost Optimization in the Cloud
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Cost Optimization
  - FinOps
category: Computer Science
tags:
  - DataEngineering
  - Cost
  - FinOps
  - Cloud
  - Guide
banner:
publish: true
---

> "We don't stop playing because we grow old; we grow old because we stop playing."
> <cite>— George Bernard Shaw</cite>

---

Strategies for **reducing cloud spend** across compute, storage, and analytics, illustrated with the major providers (source: Guides/Cost Optimization in the Cloud.md).

## General compute

General compute = servers for general work (transforms, hosting). Range from full IaaS to managed.

| Cloud | Examples |
| --- | --- |
| **AWS** | EC2, Fargate, Batch |
| **Azure** | Virtual Machine, Container Instances, Batch |
| **GCP** | [[../cloud/gcp/compute/compute-engine\|Compute Engine]], [[../cloud/gcp/compute/cloud-run\|Cloud Run]], Batch on GKE |

### 1. Turn on metrics monitoring

You can't optimize what you can't measure. Monitoring services:

- **AWS**: [CloudWatch](https://aws.amazon.com/cloudwatch/)
- **Azure**: [Azure Monitor](https://azure.microsoft.com/en-us/products/monitor/)
- **GCP**: [Cloud Monitoring](https://cloud.google.com/monitoring/)
- Third-party: [Datadog](https://www.datadoghq.com/)

Once monitoring is on, understand workload patterns. If usage is **unpredictable**, consider **serverless**.

### 2. Rightsize resources

Adjust resources to actual usage. Common scenario: production workloads are **over-provisioned by 2–5×** because of "safe margins" set up months ago. Real metrics tell you the truth.

### 3. Enable autoscaling

Auto add/remove resources based on demand. Set high/low thresholds based on typical workload.

### 4. Use spot / preemptible instances

VM instances that **can be terminated** any time when capacity is needed elsewhere. Costs **up to 90% less**. Suitable for **fault-tolerant, stateless, flexible** workloads (CI/CD, batch processing) — NOT for stateful production services.

| Cloud | Spot/Preemptible |
| --- | --- |
| **AWS** | [EC2 Spot Instances](https://aws.amazon.com/ec2/spot/) |
| **Azure** | [Spot VMs](https://azure.microsoft.com/en-us/products/virtual-machines/spot) |
| **GCP** | [Spot VMs](https://cloud.google.com/spot-vms) |
| **IBM** | [Transient virtual servers](https://cloud.ibm.com/docs/virtual-servers?topic=virtual-servers-about-vs-transient) |

### 5. Savings plans / committed use

Multi-year commitments to use a predictable amount → significant discount (20–60%).

- [AWS Savings Plans](https://aws.amazon.com/savingsplans/)
- [Azure Savings Plan for Compute](https://azure.microsoft.com/en-us/pricing/offers/savings-plan-compute/)
- [GCP Committed Use Discounts](https://cloud.google.com/docs/cuds)

For predictable steady workloads, this is **high-impact, low-effort**.

## Databases

(source covers this as a placeholder; common patterns added)

- **Right-size storage** — auto-scaling storage where available.
- **Read replicas** instead of vertical scaling for read-heavy.
- **Connection pooling** — reduces DB instance load.
- **Archive cold data** — move historical to cheaper storage tiers.
- **Reserved capacity** — same idea as compute commitments.

## Warehouses (analytics)

### BigQuery cost optimizations

- **Partition + cluster** tables — drastically reduces bytes scanned.
- **Materialized views** for common aggregates.
- **BigQuery Editions** (slot-based) for predictable workloads vs on-demand.
- Set **query cost limits** per user / per query.
- Monitor INFORMATION_SCHEMA.JOBS for top spenders.

### Snowflake / Redshift

- **Auto-suspend** warehouses when idle.
- **Right-size warehouse**.
- **Zero-copy clones** for testing — no extra storage cost.

## Storage

- **Tier appropriately**: Standard (hot) → Nearline (cool) → Coldline → Archive.
- **Lifecycle rules** — auto-transition + auto-delete.
- **Region selection** — single-region cheaper than multi-region; check egress patterns.
- **Compression** — Parquet/ORC over CSV.

## Networking

Often the biggest hidden cost.

- **Same-region traffic** is usually free or cheap.
- **Cross-region** transfers $.
- **Egress out of cloud** is the most expensive.
- Use **VPC peering / Private Service Connect** to keep traffic internal.
- **CDN** for static assets reduces origin egress.

## FinOps practices

- **Cost dashboards** — visible to engineering teams.
- **Tagging / labeling** — every resource has team + project + environment tags.
- **Showback / chargeback** — teams see (or pay) their costs.
- **Cost reviews** — monthly with engineering leads.
- **Anomaly alerts** — sudden cost spikes trigger investigation.

## Tooling

- **AWS Cost Explorer**, **Azure Cost Management**, **GCP Cost Insights**.
- **CloudHealth**, **Cloudability** — multi-cloud FinOps.
- **Kubecost** — Kubernetes cost allocation.
- **Vantage**, **Infracost** — IaC cost preview.

## Interview Questions

1. **Spot instances** — when use, when avoid.
2. **Committed use** vs **on-demand** — break-even analysis.
3. **Egress** costs — strategies to minimize.
4. **BigQuery query cost** — top 5 optimizations.
5. **FinOps** — what does the practice involve?

## Related pages

> [!grid]
>
>> [!card] Sister guides
>> [[data-pipeline-best-practices|Pipeline Best Practices]], [[cloud-services-map|Cloud Services Map]], [[messaging-service-guide|Messaging Service Guide]]
>
>
>> [!card] Cloud product pages
>> [[../cloud/gcp/foundations/gcp-pricing-and-discounts|GCP Pricing + Discounts]], [[../cloud/gcp/analytics/bigquery|BigQuery]], [[AWS|AWS]], [[../cloud/azure/azure|Azure]]

