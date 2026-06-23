// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type"]
// }));

// app.use(express.json());

// let employees = [
//   {
//     id: 1,
//     name: "Jyothi",
//     department: "Development"
//   }
// ];

// app.get("/employees", (req, res) => {
//   res.json(employees);
// });

// app.post("/employees", (req, res) => {
//   console.log("req",req.body)
//   const {id, name, department}= req.body
//   let data=[];
//   data.push({id,name,department});


//   res.status(201).json({
//     error : false,
//     message : "Created Successfully",
//     data : {
//       id, department,name
//     }
//   })
// });

// app.delete("/employees/:id", (req, res) => {

//   employees = employees.filter(
//     emp => emp.id != req.params.id
//   );

//   res.json({
//     message: "Deleted"
//   });
// });
// let port = 5000
// app.listen(port, () => {
//   console.log(`Server Started on port${port}`);
// });

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const Employee = require('./models/employee.model')
const employeeData = require('./routes/employee.route')


const app = express();

app.use(cors());
app.use(express.json());
app.use("/",employeeData)

// app.get("/employees", async(req, res) => {

//   // db.all(
//   //   "SELECT * FROM employees",
//   //   [],
//   //   (err, rows) => {

//   //     if (err) {
//   //       return res.status(500).json(err);
//   //     }

//   //     res.json(rows);
//   //   }
//   // );
//     const data = await db.employess.findAll()

//     return res.status(201).json({
//       error : false,
//       message : "List fetched Successfully.",
//       result : data
//     })
// });

// app.get("/employees", async (req, res) => {

//     const data = await db.employees.findAll();

//     res.json(data);

// });

// app.post("/employees", (req, res) => {

//   const { name, department } = req.body;

//   db.run(
//     "INSERT INTO employees(name, department) VALUES (?, ?)",
//     [name, department],
//     function(err) {

//       if (err) {
//         return res.status(500).json(err);
//       }

//       res.json({
//         message: "Employee Added",
//         id: this.lastID
//       });
//     }
//   );
// });

// app.delete("/employees/:id", (req, res) => {

//   db.run(
//     "DELETE FROM employees WHERE id=?",
//     [req.params.id],
//     function(err) {

//       if (err) {
//         return res.status(500).json(err);
//       }

//       res.json({
//         message: "Deleted"
//       });
//     }
//   );
// });

// app.listen(5000, () => {
//   console.log("Server Started");
// });


sequelize.sync({ force: true })
  .then(() => {

    console.log("Database Synced");

    app.listen(5000, () => {
      console.log("Server Started");
    });

  })
  .catch(err => {
    console.log(err);
  });