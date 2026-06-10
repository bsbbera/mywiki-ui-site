---
title: SSH & Tunneling
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - SSH
  - Secure Shell
  - SSH Tunneling
  - Port Forwarding
category: Technology
tags:
  - SSH
  - Networking
  - Security
  - DevOps
  - CLI
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "SSH is the sysadmin's skeleton key — opening remote machines as if they were local."
> <cite>— Operations folklore</cite>

---

<span class="at-kicker">Tools · Networking · Security</span>

# SSH & Tunneling

<p class="at-lead">
Secure Shell (SSH) is the cryptographic protocol that powers remote server administration,
secure file transfer, and encrypted network tunneling. Every data engineer, ML practitioner,
and DevOps engineer relies on SSH daily — to deploy models, inspect logs, transfer datasets,
and create secure pathways through restrictive network perimeters.
</p>

<span class="at-stat">encrypted</span> &nbsp;·&nbsp; <span class="at-stat">authenticated</span> &nbsp;·&nbsp; <span class="at-stat">tunneled</span> &nbsp;·&nbsp; <span class="at-mark">the sysadmin's skeleton key</span>

<span class="at-kicker">SSH Basics</span>

## Connecting to Remote Hosts

```bash
# Password authentication (discouraged for automation)
ssh user@remote-host

# Key-based authentication (preferred)
ssh -i ~/.ssh/id_rsa user@remote-host

# Specific port (default is 22)
ssh -p 2222 user@remote-host

# Execute command and exit
ssh user@host "df -h && free -m"

# Copy files (secure copy)
scp localfile.txt user@host:/remote/path/
scp -r user@host:/remote/dir ./local/

# Interactive directory sync (better than scp)
rsync -avz --progress ./data/ user@host:/remote/data/
```

### Key-based authentication setup

```bash
# Generate key pair
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key to remote host
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@remote-host

# Add to SSH agent for passwordless use
ssh-add ~/.ssh/id_ed25519
```

> [!info] Ed25519 vs RSA
> Ed25519 keys are smaller, faster, and more secure than RSA at equivalent bit lengths. They
> are the default recommendation for new keys. Use RSA (4096-bit) only when compatibility
> with legacy systems is required.

### SSH config file

Simplify connections with `~/.ssh/config`:

```
Host bastion
    HostName bastion.example.com
    User admin
    IdentityFile ~/.ssh/id_ed25519

Host db-server
    HostName 10.0.1.15
    User ubuntu
    ProxyJump bastion
    LocalForward 5433 localhost:5432
```

Then simply: `ssh db-server`

---

<span class="at-kicker">Tunneling</span>

## Port Forwarding Through SSH

SSH can forward network ports through an encrypted connection — invaluable when services are
firewalled or only accessible within a private network.

### Local port forwarding

Access a remote service as if it were local:

```bash
# Forward local port 5433 to remote PostgreSQL on 5432
ssh -L 5433:localhost:5432 user@remote-host

# Now connect locally as if PostgreSQL were running on your machine
psql -h localhost -p 5433 -U dbuser -d mydb
```

> [!tip] Common use case
> Access a cloud database that only accepts connections from within the VPC. SSH into a
> bastion host, forward the database port, and connect locally with your favourite client.

### Remote port forwarding

Expose a local service to a remote host:

```bash
# Forward local port 8080 to remote port 9090
ssh -R 9090:localhost:8080 user@remote-host

# On remote-host, access http://localhost:9090 → reaches your local dev server
```

> [!warning] Remote forwarding security
> This opens your local service to the remote machine. Ensure the remote SSH server has
> `GatewayPorts` configured securely, and use only for trusted scenarios (e.g. exposing
> a local Jupyter notebook to a colleague).

### Dynamic port forwarding (SOCKS proxy)

Create a SOCKS proxy for tunneling arbitrary traffic:

```bash
# Open SOCKS proxy on local port 1080
ssh -D 1080 user@remote-host

# Configure browser / OS to use SOCKS proxy localhost:1080
# All traffic routes through remote-host
```

> [!info] Dynamic tunneling
> Unlike local/remote forwarding (one port pair), dynamic forwarding creates a full SOCKS
> proxy. Every connection through the proxy is independently forwarded — useful for
> bypassing firewalls or routing traffic through a specific geographic exit point.

---

<span class="at-kicker">Advanced</span>

## SSH Agent, Jump Hosts, and Multiplexing

### SSH agent forwarding

Use your local keys on remote hosts without copying them:

```bash
ssh -A user@bastion
# On bastion, your local SSH agent answers authentication challenges
ssh user@internal-server   # authenticates via your local key
```

> [!warning] Agent forwarding risks
> A compromised bastion can abuse your forwarded agent to authenticate elsewhere. Use
> `ProxyJump` instead when possible — it does not expose your agent.

### ProxyJump (bastion chaining)

```bash
# Connect through a bastion without agent forwarding
ssh -J user@bastion user@internal-server

# In ~/.ssh/config
Host internal
    HostName 10.0.0.5
    ProxyJump bastion
```

### Connection multiplexing

Reuse existing SSH connections to avoid re-authentication overhead:

```
# In ~/.ssh/config
Host *
    ControlMaster auto
    ControlPath ~/.ssh/controlmasters/%r@%h:%p
    ControlPersist 10m
```

| Tunnel Type | Direction | Use Case |
|-------------|-----------|----------|
| **Local (-L)** | Local → Remote | Access remote database, API, or service |
| **Remote (-R)** | Remote → Local | Expose local dev server to remote collaborators |
| **Dynamic (-D)** | Bidirectional proxy | Route all traffic through remote (SOCKS) |

## Interesting facts

- SSH was created in 1995 by Tatu Ylönen as a replacement for insecure protocols (telnet,
  rlogin, rsh). The original SSH-1 protocol had vulnerabilities; SSH-2 (1996) is the current
> standard.
- The `-L` and `-R` forwarding syntax is `bind_address:local_port:remote_host:remote_port`.
> The middle host (the SSH server) acts as a relay — it connects to `remote_host:remote_port`
> on behalf of the client.
- `rsync` over SSH (`rsync -avz -e ssh ...`) is the standard for efficient remote backups
> because it transfers only changed blocks, not entire files.

## Interview questions

1. What is the difference between password-based and key-based SSH authentication? Why is
   key-based preferred?
2. Explain local port forwarding with a concrete example (e.g., accessing a remote database).
3. What are the security risks of SSH agent forwarding, and how does `ProxyJump` mitigate them?
4. When would you use dynamic port forwarding instead of local forwarding?
5. How does `~/.ssh/config` simplify daily SSH workflows?
6. What is the difference between `scp` and `rsync` for file transfer?

## Related pages

> [!grid]
>
>> [!card] CLI Tools
>> [[shell-toolkit|Shell Toolkit]] · [[tmux|Tmux]] · [[vim|Vim]]
>
>> [!card] Networking
>> [[../../cloud/gcp/networking/vpc|VPC]] · [[../../cloud/gcp/networking/cloud-vpn|Cloud VPN]] · [[../../cloud/gcp/networking/cloud-interconnect|Cloud Interconnect]]
>
>> [!card] Security
>> [[../../cloud/gcp/security/iam|IAM]] · [[../../cloud/gcp/security/secret-manager|Secret Manager]] · [[../../software-engineering/devops-sre|DevOps & SRE]]
>
>> [!card] DevOps
>> [[../../software-engineering/docker|Docker]] · [[../../software-engineering/kubernetes|Kubernetes]] · [[../../software-engineering/terraform|Terraform]]
