import { useEffect, useState } from 'react'
import { getProducts } from '../services/api'
import animeProducts from '../data/animeProducts'
//hook para obtener productos//
export default function useProducts(opts={}){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const assets = import.meta.glob('../assets/*.{jpg,png}', { eager: true, as: 'url' })
  const animeImages = Object.entries(assets)
    .map(([path, url]) => ({ path, url }))
    .sort((a,b) => a.path.localeCompare(b.path))

  useEffect(()=>{
    setLoading(true)
    getProducts().then(data=>{
      const usedKeys = new Set()
      const list = (data || []).reduce((acc, product, index)=>{
        const animeIndex = index % animeProducts.length
        const anime = animeProducts[animeIndex]
        if(usedKeys.has(anime.key)) return acc
        usedKeys.add(anime.key)
        const imageEntry = animeImages.find(img => img.path.includes(anime.key))
        acc.push({
          ...product,
          title: anime.title,
          image: imageEntry?.url || product.images?.[0] || product.image,
          price: anime.price,
          category: { name: anime.genre },
          description: anime.description
        })
        return acc
      }, [])
      setProducts(list)
      setLoading(false)
    }).catch(err=>{
      setError(err)
      setLoading(false)
    })
  },[])

  function getById(id){
    return products.find(p=> p.id===id)
  }

  if(opts.limit) return {products: products.slice(0,opts.limit), loading, error, refetch: ()=>{}}
  return {products, loading, error, getById, refetch: ()=>{}}
}
