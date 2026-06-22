import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'
import { Typography } from '@mui/material'
//pagina de perfil//
export default function Profile(){
  const { user } = useContext(UserContext)
  const { cart } = useContext(CartContext)

  if(!user){
    return <Navigate to="/login" state={{ message: 'Necesitas iniciar sesión para ver el perfil' }} replace />
  }

  return (
    <div>
      <Typography variant="h5">{user.name || 'Usuario'}</Typography>
      <Typography>{user.email}</Typography>
      <Typography sx={{mt:2}}>Productos en carrito: {cart.length}</Typography>
    </div>
  )
}
