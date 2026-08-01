function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-200">

          <tr>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Email</th>

            <th className="p-4 text-left">Department</th>

            <th className="p-4 text-left">Salary</th>

            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr
              key={emp.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">{emp.name}</td>

              <td className="p-4">{emp.email}</td>

              <td className="p-4">{emp.department}</td>

              <td className="p-4">₹ {emp.salary}</td>

              <td className="p-4 text-center">

                <button
                  onClick={() => onEdit(emp)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(emp.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

          {employees.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="text-center p-8 text-gray-500"
              >
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