const {  OrderStatus } = require("../enum/enum");
const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    products :[{ 
        product :  {
            type: mongoose.Schema.Types.ObjectId, ref: "User" ,
            required : true
            },
        priceOfPerProduct : {type : Number , required : true},
        qty : { type : Number , required : true , default : 0},
        total :  { type : Number , default : priceOfPerProduct*qty }
    }],
    BilledAmmount :{
        type:Number,
        required : true
    },
    placedDate :{type:Date },
    deliveryDate : { type : Date},
    paymentMethod : { type : mongoose.Schema.Types.ObjectId , ref : "Payments" },
    shippingAddress : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Address"
    },
    placedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },
    orderStatus : [{
        status : { type : String , enum : OrderStatus  , default : OrderStatus.NONE }
    }],
    isCancelled : { type : Boolean },
    deliveryBody :  {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    }
    },
    {
        timestamps:true
    }

    
)

let orderModel = mongoose.model("Order",orderSchema)

module.exports = orderModel

//products : [{ product , price , qty }] , finalPrice , placed date : date , expected delivery date : date, paymentMethodUsed : payment method collection link , shippingAddress , placedByUser , orderStatus  : [{  date : date is current when we change status ,status : [ placed , cancled , refunded, delivered , atFactory , atOurStore , atDeliveryPartnerStore ] }], deliveryBoy : user collection , isCanceled : true / false