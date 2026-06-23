const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

require("./models/employee.model");

const employeeData = require("./routes/employee.route");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  next();
});

app.use("/", employeeData);

sequelize.sync()
  .then(() => {
    console.log("Database Synced");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Started");
    });
  })
  .catch(err => {
    console.log(err);
  });