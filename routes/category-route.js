const express = require("express");
const router = express.Router();
const { addNewCategory  , removeCategoryById , updateCategory , getAllCategory , getCategoryById , changeCategoryStatus , getCategoryCount} = require("../controller/category-controller")

router.post("/add-category",  addNewCategory )
router.post("/category-count",  getCategoryCount )
router.post("/get-category",  getAllCategory )
router.post("/update-category/:id",  updateCategory )
router.post("/remove-category/:id",  removeCategoryById )
router.post("/get-category/:id",  getCategoryById )
router.post("/category-status/:id/:status",  changeCategoryStatus )


router.get("/",(req , res )=>{
    res.status(200).send("category api working")
})

module.exports = router