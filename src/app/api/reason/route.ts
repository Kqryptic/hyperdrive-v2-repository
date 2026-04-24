import { NextRequest, NextResponse } from "next/server";
import { withX402, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";

const facilitator = new HTTPFacilitatorClient({ url: "https://x402.org/facilitator" });
const server = new x402ResourceServer(facilitator)
  .register("eip155:8453", new ExactEvmScheme());

const handler = async (req: NextRequest) => {
  const { query } = await req.json();
  return NextResponse.json({ 
    reasoning: `TheMind-v1 analysis for: ${query}`,
    confidence: 0.99,
    sources: ["graph-mind-v1"]
  });
};

export const POST = withX402(
  handler,
  {
    accepts: {
      scheme: "exact",
      price: "$0.10",
      network: "eip155:8453",
      payTo: "0xfd8fb800d480f4bd5ea56dc4b4ae98945cbff53e",
    },
    description: "TheMind-v1 Reasoning-as-a-Service. Submit a query to the neural kernel.",
  },
  server
);
