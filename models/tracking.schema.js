const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CONSTANTS = require("./../config/constants");

const trackingSchema = new Schema(
  {
    start_location: {
      type: String,
    },
    previous_location: {
      type: String,
    },
    curent_location: {
      type: String,
    },
    next_location: {
      type: String,
    },
    final_location: {
      type: String,
    },
    expected_time_arrival: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = {
  Tracking: mongoose.model(CONSTANTS.MODELS.TRACKING, trackingSchema),
};
