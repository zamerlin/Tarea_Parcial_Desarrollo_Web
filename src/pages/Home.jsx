import React from 'react'
import { Typography, Grid } from '@mui/material'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
//pagina hogar//
export default function Home(){
  const {products, loading} = useProducts({limit:8})
  return (
    <div>
      <Typography variant="h4" gutterBottom>Bienvenido a la Tienda Magica</Typography>
      {loading && <Typography>Cargando...</Typography>}
      <Grid container spacing={2}>
        {products.map(p=> (
          <Grid item xs={12} sm={6} md={3} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
