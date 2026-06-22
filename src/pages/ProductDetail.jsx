import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Button, Grid, Box } from '@mui/material'
import useProducts from '../hooks/useProducts'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
//pagina de detalles de productos//
export default function ProductDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { getById, loading } = useProducts()
  const { addProduct } = useContext(CartContext)
  const product = getById(Number(id))

  if(loading) return <Typography>Cargando...</Typography>
  if(!product) return <Typography>Producto no encontrado</Typography>

  return (
    <Box>
      <Grid container spacing={2} sx={{mb:3}}>
        <Grid item>
          <Button variant="outlined" onClick={()=>navigate(-1)}>
            Atrás
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>addProduct(product)}>
            Agregar al carrito
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={product.image} alt={product.title} style={{width:'100%'}} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="subtitle1">Géneros: {product.category?.name || product.category?.slug || 'Sin categoría'}</Typography>
          <Typography sx={{mt:2}}>${product.price}</Typography>
          <Typography sx={{mt:2}}>{product.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
