import React from 'react'

const LeftSidebar = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Filters</h2>
            <div className='mb-4'>
                <label className='block mb-2'>Category</label>
                <select className='w-full border border-gray-300 rounded-md p-2'>
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                </select>
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Price Range</label>
                <select className='w-full border border-gray-300 rounded-md p-2'>
                    <option value="">All Prices</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                </select>
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Brand</label>
                <select className='w-full border border-gray-300 rounded-md p-2'>
                    <option value="">All Brands</option>
                    <option value="brand1">Brand 1</option>
                    <option value="brand2">Brand 2</option>
                </select>
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Rating</label>
                <select className='w-full border border-gray-300 rounded-md p-2'>
                    <option value="">All Ratings</option>
                    <option value="4-5">4 Stars & Up</option>
                    <option value="3-4">3 Stars & Up</option>
                </select>
            </div>
        </div>
    )
}

export default LeftSidebar