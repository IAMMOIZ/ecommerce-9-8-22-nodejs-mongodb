const express = require("express")
const router = express.Router()
const {addCity,searchcitybyname,getallCity,updateCitybyid,deletecitybyid,deletecities} = require("../controller/city-controller")

router.post("/add-city",addCity)
router.get("/search-city/:cityname",searchcitybyname)
router.post("/city-list",getallCity)
router.patch("/update-city/:cityid",updateCitybyid)
router.delete("/delete-city",deletecitybyid)
router.post("/delete-multiple-city",deletecities)
// router.("/-city",)

router.get("/", (req, res) => {
    res.status(200).send("city api working");
  });

module.exports = router