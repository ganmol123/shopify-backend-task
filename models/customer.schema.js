const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CONSTANTS = require("../config/constants");

const customerSchema = new Schema(
  {
    name: {
      type: String,
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = {
  Customer: mongoose.model(CONSTANTS.MODELS.CUSTOMER, customerSchema),
};
