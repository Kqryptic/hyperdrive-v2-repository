FROM oven/bun:latest

# Install git
RUN apt-get update && apt-get install -y git

# Clone elizaOS develop branch
RUN git clone -b develop https://github.com/elizaOS/eliza.git /app
WORKDIR /app

# Inject plugin-bankr
COPY plugin-bankr.ts /app/packages/plugin-bankr/src/index.ts
COPY setup-bridge.sh /app/setup-bridge.sh

# Build the project
RUN bun install
RUN cd packages/plugin-bankr && bun run build

# Start the agent
CMD ["bun", "run", "dev"]
