import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation(); // Get current route
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track authentication state
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("user"));
    };
    window.addEventListener("storage", checkAuth); // Detect changes in localStorage
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container') && !event.target.closest('.hamburger-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("storage")); // Notify other components
  };

  return (
    <div className="flex items-center justify-between p-6 relative">
      {/* Left Navigation */}
      <nav className="flex items-center ">
        <div className="text-2xl font-bold pr-10">G</div>

        {/* Side Menu that slides in from the side for small screens */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isMenuOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform menu-container md:hidden block"
        >
          <ul className="flex flex-col space-y-6 p-8 text-sm font-semibold">
            <li><a href="#hero" className="hover:text-teal-500" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#features" className="hover:text-teal-500" onClick={() => setIsMenuOpen(false)}>Feature</a></li>
            {           
        (location.pathname === "/dashboard" ) && (
                <ul className="flex flex-col space-y-6  text-sm font-semibold">
                  <li><a href="#" className="hover:text-teal-500" onClick={() => setIsMenuOpen(false)}>Advance Booking</a></li>
                  <li><a href="#payment-plans" className="hover:text-teal-500" onClick={() => setIsMenuOpen(false)}>Plans</a></li>
                  <li><a href="#" className="hover:text-teal-500" onClick={() => setIsMenuOpen(false)}>Parking History</a></li>
                  <li><a href="#" className="hover:text-teal-500" onClick={() => setIsMenuOpen(false)}>Payment History</a></li>
                </ul>
              )
        }
          </ul>
        </motion.div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center hamburger-menu">
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-teal-500 focus:outline-none"
            initial={{ x: '100%' }}
            animate={{ x: isMenuOpen ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            ☰
          </motion.button>
        </div>

        {/* Navbar for large screens */}
        <ul className="hidden md:flex justify-start space-x-6 font-semibold text-sm">
          <li><a href="#hero" className="hover:text-teal-500">Home</a></li>
          <li><a href="#features" className="hover:text-teal-500">Feature</a></li>
          {           
        (location.pathname === "/dashboard" ) && (
                <ul className="hidden md:flex justify-start space-x-6 font-semibold text-sm">
                  <li><a href="#" className="hover:text-teal-500">Advance Booking</a></li>
                  <li><a href="#payment-plans" className="hover:text-teal-500">Plans</a></li>
                  <li><a href="#" className="hover:text-teal-500">Parking History</a></li>
                  <li><a href="#" className="hover:text-teal-500">Payment History</a></li>
                </ul>
              )
        }
        </ul>
       
      </nav>
     

      {/* Right Navigation */}
      <div className="flex items-center justify-end space-x-4 font-medium ">
        {isAuthenticated ? (
          <>
            {location.pathname === "/admin" ? (
              <Link to="/" onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                Logout
              </Link>
            ) : (
              <>
                {(location.pathname === "/dashboard" || location.pathname === "/booknow") && (
                  <Link to="/booknow" className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
                    Book Now
                  </Link>
                )}
                <Link to="/" onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                  Logout
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <Link to="/signup" className="text-gray-600 hover:text-teal-500">
              Sign In
            </Link>
            <Link to="/login">
              <button className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
