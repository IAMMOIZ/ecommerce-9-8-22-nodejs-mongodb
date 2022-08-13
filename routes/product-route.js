const express = require("express");
const router = express.Router();
const { addNewSubCategory  , removeSubCategoryById , updateSubCategory , getAllSubCategory , getSubCategoryById , changeSubCategoryStatus , SubCategoryCount} = require("../controller/subcategory-controller")

router.post("/add-subcategory",  addNewSubCategory )
router.post("/get-subcategory",  getAllSubCategory )
router.post("/update-subcategory/:id",  updateSubCategory )
router.post("/remove-subcategory/:id",  removeSubCategoryById )
router.post("/get-subcategory/:id",  getSubCategoryById )
router.post("/subcategory-status/:id",  changeSubCategoryStatus )
router.post("/subcategory-count",  SubCategoryCount )


router.get("/",(req , res )=>{
    res.status(200).send("subcategory api working")
})

module.exports = router