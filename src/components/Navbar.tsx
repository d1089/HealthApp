import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { URLS } from "../constants/urls";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    const locationPath = location.pathname.replace("/", "");
    return locationPath === path
      ? "text-emerald-600 font-bold"
      : "text-gray-700 hover:text-emerald-600";
  };

  const isToolsActive = () => {
    const locationPath = location.pathname.replace("/", "");
    return locationPath.startsWith("tools")
      ? "text-emerald-600 font-bold"
      : "text-gray-700 hover:text-emerald-600";
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-green-100">
      {/* Subtle gradient line at top */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-green-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={"/"} className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg p-1">
                <img
                  src="../assets/logo.png"
                  alt="NutriiPal Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              NutriiPal
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to={"/"}
              className={`${isActive(
                ""
              )} px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-green-50`}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`${isActive(
                "about"
              )} px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-green-50`}
            >
              About
            </Link>
            <Link
              to={"/blogs"}
              className={`${isActive(
                "blogs"
              )} px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-green-50`}
            >
              Blogs
            </Link>

            {/* Desktop Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsToolsMenuOpen(true)}
              onMouseLeave={() => setIsToolsMenuOpen(false)}
            >
              <button
                className={`${isToolsActive()} px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-green-50 flex items-center gap-1`}
              >
                Tools
                <motion.div
                  animate={{ rotate: isToolsMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isToolsMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-green-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {[
                        {
                          id: "body-fat-calculator",
                          label: "Body Fat Calculator",
                          emoji: "📊",
                        },
                        {
                          id: "bmr-calculator",
                          label: "BMR Calculator",
                          emoji: "🔢",
                        },
                        {
                          id: "onerm-calculator",
                          label: "1RM Calculator",
                          emoji: "📋",
                        },
                        {
                          id: "meal-planner",
                          label: "Meal Planner",
                          emoji: "🍽️",
                        },
                      ].map((item) => (
                        <Link
                          key={item.id}
                          to={"/tools/" + item.id}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-green-50 rounded-xl transition-all duration-200 group text-left"
                        >
                          <span className="text-xl group-hover:scale-110 transition-transform">
                            {item.emoji}
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to={"/contact"}
              className={`${isActive(
                "contact"
              )} px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-green-50`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={URLS.GET_STARTED}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold shadow-lg"
              >
                Get Started 🚀
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-green-50 focus:outline-none transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link
                to={"/"}
                onClick={() => handleLinkClick("home")}
                className={`${isActive(
                  "home"
                )} w-full text-left block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-green-50`}
              >
                🏠 Home
              </Link>
              <Link
                to={"/about"}
                onClick={() => handleLinkClick("about")}
                className={`${isActive(
                  "about"
                )} w-full text-left block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-green-50`}
              >
                ℹ️ About
              </Link>

              <Link
                to={"/blogs"}
                onClick={() => handleLinkClick("blogs")}
                className={`${isActive(
                  "blogs"
                )} w-full text-left block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-green-50`}
              >
                📝 Blogs
              </Link>

              {/* Mobile Tools Accordion */}
              <div className="block">
                <button
                  className={`${isToolsActive()} w-full text-left px-4 py-3 rounded-xl text-base font-medium flex justify-between items-center hover:bg-green-50 transition-all`}
                  onClick={() => setIsToolsMenuOpen((s) => !s)}
                  aria-expanded={isToolsMenuOpen}
                  aria-controls="mobile-tools"
                >
                  <span>🛠️ Tools</span>
                  <motion.div
                    animate={{ rotate: isToolsMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isToolsMenuOpen && (
                    <motion.div
                      id="mobile-tools"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-1 space-y-1 overflow-hidden"
                    >
                      {[
                        {
                          id: "body-fat-calculator",
                          label: "Body Fat Calculator",
                          emoji: "📊",
                        },
                        {
                          id: "bmr-calculator",
                          label: "BMR Calculator",
                          emoji: "🔢",
                        },
                        {
                          id: "onerm-calculator",
                          label: "1RM Calculator",
                          emoji: "📋",
                        },
                        {
                          id: "meal-planner",
                          label: "Meal Planner",
                          emoji: "🍽️",
                        },
                      ].map((item) => (
                        <Link
                          to={"/tools/" + item.id}
                          key={item.id}
                          className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                        >
                          <span>{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to={"/contact"}
                className={`${isActive(
                  "contact"
                )} w-full text-left block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-green-50`}
              >
                📧 Contact
              </Link>

              {/* Mobile CTA Button */}
              <motion.div whileTap={{ scale: 0.95 }} className="pt-2">
                <Link
                  to={URLS.GET_STARTED}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold shadow-lg"
                >
                  Get Started 🚀
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
