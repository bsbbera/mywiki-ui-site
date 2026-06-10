---
title: Cloud Shell
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Shell
category: GCP
tags:
  - gcp
  - cloud
  - devops
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Shell
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | DevOps / Developer Tools |
> | **Launched** | 2014 |
> | **Interface** | Browser, gcloud CLI, SSH |
> | **Website** | https://cloud.google.com/shell |

---

> "The best development environment is the one that's always available, always consistent, and always connected."
> <cite>— Cloud developer best practices</cite>

---

<span class="at-kicker">Cloud IDE · Google Cloud</span>
# Cloud Shell
<p class="at-lead">Cloud Shell is Google Cloud's free, browser-accessible interactive shell environment giving developers instant command-line access to GCP resources. Each session runs on a dedicated ephemeral VM with a 5 GB persistent home directory.</p>
<span class="at-stat">free</span> · <span class="at-stat">5GB</span> home directory · <span class="at-stat">pre-installed</span> gcloud + kubectl + terraform &nbsp;·&nbsp; <span class="at-mark">a full Linux dev environment in the browser — no local setup needed</span>

<span class="at-kicker">How It Works</span>
## Overview

When a user opens Cloud Shell from the Google Cloud Console, GCP provisions an ephemeral **e2-small** Compute Engine VM (running Debian Linux) in a project-level container. This VM exists only for the duration of active sessions (it is reclaimed after roughly 20 minutes of inactivity), but the `/home/<username>` directory is stored on a **5 GB persistent disk** (backed by Cloud Storage under the hood) that persists indefinitely across sessions, ensuring code, configuration, and scripts are always available.

Cloud Shell comes pre-installed with the **Google Cloud SDK (`gcloud`, `gsutil`, `bq`)**, `kubectl`, `helm`, `terraform`, `docker`, `git`, popular language runtimes (Python, Node.js, Java, Go, Ruby, .NET), package managers (`apt`, `pip`, `npm`, `cargo`), and many other developer tools — all kept up to date by Google. There is no setup, no installation, and no version management required by the user.

The embedded **Cloud Shell Editor** (powered by Eclipse Theia, a VS Code-compatible IDE) provides a full browser-based code editing experience with syntax highlighting, file browser, terminal integration, and extension support, turning Cloud Shell into a lightweight web-based IDE.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **5 GB Persistent Home**
>> `/home` directory persists across sessions and VM reprovisioning. Preserve dotfiles, SSH keys, project files, and scripts.
>
>> [!card|section]
>> **Pre-installed Toolchain**
>> gcloud, kubectl, helm, docker, git, terraform, ansible, python3, node, java, go, ruby — all maintained by Google.
>
>> [!card|section]
>> **Automatic GCP Auth**
>> Sessions automatically authenticated as logged-in Google identity. No `gcloud auth login` required. ADC pre-configured.
>
>> [!card|section]
>> **Cloud Shell Editor**
>> VS Code-compatible browser IDE with syntax highlighting, integrated terminal, Git integration, and extension support.
>
>> [!card|section]
>> **Web Preview**
>> Run local web server on ports 8080-8084 and preview via secure HTTPS tunnel. Test web apps and APIs during development.
>
>> [!card|section]
>> **Boost Mode**
>> Activate higher-performance VM (6 vCPUs, 7.5 GB RAM) for limited time. Handle resource-intensive builds and tools.

## SSH Access

Cloud Shell can be accessed via standard SSH using `gcloud cloud-shell ssh`, enabling scripted access and integration with local IDE SSH remote extensions (e.g., VS Code Remote-SSH).

## Tmux Integration

Cloud Shell uses tmux for session management, allowing tabs and pane splitting within the terminal. Sessions can reconnect to a running tmux session after a browser refresh.

## Custom Environment

Users can customise the shell by modifying `~/.bashrc`, `~/.zshrc`, or placing a `~/.customize_environment` script that runs on each new VM provisioning.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Quick GCP Resource Management**
>> Open Cloud Shell to run `gcloud` commands, inspect logs, check GKE cluster state with `kubectl`, or execute BigQuery queries via `bq`.
>
>> [!card|section]
>> **Tutorials and Learning**
>> Standard environment for GCP Qwiklabs and official documentation tutorials. Eliminates "works on my machine" issues.
>
>> [!card|section]
>> **Rapid Prototyping**
>> Clone a repository, run `terraform init && terraform apply`, or deploy a Cloud Run service within seconds of opening browser.
>
>> [!card|section]
>> **CI/CD Debugging**
>> When a Cloud Build step fails, open Cloud Shell to reproduce the build environment and diagnose issues interactively.
>
>> [!card|section]
>> **Access from Any Device**
>> Full GCP CLI access from locked-down corporate machines, Chromebooks, tablets — anywhere installing Cloud SDK isn't possible.
>
>> [!card|section]
>> **Pair Programming and Demos**
>> Share Cloud Shell sessions via tmux or use Web Preview to live-demo an API under development directly from browser.

<span class="at-kicker">Cost Model</span>
## Pricing

Cloud Shell is **free** for all Google Cloud users:

| Dimension | Detail |
|-----------|--------|
| **Cloud Shell Usage** | No charge, including Boost Mode (subject to fair use policy) |
| **Persistent Home Disk** | 5 GB storage free |
| **Inactivity Reclaim** | VM stopped after ~20 minutes of inactivity; home disk unaffected |
| **Egress** | Standard GCP network egress rates may apply in some configurations |

Fair use policy prohibits prolonged, automated, or cryptocurrency-mining use.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD SHELL
>> # From *browser* to *GCP command line*.
>> Open Cloud Shell from the console, run gcloud commands with automatic authentication, and use Web Preview for testing.
>
>> [!card|step]
>> ###### Step 01
>> ### *Open* Cloud Shell.
>> Click the Cloud Shell icon in Cloud Console or run `gcloud cloud-shell ssh`. VM provisioned in seconds with pre-installed tools.
>
>> [!card|step]
>> ###### Step 02
>> ### *Run* gcloud commands.
>> Already authenticated as your Google identity. No setup needed. Run `gcloud compute instances list`, `kubectl get pods`, etc.
>
>> [!card|step]
>> ###### Step 03
>> ### *Use* Web Preview.
>> Run a local web server and preview at HTTPS URL. Test APIs and web apps without deploying. SSH keys persist in 5 GB home directory.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[cloud-build]], [[artifact-registry]], [[cloud-deploy]], [[cloud-workstations]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[kubernetes-engine]], [[compute-engine]]
>
>> [!card] GCP Core
>> [[google-cloud-platform]], [[iam]], [[cloud-sdk]]
