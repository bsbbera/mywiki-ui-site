@echo off
REM Double-click to preview the site locally (syncs vault and serves at localhost:8080).
REM Leave this window open while previewing; press Ctrl+C to stop.

setlocal
cd /d "%~dp0"

echo Starting local preview at http://localhost:8080 ...
echo Press Ctrl+C in this window to stop.
echo.

npm run dev
