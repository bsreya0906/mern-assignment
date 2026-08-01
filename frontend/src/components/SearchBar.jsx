import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {

  return (

    <div className="relative">

      <FaSearch className="absolute left-4 top-4 text-gray-400"/>

      <input

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        placeholder="Search Employee..."

        className="w-full border rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500"

      />

    </div>

  );

}

export default SearchBar;