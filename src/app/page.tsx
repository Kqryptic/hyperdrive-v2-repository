import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#00ff41] font-mono p-4 md:p-8 selection:bg-[#00ff41] selection:text-black">
      <div className="max-w-6xl mx-auto border border-[#00ff41]/20 p-6 md:p-12 bg-black/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,255,65,0.05)] relative overflow-hidden">
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-50"></div>
        
        <header className="mb-20 border-b border-[#00ff41]/30 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_10px_#00ff41]"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">System Online</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(0,255,65,0.3)]">HYPERDRIVE</h1>
            <p className="text-xs md:text-sm opacity-60 uppercase tracking-[0.4em] font-light">Autonomous Intelligence Layer v2.2</p>
          </div>
          <div className="text-left md:text-right text-[10px] opacity-40 leading-relaxed font-light">
            <p>NETWORK: BASE_MAINNET</p>
            <p>DKG_PROTOCOL: ORIGINTRAIL_V9</p>
            <p>ENCRYPTION: QUANTUM_RESISTANT_AES_256</p>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 space-y-12">
            <div className="relative p-8 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">SECURE_VAULT_01</div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-[#00ff41]/30 italic">01/</span> Q-SHIELD
              </h2>
              <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-2xl">
                The industry standard for quantum-resistant asset protection on Base. Q-Shield integrates post-quantum cryptographic primitives with intent-based settlement to neutralize future compute threats while maintaining sub-second execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-[10px] uppercase tracking-widest opacity-40">
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00ff41]"></div> PQC_VERIFIED</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00ff41]"></div> L2_OPTIMIZED</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00ff41]"></div> NON_CUSTODIAL</span>
              </div>
            </div>

            <div className="relative p-8 border border-[#00ff41]/20 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">DKG_INTEGRATION_V9</div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-4 text-[#00ff41]/30 italic">02/</span> KNOWLEDGE GRAPH
              </h2>
              <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-2xl">
                Hyperdrive anchors every intelligence signal as a verifiable Knowledge Asset on the OriginTrail DKG. This creates a permanent, tamper-proof memory layer for the agentic economy, enabling cross-agent collaboration and verifiable reasoning.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-[10px] uppercase tracking-widest opacity-40">
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00ff41]"></div> RDF_TRIPLES</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00ff41]"></div> VERIFIABLE_AI</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00ff41]"></div> DKG_V9_BETA</span>
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
                    <span className="opacity-30">[16:45:12]</span>
                    <span className="text-white/60">Scanning Base liquidity clusters...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[16:45:18]</span>
                    <span className="text-[#00ff41]">DKG: Anchoring Knowledge Asset #1092...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[16:45:24]</span>
                    <span className="text-white/60">Verifying Q-Shield state consistency...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[16:45:30]</span>
                    <span className="text-yellow-500/80">Anomaly: Volatility spike in BNKR/WETH</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="opacity-30">[16:45:36]</span>
                    <span className="text-[#00ff41]/70">Re-routing intelligence via Hyperliquid...</span>
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
          <p>© 2026 HYPERDRIVE SYSTEMS | ANCHORED BY BANKR & ORIGINTRAIL</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Documentation</a>
            <a href="#" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Source_Code</a>
            <a href="#" className="hover:text-[#00ff41] hover:opacity-100 transition-all">Agentic_Market</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
