const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  updateProduct, 
  removeProductById,
  changeProductStatus,
  productCountWithFilter,
  uploadProductImage,
  changeMultipleProductStatus,
} = require("../controller/product-controller");

router.post("/register-product", addProduct);
//price range filter , catgorywise , brand , subcategory ,
router.get("/get-product-list", getAllProducts);
router.patch("/update-product/:id", updateProduct);
router.delete("/remove-product/:id", removeProductById);
// router.get("/product-detail/:id",  getProductById )
router.patch("/product-status/:id/:status", changeProductStatus);
///product count :catid/:subcatid/:brandid/:bysaller
router.get("/product-count", productCountWithFilter);
//change and upload image for products
router.post("/product-image", uploadProductImage);
//change multiple product status
router.post("/product-status-multi", changeMultipleProductStatus);
//cronejob for auto uptading out of stock status
// router.post("/product-image",   )
//dummy apis
router.get("/", (req, res) => {
  res.status(200).send("subcategory api working");
});

module.exports = router;
