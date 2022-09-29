const express = require("express")
const router = express.Router()
const {addCountry,getAllCountryByPagination,getCountryDetailsById,deletecountryById,updateCountrybyId,countryStatus} = require("../controller/country-controller")

router.post("/register-country",addCountry)

router.get("/get-country-list",getAllCountryByPagination)

router.get("/get-country-byId/:id",getCountryDetailsById)

router.delete("/delete-country-byId/:id",deletecountryById)

router.patch("/update-country-byId/:id",updateCountrybyId)

router.patch("/country-status/:id",countryStatus)

module.exports = router