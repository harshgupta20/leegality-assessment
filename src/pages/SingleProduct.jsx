import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getProductById } from "../api/products";
import {
    FiShoppingCart,
    FiTruck,
    FiRefreshCcw,
    FiShield,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
    const { id } = useParams();

    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");
    const navigation = useNavigate();

    const fetchProductDetails = async () => {
        try {
            setLoading(true);

            const result = await getProductById({ id });

            if (result.success) {
                setProductDetails(result.data);
                setSelectedImage(
                    result.data.images?.[0] || result.data.thumbnail
                );
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProductDetails();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="animate-pulse">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="h-[500px] bg-gray-200 rounded-3xl"></div>

                        <div className="space-y-4">
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-32 bg-gray-200 rounded"></div>
                            <div className="h-12 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!productDetails) {
        return (
            <div className="text-center py-20 text-gray-500">
                Product not found
            </div>
        );
    }

    const originalPrice = (
        productDetails.price /
        (1 - productDetails.discountPercentage / 100)
    ).toFixed(2);

    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-4">
                {/* Product Section */}
                <button onClick={() => navigation(-1)} className="mb-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                    &larr; Back
                </button>
                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-sm">
                    {/* Left Side */}
                    <div>
                        {/* Main Image */}
                        <div className="bg-gray-100 rounded-3xl overflow-hidden">
                            <img
                                src={selectedImage}
                                alt={productDetails.title}
                                className="w-full h-[500px] object-contain"
                            />
                        </div>

                        {/* Gallery */}
                        {productDetails.images?.length > 1 && (
                            <div className="flex gap-3 mt-4">
                                {productDetails.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${selectedImage === img
                                            ? "border-black"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-center">
                        {/* Category */}
                        <span className="inline-block w-fit px-3 py-1 bg-black text-white text-sm rounded-full">
                            {productDetails.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl font-bold mt-4">
                            {productDetails.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={
                                            index < Math.round(productDetails.rating)
                                                ? ""
                                                : "opacity-30"
                                        }
                                    />
                                ))}
                            </div>

                            <span className="text-gray-600">
                                {productDetails.rating} Rating
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-6 flex items-center gap-4">
                            <span className="text-4xl font-bold">
                                ${productDetails.price}
                            </span>

                            <span className="text-gray-400 line-through">
                                ${originalPrice}
                            </span>

                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                                {productDetails.discountPercentage}% OFF
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mt-6 leading-relaxed">
                            {productDetails.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {productDetails.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Stock */}
                        <div className="mt-6">
                            <span
                                className={`px-4 py-2 rounded-full text-sm font-medium ${productDetails.stock > 0
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {productDetails.availabilityStatus}
                            </span>

                            <span className="ml-3 text-gray-500">
                                {productDetails.stock} units available
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <button className="flex items-center justify-center gap-2 bg-black text-white py-4 rounded-2xl font-medium hover:opacity-90 transition">
                                <FiShoppingCart />
                                Add To Cart
                            </button>

                            <button className="border border-black py-4 rounded-2xl font-medium hover:bg-black hover:text-white transition">
                                Buy Now
                            </button>
                        </div>

                        {/* Trust Section */}
                        <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-6">
                            <div className="text-center">
                                <FiTruck className="mx-auto text-xl" />
                                <p className="text-xs mt-2">Fast Shipping</p>
                            </div>

                            <div className="text-center">
                                <FiRefreshCcw className="mx-auto text-xl" />
                                <p className="text-xs mt-2">Easy Returns</p>
                            </div>

                            <div className="text-center">
                                <FiShield className="mx-auto text-xl" />
                                <p className="text-xs mt-2">Secure Payment</p>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="mt-8 border-t pt-6 space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Brand</span>
                                <span>{productDetails.brand}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">SKU</span>
                                <span>{productDetails.sku}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Warranty</span>
                                <span>{productDetails.warrantyInformation}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Shipping</span>
                                <span>{productDetails.shippingInformation}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Return Policy</span>
                                <span>{productDetails.returnPolicy}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Minimum Order
                                </span>
                                <span>
                                    {productDetails.minimumOrderQuantity}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                {/* Reviews Section */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold">
                                Customer Reviews
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {productDetails.reviews?.length || 0} verified reviews
                            </p>
                        </div>

                        <div className="text-right">
                            <div className="text-4xl font-bold">
                                {productDetails.rating}
                            </div>

                            <div className="flex justify-end text-amber-400 mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={
                                            index < Math.round(productDetails.rating)
                                                ? ""
                                                : "opacity-20"
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {productDetails.reviews?.map((review, index) => (
                            <div
                                key={index}
                                className="pb-8 border-b border-gray-100 last:border-0"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Avatar */}
                                    <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center font-semibold shrink-0">
                                        {review.reviewerName.charAt(0)}
                                    </div>

                                    <div className="flex-1">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {review.reviewerName}
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    Verified Buyer
                                                </p>
                                            </div>

                                            <div className="text-sm text-gray-400">
                                                {new Date(
                                                    review.date
                                                ).toLocaleDateString()}
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex text-amber-400 mt-3">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={
                                                        i < review.rating
                                                            ? ""
                                                            : "opacity-20"
                                                    }
                                                />
                                            ))}
                                        </div>

                                        {/* Comment */}
                                        <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                                            {review.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;