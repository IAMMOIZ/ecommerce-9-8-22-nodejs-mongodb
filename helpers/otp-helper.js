const nodemailer = require("nodemailer");
require("dotenv").config();
const userModel = require("../model/user-model");

//send otp middelware
const otpSend = async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await userModel.findOne({ email });
  

  if (emailExist) {
    const otp1 = Math.floor(1000 + Math.random() * 9000);
    console.log(otp1);

    //update otp query
    await userModel.updateOne({ _id: emailExist._id }, { $set: { otp: otp1 } });

    const smtp_host = process.env.SMTP_HOST;
    const sendinblue_port = process.env.SENDINBLUE_PORT;
    const user_mail = process.env.SENDINBLUE_MAIL;
    const user_pass = process.env.SENDINBLUE_PASS;
    //otp send by mail
    const transporter = nodemailer.createTransport({
      host: smtp_host,
      port: sendinblue_port,
      secure: false,
      auth: {
        user: user_mail,
        pass: user_pass,
      },
    });

    //otp body
    const message = {
      from: "MERN@digizest.com",
      to: `${email}`,
      subject: "otp for varification ",
      text: `Hello This is your account verification otp ${otp1}`,
    };

    //call send mail function
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("info", info.response);
      }
    });
    res.status(200).json({
      msg: "Please check your mail - OTP sent",
    });
  } else {
    console.log("Email is not exist ");
  }
};

//verify otp middleware
const verifyOtp = async (req, res, next) => {
  const { email, otp } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({
      msg: "email not exist",
    });
  } else if (otp == user.otp) {
    next();
  } else {
    return res.status(404).json({
      msg: "UnAuthorized",
    });
  }
};

module.exports = { otpSend, verifyOtp };
