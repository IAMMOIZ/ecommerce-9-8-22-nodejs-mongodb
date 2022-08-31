const express = require("express");
const router = express.Router();
const { addNewAddress } = require("../controller/address-controller");

router.post("/add-address", addNewAddress);

router.get("/", (req, res) => {
  res.status(200).send("address api working");
});

module.exports = router;
