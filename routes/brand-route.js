const express = require("express");
const router = express.Router();
const {
  addNewBrand,
  getAllBrandbyPagination,
  removeBrandById,
  updateBrand,
  getAllBrand,
  getBrandById,
  changeBrandStatus,
  brandCount,
} = require("../controller/brand-controller");

router.post("/add-brand", addNewBrand);
router.post("/get-brand", getAllBrandbyPagination);

// router.get("/brand-count",  brandCount )
// router.put("/update-brand/:id",  updateBrand )
// router.delete("/remove-brand/:id",  removeBrandById )
// router.get("/get-brand/:id",  getBrandById )
// router.patch("/brand-status/:id",  changeBrandStatus )

router.get("/", (req, res) => {
  res.status(200).send("brand api working");
});

module.exports = router;
