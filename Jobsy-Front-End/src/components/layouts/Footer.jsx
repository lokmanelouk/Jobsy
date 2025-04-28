import { Link } from "react-router-dom";
import { FaGoogle,FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ProWorkers</h3>
            <p className="text-gray-400 mb-4">
              Connecting you with trusted professionals since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FBBF24]">
                <FaGoogle />
              </a>
              <a href="#" className="hover:text-[#FBBF24]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#FBBF24]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#FBBF24]">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#FBBF24] transition">Home</Link>
              </li>
              <li>
                <Link to="/workers" className="hover:text-[#FBBF24] transition">Find Workers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FBBF24] transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Electricians</li>
              <li>Plumbers</li>
              <li>Cleaners</li>
              <li>More...</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} ProWorkers. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy" className="hover:text-[#FBBF24]">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-[#FBBF24]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
