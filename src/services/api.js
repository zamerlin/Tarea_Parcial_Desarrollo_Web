//api//
const BASE = 'https://api.escuelajs.co/api/v1'

export async function getProducts(){
  const res = await fetch(`${BASE}/products`)
  if(!res.ok) throw new Error('Error fetching products')
  return res.json()
}

export async function getCategories(){
  const res = await fetch(`${BASE}/categories`)
  if(!res.ok) throw new Error('Error fetching categories')
  return res.json()
}

export async function getProductById(id){
  const res = await fetch(`${BASE}/products/${id}`)
  if(!res.ok) throw new Error('Not found')
  return res.json()
}
