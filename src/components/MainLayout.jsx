import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <nav className='w-full bg-gray-200 flex items-center'>
            <Navbar />
        </nav>
        {children}
    </div>
  )
}

export default MainLayout