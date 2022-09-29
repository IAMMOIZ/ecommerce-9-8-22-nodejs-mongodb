const stateModel = require("../model/state-model")

addState = (req,res)=>{
const {countryId,stateName,stateCode,dateCreated,dateUpdated,status} = req.body;

const country = new stateModel({countryId,stateName,stateCode,dateCreated,dateUpdated,status})

country.save((err,data)=>{
    if(err){
        console.log("err",err)      
        return res.status(400).json({error:err, msg:"BED REQUIEST"})
    }
    console.log("data");
    return res.status(201).json({result:data, msg:"DATA SAVED"})
})

}

getAllStateByPagination = (req,res)=>{
    let page = req.query.page-1
    let limit = req.query.limit
    let skip = page*limit
    stateModel.find().limit(limit).skip(skip).then(
        (data)=>{
            return res.status(200).json({result : data ,msg : "all state"})
        }
    ).catch((err)=>{
        return res.status(400).json({error : err , msg : "data not found"})
    })
}


getStateDetailsById = (req , res )=>{
     let stateId = req.params.id;
    console.log("params",stateId)
     stateModel.findById(stateId , ( err,data)=>{
        if(err){
            console.log("err",err)      
            return res.status(400).json({error:err, msg:"data not found"})
        }
        console.log("data",data);
        return res.status(201).json({result:data, msg:" country"})
    })
}

deleteStateById = (req ,res)=>{
    let stateId = req.params.id;

    stateModel.findOneAndDelete({_id : stateId}).then((data)=>{
        return res.status(200).json({result : data , msg : "state deleted"})
    }).catch((err)=>{
        return res.status(400).json({error : err , msg : "found an error to delete"})
    })
}

deleteStates = (req ,res)=>{
    let stateId = req.params.id;

    stateModel.findOneAndDelete({_id : stateId}).then((data)=>{
        return res.status(200).json({result : data , msg : "state deleted"})
    }).catch((err)=>{
        return res.status(400).json({error : err , msg : "found an error to delete"})
    })
}

updateStatebyId = (req , res)=>{
    let stateId = req.params.id;

    let stateName = req.body.stateName;
    let stateCode = req.body.stateCode;

    let updatedData = {stateName:stateName,stateCode:stateCode}

    stateModel.findByIdAndUpdate(stateId,
        updatedData,(err,data)=>{
        if(err){
            return res.status(400).json({error:err,msg:"not updated"})
        }else{
            return res.status(200).json({result:data,msg:"data updated"})
        }
    })

}

stateStatus = (req,res)=>{
    let stateId = req.params.id;

    let statestatus = req.query.status;

    let updateddata = {status:statestatus}

    stateModel.findByIdAndUpdate(stateId , updateddata ,(err,data)=>{
        if(err){
            return res.status(400).json({error:err,msg:"state not updated"})
        }else{
            return res.status(200).json({result:data,msg:"data updated"})
        }
    
    })
}
 
module.exports = { addState,getAllStateByPagination,getStateDetailsById,deleteStateById,updateStatebyId,stateStatus}