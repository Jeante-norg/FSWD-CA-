const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const InventoryItem = require("./models/InventoryItem");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allItems = await InventoryItem.find();

    return res.status(200).json({ success: true, data: allItems });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post("/add", async (req, res) => {
  const { name, description, quantity, price } = req.body;
  try {
    const newItem = await InventoryItem.create({
      name,
      description,
      quantity,
      price,
    });

    return res.status(201).json({ success: true, data: newItem });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
