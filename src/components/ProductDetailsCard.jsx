import React from "react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const ProductDetailsCard = ({
  productId,
  productThumbnail,
  productTitle,
  productPrice,
  productCategory,
  productRating,
  productDiscount,
  productStock,
}) => {
  const navigate = useNavigate();

  const productCardClick = () => {
    navigate(`/products/${productId}`);
  };

  const productAddToCartClick = (e) => {
    e.stopPropagation();
    console.log("Added to cart");
  };

  const originalPrice = (
    productPrice /
    (1 - productDiscount / 100)
  ).toFixed(2);

  return (
    <div
      onClick={productCardClick}
      className="
        group
        bg-white
        rounded-3xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image Area */}
      <div className="relative bg-gray-50 p-8">
        {/* Discount Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
            {Math.round(productDiscount)}% OFF
          </span>
        </div>

        {/* Stock Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              productStock > 10
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {productStock > 10
              ? "In Stock"
              : "Limited Stock"}
          </span>
        </div>

        <img
          src={productThumbnail}
          alt={productTitle}
          className="
            h-56
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs uppercase tracking-wide text-gray-400">
          {productCategory}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2 min-h-[56px]">
          {productTitle}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex text-amber-400 text-sm">
            <FaStar />
          </div>

          <span className="text-sm text-gray-500">
            {productRating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${productPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${originalPrice}
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Free Delivery
          </span>

          <button
            onClick={productAddToCartClick}
            className="
              h-11
              w-11
              rounded-full
              bg-black
              text-white
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-110
            "
          >
            <FiShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;