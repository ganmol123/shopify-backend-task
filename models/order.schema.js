const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CONSTANTS = require("../config/constants");

const orderSchema = new Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    order_type: {
      type: String,
      enum: [CONSTANTS.ORDER_TYPE.DELIVERY, CONSTANTS.ORDER_TYPE.STORAGE],
      default: [],
    },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: CONSTANTS.MODELS.CUSTOMER,
    },
    tracking_id: {
      type: Schema.Types.ObjectId,
      ref: CONSTANTS.MODELS.TRACKING,
    },
    delivery_address: {
      type: String,
    },
    storage_facilty_address: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = {
  Order: mongoose.model(CONSTANTS.MODELS.ORDER, orderSchema),
};
