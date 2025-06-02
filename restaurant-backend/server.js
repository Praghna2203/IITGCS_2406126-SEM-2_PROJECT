const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// API Routes
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/analytics", analyticsRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully.");
  // Start server only after DB is connected
  app.listen(5000, () => {
    console.log("🚀 Server is running on http://localhost:5000");
  });
})
.catch((error) => {
  console.error("❌ MongoDB connection failed:", error.message);
});


