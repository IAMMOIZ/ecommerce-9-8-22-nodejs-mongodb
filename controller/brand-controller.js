const CategoryModel = require("../model/category-model");
const { CommonStatus } = require("../enum/enum");


//add new brand
const addNewBrand = (req, res) => {
  try {
    let { catName, catNumber } = req.body;
    let categoryObj = new CategoryModel({
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
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//remove brand by id
const removeBrandById = (req, res) => {
  try {
    let { catId } = req.params;
    categoryModel.findByIdAndRemove(catId, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category removed by id", data);
        return res.status(200).json({ msg: "CATEGORY REMOVED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//update brand
const updateBrand = (req, res) => {
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

//get all brand
const getAllBrand = (req, res) => {
  try {
    page = req.params.page || 0;
    limit = req.params.limit || 10;
    CategoryModel.find()
      .skip(page * limit)
      .limit(pageOptions.limit)
      .exec(function (err, data) {
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

//get brand by id
const getBrandById = (req, res) => {
  try {
    let { catId } = req.params;
    categoryModel.findById(catId, (err, data) => {
      if (err) {
        console.log("category ERROR", err);
        return res.status(400).json({ msg: "BED REQUEST", error: err });
      } else {
        console.log("category removed by id", data);
        return res.status(200).json({ msg: "CATEGORY REMOVED", data: data });
      }
    });
  } catch (err) {
    console.log("error from catch block", error);
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

//change  brand status
const changeBrandStatus = (req, res) => {
  try {
    let { catId, status } = req.params;
    categoryModel.findByIdAndUpdate(catId, { status }, (err, data) => {
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

// get brand count with paggination
const brandCount = (req, res) => {
  try {
    let { catId, status } = req.params;
    categoryModel.findByIdAndUpdate(catId, { status }, (err, data) => {
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

//export all controller
module.exports = {
  addNewBrand,
  removeBrandById,
  updateBrand,
  getAllBrand,
  getBrandById,
  changeBrandStatus,
  brandCount,
};
