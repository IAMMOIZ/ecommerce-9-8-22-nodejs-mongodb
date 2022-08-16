const express = require("express");
const router = express.Router();
const {
  addNewBrand,
  removeBrandById,
  updateBrand,
  getAllBrand,
  getBrandById,
  changeBrandStatus,
  brandCount,
} = require("../controller/brand-controller");

router.post("/add-brand", addNewBrand);
router.get("/brand-count", brandCount);
router.get("/get-brand", getAllBrand);
router.put("/update-brand/:id", updateBrand);
router.delete("/remove-brand/:id", removeBrandById);
router.get("/get-brand/:id", getBrandById);
router.patch("/brand-status/:id", changeBrandStatus);

router.get("/", (req, res) => {
  res.status(200).send("brand api working");
});

module.exports = router;
