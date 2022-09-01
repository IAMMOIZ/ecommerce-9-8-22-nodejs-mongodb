const { ImageType, AvailablityStatus } = require("../enum/enum");
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    enable_status: { type: String, required: true },
    price: {
      basePrice: { type: Number, required: true },
      salePrice: { type: Number, required: true },
      costPrice: { type: Number, required: true },
    },
    productCode: { type: String, required: true, unique: true }, //uuid
    qty: {
      availableQty: { type: Number, required: true, min: 0 },
      totalQty: { type: Number, required: true, min: 0 },
    },
    imagePath: [
      {
        path: { type: String },
        imageType: { type: String, enums: ImageType, default: ImageType.EXTRA },
      },
    ],
    sallerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //joins over saller collection
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, //joins over category collection
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }, //joins over sub category collection
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" }, //joins over brand collection
    avilablityStatus: {
      type: String,
      enums: AvailablityStatus,
      default: AvailablityStatus.NONE,
    }, //cronejob on every order or batch job
    review : [
      { 
        reviewId : {  type: mongoose.Schema.Types.ObjectId, ref: "Reviews" },
        date : { type : Date , default : Date.now() }
     }],//for joins of review collection
  
    // manufacturer    : {  },
    },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Products", ProductSchema);
