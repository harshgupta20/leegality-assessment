import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import {
  getProducts,
  getCategories,
} from "../api/products";

import LeftSidebar from "../components/LeftSidebar";
import ProductDetailsCard from "../components/ProductDetailsCard";

const PRODUCTS_PER_PAGE = 12;

const Products = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const [products, setProducts] =
    useState([]);

  const [categories, setCategories] =
    useState([]);

  const [totalProducts, setTotalProducts] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  const currentPage =
    Number(searchParams.get("page")) || 1;

  const category =
    searchParams.get("category") || "";

  const search =
    searchParams.get("q") || "";

  const sort =
    searchParams.get("sort") || "";

  const totalPages = Math.ceil(
    totalProducts / PRODUCTS_PER_PAGE
  );

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const result = await getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip:
          (currentPage - 1) *
          PRODUCTS_PER_PAGE,
        category,
        search,
      });

      if (result.success) {
        setProducts(
          result.data?.products || []
        );

        setTotalProducts(
          result.data?.total || 0
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const result =
        await getCategories();

      if (result.success) {
        setCategories(result.data || []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [
    currentPage,
    category,
    search,
  ]);

  const sortedProducts = [...products];

  switch (sort) {
    case "price_asc":
      sortedProducts.sort(
        (a, b) => a.price - b.price
      );
      break;

    case "price_desc":
      sortedProducts.sort(
        (a, b) => b.price - a.price
      );
      break;

    case "title_asc":
      sortedProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    case "title_desc":
      sortedProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    default:
      break;
  }

  const handlePageChange = (page) => {
    const params =
      new URLSearchParams(
        searchParams
      );

    params.set("page", page);

    setSearchParams(params);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visiblePages = Array.from(
    {
      length: Math.min(
        totalPages,
        5
      ),
    },
    (_, index) =>
      Math.max(
        1,
        currentPage - 2
      ) + index
  ).filter(
    (page) => page <= totalPages
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <p className="text-gray-500 mt-2">
          Showing {totalProducts} products
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={
            searchParams.get("q") || ""
          }
          onChange={(e) => {
            const params =
              new URLSearchParams(
                searchParams
              );

            if (e.target.value) {
              params.set(
                "q",
                e.target.value
              );
            } else {
              params.delete("q");
            }

            params.set("page", "1");

            setSearchParams(params);
          }}
          className="
            w-full
            h-14
            px-5
            rounded-2xl
            border
            border-gray-200
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4">
          <div className="sticky top-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <LeftSidebar
              categories={categories}
              searchParams={
                searchParams
              }
              setSearchParams={
                setSearchParams
              }
            />
          </div>
        </div>

        {/* Products */}
        <div className="w-full lg:w-3/4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map(
                (_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 animate-pulse"
                  >
                    <div className="h-56 bg-gray-200 rounded-2xl" />

                    <div className="h-4 bg-gray-200 rounded mt-4" />

                    <div className="h-4 bg-gray-200 rounded mt-2 w-2/3" />

                    <div className="h-6 bg-gray-200 rounded mt-4 w-1/3" />
                  </div>
                )
              )}
            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map(
                  (product) => (
                    <ProductDetailsCard
                      key={product.id}
                      productId={
                        product.id
                      }
                      productThumbnail={
                        product.thumbnail
                      }
                      productTitle={
                        product.title
                      }
                      productPrice={
                        product.price
                      }
                      productCategory={
                        product.category
                      }
                      productRating={
                        product.rating
                      }
                      productDiscount={
                        product.discountPercentage
                      }
                      productStock={
                        product.stock
                      }
                    />
                  )
                )}
              </div>

              {/* Empty State */}
              {sortedProducts.length ===
                0 && (
                <div className="text-center py-20 text-gray-500">
                  No products found
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button
                    disabled={
                      currentPage === 1
                    }
                    onClick={() =>
                      handlePageChange(
                        currentPage - 1
                      )
                    }
                    className="px-4 py-2 border rounded-xl disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {visiblePages.map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() =>
                          handlePageChange(
                            page
                          )
                        }
                        className={`h-10 w-10 rounded-xl transition ${
                          currentPage ===
                          page
                            ? "bg-blue-600 text-white"
                            : "border hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    disabled={
                      currentPage ===
                      totalPages
                    }
                    onClick={() =>
                      handlePageChange(
                        currentPage + 1
                      )
                    }
                    className="px-4 py-2 border rounded-xl disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;