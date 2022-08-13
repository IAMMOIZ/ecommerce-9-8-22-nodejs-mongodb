const { CommonStatus } = require("../enum/enum")
const mongoose = require("mongoose");
const BrandSchema = new mongoose.Schema({
    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category Id is required"],
      },
      subCatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: [true, "Sub Category Id is required"],
      },
    parentCategory : { type : mongoose.Schema.Types.ObjectId , ref : "Category"},
    parentSubCategory : [{ type : mongoose.Schema.Types.ObjectId , ref : "SubCategory"} ],
    brandName: { type: String, required: true },
    brandNumber: { type: String, required: true, unique: true },
    status: { type: String, enum: CommonStatus, default: CommonStatus.WAIT_FOR_APPROVAL }

},
    {
        timestamps: true
    })
module.exports = mongoose.model("Brand", BrandSchema)
