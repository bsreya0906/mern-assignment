import { FaEdit, FaTrash } from "react-icons/fa";

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

          <tr>
            <th className="p-4 text-left">Employee ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Salary</th>
            <th className="p-4 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr
                key={emp.id || emp.employeeid}
                className="border-b hover:bg-indigo-50 transition"
              >

                <td className="p-4 font-semibold text-indigo-600">
                  {emp.employeeid}
                </td>

                <td className="p-4 font-medium">
                  {emp.name}
                </td>

                <td className="p-4">
                  {emp.email}
                </td>

                <td className="p-4">
                  {emp.department}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  ₹ {Number(emp.salary).toLocaleString()}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit(emp)}
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onDelete(emp.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-12 text-gray-500 text-lg"
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