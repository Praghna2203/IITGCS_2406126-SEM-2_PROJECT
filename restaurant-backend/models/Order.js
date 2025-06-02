const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
      customizations: String
    }
  ],
  status: {
    type: String,
    default: 'Placed'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
