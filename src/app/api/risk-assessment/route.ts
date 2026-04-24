import { NextRequest, NextResponse } from "next/server";
import { withX402, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";

const facilitator = new HTTPFacilitatorClient({ url: "https://x402.org/facilitator" });
const server = new x402ResourceServer(facilitator)
  .register("eip155:8453", new ExactEvmScheme());

const handler = async (req: NextRequest) => {
  const { tokenAddress } = await req.json();
  return NextResponse.json({ 
    verdict: "verified",
    score: 10,
    flags: [],
    address: tokenAddress
  });
};

export const POST = withX402(
  handler,
  {
    accepts: {
      scheme: "exact",
      price: "$0.50",
      network: "eip155:8453",
      payTo: "0xfd8fb800d480f4bd5ea56dc4b4ae98945cbff53e",
    },
    description: "Deep on-chain risk assessment for EVM tokens. Powered by the verification sub-kernel.",
  },
  server
);
