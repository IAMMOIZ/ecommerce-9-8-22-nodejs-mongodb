const { AddressEnum } = require("../enum/enum")
const mongoose = require("mongoose");
const AddressSchema =new mongoose.Schema({
    houseNo : { type : Number},
    street : { type : String },
    addressLine1 : { type : String },
    addressLine2 : { type : String },
    city : { type : String },
    state : { type : String },
    country : { type : String },
    pincode : { type : Number },
    addressType : { type : String , enum : AddressEnum , default : AddressEnum.PERMANENT },
},
    {
        timestamps : true
    })
module.exports = mongoose.model("Address" , AddressSchema )
