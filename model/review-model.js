const mongoose = require("mongoose");  

const reviewSchema = new mongoose.Schema({
  userId :{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  orderId : {type:mongoose.Schema.Types.ObjectId, ref:"Order"},
  reviewDiscription: { type: String },
  rating : { type: Number , require: true },
  dateCreated: { type: Date, default: Date.now() },
  dateUpdated: { type: Date, default: Date.now() },
});

let reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;