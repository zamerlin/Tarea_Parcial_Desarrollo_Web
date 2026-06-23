import React, { createContext, useState } from 'react'
import { Snackbar, Alert } from '@mui/material'

export const CartContext = createContext()
//contexto del carrito//
export function CartProvider({children}){
  const [cart, setCart] = useState([])
  const [notif, setNotif] = useState({open:false, message:'', severity:'success'})

  function addProduct(p){
    setCart(prev=>{
      const exists = prev.find(i=>i.id===p.id)
      if(exists){
        setNotif({open:true, message:`Se añadió ${p.title} al carrito`, severity:'success'})
        return prev.map(i=> i.id===p.id ? {...i, quantity: i.quantity+1} : i)
      }
      setNotif({open:true, message:`Se añadió ${p.title} al carrito`, severity:'success'})
      return [...prev, {...p, quantity:1}]
    })
  }

  function removeProduct(id){
    setCart(prev=> prev.filter(i=> i.id !== id))
  }

  function clearCart(){ setCart([]) }

  function total(){ return cart.reduce((s,i)=> s + i.price * i.quantity, 0) }

  const closeNotif = () => setNotif(prev=> ({...prev, open:false}))
  //notificación//
  return (
    <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart, total}}>
      {children}
      <Snackbar open={notif.open} autoHideDuration={2000} onClose={closeNotif} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
        <Alert onClose={closeNotif} severity={notif.severity} sx={{width:'100%'}}>
          {notif.message}
        </Alert>
      </Snackbar>
    </CartContext.Provider>
  )
}
