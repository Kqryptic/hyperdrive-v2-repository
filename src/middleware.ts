import { paymentProxy, x402ResourceServer } from "@x402/next";

// Note: In serverless environments, we use the unified @x402/next entry points
// to avoid module resolution issues with sub-paths.

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
  }
);

export const config = {
  matcher: ["/api/reason", "/api/risk-assessment"],
};
