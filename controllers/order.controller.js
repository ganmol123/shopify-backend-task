const CONSTANTS = require("./../config/constants");
const { Order } = require("./../models/order.schema");
const logger = require("./../utils/logger");

/**
 * Create Order
 * @param {Object} req
 * @param {Object} res
 */
async function createOrder(req, res) {
  const {
    item_name,
    customer_id,
    delivery_address,
    storage_facilty_address,
    active,
  } = req.body;

  try {
    const order = await new Order({
      item_name: item_name,
      //TODO: Populate customer ID through login data. Currently not implemented as out of scope.
      customer_id: customer_id,
      delivery_address: delivery_address,
      storage_facilty_address: storage_facilty_address,
      active: active,
    });

    if (req.body.delivery_address) {
      order.order_type = CONSTANTS.ORDER_TYPE.DELIVERY;
    } else {
      order.order_type = CONSTANTS.ORDER_TYPE.STORAGE;
    }

    order.onboarding_date = Date.now();
    order.tracking_id = req.trackingId;
    order.save();
    res.status(200).send({
      order,
    });
    return;
  } catch (error) {
    logger.error("Error in adding a Order: " + error);
    res.status(500).send({
      message: "Something went wrong while saving the data: " + error,
    });
    return;
  }
}

/**
 * Update Order
 * @param {Object} req
 * @param {Object} res
 */
async function updateOrder(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
    });
    res.status(200).send(order);
  } catch (error) {
    logger.error("Error in updating Order: " + error);
    res.status(500).send({
      message: "Something went wrong while updating the date: " + error,
    });
  }
}

/**
 * Delete Order
 * @param {Object} req
 * @param {Object} res
 */
async function deleteOrder(req, res) {
  try {
    const order = Order.findByIdAndDelete(req.params.orderId, function (error) {
      if (order == null) {
        res.status(404).send({
          message: "Order does not exist",
        });
        return;
      }
      res.status(200).send({
        message: "Order successfully deleted!",
      });
    });
  } catch (error) {
    logger.error("Error in deletion: " + error);
    res.status(500).send({
      message: "Something went wrong: " + error,
    });
  }
}

/**
 * Read Order
 * @param {Object} req
 * @param {Object} res
 */
async function readOrder(req, res) {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order == null) {
      res.status(404).send({
        message: "Order does not exist",
      });
      return;
    }
    res.status(200).send(order);
  } catch (error) {
    logger.error("Error in getting Order info: " + error);
    res.status(500).send({
      message: "Something went wrong: " + error,
    });
  }
}

/**
 * List all Orders
 * @param {Object} req
 * @param {Object} res
 */
async function getAllOrder(req, res) {
  try {
    const order = await Order.find(req.query);
    res.status(200).send(order);
  } catch (error) {
    logger.error("Error in getting all Orders: " + error);
    res.status(500).send({
      message: "Something went wrong: " + error,
    });
  }
}

module.exports = {
  createOrder,
  readOrder,
  deleteOrder,
  updateOrder,
  getAllOrder,
};
