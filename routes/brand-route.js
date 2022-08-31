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
router.post("/getAll-brand", getAllBrandbyPagination);
router.delete("/remove-brand/:id",  removeBrandById )
router.put("/update-brand/:id",  updateBrand )
router.post("/get-brand/:id",  getBrandById )
router.patch("/brand-status/:id",  changeBrandStatus )

router.post("/brand-count",  brandCount )


router.get("/", (req, res) => {
  res.status(200).send("brand api working");
});

module.exports = router;
