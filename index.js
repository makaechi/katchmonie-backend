const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('🎉 Katch Monie Backend is Running!');
});

// Dummy wallet balance route (temporary test)
app.get('/api/balance', (req, res) => {
  res.json({ walletBalance: 5000 });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
