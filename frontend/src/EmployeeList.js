// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL =
//   "https://musical-bassoon-7qq965g6pvx2wqg9-5000.app.github.dev";

// function EmployeeList() {

//   const [employees, setEmployees] = useState([]);
//   const [name, setName] = useState("");
//   const [department, setDepartment] = useState("");

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/All/employees`
//       );

//       setEmployees(response.data);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const addEmployee = async () => {

//     if (!name || !department) {
//       alert("Please enter Name and Department");
//       return;
//     }

//     try {

//       await axios.post(
//         `${API_URL}/employees`,
//         {
//           id: Date.now(),
//           name,
//           department
//         }
//       );

//       fetchEmployees();

//       setName("");
//       setDepartment("");

//     } catch (error) {
//       console.log(error)
//       // console.error("Add Error:", error);
//     }
//   };

//   const deleteEmployee = async (id) => {

//     try {

//       await axios.delete(
//         `${API_URL}/employees/${id}`
//       );

//       fetchEmployees();

//     } catch (error) {
//       console.error("Delete Error:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Employee Management System</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Department"
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//         style={{ marginLeft: "10px" }}
//       />

//       <button
//         onClick={addEmployee}
//         style={{ marginLeft: "10px" }}
//       >
//         Add Employee
//       </button>

//       <hr />

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.name}</td>
//               <td>{emp.department}</td>

//               <td>
//                 <button
//                   onClick={() =>
//                     deleteEmployee(emp.id)
//                   }
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default EmployeeList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://musical-bassoon-7qq965g6pvx2wqg9-5000.app.github.dev";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  // Get Employees
  const fetchEmployees = async () => {
    try {

      const response = await axios.get(
        `${API_URL}/All/employees`
      );

      console.log("Employee List:", response.data);

      setEmployees(response.data.result || []);

    } catch (error) {

      console.error("Fetch Error:", error);

      setEmployees([]);

    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add Employee
  const addEmployee = async () => {

    if (!name || !department) {
      alert("Please enter Name and Department");
      return;
    }

    try {

      const response = await axios.post(
        `${API_URL}/employees`,
        {
          name,
          department
        }
      );

      console.log("Created:", response.data);

      setName("");
      setDepartment("");

      fetchEmployees();

    } catch (error) {

      console.error("Add Error:", error);

    }
  };

  // Delete Employee
  const deleteEmployee = async (id) => {

    try {

      await axios.post(
        `${API_URL}/Delete/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {

      console.error("Delete Error:", error);

    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Employee Management System</h1>

      <div style={{ marginBottom: "20px" }}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Department"
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

      </div>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.length > 0 ? (

            employees.map((emp) => (

              <tr key={emp.id}>

                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>

                <td>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="4">
                No Employees Found
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;