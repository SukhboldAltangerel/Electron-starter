import Home from 'src/pages/home/home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from 'src/pages/checkout/checkout'
import Products from 'src/pages/products/products'

export default function EntryRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/products" element={<Products />} />
      </Routes>
   )
}
