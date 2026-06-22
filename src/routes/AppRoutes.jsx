import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
//rutas de la aplicacion//
export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productos" element={<Products/>} />
      <Route path="/producto/:id" element={<ProductDetail/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Register/>} />
      <Route path="/carrito" element={<Cart/>} />
      <Route path="/perfil" element={<Profile/>} />
      <Route path="/contacto" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
