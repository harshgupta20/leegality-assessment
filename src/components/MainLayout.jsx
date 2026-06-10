import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <nav className='w-full bg-gray-200 flex items-center'>
                    <Navbar />
                </nav>

                <div>
                    {children}
                </div>
            </div>

            <footer className='w-full bg-gray-200 p-4 text-center'>
                <p>&copy; 2023 Leegality Shoppers Stop. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default MainLayout