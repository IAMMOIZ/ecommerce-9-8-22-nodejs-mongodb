const cityModel = require("../model/city-model")

let addCity =(req,res)=>{
    let cityName = req.query.cityName;
    
    let document = new cityModel({cityName:cityName})

    document.save().then((data)=>{
        return res.status(200).jasn({result:data,msg:"city add "})}
    ).catch((err)=>{
        return res.status(401).json({error:err,msg:"found error"})
    })
}

let getallCity = (req,res)=>{
     
    cityModel.find().then((data)=>{
        return res.status(200).json({result:data,msg:"All city"})
    }).catch((err)=>{
        return res.status(401).json({error:err,msg:"found an error"})
    })
}

let searchcitybyname = (req,res)=>{
    let cityName = req.query.cityName

    cityModel.find({cityName:cityName}).then((data)=>{
        return res.status(200).json({result:data,msg:"city found"})
    }).catch((err)=>{
        return res.status(401).json({error:err,msg:"city not found"})
    })
}

let updateCitybyid = (red,res)=>{
    let id = req.params.id;

    let cityName = req.body.cityName;

    let updatedcity = {cityName:cityName}

    cityModel.findByIdAndUpdate(id,updatedcity).then((data)=>{
        return res.status(200).json({result:data,msg:"city updated"})
    }).catch((err)=>{
        return res.status(400).json({error:err,msg:"found an error to update"})
    })
}

let deletecitybyid = (req,res)=>{
    let id = req.params.id

    cityModel.findByIdAndDelete(id).then(
    (data)=>{
        return res.status(200).json({result:data,msg:"city deleted "})
    }
    ).catch((err)=>{
        return res.status(400).json({error:err,msg:"found an error to delete city"})    })
}

module.exports = {addCity,searchcitybyname,getallCity,updateCitybyid,deletecitybyid}