
const { CommonStatus } = require("../enum/enum");
const brandModel = require("../model/brand.model.js");

const addNewBrand = (req, res) => {
    try {
        let { catId, subCatId, brandName, brandNumber } = req.body;
        let brandObj = new brandModel({ catId, subCatId, brandName, brandNumber, status: CommonStatus.WAIT_FOR_APPROVAL })
        brandObj.save((err, data) => {
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


const getAllBrandbyPagination = (req, res) => {
    try {
        let page = req.query.pageNo - 1;
        let limit = req.query.limit;
        let skip = page * limit;
        brandModel.find()
            .populate(['catId', 'subCatId'])  //very important populate() pass in array whweras condition  join two collections
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


//-------------------------------------------sohail


// const removeBrandById = (req, res) => {
//     try {
//         let { catId } = req.params;
//         categoryModel.findByIdAndRemove(catId, (err, data) => {
//             if (err) {
//                 console.log("category ERROR", err);
//                 return res.status(400).json({ msg: "BED REQUEST", error: err })
//             } else {
//                 console.log("category removed by id", data);
//                 return res.status(200).json({ msg: "CATEGORY REMOVED", data: data })
//             }
//         })
//     } catch (err) {
//         console.log("error from catch block", error)
//         return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
//     }
// }


// const updateBrand = (req, res) => {
//     try {
//         let { catId } = req.params;
//         let { catName, catNumber } = req.body;
//         categoryModel.findByIdAndUpdate(catId, { catName, catNumber }, (err, data) => {
//             if (err) {
//                 console.log("category ERROR", err);
//                 return res.status(400).json({ msg: "BED REQUEST", error: err })
//             } else {
//                 console.log("category removed by id", data);
//                 return res.status(200).json({ msg: "CATEGORY REMOVED", data: data })
//             }
//         })

//     } catch (err) {
//         console.log("error from catch block", error)
//         return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
//     }
// }


// const getAllBrand = (req, res) => {
//     try {
//         page = req.params.page || 0;
//         limit = req.params.limit || 10;
//         CategoryModel.find()
//             .skip(page * limit)
//             // .limit(pageOptions.limit)
//             .exec(function (err, data) {
//                 if (err) {
//                     return res.status(500).json({ msg: "FAILED", error: err });
//                 };
//                 res.status(200).json({ msg: "SUCCESS", data: data });
//             });
//     } catch (err) {
//         console.log("error from catch block", err)
//         return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: err })
//     }
// }


// const getBrandById = (req, res) => {
//     try {
//         let { catId } = req.params;
//         categoryModel.findById(catId, (err, data) => {
//             if (err) {
//                 console.log("category ERROR", err);
//                 return res.status(400).json({ msg: "BED REQUEST", error: err })
//             } else {
//                 console.log("category removed by id", data);
//                 return res.status(200).json({ msg: "CATEGORY REMOVED", data: data })
//             }
//         })

//     } catch (err) {
//         console.log("error from catch block", error)
//         return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
//     }
// }


// const changeBrandStatus = (req, res) => {
//     try {
//         let { catId, status } = req.params;
//         categoryModel.findByIdAndUpdate(catId, { status }, (err, data) => {
//             if (err) {
//                 console.log("category ERROR", err);
//                 return res.status(400).json({ msg: "BED REQUEST", error: err })
//             } else {
//                 console.log("category STATUS UPDATE by id", data);
//                 return res.status(200).json({ msg: "CATEGORY STATUS UPDATED", data: data })
//             }
//         })
//     } catch (err) {
//         console.log("error from catch block", error)
//         return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
//     }
// }

// const brandCount = (req, res) => {
//     try {
//         let { catId, status } = req.params;
//         categoryModel.findByIdAndUpdate(catId, { status }, (err, data) => {
//             if (err) {
//                 console.log("category ERROR", err);
//                 return res.status(400).json({ msg: "BED REQUEST", error: err })
//             } else {
//                 console.log("category STATUS UPDATE by id", data);
//                 return res.status(200).json({ msg: "CATEGORY STATUS UPDATED", data: data })
//             }
//         })
//     } catch (err) {
//         console.log("error from catch block", error)
//         return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error })
//     }
// }

module.exports = {
    addNewBrand, getAllBrandbyPagination,
    // removeBrandById, updateBrand, getAllBrand, getBrandById, changeBrandStatus, brandCount 
}