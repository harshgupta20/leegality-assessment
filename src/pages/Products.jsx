import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { getProducts } from "../api/products";
import LeftSidebar from "../components/LeftSidebar";
import ProductDetailsCard from "../components/ProductDetailsCard";

const PRODUCTS_PER_PAGE = 12;

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentPage =
    Number(searchParams.get("page")) || 1;

  const category =
    searchParams.get("category") || "";

  const brand =
    searchParams.get("brand") || "";

  const rating =
    Number(searchParams.get("rating")) || 0;

  const minPrice =
    Number(searchParams.get("minPrice")) || 0;

  const maxPrice =
    Number(searchParams.get("maxPrice")) ||
    Infinity;

  const inStock =
    searchParams.get("inStock") === "true";

  const sort =
    searchParams.get("sort") || "";

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const result = await getProducts({
        limit: 500,
        skip: 0,
      });

      if (result.success) {
        setAllProducts(
          result.data?.products || []
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.category === category
      );
    }

    if (brand) {
      filtered = filtered.filter(
        (product) => product.brand === brand
      );
    }

    if (rating) {
      filtered = filtered.filter(
        (product) =>
          product.rating >= rating
      );
    }

    if (minPrice) {
      filtered = filtered.filter(
        (product) =>
          product.price >= minPrice
      );
    }

    if (maxPrice !== Infinity) {
      filtered = filtered.filter(
        (product) =>
          product.price <= maxPrice
      );
    }

    if (inStock) {
      filtered = filtered.filter(
        (product) => product.stock > 0
      );
    }

    switch (sort) {
      case "price_asc":
        filtered.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "price_desc":
        filtered.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "rating_desc":
        filtered.sort(
          (a, b) => b.rating - a.rating
        );
        break;

      case "discount_desc":
        filtered.sort(
          (a, b) =>
            b.discountPercentage -
            a.discountPercentage
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [
    allProducts,
    category,
    brand,
    rating,
    minPrice,
    maxPrice,
    inStock,
    sort,
  ]);

  const totalProducts =
    filteredProducts.length;

  const totalPages = Math.ceil(
    totalProducts / PRODUCTS_PER_PAGE
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        PRODUCTS_PER_PAGE,
      currentPage * PRODUCTS_PER_PAGE
    );

  const handlePageChange = (page) => {
    const params = new URLSearchParams(
      searchParams
    );

    params.set("page", page);

    setSearchParams(params);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getVisiblePages = () => {
    const pages = [];

    const start = Math.max(
      1,
      currentPage - 2
    );

    const end = Math.min(
      totalPages,
      currentPage + 2
    );

    for (
      let i = start;
      i <= end;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <p className="text-gray-500 mt-2">
          Showing {totalProducts} products
        </p>
      </div>

      <div className="flex gap-8">
        <div className="hidden lg:block w-1/4">
          <div className="sticky top-6 bg-white rounded-3xl p-5 border border-gray-100">
            <LeftSidebar
              products={allProducts}
              searchParams={searchParams}
              setSearchParams={
                setSearchParams
              }
            />
          </div>
        </div>

        <div className="w-full lg:w-3/4">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map(
                  (product) => (
                    <ProductDetailsCard
                      key={product.id}
                      productId={product.id}
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

              {paginatedProducts.length ===
                0 && (
                <div className="text-center py-20">
                  No products found.
                </div>
              )}

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
                    className="px-4 py-2 border rounded-xl"
                  >
                    Previous
                  </button>

                  {getVisiblePages().map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() =>
                          handlePageChange(
                            page
                          )
                        }
                        className={`h-10 w-10 rounded-xl ${
                          currentPage ===
                          page
                            ? "bg-black text-white"
                            : "border"
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
                    className="px-4 py-2 border rounded-xl"
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