const express = require("express")
const router = express.Router()
const {
    addNewReviewForSaller,
    addNewReviewForProduct,
    likeReview,
    updateExistingReview,
    replyOfReview,
    deleteReview,
    deleteManyReviews
} = require("../controller/review-controller")

router.post("/add-product-review",addNewReviewForProduct)
router.post("/add-saller-review",addNewReviewForSaller)
//islike will be true or false
router.get("/like-review/:reviewId/:userId/:isLiked",likeReview)

router.patch("/update-review/:reviewId",updateExistingReview)

router.delete("/delete-review/:id",deleteReview)

//delete multiple states
router.post("/delete-multiple-reviews",deleteManyReviews)

// router.patch("/state-status/:id",stateStatus)


router.get("/", (req, res) => {
    res.status(200).send("review api working");
  });
module.exports = router