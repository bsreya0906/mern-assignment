import { useEffect, useState } from "react";
import API from "./services/api";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch Employees
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await API.get("/");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      alert("Unable to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add Employee
  const addEmployee = async (employee) => {
    try {
      await API.post("/", employee);
      await fetchEmployees();
    } catch (error) {
      console.error(error);
      alert("Unable to add employee");
    }
  };

  // Update Employee
  const updateEmployee = async (employee) => {
  try {
    console.log(employee);

    await API.put(`/${employee.id}`, {
      name: employee.name,
      email: employee.email,
      department: employee.department,
      salary: employee.salary,
    });

    setEditing(null);

    await fetchEmployees();

  } catch (err) {
    console.log(err.response?.data || err.message);
    alert("Unable to update employee");
  }
};

  // Delete Employee
  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);
      await fetchEmployees();
    } catch (error) {
      console.error(error);
      alert("Unable to delete employee");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Employee Management System
        </h1>

        <EmployeeForm
          addEmployee={addEmployee}
          editing={editing}
          updateEmployee={updateEmployee}
        />

        {loading ? (
          <div className="text-center mt-10 text-xl font-semibold">
            Loading Employees...
          </div>
        ) : (
          <EmployeeList
            employees={employees}
            onDelete={deleteEmployee}
            onEdit={setEditing}
          />
        )}
      </div>
    </div>
  );
}

export default App;