const bcrypt = require("bcrypt");
const userModel = require("../model/user-model");
const { addAddress } = require("../helpers/address-helper");
const { AddressEnum ,CommonStatus } = require("../enum/enum");

//get all user list with PAGGINATION
const getUserListPagination = async (req, res) => {
  try {
    let page = req.query.pageNo - 1;
    let limit = req.query.limit;
    let skip = page * limit;
    userModel
      .find()
      .limit(limit)
      .skip(skip)
      .then((data) => {
        return res.status(200).json({
          total: data.length,
          msg: "successfully got all user",
          result: data,
        });
      })
      .catch((err) => {
        return res.status(400).json({ error: err, msg: "failed to get user" });
      });
  } catch (error) {
    console.log("error from catch block of paggination", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//get user details by id 
const getUserDetailsByUserId = (req, res) => {
  try {
    {
      let id = req.params.id;
      userModel
        .findById({ _id: id })
        .populate("address.permanentAddress")
        .populate("address.currentAddress")
        .populate("address.shippingAddress")
        .then((data) => {
          return res.status(200).json({
            total: data.length,
            msg: "successfully got user details ",
            result: data,
          });
        })
        .catch((err) => {
          console.log("err", err);
          return res.status(400).json({
            error: err,
            msg: "failed to get user details",
          });
        });
    }
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//delete multiple user
const deleteUsers = (req, res) => {
  try {
    {
      userModel.deleteMany({ _id: { $in: req.body.id } }, (err, data) => {
        if (err) {
          return res
            .status(400)
            .json({
              err,
              msg: "Your request could not be processed. Please try again.",
            });
        } else {
          return res
            .status(200)
            .json({ msg: "user status been  successfully deleted ", data });
        }
      });
    }
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", err: err });
  }
};
//addUser
const registerUser = async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      userName,
      email,
      password,
      dateOfBirth,
      subscriptionType,
      userRole,
      gender,
      mobile,
      activeStatus,
      address,
      paymentMethod,
      profileImage,
    } = req.body;
    //encript password with bycrypt
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    let encPassword = await bcrypt.hash(password, salt);
    // console.log("encripted password", encPassword)
    //dob me json me dono allowed he like 2/2/2022 or 1-1-1996
    let addressObject = {};
    let promiseArray = [];
    if (address?.permanentAddress) {
      promiseArray.push(addAddress(address?.permanentAddress));
    }
    if (address?.shippingAddress) {
      promiseArray.push(addAddress(address?.shippingAddress));
    }
    if (address?.currentAddress) {
      promiseArray.push(addAddress(address?.currentAddress));
    }
    // console.log("promise array " , promiseArray)
    Promise.all(promiseArray)
      .then(function (results) {
        // console.log("promise all",results[0].data)
        // console.log("promise all",results[1].data)
        // console.log("promise all",results[2].data)
        for (let i = 0; i < results.length; i++) {
          let addressData = results[i].data.data;
          let typeOfAddress = addressData.addressType;
          console.log("e.data.type", addressData);
          if (typeOfAddress === AddressEnum.PERMANENT) {
            console.log("permanentAddress--");
            addressObject["permanentAddress"] = addressData._id;
          }
          if (typeOfAddress === AddressEnum.CURRENT) {
            console.log("currentAddress--");
            addressObject["currentAddress"] = addressData._id;
          }
          if (typeOfAddress === AddressEnum.SHIPPING) {
            console.log("shippingAddress--");
            addressObject["shippingAddress"] = addressData._id;
          }
        }
        console.log("addressObject", addressObject);
        const user = new userModel({
          firstName,
          lastName,
          userName,
          email,
          encPassword,
          dateOfBirth,
          subscriptionType,
          userRole,
          gender,
          mobile,
          activeStatus,
          address: addressObject,
          paymentMethod,
          profileImage,
          dateUpdate: Date.now(),
        });
        console.log("userData", user);
        user.save((err, data) => {
          console.log(err, data);
          if (err) {
            console.log("error------", err.code);
            if (err.keyPattern?.userName) {
              return res
                .status(400)
                .json({ msg: "USER NAME EXIST", error: err });
            }
            if (err.keyPattern?.email) {
              return res.status(400).json({ msg: "EMAIL EXIST", error: err });
            }
            return res.status(400).json({ msg: "BED REQUEST", error: err });
          } else {
            console.log("data", data);
            return res
              .status(201)
              .json({ msg: "USER ADDED", data: data, address: addressObject });
          }
        });
      })
      .catch((err) => {
        console.log("error all", err);
        console.log("error from catch block", err);
        return res
          .status(500)
          .json({ msg: "SOMETHING WENT WRONG", error: err });
      });
  } catch (error) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//admin can disable user 
const updateManyUsersStatus = (req, res) => {
  try {

    if( CommonStatus[req.body.status] ){

    let dataToUpdate = {activeStatus : req.body.status} 
    userModel.updateMany({ _id: { $in: req.body.id }},dataToUpdate, (err, data) => {
      if (err) {
        return res
          .status(400)
          .json({
            err,
            msg: "Your request could not be processed. Please try again.",
          });
      } else {
        return res
          .status(200)
          .json({ msg: "user status been  successfully upated ", data });
      }
    })} 
    else{
      return res
          .status(400)
          .json({ msg: "invalide status " });
      }
    
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG",err });
  }
};

//update user details 
const updateUserDetailsById = (req, res) => {
  try {
    {
      let userId = req.params.id;
      let dataToUpdate = req.body;
      //1 where , 2 set : what to update
      userModel.findByIdAndUpdate(
        { _id: userId },
        dataToUpdate,
        (err, data) => {
          if (err) {
            return res
              .status(400)
              .json({
                error: err,
                msg: "Your request could not be processed. Please try again.",
              });
          } else {
            return res
              .status(200)
              .json({
                msg: "user status been updated successfully! as " + data,
              });
          }
        }
      );
    }
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const requestForSubcription = (req, res) => {
  try {
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const forgetPassword = async(req, res) => {
  try {

    {
      const { mobileNumber, email, password } = req.body;
    
      if(!mobileNumber){var userEmail = await userModel.findOne({email});
    console.log("!mobile")}
      else{
      var numberExists = await userModel.findOne({ mobileNumber });
      var userEmail = await userModel.findOne({email});
      }
      
      const exist = numberExists || userEmail
      console.log(exist , "this is exist==========");
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
    
      if (exist) {
        await userModel.findByIdAndUpdate(
          { _id: exist._id },
          { $set: { password: hashedPassword } }
        );
        res.status(200).json({ msg: "Password Updated Succesfully" });
      } else {
        res.status(401).send("email or mobile number not found");
      }
    };

  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

const updateProfileImage = (req, res) => {
  try {
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//exist user email or userName

const userNameEmailExist = async (req, res) => {
  try {
      const { userName, email } = req.body;
    
      const emailExist = await userModel.findOne({ email });
    
      const userNameExist = await userModel.findOne({ userName });
    
      let exist = emailExist || userNameExist
      if (exist) {
        return res.status(500).json({ msg: "not available" });
      } else {
        return res.status(200).json({ msg: "available" });
      }

  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

module.exports = {
  getUserListPagination,
  updateUserDetailsById,
  updateManyUsersStatus,
  registerUser,
  deleteUsers,
  getUserDetailsByUserId,
  userNameEmailExist,
  forgetPassword
};
  
/*
insert user data with the address
get all the userlist with the populate and pagination
get specific user data by userid as params
update user details bsic
update or add or remove mobile number
update address 
change status of user like block diactive disabled
delete user , 
delete address 
make address permanent as a shipping address
forget password

*/
