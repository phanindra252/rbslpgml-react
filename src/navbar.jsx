import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import { HashLink } from "react-router-hash-link";
import image from "./assets/rbslpgml.png";

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow-md font-sans tracking-wide sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-evenly gap-4 px-10 py-4 bg-white min-h-[70px]">
        <Link to="/">
          <img src={image} alt="logo" className="w-36" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="mobile-menu-button" onClick={toggleMenu}>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Main Navigation Menu */}
        <div
          className={`${isMenuOpen ? "" : "hidden"} lg:block navigation-menu`}
        >
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 text-sm">
            <li className="mb-6 hidden max-lg:block">
              <Link to="/" onClick={closeMenu}>
                <img src={image} alt="logo" className="w-36" />
              </Link>
            </li>

            {/* Use NavLink instead of Link for active styles */}
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block font-bold text-[15px] ${
                    isActive ? "text-[#007bff]" : "text-[#333]"
                  } hover:text-[#007bff]`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block font-bold text-[15px] ${
                    isActive ? "text-[#007bff]" : "text-[#333]"
                  } hover:text-[#007bff]`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <HashLink
                smooth
                to="/#services" // Navigate to home page and scroll to #services
                className="hover:text-[#007bff] text-[#333] block font-bold text-[15px]"
                onClick={closeMenu}
              >
                Services
              </HashLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <HashLink
                smooth
                to="/#customers" // Navigate to home page and scroll to #customers
                className="hover:text-[#007bff] text-[#333] block font-bold text-[15px]"
                onClick={closeMenu}
              >
                Customers
              </HashLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block font-bold text-[15px] ${
                    isActive ? "text-[#007bff]" : "text-[#333]"
                  } hover:text-[#007bff]`
                }
                onClick={closeMenu}
              >
                Blog
              </NavLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block font-bold text-[15px] ${
                    isActive ? "text-[#007bff]" : "text-[#333]"
                  } hover:text-[#007bff]`
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
