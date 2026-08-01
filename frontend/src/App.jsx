import { useEffect, useMemo, useState } from "react";
import API from "./services/api";

import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch Employees
  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/");

      setEmployees(data);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch employees.");
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
      await API.post("/", {
        employeeid: employee.employeeid,
        name: employee.name,
        email: employee.email,
        department: employee.department,
        salary: Number(employee.salary),
      });

      await fetchEmployees();
    } catch (error) {
      console.error(error);
      alert("Unable to add employee.");
    }
  };

  // Update Employee
  const updateEmployee = async (employee) => {
    try {
      console.log("Updating:", employee);

      await API.put(`/${employee.id}`, {
        employeeid: employee.employeeid,
        name: employee.name,
        email: employee.email,
        department: employee.department,
        salary: Number(employee.salary),
      });

      setEditing(null);

      await fetchEmployees();

      alert("Employee Updated Successfully");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Unable to update employee.");
    }
  };

  // Delete Employee
  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    try {
      await API.delete(`/${id}`);

      await fetchEmployees();

      alert("Employee Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("Unable to delete employee.");
    }
  };

  // Search
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      [
        emp.employeeid,
        emp.name,
        emp.email,
        emp.department,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [employees, search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <DashboardCard total={employees.length} />

        <div className="my-8">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <EmployeeForm
          addEmployee={addEmployee}
          editing={editing}
          updateEmployee={updateEmployee}
        />

        {loading ? (
          <Loader />
        ) : (
          <EmployeeList
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onEdit={setEditing}
          />
        )}
      </div>
    </div>
  );
}

export default App;