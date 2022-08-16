require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const connectDB = require("./config/db");
//import routes
const userRoutes = require("./routes/user-route")
const addressRoutes = require("./routes/address-route")
const brandRoutes = require("./routes/brand-route")
const categoryRoutes = require("./routes/category-route")
const subCategoryRoutes = require("./routes/sub-category-route")
const paymentMethodRoutes = require("./routes/payment.method.route")
const productRoute = require("./routes/product-route")

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
app.use("/user" , userRoutes )
// app.use("/address" , addressRoutes )
app.use("/category" , categoryRoutes )
app.use("/subcategory" , subCategoryRoutes )
app.use("/brand" , brandRoutes )
app.use("/paymentmethod" , paymentMethodRoutes )
app.use("/product" , productRoute )


app.get("/",(req , res )=>{
    return res.status(200).send("api is up and working")
})


app.get("/", (req, res) => {
  return res.status(200).send("api is up and working");
});

const port = process.env.port || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log("error in running server : ", err);
  } else {
    console.log("server is up and running on port ", port);
  }
});
//nodemon jwt express-validator
