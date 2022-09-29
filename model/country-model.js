const mongoose = require("mongoose");  

const countrySchema = new mongoose.Schema({
  //userId :{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  countryName: { type: String, require: true ,  unique : true},
  countryCode: { type: Number , require: true , unique : true },
  dateCreated: { type: Date, default: Date.now() },
  dateUpdated: { type: Date, default: Date.now() },
  status: {
    type: String,
    enum: ["active", "diactive", "block", "temprary block"],
    default: "active",
  },
  //updatedBy : { type: mongoose.Schema.Types.ObjectId , ref : 'User' }
});

let countryModel = mongoose.model("country", countrySchema);

module.exports = countryModel;

// country {countryName string, status [enm ( active , block , temprary block)],countrycode number , createdate date , updatedate date , \-updatedby :{userid} -\}
// opration of apis {  addcountry(post , body) , getallcountrypaginationsearch(post , body) , getcountrydetailsbyid(params me countryid ), deletecountrybyid(params me countryid ) ,  updatecountrybyid(params me countryid , body me update data of country ,patch ) , diactivatecountry()}
