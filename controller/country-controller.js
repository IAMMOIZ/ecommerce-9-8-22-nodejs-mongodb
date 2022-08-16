const { json } = require("express");
const express = require("express")
const countryModel = require("../model/country.model")

addCountry = (req,res)=>{
const {countryName,countryCode,dateCreated,dateUpdated,status} = req.body;

const country = new countryModel({countryName,countryCode,dateCreated,dateUpdated,status})

country.save((err,data)=>{
    if(err){
        console.log("err",err)      
        return res.status(400).json({error:err, msg:"BED REQUIEST"})
    }
    console.log("data");
    return res.status(201).json({result:data, msg:"DATA SAVED"})
})

}

getAllCountryByPagination = (req,res)=>{
    let page = req.query.page-1
    let limit = req.query.limit
    let skip = page*limit
    countryModel.find().limit(limit).skip(skip).then(
        (data)=>{
            return res.status(200).json({result : data ,msg : "all country"})
        }
    ).catch((err)=>{
        return res.status(400).json({error : err , msg : "data not found"})
    })
}


getCountryDetailsById = (req , res )=>{
     let countryId = req.params.id;
    console.log("params",countryId)
     countryModel.findById(countryId , ( err,data)=>{
        if(err){
            console.log("err",err)      
            return res.status(400).json({error:err, msg:"data not found"})
        }
        console.log("data",data);
        return res.status(201).json({result:data, msg:" country"})
    })
}

deletecountryById = (req ,res)=>{
    let countryId = req.params.id;

    countryModel.findOneAndDelete({_id : countryId}).then((data)=>{
        return res.status(200).json({result : data , msg : "country deleted"})
    }).catch((err)=>{
        return res.status(400).json({error : err , msg : "found an error to delete"})
    })
}

updateCountrybyId = (req , res)=>{
    let id = req.params.id;

    let countryName = req.body.countryName;
    let countryCode = req.body.countryCode;

    let updatedData = {countryName:countryName,countryCode:countryCode}

    countryModel.findByIdAndUpdate(id,
        updatedData,(err,data)=>{
        if(err){
            return res.status(400).json({error:err,msg:"not updated"})
        }else{
            return res.status(200).json({result:data,msg:"data updated"})
        }
    })

}

countryStatus = (req,res)=>{
    let id = req.params.id;

    let countrystatus = req.query.status;

    let updateddata = {status:countrystatus}

    countryModel.findByIdAndUpdate(id , updateddata ,(err,data)=>{
        if(err){
            return res.status(400).json({error:err,msg:"not updated"})
        }else{
            return res.status(200).json({result:data,msg:"data updated"})
        }
    
    })
}
 
module.exports = {addCountry,getAllCountryByPagination,getCountryDetailsById,deletecountryById,updateCountrybyId,countryStatus}