const UserModel = require("../model/user.model")
const { Role } = require("../enum/enum")
const jwt = require("jsonwebtoken")
//refresh token
const refreshToken = (req , res , next)=>{
next()
}
//verify token
const verifyToken = (req , res , next)=>{
    try{
    const token = req.headers.token
    console.log("varify token ", token)
    console.log("key for jwt is ",process.env.jwtKeys)
    jwt.verify(token, );
    next()
    }catch(err){
        console.log("catch from varify token" , err)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });        
    }
}
//genrate token
const generateNewToken = (req , res , next)=>{
    try{
        let encData = { email: req.email  , role : req.role }
    let token = jwt.sign(
        encData,
        process.env.jwtKeys,
        { expiresIn: '7d' }
      )
      console.log("token is ", token);
      console.log("encoded data is ", encData);
    req.token = token
    next()
    }catch(err)
    {
        console.log("catch from generate token" , err)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
    }
}
//expire token
const expireToken = (req , res , next)=>{
    try{
        const token = req.headers.token
        console.log("expire token ", token)
        console.log("key for jwt is ",process.env.jwtKeys)    
        jwt.destroy(token)
        next()
    }catch(err)
    {
        console.log("catch from generate token" , err)
        return res.status(500).json({ msg: "SOMETHING WENT WRONG", error: error });
    }

}

//verify admin role
const verifyAdmin = (req , res , next)=>{
    let userId = req.userID;
    UserModel.findById( userId , (err , data )=>{
        if(err)
        {
            console.log("error with id query")
            return res.status(400).json({ msg : "USER NOT FOUND WITH ID" , err : err  })
        }
        if(data[0].role === Role.ADMIN )
        {
            console.log("user role verified will go next"  )
            next()
        }else{
            //403 for fobidden like donot have right to access
            console.log("user donot have proper role of " , data)
            return res.status(403).json({ msg : "USER NOT HAVE VALID ROLE" ,   })
        }
    } ) 


}

//verify user role
const varifyUser = (req , res , next)=>{
    let userId = req.userID;
    UserModel.findById( userId , (err , data )=>{
        if(err)
        {
            console.log("error with id query")
            return res.status(400).json({ msg : "USER NOT FOUND WITH ID" , err : err  })
        }
        if(data[0].role === Role.USER )
        {
            console.log("user role verified will go next"  )
            next()
        }else{
            //403 for fobidden like donot have right to access
            console.log("user donot have proper role of " , data)
            return res.status(403).json({ msg : "USER NOT HAVE VALID ROLE" ,   })
        }
    } ) 


}

//verify saller role
const varifySaller = (req , res , next)=>{
    let userId = req.userID;
    UserModel.findById( userId , (err , data )=>{
        if(err)
        {
            console.log("error with id query")
            return res.status(400).json({ msg : "USER NOT FOUND WITH ID" , err : err  })
        }
        if(data[0].role === Role.SALLER)
        {
            console.log("user role verified will go next"  )
            next()
        }else{
            //403 for fobidden like donot have right to access
            console.log("user donot have proper role of " , data)
            return res.status(403).json({ msg : "USER NOT HAVE VALID ROLE" ,   })
        }
    } ) 


}

//verify Super Admin role
const VarifySuperAdmin = (req , res , next)=>{
    let userId = req.userID;
    UserModel.findById( userId , (err , data )=>{
        if(err)
        {
            console.log("error with id query")
            return res.status(400).json({ msg : "USER NOT FOUND WITH ID" , err : err  })
        }
        if(data[0].role === Role.SUPERADMIN )
        {
            console.log("user role verified will go next"  )
            next()
        }else{
            //403 for fobidden like donot have right to access
            console.log("user donot have proper role of " , data)
            return res.status(403).json({ msg : "USER NOT HAVE VALID ROLE" ,   })
        }
    } ) 


}

module.exports = { refreshToken , verifyToken ,  generateNewToken , expireToken , verifyAdmin , varifyUser , varifySaller , VarifySuperAdmin}