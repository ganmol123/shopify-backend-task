const { Tracking } = require("../models/tracking.schema");

/**
 * Middleware to add Tracking ID to Order
 * //TODO: Add router and controllers for tracking info to future populate and update info.
 * Currently not implementing as out of scope of task.
 * @param {Object} req
 * @param {Object} res
 */
const addTrackingtoOrder = async (req, res, next) => {
  try {
    const tracking = await new Tracking({});
    trackingId = tracking._id;
    req.trackingId = trackingId;
    next();
  } catch (error) {
    logger.error(
      "Something went wrong while adding tracking to order: " + error
    );
    res.status(500).send({
      message: "Something went wrong while adding tracking to order",
    });
  }
};

module.exports = {
  addTrackingtoOrder,
};
