FROM oven/bun:latest

# Install git and build essentials
RUN apt-get update && apt-get install -y git build-essential python3

# Clone elizaOS develop branch
RUN git clone -b develop https://github.com/elizaOS/eliza.git /app
WORKDIR /app

# Inject plugin-bankr into the monorepo
COPY plugin-bankr.ts /app/packages/plugin-bankr/src/index.ts

# Create package.json for the plugin
RUN echo '{"name": "@elizaos/plugin-bankr", "version": "0.1.0", "main": "dist/index.js", "types": "dist/index.d.ts", "dependencies": { "@elizaos/core": "workspace:*" }}' > /app/packages/plugin-bankr/package.json

# Build the project
RUN bun install
RUN bun run build --filter @elizaos/plugin-bankr

# Start the app
CMD ["bun", "run", "dev"]
