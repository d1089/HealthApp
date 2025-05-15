import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Apple, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-emerald-500"
      : "text-white hover:text-emerald-500";
  };

  return (
    <nav className="fixed w-full bg-[#19667c] backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo_no_name.png" alt="logo" className="w-14 h-14" />
            <span className="text-xl font-bold text-white">NutriPal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${isActive(
                "/"
              )} font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive(
                "/about"
              )} font-medium transition-colors duration-200`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive(
                "/contact"
              )} font-medium transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-emerald-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#19667c] backdrop-blur-sm border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`${isActive(
                "/"
              )} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive(
                "/about"
              )} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive(
                "/contact"
              )} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
