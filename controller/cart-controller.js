const { CommonStatus } = require("../enum/enum");
const categoryModel = require("../model/category-model");

const addProductToCart = (req, res) => {
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
    return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
  }
};

const getCartInfoByUserId = (req, res) => {
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
//used for updating qty of product , remove and add more products into cart
const updateCartByIdAndData = (req, res) => {
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

const removeCart = (req, res) => {
  try {
    page = req.params.page || 0;
    limit = req.params.limit || 10;
    categoryModel
      .find()
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
//when user done with placing order then crone job will remove this unwanted cart 
const changeCartStatus = (req, res) => {
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
//extra controller for future use
const changeMultipleProductStatus = (req, res) => {
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

module.exports = {
    addProductToCart,
    getCartInfoByUserId,
    updateCartByIdAndData,
    removeCart,
    changeCartStatus,
};