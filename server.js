// Import Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configure server port with environment variable fallback
const PORT = process.env.PORT || 3000;

// Route 1: Hello world endpoint
// Returns "Hello world" text response
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// Route 2: Good evening endpoint  
// Returns "Good evening" text response
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Optional: Root endpoint providing API information
app.get('/', (req, res) => {
  res.send('Welcome to Express.js Tutorial Server. Try /hello or /evening endpoints.');
});

// Start the HTTP server and listen on configured port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`  - http://localhost:${PORT}/hello`);
  console.log(`  - http://localhost:${PORT}/evening`);
});
