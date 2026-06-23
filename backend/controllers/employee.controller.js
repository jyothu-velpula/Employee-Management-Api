const Employee = require("../models/employee.model");

exports.CreateEmployee = async (req, res, next) => {
  try {
    const { name, department } = req.body
    const create = await Employee.create({
      name,
      department
    })

    res.status(201).json({
      error: false,
      message: "Created Successfully.",
      result: create
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
}

exports.GetEmployee = async (req, res, next) => {
  try {
    const data = await Employee.findAll({
      where: {
        isActive: 1
      }
    })
    return res.status(201).json({
      error: false,
      message: "List Fetched Successfully",
      result: data
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
}

exports.DeleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params || req.body.query
    const deleteData = await Employee.update({
      isDeleted: 1,
      isActive: 0
    }, {
      where: {
        id
      }
    })
    return res.status(201).json({
      error: false,
      message: "Deleted Successfully",
      result: deleteData
    });

  } catch (error) {
    console.log(error)
  }
}