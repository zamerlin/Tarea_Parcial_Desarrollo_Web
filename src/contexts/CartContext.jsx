import React, { createContext, useState } from 'react'

export const CartContext = createContext()
//contexto del carrito//
export function CartProvider({children}){
  const [cart, setCart] = useState([])

  function addProduct(p){
    setCart(prev=>{
      const exists = prev.find(i=>i.id===p.id)
      if(exists){
        return prev.map(i=> i.id===p.id ? {...i, quantity: i.quantity+1} : i)
      }
      return [...prev, {...p, quantity:1}]
    })
  }

  function removeProduct(id){
    setCart(prev=> prev.filter(i=> i.id !== id))
  }

  function clearCart(){ setCart([]) }

  function total(){ return cart.reduce((s,i)=> s + i.price * i.quantity, 0) }

  return (
    <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart, total}}>
      {children}
    </CartContext.Provider>
  )
}
