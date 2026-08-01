import { FaUsers } from "react-icons/fa";

function DashboardCard({ total }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">

      <div className="flex justify-between">

        <div>

          <p className="text-lg">
            Total Employees
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {total}
          </h1>

        </div>

        <FaUsers className="text-6xl opacity-30"/>

      </div>

    </div>
  );
}

export default DashboardCard;