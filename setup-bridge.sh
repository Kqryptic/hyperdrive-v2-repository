#!/bin/bash
# setup-bridge.sh
set -e
git clone -b develop https://github.com/elizaOS/eliza.git
cd eliza
mkdir -p plugins/plugin-bankr/src
cp ../plugin-bankr.ts plugins/plugin-bankr/src/index.ts
bun install
cd plugins/plugin-bankr && bun run build
