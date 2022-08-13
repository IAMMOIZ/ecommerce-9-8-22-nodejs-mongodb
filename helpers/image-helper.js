const fs = require("fs")
const multer = require("multer")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
const upload = multer({ storage: storage,
    limits:{
      fileSize : 1024 * 1024 * 5
    }
    })

const uploadImage = (req,res,next)=>{
        console.log(req);
        var img = fs.readFileSync(req.file.path);
        var encode_img = img.toString('base64');
        var final_img = {
            contentType:req.file.mimetype,
            image:new Buffer(encode_img,'base64')
        };
        image.create(final_img,function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result.img.Buffer);
                console.log("Saved To database");
                // res.contentType(final_img.contentType);
                // res.send(final_img.image);
                next()
            }
        })
    }
module.exports = { IMAGEHelper : upload , uploadImage }