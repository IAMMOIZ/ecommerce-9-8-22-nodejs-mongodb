const express = require("express");
const router = express.Router();

const {
  getUserListPagination,
  updateUserDetailsById,
  updateManyUsersStatus,
  registerUser,
  deleteUsers,
  getUserDetailsByUserId,
  userNameEmailExist,
  forgetPassword,
} = require("../controller/user-controller");

const {
  getUserListPagination,
  updateUserDetailsById,
  updateManyUsersStatus,
  registerUser,
  deleteUsers,
  getUserDetailsByUserId,
  userNameEmailExist,
  forgetPassword,
} = require("../controller/user-controller");

const {otpSend, verifyOtp} = require("../helpers/otp-helper")

//dummy api for testing
router.get("/", (req, res) => {
  res.status(200).send("user api working");
});

//get user list with pagination
router.get("/get-user-list-paggination", getUserListPagination);

//updateUserDetailsById
router.put("/update-user-details/:id", updateUserDetailsById);

//disableUsers
router.patch("/status-user", updateManyUsersStatus);

//addUser
router.post(
  "/register-user",
  // IMAGEHelper.single("myImage"),
  // uploadImage,
  registerUser
);

//get user list with pagination
router.delete("/delete-users", deleteUsers);

//getUserDetailsByUserId
router.get("/user-detail/:id", getUserDetailsByUserId);

//user name or email exist
router.get("/check-user", userNameEmailExist);

//login
router.post("/login", getUserDetailsByUserId);

//logout
router.post("/signout", getUserDetailsByUserId);

//send otp for forget api
router.post("/send-otp",otpSend)

//verify api for update password
router.post("/forget-password",verifyOtp, forgetPassword)


router.get("/", (req, res) => {
  res.status(200).send("user api working");
});
module.exports = router;
