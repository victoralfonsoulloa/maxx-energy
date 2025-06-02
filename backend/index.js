const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
const compression = require('compression');
const morgan = require('morgan');

app.use(compression()); // compresses all responses
app.use(morgan('dev')); // logs each request in the console


// Routes
const plantRoutes = require('./routes/plantRoutes');
const energy_dataRoutes = require('./routes/energyDataRoutes');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

// Public route
app.use('/api/login', authRoutes);

// Protected routes
app.use('/api/v1/plant', authenticateToken, plantRoutes);
app.use('/api/v1/energyData', authenticateToken, energy_dataRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the MAXX Energy API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
