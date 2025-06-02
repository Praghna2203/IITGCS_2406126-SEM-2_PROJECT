const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.post("/", menuController.addMenuItem);
router.get("/", menuController.getMenuItems);
router.put("/:id", menuController.updateMenuItem);
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
