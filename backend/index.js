const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

let employees = [
  {
    id: 1,
    name: "Jyothi",
    department: "Development"
  }
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.post("/employees", (req, res) => {
  console.log("req",req.body)
  const {id, name, department}= req.body
  let data=[];
  data.push({id,name,department});


  res.status(201).json({
    error : false,
    message : "Created Successfully",
    data : {
      id, department,name
    }
  })
});

app.delete("/employees/:id", (req, res) => {

  employees = employees.filter(
    emp => emp.id != req.params.id
  );

  res.json({
    message: "Deleted"
  });
});

app.listen(5000, () => {
  console.log("Server Started");
});