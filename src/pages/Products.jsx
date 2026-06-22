import React, {useState,useEffect} from 'react'
import { Grid, TextField, MenuItem, CircularProgress } from '@mui/material'
import useProducts from '../hooks/useProducts'
import useCategories from '../hooks/useCategories'
import ProductCard from '../components/ProductCard'
//pagina de productos//
export default function Products(){
  const {products, loading, error, refetch} = useProducts()
  const {categories} = useCategories()
  const [query,setQuery] = useState('')
  const [cat,setCat] = useState('')

  const filtered = products.filter(p => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
    const productGenre = p.category?.name || p.category?.slug || ''
    const matchesCategory = cat ? productGenre === cat : true
    return matchesQuery && matchesCategory
  })

  if(loading) return <CircularProgress />
  if(error) return <div>Error cargando productos</div>

  return (
    <div>
      <Grid container spacing={2} sx={{mb:2}}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Buscar" value={query} onChange={(e)=>setQuery(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField select fullWidth label="Géneros" value={cat} onChange={(e)=>setCat(e.target.value)}>
            <MenuItem value="">Todos</MenuItem>
            {categories.map(c=> <MenuItem key={c} value={c}>{c}</MenuItem>)}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filtered.map(p=> (
          <Grid item xs={12} sm={6} md={3} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
