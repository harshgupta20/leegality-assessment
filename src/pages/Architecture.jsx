import React from "react";

const Architecture = () => {
    const currentFeatures = [
        "Product Listing",
        "Product Details Page",
        "Search Products",
        "Category Filtering",
        "Sorting",
        "Pagination",
        "URL State Persistence",
        "Responsive Design",
        "Loading States",
        "Reusable Components",
    ];

    const futureFeatures = [
        "Authentication & Authorization",
        "Wishlist",
        "Checkout Flow",
        "Payment Gateway",
        "Order Management",
        "Admin Dashboard",
        "Inventory Tracking",
        "Recommendation Engine",
        "Analytics Dashboard",
        "AI Powered Search",
        "Review & Rating System",
        "Notifications",
    ];

    const engineeringDecisions = [
        {
            title: "API-Driven Pagination",
            description:
                "Pagination is handled by the backend API to reduce network payload and improve scalability.",
        },
        {
            title: "URL State Persistence",
            description:
                "Search, filters and pagination are stored in URL parameters for refresh-safe and shareable experiences.",
        },
        {
            title: "Component-Based Architecture",
            description:
                "UI is split into reusable components to improve maintainability and future scalability.",
        },
        {
            title: "Centralized API Layer",
            description:
                "All API communication is abstracted through dedicated API services using Axios.",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                        System Design & Engineering Decisions
                    </span>

                    <h1 className="mt-6 text-5xl font-bold">
                        Architecture Overview
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
                        This project demonstrates not only frontend
                        implementation skills but also architectural
                        thinking, scalability planning, and production
                        readiness.
                    </p>
                </div>
            </section>

            {/* Current Architecture */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl font-bold mb-8">
                        Current Architecture
                    </h2>

                    <div className="flex flex-col items-center text-center gap-4 font-mono text-sm">
                        <div className="border rounded-xl p-4 w-64 bg-blue-50">
                            React UI
                        </div>

                        <div>↓</div>

                        <div className="border rounded-xl p-4 w-64 bg-green-50">
                            React Router
                        </div>

                        <div>↓</div>

                        <div className="border rounded-xl p-4 w-64 bg-yellow-50">
                            API Layer (Axios)
                        </div>

                        <div>↓</div>

                        <div className="border rounded-xl p-4 w-64 bg-purple-50">
                            DummyJSON API
                        </div>
                    </div>
                </div>
            </section>

            {/* Folder Structure */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl font-bold mb-8">
                        Project Structure
                    </h2>

                    <pre className="bg-gray-900 text-green-400 rounded-2xl p-6 overflow-auto text-sm">
                        {`src/
├── api/
│   └── products.js

├── components/
│   ├── Navbar.jsx
│   ├── LeftSidebar.jsx
│   ├── ProductDetailsCard.jsx

├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── SingleProduct.jsx
│   ├── Cart.jsx
│   └── Architecture.jsx

├── routes/
│   └── AppRoutes.jsx

├── utils/
│   └── axiosInstance.js`}
                    </pre>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">
                            Implemented Features
                        </h2>

                        <div className="grid gap-3">
                            {currentFeatures.map((feature) => (
                                <div
                                    key={feature}
                                    className="p-3 rounded-xl bg-green-50 border border-green-100"
                                >
                                    ✓ {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">
                            Future Enhancements
                        </h2>

                        <div className="grid gap-3">
                            {futureFeatures.map((feature) => (
                                <div
                                    key={feature}
                                    className="p-3 rounded-xl bg-blue-50 border border-blue-100"
                                >
                                    🚀 {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Decisions */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Engineering Decisions
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {engineeringDecisions.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-semibold text-lg mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Performance */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl font-bold mb-8">
                        Performance Strategy
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="font-semibold text-xl mb-4">
                                Current Optimizations
                            </h3>

                            <ul className="space-y-3 text-gray-600">
                                <li>✓ API-side pagination</li>
                                <li>✓ API-side filtering</li>
                                <li>✓ Loading skeletons</li>
                                <li>✓ Reusable components</li>
                                <li>✓ URL state management</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-4">
                                Future Optimizations
                            </h3>

                            <ul className="space-y-3 text-gray-600">
                                <li>→ Search debouncing</li>
                                <li>→ React Query</li>
                                <li>→ Infinite scrolling</li>
                                <li>→ CDN image delivery</li>
                                <li>→ Product caching</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Production Architecture */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl font-bold mb-8">
                        Project Structure
                    </h2>

                    <pre className="bg-gray-900 text-green-400 rounded-2xl p-6 overflow-auto text-sm">
                        {`src
├── api
│   └── products.js
│
├── components
│   ├── LeftSidebar.jsx
│   ├── MainLayout.jsx
│   ├── Navbar.jsx
│   └── ProductDetailsCard.jsx
│
├── hooks
│
├── pages
│   ├── Architecture.jsx
│   ├── Error.jsx
│   ├── Home.jsx
│   ├── Products.jsx
│   └── SingleProduct.jsx
│
├── store
│
├── utils
│   └── axiosInstance.js
│
├── App.jsx
├── index.css
└── main.jsx`}
                    </pre>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                            <h3 className="font-semibold mb-3">
                                Architectural Goal
                            </h3>

                            <p className="text-gray-600">
                                The project follows a feature-oriented
                                structure where API communication,
                                reusable UI components, page-level
                                containers and utility functions are
                                separated for maintainability and future
                                scalability.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-green-50 border border-green-100">
                            <h3 className="font-semibold mb-3">
                                Separation of Concerns
                            </h3>

                            <p className="text-gray-600">
                                API calls are isolated in the API layer,
                                UI logic is encapsulated inside reusable
                                components, while pages focus on
                                orchestrating business logic and user
                                interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
                    <h2 className="text-4xl font-bold">
                        Key Takeaway
                    </h2>

                    <p className="mt-6 text-lg text-blue-100 max-w-4xl">
                        This project was intentionally designed with
                        scalability in mind. While the current version
                        leverages DummyJSON as a backend source, the
                        architecture supports seamless integration of
                        authentication, payments, orders, analytics,
                        and inventory management with minimal frontend
                        refactoring.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Architecture;