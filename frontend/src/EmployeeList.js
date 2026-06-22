import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://musical-bassoon-7qq965g6pvx2wqg9-5000.app.github.dev";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/employees`
      );

      setEmployees(response.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async () => {

    if (!name || !department) {
      alert("Please enter Name and Department");
      return;
    }

    try {

      await axios.post(
        `${API_URL}/employees`,
        {
          id: Date.now(),
          name,
          department
        }
      );

      fetchEmployees();

      setName("");
      setDepartment("");

    } catch (error) {
      console.error("Add Error:", error);
    }
  };

  const deleteEmployee = async (id) => {

    try {

      await axios.delete(
        `${API_URL}/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Management System</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button
        onClick={addEmployee}
        style={{ marginLeft: "10px" }}
      >
        Add Employee
      </button>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>

              <td>
                <button
                  onClick={() =>
                    deleteEmployee(emp.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;