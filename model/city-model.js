const mongoose = require("mongoose");

let citySchema = new mongoose.Schema({
    cityName :{
        type : String,
        required : true,
        trim : true
    },
    stateId:{
        type:mongoose.Types.ObjectId,
        ref:"state"
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

let cityModel = mongoose.model("city",citySchema)

module.exports = cityModel