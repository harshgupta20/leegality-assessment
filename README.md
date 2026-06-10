# 🛍️ Leegality Store

A modern ecommerce frontend built using React, React Router, Axios and Tailwind CSS.

## Demo

Live Demo: https://leegality-assessment.web.app/

## Features

- Product Listing
- Product Details Page
- Search Products
- Category Filtering
- Sorting
- Pagination
- URL State Persistence
- Responsive Design
- Loading States
- Architecture Showcase Page

---

## Setup Instructions

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Tech Stack

- React
- React Router
- Axios
- Tailwind CSS
- DummyJSON API
- Firebase Hosting

---

## Assumptions Made

- DummyJSON API is the backend source of truth.
- Product filtering, searching and pagination should be API-driven whenever supported.
- User authentication and checkout flows are out of scope because backend support is unavailable.
- Cart functionality is considered client-side for this assessment.
- Performance and scalability were prioritized over implementing unsupported filters locally.

---

## Architectural Decisions

### API-Driven Data Fetching

Instead of downloading all products and filtering on the frontend, filtering, searching and pagination are delegated to the API whenever possible.

Benefits:

- Better scalability
- Reduced network payload
- Faster rendering
- Production-oriented approach

### URL State Persistence

Search, filters and pagination are stored in URL query parameters.

Example:

```text
/products?page=2&category=beauty
```

Benefits:

- Refresh-safe
- Shareable URLs
- Better navigation experience

### Component-Based Architecture

The application is structured using reusable components:

```text
Navbar
LeftSidebar
ProductDetailsCard
MainLayout
```

This improves maintainability and future scalability.

### Centralized API Layer

All API communication is abstracted inside the `api` folder to keep UI components focused on presentation and business logic.

---

## Improvements With More Time

### Product Features

- Wishlist
- Recently Viewed Products
- Product Recommendations
- Product Reviews & Ratings

### Ecommerce Features

- Checkout Flow
- Payment Gateway Integration
- Order Tracking
- Coupon System

### User Features

- Authentication
- User Profiles
- Saved Addresses
- Order History

### Technical Improvements

- Search Debouncing
- React Query / TanStack Query
- Product Caching
- Unit & Integration Tests
- Error Boundary Implementation
- Infinite Scrolling Option

---

## Project Structure

```text
src
├── api
├── components
├── hooks
├── pages
├── store
├── utils
├── App.jsx
└── main.jsx
```

---

## Author

Harsh Gupta

Frontend Engineer

Built for the Leegality Frontend Engineering Assessment.