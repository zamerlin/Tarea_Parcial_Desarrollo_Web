import React, {useContext} from 'react'
import { CartContext } from '../contexts/CartContext'
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material'
//pagina del carrito//
export default function Cart(){
  const { cart, removeProduct, clearCart, total } = useContext(CartContext)

  return (
    <div>
      <Typography variant="h5">Carrito</Typography>
      <List>
        {cart.map(item=> (
          <ListItem key={item.id} secondaryAction={<Button onClick={()=>removeProduct(item.id)}>Eliminar</Button>}>
            <ListItemText primary={item.title} secondary={`Cantidad: ${item.quantity} - $${item.price * item.quantity}`} />
          </ListItem>
        ))}
      </List>
      <Typography sx={{mt:2}}>Total: ${total()}</Typography>
      <Button variant="outlined" sx={{mt:2}} onClick={clearCart}>Vaciar carrito</Button>
    </div>
  )
}
