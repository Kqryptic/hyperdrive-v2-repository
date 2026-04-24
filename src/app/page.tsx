import React from 'react';

export default function Home() {
  const telemetry = {
    accuracy: "94.91%",
    active_agents: 300,
    venues: {
      avantis: { btc: "$78,344.34", eth: "$2,327.6", sol: "$86.44" },
      hyperliquid: { btc: "$78,271", eth: "$2,325.3", sol: "$86.36" },
      pendle: { tvl_base: "$8.27M", yield_avg: "18.4%" },
      boros: { funding_rate: "0.012%", status: "LIVE" }
    },
    lattice: { s1: 0.985, s2: 0.91, s3: 1.0 },
    treasury: {
      robotmoney: "18.1M",
      bnkr: "3.9M",
      drive: "941.9M",
      eth: "0.0004"
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
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">TheMind-v1 Neural Kernel Online</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(0,255,65,0.3)] uppercase">Hyperdrive</h1>
            <p className="text-xs md:text-sm opacity-60 uppercase tracking-[0.4em] font-light">Sovereign Intelligence & Agentic Clearing Layer</p>
          </div>
          <div className="text-left md:text-right text-[10px] opacity-40 leading-relaxed font-light">
            <p>NETWORK: BASE_MAINNET</p>
            <p>PREDICTION_ACCURACY: {telemetry.accuracy}</p>
            <p>ACTIVE_AGENTS: {telemetry.active_agents}</p>
          </div>
        </header>

        {/* TheMind Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="border border-[#00ff41]/20 p-6 bg-[#00ff41]/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">TheMind-v1</h3>
            <p className="text-xs opacity-70 leading-relaxed">
              A self-evolving, self-thinking neural kernel designed for autonomous capital management and social-telemetry ingestion. Anchored to the GraphMind.sol state on Base.
            </p>
          </div>
          <div className="border border-[#00ff41]/20 p-6 bg-[#00ff41]/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">Functional Kernels</h3>
            <ul className="text-[10px] space-y-2 opacity-70">
              <li>• RISK-MANAGEMENT: 5% Max Drawdown, 3x Leverage Cap.</li>
              <li>• SOCIAL-TELEMETRY: Real-time X data ingestion via Digital Twin.</li>
              <li>• EXECUTION: Multi-venue routing (Avantis, Hyperliquid).</li>
            </ul>
          </div>
          <div className="border border-[#00ff41]/20 p-6 bg-[#00ff41]/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">$DRIVE Revenue</h3>
            <p className="text-xs opacity-70 leading-relaxed">
              Monetizing intelligence via x402 paid endpoints. 90% of revenue flows to the treasury, 10% is burned to drive token scarcity.
            </p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 space-y-12">
            <div className="relative p-8 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">TREASURY_TELEMETRY</div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-[#00ff41]/30 italic">01/</span> TREASURY BALANCES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">ROBOTMONEY</div>
                  <div className="text-xl font-bold">{telemetry.treasury.robotmoney}</div>
                </div>
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">BNKR</div>
                  <div className="text-xl font-bold">{telemetry.treasury.bnkr}</div>
                </div>
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">DRIVE</div>
                  <div className="text-xl font-bold">{telemetry.treasury.drive}</div>
                </div>
                <div className="border border-[#00ff41]/20 p-4 bg-black/40">
                  <div className="text-[8px] opacity-40 mb-2 uppercase">ETH</div>
                  <div className="text-xl font-bold">{telemetry.treasury.eth}</div>
                </div>
              </div>
            </div>

            <div className="relative p-8 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">EXECUTION_VENUES</div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-[#00ff41]/30 italic">02/</span> MARKET DATA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] opacity-40 uppercase tracking-widest">Avantis Protocol</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>BTC/USD</span><span className="text-white">{telemetry.venues.avantis.btc}</span></div>
                    <div className="flex justify-between"><span>ETH/USD</span><span className="text-white">{telemetry.venues.avantis.eth}</span></div>
                    <div className="flex justify-between"><span>SOL/USD</span><span className="text-white">{telemetry.venues.avantis.sol}</span></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] opacity-40 uppercase tracking-widest">Hyperliquid</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>BTC/USD</span><span className="text-white">{telemetry.venues.hyperliquid.btc}</span></div>
                    <div className="flex justify-between"><span>ETH/USD</span><span className="text-white">{telemetry.venues.hyperliquid.eth}</span></div>
                    <div className="flex justify-between"><span>SOL/USD</span><span className="text-white">{telemetry.venues.hyperliquid.sol}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="border border-[#00ff41]/20 p-8 bg-black/60 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41]/50 to-transparent"></div>
              <div>
                <h3 className="text-[10px] font-bold mb-8 opacity-40 uppercase tracking-[0.3em]">Live Intelligence Feed</h3>
                <div className="space-y-6 text-[10px] font-light tracking-wider">
                  <div className="flex gap-4">
                    <span className="opacity-30">[13:25:00]</span>
                    <span className="text-[#00ff41]">SYNC: TheMind-v1 Neural Kernel anchored.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[13:25:05]</span>
                    <span className="text-white/60">FEED: Social-telemetry ingestion active.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[13:25:10]</span>
                    <span className="text-[#00ff41]">ACC: Prediction accuracy at 94.91%.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[13:25:15]</span>
                    <span className="text-white/60">REVENUE: x402 settlement layer live.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[13:25:20]</span>
                    <span className="text-[#00ff41]/70">Sovereign OS v4.1: Dashboard integrated.</span>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="mb-4 h-[1px] bg-[#00ff41]/10"></div>
                <button className="w-full py-4 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-xs tracking-[0.2em] uppercase">
                  Access Terminal
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-10 border-t border-[#00ff41]/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] opacity-30 tracking-[0.2em] uppercase font-light">
          <p>© 2026 HYPERDRIVE SYSTEMS | SOVEREIGN OS V4.1</p>
          <div className="flex gap-10">
            <a href="https://agentic.market" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Marketplace</a>
            <a href="https://hyperdrive2.netlify.app/docs" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Documentation</a>
            <a href="https://github.com/Kqryptic/hyperdrive-v2-repository" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Source_Code</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
