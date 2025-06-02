const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  updateOrderStatus
} = require('../controllers/orderController');

// Routes handled via controller
router.post('/', createOrder); // POST /api/orders
router.get('/', getOrders);    // GET /api/orders
router.put('/:id/status', updateOrderStatus); // PUT /api/orders/:id/status

module.exports = router;
