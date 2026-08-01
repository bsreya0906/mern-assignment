import { useState, useEffect } from "react";

function EmployeeForm({ addEmployee, editing, updateEmployee }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (editing) {
      setForm({
        id: editing.id,
        name: editing.name,
        email: editing.email,
        department: editing.department,
        salary: editing.salary,
      });
    } else {
      setForm({
        name: "",
        email: "",
        department: "",
        salary: "",
      });
    }
  }, [editing]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      updateEmployee(form);
    } else {
      addEmployee(form);
    }

    setForm({
      name: "",
      email: "",
      department: "",
      salary: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 mb-8"
    >
      <div className="grid md:grid-cols-4 gap-4">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-3 rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-3 rounded"
        />

        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Department"
          className="border p-3 rounded"
        />

        <input
          name="salary"
          type="number"
          value={form.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="border p-3 rounded"
        />

      </div>

      <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded">
        {editing ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;