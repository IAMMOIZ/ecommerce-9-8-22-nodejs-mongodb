const express = require("express");
const router = express.Router();
const {
  addNewSubCategory,
  getAllsubCategory,
  removeSubCategoryById,
  updateSubCategory,
  getSubCategoryById,
  changeSubCategoryStatus,
  getSubCategoryCountByCatId,
} = require("../controller/subcategory-controller");

router.post("/register-subcategory", addNewSubCategory);
router.get("/getAll-subcategory", getAllsubCategory);
router.get("/get-subcategory/:id", getSubCategoryById);
router.delete("/remove-subcategory/:id", removeSubCategoryById);
router.put("/update-subcategory/:id", updateSubCategory);
router.patch("/subcategory-status/:id", changeSubCategoryStatus);
router.get("/subcategory-count", getSubCategoryCountByCatId);

router.get("/", (req, res) => {
  res.status(200).send("subcategory api working");
});

module.exports = router;
