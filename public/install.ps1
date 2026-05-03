$ErrorActionPreference = "Stop"

Write-Host "Installing NonceSense CLI..." -ForegroundColor Cyan

# Check Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is required but not installed." -ForegroundColor Red
    Write-Host "Install Node.js from https://nodejs.org/ and re-run this command."
    exit 1
}

# Check npm
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm is required but not available." -ForegroundColor Red
    Write-Host "Reinstall Node.js from https://nodejs.org/ and try again."
    exit 1
}

Write-Host "Installing noncesense from npm..." -ForegroundColor Yellow
npm install -g noncesense

# Refresh PATH for current session (helps on fresh Node installs)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" +
            [System.Environment]::GetEnvironmentVariable("Path","User")

# Verify install
if (-not (Get-Command ns -ErrorAction SilentlyContinue)) {
    Write-Host "Install completed, but 'ns' was not found in PATH." -ForegroundColor Red
    Write-Host "Restart your terminal and run: ns start"
    exit 1
}

Write-Host ""
Write-Host "NonceSense installed successfully!" -ForegroundColor Green
Write-Host "Run: ns start" -ForegroundColor Cyan