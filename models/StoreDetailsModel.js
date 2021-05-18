//Store transactional IDs and other content here
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
