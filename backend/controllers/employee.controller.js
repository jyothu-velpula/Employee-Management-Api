// const express = require('express')
// const Employee = require("../models/employee.model");



// exports.CreateEmployee = async(req,res,next) => {
//     try{
//         const { name, department } = req.body
//     const create = await Employee.create({
//         name,
//         department
//     })

//     res.status(201).json({
//         error : false,
//         message : "Created Successfully.",
//         result : create
//     })
//     } catch(error){
//         console.log(error)
//         next(error)
//     }
// }

const Employee = require("../models/employee.model");

exports.CreateEmployee = async (req, res, next) => {
  try {

    const { name, department } = req.body;

    const create = await Employee.create({
      name,
      department
    });

    return res.status(201).json({
      error: false,
      message: "Created Successfully",
      result: create
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
};