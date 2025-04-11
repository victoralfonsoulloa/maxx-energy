const db = require('../db/db')

exports.getAllPlantIds = async (req, res) => {
    try {
        const plant_id = await db.query('SELECT DISTINCT "plant_id" FROM "plant_generation"');
        res.json(plant_id);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};