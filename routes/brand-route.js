const express = require("express");
const router = express.Router();
const {
  addNewBrand,
  getAllBrand,
  removeBrandById,
  updateBrand,
  getBrandById,
  changeBrandStatus,
  brandCountByCatId,
} = require("../controller/brand-controller");

router.post("/register-brand", addNewBrand);
router.get("/getAll-brand", getAllBrand);
router.get("/get-brand/:id",  getBrandById )
router.delete("/remove-brand/:id",  removeBrandById )
router.put("/update-brand/:id",  updateBrand )

router.patch("/brand-status/:id",  changeBrandStatus )

router.get("/brand-count",  brandCountByCatId )


router.get("/", (req, res) => {
  res.status(200).send("brand api working");
});

module.exports = router;
