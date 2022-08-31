const express = require("express")
const router = express.Router()
const {deleteStates , addState,getAllStateByPagination,getStateDetailsById,deleteStateById,deleteStates,updateStatebyId,stateStatus} = require("../controller/state-controller")

router.post("/add-state",addState)

router.get("/get-AllState",getAllStateByPagination)

router.get("/get-state-ById/:id",getStateDetailsById)

router.delete("/delete-state-ById/:id",deleteStateById)

//delete multiple states
router.delete("/delete-states",deleteStates)


router.patch("/update-state-byId/:id",updateStatebyId)

router.patch("/state-status/:id",stateStatus)


router.get("/", (req, res) => {
    res.status(200).send("state api working");
  });
module.exports = router