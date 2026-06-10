import React from 'react'
import { useNavigate } from 'react-router';

const ProductDetailsCard = ({ productId, productThumbnail, productTitle, productPrice }) => {

    const navigate = useNavigate();

    const productCardClick = () => {
        navigate(`/products/${productId}`);
    }

    const productAddToCartClick = (e) => {
        e.stopPropagation();
        // Add to cart logic here
    }

    return (
        <div key={productId} onClick={productCardClick} className='border border-gray-300 rounded-md p-4 hover:transform hover:scale-102 transition-transform duration-300 hover:bg-blue-50 cursor-pointer'>
            <img src={productThumbnail} alt={productTitle} className='w-full h-48 object-cover mb-4' />
            <h3 className='text-lg font-semibold mb-2'>{productTitle}</h3>
            <p className='text-gray-600 mb-2'>${productPrice}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={productAddToCartClick}>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductDetailsCard