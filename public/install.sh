#!/usr/bin/env bash
set -e

echo "Installing NonceSense CLI..."

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Install it from https://nodejs.org/"
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required. Reinstall Node.js and try again."
  exit 1
fi

echo "Installing noncesense from npm..."
npm install -g noncesense

if ! command -v ns >/dev/null 2>&1; then
  echo "Install completed, but 'ns' was not found in PATH."
  echo "Restart your terminal and run: ns start"
  exit 1
fi

echo ""
echo "NonceSense installed successfully!"
echo "Run: ns start"