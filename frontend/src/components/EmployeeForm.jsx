import { useEffect, useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";

function EmployeeForm({ addEmployee, editing, updateEmployee }) {
  const initialState = {
    id: "",
    employeeid: "",
    name: "",
    email: "",
    department: "",
    salary: "",
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editing) {
      setForm({
        id: editing.id || "",
        employeeid: editing.employeeid || "",
        name: editing.name || "",
        email: editing.email || "",
        department: editing.department || "",
        salary: editing.salary || "",
      });
    } else {
      setForm(initialState);
    }
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "salary" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.employeeid ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.department.trim() ||
      !form.salary
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editing) {
        await updateEmployee(form);
      } else {
        await addEmployee(form);
      }

      setForm(initialState);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        {editing ? "Update Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="employeeid"
            placeholder="Employee ID"
            value={form.employeeid}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

        </div>

        <button
          type="submit"
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          {editing ? <FaSave /> : <FaPlus />}
          {editing ? "Update Employee" : "Add Employee"}
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;