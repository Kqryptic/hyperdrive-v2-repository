import { paymentProxy, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";

const facilitator = new HTTPFacilitatorClient({ url: "https://x402.org/facilitator" });
const server = new x402ResourceServer(facilitator)
  .register("eip155:8453", new ExactEvmScheme());

export const middleware = paymentProxy(
  {
    "/api/reason": {
      accepts: {
        scheme: "exact",
        price: "$0.10",
        network: "eip155:8453",
        payTo: "0xfd8fb800d480f4bd5ea56dc4b4ae98945cbff53e",
      },
      description: "TheMind-v1 Reasoning-as-a-Service",
    },
    "/api/risk-assessment": {
      accepts: {
        scheme: "exact",
        price: "$0.50",
        network: "eip155:8453",
        payTo: "0xfd8fb800d480f4bd5ea56dc4b4ae98945cbff53e",
      },
      description: "Deep on-chain risk assessment",
    },
  },
  server
);

export const config = {
  matcher: ["/api/reason", "/api/risk-assessment"],
};
