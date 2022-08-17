const addressModel = require("../model/address-model");

//add address
const addNewAddress = (req, res) => {
  try {
    const {
      houseNo,
      street,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      pincode,
      addressType,
      type,
    } = req.body;

    console.log(req.body , "this ----------")

    const address = new addressModel({
      houseNo,
      street,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      pincode,
      addressType,
      type,
    });
    address.save((err, data) => {
      if (err) {
        console.log("err");
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      }
      console.log("address added");
      return res.status(201).json({ msg: "ADDRESS ADDED", data: data });
    });
  } catch (error) {
    console.log("catch block error", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

module.exports = { addNewAddress };
