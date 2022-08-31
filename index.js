require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const connectDB = require("./config/db");
//import routes
const addressRoutes = require("./routes/address-route")
const brandRoutes = require("./routes/brand-route")
const cartRoutes = require("./routes/cart-route")
const categoryRoutes = require("./routes/category-route")
const cityRoutes = require("./routes/city-route")
const countryRoutes = require("./routes/country-router")
const orderRoutes = require("./routes/order-route")
const paymentMethodRoutes = require("./routes/payment.method.route")
const productRoute = require("./routes/product-route")
const reviewRoutes = require("./routes/review-route")
const stateRoutes = require("./routes/state-route")
const subCategoryRoutes = require("./routes/sub-category-route")
const userRoutes = require("./routes/user-route")

//connect database
connectDB();
//attech body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors())
//attech logger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: "REST full api for an ecommerce application",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(options);
// Routes
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(morgan("dev"))
//routes for the apis
app.use("/address" , addressRoutes )
app.use("/brand" , brandRoutes )
app.use("/cart" , cartRoutes )
app.use("/category" , categoryRoutes )
app.use("/city" , cityRoutes )
app.use("/country" , countryRoutes )
app.use("/order" , orderRoutes )
app.use("/paymentmethod" , paymentMethodRoutes )
app.use("/product" , productRoute )
app.use("/review" , reviewRoutes )
app.use("/state" , stateRoutes )
app.use("/subcategory" , subCategoryRoutes )
app.use("/user" , userRoutes )


app.get("/",(req , res )=>{
    return res.status(200).send("api is up and working")
})


app.get("/", (req, res) => {
  return res.status(200).send("api is up and working");
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log("error in running server : ", err);
  } else {
    console.log("server is up and running on port ", port);
  }
});
//nodemon jwt express-validator
