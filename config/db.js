const mongoose = require("mongoose");


//mongodb compass connection
const connectDB = async () => {
  try {
    // const uri = process.env.MONGO_URI || "mongodb://localhost/ecommerce";
    const uri = "mongodb://localhost/ecommerce";

    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;