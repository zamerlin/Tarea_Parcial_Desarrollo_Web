import { useEffect, useState } from 'react'
import animeProducts from '../data/animeProducts'
//hook para obtener categorias//
export default function useCategories(){
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    const uniqueGenres = [...new Set(animeProducts.map(item => item.genre))]
    setCategories(uniqueGenres)
  },[])

  return {categories}
}
