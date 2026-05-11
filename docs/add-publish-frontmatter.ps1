# Adds `publish: true` to YAML frontmatter for every .md file in publishable folders.
# Usage:
#   .\add-publish-frontmatter.ps1 -DryRun    # preview only
#   .\add-publish-frontmatter.ps1            # apply changes

param(
    [switch]$DryRun
)

$ErrorActionPreference = 'Stop'
$vaultRoot = Split-Path -Parent $PSScriptRoot
$folders   = @('wiki', 'databricks', 'raw', 'starter-configs')

$added = 0; $alreadySet = 0; $injected = 0; $skipped = 0

foreach ($folder in $folders) {
    $path = Join-Path $vaultRoot $folder
    if (-not (Test-Path $path)) { continue }

    Get-ChildItem -Path $path -Recurse -Filter *.md -File | ForEach-Object {
        $file    = $_.FullName
        $content = Get-Content -Path $file -Raw -Encoding UTF8

        # Case 1: no frontmatter → prepend a fresh block
        if ($content -notmatch '^\s*---\s*\r?\n') {
            $new = "---`npublish: true`n---`n`n" + $content
            if (-not $DryRun) { Set-Content -Path $file -Value $new -Encoding UTF8 -NoNewline }
            Write-Host "INJECT  $file" -ForegroundColor Cyan
            $injected++
            return
        }

        # Case 2: frontmatter exists, parse first block
        $match = [regex]::Match($content, '(?s)^\s*---\s*\r?\n(.*?)\r?\n---\s*\r?\n')
        if (-not $match.Success) {
            Write-Host "SKIP    $file (malformed frontmatter)" -ForegroundColor Yellow
            $skipped++; return
        }

        $front = $match.Groups[1].Value
        $rest  = $content.Substring($match.Length)

        if ($front -match '(?m)^\s*publish\s*:\s*true\s*$') {
            $alreadySet++; return
        }

        if ($front -match '(?m)^\s*publish\s*:') {
            # publish key exists but not true → set to true
            $newFront = [regex]::Replace($front, '(?m)^\s*publish\s*:\s*.*$', 'publish: true')
        } else {
            $newFront = $front.TrimEnd() + "`npublish: true"
        }

        $new = "---`n$newFront`n---`n" + $rest
        if (-not $DryRun) { Set-Content -Path $file -Value $new -Encoding UTF8 -NoNewline }
        Write-Host "ADD     $file" -ForegroundColor Green
        $added++
    }
}

Write-Host ""
Write-Host "Summary $(if($DryRun){'(DRY RUN)'})" -ForegroundColor Magenta
Write-Host "  Injected fresh frontmatter : $injected"
Write-Host "  Added publish: true        : $added"
Write-Host "  Already set                : $alreadySet"
Write-Host "  Skipped (malformed)        : $skipped"
