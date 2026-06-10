import React from 'react'

const Navbar = () => {

    const menuOptions = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        { name: 'My Cart', link: '/cart' },
    ]

    return (
        <div className='w-full flex items-center justify-between p-4'>
            <p>Leegality Shoppers Stop</p>

            <input className='border border-gray-800 w-1/3 rounded-md py-1 px-2 outline-none' type="text" placeholder='Search...' name="search" id="" />

            <ul className='flex space-x-4'>
                {menuOptions.map((option, index) => (
                    <li key={index}>
                        <a href={option.link}>{option.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar