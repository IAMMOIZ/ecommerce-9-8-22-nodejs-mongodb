const mongoose = require("mongoose");
const PaymentMethodSchema = new mongoose.Schema({
    methodName : { type : String },
    isActive : { type : Boolean},
    createdAt : { type : Date , default : Date.now() },
    updateAt : { type : Date }
})

module.exports = mongoose.model("PaymentMethod" , PaymentMethodSchema )
