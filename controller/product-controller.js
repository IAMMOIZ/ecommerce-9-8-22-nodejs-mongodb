//note completed controller logic is from category controller 

const { CommonStatus } = require("../enum/enum");
const brandModel = require("../model/brand-model");

const productModel = require ('../model/product-model')
 

const addProduct = (req, res) => {
  try {
    let { productName, productDescription, productPrice ,  productCode, productQty , sallerId , categoryId , subCategoryId , brandId , avilablityStatus } = req.body;
    let productObj = new productModel({
      productName,
      productDescription,
      productPrice : {
        basePrice: productPrice.basePrice,
        salePrice: productPrice.salePrice,
        costPrice: productPrice.costPrice,
      },
      productCode,
      productQty : {
        availableQty: productQty.availableQty,
        totalQty:  productQty.totalQty,
      },
      sallerId,
      categoryId,
      subCategoryId,
      brandId,
      avilablityStatus,
      status: CommonStatus.WAIT_FOR_APPROVAL,
    });

    productObj.save((err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category added data", data);
        return res.status(201).json({ msg: "PRODUCT ADDED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const getAllProducts = (req, res) => {
  try {
    
    let page = req.query.pageNo - 1;
    let limit = req.query.limit;
    let skip = page * limit;
   productModel
      .find()
      .limit(limit)
      .skip(skip)
      .exec((err, data) => {
        if (err) {
          return res.status(500).json({ msg: "FAILED", error: err });
        }
        res
          .status(200)
          .json({ msg: "total product ", total: data.length, data: data });
      });
  
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const getProductById = (req, res) => {
  try {
    let productId = req.params.id;

    productModel.findById(productId, (err, data) => {
      if (err) {
        console.log("product  ERROR", err);
        return res.status(400).json({ msg: "Data Not Found", error: err });
      } else {
        // if (catId != catId) {
        //   return res.status(202).send({ msg: "Data Not Exists" })
        // }
        console.log("product by id", data);
        return res.status(200).json({ msg: "product  SHOW", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

const updateProduct = (req, res) => {
  try {
    let { catId } = req.params;
    let { catName, catNumber } = req.body;
    categoryModel.findByIdAndUpdate(
      catId,
      { catName, catNumber },
      (err, data) => {
        if (err) {
          console.log("category ERROR", err);
          return res.status(400).json({ msg: "BED REQUEST", error: err });
        } else {
          console.log("category removed by id", data);
          return res.status(200).json({ msg: "CATEGORY REMOVED", data: data });
        }
      }
    );
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const removeProductById = (req, res) => {
  try {
    let id = req.params.id
    productModel
      .findByIdAndDelete(id ,(err, data)=> {
        if (err) {
          return res.status(500).json({ msg: "FAILED", error: err });
        }
        res.status(200).json({ msg: "SUCCESS", data: data });
      });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const changeProductStatus = (req, res) => {
  try {
    let productId = req.params.id;
    let status = req.query.status
    productModel.findByIdAndUpdate(productId, status , (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        
        return res.status(200).json({ msg: "product status changed", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const productCountWithFilter = (req, res) => {
  try {
    let productId = req.params.id;
    let status = req.query.status
    brandModel.findByIdAndUpdate(productId, status , (err, data) => {
      if (err) {
      
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category STATUS UPDATE by id", data);
        return res
          .status(200)
          .json({ msg: "CATEGORY STATUS UPDATED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const uploadProductImage = (req, res) => {
  try {
    let productId = req.params.id;
    let status = req.query.status
    brandModel.findByIdAndUpdate(productId, status, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("product image UPDATE by id", data);
        return res
          .status(200)
          .json({ msg: "product image UPDATED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const changeMultipleProductStatus = (req, res) => {
  try {
    let productId = req.params.id;
    let status = req.query.status
    brandModel.findByIdAndUpdate(productId, { status }, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("product STATUS UPDATE by id", data);
        return res
          .status(200)
          .json({ msg: "product STATUS UPDATED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  removeProductById,
  changeProductStatus,
  productCountWithFilter,
  uploadProductImage,
  changeMultipleProductStatus,
};
