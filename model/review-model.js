const { ReviewForEnum} = require("../enum/enum");
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    byUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reviewFor :{ type: String, enums: ReviewForEnum, default: ReviewForEnum.PRODUCT },
    rating : { type : Number , require : true , min : 1 , max : 5, default : 1 },
    proudctId :{ type: mongoose.Schema.Types.ObjectId, ref: "Products" },
    sallerId : { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    comment : { type : String , require : true},
    likes : [{ 
            likedby : { type: mongoose.Schema.Types.ObjectId, ref: "User" } ,
            date : { type : Date , default : Date.now()} 
        }]
        },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Reviews", ProductSchema);


/*
byUser: 
reviewFor : enum [ saller , product ]
proudctId : if review is for product , connect to product collection
sallerId : if review is for saller , connect to userId collection
rating : from 1 to 5
comment : {
msg : ""
}
timestamp for comment
likes : [{ likedby : userId , date&time : current date }] api update like count
subComments : [ {  connect to same col }] for feuture i will implement
*/