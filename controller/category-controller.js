const categoryModel = require("../model//category-model");

const subCategoryModel = require("../model/sub-category.model.js")
const { CommonStatus } = require("../enum/enum");

//add new category
const addNewCategory = (req, res) => {
  try {
    let { catName, catNumber } = req.body;
    let categoryObj = new categoryModel({
      catName,
      catNumber,
      status: CommonStatus.WAIT_FOR_APPROVAL,
    });
    categoryObj.save((err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category added data", data);
        return res.status(201).json({ msg: "CATEGORY ADDED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};


//get count and get category by id are same

//get all category count
const getCategoryCount = (req, res) => {
  try {
    // let catId = req.params.id;
    categoryModel.count((err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("find categories", data);
        return res.status(200).json({ msg: "SUCCESS", total_Documents: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

//get all category by pagination
const getAllCategory = (req, res) => {
  try {
    let page = req.query.pageNo - 1;
    let limit = req.query.limit;
    let skip = page * limit;
    categoryModel
      .find()
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

//remove category id
const removeCategoryById = (req, res) => {
  try {
    let catId = req.params.id;
    categoryModel.findByIdAndRemove(catId, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category removed by id", data);
        if (data == null) {
          return res.status(202).send({ msg: "Data Not Exists" })
        }
        return res.status(200).json({ msg: "CATEGORY REMOVED SUCCESSFULLY", data: data });

      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//update category
const updateCategory = (req, res) => {
  try {
    let catId = req.params.id;
    let { catName, catNumber } = req.body;
    categoryModel.findByIdAndUpdate(
      catId,
      { catName, catNumber },
      (err, data) => {
        if (err) {
          console.log("category ERROR", err);
          return res.status(400).json({ msg: "BED REQUEST", error: err });
        } else {
          console.log("Category update Successfull", data);
          return res.status(200).json({ msg: "Category update Successfully", data: data });
        }
      }
    );
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

//get category by id
const getCategoryById = (req, res) => {
  try {
    let catId = req.params.id;
    console.log(catId);
    categoryModel.findById(catId, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "Data Not Found", error: err });
      } else {
        // if (catId != catId) {
        //   return res.status(202).send({ msg: "Data Not Exists" })
        // }
        console.log("category by id", data);
        return res.status(200).json({ msg: "CATEGORY SHOW", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

//update or change category status
const changeCategoryStatus = (req, res) => {
  try {
    let catId = req.params.id;
    let { status } = req.params;
    console.log("catstatus===>", status);
    categoryModel.findByIdAndUpdate(catId,
      { status },
      (err, data) => {
        if (err) {
          console.log("category ERROR", err);
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


const getAllCountsAggregate = (req, res) => {
  try {
    // let catId = req.params.id;
    categoryModel.aggregate([{ $match: { status: "DEACTIVE" } }, { $count: "totals" }], (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("find categories", data);
        return res.status(200).json({ msg: "SUCCESS", total_Documents: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};


const mixCatSubCat = (req, res) => {
  try {
    categoryModel.aggregate([{
      $lookup:{
        from:"subcategories",
        localField:"_id",
        foreignField:"catId",
        as:"mix data"
      } 
    }, 
    
  //   {$project:{
  //     subCatName:1,
  //     subCatNumber:1
  //   }
  // }
]).exec((err, data)=>{
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "Data Not Found", error: err });
      } else {
        console.log("category by id", data);
        return res.status(200).json({ msg: "Mix CATEGORY SHOW", data: data });
      }
    })
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

//export all controller
module.exports = {
  addNewCategory,
  getCategoryCount,
  getAllCategory,
  removeCategoryById,
  updateCategory,
  getCategoryById,
  changeCategoryStatus,
  getAllCountsAggregate,
  mixCatSubCat
};

//module.exports = { addNewCategory  , removeCategoryById , updateCategory , getAllCategory , getCategoryById , changeCategoryStatus , getCategoryCount}