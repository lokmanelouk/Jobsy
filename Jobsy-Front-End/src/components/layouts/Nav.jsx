import { IoLanguageOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#FBBF24] font-medium transition">
            Home
          </Link>
          <Link to="/workers" className="text-white hover:text-[#FBBF24] font-medium transition">
            Workers
          </Link>
          <Link to="/about" className="text-white hover:text-[#FBBF24] font-medium transition">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-[#FBBF24] font-medium transition">
            Contact
          </Link>

        {/* Icons Container */}
        <div className="flex items-center space-x-4 ml-4">
          <button className="text-white cursor-pointer text-3xl hover:text-[#FBBF24] transition">
            <IoLanguageOutline/>
          </button>
          <button className="text-white cursor-pointer text-3xl hover:text-[#FBBF24] transition">
            <MdLightMode/>
          </button>
          <a href="#" className="text-white text-3xl hover:text-[#FBBF24] transition">
            <FaGithub/>
          </a>
          <Link to="/login" className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md font-medium transition">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
