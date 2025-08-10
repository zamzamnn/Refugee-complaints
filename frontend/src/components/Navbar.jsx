import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass =
    "text-indigo-600 border-b-2 border-indigo-600 font-semibold";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="text-indigo-700 font-bold text-xl">Refugee Feedback</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-indigo-600 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit-complaint"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-indigo-600 transition"
              }
            >
              Submit Complaint
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-indigo-600 transition"
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-indigo-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md space-y-4 px-6 pb-6">
          <li>
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                  : "block py-1 hover:text-indigo-600 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit-complaint"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                  : "block py-1 hover:text-indigo-600 transition"
              }
            >
              Submit Complaint
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                  : "block py-1 hover:text-indigo-600 transition"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
