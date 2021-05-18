/**
 * Model to store transactional IDs irrespective of current store status.
 */
const mongoose = require("mongoose");

const StoreDetailsSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true,
  },
  subscriptionChargeId: {
    type: String,
  },
});

const StoreDetailsModel = mongoose.model("store-detail", StoreDetailsSchema);

module.exports = StoreDetailsModel;
