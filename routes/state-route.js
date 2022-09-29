const express = require("express");
const router = express.Router();

const  { addState,getAllStateByPagination,getStateDetailsById,deleteStateById,updateStatebyId,stateStatus}
= require('../controller/state-controller')

router.post("/register-state", addState);

router.get("/get-state-list",getAllStateByPagination)

router.get("/get-state-byId/:id",getStateDetailsById)

router.delete("/delete-state-byId/:id",deleteStateById)

router.patch("/update-state-byId/:id",updateStatebyId)

router.patch("/state-status/:id",stateStatus)
module.exports = router