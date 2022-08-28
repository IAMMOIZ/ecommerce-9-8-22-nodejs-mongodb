const express = require("express")
const router = express.Router()
const addCity = require("../controller/city-controller")

router.post("/add-city",addCity)

module.exports = router