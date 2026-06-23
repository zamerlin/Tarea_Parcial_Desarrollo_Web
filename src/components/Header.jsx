import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'
//header de la pagina(lo de arriba del todo *donde los botones*)//
export default function Header(){
  const { user, logout } = useContext(UserContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <AppBar position="static" sx={{backgroundColor: '#2e7d32'}}>
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{flexGrow:1,color:'inherit',textDecoration:'none'}}>
          Tienda Magica
        </Typography>
        <Box sx={{display:'flex',gap:1}}>
          <Button color="inherit" component={RouterLink} to="/">HOME</Button>
          <Button color="inherit" component={RouterLink} to="/productos">PRODUCTOS</Button>
          <Button color="inherit" component={RouterLink} to="/contacto">CONTACTANOS</Button>
          
          {!user && (
            <>
              <Button color="inherit" component={RouterLink} to="/login">LOGIN</Button>
              <Button color="inherit" component={RouterLink} to="/registro">REGISTRO</Button>
            </>
          )}

          {user && (
            <>
              <Button color="inherit" component={RouterLink} to="/perfil">PERFIL</Button>
              <Button color="inherit" onClick={handleLogout}>SALIR</Button>
            </>
          )}

          <Button color="inherit" component={RouterLink} to="/carrito">
            <Badge badgeContent={cart ? cart.reduce((s,i)=> s + (i.quantity||1), 0) : 0} color="secondary">
              CARRITO
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
