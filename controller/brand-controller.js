const brandModel = require("../model/brand-model");
const { CommonStatus } = require("../enum/enum");
 
//add new brand
const addNewBrand = (req, res) => {
  try {
    let { catId, subCatId, brandName, brandNumber } = req.body;
    let brandObj = new brandModel({
      parentCategory :catId,
      parentSubCategory :subCatId,
      brandName,
      brandNumber,
      status: CommonStatus.WAIT_FOR_APPROVAL,
    });
    brandObj.save((err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category added data", data);
        return res.status(201).json({ msg: "BRAND ADDED", data: data });
      }
    }); 
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

//get all brand list with paggination
const getAllBrand = (req, res) => {
  try {
    let page = req.query.pageNo - 1;
    let limit = req.query.limit;
    let skip = page * limit;
    brandModel
      .find()
      .populate(["parentCategory", "parentSubCategory"]) //very important populate() pass in array whweras condition  join two collections
      .limit(limit)
      .skip(skip)
      .exec((err, data) => {
        if (err) {
          return res.status(500).json({ msg: "FAILED", error: err });
        }
        res
          .status(200)
          .json({ msg: "SUCCESS", total: data.length, data: data });
      });
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};


const removeBrandById = (req, res) => {
  try {
    let braId = req.params.id;
    brandModel.findByIdAndRemove(braId, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("Brand Removed by id", data);
        if (data == null) {
          return res.status(202).send({ msg: "Data Not Exists" })
        }
        return res.status(200).json({ msg: "Brand REMOVED SUCCESSFULLY", data: data });

      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

const updateBrand = (req, res) => {
  try {
    let brandId = req.params.id;
    let { brandName, brandNumber } = req.body;
    brandModel.findByIdAndUpdate(brandId, { brandName, brandNumber }, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err })
      } else {
        return res.status(200).json({ msg: "BRAND UPDATE", data: data })
      }
    })

  } catch (err) {
    console.log("error from catch block", err)
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err })
  }
}

const getBrandById = (req , res )=>{
    try{
        let id = req.params.id;
        brandModel.findById( id ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("brands details get by  id ",data);
                return res.status(200).json({ msg : "brands details get by  id" ,data : data })                    
            }
        })

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const changeBrandStatus = (req , res )=>{
    try{
        let id= req.params.id;
        let status = req.query.status
        brandModel.findByIdAndUpdate( id , {status : status } ,(err ,data)=>{
            if(err)
            {
                console.log("BRAND ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("BRAND STATUS UPDATE by id",data);
                return res.status(200).json({ msg : "BRAND STATUS UPDATED" ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}

const brandCountByCatId =(req , res )=>{
    try{
        let {  catId } = req.params;

        brandModel.find( catId ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category STATUS UPDATE by id",data);
                return res.status(200).json({ msg : "ALL BRAND FROM CATEGORY " ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}

module.exports = { addNewBrand  , removeBrandById , updateBrand  , getBrandById , changeBrandStatus ,brandCountByCatId , getAllBrand}