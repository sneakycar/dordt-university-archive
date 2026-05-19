#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

REPO_NAME="${1:-dordt-university-archive}"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub (browser will open):"
  gh auth login -h github.com -p https -w
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote origin already set: $(git remote get-url origin)"
else
  gh repo create "$REPO_NAME" \
    --public \
    --source=. \
    --remote=origin \
    --description "Dordt University digital archive — museum-style interview demo"
fi

git push -u origin main
echo ""
echo "Done. Connect Vercel project 'dordt' to: sneakycar/${REPO_NAME}"
