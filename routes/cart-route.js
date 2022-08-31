const express = require("express");
const router = express.Router();
const {
    addProductToCart,
    getCartInfoByUserId,
    updateCartByIdAndData,
    removeCart,
    changeCartStatus,
} = require("../controller/cart-controller")

router.post("/add-new-cart", addProductToCart);
router.post("/cart-details/:userid", getCartInfoByUserId);
router.post("/update-cart", updateCartByIdAndData);
router.delete("/clear-cart/:id", removeCart);
router.put("/update-cart-status/:id", changeCartStatus);

router.get("/", (req, res) => {
  res.status(200).send("cart api working");
});

module.exports = router;
