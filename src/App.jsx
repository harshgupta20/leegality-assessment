import React from 'react'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Products from './pages/Products'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </MainLayout>
  )
}

export default App