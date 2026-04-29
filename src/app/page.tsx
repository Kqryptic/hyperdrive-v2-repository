import React from 'react';

export default function Home() {
  const telemetry = {
    accuracy: "92.0%",
    active_agents: 402,
    registry: "0x5B7181Cd07B43c77963A912C4Fc4Cc86A09c788d",
    venues: {
      avantis: { btc: "$78,344.34", eth: "$2,327.6", sol: "$86.44" },
      hyperliquid: { bio: "$0.0362", hype: "$40.04", eth: "$2,325.3" },
      morpho: { tvl_base: "$12.4M", yield_avg: "21.2%" },
      x402: { intent_cost: "5,000 $BNKR", status: "ACTIVE" }
    },
    lattice: { s1: 0.992, s2: 0.94, s3: 1.0 },
    treasury: {
      usdc: "6.7",
      bnkr: "3.8M",
      eth: "0.0297",
      address: "0x76239100d8dbf4c826aef52d004e084b2bd37c2f"
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#00ff41] font-mono p-4 md:p-8 selection:bg-[#00ff41] selection:text-black">
      <div className="max-w-6xl mx-auto border border-[#00ff41]/20 p-6 md:p-12 bg-black/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,255,65,0.05)] relative overflow-hidden">
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-50"></div>
        
        <header className="mb-20 border-b border-[#00ff41]/30 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_10px_#00ff41]"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">Sovereign Refinery v4.0 Online</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(0,255,65,0.3)] uppercase">Hyperdrive</h1>
            <p className="text-xs md:text-sm opacity-60 uppercase tracking-[0.4em] font-light">Verifiable State & Predatory Extraction</p>
          </div>
          <div className="text-left md:text-right text-[10px] opacity-40 leading-relaxed font-light">
            <p>REGISTRY: {telemetry.registry}</p>
            <p>EXTRACTION_ACCURACY: {telemetry.accuracy}</p>
            <p>ACTIVE_INTENTS: {telemetry.active_agents}</p>
          </div>
        </header>

        {/* Refinery Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="border border-[#00ff41]/20 p-6 bg-[#00ff41]/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">GM-NET</h3>
            <p className="text-xs opacity-70 leading-relaxed">
              The living database engine. Every state transition is hashed into a 32-byte Merkle root and anchored to GraphMind v1.4 on Base. 84µs proof latency.
            </p>
          </div>
          <div className="border border-[#00ff41]/20 p-6 bg-[#00ff41]/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">TEA Prime</h3>
            <p className="text-xs opacity-70 leading-relaxed">
              High-velocity extraction engine. Harvesting funding imbalances and mispriced yield across Hyperliquid, Avantis, and Morpho.
            </p>
          </div>
          <div className="border border-[#00ff41]/20 p-6 bg-[#00ff41]/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">X402 Settlement</h3>
            <p className="text-xs opacity-70 leading-relaxed">
              Monetizing intelligence via Synapse Alpha X402. 5,000 $BNKR per intent. Powered by @bankrbot infrastructure.
            </p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 space-y-12">
            <div className="relative p-8 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">REFINERY_TELEMETRY</div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-[#00ff41]/30 italic">01/</span> TREASURY BALANCES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">BNKR</div>
                  <div className="text-xl font-bold">{telemetry.treasury.bnkr}</div>
                </div>
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">USDC</div>
                  <div className="text-xl font-bold">{telemetry.treasury.usdc}</div>
                </div>
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">ETH</div>
                  <div className="text-xl font-bold">{telemetry.treasury.eth}</div>
                </div>
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">X402_STATUS</div>
                  <div className="text-xl font-bold">{telemetry.venues.x402.status}</div>
                </div>
              </div>
            </div>

            <div className="relative p-8 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">EXTRACTION_VENUES</div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-[#00ff41]/30 italic">02/</span> MARKET DATA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] opacity-40 uppercase tracking-widest">Hyperliquid Perps</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>BIO/USD</span><span className="text-white">{telemetry.venues.hyperliquid.bio}</span></div>
                    <div className="flex justify-between"><span>HYPE/USD</span><span className="text-white">{telemetry.venues.hyperliquid.hype}</span></div>
                    <div className="flex justify-between"><span>ETH/USD</span><span className="text-white">{telemetry.venues.hyperliquid.eth}</span></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] opacity-40 uppercase tracking-widest">Morpho (Base)</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>TVL</span><span className="text-white">{telemetry.venues.morpho.tvl_base}</span></div>
                    <div className="flex justify-between"><span>AVG_YIELD</span><span className="text-white">{telemetry.venues.morpho.yield_avg}</span></div>
                    <div className="flex justify-between"><span>INTENT_COST</span><span className="text-white">{telemetry.venues.x402.intent_cost}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="border border-[#00ff41]/20 p-8 bg-black/60 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41]/50 to-transparent"></div>
              <div>
                <h3 className="text-[10px] font-bold mb-8 opacity-40 uppercase tracking-[0.3em]">Refinery Heartbeat</h3>
                <div className="space-y-6 text-[10px] font-light tracking-wider">
                  <div className="flex gap-4">
                    <span className="opacity-30">[00:09:47]</span>
                    <span className="text-[#00ff41]">SYNC: GraphMind v1.4 anchored on Base.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[00:09:50]</span>
                    <span className="text-white/60">DA: Hybrid RocksDB + Arweave active.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[00:09:55]</span>
                    <span className="text-[#00ff41]">TEA: BIO long (2x) extraction active.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[00:10:00]</span>
                    <span className="text-white/60">X402: Synapse Alpha settlement live.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[00:10:05]</span>
                    <span className="text-[#00ff41]/70">Sovereign OS v4.0: Dashboard deployed.</span>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="mb-4 h-[1px] bg-[#00ff41]/10"></div>
                <button className="w-full py-4 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-xs tracking-[0.2em] uppercase">
                  Initialize Terminal
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-10 border-t border-[#00ff41]/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] opacity-30 tracking-[0.2em] uppercase font-light">
          <p>© 2026 HYPERDRIVE SYSTEMS | SOVEREIGN REFINERY V4.0</p>
          <div className="flex gap-10">
            <a href="https://x.com/hyperdrive_ai" className="hover:text-[#00ff41] hover:opacity-100 transition-all">X_Account</a>
            <a href="https://bankr.bot" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Infrastructure</a>
            <a href="https://hyperdrive2.netlify.app/docs" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Documentation</a>
            <a href="https://github.com/Kqryptic/hyperdrive-v2-repository" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Source_Code</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
