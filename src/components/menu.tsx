import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < lastScrollTop);
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={`z-10 p-4 bg-yellow-500 font-serif font-bold text-lg text-white fixed top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex flex-row justify-between items-center px-4 mx-auto">
        <img
          className="h-16"
          src="https://img.freepik.com/premium-vector/wellness-logo-design-concept-vector-logo-template-health-wellness-fitness-company_469822-292.jpg"
        ></img>

        {/* Burger Icon for Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>

        {/* Menu for Desktop & Mobile */}
        <div
          className={`absolute md:relative top-24 md:top-auto left-0 w-full md:w-auto bg-green-500 md:bg-transparent p-4 md:p-0 md:flex gap-14 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="py-2 md:inline-block">Home</div>
          <div className="py-2 md:inline-block">About</div>
          <div className="py-2 md:inline-block">Contact</div>
          <div className="py-2 md:inline-block">Login</div>
          <div className="py-2 md:inline-block">Sign In</div>
        </div>
      </nav>
    </div>
  );
};
