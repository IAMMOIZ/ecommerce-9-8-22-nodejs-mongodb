const express = require("express");
const router = express.Router();
const {
  addNewCategory,
  getCategoryCount,
  getAllCategory,
  removeCategoryById,
  updateCategory,
  getCategoryById,
  changeCategoryStatus,
  getAllCountsAggregate,
  mixCatSubCat
} = require("../controller/category-controller");

router.post("/add-category", addNewCategory);
router.post("/category-count", getCategoryCount);
router.post("/getAll-category", getAllCategory);
router.delete("/remove-category/:id", removeCategoryById);
router.put("/update-category/:id", updateCategory);
router.post("/get-category/:id", getCategoryById);
router.patch("/category-status/:id/:status", changeCategoryStatus);
router.post("/category-aggregate", getAllCountsAggregate);
router.post("/mix-aggregate", mixCatSubCat);

router.get("/", (req, res) => {
  res.status(200).send("category api working");
});

module.exports = router;
