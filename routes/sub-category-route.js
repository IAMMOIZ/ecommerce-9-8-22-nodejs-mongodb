const express = require("express");
const router = express.Router();
const {
  addNewSubCategory,
  getAllsubCategory,
  removeSubCategoryById,
  updateSubCategory,
  getSubCategoryById,
  changeSubCategoryStatus,
  getSubCategoryCount,
} = require("../controller/subcategory-controller");

router.post("/add-subcategory", addNewSubCategory);
router.post("/getAll-subcategory", getAllsubCategory);
router.delete("/remove-subcategory/:id", removeSubCategoryById);
router.put("/update-subcategory/:id", updateSubCategory);
router.post("/get-subcategory/:id", getSubCategoryById);
router.patch("/subcategory-status/:id", changeSubCategoryStatus);
router.post("/subcategory-count", getSubCategoryCount);

router.get("/", (req, res) => {
  res.status(200).send("subcategory api working");
});

module.exports = router;
