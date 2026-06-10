import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <nav className='w-full bg-gray-200 flex items-center'>
                    <Navbar />
                </nav>

                <div className='container mx-auto py-4'>
                    {children}
                </div>
            </div>

            <footer className='w-full bg-gray-200 p-4 text-center'>
                <p>&copy; {new Date().getFullYear()} Leegality Shoppers Stop.</p>
            </footer>
        </div>
    )
}

export default MainLayout