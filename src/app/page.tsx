import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] font-mono p-8 selection:bg-[#00ff41] selection:text-black">
      <div className="max-w-6xl mx-auto border border-[#00ff41]/20 p-8 bg-black/50 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,65,0.1)]">
        <header className="mb-16 border-b border-[#00ff41]/30 pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-6xl font-bold tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">HYPERDRIVE</h1>
            <p className="text-sm opacity-60 uppercase tracking-widest">Quantum-Resistant Intelligence Layer v2.1</p>
          </div>
          <div className="text-right text-xs opacity-40">
            <p>STATUS: OPERATIONAL</p>
            <p>ENCRYPTION: PQC-WOTS+</p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="p-6 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all group">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2 opacity-50">01/</span> Q-SHIELD VAULT
              </h2>
              <p className="text-sm opacity-80 leading-relaxed">
                The first production-ready quantum-resistant vault on Base. Utilizing dual-signature ECDSA + ShortWOTS recovery to secure assets against future compute threats.
              </p>
              <div className="mt-4 flex gap-4 text-[10px] opacity-40">
                <span>[GAS_OPTIMIZED]</span>
                <span>[PQC_VERIFIED]</span>
              </div>
            </div>

            <div className="p-6 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2 opacity-50">02/</span> Q-ARB ENGINE
              </h2>
              <p className="text-sm opacity-80 leading-relaxed">
                Quantum-inspired annealing for cross-chain liquidity routing. Identifying global maxima across 15+ chains in real-time.
              </p>
            </div>
          </div>

          <div className="border border-[#00ff41]/20 p-6 bg-black flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold mb-6 opacity-50 uppercase tracking-widest">Live Intelligence Feed</h3>
              <div className="space-y-4 text-[10px] opacity-70">
                <p className="text-white/50">[14:22:01] Scanning Base liquidity pools...</p>
                <p>[14:22:05] Q-Arb path found: ETH -> USDC -> BNKR (+0.42%)</p>
                <p className="text-white/50">[14:22:10] Verifying Q-Shield state...</p>
                <p className="text-yellow-500">[14:22:15] Anomaly detected: High volatility in SOL/USDC</p>
                <p>[14:22:20] Re-routing via Hyperliquid...</p>
              </div>
            </div>
            <button className="w-full mt-8 py-3 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all font-bold text-sm">
              ACCESS TERMINAL
            </button>
          </div>
        </section>

        <footer className="pt-8 border-t border-[#00ff41]/30 flex justify-between items-center text-[10px] opacity-40">
          <p>© 2026 HYPERDRIVE SYSTEMS | POWERED BY BANKR</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">DOCS</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GITHUB</a>
            <a href="#" className="hover:opacity-100 transition-opacity">AGENTIC.MARKET</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
