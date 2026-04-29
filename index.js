const express = require('express');
const { paymentMiddleware } = require('@x402/express');
const { x402ResourceServer, HTTPFacilitatorClient } = require('@x402/core/server');
const { ExactEvmScheme } = require('@x402/evm/exact/server');
const { declareDiscoveryExtension } = require('@x402/extensions/bazaar');

const app = express();
app.use(express.json());

const PAY_TO = '0xfd8fb800d480f4bd5ea56dc4b4ae98945cbff53e';

const facilitator = new HTTPFacilitatorClient({ url: 'https://x402.org/facilitator' });
const server = new x402ResourceServer(facilitator);
server.register('eip155:8453', new ExactEvmScheme());

app.get('/health', (req, res) => res.json({ status: 'ok', engine: 'TEA Prime v2.1.0' }));

app.use(
  paymentMiddleware(
    {
      'GET /api/macro': {
        accepts: {
          scheme: 'exact',
          price: '$0.50',
          network: 'eip155:8453',
          payTo: PAY_TO,
        },
        description: 'Extract high-velocity macro signals from the Sovereign Refinery engine.',
        mimeType: 'application/json',
        extensions: {
          ...declareDiscoveryExtension({
            output: {
              example: { signal: 'bullish', conviction: 0.92, venue: 'Hyperliquid' },
              schema: {
                properties: {
                  signal: { type: 'string' },
                  conviction: { type: 'number' },
                  venue: { type: 'string' },
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

app.get('/api/macro', (req, res) => {
  res.json({
    signal: 'bullish',
    conviction: 0.92,
    venue: 'Hyperliquid',
    timestamp: new Date().toISOString(),
    engine: 'TEA Prime v2.1.0',
    status: 'anchored'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Refinery Service running on port ${PORT}`));
