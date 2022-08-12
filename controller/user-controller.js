const bcrypt = require("bcrypt")
const userModel = require("../model/user.model")
const { addAddress }= require("../helpers/address.helper")
const { AddressEnum } = require("../enum/enum")

const getUserListPagination = (req , res )=>{
    try{
        
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}

const getUserDetailsByUserId = (req , res )=>{
    try{

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }

}

const deleteUsers = (req , res )=>{
    try{

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }

}
//addUser
const registerUser = async (req , res )=>{
    try{
    let { firstName , lastName ,userName, email, password , dateOfBirth , subscriptionType , userRole , gender, mobile , activeStatus , address , paymentMethod , profileImage } = req.body;
    //encript password with bycrypt
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    let encPassword = await bcrypt.hash(password, salt);
    // console.log("encripted password", encPassword)
    //dob me json me dono allowed he like 2/2/2022 or 1-1-1996
    let addressObject = {}
    let promiseArray = []
    if(address?.permanentAddress)
    {
        promiseArray.push(addAddress(address?.permanentAddress))
    }
    if(address?.shippingAddress)
    {
        promiseArray.push( addAddress(address?.shippingAddress) )
    }
    if(address?.currentAddress)
    {
        promiseArray.push(addAddress(address?.currentAddress))
    }
    // console.log("promise array " , promiseArray)
    Promise.all(promiseArray)
  .then(function (results) {
    // console.log("promise all",results[0].data)
    // console.log("promise all",results[1].data)
    // console.log("promise all",results[2].data)
    for(let i = 0 ; i < results.length ; i++)
    {   
        let addressData = results[i].data.data;
        let typeOfAddress = addressData.addressType;
        console.log("e.data.type",addressData)
        if(typeOfAddress === AddressEnum.PERMANENT )
        {
            console.log("permanentAddress--")
            addressObject['permanentAddress'] = addressData._id  
        }
        if(typeOfAddress === AddressEnum.CURRENT )
        {
            console.log("currentAddress--")
            addressObject['currentAddress'] = addressData._id
        }
        if(typeOfAddress === AddressEnum.SHIPPING  )
        {
            console.log("shippingAddress--")
            addressObject['shippingAddress'] = addressData._id
        }
    }
    console.log("addressObject" ,addressObject)
    const user = new userModel({ firstName , lastName ,userName, email, encPassword , dateOfBirth , subscriptionType , userRole , gender, mobile , activeStatus , address : addressObject , paymentMethod , profileImage , dateUpdate : Date.now()})
    console.log("userData",user);
    user.save((  err , data )=>{
        console.log(err, data)
        if(err)
        {
            console.log("error------",err.code);
            if(err.keyPattern?.userName)
            {
                return res.status(400).json({ msg : "USER NAME EXIST" , error : err})
            }
            if(err.keyPattern?.email)
            {
                return res.status(400).json({ msg : "EMAIL EXIST" , error : err})
            }
            return res.status(400).json({ msg : "BED REQUEST" , error : err})
        }else{
            console.log("data",data);
            return res.status(201).json({ msg : "USER ADDED" ,data : data , address : addressObject})
        }
    })

  }).catch((err)=>{
    console.log("error all",err)
    console.log("error from catch block" , err)
    return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : err})

  });
}
catch(error)
{
    console.log("error from catch block" , error)
    return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})
}
}


const disableUsers = (req , res )=>{
    try{

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }

}

const updateUserDetailsById = (req , res )=>{
    try{

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }

}

module.exports = { getUserListPagination , updateUserDetailsById, disableUsers , registerUser, deleteUsers, getUserDetailsByUserId}

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