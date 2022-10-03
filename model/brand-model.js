const { CommonStatus } = require("../enum/enum");;
const mongoose = require("mongoose");


const BrandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    brandNumber: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: CommonStatus,
      default: CommonStatus.WAIT_FOR_APPROVAL,
    },
    parentCategory : { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    parentSubCategory : [
      { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Brand", BrandSchema);
