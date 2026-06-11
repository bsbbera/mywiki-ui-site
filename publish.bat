@echo off
REM Double-click wrapper for publish.ps1 — runs the publish flow with prompts.
REM From the command line you can also run:  publish.bat "your commit message"

setlocal
cd /d "%~dp0"

if "%~1"=="" (
  powershell -NoLogo -ExecutionPolicy Bypass -File "%~dp0publish.ps1"
) else (
  powershell -NoLogo -ExecutionPolicy Bypass -File "%~dp0publish.ps1" -Message "%~1"
)

echo.
pause
