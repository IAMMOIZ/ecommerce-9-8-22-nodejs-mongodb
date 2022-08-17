const { CommonStatus } = require("../enum/enum");
const subCategoryModel = require("../model/sub-category.model.js");

const addNewSubCategory = (req, res) => {
  try {
    let { catId, subCatName, subCatNumber } = req.body;
    let subCategoryObj = new subCategoryModel({
      catId,
      subCatName,
      subCatNumber,
      status: CommonStatus.WAIT_FOR_APPROVAL,
    });
    subCategoryObj.save((err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category added data", data);
        return res.status(201).json({ msg: "CATEGORY ADDED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", err);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

const getAllsubCategory = (req, res) => {
  try {
    let page = req.query.pageNo - 1;
    let limit = req.query.limit;
    let skip = page * limit;
    subCategoryModel
      .find()
      .populate("catId")
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


//remove sub category id
const removeSubCategoryById = (req, res) => {
  try {
    let subCatId = req.params.id;
    subCategoryModel.findByIdAndRemove(subCatId, (err, data) => {
      if (err) {
        console.log("Sub category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("Sub Category Removed by id", data);
        if (data == null) {
          return res.status(202).send({ msg: "Data Not Exists" })
        }
        return res.status(200).json({ msg: "SUB CATEGORY REMOVED SUCCESSFULLY", data: data });

      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const updateSubCategory = (req, res) => {
  try {
    let subCatId = req.params.id;
    let { subCatName, subCatNumber } = req.body;
    subCategoryModel.findByIdAndUpdate(
      subCatId,
      { subCatName, subCatNumber },
      (err, data) => {
        if (err) {
          console.log("category ERROR", err);
          return res.status(400).json({ msg: "BED REQUEST", error: err });
        } else {
          console.log("sub category update by id", data);
          return res.status(200).json({ msg: "Sub Category update Successfully", data: data });
        }
      }
    );
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const getSubCategoryById = (req, res) => {
  try {
    let { id } = req.params;
    subCategoryModel.findById(id, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {

        return res.status(200).json({ msg: "SUB CATEGORY FIND SUCCESSFULLY", data: data });
      }
    }).populate("catId");
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//update or change Subcategory status
const changeSubCategoryStatus = (req, res) => {
  try {
    let subCatId = req.params.id;
    let { status } = req.query;
    subCategoryModel.findByIdAndUpdate(subCatId,
      { status },
      (err, data) => {
        if (err) {
          return res.status(400).json({ msg: "BED REQUEST", error: err });
        } else {
          return res.status(200).json({ msg: "SUB CATEGORY STATUS UPDATED", data: data });
        }
      });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//get all subcategory count
const getSubCategoryCount = (req, res) => {
  try {
    
    subCategoryModel.count((err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("find subcategories", data);
        return res.status(200).json({ msg: "SUCCESS", total_Documents: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err });
  }
};

module.exports = {
  addNewSubCategory,
  getAllsubCategory,
  removeSubCategoryById,
  updateSubCategory,
  getSubCategoryById,
  changeSubCategoryStatus,
  getSubCategoryCount,
};
