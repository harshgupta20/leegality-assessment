import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Fast Product Discovery",
      description:
        "Search and browse products with API-driven filtering and pagination.",
      icon: "⚡",
    },
    {
      title: "Category Filtering",
      description:
        "Find products easily through category-based navigation.",
      icon: "📂",
    },
    {
      title: "Responsive Experience",
      description:
        "Optimized layouts for desktop, tablet, and mobile devices.",
      icon: "📱",
    },
    {
      title: "URL State Persistence",
      description:
        "Filters and pagination remain intact after refresh and sharing.",
      icon: "🔗",
    },
    {
      title: "Reusable Components",
      description:
        "Built using scalable and maintainable React architecture.",
      icon: "🧩",
    },
    {
      title: "Modern UI",
      description:
        "Clean, minimal and user-friendly ecommerce experience.",
      icon: "🎨",
    },
  ];

  const futureFeatures = [
    "User Authentication & Profiles",
    "Wishlist & Saved Products",
    "Product Reviews & Ratings",
    "Order Tracking",
    "Checkout & Payment Gateway",
    "Coupons & Discounts",
    "Admin Dashboard",
    "Inventory Management",
    "Recommendation Engine",
    "Analytics Dashboard",
    "AI Product Search",
    "Recently Viewed Products",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            Frontend Engineer Assignment
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
            Modern Ecommerce Experience
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A scalable ecommerce frontend built with React,
            React Router, Axios and Tailwind CSS.
            Designed with production-ready patterns including
            API-driven filtering, pagination, search, and
            URL state persistence.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              Explore Products
            </button>

            <button
              className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition"
              onClick={() => navigate("/architecture")}
            >
              View Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Key Features
          </h2>

          <p className="text-gray-500 mt-3">
            Core capabilities implemented in the current version.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">
            Technical Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-xl mb-4">
                Tech Stack
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✓ React</li>
                <li>✓ React Router</li>
                <li>✓ Axios</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ DummyJSON API</li>
                <li>✓ Component-Based Architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">
                Engineering Decisions
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✓ API-driven pagination</li>
                <li>✓ API-driven filtering</li>
                <li>✓ API-driven search</li>
                <li>✓ URL state persistence</li>
                <li>✓ Reusable UI components</li>
                <li>✓ Loading state handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Future Scalability
          </h2>

          <p className="text-gray-500 mt-3">
            Features that can be supported with a production backend.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureFeatures.map((feature) => (
              <div
                key={feature}
                className="p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                🚀 {feature}
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-purple-50 border border-purple-100">
            <h3 className="font-semibold text-lg">
              Product Thinking
            </h3>

            <p className="mt-2 text-gray-600">
              This implementation focuses on frontend
              architecture while leveraging DummyJSON as
              the backend source. Features like payments,
              authentication, wishlists, order management,
              analytics, and inventory synchronization can
              be integrated without major architectural
              changes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Explore?
          </h2>

          <p className="mt-4 text-purple-100 max-w-2xl mx-auto">
            Browse products, test filters, search products,
            and experience a scalable ecommerce frontend.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 px-6 py-3 rounded-xl bg-white text-purple-600 font-semibold hover:bg-gray-100 transition"
          >
            Explore Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;