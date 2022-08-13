const CategoryModel = require("../model/category.model")
const { CommonStatus } = require("../enum/enum");
const subCategoryModel = require("../model/sub-category.model.js");

const addNewSubCategory = (req, res) => {
    try {
        let { catId, subCatName, subCatNumber } = req.body;
        let subCategoryObj = new subCategoryModel({ catId, subCatName, subCatNumber, status: CommonStatus.WAIT_FOR_APPROVAL })
        subCategoryObj.save((err, data) => {
            if (err) {
                console.log("category ERROR", err);
                return res.status(400).json({ msg: "BED REQUEST", error: err })
            } else {
                console.log("category added data", data);
                return res.status(201).json({ msg: "CATEGORY ADDED", data: data })
            }
        })
    } catch (err) {
        console.log("error from catch block", err)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err })
    }
}



const getAllsubCategory = (req, res) => {
    try {
        let page = req.query.pageNo - 1;
        let limit = req.query.limit;
        let skip = page * limit;
        subCategoryModel.find()
        .populate('catId')
            .limit(limit)
            .skip(skip)
            .exec((err, data) => {
                if (err) {
                    return res.status(500).json({ msg: "FAILED", error: err });
                };
                res.status(200).json({ msg: "SUCCESS", total: data.length, data: data });
            });
    } catch (err) {
        console.log("error from catch block", err)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err })
    }
}

//------------------------------------------sohail

const removeSubCategoryById = (req, res) => {
    try {
        let { catId } = req.params;
        subCategoryModel.findByIdAndRemove(catId, (err, data) => {
            if (err) {
                console.log("category ERROR", err);
                return res.status(400).json({ msg: "BED REQUEST", error: err })
            } else {
                console.log("category removed by id", data);
                return res.status(200).json({ msg: "CATEGORY REMOVED", data: data })
            }
        })
    } catch (err) {
        console.log("error from catch block", error)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
    }
}


const updateSubCategory = (req, res) => {
    try {
        let { catId } = req.params;
        let { catName, catNumber } = req.body;
        subCategoryModel.findByIdAndUpdate(catId, { catName, catNumber }, (err, data) => {
            if (err) {
                console.log("category ERROR", err);
                return res.status(400).json({ msg: "BED REQUEST", error: err })
            } else {
                console.log("category removed by id", data);
                return res.status(200).json({ msg: "CATEGORY REMOVED", data: data })
            }
        })

    } catch (err) {
        console.log("error from catch block", error)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
    }
}




const getSubCategoryById = (req, res) => {
    try {
        let { catId } = req.params;
        categoryModel.findById(catId, (err, data) => {
            if (err) {
                console.log("category ERROR", err);
                return res.status(400).json({ msg: "BED REQUEST", error: err })
            } else {
                console.log("category removed by id", data);
                return res.status(200).json({ msg: "CATEGORY REMOVED", data: data })
            }
        })

    } catch (err) {
        console.log("error from catch block", error)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
    }
}


const changeSubCategoryStatus = (req, res) => {
    try {
        let { catId, status } = req.params;
        categoryModel.findByIdAndUpdate(catId, { status }, (err, data) => {
            if (err) {
                console.log("category ERROR", err);
                return res.status(400).json({ msg: "BED REQUEST", error: err })
            } else {
                console.log("category STATUS UPDATE by id", data);
                return res.status(200).json({ msg: "CATEGORY STATUS UPDATED", data: data })
            }
        })
    } catch (err) {
        console.log("error from catch block", error)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
    }
}


const SubCategoryCount = (req, res) => {
    try {
        let { catId, status } = req.params;
        categoryModel.findByIdAndUpdate(catId, { status }, (err, data) => {
            if (err) {
                console.log("category ERROR", err);
                return res.status(400).json({ msg: "BED REQUEST", error: err })
            } else {
                console.log("category STATUS UPDATE by id", data);
                return res.status(200).json({ msg: "CATEGORY STATUS UPDATED", data: data })
            }
        })
    } catch (err) {
        console.log("error from catch block", error)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
    }
}



module.exports = { addNewSubCategory, getAllsubCategory, removeSubCategoryById, updateSubCategory, getSubCategoryById, changeSubCategoryStatus, SubCategoryCount }