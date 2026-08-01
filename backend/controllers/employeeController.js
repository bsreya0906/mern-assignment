const Employee = require("../models/Employee");

// GET ALL EMPLOYEES
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ADD EMPLOYEE
const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(employee);
  } catch (err) {
    res.status(400).json(err);
  }
};

// DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee Deleted Successfully",
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};