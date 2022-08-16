const axios = require("axios");

const addAddress = function (body) {
  console.log("address ", body);
  return axios.post("http://localhost:3000/address/add-address", body);
};

module.exports = { addAddress };

// const addAddress= (body)=>{
//     //permanent address
//     const addPermanentAdd = (req , res , next)=>{

//     }

// }
