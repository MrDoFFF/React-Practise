import React from 'react'
import NavBar from './assets/pages/NavBar'
import AddProduct from './assets/pages/AddProduct'
import EditProduct from './assets/pages/EditProduct'
import ProductDetail from './assets/pages/ProductDetailPage'
import Products from './assets/pages/Products'
import HomePage from './assets/pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPage from './assets/pages/NoPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage/>} />
            <Route path="products" element={<Products />} />
            </Route>
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="editproduct" element={<EditProduct />} />
            <Route path="addproduct" element={<AddProduct />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
