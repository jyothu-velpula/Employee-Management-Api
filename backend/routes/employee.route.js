const express = require('express');
const router = express.Router();
const {CreateEmployee} = require('../controllers/employee.controller')

router.post('/employees',CreateEmployee)

module.exports = router;