import React from "react";

const LeftSidebar = ({
  products,
  searchParams,
  setSearchParams,
}) => {
  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (
      value === "" ||
      value === null ||
      value === undefined
    ) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", "1");

    setSearchParams(params);
  };

  const uniqueCategories = [
    ...new Set(
      products
        .map((product) => product.category)
        .filter(Boolean)
    ),
  ];

  const uniqueBrands = [
    ...new Set(
      products
        .map((product) => product.brand)
        .filter(Boolean)
    ),
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Filters
        </h2>

        <button
          onClick={() =>
            setSearchParams({ page: "1" })
          }
          className="text-sm text-gray-500 hover:text-black"
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Category
        </label>

        <select
          value={
            searchParams.get("category") || ""
          }
          onChange={(e) =>
            updateFilter(
              "category",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 p-3"
        >
          <option value="">
            All Categories
          </option>

          {uniqueCategories.map(
            (category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Brand
        </label>

        <select
          value={
            searchParams.get("brand") || ""
          }
          onChange={(e) =>
            updateFilter(
              "brand",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 p-3"
        >
          <option value="">
            All Brands
          </option>

          {uniqueBrands.map((brand) => (
            <option
              key={brand}
              value={brand}
            >
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Price Range
        </label>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Min"
            value={
              searchParams.get("minPrice") ||
              ""
            }
            onChange={(e) =>
              updateFilter(
                "minPrice",
                e.target.value
              )
            }
            className="rounded-xl border border-gray-200 p-3"
          />

          <input
            type="number"
            placeholder="Max"
            value={
              searchParams.get("maxPrice") ||
              ""
            }
            onChange={(e) =>
              updateFilter(
                "maxPrice",
                e.target.value
              )
            }
            className="rounded-xl border border-gray-200 p-3"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Rating
        </label>

        <select
          value={
            searchParams.get("rating") || ""
          }
          onChange={(e) =>
            updateFilter(
              "rating",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 p-3"
        >
          <option value="">
            All Ratings
          </option>

          <option value="4">
            4★ & Above
          </option>

          <option value="3">
            3★ & Above
          </option>

          <option value="2">
            2★ & Above
          </option>

          <option value="1">
            1★ & Above
          </option>
        </select>
      </div>

      {/* In Stock */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={
              searchParams.get("inStock") ===
              "true"
            }
            onChange={(e) =>
              updateFilter(
                "inStock",
                e.target.checked
                  ? "true"
                  : ""
              )
            }
            className="h-4 w-4"
          />

          <span className="text-sm">
            In Stock Only
          </span>
        </label>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Sort By
        </label>

        <select
          value={
            searchParams.get("sort") || ""
          }
          onChange={(e) =>
            updateFilter(
              "sort",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 p-3"
        >
          <option value="">
            Featured
          </option>

          <option value="price_asc">
            Price: Low to High
          </option>

          <option value="price_desc">
            Price: High to Low
          </option>

          <option value="rating_desc">
            Highest Rated
          </option>

          <option value="discount_desc">
            Biggest Discount
          </option>
        </select>
      </div>
    </div>
  );
};

export default LeftSidebar;