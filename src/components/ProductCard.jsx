import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
//tarjeta de producto(encapsulación)//
export default function ProductCard({product}){
  return (
    <Card>
      <CardMedia component="img" height="160" image={product.image} alt={product.title} />
      <CardContent>
        <Typography variant="subtitle1" noWrap>{product.title}</Typography>
        <Typography variant="caption" color="text.secondary">Género: {product.category?.name || product.category?.slug || 'Sin género'}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt:1}}>${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={RouterLink} to={`/producto/${product.id}`}>Ver detalle</Button>
      </CardActions>
    </Card>
  )
}
