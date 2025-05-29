const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', (req, res) => {
  console.log("🚀 Login request received");
  console.log("📦 Request body:", req.body); // Debug log

  const { email, password } = req.body || {};

  if (!email || !password) {
    console.error("❌ Missing email or password in request body");
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (email !== 'user@example.com' || password !== 'password123') {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error("❌ Token generation failed:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
