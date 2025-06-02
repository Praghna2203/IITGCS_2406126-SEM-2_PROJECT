const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  ingredients: [String],
  tags: [String], // e.g. ["spicy", "vegan"]
  availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", MenuItemSchema);
