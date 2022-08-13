const CategoryModel = require("../model/category-model")
const { CommonStatus } = require("../enum/enum");
const categoryModel = require("../model/category-model");

const addProduct = (req , res )=>{
    try{
        let { catName , catNumber } = req.body;
        let categoryObj = new CategoryModel({ catName  , catNumber , status :  CommonStatus.WAIT_FOR_APPROVAL })
        categoryObj.save((err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category added data",data);
                return res.status(201).json({ msg : "CATEGORY ADDED" ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const getFilteredProducts = (req , res )=>{
    try{
        let {  catId } = req.params;
        categoryModel.findByIdAndRemove( catId  ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category removed by id",data);
                return res.status(200).json({ msg : "CATEGORY REMOVED" ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const updateProduct = (req , res )=>{
    try{
        let {  catId } = req.params;
        let {  catName , catNumber  } = req.body;
        categoryModel.findByIdAndUpdate( catId , { catName , catNumber } ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category removed by id",data);
                return res.status(200).json({ msg : "CATEGORY REMOVED" ,data : data })                    
            }
        })

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const removeProductById = (req , res )=>{
    try{
        page = req.params.page || 0;
        limit = req.params.limit || 10;
        CategoryModel.find()
        .skip(page * limit)
        .limit(pageOptions.limit)
        .exec(function (err, data) {
            if(err)
            {
                return res.status(500).json({ msg : "FAILED" , error : err }); 
            };
            res.status(200).json({ msg : "SUCCESS" , data : data});
        });
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const changeProductStatus = (req , res )=>{
    try{
        let {  catId } = req.params;
        categoryModel.findById( catId  ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category removed by id",data);
                return res.status(200).json({ msg : "CATEGORY REMOVED" ,data : data })                    
            }
        })

    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const productCountWithFilter = (req , res )=>{
    try{
        let {  catId , status } = req.params;
        categoryModel.findByIdAndUpdate( catId , { status } ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category STATUS UPDATE by id",data);
                return res.status(200).json({ msg : "CATEGORY STATUS UPDATED" ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}

const uploadProductImage = (req , res )=>{
    try{
        let {  catId , status } = req.params;
        categoryModel.findByIdAndUpdate( catId , { status } ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category STATUS UPDATE by id",data);
                return res.status(200).json({ msg : "CATEGORY STATUS UPDATED" ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}


const changeMultipleProductStatus = (req , res )=>{
    try{
        let {  catId , status } = req.params;
        categoryModel.findByIdAndUpdate( catId , { status } ,(err ,data)=>{
            if(err)
            {
                console.log("category ERROR",err);
                return res.status(400).json({ msg : "BED REQUEST" , error : err})
            }else{
                console.log("category STATUS UPDATE by id",data);
                return res.status(200).json({ msg : "CATEGORY STATUS UPDATED" ,data : data })                    
            }
        })
    }catch(err){
        console.log("error from catch block" , error)
        return res.status(500).json({ msg : "SOMETHING WENT WRONG" ,error : error})    
    }
}

module.exports ={ addProduct  , getFilteredProducts , updateProduct , removeProductById , changeProductStatus , productCountWithFilter , uploadProductImage ,changeMultipleProductStatus }