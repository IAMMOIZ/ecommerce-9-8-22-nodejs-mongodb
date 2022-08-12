const express = require("express");
const router = express.Router();
const { getUserListPagination , updateUserDetailsById, disableUsers , registerUser, deleteUsers, getUserDetailsByUserId} = require("../controller/user-controller")



//dummy api for testing
router.get("/",(req , res )=>{
    res.status(200).send("user api working")
})


//updateUserDetailsById
router.put("/update-user-Ddetails/:id", updateUserDetailsById )

//disableUsers
router.post("/disable-user", disableUsers )

//addUser
router.post("/register-user", registerUser )

//get user list with pagination
router.post("/delete-users", deleteUsers )

//getUserDetailsByUserId
router.get("/user-detail/:Id", getUserDetailsByUserId )

//login
router.post("/login", getUserDetailsByUserId )

//logout
router.post("/logout", getUserDetailsByUserId )

module.exports = router