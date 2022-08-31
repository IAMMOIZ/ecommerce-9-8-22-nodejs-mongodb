const express = require("express")
const router = express.Router()
const {addCountry,getAllCountryByPagination,getCountryDetailsById,deletecountryById,updateCountrybyId,countryStatus} = require("../controller/country-controller")

router.post("/addCountry",addCountry)

router.get("/get-AllCountry",getAllCountryByPagination)

router.get("/get-Country-ById/:id",getCountryDetailsById)

router.delete("/delete-country-ById/:id",deletecountryById)

//delete multiple country
router.delete("/delete-country",deleteCountry)

router.patch("/update-Country-byId/:id",updateCountrybyId)

router.patch("/country-Status/:id",countryStatus)


router.get("/", (req, res) => {
    res.status(200).send("country api working");
  });
module.exports = router