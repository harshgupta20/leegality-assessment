import React from "react";

const LeftSidebar = ({
  searchParams,
  setSearchParams,
  categories = [],
}) => {
  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", "1");

    setSearchParams(params);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Filters
        </h2>

        <button
          onClick={() =>
            setSearchParams({ page: "1" })
          }
          className="text-sm text-gray-500"
        >
          Clear
        </button>
      </div>

      {/* Search */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Search
        </label>

        <input
          type="text"
          placeholder="Search products..."
          value={searchParams.get("q") || ""}
          onChange={(e) =>
            updateFilter("q", e.target.value)
          }
          className="w-full border border-gray-200 rounded-xl p-3"
        />
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
          className="w-full border border-gray-200 rounded-xl p-3"
        >
          <option value="">
            All Categories
          </option>

          {categories.map((category) => (
            <option
              key={category.slug}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </select>
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

          <option value="title_asc">
            Name: A-Z
          </option>

          <option value="title_desc">
            Name: Z-A
          </option>
        </select>
      </div>
    </div>
  );
};

export default LeftSidebar;