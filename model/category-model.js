const { CommonStatus } = require("../enum/enum");;
const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema(
  {
    catName: { type: String, required: true },
    catNumber: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: CommonStatus,
      default: CommonStatus.WAIT_FOR_APPROVAL,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Category", CategorySchema);
