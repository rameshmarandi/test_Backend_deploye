import express from 'express';
import { json } from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(json());

// Basic route (POST request to "/")
app.post("/", (req, res) => {
  res.json({ message: "Hello Fron_test_depy" });
});

// For local development, listen on a specific port
if (process.env.NODE_ENV !== 'production') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

// Export the app for Vercel deployment
export default app;
