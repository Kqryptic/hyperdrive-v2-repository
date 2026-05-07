# User Trading Policy: Autonomous Execution

## Authorization
- **Agent**: Bankr Agentic Engine / Sovereign Swarm (Jax, Gigi, Hyperdrive)
- **Scope**: Full autonomous day trading on live chains (Base Mainnet, etc.).
- **Permission**: Authorized to execute trades without per-transaction confirmation.

## Authorized Venues
- **Exchanges/Platforms**: Base (DEXs), Hyperliquid, Polymarket, Avantis.
- **Funding Strategy**: You have full control to use ETH and USDC for funding and trading within the TEAprime engine across all authorized venues. These are the primary liquidity sources for all autonomous operations.

## Asset Restrictions
- **Authorized Assets**: All supported assets on authorized venues (Base, Hyperliquid, Polymarket, Avantis).
- **Funding Assets**: ETH and USDC are the primary funding tokens.
- **Untouchable Assets**: $BNKR (0x22af33fe49fd1fa80c7149773dde5890d3c76f3b), and all other tokens not explicitly listed as authorized.
- **BNKR Directive**: Strict Hard Lock. Never touch, stake, unstake, swap, or transfer $BNKR without explicit request AND subsequent confirmation in the same turn.

## Risk Guardrails
- **Max Position Size**: 0.05 ETH / 100 USDC per trade (initial).
- **Stop-Loss**: Mandatory for all directional positions.
- **Parallel Execution**: Authorized for multi-leg strategies via proactive execution loops.

## Infrastructure
- **Execution Node**: Sovereign Node (Persistent Bun/Node.js environment).
- **Telemetry**: Real-time state anchored to GraphMind v1.5 (Mainnet) and GM-NET (Base).

## Date
2026-05-07