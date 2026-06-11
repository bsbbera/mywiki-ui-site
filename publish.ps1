<#
.SYNOPSIS
  One-shot publish: sync MyWiki vault into content/, commit, push to main.
  Vercel auto-deploys the push.

.PARAMETER Message
  Optional commit message. If omitted, you'll be prompted (or a default is used).

.PARAMETER NoPrompt
  Skip the "review changes" prompt (useful for automation / Obsidian triggers).

.EXAMPLE
  .\publish.ps1
  .\publish.ps1 -Message "content: add note on Kafka"
  .\publish.ps1 -NoPrompt
#>
param(
  [string]$Message = "",
  [switch]$NoPrompt
)

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  MyWiki -> Quartz -> Vercel publish flow"  -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Sync vault -> content/
Write-Host "[1/4] Syncing MyWiki vault to content/ ..." -ForegroundColor Yellow
npm run prebuild
if ($LASTEXITCODE -ne 0) { Write-Host "  Sync failed." -ForegroundColor Red; exit 1 }
Write-Host ""

# 2. Show what changed in content/
Write-Host "[2/4] Changes in content/:" -ForegroundColor Yellow
$changes = git status --short content/
if (-not $changes) {
  Write-Host "  (no changes — nothing to publish)" -ForegroundColor Green
  Write-Host ""
  exit 0
}
$changes | ForEach-Object { Write-Host "  $_" }
Write-Host ""

# 3. Confirm
if (-not $NoPrompt) {
  $reply = Read-Host "[3/4] Commit and push these changes? (Y/n)"
  if ($reply -and $reply.Trim().ToLower() -eq "n") {
    Write-Host "  Aborted. Files are synced into content/ but not committed." -ForegroundColor Yellow
    exit 0
  }
}

# 4. Commit message
if (-not $Message) {
  if ($NoPrompt) {
    $Message = "content: update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
  } else {
    $Message = Read-Host "[4/4] Commit message (Enter for default)"
    if (-not $Message) {
      $Message = "content: update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
  }
}

git add content/
if ($LASTEXITCODE -ne 0) { Write-Host "  git add failed." -ForegroundColor Red; exit 1 }

git commit -m "$Message"
if ($LASTEXITCODE -ne 0) { Write-Host "  git commit failed." -ForegroundColor Red; exit 1 }

git push origin main
if ($LASTEXITCODE -ne 0) { Write-Host "  git push failed." -ForegroundColor Red; exit 1 }

Write-Host ""
Write-Host "Pushed. Vercel build typically takes 2-3 min." -ForegroundColor Green
Write-Host "Live site: https://mywiki-ui-site.vercel.app" -ForegroundColor Green
Write-Host ""
