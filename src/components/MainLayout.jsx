import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <nav className='w-full bg-gray-200 flex items-center'>
                    <Navbar />
                </nav>
                <div className='bg-gray-50'>
                    <div className='container bg-gray-50  mx-auto py-4'>
                        {children}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default MainLayout