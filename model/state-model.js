const mongoose = require("mongoose");

let stateSchema = new mongoose.Schema({
    stateName :{
        type : String,
        required : true,
        trim : true
    },
    countryId:{
        type:mongoose.Types.ObjectId,
        ref:"country"
    },
    status :{type:String , enum : ["active" ,"diactive", "block" , "temprary block"], default:"active"},
    },
    {
        timestamps:true
    }

    
)

let stateModel = mongoose.model("state",stateSchema)

module.exports = stateModel