const express = require("express");
const router = express.Router();

const orderController = require("../../controllers/order.controller");
const { addTrackingtoOrder } = require("../../middleware/trackingToOrder");

router.post("/", addTrackingtoOrder, orderController.createOrder);

router.put("/:orderId", orderController.updateOrder);

router.delete("/:orderId", orderController.deleteOrder);

router.get("/:orderId", orderController.readOrder);

router.get("/", orderController.getAllOrder);

router.get("/export/csv", orderController.convertDatatoCSV);

module.exports = router;
