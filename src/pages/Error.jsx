import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-black text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          The page you're looking for doesn't exist,
          may have been moved, or the URL might be incorrect.
        </p>

        {/* Decorative Card */}
        <div className="mt-10 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <div className="text-6xl mb-4">
            🛒
          </div>

          <h3 className="text-xl font-semibold">
            Lost in the Store?
          </h3>

          <p className="mt-2 text-gray-500">
            Explore our products, review the architecture,
            or head back to the homepage.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="
                px-6
                py-3
                bg-blue-600
                text-white
                rounded-xl
                hover:bg-blue-700
                transition
              "
            >
              Go Home
            </button>

            <button
              onClick={() =>
                navigate("/products")
              }
              className="
                px-6
                py-3
                border
                border-gray-300
                rounded-xl
                hover:bg-gray-100
                transition
              "
            >
              Browse Products
            </button>

            <button
              onClick={() =>
                navigate("/architecture")
              }
              className="
                px-6
                py-3
                border
                border-gray-300
                rounded-xl
                hover:bg-gray-100
                transition
              "
            >
              View Architecture
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-400">
          If you think this page should exist, please check the URL or contact support.
        </p>
      </div>
    </div>
  );
};

export default Error;