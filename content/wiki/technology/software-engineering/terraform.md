---
title: Terraform
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Terraform IaC
  - HashiCorp Terraform
  - Infrastructure as Code
  - HCL
category: Software Engineering
tags:
  - Terraform
  - InfrastructureAsCode
  - DevOps
  - HashiCorp
  - CloudProvisioning
banner: https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Terraform
> ###### Tool Note
> | | |
> | --- | --- |
> | **Developer** | HashiCorp |
> | **Type** | Infrastructure as Code |
> | **Initial release** | 2014 |
> | **Written in** | Go |
> | **License** | BSL 1.1 |
> | **Website** | terraform.io |

---

> "Any sufficiently advanced technology is indistinguishable from magic."
> <cite>— Arthur C. Clarke</cite>

---

<span class="at-kicker">Software Engineering · Infrastructure</span>

# Terraform

<p class="at-lead">
Terraform is HashiCorp's open-source Infrastructure as Code (IaC) tool — write declarative HCL configuration files to provision and manage cloud infrastructure across any provider, with a single consistent workflow regardless of whether you're deploying to AWS, GCP, Azure, or on-premises.
</p>

<span class="at-stat">cloud-agnostic</span> &nbsp;·&nbsp; <span class="at-stat">declarative</span> HCL &nbsp;·&nbsp; <span class="at-stat">2014</span> open-sourced &nbsp;·&nbsp; <span class="at-mark">the de-facto standard for cloud infrastructure provisioning</span>

<span class="at-kicker">Core Concept</span>

## What Is Terraform?

Terraform is used to **define Infrastructure as Code using a declarative language**. It was developed by HashiCorp and is written in Go, which creates a single binary called `terraform`. This binary translates HCL configuration into a series of **API calls to cloud providers, in the most efficient order possible** — handling dependency resolution, parallel resource creation, and change detection automatically.

Terraform is:

> [!grid|cols3]
>
>> [!card|section]
>> ###### OPEN SOURCE
>> ### *Open Source* Core
>> The Terraform CLI is open-source (BSL 1.1 since v1.6 — previously MPL 2.0). The community has built thousands of providers. OpenTofu is the fully open-source fork under Linux Foundation for teams needing a truly open license.
>
>> [!card|section]
>> ###### CLOUD AGNOSTIC
>> ### *Cloud Agnostic* Tool
>> One tool, any cloud. Supports AWS, GCP, Azure, Kubernetes, Datadog, GitHub, and hundreds more through **providers**. The same workflow (`init → plan → apply`) regardless of target platform.
>
>> [!card|section]
>> ###### DECLARATIVE
>> ### *Declarative* Language
>> You describe the **desired end state** of infrastructure, not the steps to get there. Terraform figures out the execution order. Supports **immutable infrastructure** patterns — replace rather than modify.

Key architectural properties:
- **Masterless** — no central Terraform server required
- **Agentless** — no agent software installed on managed resources
- **Dependency graph** — Terraform builds a DAG of resources and creates/destroys in the correct order

> [!info]
> The **order in which code is placed doesn't matter** in Terraform — you can reference a variable or resource before it's declared. Terraform resolves the dependency graph at plan time, not at parse time.

<span class="at-kicker">HCL Syntax</span>

## HCL — HashiCorp Configuration Language

**HCL (HashiCorp Configuration Language)** is the declarative language used to write Terraform configurations. It is human-readable and designed to be both machine-parseable and easy for humans to write and understand.

```hcl
# Provider configuration
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# Resource declaration
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = var.instance_type

  tags = {
    Name        = "WebServer"
    Environment = var.environment
  }
}

# Data source (read existing infrastructure)
data "aws_vpc" "default" {
  default = true
}

# Output value
output "instance_public_ip" {
  value       = aws_instance.web.public_ip
  description = "The public IP of the web server"
}
```

### HCL Building Blocks

> [!grid|cols2]
>
>> [!card|section]
>> ###### RESOURCES
>> ### *Resources* — What You Provision
>> Resources are the primary building blocks — they declare infrastructure objects (`aws_instance`, `google_storage_bucket`, `kubernetes_deployment`). Each resource has a type (from the provider) and a local name. Resource attributes can reference other resources, creating implicit dependencies.
>
>> [!card|section]
>> ###### DATA SOURCES
>> ### *Data Sources* — Read Existing State
>> Data sources query existing infrastructure without managing it. Use them to look up IDs, AMIs, VPC configurations, or any provider-managed data. Read-only — they never create or modify resources.
>
>> [!card|section]
>> ###### VARIABLES
>> ### *Variables* — Parameterize Configs
>> Input variables make configurations reusable across environments. Declare with `variable` block, reference with `var.name`. Store values in `terraform.tfvars` or pass via CLI flags.
>>
>> ```hcl
>> variable "instance_type" {
>>   description = "EC2 instance type"
>>   default     = "t3.micro"
>>   type        = string
>> }
>> # Reference: var.instance_type
>> ```
>
>> [!card|section]
>> ###### OUTPUTS
>> ### *Outputs* — Expose Values
>> Output values expose resource attributes after apply — useful for sharing values between modules or displaying connection strings.
>>
>> ```hcl
>> output "db_endpoint" {
>>   value = aws_db_instance.main.endpoint
>> }
>> # Display: terraform output db_endpoint
>> ```

<span class="at-kicker">Providers</span>

## Providers

**Providers** are plugins that allow Terraform to interact with APIs — each provider exposes resource types and data sources for a specific platform or service. Providers are downloaded during `terraform init`.

| Provider | Platform | Common Resources |
| --- | --- | --- |
| `hashicorp/aws` | Amazon Web Services | EC2, S3, RDS, VPC, Lambda |
| `hashicorp/google` | Google Cloud | GCE, GCS, BigQuery, GKE |
| `hashicorp/azurerm` | Microsoft Azure | VMs, Storage, AKS, SQL |
| `hashicorp/kubernetes` | Kubernetes | Deployments, Services, Ingress |
| `hashicorp/helm` | Helm / K8s | Helm chart releases |
| `integrations/github` | GitHub | Repos, teams, branch protection |

> [!tip]
> Providers are versioned and pinned in the `terraform {}` block. Always pin provider versions to avoid unexpected breaking changes on `terraform init`.

<span class="at-kicker">State Management</span>

## State Management

Terraform maintains a **state file** (`terraform.tfstate`) that records the current state of all managed resources. State is the source of truth for what Terraform knows about your infrastructure.

> [!grid|cols2]
>
>> [!card|section]
>> ###### TERRAFORM.TFSTATE
>> ### The *State* File
>> The `.terraform.tfstate` file tracks all resources created by Terraform and maps them to real-world resource IDs. **Deleting this file will cause Terraform to lose track of managed resources** — it will try to create them again on the next apply, potentially causing conflicts or duplicates.
>>
>> For solo projects, local state is fine. For teams: **always use remote state**.
>
>> [!card|section]
>> ###### REMOTE STATE
>> ### *Remote* State Backends
>> Store state in a remote backend for team collaboration, locking, and history:
>> - **S3 + DynamoDB** (AWS) — S3 stores state, DynamoDB provides locking
>> - **GCS** (GCP) — native locking support
>> - **Terraform Cloud** — managed state with UI, access controls, run history
>>
>> Remote state enables state **locking** — prevents concurrent applies that could corrupt state.

### State Commands

```shell
terraform state list          # Show all resources in state
terraform state show <addr>   # Show detailed state for a resource
terraform state rm <addr>     # Remove resource from state (without destroying it)
terraform import <addr> <id>  # Import existing resource into state
terraform refresh             # Sync state with actual infrastructure
```

> [!warning]
> The `.terraform` folder (created by `terraform init`) contains provider binaries and should be in `.gitignore`. The `terraform.tfstate` file contains sensitive data (connection strings, passwords) — never commit it to version control. Use remote state with encryption instead.

<span class="at-kicker">Core Workflow</span>

## Plan / Apply Workflow

The Terraform workflow has three phases:

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Write   │ →  │   Init   │ →  │   Plan   │ →  │  Apply  │
│  .tf     │    │ download │    │ preview  │    │ execute  │
│  files   │    │providers │    │ changes  │    │ changes  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

```shell
# ── Initialization ────────────────────────────────────────
terraform init              # Download providers, initialize backend
                            # (Run after any provider/backend changes)

# ── Planning ─────────────────────────────────────────────
terraform plan              # Preview what will be created/changed/destroyed
terraform plan -out=tfplan  # Save plan to file for exact apply

# ── Applying ─────────────────────────────────────────────
terraform apply             # Apply changes (prompts for confirmation)
terraform apply -auto-approve           # Skip confirmation prompt
terraform apply tfplan      # Apply a saved plan file exactly

# ── Targeted Operations ───────────────────────────────────
terraform apply -target=aws_instance.web    # Create/update specific resource
terraform destroy -target=aws_instance.web  # Destroy specific resource

# ── Cleanup ───────────────────────────────────────────────
terraform destroy           # Destroy ALL managed infrastructure
terraform destroy -auto-approve             # Skip confirmation

# ── Inspection ────────────────────────────────────────────
terraform output            # Display all output values
terraform output db_endpoint            # Display specific output
terraform show              # Show current state (human-readable)
terraform graph             # Output dependency graph (dot format)
```

<span class="at-kicker">Modules</span>

## Modules

**Modules** are reusable packages of Terraform configuration — the primary way to encapsulate and share infrastructure patterns. A module is just a directory of `.tf` files with defined inputs (variables) and outputs.

```hcl
# Using a module from the Terraform Registry
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "my-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
}

# Reference module outputs
resource "aws_instance" "web" {
  subnet_id = module.vpc.private_subnets[0]
  # ...
}
```

> [!tip]
> The [Terraform Registry](https://registry.terraform.io) hosts thousands of community modules for common patterns (VPCs, EKS clusters, RDS instances). Use official `hashicorp/` or `terraform-aws-modules/` modules for production-ready patterns rather than writing from scratch.

<span class="at-kicker">Workspaces</span>

## Workspaces

**Workspaces** allow multiple state files within the same configuration — enabling the same code to manage multiple environments (dev/staging/prod) with different variable values.

```shell
terraform workspace list        # List all workspaces
terraform workspace new staging # Create a new workspace
terraform workspace select prod # Switch to prod workspace
terraform workspace show        # Show current workspace
```

```hcl
# Reference current workspace in configuration
resource "aws_instance" "web" {
  instance_type = terraform.workspace == "prod" ? "m5.large" : "t3.micro"
}
```

> [!info]
> For complex multi-environment setups, many teams prefer separate state files per environment (separate directories or backends) rather than workspaces, as it provides cleaner isolation and explicit `terraform apply` targeting per environment.

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[docker|Docker]]
>> Terraform provisions the cloud infrastructure (VMs, networks, ECS clusters) that Docker containers run on — IaC and containers are complementary.
>
>> [!card]
>> ##### [[kubernetes|Kubernetes]]
>> Terraform provisions Kubernetes clusters (EKS, GKE, AKS) and manages K8s resources via the Kubernetes provider — GitOps for both app and infra.
>
>> [!card]
>> ##### [[devops-sre|DevOps & SRE]]
>> Terraform is a core DevOps practice — infrastructure as code enables version-controlled, reproducible, auditable infrastructure changes through CI/CD pipelines.
>
>> [!card]
>> ##### [[sagemaker|AWS SageMaker]]
>> SageMaker infrastructure (notebooks, endpoints, pipelines, S3 buckets) can be fully provisioned and managed via the Terraform AWS provider.
>
>> [!card] People & books
>> [[../../people/mitchell-hashimoto|Mitchell Hashimoto]] (Terraform creator) · [[../../people/gene-kim|Gene Kim]] · [[../../people/jez-humble|Jez Humble]]
>> [[../../books/accelerate|Accelerate]] · [[../../books/the-phoenix-project|The Phoenix Project]]
