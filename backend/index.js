const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const plantRoutes = require('./routes/plantRoutes');
const energy_dataRoutes = require('./routes/energyDataRoutes');

app.use('/api/v1/plant', plantRoutes);
app.use('/api/v1/energyData', energy_dataRoutes);

app.get('/', (req,res) => {
    res.send('Welcome to the MAXX Energy API');
}); 

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
});