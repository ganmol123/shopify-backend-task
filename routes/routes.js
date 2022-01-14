const express = require("express");

const orderRouter = require("./v1/order.route");

const router = express.Router();

// Order endpoint
router.use("/order", orderRouter);

module.exports = router;
