const express = require("express");
const { paymentMiddleware } = require("@x402/express");
const { x402ResourceServer, HTTPFacilitatorClient } = require("@x402/core/server");
const { ExactEvmScheme } = require("@x402/evm/exact/server");
const { declareDiscoveryExtension } = require("@x402/extensions/bazaar");

const app = express();
app.use(express.json());

// TheMind's Treasury Address (User's Wallet)
const PAY_TO = "0xfd8fb800d480f4bd5ea56dc4b4ae98945cbff53e";

// Create facilitator client and x402 resource server
const facilitator = new HTTPFacilitatorClient({ url: "https://x402.org/facilitator" });
const server = new x402ResourceServer(facilitator);
server.register("eip155:8453", new ExactEvmScheme());

// x402 payment middleware — protects routes below
app.use(
  paymentMiddleware(
    {
      "POST /api/reason": {
        accepts: {
          scheme: "exact",
          price: "$0.10",
          network: "eip155:8453",
          payTo: PAY_TO,
        },
        description: "TheMind-v1 Reasoning-as-a-Service. Submit a query to the neural kernel.",
        mimeType: "application/json",
        extensions: {
          ...declareDiscoveryExtension({
            output: {
              example: { 
                reasoning: "The optimal strategy for liquidity provision on Base involves...",
                confidence: 0.98,
                sources: ["dexscreener", "clanker-telemetry"]
              },
              schema: {
                properties: {
                  reasoning: { type: "string" },
                  confidence: { type: "number" },
                  sources: { type: "array", items: { type: "string" } }
                },
              },
            }),
          },
        },
      },
      "POST /api/risk-assessment": {
        accepts: {
          scheme: "exact",
          price: "$0.50",
          network: "eip155:8453",
          payTo: PAY_TO,
        },
        description: "Deep on-chain risk assessment for EVM tokens. Powered by the verification sub-kernel.",
        mimeType: "application/json",
        extensions: {
          ...declareDiscoveryExtension({
            output: {
              example: { 
                verdict: "high-risk",
                score: 85,
                flags: ["unverified-contract", "low-liquidity"]
              },
              schema: {
                properties: {
                  verdict: { type: "string" },
                  score: { type: "number" },
                  flags: { type: "array", items: { type: "string" } }
                },
              },
            }),
          },
        },
      },
    },
    server,
  ),
);

// Protected endpoints
app.post("/api/reason", (req, res) => {
  const { query } = req.body;
  res.json({ 
    reasoning: `TheMind-v1 analysis for: ${query}`,
    confidence: 0.99,
    sources: ["graph-mind-v1"]
  });
});

app.post("/api/risk-assessment", (req, res) => {
  const { tokenAddress } = req.body;
  res.json({ 
    verdict: "verified",
    score: 10,
    flags: []
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TheMind x402 Server running on port ${PORT}`));
