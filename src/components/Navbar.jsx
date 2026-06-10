import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const menuOptions = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    // { name: "My Cart", link: "/cart" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          🛍️ Leegality Store
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-2">
            {menuOptions.map((option) => {
              const isActive =
                location.pathname === option.link;

              return (
                <li key={option.link}>
                  <Link
                    to={option.link}
                    className={`
                      px-4
                      py-2
                      rounded-xl
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-black"
                      }
                    `}
                  >
                    {option.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
        >
          🛒

          {/* Cart Count */}
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs bg-red-500 text-white rounded-full">
            0
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;