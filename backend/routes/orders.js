const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new order
router.post('/create', async (req, res) => {
    const { user_id, total_price } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO orders (user_id, total_price) VALUES ($1, $2) RETURNING *',
            [user_id, total_price]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
