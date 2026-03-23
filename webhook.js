// webhook.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const VERIFY_TOKEN = 'super_secure_token_123456'; // can be anything, but should match what you set in Meta

// Step 1: Verification endpoint for Meta
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('✅ Webhook verified');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Step 2: Receive messages (optional but recommended)
app.post('/webhook', express.json(), (req, res) => {
  console.log('📩 Incoming:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Webhook server running at http://localhost:${PORT}`);
});
