const express = require('express');
const router = express.Router();
const {CreateEmployee,GetEmployee,DeleteEmployee} = require('../controllers/employee.controller')

router.post('/employees',CreateEmployee)
router.get('/All/employees',GetEmployee)
router.post('/Delete/employees/:id',DeleteEmployee)


module.exports = router;