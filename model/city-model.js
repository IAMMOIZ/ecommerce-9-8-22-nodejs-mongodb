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
    }},
    {
        timestamps:true
    }

    
)

let cityModel = mongoose.model("city",citySchema)

module.exports = cityModel
