const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/",(req , res )=>{
    return res.status(200).send("api is up and working")
})

app.listen( port , (err)=>{
    if(err)
    {
        console.log("error in running server : " , err)
    }else{
        console.log("server is up and running on port ",port)
    }
})
//nodemon jwt express-validator 