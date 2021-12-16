import Home from 'src/pages/home/home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from '../pages/checkout/checkout'

export default function EntryRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/checkout" element={<Checkout />} />
      </Routes>
   )
}
