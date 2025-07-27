import { IoLanguageOutline } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  // You can add state for dark mode here
  const isDarkMode = true; // Example - replace with your state logic

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {/* Main Navigation Links */}
      <div className="flex space-x-6 border-r border-[#334155] pr-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workers">Workers</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* Utility Icons */}
      <div className="flex items-center space-x-5 pl-2">
        <button 
          className="text-gray-300 hover:text-[#F97316] transition-transform hover:scale-110"
          aria-label="Change language"
        >
          <IoLanguageOutline className="w-5 h-5" />
        </button>
        
        <button 
          className="text-gray-300 hover:text-[#F97316] transition-transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <MdLightMode className="w-5 h-5" />
          ) : (
            <MdDarkMode className="w-5 h-5" />
          )}
        </button>
        
        <a 
          href="https://github.com/your-repo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#F97316] transition-transform hover:scale-110"
          aria-label="GitHub repository"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        
        <Link 
          to="/login"
          className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md font-medium transition hover:shadow-md hover:shadow-[#F97316]/30"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

// Reusable NavLink component for consistent styling
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative text-gray-300 hover:text-white font-medium transition group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default Nav;




// import { IoLanguageOutline } from "react-icons/io5";
// import { MdLightMode } from "react-icons/md";
// import { FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";
// function Nav() {
//   return (
//     <>
//       <nav className="hidden md:flex items-center space-x-8">
//           <Link to="/" className="text-white hover:text-[#FBBF24] font-medium transition">
//             Home
//           </Link>
//           <Link to="/workers" className="text-white hover:text-[#FBBF24] font-medium transition">
//             Workers
//           </Link>
//           <Link to="/about" className="text-white hover:text-[#FBBF24] font-medium transition">
//             About
//           </Link>
//           <Link to="/contact" className="text-white hover:text-[#FBBF24] font-medium transition">
//             Contact
//           </Link>

//         {/* Icons Container */}
//         <div className="flex items-center space-x-4 ml-4">
//           <button className="text-white cursor-pointer text-3xl hover:text-[#FBBF24] transition">
//             <IoLanguageOutline/>
//           </button>
//           <button className="text-white cursor-pointer text-3xl hover:text-[#FBBF24] transition">
//             <MdLightMode/>
//           </button>
//           <a href="#" className="text-white text-3xl hover:text-[#FBBF24] transition">
//             <FaGithub/>
//           </a>
//           <Link to="/login" className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md font-medium transition">
//             Login
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Nav;
