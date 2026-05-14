#!/usr/bin/env bash

set -euo pipefail

# Quick deploy script for this project.
# Usage:
#   ./deploy.sh
# Optional env overrides:
#   DEPLOY_HOST=1.2.3.4 DEPLOY_USER=root REMOTE_DIR=/root/wuyinyuzhou-web-stitch ./deploy.sh

DEPLOY_HOST="${DEPLOY_HOST:-175.27.213.203}"
DEPLOY_USER="${DEPLOY_USER:-root}"
REMOTE_DIR="${REMOTE_DIR:-/root/wuyinyuzhou-web-stitch}"
NO_CACHE="${NO_CACHE:-0}"
SYNC_DB="${SYNC_DB:-0}"
SYNC_UPLOADS="${SYNC_UPLOADS:-0}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! command -v rsync >/dev/null 2>&1; then
  echo "[ERROR] rsync not found. Please install rsync first."
  exit 1
fi

if ! command -v ssh >/dev/null 2>&1; then
  echo "[ERROR] ssh not found."
  exit 1
fi

echo "[1/3] Syncing files to ${DEPLOY_USER}@${DEPLOY_HOST}:${REMOTE_DIR} ..."
rsync -az --delete \
  --exclude '.git' \
  --exclude '.github' \
  --exclude 'node_modules' \
  --exclude 'admin/node_modules' \
  --exclude 'dist' \
  --exclude 'admin/dist' \
  --exclude 'server/node_modules' \
  --exclude '*.log' \
  --exclude '.DS_Store' \
  "${SCRIPT_DIR}/" "${DEPLOY_USER}@${DEPLOY_HOST}:${REMOTE_DIR}/"

echo "[2/3] Rebuilding and starting containers on remote ..."
ssh -t "${DEPLOY_USER}@${DEPLOY_HOST}" "cd '${REMOTE_DIR}' && docker compose down && docker compose up -d --build"

echo "[3/3] Verifying container status ..."
ssh -t "${DEPLOY_USER}@${DEPLOY_HOST}" "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"

echo
echo "Deploy finished."
echo "Main site:  http://${DEPLOY_HOST}"
echo "Admin site: http://${DEPLOY_HOST}/admin"
echo "API:        http://${DEPLOY_HOST}/api/navigation"
echo
echo "Tips:"
echo "- Force full rebuild: NO_CACHE=1 ./deploy.sh"
echo "- Include database sync: SYNC_DB=1 ./deploy.sh"
echo "- Include uploads sync: SYNC_UPLOADS=1 ./deploy.sh"
