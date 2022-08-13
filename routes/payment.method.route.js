const express = require("express");
const router = express.Router();
const { addPaymentMethod  , removePaymentMethodById , getAllPaymentMethod , getPaymentMethodById , changePaymentMethodStatus , updatePaymentMethod , getPaymentMethodCount} = require("../controller/payment.method.controller")

router.post("/add-paymethod",  addPaymentMethod )
router.post("/get-paymethod",  getAllPaymentMethod )
router.post("/update-paymethod/:id",  updatePaymentMethod )
router.post("/remove-paymethod/:id",  removePaymentMethodById )
router.post("/get-paymethod/:id",  getPaymentMethodById )
router.post("/paymethod-status/:id/:status",  changePaymentMethodStatus )
router.post("/paymethod-count",  getPaymentMethodCount )


router.get("/",(req , res )=>{
    res.status(200).send("payment method api working")
})

module.exports = router