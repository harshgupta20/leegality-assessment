import React from "react";

const LeftSidebar = ({
  products,
  searchParams,
  setSearchParams,
}) => {
  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", 1);

    setSearchParams(params);
  };

  const uniqueCategories = [
    ...new Set(products.map((p) => p.category)),
  ];

  const uniqueBrands = [
    ...new Set(
      products
        .map((p) => p.brand)
        .filter(Boolean)
    ),
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl">
          Filters
        </h2>

        <button
          onClick={() => setSearchParams({ page: 1 })}
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
          value={searchParams.get("category") || ""}
          onChange={(e) =>
            updateFilter(
              "category",
              e.target.value
            )
          }
          className="w-full border border-gray-200 rounded-xl p-3"
        >
          <option value="">
            All Categories
          </option>

          {uniqueCategories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Brand
        </label>

        <select
          value={searchParams.get("brand") || ""}
          onChange={(e) =>
            updateFilter("brand", e.target.value)
          }
          className="w-full border border-gray-200 rounded-xl p-3"
        >
          <option value="">All Brands</option>

          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Rating
        </label>

        <select
          value={searchParams.get("rating") || ""}
          onChange={(e) =>
            updateFilter(
              "rating",
              e.target.value
            )
          }
          className="w-full border border-gray-200 rounded-xl p-3"
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
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Price Range
        </label>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Min"
            value={
              searchParams.get("minPrice") || ""
            }
            onChange={(e) =>
              updateFilter(
                "minPrice",
                e.target.value
              )
            }
            className="border border-gray-200 rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Max"
            value={
              searchParams.get("maxPrice") || ""
            }
            onChange={(e) =>
              updateFilter(
                "maxPrice",
                e.target.value
              )
            }
            className="border border-gray-200 rounded-xl p-3"
          />
        </div>
      </div>

      {/* Stock */}
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
          />

          <span>In Stock Only</span>
        </label>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Sort By
        </label>

        <select
          value={searchParams.get("sort") || ""}
          onChange={(e) =>
            updateFilter("sort", e.target.value)
          }
          className="w-full border border-gray-200 rounded-xl p-3"
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