const { CommonStatus } = require("../enum/enum");
const mongoose = require("mongoose");
const SubCategorySchema = new mongoose.Schema(
  {
    catId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category Id is required"],
    },
    parentCategory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    subCatName: { type: String, required: true },
    subCatNumber: { type: Number, required: true, unique: true },
    status: {
      type: String,
      enum: CommonStatus,
      // default: CommonStatus.WAIT_FOR_APPROVAL,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("SubCategory", SubCategorySchema);
