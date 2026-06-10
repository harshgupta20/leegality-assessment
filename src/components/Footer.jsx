import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">
              🛍️ Leegality Store
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Modern ecommerce frontend built with
              React, React Router, Axios and Tailwind CSS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-blue-600"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/architecture"
                  className="hover:text-blue-600"
                >
                  Architecture
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-blue-600"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">
              Features
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>✓ Product Search</li>
              <li>✓ Category Filtering</li>
              <li>✓ URL State Persistence</li>
              <li>✓ API Driven Pagination</li>
              <li>✓ Responsive Design</li>
            </ul>
          </div>

          {/* Technical */}
          <div>
            <h4 className="font-semibold mb-4">
              Tech Stack
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>React</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>Tailwind CSS</li>
              <li>DummyJSON API</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-100"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Leegality Store.
            Frontend Engineering Assignment.
          </p>

          <p className="text-sm text-gray-500 text-center md:text-right">
            Built with scalability, maintainability and
            production-readiness in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;