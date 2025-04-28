import Nav from "./Nav"
import logo from '../../assets/logo-1.jpeg'
import { Link } from "react-router-dom"
import logo2 from '../../assets/Jopsy-1.png'

function Header({isMenuOpen,setIsMenuOpen}) {
    return (
        <> 
          <header className="bg-[#1E293B] shadow-sm sticky top-0 z-50">
            <div className="container mx-auto py-4 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <img className="w-16 h-16 object-cover rounded-3xl shadow-amber-400" src={logo2} alt="Logo" />
                <span className="text-3xl mask-b-from-70% mask-t-from-60% text-shadow-2xs text-shadow-blue-600 font-bold text-sky-400 uppercase tracking-tight">
                  <span className="text-[#FBBF24]">JOB</span>SY
                </span>
              </Link>

              <Nav />

              <button 
                className="md:hidden focus:outline-none text-white" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden bg-[#1E293B] py-2 px-4 shadow-md">
              <Link to="/" className="block py-2 text-white hover:text-[#FBBF24] transition">Home</Link>
              <Link to="/workers" className="block py-2 text-white hover:text-[#FBBF24] transition">workers</Link>
              <Link to="/about" className="block py-2 text-white hover:text-[#FBBF24] transition">About</Link>
              <Link to="/contact" className="block py-2 text-white hover:text-[#FBBF24] transition">Contact</Link>
              <Link 
                to="/login" 
                className="block mt-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md text-center transition"
              >
                Login
              </Link>
            </div>
            )}
          </header>
      </>
    )
}

export default Header