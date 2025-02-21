const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  policyNumber: String,
  policyHolder: String,
  premiumAmount: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Record", recordSchema);
