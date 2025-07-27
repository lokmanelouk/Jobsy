import Nav from "./Nav";
import { Link } from "react-router-dom";
import logo2 from '../../assets/Jopsy-1.png';

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-[#1E293B] shadow-md sticky top-0 z-50 border-b border-[#334155]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group transition duration-300"
        >
          <img 
            className="w-12 h-12 object-cover rounded-xl shadow-md group-hover:shadow-[#F97316]/40 transition" 
            src={logo2} 
            alt="Jobsy Logo" 
          />
          <span className="text-2xl font-bold text-sky-300 tracking-tight">
            <span className="text-amber-300">JOB</span>SY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <Nav />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316] transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-white transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={isMenuOpen ? 1.5 : 2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E293B] border-t border-[#334155] animate-fadeIn">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-3 text-white hover:bg-[#334155] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/workers" 
              className="block py-2 px-3 text-white hover:bg-[#334155] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Workers
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-3 text-white hover:bg-[#334155] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-3 text-white hover:bg-[#334155] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block mt-4 mb-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-center py-2 px-4 rounded-md font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;



// import Nav from "./Nav"
// import logo from '../../assets/logo-1.jpeg'
// import { Link } from "react-router-dom"
// import logo2 from '../../assets/Jopsy-1.png'

// function Header({isMenuOpen,setIsMenuOpen}) {
//     return (
//         <> 
//           <header className="bg-[#1E293B] shadow-sm sticky top-0 z-50">
//             <div className="container mx-auto py-4 flex justify-between items-center">
//               <Link to="/" className="flex items-center space-x-2 cursor-pointer">
//                 <img className="w-16 h-16 object-cover rounded-3xl shadow-amber-400" src={logo2} alt="Logo" />
//                 <span className="text-3xl mask-b-from-70% mask-t-from-60% text-shadow-2xs text-shadow-blue-600 font-bold text-sky-400 uppercase tracking-tight">
//                   <span className="text-[#FBBF24]">JOB</span>SY
//                 </span>
//               </Link>

//               <Nav />

//               <button 
//                 className="md:hidden focus:outline-none text-white" 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               </button>
//             </div>

//             {isMenuOpen && (
//               <div className="md:hidden bg-[#1E293B] py-2 px-4 shadow-md">
//               <Link to="/" className="block py-2 text-white hover:text-[#FBBF24] transition">Home</Link>
//               <Link to="/workers" className="block py-2 text-white hover:text-[#FBBF24] transition">workers</Link>
//               <Link to="/about" className="block py-2 text-white hover:text-[#FBBF24] transition">About</Link>
//               <Link to="/contact" className="block py-2 text-white hover:text-[#FBBF24] transition">Contact</Link>
//               <Link 
//                 to="/login" 
//                 className="block mt-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md text-center transition"
//               >
//                 Login
//               </Link>
//             </div>
//             )}
//           </header>
//       </>
//     )
// }

// export default Header