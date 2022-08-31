const {orderStatus,getOrderById,getListOfOrders,updateExistingOrder,newOrder,getOrdersByUserID } = require("../controller/order-controller")
const express = require("express");
const router = express.Router();

router.get("/get-order-by-orderid/:orderid", getOrderById);
router.post("/order-list", getListOfOrders);
router.put("/update-order", updateExistingOrder);
router.post("/new-order", newOrder);
router.post("/get-orderby-user/:userid", getOrdersByUserID);
router.get("/orderStatus/:orderId", orderStatus);

router.get("/", (req, res) => {
  res.status(200).send("order api working");
});

module.exports = router;
