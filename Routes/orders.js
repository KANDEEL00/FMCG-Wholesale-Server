const express = require("express");
const router = express.Router();
const {
  getOrder,
  createOrder,
  getAllOrders,
  receiveOrder,
  getOrderHistory,
  getOrderDetails,
} = require("../Controllers/orderController");

router.get("/:orderId", getOrder);
router.get("/", getAllOrders);
router.post("/", createOrder);
router.put("/:orderId/receive", receiveOrder);
router.get("/history/:username", getOrderHistory);
router.get("/:orderId/details", getOrderDetails);
module.exports = router;
