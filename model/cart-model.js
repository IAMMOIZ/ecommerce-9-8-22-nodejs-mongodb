const { CommonStatus } = require("../enum/enum");
const mongoose = require("mongoose");
//only for save for later
const CartSchema = new mongoose.Schema(
  {
    products : [ 
        {
            proudctId : { type : String},
            productPrice : { type : Number},
            productQty : { type : Number}
        }
    ],
    totalQty : { type : Number},
    totalPrice : { type : Number},
    checkoutDone : { type : Boolean},
    status : {type : String}
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Cart", CartSchema);
