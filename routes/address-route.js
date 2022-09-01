const express = require("express");
const router = express.Router();
const { addNewAddress } = require("../controller/address-controller");

/** 
 * @swagger
* /add-address:
*   post:
*     summary: Add address.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*     responses: 
*       '201':
*         description: Created
*/
router.post("/add-address", addNewAddress);
/**
  * @swagger
  * /address:
  *   post:
  *     summary: message address api is working.
  *     description: Optional extended description in CommonMark or HTML
  *  requestBody:
  *     description: Optional description in *Markdown*
  *     required: true
  *     content:
  *       application/json:
  *         schema : 
  *         type : object
  *         prperties :
  *           id : string
  *     responses:
  *       '200':
  *        description: ok
*/
router.post("/", (req, res) => {
  res.status(200).json({ status : 200 , msg : "address api is working" , data : { city : "ujjain" , state : "madhya pradesh"} , arr : [ {   name : "moiz"} , { name : "swagger"} ] });
})
router.get("/", (req, res) => {
  res.status(200).send("user api working");

});

module.exports = router