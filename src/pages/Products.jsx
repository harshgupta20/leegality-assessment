import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getProducts } from "../api/products";
import LeftSidebar from "../components/LeftSidebar";
import ProductDetailsCard from "../components/ProductDetailsCard";

const PRODUCTS_PER_PAGE = 12;

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

      const result = await getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip,
      });

      if (result.success) {
        setProducts(result.data?.products || []);
        setTotalProducts(result.data?.total || 0);
      } else {
        throw new Error(
          result.message || "Failed to fetch products"
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(
    totalProducts / PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setSearchParams({ page });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getVisiblePages = () => {
    const pages = [];

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <p className="text-gray-500 mt-2">
          Explore our collection
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4">
          <div className="sticky top-6 bg-white rounded-3xl p-5 border border-gray-100">
            <LeftSidebar />
          </div>
        </div>

        {/* Products */}
        <div className="w-full lg:w-3/4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 animate-pulse"
                >
                  <div className="h-56 bg-gray-200 rounded-2xl" />
                  <div className="h-4 bg-gray-200 rounded mt-4" />
                  <div className="h-4 bg-gray-200 rounded mt-2 w-2/3" />
                  <div className="h-6 bg-gray-200 rounded mt-4 w-1/3" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductDetailsCard
                    key={product.id}
                    productId={product.id}
                    productThumbnail={product.thumbnail}
                    productTitle={product.title}
                    productPrice={product.price}
                    productCategory={product.category}
                    productRating={product.rating}
                    productDiscount={
                      product.discountPercentage
                    }
                    productStock={product.stock}
                  />
                ))}
              </div>

              {/* Empty State */}
              {products.length === 0 && (
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold">
                    No Products Found
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Try changing filters
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      handlePageChange(currentPage - 1)
                    }
                    className="
                      px-4 py-2
                      rounded-xl
                      border
                      border-gray-200
                      disabled:opacity-40
                      hover:bg-gray-100
                      transition
                    "
                  >
                    Previous
                  </button>

                  {currentPage > 3 && (
                    <>
                      <button
                        onClick={() =>
                          handlePageChange(1)
                        }
                        className="h-10 w-10 rounded-xl hover:bg-gray-100"
                      >
                        1
                      </button>

                      <span className="px-2">...</span>
                    </>
                  )}

                  {getVisiblePages().map((page) => (
                    <button
                      key={page}
                      onClick={() =>
                        handlePageChange(page)
                      }
                      className={`
                        h-10
                        w-10
                        rounded-xl
                        transition
                        ${
                          currentPage === page
                            ? "bg-black text-white"
                            : "hover:bg-gray-100"
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}

                  {currentPage < totalPages - 2 && (
                    <>
                      <span className="px-2">...</span>

                      <button
                        onClick={() =>
                          handlePageChange(totalPages)
                        }
                        className="h-10 w-10 rounded-xl hover:bg-gray-100"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  <button
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      handlePageChange(currentPage + 1)
                    }
                    className="
                      px-4 py-2
                      rounded-xl
                      border
                      border-gray-200
                      disabled:opacity-40
                      hover:bg-gray-100
                      transition
                    "
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