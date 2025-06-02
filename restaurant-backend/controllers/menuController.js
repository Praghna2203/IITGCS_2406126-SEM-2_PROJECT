const MenuItem = require("../models/MenuItem");

exports.addMenuItem = async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMenuItems = async (req, res) => {
  const { name, category, tags, minPrice, maxPrice } = req.query;
  const filter = {};

  if (name) filter.name = { $regex: name, $options: "i" };
  if (category) filter.category = category;
  if (tags) filter.tags = { $in: tags.split(",") };
  if (minPrice && maxPrice) filter.price = { $gte: minPrice, $lte: maxPrice };

  try {
    const items = await MenuItem.find(filter).sort({ name: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
