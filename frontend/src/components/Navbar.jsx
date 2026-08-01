import { FaUsersCog } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <FaUsersCog className="text-3xl text-white"/>

          <div>

            <h1 className="text-white text-2xl font-bold">
              Employee Management
            </h1>

            <p className="text-blue-100 text-sm">
              MERN Stack Assignment
            </p>

          </div>

        </div>

        <div className="bg-white px-4 py-2 rounded-full font-semibold">
          Admin
        </div>

      </div>
    </nav>
  );
}

export default Navbar;