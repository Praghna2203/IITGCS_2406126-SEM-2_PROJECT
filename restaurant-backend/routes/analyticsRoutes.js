const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Example: Count of orders per dish
router.get('/orders-per-item', async (req, res) => {
  try {
    const pipeline = [
      { $unwind: "$items" },
      {
        $group: {
          _id: "$items.name",
          totalOrders: { $sum: "$items.quantity" }
        }
      },
      { $sort: { totalOrders: -1 } }
    ];

    const result = await Order.aggregate(pipeline);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get analytics" });
  }
});

module.exports = router;
